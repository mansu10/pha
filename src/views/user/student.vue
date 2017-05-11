<template>
	<el-card>
		<el-form label-width="85px" :inline="true"  :model="formData">
			<el-row>
				<el-col :span="12">
					<el-form-item label="用户名" prop="name" >
						<el-input placeholder="请输入内容" class="ipt"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="昵称" prop="nick" >
						<el-input placeholder="请输入内容" class="ipt"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="密码" prop="pwd">
						<el-input type="password"  placeholder="请输入内容" class="ipt"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="确认密码" prop="chkPwd">
						<el-input type="password"  placeholder="请输入内容" class="ipt"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="年级" prop="grade">
						<el-input placeholder="请输入内容" class="ipt"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="队别" prop="team">
						<el-input placeholder="请输入内容" class="ipt"></el-input>
					</el-form-item>			
				</el-col>
			</el-row>

			<el-row>
				<el-col :span="12">	

					<el-form-item label="邮箱" prop="email" >
						<el-input placeholder="请输入内容" class="ipt"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="联系电话" prop="phone" >
						<el-input placeholder="请输入内容" class="ipt"></el-input>
					</el-form-item>

				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">	

					<el-form-item label="启用时间" prop="email" >
						<el-date-picker type="date" placeholder="启用时间" class="ipt"></el-date-picker>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="到期时间" prop="phone" >
						<el-date-picker type="date" placeholder="到期时间" class="ipt"></el-date-picker>
					</el-form-item>

				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">	

					<el-form-item label="备注" prop="email" >
						<el-input type="textarea" placeholder="备注" class="ipt"></el-input>
					</el-form-item>
				</el-col>
			</el-row>

			<div>
				<el-button type="primary" size="small">保存</el-button>
			</div>

		</el-form>
	</el-card>
</template>
<style>
	.ipt {
		opacity: .5;
	}
</style>