<template>
	<div>
		<el-card class="panel">
			<div slot="header">
				<span>基本信息</span>
				<el-button class="pull-right" type="primary" size="small" @click="saveForm('ruleForm')">保存</el-button>
			</div>
			<el-form label-position="top" :rules="rules" :model="formData" ref="ruleForm">
				<el-row :gutter="30">
					<el-col :span="6">
						<el-form-item label="机构编号" prop="code">
							<el-input placeholder="" v-model="formData.code"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="机构名称" prop="name">
							<el-input placeholder="" v-model="formData.name"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="机构类型" prop="type">
							<el-select placeholder="类别" v-model="formData.type">
								<el-option label="师救护所" value="师救护所"></el-option>
								<el-option label="团救护所" value="团救护所"></el-option>
								<el-option label="营救护所" value="营救护所"></el-option>
								<el-option label="野战医疗队" value="野战医疗队"></el-option>
								<el-option label="野战医院" value="野战医院"></el-option>
								<el-option label="基地医院" value="基地医院"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="机构级别" prop="level">
							<el-input placeholder="" v-model="formData.level"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="30">
					<el-col :span="6">
						<el-form-item label="开设地点" prop="addr1">
							<el-input placeholder="" v-model="formData.addr1"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="机构地址" prop="addr2">
							<el-input placeholder="" v-model="formData.addr2"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="机构坐标" prop="coordinate">
							<el-input placeholder="" v-model="formData.coordinate"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="机构人数" prop="number">
							<el-input placeholder="" v-model="formData.number"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="30">

					<el-col :span="6">
						<el-form-item label="保障人数" prop="protect">
							<el-input placeholder="" v-model="formData.protect"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="联系人" prop="contact">
							<el-input placeholder="" v-model="formData.contact"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="联系电话" prop="tel">
							<el-input placeholder="" v-model="formData.tel"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		</el-card>	
	</div>

</template>
<script>
	import {mapActions} from 'vuex'
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
					type:{ required: true, message: '请输入内容', trigger: 'blur' },
					level:{ required: true, message: '请输入内容', trigger: 'blur' },
					addr1:{ required: true, message: '请输入内容', trigger: 'blur' },
					addr2:{ required: true, message: '请输入内容', trigger: 'blur' },
					coordinate:{ required: true, message: '请输入内容', trigger: 'blur' },
					number:{ required: true, message: '请输入内容', trigger: 'blur' },
					protect:{ required: true, message: '请输入内容', trigger: 'blur' },
					contact:{ required: true, message: '请输入内容', trigger: 'blur' },
					tel:{ required: true, message: '请输入内容', trigger: 'blur' }
				}
			}
		},
		methods: {
			...mapActions({
				addNewDemand: 'addNewDemand'
			}),
			saveForm(form){
				this.$refs[form].validate((valid) => {

				})
			}
		}
	}
</script>
<style>
	.panel {
		margin-bottom: 15px;
	}
</style>