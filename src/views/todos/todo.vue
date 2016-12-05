<template>
  <li class="todo" :class="{  completed: todo.done, editing: editing }">
    <div class="view">
      <input class="toggle"
      type="checkbox" 
      :checked="todo.done"
      @change="toggleTodo({todo: todo})">
      <label v-text="todo.text" @dblclick="editing = true"></label>
      <button class="destroy" @click="deleteTodo({todo:todo})"></button>
    </div>
    <input class="edit"
    v-show="editing"
    v-focus="editing"
    :value="todo.text"
    @keyup.enter="doneEdit"
    @keyup.esc="cancelEdit"
    @blur="doneEdit">
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
  methods: {
    ...mapActions([
      'editTodo',
      'toggleTodo',
      'deleteTodo'
    ]),
    doneEdit (e) {
      const value = e.target.value.trim()
      const {todo} = this
      if (!value) {
        this.deleteTodo({
          todo
        })
      } else if (this.editing) {
        this.editTodo({
          todo,
          value
        })
        this.editing = false
      }
    },
    cancelEdit (e) {
      e.target.value = this.todo.text
      this.editing = false
    }
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
