import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
	name: 'home',
	path: '/'

},{
	name: 'foo',
	path: '/foo',
	component: resolve => require(['./views/foo.vue'], resolve)
},{
	name: 'bar',
	path: '/bar',
	component: resolve => require(['./views/bar.vue'], resolve)
}]

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

export default router