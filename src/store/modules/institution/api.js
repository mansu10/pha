import Vue from 'vue'
import _ from 'lodash'
import * as url from 'src/api/url'
import {createBody} from 'src/api/api'

/* 供应机构 */
export function fetchSupplement(data){

	let obj = createBody(url.supplyAgency, data)
	
	return Vue.http.post(obj.url, obj.data, obj.option)
}

export function addSupply(data){
	let obj = createBody(url.addSupply, data)

	return Vue.http.post(obj.url, obj.data, obj.option)
}

export function updateSupply(data){
	let obj = createBody(url.updateSupply, data)

	return Vue.http.post(obj.url, obj.data, obj.option)
}

export function deleteSupply(data){
	let obj = createBody(url.deleteSupply, data)

	return Vue.http.post(obj.url, obj.data, obj.option)
}
/* 需求机构 */
export function fetchDemand(data){

	let obj = createBody(url.demandAgency, data)

	return Vue.http.post(obj.url, obj.data, obj.option)
}

export function addDemand(data){
	let obj = createBody(url.addDemand, data)

	return Vue.http.post(obj.url, obj.data, obj.option)
}

export function updateDemand(data){
	let obj = createBody(url.updateDemand, data)

	return Vue.http.post(obj.url, obj.data, obj.option)
}
export function deleteDemand(data){
	let obj = createBody(url.deleteDemand, data)

	return Vue.http.post(obj.url, obj.data, obj.option)
}