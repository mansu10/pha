import shop from '../../../api/products'
import * as types from '../../mutation-types'

// initial state
const state = {
  all: [] 
}

// getters 一种计算属性，从state中获取状态并计算导出接口
/**
 * 局部使用方式，在具体业务vue中
 * 导入{ mapGetters }
 * 使用对象展开运算符将 getters 混入 computed 对象中
 * ...mapGetters([
 * 'doneTodosCount',
 * 'anotherGetter'
 *  ])
 * @type {Object}
 */
const getters = {
  allProducts: (state, getters, rootState) => state.all
}
// const getters = {
//   allProducts: state => state.all
// }

// actions 用来提交mutation
// 可以写promise 异步
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  },
  addToCart({ commit }, product) {
    if (product.inventory > 0) {
      commit(types.ADD_TO_CART, {
        id: product.id
      })
    }
  }
}

// mutations
/**
 * 用来操作state
 * 提交mutation来更改状态
 * 使用commit提交 //
 * 使用常量作为函数名
 * 也就是说所有的函数都写成mutation
 * @type {Object}
 */
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}