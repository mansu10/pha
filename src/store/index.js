import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
// import * as mutations from './mutations'
import products from './modules/products'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        products
    }
})

if (module.hot) {
    module.hot.accept([
        './getters',
        './actions',
        './mutations-types'
    ], () => {
        store.hotUpdate({
            getters: require('./getters'),
            actions: require('./actions'),
            mutations: require('./mutations-types')
        })
    })
}

export default store
