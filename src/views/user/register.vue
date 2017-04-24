<template>
	<div class="login">
		<el-card class="panel" :body-style="{ background: 'transparent'}">
		 	<div slot="header" class="card-hd">
				<span>注册</span>
		    </div>
			<el-form label-width="85px">
				<el-form-item label="用户名" required>
					<el-input v-model="input" placeholder="请输入内容" class="ipt"></el-input>
				</el-form-item>
				<el-form-item label="密码" required>
					<el-input type="password" v-model="input" placeholder="请输入内容" class="ipt"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" required>
					<el-input type="password" v-model="input" placeholder="请输入内容" class="ipt"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" size="small">注册</el-button>
					<router-link to="/login" class="pull-right">返回登录</router-link>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
	export default {
	  data() {
	    return {
	      
	    }
	  },
	  methods: {
	    
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