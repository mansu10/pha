import Vue from 'vue'
import _ from 'lodash'
import * as url from 'src/api/url'
import {createBody} from 'src/api/api'

export function userLogin(data){
	let obj = createBody(url.login, data);
	return Vue.http.post(obj.url, obj.data, obj.option)
}

export function	userRegister(data){
	let obj = createBody(url.register, data)
	return Vue.http.post(obj.url, obj.data, obj.option)
}	
