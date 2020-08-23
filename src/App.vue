<template>
  <div id="app">
    <Navegacion />
    <router-view />
  </div>
</template>

<script>
import Navegacion from "./components/Navegacion";

export default {
  data() {
    return {};
  },
  components: {
    Navegacion,
  },
};
</script>

<style lang="scss" src="./sass/main.scss"></style>
