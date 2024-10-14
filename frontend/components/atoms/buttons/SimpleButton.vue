<template>
  <button :class="class" @click="click" :type="type" data-cy="button-component">
    <slot />
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    type: {
      type: String,
      default: "button"
    },
    class: {
      type: String,
      default: ""
    },
    click: {
      type: Function,
      default: () => {}
    }
  }
};
</script>
