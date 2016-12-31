<template>
	<div>
		<el-progress class="pace" :text-inside="true" :percentage="70" :stroke-width="3" :show-text="false"></el-progress>
		<topnav></topnav>
		<sidenav></sidenav>
		<div class="wrap">
			<div class="row">
				<div class="pager-top">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div>
				<ul class="breadcrumb">
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<div class="search-in"></div>
			</div>
			<transition name="fade" mode="out-in">
			    <router-view></router-view>
			</transition>
			<div class="footer">footer</div>
		</div>
		<slidebar></slidebar>
	</div>
</template>
<script>
	import Topnav from '../components/topnav.vue'
	import Sidenav from '../components/sidenav.vue'
	import Slidebar from '../components/slidebar.vue'
	export default {

		data(){
			return {

			}
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
		margin: auto;
		top: 0;
		left: 0;
	}
</style>