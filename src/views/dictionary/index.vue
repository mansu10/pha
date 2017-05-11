<template>
	<div>
		<el-card>	
			<el-form label-width="85px" :inline="true" :model="formData" class="form-inline">
				<el-form-item label="药材名称">
					<el-input v-model="formData.title" placeholder="药材名称"></el-input>
				</el-form-item>
				<el-form-item label="分类">
					<el-select v-model="formData.cate" placeholder="类别">
						<el-option label="单品" value="单品"></el-option>
						<el-option label="成套" value="成套"></el-option>
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
						  fixed="left"
						  prop="date"
						  label="选择"
						  width="80">
						</el-table-column>
						<el-table-column
						  fixed="left"
						  prop="date"
						  label="序号"
						  width="80">
						</el-table-column>
						<el-table-column  
							prop="name"
							label="综合类型"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="name"
							label="一级类"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="name"
							label="二级类"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="name"
							label="标识码"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="name"
							label="对照码"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="name"
							label="通用名"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="name"
							label="商品名"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="name"
							label="规格"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="name"
							label="型号"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="name"
							label="厂家"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="name"
							label="计量单位"
							width="120">	
						</el-table-column>
						<el-table-column  
							prop="name"
							label="转换比"
							width="120">	
						</el-table-column>
						<el-table-column
						  fixed="right"
						  label="操作"
						  width="100">
						  <template scope="scope">
						    <el-button type="text" size="small" @click="goDetail">查看</el-button>
						    <!-- <el-button type="text" size="small">编辑</el-button> -->
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
				router.push({name: 'dictionaryDetail'})
			}
		}
	}
</script>
<style lang="less">
	.form-inline {
		width: auto;
	}
</style>