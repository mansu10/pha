<template>
	<div>
		<el-card class="panel">
 			<div slot="header" class="clear panel-header">
				<span>基本信息</span>
				<el-button-group class="pull-right" >
					<!-- <el-button type="primary" size="small" :disabled="isSubmit" @click="deleteItem">修改</el-button> -->
					<el-button type="primary" size="small" :disabled="isSubmit" @click="saveForm('ruleForm')">保存</el-button>
				</el-button-group>
				
			</div>
			<el-form label-position="top" :rules="rules" :model="formData" ref="ruleForm">
				<el-row :gutter="30">
					<el-col :xs="24" :sm="12" :md="6">
						<el-form-item label="机构编号" prop="code">
							<el-input :disabled="isDisabled" placeholder="" v-model="formData.code"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="6">
						<el-form-item label="机构名称" prop="name">
							<el-input :disabled="isDisabled" placeholder="" v-model="formData.name"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="6">
						<el-form-item label="机构类型" prop="type">
							<el-select :disabled="isDisabled" placeholder="类别" v-model="formData.type">
								<el-option label="师救护所" value="师救护所"></el-option>
								<el-option label="团救护所" value="团救护所"></el-option>
								<el-option label="营救护所" value="营救护所"></el-option>
								<el-option label="野战医疗队" value="野战医疗队"></el-option>
								<el-option label="野战医院" value="野战医院"></el-option>
								<el-option label="基地医院" value="基地医院"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="6">
						<el-form-item label="机构级别" prop="level">
							<el-input :disabled="isDisabled" placeholder="" v-model="formData.level"></el-input>
						</el-form-item>
					</el-col>

					<el-col :xs="24" :sm="12" :md="6">
						<el-form-item label="开设地点" prop="addr1">
							<el-input :disabled="isDisabled" placeholder="" v-model="formData.addr1"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="6">
						<el-form-item label="机构地址" prop="addr2">
							<el-input :disabled="isDisabled" placeholder="" v-model="formData.addr2"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="6">
						<el-form-item label="机构坐标" prop="coordinate">
							<el-input :disabled="isDisabled" placeholder="" v-model="formData.coordinate"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="6">
						<el-form-item label="机构人数" prop="number">
							<el-input :disabled="isDisabled" placeholder="" v-model="formData.number"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form> 
		</el-card>	
		<el-card class="panel">
			<div slot="header" class="clear">
				<el-button-group class="pull-right" >
				  	<el-button type="primary" size="small" :disabled="isSubmit" @click="addNewRole">新增</el-button>
				  	<el-button type="danger" size="small" :disabled="isSubmit" @click="deleteRole">删除</el-button>
				</el-button-group>
			</div>
		
			<el-table
			  ref="roleTable"
			  :data="tableData"
			  @selection-change="selectionChange"
			  border
			  style="width: 100%">
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
			    prop="roleGroup"
			    label="编组"
			    width="180">
	    	    	<template scope="scope">
	                	<div v-show="!scope.row.isEditing">{{ scope.row.roleGroup }}</div>
	                	<el-input v-show="scope.row.isEditing" v-model="scope.row.roleGroup"></el-input>
	            	</template>
			  </el-table-column>
			  <el-table-column
			    label="岗位角色"
			    width="180">
			    	<template scope="scope">
	                	<div v-show="!scope.row.isEditing">{{ scope.row.roleName }}</div>
	                	<el-input v-show="scope.row.isEditing" v-model="scope.row.roleName"></el-input>
	            	</template>
			  </el-table-column>
			  <el-table-column
			    label="角色编号">
    		    	<template scope="scope">
                    	<div v-show="!scope.row.isEditing">{{ scope.row.roleCode }}</div>
                    	<el-input v-show="scope.row.isEditing" v-model="scope.row.roleCode"></el-input>
                	</template>
			  </el-table-column>
			  <el-table-column
			    fixed="right"
			    label="操作"
			    width="100">
			    <template scope="scope">
			      <!-- <el-button type="text" size="small">查看</el-button> -->
			      <el-button type="text" size="small" @click="editRole(scope.$index, scope.row)" v-show="!scope.row.isEditing">编辑</el-button>
			      <el-button type="text" size="small" @click="saveEditRole(scope.$index, scope.row)" v-show="scope.row.isEditing">保存</el-button>
			    </template>
			  </el-table-column>
			</el-table>
		</el-card>
	</div>
