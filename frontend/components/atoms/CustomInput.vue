<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="value"
    :class="class"
    :disabled="disabled"
    data-cy="input-component" />
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    updateValue: {
      type: Function,
      default: () => {}
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
