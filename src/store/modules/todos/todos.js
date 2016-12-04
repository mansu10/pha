import { fetchItemById } from '../../api'
import * as types from '../../mutation-types'
export const STORAGE_KEY = 'todos-vuejs'
// initial state
const state = {
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

const getters = {
  
}
const actions = {
	GET_ALL_TODOS ({ commit }) {
		return fetchItemById (id)
			.then(doneCallbacks, failCallbacks)
	}
}
const mutations = {
  [types.EDIT_TODO] (state, { todo }) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  [types.TOGGLE_TODO] (state, { todo }) {
    todo.done = !todo.done
  },

  [types.DELETE_TODO] (state, { todo, value }) {
    todo.text = value
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}