import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import cart from './modules/cart/cart'
import products from './modules/cart/products'
import todos from './modules/todos/todos'
import global from './modules/global/global'
import plugins from './plugins'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    getters,
    actions,
    modules: {
        cart,
        products,
        todos,
        global
    },
    plugins
})

if (module.hot) {
    module.hot.accept([
        './getters',
        './actions',
        './mutation-types'
    ], () => {
        store.hotUpdate({
            getters: require('./getters'),
            actions: require('./actions'),
            mutations: require('./mutation-types')
        })
    })
}

export default store
