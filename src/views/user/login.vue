<template>
	<div class="login animated" :class="{shake: isShake}">
		<el-card class="panel" :body-style="{ background: 'transparent'}">
		 	<div slot="header" class="card-hd">
				<span>野战药房模拟训练系统</span>
		    </div>
			<el-form label-width="85px" :rules="rules" :model="formVal" ref="ruleForm">
				<el-form-item label="用户名" prop="name">
					<el-input v-model="formVal.name" placeholder="请输入用户名" class="ipt"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="pwd">
					<el-input type="password" v-model="formVal.pwd" placeholder="请输入密码" class="ipt"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" size="small" @click="triggerLogin('ruleForm')">登录</el-button>
					<router-link to="/register" class="pull-right">注册</router-link>
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
	    return {
	      formVal: {
	      	name: '',
	      	pwd:''
	      },
	      rules: {
	      	 name: [
	      	 	{ required: true, message: '请输入活动名称', trigger: 'blur' },
	      	 	{ min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
	      	 ],
	      	 pwd: { required: true, min: 6, message: '请输入密码', trigger: 'change' }

	      },
	      isShake: false
	    }
	  },
	  methods: {
	  	...mapActions([
	  		'loginSubmit'
	  	]),
	    handleIconClick(ev) {
	      console.log(ev);
	    },
	    triggerLogin(form){
	    	let self = this
	    	let dlgShake = () => {
	            this.isShake = true
    			setTimeout(()=>{
    				this.isShake = false
    			},1000)
	    	}

	    	this.$refs[form].validate((valid) => {

	    		if (valid) {

	    			this.loginSubmit(this.formVal).then(res=>{
			            console.log(res)
			            let data = res.body
			            if (data.code == 1) {
			            	sessionStorage.setItem("pha_token", data.token)
			            	Router.push('/')
			            }else{
			            	self.formVal.pwd = ''
			            	dlgShake()
			            }
			        }, res=>{

			        	dlgShake()
			        })
	    			
	    		}else{
	    			dlgShake()
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
		width: 350px;
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