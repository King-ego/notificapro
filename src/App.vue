<template>
  <header-application />
  <router-view />
  <button-help />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/HeaderAplication.vue";
import Button from "./components/ButtonHelp.vue";

export default defineComponent({
  components: { "header-application": Header, "button-help": Button },
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
  --gray200: #bfbfbf;
  --lightGray: #999999;
  --darkBlue: #2c3e50;
  --red: #ff0202;
}
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--primaryColor);
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
  width: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: linear-gradient(var(--secundaryColor), var(--primaryColor));
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(var(--primaryColor), var(--secundaryColor));
  border-radius: 10px;
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

.btn-form {
  background: var(--secundaryColor);
  border: none;
  color: var(--white);
  padding: 10px 20px;
  border-radius: 20px;
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

.selected {
  border: 3px solid var(--secundaryColor) !important;
  animation: sucessAnimated 2s infinite;
}

.error {
  border: 1px solid var(--red) !important;
  animation: errorAnimated 2s forwards;
}

.error::placeholder {
  color: var(--red) !important;
}

.before::before {
  content: "";
  position: absolute;
  top: -200px;
  left: 0;
  bottom: 0;
  width: 100%;
  background: var(--secundaryColor);
  z-index: -1;
  transform: rotate(110deg);
  border-radius: 100px;
}

.after::after {
  content: "";
  position: absolute;
  top: -300px;
  left: -52px;
  bottom: 0;
  width: 96%;
  background: var(--primaryColor);
  z-index: -1;
  transform: rotate(-18deg);
  border-radius: 20px 100px 50% 100px;
}

@keyframes errorAnimated {
  from {
    box-shadow: 1px 1px 1px red;
  }
  to {
    box-shadow: 1px 1px 10px red;
  }
}
@keyframes sucessAnimated {
  from {
    box-shadow: 1px 1px 1px var(--secundaryColor);
  }
  to {
    box-shadow: 1px 1px 10px var(--secundaryColor);
  }
}
</style>
