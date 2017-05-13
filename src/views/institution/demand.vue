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
					<el-button type="primary" size="small" @click="fetchDemandList(formData)">查询</el-button>
				</el-form-item>
			</el-form>
		</el-card>
		<el-card>
			<el-button type="primary" size="small" @click="goAddNew">新增</el-button>
			<el-button type="danger" size="small">删除</el-button>
		</el-card>
		<el-row>
				<el-col :span="24">
					<el-table 
						border
						:data="getPageData">
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
						    <el-button type="text" size="small" @click="goDetail">查看</el-button>
						    <el-button type="text" size="small">编辑</el-button>
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
	import {mapActions, mapState} from 'vuex'
	import router from 'src/routers'
	export default {
		data(){
			return{
				formData: {
					title: '',
					cate: ''
				},
				pageSize: 15,
				pageIndex: 0
			}
		},
		mounted(){
			// this.fetchDemandList()
		},
		computed: {
			...mapState({
				tableData: state => state.institution.demandTable,
				isLoading: state => state.institution.isDemandLoading
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
				fetchDemandList: 'fetchDemandList'
			}),
			goDetail(){
				console.log(333)
				router.push({name: 'institutionDetail', params: { option: '123' }})
			},
			goAddNew(){
				router.push({name: 'demandDetail', params: { option: 'add' }})
			},
			currentChange(val){
				this.pageIndex = val - 1
			}
		}
	}
</script>
<style lang="less">
	.form-inline {
		width: auto;
	}
</style>