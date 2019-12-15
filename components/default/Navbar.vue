<template>
    <nav>
        <div class="nav-wrapper">
            <a href="#" data-target="sidenav-1" class="sidenav-trigger left">
                <i class="material-icons">menu</i>
            </a>
            <router-link tag="a" class="brand-logo" to="/">Politiknörden</router-link>
            <ul id="nav-mobile" class="right hide-on-small-and-down">
                <li>
                    <router-link to="/">Politiknörden</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
module.exports = {
    components: {
        Drawer
    },
    mounted() { //jQuery för att skapa sidenav-instans
        $(document).ready(function() {
            $(".sidenav").sidenav();
        });
    }
};
</script>

<style scoped>
.brand-logo{
    margin-left: 10px;
}
</style>