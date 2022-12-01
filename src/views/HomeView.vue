<template>
  <div class="home container-generic flex items-center">
    <div class="">
      <p class="home__text">
        Neste sistema você terá a oportunidade de efetuar as notificações de
        forma segura e <span>Anônima</span>.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>

<style scoped>
.home {
  width: 100%;
  height: calc(100vh - 111px);
  background-image: url("../assets/images/image_home.png");
  background-repeat: no-repeat;
  background-position: 90% 50%;
}
.home__text {
  margin-left: 80px;
  color: var(--gray500);
  font-size: 42px;
  font-weight: 100;
  width: 100%;
  max-width: 520px;
  text-align: left;
  line-height: 110%;
}
.home__text span {
  color: var(--primaryColor);
  font-weight: bold;
  text-transform: uppercase;
}
</style>
