<template>
  <div class="relative">
    <div class="box-content-info" ref="option">
      <div
        v-for="option in options"
        :key="option"
        @click="$emit('select', option)"
        :class="
          next && !selectOption
            ? 'error'
            : selectOption === option
            ? 'selected'
            : 'not-selected'
        "
      >
        <p>
          {{ option }}
        </p>
      </div>
    </div>
    <button class="button-arrow left" @click="mogol('left')">Left</button>
    <button class="button-arrow right" @click="mogol('right')">Right</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    options: { type: Array, requered: true, defalt: [] },
    next: { type: Boolean, requered: true, defalt: false },
    selectOption: { type: String, requered: true, defalt: "" },
  },
  emits: {
    select: null,
  },
  data() {
    return { scroll: 0 };
  },
  methods: {
    select(select: string) {
      this.$emit("select", select);
    },
    mogol(refName: string) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let element: any = this.$refs["option"];
      let scroll = this.scroll;
      if (refName === "right") {
        if (scroll >= element.scrollWidth - 300) return;
        scroll = scroll + 300;
        element.scrollTo(scroll, 0);
      } else if (refName === "left") {
        if (!scroll) return;
        scroll = scroll - 300;
        element.scrollTo(scroll, 0);
      }
      this.scroll = scroll;
    },
  },
  unmounted() {
    this.scroll = 0;
  },
});
</script>

<style lang="postcss" scoped>
.box-content-info {
  overflow-x: hidden;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  height: 430px;
  flex-wrap: wrap;
  gap: 10px 30px;
  scroll-behavior: smooth;
}

/* .box-content-info:hover {
  overflow-x: auto;
} */

.box-content-info div {
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  color: var(--black);
  border: 1px solid var(--primaryColor);
  border-radius: 20px;
}

.button-arrow {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none;
  position: absolute;
  top: 50%;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
</style>
