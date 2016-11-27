import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import products from './modules/cart/products'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    getters,
    actions,
    modules: {
        products
    }
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
