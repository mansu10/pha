<template>
	<div v-loading.body="isLoading">
		<el-card>	
			<el-form label-width="85px" :inline="true" :model="formData" class="form-inline">
				<el-form-item label="机构名称">
					<el-input v-model="formData.title" placeholder="机构名称"></el-input>
				</el-form-item>
				<el-form-item label="分类">
					<el-select v-model="formData.cate" placeholder="类别">
						<el-option label="药材仓库" value="药材仓库"></el-option>
						<el-option label="药材供应站" value="药材供应站"></el-option>
						<el-option label="野战药材仓库" value="野战药材仓库"></el-option>
						<el-option label="野战药材保障队" value="野战药材保障队"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="info" size="small" @click="fetchDemandList(formData)">查询</el-button>
				</el-form-item>
			</el-form>
		</el-card>
		<el-card class="panel">
			<el-button-group>
				<el-button type="info" size="small" @click="goAddNew">新增</el-button>
				<el-button type="danger" size="small" @click="deleteItem">删除</el-button>
			</el-button-group>
		</el-card>
		<el-row>
				<el-col :span="24">
					<el-table 
						border
						:data="getPageData"
						@selection-change="selectionChange">
						<el-table-column
						  type="selection"
						  label="选择"
						  width="80">
						</el-table-column>
						<el-table-column
						  type="index"
						  label="#"
						  width="80">
						</el-table-column>
						<el-table-column  
							prop="demandAgencyType"
							label="机构类型"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="demandAgencyName"
							label="机构名称"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="demandAgencyCode"
							label="机构代码"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="demandAgencyAddress1"
							label="开设地点"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="demandAgencyNumber"
							label="机构人数"
							width="120">	
						</el-table-column>
						<el-table-column
						  fixed="right"
						  label="操作"
						  width="100">
						  <template scope="scope">
						  <el-button type="text" size="small" @click="goEdit(scope.$index, scope.row)">修改</el-button>
						    <!-- <el-button type="text" size="small" @click="goDetail">明细</el-button> -->
						    
						  </template>
						</el-table-column>
					</el-table>
				</el-col>
				<el-col v-show="getPageData.length">
					<el-pagination
					  
					  @current-change="currentChange"
					  :current-page="pageIndex+1"
					  :page-size="pageSize"
					  layout="total, prev, pager, next"
					  :total="getTotalItem">
					</el-pagination>
				</el-col>
			</el-row>
		</div>		

	</template>
<script>
	import {mapActions, mapMutations, mapState} from 'vuex'
	import Route from 'src/routers'
	import { Message } from 'element-ui'
	export default {
		data(){
			return{
				formData: {
					title: '',
					cate: ''
				},
				selectionList: [],
				pageSize: 15,
				pageIndex: 0
			}
		},
		mounted(){
			if (this.isReload) {
				let keyword = this.queryKeyword
				// this.formData = {...keyword}
				this.fetchDemandList(this.formData)
			}
			// this.fetchDemandList()
			// this.setCurrentPage()
		},
		computed: {
			...mapState({
				tableData: state => state.institution.demandTable,
				isLoading: state => state.institution.isDemandLoading,
				isReload: state => state.institution.isReload,
				queryKeyword: state => state.institution.queryKeyword
			}),
			getPageData(){
				return this.tableData.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1)*this.pageSize)
			},
			getTotalItem(){
				return this.tableData.length
			}

		},
		filters: {

		},
		methods: {
			...mapActions({
				fetchDemandList: 'fetchDemandList',
				deleteDemand: 'deleteDemand'
			}),
			...mapMutations({
				saveKeyword: 'SET_QUERY_KEYWORD'
			}),
			goDetail(){
				console.log(333)
				
			},
			goAddNew(){
				Route.push({name: 'demandDetail', params: { option: 'add' }})
			},
			goEdit(index,row){
				console.log(index)
				console.log(row)
				this.saveKeyword(this.formData)
				let id = row.id
				Route.push({name: 'demandDetail', params: { option: 'edit' }, query: { id: id }})
			},
			currentChange(val){
				this.pageIndex = val - 1
				Route.push({query:{page: val}})
			},
			setCurrentPage(){
				let page = Route.query.page
				if (page) {
					
				}else{
					Route.push({query:{page: 1}})
				}
			},
			deleteItem(){

				let items = this.selectionList.map((item)=>item.id)
				
				this.deleteDemand(items).then((res)=>{
					let data = res.data
					if (data.code == 1) {
						Message({
					      showClose: true,
					      message: '删除成功',
					      type: 'success'
					    })
					}else{
						Message({
					      showClose: true,
					      message: '删除出错',
					      type: 'error',
					      duration: 0
					    })
					}
				}, (err)=>{
					Message({
				      showClose: true,
				      message: '删除出错',
				      type: 'error',
				      duration: 0
				    })
				})
			},
			selectionChange(val){
				this.selectionList = val
				console.log(val)
			}
		}
	}
</script>
<style lang="less">
	.form-inline {
		width: auto;
	}
</style>