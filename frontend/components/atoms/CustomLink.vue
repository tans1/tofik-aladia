<template>
  <NuxtLink
    :to="endpoint"
    :target="target"
    :class="linkClass"
    data-cy="custom-link">
    {{ text }}
  </NuxtLink>
</template>

<script>
export default {
  name: "CustomLink",
  props: {
    endpoint: {
      type: String,
      required: true
    },
    target: {
      type: String,
      default: "_self"
    },
    text: {
      type: String,
      required: true
    },
    linkClass: {
      type: String,
      default: ""
    }
  }
};
</script>
