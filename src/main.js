import Vue from 'vue'
import store from './store'
// import { sync } from 'vuex-router-sync'
import router from './routers'
import VueResource from 'vue-resource'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import * as filters from './filters'

Vue.use(VueResource)
// sync the router with the vuex store.
// this registers `store.state.route`
// sync(store, router)

Vue.use(ElementUI)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

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
    store, //注入组件，可以在全局使用$调用
    template: '<App/>',//相当于将App组件挂在到index.html中的#app id上
    components: {
        App
    }
})
// export { app, router, store }