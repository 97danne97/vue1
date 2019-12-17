<template>
    <div>
        <Navbar></Navbar>
        <Drawer></Drawer>
        <transition name="fade">
            <router-view tag="div" class="container"></router-view>
        </transition>
        <Footer1></Footer1>
    </div>
</template>
<script>
module.exports = {
    components: {
        Navbar,
        Drawer,
        Footer1
    }
};
</script>
<style scoped>

/* fade-animation för element i <transition>-taggar (router-views) */
.fade-enter-active,
.fade-leave-active {
    transition: 0.2s ease;
}

.fade-enter-active {
    transition-delay: 0.2s;
    transform-origin: top left;
    height: 0;
}

.fade-enter {
    opacity: 0;
    transform: translateX(-100px);
}
.fade-leave-active {
    opacity: 0;
    height: 0;
}
</style>