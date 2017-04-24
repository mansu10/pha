import * as types from '../../mutation-types'

const state = {
	sideCollappsed: false,
	progressing: 60,
	isSlideActive: false,
	breadcrumb:[{
		title: 'title',
		link: 'link'
	},{
		title: 'title',
		link: 'link'
	},{
		title: 'title',
		link: 'link'
	}]
}

const getters = {
	getProgress : state => { 
		return state.progressing
	},
	isSlideActive : (state) => {
		return state.isSlideActive
	},
	getBreadcrumb: state => {
		return state.breadcrumb
	}
}

const actions = {

}

const mutations = {
	[types.SET_PROGRESS](state, playload) {
		state.progressing = playload.val
	},
	[types.TOGGLE_STATE](state, {key}) {
		state[key] = !state[key]
	}
}

export default {
  state,
  getters,
  actions,
  mutations
}