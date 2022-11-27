<template>
  <div
    @click="toggleShowHelp('click')"
    @mouseenter="toggleShowHelp('mouseenter')"
    @mouseout="toggleShowHelp('mouseout')"
    class="content-button-help"
  >
    <img src="../assets/images/what_icon.png" alt="logo whatsapp" />
    <div v-if="showHelpOption" class="dropdown-help">Precisa de ajuda?</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      showHelpOption: false,
    };
  },
  methods: {
    toggleShowHelp(typeEvent: string) {
      if (typeEvent === "click") {
        this.showHelpOption = !this.showHelpOption;
      }

      if (typeEvent === "mouseenter") {
        this.showHelpOption = true;
      }

      if (typeEvent === "mouseout") {
        this.showHelpOption = false;
      }
    },
  },
});
</script>

<style scoped>
.content-button-help {
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
}
.dropdown-help {
  position: absolute;
  top: -20px;
  left: -130px;
  animation: upDropDown 200ms forwards;
  background: var(--primaryColor);
  color: var(--white);
  padding: 5px;
  border-radius: 5px;
  min-width: max-content;
}

@keyframes upDropDown {
  from {
    /* transform: translateY(30px); */
  }
  to {
    /* transform: translateY(0); */
  }
}
</style>
