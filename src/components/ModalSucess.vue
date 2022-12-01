<template>
  <div v-if="show" class="modal">
    <div class="modal-content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
});
</script>

<style lang="postcss" scoped>
.modal {
  @apply flex justify-center;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: var(--blackA03);
  top: 0;
  left: 0;
}

.modal-content {
  @apply flex flex-col items-start;
  width: 500px;
  height: 500px;
  background: var(--white);
  border-radius: 20px;
  padding: 10px 40px;
  position: relative;
}
</style>
