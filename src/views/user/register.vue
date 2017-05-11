<template>
	<div class="login">
		<el-card class="panel" :body-style="{ background: 'transparent'}">
		 	<div slot="header" class="card-hd">
				<span>注册</span>
		    </div>
			<el-form label-width="85px" :rules="rules" :inline="true"  :model="formVal" ref="ruleForm">
				<el-form-item label="用户名" prop="name" >
					<el-input v-model="formVal.name" placeholder="请输入内容" class="ipt"></el-input>
				</el-form-item>
				<el-form-item label="昵称" prop="nick" >
					<el-input v-model="formVal.nick" placeholder="请输入内容" class="ipt"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="pwd">
					<el-input v-model="formVal.pwd" type="password"  placeholder="请输入内容" class="ipt"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="chkPwd">
					<el-input v-model="formVal.chkPwd" type="password"  placeholder="请输入内容" class="ipt"></el-input>
				</el-form-item>
				<el-form-item label="年级" prop="grade">
					<el-input v-model="formVal.grade" placeholder="请输入内容" class="ipt"></el-input>
				</el-form-item>
				<el-form-item label="队别" prop="team">
					<el-input v-model="formVal.team" placeholder="请输入内容" class="ipt"></el-input>
				</el-form-item>
				<el-form-item label="邮箱" prop="email" >
					<el-input v-model="formVal.email" placeholder="请输入内容" class="ipt"></el-input>
				</el-form-item>
				<el-form-item label="联系电话" prop="phone" >
					<el-input v-model="formVal.phone" placeholder="请输入内容" class="ipt"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" size="small" @click="triggerRegister('ruleForm')">注册</el-button>
				</el-form-item>
				<el-form-item>
					<router-link to="/login" class="pull-right">返回登录</router-link>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex'
	import Router from '../../routers'
	export default {
	  data() {
	  	var validatePass = (rule, value, callback) => {
	  	     if (value === '') {
	  	       callback(new Error('请输入密码'));
	  	     } else {
	  	       if (this.ruleForm.chkPwd !== '') {
	  	         this.$refs.ruleForm.validateField('chkPwd');
	  	       }
	  	       callback();
	  	     }
	  	   };
	  	var validateChkPass = (rule, value, callback) => {
	  		if (value === '') {
	  			callback(new Error('请再次输入密码'));
	  		} else if (value !== this.formVal.pwd) {
	  			callback(new Error('两次输入密码不一致!'));
	  		} else {
	  			callback();
	  		}
	  	};
	    return {
	    	formVal: {
	    		name: '',
	    		nick: '',
	    		pwd: '',
	    		chkPwd: '',
	    		grade: '',
	    		team: '',
	    		email: '',
	    		phone: '',
	    	},
	    	rules: {
	    		name: [
	    			{ required: true, message: '请输入用户名', trigger: 'blur' },
	    			{ min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
	    		],
	    		nick: [
					{ required: true, message: '请输入用户名', trigger: 'blur' },
					{ min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
				], 
	    		pwd: [
	    			{ required: true, message: '请输入密码', trigger: 'blur' },
	    			{ min:6, message: '长度不小于6位', trigger: 'blur' },
	    		],
	    		chkPwd: { required: true, validator: validateChkPass, trigger: 'blur' },
	    		grade: {},
	    		team: {},
	    		email: [
	    				{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
						{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
					],
	    		phone: [
	    				{ required: true, message: '请输入电话号码', trigger: 'blur' }
					]
	    	}
	    }
	  },
	  methods: {
	  	...mapActions([
	  		'registerSubmit'
	  	]),
	    triggerRegister(form){
	    	let self = this
	    	this.$refs[form].validate((valid) => {

	    		if (valid) {

	    			this.registerSubmit(this.formVal).then(res=>{
			            console.log(res)
			            let data = res.body
			            if (data.code == 1) {
			            	sessionStorage.setItem("token", data.token)
			            	this.$message('注册成功，3s后跳转登录页');
			            	setTimeout(()=>{
			            		Router.push('login')
			            	}, 3000)
			            	
			            }else{
			            	this.$message(data.error);
			            	
			            }
			        }, res=>{

			        	 this.$message.error('网络错误');
			        })
	    			
	    		}else{
	    			this.$message('这是一条消息提示');
	    		}
	    	})
	    }
	  }
	}
</script>
<style scoped lang="less">
	.login {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;

	}
	.panel {
		width: 650px;
		// min-height: 300px;
	}
	.el-card {
		background-color: #D3DCE6;
		// opacity: .5;
		// color: #fff;
	}
	.ipt {
		opacity: .5;
	}
</style>