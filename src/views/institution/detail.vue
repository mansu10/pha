<template>
	<div>
		<el-card class="panel">
			<div slot="header">
				<span>基本信息</span>
			</div>
		</el-card>

		<el-card class="panel">
			<div slot="header">
				<span>基本信息</span>
			</div>
			<el-form label-position="top">
				<el-row :gutter="30">
					<el-col :span="6">
						<el-form-item label="机构编号">
							<el-input placeholder=""></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="机构名称">
							<el-input placeholder=""></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="机构类型">
							<el-input placeholder=""></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="级别">
							<el-input placeholder=""></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="30">
					<el-col :span="6">
						<el-form-item label="开设点">
							<el-input placeholder=""></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="地址">
							<el-input placeholder=""></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="位置坐标">
							<el-input placeholder=""></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="人数">
							<el-input placeholder=""></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		</el-card>	
		<el-card class="panel">
			<div slot="header">
				<span>供应站岗位设置</span>
			</div>
			<el-table border :data="tableData">
				<el-table-column label="选择" width="80">
					
				</el-table-column>
				<el-table-column label="序号" width="80">
					
				</el-table-column>
				<el-table-column label="编组">
					
				</el-table-column>
				<el-table-column label="岗位角色">
					
				</el-table-column>
				<el-table-column label="角色编号">
					
				</el-table-column>
			</el-table>
		</el-card>	
	</div>


</template>
<script>
	export default {
		data(){
			return {
				tableData: [{}]
			}
		}
	}
</script>
<style>
	.panel {
		margin-bottom: 15px;
	}
</style>