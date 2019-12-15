<template>
    <div id="riksdag" class="col s12">
        <div class="row">
            <div class="input-field">
                <i class="material-icons prefix">search</i>
                <input
                    placeholder="Sök efter ledamöter..."
                    id="search"
                    type="text"
                    class="validate"
                    v-model="search"
                />
            </div>
        </div>
        <div class="row">
            <ul class="collapsible">
                <li>
                    <div class="collapsible-header">
                        <i class="material-icons">filter_list</i>Filter
                    </div>
                    <div class="collapsible-body">
                        <h4>Filter</h4>
                        <form>
                            <li :key="index" v-for="(checkbox, index) in checkboxOptions">
                                <label>
                                    <input
                                        type="checkbox"
                                        v-model="selectedCategory"
                                        :value="checkbox.parti"
                                    />
                                    <span>{{ checkbox.text }}</span>
                                </label>
                            </li>
                        </form>
                    </div>
                </li>
            </ul>
        </div>
        <transition name="fade">
            <div v-if="response == false" class="row center">
                <div class="preloader-wrapper big active">
                    <div class="spinner-layer spinner-blue-only">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div>
                        <div class="gap-patch">
                            <div class="circle"></div>
                        </div>
                        <div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <transition-group name="list" tag="div" class="row" id="ledamot-container">
            <div
                v-for="ledamot in filterBy(filterItems, search, 'sorteringsnamn')"
                class="col s12 m6 l4 list-item"
                v-bind:class="ledamot.parti"
                v-bind:id="ledamot.intressent_id"
                :key="ledamot.intressent_id"
            >
                <div class="col-content card hoverable ledamot">
                    <div class="card-image">
                        <img v-bind:src="ledamot.bild_url_192" alt="People" />
                    </div>
                    <div class="card-content">
                        <span class="card-title">
                            {{ledamot.tilltalsnamn}} {{ledamot.efternamn}}
                            <strong>({{ledamot.parti}})</strong>
                        </span>
                        <div class>{{ledamot.valkrets}}</div>
                    </div>
                </div>
                <!-- Modal Structure -->
            </div>
        </transition-group>
    </div>
</template>

<script>
module.exports = {
    mixins: [Vue2Filters.mixin],
    data: function() {
        return {
            data: "",
            response: false,
            checkboxOptions: [
                { text: "Miljöpartiet", parti: "MP" },
                { text: "Sverigedemokraterna", parti: "SD" },
                { text: "Vänsterpartiet", parti: "V" },
                { text: "Socialdemokraterna", parti: "S" },
                { text: "Kristdemokraterna", parti: "KD" },
                { text: "Moderaterna", parti: "M" },
                { text: "Liberalerna", parti: "L" },
                { text: "Centerpartiet", parti: "C" }
            ],
            selectedCategory: [],
            search: ""
        };
    },
    beforeCreate() {
        $(document).ready(function() {
            //Instans av kollaps-element från MaterializeCSS. Används just nu för att gömma/dölja sökfilterna
            $(".collapsible").collapsible();
        });
        $(document).ready(function() {
            $(".modal").modal();
        });
    },
    mounted() {
        //GET-request till API, lagrar svar i info
        axios
            .get("https://data.riksdagen.se/personlista/?utformat=json")
            .then(res => {
                this.onResponse(res); // Kallar på onResponse vid svar från API
            });
    },
    methods: {
        onResponse: function(res) {
            this.data = res.data.personlista.person.splice(0, 50);
            this.response = true;
        }
    },
    computed: {
        filterItems: function() {
            var vm = this;
            var category = vm.selectedCategory;

            if (category.length < 1) {
                return vm.data;
            } else {
                return vm.data.filter(person => {
                    var matchFilter = false;
                    category.forEach(entry => {
                        if (category.includes(person.parti)) {
                            matchFilter = true;
                        }
                    });
                    return matchFilter;
                });
            }
        }
    }
};
</script>

<style scoped>
#ledamot-container {
}
.ledamot > div {
    height: 150px;
}

.ledamot > div > img {
    height: 150px;
    object-fit: contain;
}
.list-item {
  transition: all .3s cubic-bezier(0.865, 0.84, 0.24, 1);
}
.list-enter, .list-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-active {
  position: absolute;
}
</style>