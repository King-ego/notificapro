<template>
  <header class="header container-generic" v-if="checkedRouter()">
    <nav class="flex justify-between">
      <div class="flex items-start">
        <router-link to="/" class="flex items-center">
          <img src="../assets/images/logo.png" alt="Logo azul cruzada" />
          <span class="title-header">NOTIFICAPRO</span>
        </router-link>
      </div>
      <div class="flex flex-col justify-center gap-2">
        <router-link to="/" class="button-generic"
          >Guia de Orientação Para Preenchimento</router-link
        >
        <router-link to="/new-notification" class="button-generic"
          >Novas Notificações</router-link
        >
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    checkedRouter() {
      const routesDoNotExistHeader = ["/login"];
      if (routesDoNotExistHeader.includes(this.$route.path)) {
        return false;
      }
      return true;
    },
  },
});
</script>

<style scoped>
.header {
  padding: 10px 0;
}
.title-header {
  font-weight: bold;
  font-size: 24px;
  color: var(--primaryColor);
  margin-left: 8px;
}
</style>
