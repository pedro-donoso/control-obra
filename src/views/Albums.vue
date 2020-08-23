<template>
  <div class="container">
    <table class="table bg-white text-justify" >
      <thead class="bg-success text-justify">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
        </tr>
      </thead>
      <tbody v-for="album in albums" :key="album">
        <tr>
          <td scope="row">{{album.id}}</td>
          <td>{{album.title}}</td>
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
      "https://jsonplaceholder.typicode.com/albums"
    );
    this.albums = response.data;
  },
  data() {
    return {
      albums: []
    };
  }
};
</script>

<style>
</style>