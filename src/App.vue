<template>
    <div id="app">
<!--         <div class="header">
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
            <router-link to="/todos">Go to TODOS</router-link>
            <router-link to="/login">Go to login</router-link>
        </div> -->
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        
    </div>
</template>

<script>

    export default {
      name: 'app',
      data () {
        return {
            loading: ''
        }
    },
    beforeCreate () {

    }
    // dynamically set transition based on route change
    // watch: {
    //   '$route' (to, from) {
    //     const toDepth = to.path.split('/').length
    //     const fromDepth = from.path.split('/').length
    //     this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    //   }
    // }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
}
a {

}
a:visited {
    color: #06c;
}
body {
    color: #9ea7b3!important;
    font-family:"Open Sans", Arial, sans-serif!important;
    font-size: 13px!important;
    line-height: 20px;
    overflow-x: hidden!important;
    min-height: 100%;
    z-index: -2;
    margin: 0px !important;
    /*background: url('../img/bg.jpg') no-repeat top center fixed;*/
    -moz-background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
</style>
