<template>
	<div>
		<el-card class="panel">
			<div slot="header">
				<span>基本信息</span>
				<el-button-group class="pull-right" >
					<el-button size="small" type="info" :disabled="isSubmit" @click="saveForm('ruleForm')">保存</el-button>
					<el-button size="small" type="info" :disabled="isSubmit" @click="cancel">取消</el-button>
					<el-button type="danger" size="small" :disabled="isSubmit" @click="deleteItem">删除</el-button>
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

					<el-col :xs="24" :sm="12" :md="6">
						<el-form-item label="保障人数" prop="protect">
							<el-input :disabled="isDisabled" placeholder="" v-model="formData.protect"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="6">
						<el-form-item label="联系人" prop="contact">
							<el-input :disabled="isDisabled" placeholder="" v-model="formData.contact"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="6">
						<el-form-item label="联系电话" prop="tel">
							<el-input :disabled="isDisabled" placeholder="" v-model="formData.tel"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
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
					protect: '',
					contact:'',
					tel:''
				},
				rules: {
					code:{ required: true, message: '请输入内容', trigger: 'blur' },
					name:{ required: true, message: '请输入内容', trigger: 'blur' },
					type:{ required: true, message: '请输入内容', trigger: 'change' },
					level:{ required: true, message: '请输入内容', trigger: 'blur' },
					addr1:{ message: '请输入内容', trigger: 'blur' },
					addr2:{ message: '请输入内容', trigger: 'blur' },
					coordinate:{ message: '请输入内容', trigger: 'blur' },
					number:{ required: true, message: '请输入内容', trigger: 'blur' },
					protect:{ required: true, message: '请输入内容', trigger: 'blur' },
					contact:{ required: true, message: '请输入内容', trigger: 'blur' },
					tel:{ required: true, message: '请输入内容', trigger: 'blur' }
				},
				isDisabled: false,
				isSubmit: false,
				isEdit: false,
				itemId: ''
			}
		},
		mounted(){
			this.parseRoute()
		},
		computed: {
			...mapState({
				demandData: state => state.institution.demandTable
			})
		},
		methods: {
			...mapActions({
				modifyDemand: 'modifyDemand',
				deleteDemand: 'deleteDemand'
			}),
			deleteItem(){
				console.log(!_.isEmpty(this.itemId))
				this.isSubmit = true
				if (this.itemId) {

					this.deleteDemand({id: this.itemId}).then((res)=>{
						console.log(res)
						Message({
					      showClose: true,
					      message: '删除成功',
					      type: 'success'
					    })
					    setTimeout(()=>{
							self.$refs['ruleForm'].resetFields();
							Route.push({name: 'demand'})
						},3000)
					}, (err)=>{
						console.log('err')
						this.isSubmit = false
					})
				}
				
			},
			saveForm(form){
				let self = this
				if (this.isSubmit) {return}
				
				this.$refs[form].validate((valid) => {
					if (valid) {
						this.isSubmit = true
						this.modifyDemand({obj: this.formData, isEdit: this.isEdit}).then((res)=>{
							
							let data = res.data || {}
							if (data.code == 1) {
								// console.log(data)
								Message({
							      showClose: true,
							      message: '保存成功, 3s后跳转',
							      type: 'success'
							    })
								setTimeout(()=>{
									self.$refs['ruleForm'].resetFields();
									// window.history.go(-1)
									Route.push({name: 'demand'})
								},3000)
							}else{
								Message({
							      showClose: true,
							      message: data,
							      type: 'error'
							    })
							    self.isSubmit = false
							}
						}, (err)=>{
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

				}else if (route == 'edit') {

					this.isEdit = true

					let id = this.$route.query.id || undefined

					if (typeof id == undefined) {
						window.history.go(-1)
					}
					
					this.itemId = id

					let editItem = this.getItemById(id) ? this.getItemById(id) : {}

					if (!_.isEmpty(editItem)) {
						this.formData = {
							code: editItem.demandAgencyCode,
							name: editItem.demandAgencyName,
							type:  editItem.demandAgencyType,
							level:  editItem.demandAgencyLevel,
							addr1:  editItem.demandAgencyAddress1,
							addr2:  editItem.demandAgencyAddress2,
							coordinate:  editItem.demandAgencyCoordinate,
							number:  editItem.demandAgencyNumber + '',
							protect:  editItem.demandAgencyProtect + '',
							contact: editItem.contacts,
							tel: editItem.tel,
							id: id
						}
					}else{
						Route.push({name: 'demand'})
					}
				}
			},
			getItemById(id){
				let list = this.demandData
				for(let i=0; i< list.length; i++){
					if (list[i].id == id) {
						return list[i]
					}
				}
				return false
			},
			cancel(){
				Route.push({name: 'demand'})
			}
		}
	}
</script>
<style>
	.panel {
		margin-bottom: 15px;
	}
</style>