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

export default routes