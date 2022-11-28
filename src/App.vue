<template>
  <Header />
  <router-view />
  <Button />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/HeaderAplication.vue";
import Button from "./components/ButtonHelp.vue";

export default defineComponent({
  components: { Header, Button },
});
</script>

<style>
:root {
  --primaryColor: #47aee1;
  --secundaryColor: #47e1ae;
  --white: #fff;
  --black: #000;
  --gray900: #111;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  cursor: pointer;
}

.button-generic {
  font-weight: 500;
  font-size: 17px;
  border: 2px solid #47aee1;
  cursor: pointer;
  border-radius: 20px;
  padding: 6px 10px;
  color: #47aee1;
}

.button-generic:hover {
  color: #fff;
  background: #47aee1;
}

.container-generic {
  width: 100%;
  max-width: 1300px;
  margin: auto;
  padding-right: 5% !important;
  padding-left: 5% !important;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
