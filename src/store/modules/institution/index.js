import * as types from './types'
import * as api from './api'
import * as config from 'src/utils/config'
import { Message } from 'element-ui'

function netErr(){
	Message({
      showClose: true,
      message: config.info.netErr,
      type: 'error'
    })
}

const institution = {
	state: {
		demandTable: [],
		supplyTable: [],
		isDemandLoading: false,
		isSupplyLoading: false
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
		[types.SET_LOADING](state, playload){
			state[playload.key] = playload.val
		}
	},
	actions: {
		fetchDemandList({commit}, obj){
			commit(types.SET_LOADING, { key:'isDemandLoading', val: true })
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
		addNewDemand({commit}, obj){
			console.log(obj)
			return;
			api.addDemand({
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

			}).then((res)=>{
				let data = res.data
				if (data.success) {
					Message({
				      showClose: true,
				      message: '保存成功',
				      type: 'success'
				    })

				}else{
					Message({
				      showClose: true,
				      message: res.msg,
				      type: 'error'
				    })
				}
			}, (err)=>{
				netErr()
			})
		},
		fetchSupplyList({commit}, obj){
			commit(types.SET_LOADING, { key:'isSupplyLoading', val: true })
			api.fetchSupplement({
				'supplyAgency.supplyAgencyName': obj.title || '',
				'supplyAgency.supplyAgencyType': obj.cate || ''
			}).then((res)=>{
				commit(types.SET_LOADING, { key:'isSupplyLoading', val: false })
				let data = res.data
				console.log(data)
				if (data.success) {
					commit(types.SET_SUPPLY_LIST, data.SupplyAgencies)
				}
			}, (err)=>{
				commit(types.SET_LOADING, { key:'isSupplyLoading', val: false })
				netErr()
			})
		}
	}
}

export default institution