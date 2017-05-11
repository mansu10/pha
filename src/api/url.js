// public urls
const HOST = "http://121.42.182.179:8080/FieldMedicine-0.0.1"

module.exports = {
	login: HOST + '/user/login.action',
	register: HOST + '/user/addUser.action',
	supplyAgency: `${HOST}/supplyAgency/queryAllSupplyAgencys.action`,
	demandAgency: `${HOST}/demandAgency/queryAllDemandAgencys.action`
}