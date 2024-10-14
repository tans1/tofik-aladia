<template>
  <button
    :type="buttonType"
    :class="buttonClass"
    :disabled="disabled"
    @click="handleClick">
    <div
      data-v-2e6163a4=""
      class="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border border-white/0 bg-black text-center text-sm scale-100 cursor-pointer"
      :class="{
        'transition-all hover:border-white/40 active:scale-95': !disabled
      }">
      <div
        data-v-2e6163a4=""
        class="gradient absolute inset-0 opacity-50"></div>
      <div data-v-2e6163a4="" v-if="!isLoading">
        {{ text }}
      </div>
      <i class="fa fa-spinner" aria-hidden="true" v-if="isLoading"></i>
    </div>
  </button>
</template>

<script>
export default {
  name: "GradientButton",
  props: {
    text: {
      type: String,
      default: ""
    },
    handleClick: {
      type: Function,
      default: () => {}
    },
    buttonType: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    buttonClass: {
      type: String,
      default: "w-full h-full"
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
.gradient[data-v-2e6163a4] {
  background: linear-gradient(
    15deg,
    #fff0 9.55%,
    #fff0 30.28%,
    #fff6,
    #fff0 41.58%,
    #fff0 59.02%,
    #fff 67.97%,
    #fff0 74.56%,
    #fff
  );
}
.fa-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
