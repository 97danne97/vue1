const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/vue1/', component: Home },
        { path: '/vue1/foo/', component: Foo }
    ]
})