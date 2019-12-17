<template>
    <div class="ledamot_profile">
        <div class="row">
            <router-link to="/riksdagen" class="col s2 l1 btn-flat btn-large white">
                <i class="material-icons large">arrow_back</i>
            </router-link>
        </div>
        <div class="container">
            <div class="row">
                <h3>
                    {{ledamot.tilltalsnamn}} {{ledamot.efternamn}}
                    <strong>({{ledamot.parti}})</strong>
                </h3>
                <div class="divider"></div>
            </div>
            <div class="row">
                <div class="col s12 m4">
                    <img class="center ledamot_image" v-bind:src="ledamot.bild_url_192" />
                </div>
                <div class="col s8"></div>
            </div>
        </div>
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
.ledamot_profile .ledamot_image{
    width: 100%;
}
</style>