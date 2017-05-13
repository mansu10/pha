// public urls
const HOST = "http://121.42.182.179:8080/FieldMedicine-0.0.1"

module.exports = {
	/* 用户中心 */
	login: `${HOST}/user/login.action`,
	register: `${HOST}/user/addUser.action`,
	/* 机构管理 */
	supplyAgency: `${HOST}/supplyAgency/queryAllSupplyAgencys.action`,
	addSupply: `${HOST}/supplyAgency/addSupplyAgency.action`,
	demandAgency: `${HOST}/demandAgency/queryAllDemandAgencys.action`,
	addDemand: `${HOST}/demandAgency/addDemandAgency.action`,
	updateDemand: `${HOST}/demandAgency/updateDemandAgency.action`
}