import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import routes from './routers'
import App from './App'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

const router = new VueRouter({
	routes: routes,
	scrollBehavior (to, from, savedPosition) {
	  if (savedPosition) {
	    return savedPosition
	  } else {
	    return { x: 0, y: 0 }
	  }
	}
})
window.router = router
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
