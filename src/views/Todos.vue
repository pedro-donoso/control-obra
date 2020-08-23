<template>
  <div>
    <table class="table bg-white text-justify" >
      <thead class="bg-success text-justify">
        <tr>
          <th scope="col">Obra</th>
          <th scope="col">Faltante para Entrega</th>
          <th scope="col">Completada</th>
        </tr>
      </thead>
      <tbody v-for="todo in todos" :key="todo">
        <tr>
          <td scope="row">{{todo.id}}</td>
          <td>{{todo.title}}</td>
          <td>{{todo.completed}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async created() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    this.todos = response.data;
  },
  data() {
    return {
      todos: []
    };
  }
};
</script>

<style>
</style>