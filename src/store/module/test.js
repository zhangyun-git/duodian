const state = {
    todoList: [
    ]
  }
  const getters = {
    notList (state) {
      return state.todoList.filter((item) => {
        return item.status === false
      })
    },
    readyList (state) {
      return state.todoList.filter((item) => {
        return item.status
      })
    }
  }
  const mutations = {
    ADD_TODO (state, todo) {
      state.todoList.push(todo)
    },
    REMOVE_TODO (state, todoID) {
      console.log(todoID)
      state.todoList.map((item) => {
        console.log(todoID)
        if (item.id === todoID) {
          return state.todoList.splice(todoID-1, 1)
        }
      })
    }
  }
  export default {
    state,
    getters,
    mutations
  }
  