</template>
<script>
	import {mapActions, mapState} from 'vuex'
	import { Message } from 'element-ui'
	import _ from 'lodash'
	import Route from 'src/routers'
	export default {
		data(){
			return {
				formData: {
					code:'',
					name:'',
					type: '',
					level: '',
					addr1: '',
					addr2: '',
					coordinate: '',
					number: '',
					jobs: ''
				},
				tableData: [{}],
				rules: {
					code:{ required: true, message: '请输入内容', trigger: 'blur' },
					name:{ required: true, message: '请输入内容', trigger: 'blur' },
					type:{ required: true, message: '请输入内容', trigger: 'change' },
					level:{ required: true, message: '请输入内容', trigger: 'blur' },
					addr1:{ message: '请输入内容', trigger: 'blur' },
					addr2:{ message: '请输入内容', trigger: 'blur' },
					coordinate:{ message: '请输入内容', trigger: 'blur' },
					number:{ required: true, message: '请输入内容', trigger: 'blur' },
				},
				isSubmit: false,
				isDisabled: false,
				isEdit: false,
				itemId: '',
				roleEditing: {},
				selectionList: []
			}
		},
		mounted(){
			this.parseRoute()
		},
		computed: {
			...mapState({
				supplyData: state => state.institution.supplyTable
			})
			
		},
		methods: {
			...mapActions({
				modifySupply: 'modifySupply'
			}),
			deleteItem(){

			},
			saveForm(form){
				let self = this
				if (this.isSubmit) {return}

				this.$refs[form].validate((valid) => {
					if (valid) {

						this.isSubmit = true
						this.modifySupply({obj: this.formData, tbl: this.tableData, isEdit: this.isEdit}).then(res=>{

							let data = res.data || {}
							if (data.code == 1) {
								Message({
							      showClose: true,
							      message: '保存成功, 3s后跳转',
							      type: 'success'
							    })
							    setTimeout(()=>{
							    	self.$refs['ruleForm'].resetFields();
							    	
							    	Route.push({name: 'supply'})
							    },3000)
							}else{
								Message({
							      showClose: true,
							      message: data.error,
							      type: 'error'
							    })
							    self.isSubmit = false
							}

						}, err=>{
							// netErr()
							self.isSubmit = false
						})
					}
				})

			},
			parseRoute(){
				let route = this.$route.params.option

				if (route == 'add') {
					this.isEdit = false
				}else if(route == 'edit'){
					this.isEdit = true

					let id = this.$route.query.id || undefined

					if (typeof id == undefined) {
						window.history.go(-1)
					}
					this.itemId = id
					let editItem = this.getItemById(id) ? this.getItemById(id) : {}

					if (!_.isEmpty(editItem)) {
						this.formData = {
							code: editItem.supplyAgencyCode,
							name: editItem.supplyAgencyName,
							type:  editItem.supplyAgencyType,
							level:  editItem.supplyAgencyLevel,
							addr1:  editItem.supplyAgencyAddress1,
							addr2:  editItem.supplyAgencyAddress2,
							coordinate:  editItem.supplyAgencyCoordinate,
							number:  editItem.supplyAgencyNumber + '',
							id: id,
							jobs: editItem.supplyAgencyJobs
						}
						// console.log(editItem)
						this.tableData = editItem.supplyAgencyJobs
						this.tableData.forEach((item, index)=>{
							item.isEditing = false
						})
					}else{
						Route.push({name: 'supply'})
					}
				}
			},
			getItemById(id){
				let list = this.supplyData

				for(let i=0; i< list.length; i++){
					if (list[i].id == id) {

						return list[i]
					}
				}
				return false
			},
			addNewRole(){
				this.tableData.push({
					isEditing: true,
					roleName: '',
					roleCode: '',
					roleGroup: ''
				})
			},
			deleteRole(){
				this.tableData = this.tableData.filter((item, index)=>{
					return this.selectionList.indexOf(item) == -1
				})
				
			},
			editRole(index, row){
				this.roleEditing = {}
				this.roleEditing = {
					index: index,
					cnt: row
				}
				row.isEditing=true
				this.$refs.roleTable.clearSelection()
			},
			saveEditRole(index, row){
				row.isEditing = false
				this.$refs.roleTable.clearSelection()
			},
			cancelEditRole(index, row){
				row = this.roleEditing.cnt
				this.$refs.roleTable.clearSelection()
			},
			selectionChange(val){
				this.selectionList = val
				console.log(val)
			}
		}
	}
</script>
<style lang="less" scoped>

</style>
