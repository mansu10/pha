import Vue from 'vue'
import * as url from './url'

let body = {
	token: sessionStorage.getItem("pha_token") || ''
}

export function createBody(url, data){
	var obj = {
		url: url, 
		data: Object.assign(data, body), 
		option: {emulateJSON: true}
	}
	return obj
}
