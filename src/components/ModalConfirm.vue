<template>
  <div class="modal flex justify-center items-center" v-if="show">
    <div class="modal-content">
      <div class="modal-title">Confirmar Notificação</div>
      <div class="flex items-center">
        <span class="list-item"></span>
        <p class="list-item-text">{{ data.user.name }}</p>
      </div>
      <div class="flex items-center" v-if="data.user.registre">
        <span class="list-item"></span>
        <p class="list-item-text">{{ data.user.registre }}</p>
      </div>
      <div class="flex items-center">
        <span class="list-item"></span>
        <p class="list-item-text">{{ data.user.admissonDate }}</p>
      </div>
      <div class="flex items-center">
        <span class="list-item"></span>
        <p class="list-item-text">{{ data.user.turn }}</p>
      </div>
      <div class="flex items-center">
        <span class="list-item"></span>
        <p class="list-item-text">{{ data.user.age }}</p>
      </div>
      <div class="flex items-center">
        <span class="list-item"></span>
        <p class="list-item-text">{{ data.user.sex }}</p>
      </div>
      <div class="flex items-center" v-if="data.user.ocorrencyDate">
        <span class="list-item"></span>
        <p class="list-item-text">{{ data.user.ocorrencyDate }}</p>
      </div>
      <div class="flex items-center">
        <span class="list-item"></span>
        <p class="list-item-text">{{ data.adverse }}</p>
      </div>
      <div class="flex items-center">
        <span class="list-item"></span>
        <p class="list-item-text">{{ data.option }}</p>
      </div>
      <div class="flex items-center">
        <span class="list-item"></span>
        <p class="list-item-text">{{ data.description }}</p>
      </div>
      <button class="container-button">
        <button @click="$emit('close')">Editar Notificação</button>
        <button @click="$emit('sucess')" class="button-generic">
          Enviar Notificação
        </button>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    show: { type: Boolean, required: true, default: false },
    data: {
      type: Object,
      requred: true,
      defalt: {},
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    sucess() {
      this.$emit("sucess");
    },
  },
});
</script>

<style lang="postcss" scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: var(--blackA03);
  top: 0;
  left: 0;
  padding-left: 5%;
  padding-right: 5%;
}

.modal-content {
  @apply flex flex-col items-start;
  width: 500px;
  min-height: 500px;
  background: var(--white);
  border-radius: 20px;
  padding: 10px 40px 60px;
  position: relative;
}

.modal-title {
  @apply flex justify-center;
  color: var(--primaryColor);
  font-weight: 600;
  font-size: 30px;
  width: 100%;
  margin-bottom: 40px;
}

.list-item {
  display: block;
  width: 10px;
  height: 10px;
  background: var(--primaryColor);
  border-radius: 50%;
  margin-right: 10px;
}

.list-item-text {
  text-align: left;
}

.container-button {
  @apply flex justify-between;
  width: 100%;
  margin-top: 100px;
}
.button-generic {
  background: var(--primaryColor);
  color: var(--white);
}
.button-generic:hover {
  background: var(--white);
  color: var(--primaryColor);
}
</style>
