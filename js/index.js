const Home = window.httpVueLoader('js/components/Home.vue')
const Foo = window.httpVueLoader('js/components/Foo.vue')

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/vue1/', component: Home },
        { path: '/vue1/foo', component: Foo }
    ]
})

const app = new Vue({
    router
  }).$mount('#app')

