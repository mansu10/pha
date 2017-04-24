import * as types from '../../mutation-types'
import * as api from '../../../api/api'

export const state = {
    
}

const getters = {
    
}

const actions = {
    loginSubmit({ commit }, {name, pwd}) {
    	console.log('login')
        console.log(name)
        return api.userLogin({
            'user.userCode': name,
            'user.userPassword': pwd
        })
    },
    registerSubmit({ commit }) {
    	console.log('submit')
    }
}

const mutations = {
    [types.SET_STATE] (state, {key, val}) {
        state[key] = val
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
