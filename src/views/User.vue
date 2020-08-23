<template>
  <div id="user">
    <table class="table table-sm table-responsive bg-white" >
      <thead class="bg-success">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Usuario</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.id" class="tabla">
        <tr>
          <td scope="row">{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
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
      "https://jsonplaceholder.typicode.com/users"
    );
    this.users = response.data;
  },
  data() {
    return {
      users: []
    };
  }
};
</script>

<style lang="scss" scoped>
  .tabla{
    width: 100%;
    border: solid 1px red;
  }



</style>