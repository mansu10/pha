import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/home.vue'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home,
    // auth: true,
    children: [{
        path: 'dashboard',
        component: resolve => require(['./views/dashboard/index.vue'], resolve)
    }, {
        name: 'supply',
        path: 'institution/supply',
        component: resolve => require(['./views/institution/supply.vue'], resolve)
    },{
        name: 'supplyDetail',
        path: 'institution/supply/detail/:option',
        component: resolve => require(['./views/institution/supply-detail.vue'], resolve)
    }, {
        name: 'demand',
        path: 'institution/demand',
        component: resolve => require(['./views/institution/demand.vue'], resolve)
    }, {
        name: 'demandDetail',
        path: 'institution/demand/detail/:option',
        component: resolve => require(['./views/institution/demand-detail.vue'], resolve)
    }, {
        name: 'dictionary',
        path: 'dictionary',
        component: resolve => require(['./views/dictionary/index.vue'], resolve)
    }, {
        name: 'dictionaryDetail',
        path: 'dictionary/detail',
        component: resolve => require(['./views/dictionary/detail.vue'], resolve)
    }, {
        name: 'student',
        path: 'user/student',
        component: resolve => require(['./views/user/student.vue'], resolve)
    }]

}, {
    name: 'foo',
    path: '/foo',
    component: resolve => require(['./views/foo.vue'], resolve)
}, {
    name: 'bar',
    path: '/bar',
    component: resolve => require(['./views/cart/index.vue'], resolve)
}, {
    name: 'todos',
    path: '/todos',
    component: resolve => require(['./views/todos/index.vue'], resolve)
}, {
    name: 'login',
    path: '/login',
    component: resolve => require(['./views/user/login.vue'], resolve)
}, {
    name: 'register',
    path: '/register',
    component: resolve => require(['./views/user/register.vue'], resolve)
}]

const router = new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
router.beforeEach((to, from, next) => {

	if (to.path == '/login' || to.path == '/register') {
		next()
	}else if (!sessionStorage.getItem('pha_token')) {
        next({ path: '/login', query:{f:from}})
    } else {
        next()
    }
    // TODOS
    // {path: '/404'}
	// 来的路径为login
    // f路径为login
		

})
export default router
