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
		<div class="m-menus">
			<el-menu  v-for="parent in menuList" default-active="1" class="menu-nest" @open="handleOpen" @close="handleClose">
				<div class="menu-head">
					<span class="tt">{{parent.title}}</span>
					<el-tooltip class="item pull-right" effect="light" content="Top Left 提示文字" placement="top-start">
					    <i class="iconfont">&#xe72d;</i>
					</el-tooltip>
				</div>
				<template v-for="(child,index) in parent.children">
					<el-submenu :index="String(index+1)" v-if="child.children">
						<template slot="title"><i :class="child.iconClass"></i>{{child.title}}</template>
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
					<el-menu-item v-else :index="String(index+1)"><i class="el-icon-menu"></i>{{child.title}}</el-menu-item>					
				</template>
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
		data(){
			return {
				menuList: [{
					title: 'title',
					children: [{
						title: 'child title',
						iconClass: 'el-icon-message',
						children:[]
					},{
						title: 'child title2',
						iconClass: 'el-icon-menu'
					},{
						title: 'child title3',
						iconClass: 'el-icon-menu'
					}]
				},{
					title: 'title2'
				}]
			}
		},
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
<style lang="less">
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
			input {
				border-bottom: medium none;
				border-top: medium none;
				border-left: medium none;
				border-right: medium none;
				color: #fff;
				background: none repeat scroll 0 0 rgba(0, 0, 0, 0.1);
				border-radius: 4px;
			}
			padding: 0 10px;
		}
		.m-menus {
			.el-submenu .el-menu {
				background-color: rgba(0, 0, 0, 0.3);
				color: rgba(255, 255, 255, 0.9);
			}
			.el-menu-item,
			.el-submenu__title {
				height: 45px;
				line-height: 45px;
				border-left: 2px solid transparent;
			    transition: none;
				&:hover {
				    background-color: rgba(0, 0, 0, 0.2);
				    border-left-color: #fff;
				    transition: none;
				    &:after {
				    	border-bottom: 6px solid #ffffff;
			    	    border-left: 8px solid transparent;
			    	    border-right: 8px solid transparent;
			    	    width: 0;
			    	    height: 0;
			    	    position: absolute;
			    	    top: 19px;
			    	    left: -6px;
			    	    content: "";
			    	    display: block;
			    	    -webkit-transform: rotate(90deg);
			    	    -moz-transform: rotate(90deg);
			    	    -ms-transform: rotate(90deg);
			    	    -o-transform: rotate(90deg);
			    	    tranform: rotate(90deg);
				    }
				}
			}
			.el-menu-item-group__title {
				padding-bottom: 15px;
				font-size: 12px;
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

	}
</style>