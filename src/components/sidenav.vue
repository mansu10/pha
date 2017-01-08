<template>
	<div class="sidenav">
		<div class="logo">
			<h1>logo</h1>
		</div>
		<div class="toggle">
			<a href="javascript:;">
				<i class="iconfont">&#xe790;</i>
			</a>
		</div>
		<div class="m-search" >
			<el-input
			  placeholder="search"
			  icon="search">
			</el-input>
		</div>
		<div class="menus">
			<el-menu default-active="2" class="menu-nest" @open="handleOpen" @close="handleClose">
				<div class="menu-head">
					<span class="tt">333</span>
					<i class="iconfont pull-right">&#xe72d;</i>
				</div>
				<el-submenu index="1">
					<template slot="title"><i class="el-icon-message"></i>导航一</template>
					<el-menu-item-group>
						<template slot="title">分组一</template>
						<el-menu-item index="1-1">选项1</el-menu-item>
						<el-menu-item index="1-2">选项2</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="分组2">
						<el-menu-item index="1-3">选项3</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="1-4">
						<template slot="title">选项4</template>
						<el-menu-item index="1-4-1">选项1</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
				<el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
			</el-menu>	
			<el-menu default-active="2" class="menu-nest" @open="handleOpen" @close="handleClose">
				<el-submenu index="1">
					<template slot="title"><i class="el-icon-message"></i>导航一</template>
					<el-menu-item-group>
						<template slot="title">分组一</template>
						<el-menu-item index="1-1">选项1</el-menu-item>
						<el-menu-item index="1-2">选项2</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="分组2">
						<el-menu-item index="1-3">选项3</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="1-4">
						<template slot="title">选项4</template>
						<el-menu-item index="1-4-1">选项1</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
				<el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
			</el-menu>	
			<el-menu default-active="2" class="menu-nest" @open="handleOpen" @close="handleClose">
				<el-submenu index="1">
					<template slot="title"><i class="el-icon-message"></i>导航一</template>
					<el-menu-item-group>
						<template slot="title">分组一</template>
						<el-menu-item index="1-1">选项1</el-menu-item>
						<el-menu-item index="1-2">选项2</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="分组2">
						<el-menu-item index="1-3">选项3</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="1-4">
						<template slot="title">选项4</template>
						<el-menu-item index="1-4-1">选项1</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
				<el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
			</el-menu>	
		</div>

	</div>

</template>
<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>
<style scoped lang="less">
	.search {
		border-bottom: medium none;
		border-top: medium none;
		border-left: medium none;
		border-right: medium none;
		color: #FFFFFF;
		background: none repeat scroll 0 0 rgba(0, 0, 0, 0.1);
		border-radius: 4px;
	}
	.sidenav {
		width: 250px;
		position: absolute;
		top: 0px;
		color: #fff;
		.logo {
			height: 65px;
			line-height: 65px;
			text-align: center;
		}
		.toggle {
			position: absolute;
			right: 10px;
			top: 20px;
			font-size: 25px;
			border-radius: 3px;
			cursor: pointer;
			display: block;
			height: 30px;
			line-height: 30px;
			text-align: center;
			width: 30px;
			font-size: 14px;
		    background: none repeat scroll 0 0 rgba(0, 0, 0, 0.3);
		    .iconfont {
		    	color: #fff;
		    }
		    &:hover {
		    	background: none repeat scroll 0 0 rgba(0, 0, 0, 0.8);
		    }
		}
		.m-search {
			padding: 0 10px;
		}
		.menu-nest {
			margin: 10px;
			background: none repeat scroll 0 0 rgba(0, 0, 0, 0.1);
			border-radius: 3px;
			.menu-head {
				padding: 15px 20px;
				.tt {
					background: none repeat scroll 0 0 rgba(0, 0, 0, 0.2);
					border-radius: 20px;
					height: 22px;
					line-height: 20px;
					padding: 0 11px;
				}
			}
		}
	}
</style>