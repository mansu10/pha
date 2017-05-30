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
					<el-button type="info" size="small" @click="fetchSupplyList(formData)">查询</el-button>
				</el-form-item>
			</el-form>
		</el-card>
		<el-card class="panel">
			<el-button-group>
				<el-button type="primary" size="small" @click="goAddNew">新增</el-button>
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
						  width="50">
						</el-table-column>
						<el-table-column
						  type="index"
						  label="#"
						  width="80">
						</el-table-column>
						<el-table-column  
							prop="supplyAgencyType"
							label="机构类型"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="supplyAgencyName"
							label="机构名称"
							width="200">	
						</el-table-column>
						<el-table-column  
							prop="supplyAgencyCode"
							label="机构代码"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="supplyAgencyAddress1"
							label="开设地点"
							width="200">	
						</el-table-column>
						<el-table-column  
							prop="supplyAgencyNumber"
							label="机构人数"
							width="120">	
						</el-table-column>
						<el-table-column
						  fixed="right"
						  label="操作"
						  width="100">
						  <template scope="scope">
						    <!-- <el-button type="text" size="small"  @click="goDetail">查看</el-button> -->
						    <el-button type="text" size="small" @click="goEdit(scope.$index, scope.row)">编辑</el-button>
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
	import Route from 'src/routers'
	import {mapActions, mapState} from 'vuex'
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
			// this.fetchSupplyList()
			if (this.isReload) {
				this.fetchSupplyList(this.formData)
			}
		},
		computed: {
			...mapState({
				tableData: state => state.institution.supplyTable,
				isReload: state => state.institution.isReload,
				isLoading: state => state.institution.isSupplyLoading
			}),
			getPageData(){
				return this.tableData.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1)*this.pageSize)
			},
			getTotalItem(){
				return this.tableData.length
			}
		},
		methods: {
			...mapActions({
				fetchSupplyList: 'fetchSupplyList',
				deleteSupply: 'deleteSupply'
			}),
			goDetail(){
				console.log(333)
				
			},
			currentChange(val){
				this.pageIndex = val - 1
			},
			goAddNew(){
				Route.push({name: 'supplyDetail', params: { option: 'add' }})
			},
			goEdit(index, row){
				let id = row.id
				Route.push({name:'supplyDetail', params: { option: 'edit' }, query: {id:id}})
			},
			deleteItem(){
				let items = this.selectionList.map(item=>item.id)
				console.log(items)
				this.deleteSupply(items).then(res=>{
					let data = res.data
					console.log(res)
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
				}, err=>{
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