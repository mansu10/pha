<template>
	<el-row type="flex" justify="space-around">
		<el-col :span="8">
			<el-card>
			 	<div slot="header" >
					<span>login</span>
			    </div>
			    <div>
			    	<el-row :gutter="20" type="flex" align="middle">
			    		<el-col :span="8">
							<label for="">user</label>
			    		</el-col>
			    		<el-col :span="16">
			    			<el-input v-model="input" placeholder="请输入内容"></el-input>
			    		</el-col>
			    	</el-row>
			    	<el-row :gutter="20" type="flex" align="middle">
			    		<el-col :span="8">
							<label for="">password</label>
			    		</el-col>
			    		<el-col :span="16">
			    			<el-input v-model="input" placeholder="请输入内容" type="password"></el-input>
			    		</el-col>
			    	</el-row>
			    </div>
			    <div>
			    	<el-button type="primary" class="">login</el-button>
			    </div>
			</el-card>
		</el-col>
	</el-row>
</template>
<script>
	export default {
	  data() {
	    return {
	      input2: ''
	    }
	  },
	  methods: {
	    handleIconClick(ev) {
	      console.log(ev);
	    }
	  }
	}
</script>
<style>
	.el-row {
		margin-bottom: 20px;
	}
	.p10 {
		padding: 10px;
	}
	.pull-right {
		float: right;
	}
	.clearfix::after {
		content: "";
		display: block;
		clear: both;
	}
</style>