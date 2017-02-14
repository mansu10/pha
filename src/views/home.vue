<template>
	<div>
		<el-progress class="pace" :text-inside="true" :percentage="progressing" :stroke-width="3" :show-text="false"></el-progress>
		<topnav></topnav>
		<sidenav ></sidenav>
		<div class="paper-wrap">
			<el-row class="paper-head">
				<el-col :span="6">
					<div class="cell title">ef</div>
				</el-col>
				<el-col :span="14">
					<div class="cell"></div>
				</el-col>
				<el-col :span="4">
					<div class="cell"></div>
				</el-col>
			</el-row>
			<div class="breadcrumb">
				<el-breadcrumb separator="/">
				  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
				  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
				  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
				</el-breadcrumb>
				<div class="search-in"></div>
			</div>
			<transition name="fade" mode="out-in">
			    <router-view></router-view>
			</transition>
			<div class="footer">
				<div class="copyright">2017 All Rights Reserved</div>
			</div>
		</div>
		<slidebar class="slidebar"></slidebar>
	</div>
</template>
<script>
	import {mapState, mapGetters} from 'vuex'

	import Topnav from '../components/topnav.vue'
	import Sidenav from '../components/sidenav.vue'
	import Slidebar from '../components/slidebar.vue'
	export default {

		data(){
			return {

			}
		},
		methods: {

		},
		computed: {
			...mapGetters({
				progressing: 'getProgress'
			})
		},
		components: {
			Topnav,
			Sidenav,
			Slidebar
		}

	}
</script>
<style lang="less">
	.pace {
		-webkit-pointer-events: none;
		pointer-events: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;
		z-index: 2001;
		position: fixed;
		width: 100%;
		margin: auto;
		top: 0;
		left: 0;
		background-color: transparent;
		&.el-progress {
			position: fixed;
		}
		.el-progress-bar__outer {
			background-color: transparent!important;
		}
	}

	.paper-wrap {
		position: relative;
		overflow: hidden;
		margin-left: 250px;
		min-height: 600px;
	    background: #f5f5f5;
	    background: -moz-linear-gradient(45deg, #f5f5f5 30px, #f5f5f5 30px), -moz-linear-gradient(135deg, transparent 30px, #f5f5f5 30px), -moz-linear-gradient(225deg, #f5f5f5 30px, #f5f5f5 30px), -moz-linear-gradient(315deg, transparent 30px, #f5f5f5 30px);
	    background: -o-linear-gradient(45deg, #f5f5f5 30px, #f5f5f5 30px), -o-linear-gradient(135deg, transparent 30px, #f5f5f5 30px), -o-linear-gradient(225deg, #f5f5f5 30px, #f5f5f5 30px), -o-linear-gradient(315deg, transparent 30px, #f5f5f5 30px);
	    background: -webkit-linear-gradient(45deg, #f5f5f5 30px, #f5f5f5 30px), -webkit-linear-gradient(135deg, transparent 30px, #f5f5f5 30px), -webkit-linear-gradient(225deg, #f5f5f5 30px, #f5f5f5 30px), -webkit-linear-gradient(315deg, transparent 30px, #f5f5f5 30px);
	    background-position: bottom left, bottom right, top right, top left;
	    -moz-background-size: 52% 52%;
	    -webkit-background-size: 52% 52%;
	    background-size: 52% 52%;
	    background-repeat: no-repeat;
		&:before {
		    content: "";
		    position: absolute;
		    top: 0;
		    left: 0;
		    border-width: 0 42px 42px 0;
		    border-style: solid;
		    border-color: #ffffff rgba(0, 0, 0, 0.1);
		    -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.3);
		    -moz-box-shadow: 0 0 0 rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.3);
		    box-shadow: 0 0 0 rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.3);
		    -webkit-transform: rotate(-90deg);
		    -moz-transform: rotate(-90deg);
		    -ms-transform: rotate(-90deg);
		    -o-transform: rotate(-90deg);
		}
		.paper-head {
			border-bottom: 1px solid #ddd;
			padding: 0;
			height: 50px;
			.title {
				padding-left: 60px;
				font-size: 16px;
				color: #9EA7B3;
			    font-family: "Open Sans";
			}
			.cell {
				height: 50px;
				line-height: 50px;
				border-left: 1px dashed #ddd;
				margin-left: -1px;
				overflow: hidden;
			}
		}
	}

	.breadcrumb {
		border-bottom: 1px solid rgba(0, 0, 0, 0.04);
		margin: 0;
		overflow: hidden;
		padding: 15px 0 15px 20px;
		width: 100%;
		background: none repeat scroll 0 0 rgba(0, 0, 0, 0.02);
	}
	.footer {
		position: absolute;
		bottom: 0;
		background: none repeat scroll 0 0 #f8f8f8;
		border-top: 1px solid #DDDDDD;
		bottom: 0;
		height: 50px;
		line-height: 50px;
		width: 100%;
	}
	.slidebar {
		width: 200px;
		position: absolute;
		top: 0;
		right: 0;
		display: none;
	}
	.copyright {
	    bottom: 0;
	    color: #666666;
	    float: right;
	    font-size: 12px !important;
	    padding: 0 15px;
	    border-left: 1px dashed #ddd;
	    position: relative;
	}
</style>