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
    }, {
        name: 'demand',
        path: 'institution/demand',
        component: resolve => require(['./views/institution/demand.vue'], resolve)
    }, {
        name: 'institutionDetail',
        path: 'institution/detail',
        component: resolve => require(['./views/institution/detail.vue'], resolve)
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
	if (to.fullPath == '/login' || to.fullPath == '/register') {
		next()
	}else if (!sessionStorage.getItem('pha_token')) {
        next({ path: '/login'})
    } else {
        next()
    }		
	
		

})
export default router
