import * as types from './types'
import * as api from './api'
import * as config from 'src/utils/config'
import { Message } from 'element-ui'

function netErr(){
	Message({
      showClose: true,
      message: config.info.netErr,
      type: 'error',
      duration: 0
    })
}
const institution = {
	state: {
		demandTable: [],
		supplyTable: [],
		isDemandLoading: false,
		isSupplyLoading: false,
		demandEditItem: {},
		isReload: false,
		queryKeyword: {
			title: '',
			cate: ''
		}
	},
	getters: {

	},
	mutations: {
		[types.SET_SUPPLY_LIST](state, data){
			state.supplyTable = data
		},
		[types.SET_DEMAND_LIST](state, data){
			state.demandTable = data
		},
		[types.SET_DEMAND_ITEM](state, data){
			state.demandEditItem = data
		},
		[types.SET_LOADING](state, playload){
			state[playload.key] = playload.val
		},
		[types.SET_TARGET_VAL](state, playload){
			state[playload.key] = playload.val
		},
		[types.SET_QUERY_KEYWORD](state, data){
			state.queryKeyword = data
		}
	},
	actions: {
		/* 获取需求机构列表 */
		fetchDemandList({commit}, obj){

			commit(types.SET_LOADING, { key:'isDemandLoading', val: true })
			commit(types.SET_TARGET_VAL, { key: 'isReload', val: false })

			api.fetchDemand({

				'demandAgency.demandAgencyName': obj.title || '',
				'demandAgency.demandAgencyType': obj.cate || ''
		 
		 	}).then((res)=>{
		
				commit(types.SET_LOADING, { key:'isDemandLoading', val: false })
		
				let data = res.data
		
				if (data.success) {
		
					commit(types.SET_DEMAND_LIST, data.demandAgencies)
		
				}
						
			}, (err)=>{
			
				commit(types.SET_LOADING, { key:'isDemandLoading', val: false })
			
				netErr()
			
			})
		},
		/* 新增/修改需求机构 */
		modifyDemand({commit}, {obj, isEdit} ){

			commit(types.SET_TARGET_VAL, { key: 'isReload', val: true })

			let req = {
				'demandAgency.demandAgencyCode': obj.code,
				'demandAgency.demandAgencyName': obj.name,
				'demandAgency.demandAgencyType': obj.type,
				'demandAgency.demandAgencyLevel': obj.level,
				'demandAgency.demandAgencyAddress1': obj.addr1,
				'demandAgency.demandAgencyAddress2': obj.addr2,
				'demandAgency.demandAgencyCoordinate': obj.coordinate,
				'demandAgency.demandAgencyNumber': obj.number,
				'demandAgency.demandAgencyProtect': obj.protect,
				'demandAgency.contacts': obj.contact,
				'demandAgency.tel': obj.tel
			}
			// demandAgency.province
			// demandAgency.city
			// demandAgency.district
			// demandAgency.zipCode
			// demandAgency.updateOperatorId
			if (isEdit) {
				req['demandAgency.id'] = obj.id
				return api.updateDemand(req)
			}else{
				return api.addDemand(req)
			}
		},
		/* 删除需求机构 */
		deleteDemand({commit}, arr){
			console.log(arr)
			commit(types.SET_TARGET_VAL, { key: 'isReload', val: true })
			return api.deleteDemand({
				'ids': Object.assign({},arr)
			})
		},
		/* 获取供应机构列表 */
		fetchSupplyList({commit}, obj){

			commit(types.SET_LOADING, { key:'isSupplyLoading', val: true })
			commit(types.SET_TARGET_VAL, { key: 'isReload', val: false })
			api.fetchSupplement({

				'supplyAgency.supplyAgencyName': obj.title || '',

				'supplyAgency.supplyAgencyType': obj.cate || ''

			}).then((res)=>{

				commit(types.SET_LOADING, { key:'isSupplyLoading', val: false })

				let data = res.data

				// console.log(data)

				if (data.success) {

					commit(types.SET_SUPPLY_LIST, data.SupplyAgencies)

				}
			}, (err)=>{

				commit(types.SET_LOADING, { key:'isSupplyLoading', val: false })

				netErr()

			})
		},
		modifySupply({commit}, {obj, tbl, isEdit}){

			commit(types.SET_TARGET_VAL, { key: 'isReload', val: true })

			let req = {
				'supplyAgency.supplyAgencyCode': obj.code,
				'supplyAgency.supplyAgencyName': obj.name,
				'supplyAgency.supplyAgencyType': obj.type,
				'supplyAgency.supplyAgencyLevel': obj.level,
				'supplyAgency.supplyAgencyAddress1': obj.addr1,
				'supplyAgency.supplyAgencyAddress2': obj.addr2,
				'supplyAgency.supplyAgencyCoordinate': obj.coordinate,
				'supplyAgency.supplyAgencyNumber': obj.number,
				'supplyAgencyJobsStr': JSON.stringify(tbl)
			}
			
			if (isEdit) {
				req['supplyAgency.id'] = obj.id
				return api.updateSupply(req)
			}else{
				return api.addSupply(req)
			}
		},
		deleteSupply({commit}, arr){
			commit(types.SET_TARGET_VAL, { key: 'isReload', val: true })
			return api.deleteSupply({
				'ids': Object.assign({},arr)
			})
		}
	}
}

export default institution