<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>123232323</h2>

    <div><button @click="showConsole()">show</button></div>
  </div>
</template>

<script>
import Router from '../routers'
export default {
  name: 'Foo',
  data () {
    return {
      msg: 'Foo'
    }
  },
  methods: {
    showConsole () {
      Router.push('/bar')
      // console.log(this.$route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
