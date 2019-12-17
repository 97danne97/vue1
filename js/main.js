const Main = window.httpVueLoader('components/Main.vue')
const Riksdagen = window.httpVueLoader('components/Riksdagen.vue')
const Navbar = window.httpVueLoader('components/default/Navbar.vue')
const Drawer = window.httpVueLoader('components/default/Drawer.vue')
const Footer1 = window.httpVueLoader('components/default/Footer1.vue')

Vue.use(VueRouter)
Vue.use(Vue2Filters)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Riksdagen
        }
    ]
})

new Vue({
    router,
    el: '#app',
    components: {
        Main
    },
    template: '<Main></Main>',
})