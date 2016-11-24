<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>123232323</h2>
    <ul>
      <li v-for="p in products">
        {{ p.title }} - {{ p.price }}
        <br>
        <button>
          Add to cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Foo',
  data () {
    return {
      msg: 'bar'
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
