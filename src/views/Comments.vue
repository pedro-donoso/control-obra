<template>
  <div>
    <table class="table bg-white text-justify" >
      <thead class="bg-success text-justify">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Body Post</th>
        </tr>
      </thead>
      <tbody v-for="comment in comments" :key="comment.id">
        <tr>
          <td scope="row">{{comment.id}}</td>
          <td>{{comment.body}}</td>
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
      "https://jsonplaceholder.typicode.com/comments"
    );
    this.comments = response.data;
  },
  data() {
    return {
      comments: []
    };
  }
};
</script>

<style>
</style>