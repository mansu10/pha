import * as types from '../../mutation-types'

const state = {
	sideCollappsed: false,
	progressing: 60
}

const getters = {
	getProgress : state => { 
		return state.progressing
	}
}

const actions = {

}

const mutations = {
	[types.SET_PROGRESS](state, playload) {
		state.progressing = playload.val
	}
}

export default {
  state,
  getters,
  actions,
  mutations
}