import { STORAGE_KEY } from './mutation-types'

const localStoragePlugin = store => {
  store.subscribe((mutation, { todos }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos.todos))
    // 我的理解是 因为分了模块，所以每个模块有属于自己的state
    // 那么保存的时候也需要找到对应的模块下的state因此有两层
    // console.log(JSON.stringify(todos)+'plugin todos')
  })
}

export default [localStoragePlugin]
