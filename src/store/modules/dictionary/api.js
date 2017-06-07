import Vue from 'vue'
import _ from 'lodash'
import * as url from 'src/api/url'
import {createBody} from 'src/api/api'

export function fetchDictionary(data){
	let obj = createBody(url.getDictionary, data)
	return Vue.http.post(obj.url, obj.data, obj.option)
}
export function addDictionary(data){
	let obj = createBody(url.addDictionary, data)
	return Vue.http.post(obj.url, obj.data, obj.option)
}
export function updateDictionary(data){
	let obj = createBody(url.updateDictionary, data)
	return Vue.http.post(obj.url, obj.data, obj.option)
}
export function deleteDictionary(data){
	let obj = createBody(url.deleteDictionary, data)
	return Vue.http.post(obj.url, obj.data, obj.option)
}