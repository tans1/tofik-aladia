<template>
  <img :src="src" :class="class" data-cy="image-component" />
</template>

<script>
export default {
  name: "CustomImage",
  props: {
    src: {
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
