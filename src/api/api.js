import Vue from 'vue'
import * as url from './url'

let body = {
	token: sessionStorage.getItem("token") || ''
}

function createBody(data){
	return Object.assign(body, data)
}

module.exports = {
	userLogin(data){
		let obj = createBody(data);
		return Vue.http.post(url.login, obj, {emulateJSON: true})
	}
}