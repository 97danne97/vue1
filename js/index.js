const Home = window.httpVueLoader('js/components/Home.vue')
const Foo = window.httpVueLoader('js/components/Foo.vue')

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/foo', component: Foo }
    ]
})

const app = new Vue({
    router
  }).$mount('#app')

