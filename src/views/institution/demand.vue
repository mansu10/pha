<template>
	<div>
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
						<el-button type="primary">查询</el-button>
					</el-form-item>
				</el-form>
			</el-card>
		<el-row>
				<el-col :span="24">
					<el-table 
						border
						:data="tableData">
						<el-table-column
						  prop="date"
						  label="选择"
						  width="80">
						</el-table-column>
						<el-table-column
						  prop="date"
						  label="序号"
						  width="80">
						</el-table-column>
						<el-table-column  
							prop="name"
							label="机构类型"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="name"
							label="机构名称"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="name"
							label="机构代码"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="name"
							label="开设地点"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="name"
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
			</el-row>
		</div>		

	</template>
<script>
	import router from 'src/routers'
	export default {
		data(){
			return{
				formData: {
					title: '',
					cate: ''
				},
				tableData: [{

				}]
			}
		},
		methods: {
			goDetail(){
				console.log(333)
				router.push({name: 'institutionDetail'})
			}
		}
	}
</script>
<style lang="less">
	.form-inline {
		width: auto;
	}
</style>