<template>
  <ul>
    <li v-for="p in products">
      {{ p.title }} - {{ p.price | currency }}
      <br>
      <button
        :disabled="!p.inventory"
        @click="addToCart(p)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
        products: 'allProducts'
    })
  },
  // computed: mapGetters({
  //  products: 'allProducts'
  // }),
  methods: {
    ...mapActions([
      'addToCart'
    ])
  },
  created () {
    // console.log(this.$store)
    this.$store.dispatch('getAllProducts')
  }
}
</script>