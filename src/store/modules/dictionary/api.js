import Vue from 'vue'
import _ from 'lodash'
import * as url from 'src/api/url'
import {createBody} from 'src/api/api'

export function fetchDictionary(data){
	let obj = createBody(url.getDictionary, data)
	return Vue.http.post(obj.url, obj.data, obj.option)
}