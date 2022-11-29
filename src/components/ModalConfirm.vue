<template>
  <div class="modal flex justify-center items-center" v-if="show">
    <div class="modal-content flex justify-center items-center flex-col">
      <p>{{ data.user.name }}</p>
      <p>{{ data.user.registre }}</p>
      <p>{{ data.user.admissonDate }}</p>
      <p>{{ data.user.turn }}</p>
      <p>{{ data.user.age }}</p>
      <p>{{ data.user.sex }}</p>
      <p>{{ data.user.ocorrencyDate }}</p>
      <p>{{ data.adverse }}</p>
      <p>{{ data.option }}</p>
      <p>{{ data.description }}</p>
      <button @click="$emit('close')">dfdfdf</button>
      <button></button>
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
  },
});
</script>

<style scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: var(--blackA03);
  top: 0;
  left: 0;
}

.modal-content {
  width: 500px;
  height: 500px;
  background: var(--white);
}
</style>
