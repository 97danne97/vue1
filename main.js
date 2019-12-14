const Home = window.httpVueLoader('components/Home.vue')
const Message  = window.httpVueLoader('components/Message.vue')

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/message', component: Message }
    ]
})

const app = new Vue({
    router
  }).$mount('#app')

