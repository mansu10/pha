// import { fetchItemById } from '../../api'
import * as types from '../../mutation-types'
export const STORAGE_KEY = 'todos-vuejs'
// initial state
const state = {
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

const getters = {
	// 两种写法之一
  	todos: (state) => {
  		return state.todos
  	}/*,
  	allChercked: state => {
  		return state.todos.every(todo => todo.done)
  	}*/
}
const actions = {
	// GET_ALL_TODOS ({ commit }) {
	// 	return fetchItemById (id)
	// 		.then(doneCallbacks, failCallbacks)
	// },
	addTodo ({ commit }, text) {
		commit(types.ADD_TODO,  text )
	},
	toggleTodo ({ commit }, todo) {
		commit(types.TOGGLE_TODO, todo)
	},
	editTodo ({ commit }, {todo, value}) {
		commit(types.EDIT_TODO, {todo, value})
	},
	deleteTodo ({ commit }, {todo}) {
		commit(types.DELETE_TODO, {todo})
	},
	toggleAll ({ commit }, { done }) {
		commit(types.TOGGLE_ALL, {done})
	},
	clearCompleted ({ commit }) {
		commit(types.CLEAR_COMPLETED)
	}
}
const mutations = {
	// 两种写法之二
  [types.ADD_TODO] (state, {text}) {//解构处理
    state.todos.push({
    	text,
    	done: false
    })
  },
  [types.EDIT_TODO] (state, {todo, value}) {
  	todo.text = value
  },

  [types.TOGGLE_TODO] (state, { todo }) {
    todo.done = !todo.done
  },

  [types.DELETE_TODO] (state, { todo, value }) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  [types.TOGGLE_ALL] (state, { done }) {
    state.todos.forEach((todo) => {
      todo.done = done
    })
  },
  [types.CLEAR_COMPLETED] (state) {
  	state.todos = state.todos.filter(todo => !todo.done)
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}