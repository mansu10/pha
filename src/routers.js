import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/home.vue'

Vue.use(VueRouter)

const routes = [{
	name: 'home',
	path: '/',
	component: Home,
	// auth: true,
	children: [
		{
			path: 'dashboard',
			component: resolve => require(['./views/dashboard/index.vue'], resolve)
		}
	]

},{
	name: 'foo',
	path: '/foo',
	component: resolve => require(['./views/foo.vue'], resolve)
},{
	name: 'bar',
	path: '/bar',
	component: resolve => require(['./views/cart/index.vue'], resolve)
},{
	name: 'todos',
	path: '/todos',
	component: resolve => require(['./views/todos/index.vue'], resolve)
},{
	name: 'login',
	path: '/login',
	component: resolve => require(['./views/login.vue'], resolve)
}]

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: routes,
	scrollBehavior (to, from, savedPosition) {
	  if (savedPosition) {
	    return savedPosition
	  } else {
	    return { x: 0, y: 0 }
	  }
	}
})

export default router