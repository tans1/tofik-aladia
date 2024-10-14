<template>
  <div
    class="group relative flex h-10 w-full rounded transition-all bg-white"
    data-cy="form-field-container">
    <div
      class="flex w-10 items-center justify-center text-xl"
      data-cy="icon-container">
      <CustomIcon :iconClass="iconClass" />
    </div>

    <CustomInput
      :type="toggleType"
      :value="value"
      @input="$emit('update:modelValue', $event.target.value)"
      class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
      style="--bg-body: white"
      :disabled="disabled"
      data-cy="input-field" />

    <CustomIcon
      v-if="originalType === 'password' && toggleType === 'password'"
      @click="togglePasswordVisibility"
      iconClass="fa-solid absolute right-3 top-[0.7rem] scale-100 cursor-pointer text-base text-black/50 transition-all active:scale-90 fa-eye-slash"
      data-cy="toggle-password-visibility-icon" />

    <CustomIcon
      v-if="originalType === 'password' && toggleType === 'text'"
      @click="togglePasswordVisibility"
      iconClass="fa-solid absolute right-3 top-[0.7rem] scale-100 cursor-pointer text-base text-black/50 transition-all active:scale-90 fa-eye"
      data-cy="toggle-password-visibility-icon" />

    <div
      v-if="value === ''"
      class="pointer-events-none absolute left-10 top-[0.65rem] origin-left text-sm text-black/50 transition-all scale-100"
      data-cy="placeholder-text">
      {{ placeholder }}
    </div>
  </div>
</template>

<script>
import CustomInput from "../atoms/CustomInput.vue";
import CustomIcon from "../atoms/CustomIcon.vue";

export default {
  name: "FormField",
  components: {
    CustomInput,
    CustomIcon
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    updateValue: {
      type: Function,
      default: () => {}
    },
    inputType: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    iconClass: {
      type: String,
      default: "fa-envelope"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      originalType: this.inputType,
      toggleType: this.inputType
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.toggleType = this.toggleType === "text" ? "password" : "text";
    }
  }
};
</script>
