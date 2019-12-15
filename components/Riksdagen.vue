<template>
    <div id="riksdag" class="col s12">
        <div class="row">
            <ul class="collapsible">
                <li>
                    <div class="collapsible-header">
                        <i class="material-icons">filter_list</i>Filter
                    </div>
                    <div class="collapsible-body">
                        <h4>Filter</h4>
                        <form>
                            <div class="row">
                                <div class="input-field">
                                    <i class="material-icons prefix">search</i>
                                    <input id="icon_prefix" type="text" class="validate" />
                                    <label for="icon_prefix">Search</label>
                                </div>
                            </div>
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
                v-for="ledamot in data"
                class="col s12 m6 l4"
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
            </div>
        </transition-group>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            data: "",
            response: false
        };
    },
    mounted() {
        //GET-request till API, lagrar svar i info
        axios
            .get("https://data.riksdagen.se/personlista/?utformat=json")
            .then(res => {
                this.onResponse(res) // Kallar på onResponse vid svar från API
            });

        $(document).ready(function() { //Instans av kollaps-element från MaterializeCSS. Används just nu för att gömma/dölja sökfilterna
            $(".collapsible").collapsible();
        });
    },
    methods: {
        onResponse: function(res) {
            this.data = res.data.personlista.person.splice(0, 50);
            this.response = true;
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
}
.list-enter-active,
.list-leave-active {
    transition: all 0.3s ease;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(50px);
}
</style>