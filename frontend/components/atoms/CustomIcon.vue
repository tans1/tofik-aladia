<template>
  <div data-cy="custom-icon">
    <i :class="iconClass" />
  </div>
</template>

<script>
export default {
  name: "CustomIcon",
  props: {
    iconClass: {
      type: String,
      required: true
    }
  }
};
</script>
