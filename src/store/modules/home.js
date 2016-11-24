import shop from '../../api/products'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [] 
}

// getters
const getters = {
  allProducts: state => state.all
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  }
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}