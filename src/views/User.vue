<template>
  <div class="container-fluid">
    <table class="table table-sm bg-white text-justify" >
      <thead class="bg-success text-justify">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Usuario</th>
          <th scope="col">Email</th>
          <th scope="col">Dirección</th>
          <th scope="col">Ciudad</th>
          <th scope="col">Compañía</th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.id">
        <tr>
          <td scope="row">{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>
            {{user.address.street}}
            <span>#{{user.address.suite}}</span>
          </td>
          <td>{{user.address.city}}</td>
          <td>{{user.company.name}}</td>
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

<style>
</style>