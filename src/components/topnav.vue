<template>
	<nav>
		<div>
			<div class="navbar-header">
				<el-button type="primary" icon="edit"></el-button>
			</div>
			<div>
				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
					<i class="el-icon-caret-bottom el-icon-edit"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
					<i class="el-icon-caret-bottom el-icon-edit"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
					<i class="el-icon-caret-bottom el-icon-edit"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<div id="nt-title-container" class="navbar-left running-text visible-lg">
			    <ul class="date-top">
			        <li class="entypo-calendar" style="margin-right:5px"></li>
			        <li id="Date"></li>


			    </ul>

			    <ul id="digital-clock" class="digital">
			        <li class="entypo-clock" style="margin-right:5px"></li>
			        <li class="hour"></li>
			        <li>:</li>
			        <li class="min"></li>
			        <li>:</li>
			        <li class="sec"></li>
			        <li class="meridiem"></li>
			    </ul>
			    <ul id="nt-title">
			        <li><i class="wi-day-lightning"></i>&#160;&#160;Berlin&#160;
			            <b>85</b><i class="wi-fahrenheit"></i>&#160;; 15km/h
			        </li>
			        <li><i class="wi-day-lightning"></i>&#160;&#160;Yogyakarta&#160;
			            <b>85</b><i class="wi-fahrenheit"></i>&#160;; Tonight- 72 °F (22.2 °C)
			        </li>

			        <li><i class="wi-day-lightning"></i>&#160;&#160;Sttugart&#160;
			            <b>85</b><i class="wi-fahrenheit"></i>&#160;; 15km/h
			        </li>

			        <li><i class="wi-day-lightning"></i>&#160;&#160;Muchen&#160;
			            <b>85</b><i class="wi-fahrenheit"></i>&#160;; 15km/h
			        </li>

			        <li><i class="wi-day-lightning"></i>&#160;&#160;Frankurt&#160;
			            <b>85</b><i class="wi-fahrenheit"></i>&#160;; 15km/h
			        </li>

			    </ul>
			</div>
			<ul style="margin-right:0;" class="nav navbar-nav navbar-right">
			    <li>
			        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
			            <img alt="" class="admin-pic img-circle" src="http://api.randomuser.me/portraits/thumb/men/10.jpg">Hi, Dave Mattew <b class="caret"></b>
			        </a>
			        <ul style="margin-top:14px;" role="menu" class="dropdown-setting dropdown-menu">
			            <li>
			                <a href="#">
			                    <span class="entypo-user"></span>&#160;&#160;My Profile</a>
			            </li>
			            <li>
			                <a href="#">
			                    <span class="entypo-vcard"></span>&#160;&#160;Account Setting</a>
			            </li>
			            <li>
			                <a href="#">
			                    <span class="entypo-lifebuoy"></span>&#160;&#160;Help</a>
			            </li>
			            <li class="divider"></li>
			            <li>
			                <a href="http://themeforest.net/item/apricot-navigation-admin-dashboard-template/7664475?WT.ac=category_item&WT.z_author=themesmile">
			                    <span class="entypo-basket"></span>&#160;&#160; Purchase</a>
			            </li>
			        </ul>
			    </li>
			    <li>
			        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
			            <span class="icon-gear"></span>&#160;&#160;Setting</a>
			        <ul role="menu" class="dropdown-setting dropdown-menu">

			            <li class="theme-bg">
			                <div id="button-bg"></div>
			                <div id="button-bg2"></div>
			                <div id="button-bg3"></div>
			                <div id="button-bg5"></div>
			                <div id="button-bg6"></div>
			                <div id="button-bg7"></div>
			                <div id="button-bg8"></div>
			                <div id="button-bg9"></div>
			                <div id="button-bg10"></div>
			                <div id="button-bg11"></div>
			                <div id="button-bg12"></div>
			                <div id="button-bg13"></div>
			            </li>
			        </ul>
			    </li>
			    <li class="hidden-xs">
			        <a class="toggle-left" href="#">
			            <span style="font-size:20px;" class="entypo-list-add"></span>
			        </a>
			    </li>
			</ul>
		</div>
	</nav>
</template>