<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="[ todo.completed ? 'completed' : '' ]"
    >
      {{ todo.text }}
      <input
        type="checkbox"
        v-model="todo.completed"
        data-test="todo-checkbox"
      />
    </div>

    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class TodoApp extends Vue {
     newTodo='';
      todos=[
        {
          id: 1,
          text: 'Learn Vue.js 3',
          completed: false
        }
      ]

 createTodo() {
      this.todos.push({
        id: 2,
        text: this.newTodo,
        completed: false
      })
    }
}
</script>