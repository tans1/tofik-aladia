<template>
  <p :class="class" data-cy="text-component">
    {{ text }}
  </p>
</template>

<script>
// import { useI18n, useLocalePath } from "#imports";
export default {
  name: "CustomText",
  props: {
    text: {
      type: String,
      required: true
    },
    class: {
      type: String,
      default: ""
    }
  }
};
</script>
