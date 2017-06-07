import * as types from './types'
import * as api from './api'
import * as config from 'src/utils/config'
import { Message } from 'element-ui'

const dictionary = {
	state: {
		dictionaryTable: []
	},
	mutations: {
		[types.SET_DIC_ITEM](state, data){
			state.dictionaryTable = data
		}
	},
	actions: {
		fetchDictionary({commit}, obj){
			console.log('action')
			api.fetchDictionary({
				'product.productName': obj.title,
				'product.herbsType': obj.cate,
				'product.start': obj.cur,
				'product.limit': obj.size
			}).then(res=>{
				let data = res.data
				if (data.code == 1) {
					commit(types.SET_DIC_ITEM, data.products)
				}else{

				}
			}, err=>{})
		},
		modifyDic({commit}, obj){

		},
		deleteDic({commit}, obj){

		}
	}
}

export default dictionary