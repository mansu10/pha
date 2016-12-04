<template>
  <li class="todo" :class="{ editing: editing }">
    <div class="view">
      <input class="toggle">
      <label></label>
      <button class="destroy"></button>
    </div>
    <input class="edit">
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Todos',
  props: ['todo'],
  data () {
    return {
      editing: false
    }
  },
  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    }
  },
  computed: {
    ...mapGetters({
        
    })
  },
  methods: {
    ...mapActions([
      'editTodo',
      'toggleTodo',
      'deleteTodo'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  line-height: 1.5em;
  padding-left: 1.5em;
}

a {
  color: #7f8c8d;
  text-decoration: none;
}

a:hover {
  color: #4fc08d;
}
</style>
