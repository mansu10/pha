import Vue from 'vue'
import VueResource from 'vue-resource'
// import store from './store'

import router from './routers'
import App from './App'


Vue.use(VueResource)

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
// https://github.com/lzxb/vue2-demo
const app = new Vue({
    el: '#app',
    router,
    template: '<App/>',//相当于将App组件挂在到index.html中的#app id上
    components: {
        App
    }
})
