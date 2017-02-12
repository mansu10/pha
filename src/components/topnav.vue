<template>
	<nav class="navbar collapsed">
		<el-row>
<!-- 			<div class="navbar-header">
				<el-button type="primary" icon="edit"></el-button>
			</div> -->
			<div class="pull-left toolbox">
				<el-dropdown trigger="click" class="nav" menu-align="start">
					<el-button type="text" class="nav-btn" size="large">
						<el-badge :value="12" :max="99" class="badge">
							<i class="iconfont">&#xe763;</i>
						</el-badge>
					</el-button>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-dropdown trigger="click" class="nav" menu-align="start">
					<el-button type="text" class="nav-btn" size="large">
						<el-badge :value="5" :max="99" class="badge">
							<i class="iconfont">&#xe759;</i>
						</el-badge>
					</el-button>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<!-- <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
					<i class="iconfont">&#xe759;</i>
				</el-tooltip> -->
				<el-dropdown trigger="click" class="nav" menu-align="start">
					<el-button type="text" class="nav-btn" size="large">
						<i class="iconfont">&#xe759;</i>
					</el-button>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<div class="pull-left runningbox">
				<ul class="u-date datetime">
                    <li class="calendar"></li>
                    <li>Sun,  1 January 2017</li>
                </ul>

                <ul class="u-date digital">
                    <li class="entypo-clock" style="margin-right:5px"></li>
                    <li class="hour">13</li>
                    <li>:</li>
                    <li class="min">1</li>
                    <li>:</li>
                    <li class="sec">41</li>
                    <li class="meridiem">PM</li>
                </ul>		
			</div>
			<div class="pull-right settingbox">
				<el-dropdown trigger="click" class="item">
					<a href="javascript:;" class="el-dropdown-link">
					    <img alt="" class="admin-pic img-circle" src="http://api.randomuser.me/portraits/thumb/men/10.jpg">
					    <span>Hi, Dave</span>
					    <b class="caret"></b>
					</a>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-dropdown trigger="click" class="item">
					<a href="javascript:;" class="el-dropdown-link">
					    <i class="iconfont"></i>下拉菜单
					</a>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-button size="mini" class="item">
					<i class="iconfont">&#xe763;</i>
				</el-button>
			</div>
		</el-row>
	</nav>
</template>

<script>
	
</script>

<style lang="less" scoped>
	.navbar {
		height: 55px;
		overflow: hidden;
		margin-left: 240px;
		margin-top: 10px;
	}
	.nav {
		.nav-btn {
			padding: 15px;
			.badge {
				padding: 3px;
			}
		}
	}
	.toolbox {
		.iconfont {
			color: #fff;
		}
	}
	.runningbox {
	    background: none repeat scroll 0 0 rgba(0, 0, 0, 0.2);
	    border: 1px solid rgba(0, 0, 0, 0.2);
	    border-radius: 30px;
	    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
	    color: #FFFFFF;
	    margin: 6px;
	    padding: 10px 20px;
	    width: 50%;
		.digital {
		    li {
		    	display: inline;
		    }
		}	    
	}
	.u-date {
		float: left;
		border-right: 1px solid rgba(0, 0, 0, 0.4);
		box-shadow: 1px 0 0 rgba(255, 255, 255, 0.1);
		padding-right: 15px;
	}
	.settingbox {
		// padding: 15px 0;
		.el-dropdown-link {
			color: #fff;
		}
		.item {
			margin: 0 15px;
		}
	}
	.admin-pic {
		vertical-align: middle;
	}
	.img-circle {
	    border-radius: 50%;
	}
	.caret {
	    display: inline-block;
	    width: 0;
	    height: 0;
	    margin-left: 2px;
	    vertical-align: middle;
	    border-top: 4px solid;
	    border-right: 4px solid transparent;
	    border-left: 4px solid transparent;
	}
</style>