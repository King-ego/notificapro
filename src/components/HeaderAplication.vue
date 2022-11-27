<template>
  <header class="header container-generic">
    <nav class="flex justify-between">
      <div class="flex items-center">
        <router-link to="/" class="flex items-center">
          <img src="../assets/images/logo.png" alt="Logo azul cruzada" />
          <span class="title-header">NOTIFICAPRO</span>
        </router-link>
      </div>
      <div class="flex flex-col justify-center gap-2">
        <router-link to="/" class="button-generic"
          >Guia de Orientação Para Preenchimento</router-link
        >
        <router-link to="/" class="button-generic"
          >Novas Notificações</router-link
        >
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.header {
  padding: 10px 0;
}
.title-header {
  font-weight: bold;
  font-size: 24px;
  color: #47aee1;
  margin-left: 8px;
}
</style>
