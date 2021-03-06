import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'

import cart from './modules/cart/cart'
import products from './modules/cart/products'
import todos from './modules/todos/todos'
import global from './modules/global/global'
import user from './modules/user/index'
import institution from './modules/institution/index'
import dictionary from './modules/dictionary/index'

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
        global,
        user,
        institution,
        dictionary
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
