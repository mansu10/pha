<template>
	<div>
			<el-card class="panel">
				<div slot="header">
					<span>药材明细信息</span>
				</div>
			</el-card>

			<el-card class="panel">
				<div slot="header">
					<span>类型</span>
				</div>
				<el-form label-position="top">
					<el-row :gutter="30">
						<el-col :span="6">
							<el-form-item label="类型">
								<el-select placeholder="类别">
									<el-option label="单品" value="单品"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</el-card>
			<el-card class="panel">
				<div slot="header">
					<span>编码</span>
				</div>
				<el-form label-position="top">
				<el-row :gutter="30">
						<el-col :span="6">
							<el-form-item label="标识码">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>

						<el-col :span="6">
							<el-form-item label="对照码">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="统一商品编码">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="拼音码">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="30">
						<el-col :span="6">
							<el-form-item label="类型">
								<el-select placeholder="">
									<el-option label="单品" value="单品"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</el-card>
			<el-card class="panel">
				<div slot="header">
					<span>品规</span>
				</div>
				<el-form label-position="top">
				<el-row :gutter="30">
						<el-col :span="6">
							<el-form-item label="通用名">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="规格">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="剂型">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="计量单位">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</el-card>
			<el-card class="panel">
				<div slot="header">
					<span>商品</span>
				</div>
				<el-form label-position="top">
				<el-row :gutter="30">
						<el-col :span="6">
							<el-form-item label="商品名">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="厂家">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="厂家标识码">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="型号">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="30">
						<el-col :span="6">
							<el-form-item label="批准文号">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="零售包装计量单位">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="零售包装转换比">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="零售包装价格">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="30">
						<el-col :span="6">
							<el-form-item label="零售包装重量">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="零售包装体积">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="零售包装材料">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</el-card>
			<el-card class="panel">
				<div slot="header">
					<span>分类</span>
				</div>
				<el-form label-position="top">
				<el-row :gutter="30">
						<el-col :span="6">
							<el-form-item label="一级类">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="二级类">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="三级类">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="管理分类">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</el-card>
			<el-card class="panel">
				<div slot="header">
					<span>使用</span>
				</div>
				<el-form label-position="top">
				<el-row :gutter="30">
						<el-col :span="6">
							<el-form-item label="用量单位">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="次平均用量">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="日平均用量">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="日最大用量">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</el-card>
			<el-card class="panel">
				<div slot="header">
					<span>包装</span>
				</div>
				<el-form label-position="top">
				<el-row :gutter="30">
						<el-col :span="6">
							<el-form-item label="大包装计量单位">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="打包零包转换比">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="大包装重量">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="大包装体积">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="30">
						<el-col :span="6">
							<el-form-item label="大包装长">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="大包装宽">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="大包装高">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="大包装材料">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</el-card>
			<el-card class="panel">
				<div slot="header">
					<span>贮存</span>
				</div>
				<el-form label-position="top">
				<el-row :gutter="30">
						<el-col :span="6">
							<el-form-item label="贮存条件">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="有效期">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</el-card>
			<el-card class="panel">
				<div slot="header">
					<span>库存</span>
				</div>
				<el-form label-position="top">
				<el-row :gutter="30">
						<el-col :span="6">
							<el-form-item label="库存下限">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="库存上限">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="货位码">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</el-card>
			<el-card class="panel">
				<div slot="header">
					<span>收录</span>
				</div>
				<el-form label-position="top">
				<el-row :gutter="30">
						<el-col :span="6">
							<el-form-item label="标准1">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="标准2">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="标准3">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="标准4">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="30">
						<el-col :span="6">
							<el-form-item label="标准5">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</el-card>
			<el-card class="panel">
				<div slot="header">
					<span>成套</span>
				</div>
				<el-form label-position="top">
				<el-row :gutter="30">
						<el-col :span="6">
							<el-form-item label="成套品规数">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="成套箱类型">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="成套箱数">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="单箱体积">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="30">
						<el-col :span="6">
							<el-form-item label="成套体积">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="成套价格">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="成套重量">
								<el-input placeholder=""></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</el-card>
</div>
</template>
<script></script>
<style>
	.panel {
		font-size: 12px;
		margin-bottom: 15px;
	}

</style>