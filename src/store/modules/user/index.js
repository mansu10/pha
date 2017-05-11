import * as types from '../../mutation-types'
import {userLogin, userRegister} from './api'

export const state = {
    
}

const getters = {
    
}

const actions = {
    loginSubmit({ commit }, {name, pwd}) {
        console.log(userLogin)
        return userLogin({
            'user.userCode': name,
            'user.userPassword': pwd
        })
    },
    registerSubmit({ commit }, obj) {
    	console.log('submit')

        return userRegister({
            'user.userPassword': obj.pwd,
            'user.userName': obj.nick,
            'user.userCode': obj.name,
            'user.grade': obj.grade,
            'user.team': obj.team,
            'user.email': obj.email,
            'user.tel': obj.phone
        })
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
