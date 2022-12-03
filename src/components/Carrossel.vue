<template>
  <div class="relative">
    <div class="box-content-info" ref="option">
      <div
        v-for="option in options"
        :key="option"
        @click="$emit('select', option)"
        :class="validated(option)"
      >
        <p>
          {{ option }}
        </p>
      </div>
    </div>
    <button v-if="scroll" class="button-arrow left" @click="moveSlide('left')">
      <img src="../assets/images/angle-left.png" alt="Arrow left" />
    </button>
    <button
      v-if="scroll < widthScroll"
      class="button-arrow right"
      @click="moveSlide('right')"
    >
      <img src="../assets/images/angle-right.png" alt="Arrow right" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { classValidated } from "../methodValidated";

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
    return { scroll: 0, widthScroll: 1 };
  },
  methods: {
    select(select: string) {
      this.$emit("select", select);
    },
    validated(option: string) {
      return classValidated(option, this.next, this.selectOption);
    },
    moveSlide(direction: "right" | "left") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let element: any = this.$refs["option"];
      let scroll = this.scroll;
      if (direction === "right") {
        scroll = scroll + 300;
      } else if (direction === "left") {
        scroll = scroll - 300;
      }
      element.scrollTo(scroll, 0);
      this.scroll = scroll;
      this.widthScroll = element.scrollWidth - 390;
      console.log({ second: this.$data });
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
  max-width: 609px;
  display: flex;
  flex-direction: column;
  height: 430px;
  flex-wrap: wrap;
  gap: 10px 30px;
  scroll-behavior: smooth;
}

.box-content-info div {
  cursor: pointer;
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
  transform: translateY(-50px);
  background: var(--blackA03);
  width: 42px;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
</style>
