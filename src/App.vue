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
@import url(~/static/styles/common.css);
@import url(~/static/styles/style.css);
body {
    font-family:"Helvetica Neue", Helvetica, Arial, sans-serif!important;
    background: url(~/static/images/bg/bg.jpg) no-repeat top center fixed;
}
/*h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
}*/
</style>
