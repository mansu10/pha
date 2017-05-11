import * as types from './types'
import * as api from './api'

const institution = {
	state: {
		demandTable: [],
		supplyTable: []
	},
	getters: {

	},
	mutations: {
		[types.SET_SUPPLY_LIST](state, data){
			state.supplyTable = data
		}
	},
	actions: {
		fetchDemandList(){
			api.fetchDemand({

			}).then((res)=>{

			}, (err)=>{
				let data = res.data
				if (data.success) {
					
				}
			})
		},
		fetchSupplyList({commit}){
			console.log('supply')
			api.fetchSupplement({
				'supplyAgency.supplyAgencyName': '',
				'supplyAgency.supplyAgencyType': ''
			}).then((res)=>{
				let data = res.data
				console.log(data)
				if (data.success) {
					commit(types.SET_SUPPLY_LIST, data.SupplyAgencies)
				}
			}, (err)=>{

			})
		}
	}
}

export default institution