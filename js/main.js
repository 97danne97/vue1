Vue.use(VueRouter)
const Main = window.httpVueLoader('components/Main.vue')
const Riksdagen = window.httpVueLoader('components/Riksdagen.vue')
const Navbar = window.httpVueLoader('components/default/Navbar.vue')
const Drawer = window.httpVueLoader('components/default/Drawer.vue')
const Footer1 = window.httpVueLoader('components/default/Footer1.vue')
const Ledamot = window.httpVueLoader('components/Ledamot.vue')


Vue.use(Vue2Filters)

const router = new VueRouter({
    mode: 'hash',
    base:'/',
    routes: [
        {
            path: '/riksdagen',
            component: Riksdagen,
            alias: '/',
            /* children:[
                {
                    path: '/ledamot/:id',
                    component: Ledamot,
                },
            ] */
        },
        {
            path: '/ledamot/:id',
            component:Ledamot
        }
        
    ]
})

new Vue({
    router,
    el: '#app',
    components: {
        Main
    },
    template: '<Main></Main>'
})