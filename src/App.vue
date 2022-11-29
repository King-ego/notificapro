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
  --blackA03: rgba(0, 0, 0, 0.3);
  --gray900: #111;
  --gray600: #1f1f1f;
  --gray500: #262222;
  --lightGray: #999999;
  --darkBlue: #2c3e50;
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
  color: var(--darkBlue);
}

button {
  cursor: pointer;
}

.button-generic {
  font-weight: 500;
  font-size: 17px;
  border: 2px solid var(--primaryColor);
  cursor: pointer;
  border-radius: 20px;
  padding: 6px 10px;
  color: var(--primaryColor);
}

.button-generic:hover {
  color: var(--white);
  background: var(--primaryColor);
}

.container-generic {
  width: 100%;
  max-width: 1300px;
  margin: auto;
  padding-right: 5% !important;
  padding-left: 5% !important;
}
</style>
