<template>
    <div class="ledamot_profile">
        <header class="section">
            <div class="row">
                <div class="col s1 left-align">
                    <router-link
                        to="/riksdagen"
                        class="btn-floating btn-medium brown lighten-1 waves-effect"
                    >
                        <i class="material-icons">arrow_back</i>
                    </router-link>
                </div>
            </div>
        </header>
        <main class="container">
            <div class="card grey lighten-4 z-depth-2 hoverable">
                <div class="card-content row">
                    <div class="col s12 m5 center">
                        <img
                            class="center z-depth-1"
                            id="ledamot_image"
                            v-bind:src="ledamot.bild_url_192"
                        />
                    </div>
                    <div class="col s12 m6 offset-m1">
                        <div class="row">
                            <h5>
                                {{ledamot.tilltalsnamn}} {{ledamot.efternamn}}
                                <strong>({{ledamot.parti}})</strong>
                            </h5>
                            <div class="divider"></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            ledamot: null
        };
    },
    mounted() {
        //GET-request till API, lagrar svar i info
        axios
            .get(
                "https://data.riksdagen.se/personlista/?iid=" +
                    this.$route.params.id +
                    "&utformat=json"
            )
            .then(res => (this.ledamot = res.data.personlista.person));
    }
};
</script>

<style scoped>
.ledamot_profile {
    min-height: 100vh;
}
</style>