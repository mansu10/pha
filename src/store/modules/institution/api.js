import Vue from 'vue'
import _ from 'lodash'
import * as url from 'src/api/url'
import {createBody} from 'src/api/api'

export function fetchSupplement(data){

	let obj = createBody(url.supplyAgency, data)
	
	return Vue.http.post(obj.url, obj.data, obj.option)
}

export function addSupplement(data){
	let obj = createBody(url.addSupply, data)

	return Vue.http.post(obj.url, obj.data, obj.option)
}

export function fetchDemand(data){

	let obj = createBody(url.demandAgency, data)

	return Vue.http.post(obj.url, obj.data, obj.option)
}

export function addDemand(data){
	let obj = createBody(url.addDemand, data)

	return Vue.http.post(obj.url, obj.data, obj.option)
}