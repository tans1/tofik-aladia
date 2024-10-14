<template>
  <div
    class="relative mb-4 flex h-10 w-full justify-between text-xl text-black">
    <form @submit.prevent="handleSubmit"></form>
    <CustomInput
      maxlength="1"
      data-cy="otp-field-1"
      class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
      :value="formData.value1"
      @input="formData.value1 = $event.target.value" />

    <CustomInput
      maxlength="1"
      data-cy="otp-field-2"
      class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
      :value="formData.value2"
      @input="formData.value2 = $event.target.value" />
    <CustomInput
      maxlength="1"
      data-cy="otp-field-3"
      class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
      :value="formData.value3"
      @input="formData.value3 = $event.target.value" />
    <CustomInput
      maxlength="1"
      data-cy="otp-field-4"
      class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
      :value="formData.value4"
      @input="formData.value4 = $event.target.value" />

    <CustomInput
      maxlength="1"
      data-cy="otp-field-5"
      class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
      :value="formData.value5"
      @input="formData.value5 = $event.target.value" />
    <CustomInput
      maxlength="1"
      data-cy="otp-field-6"
      class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
      :value="formData.value6"
      @input="formData.value6 = $event.target.value" />
  </div>
  <div class="mb-24 flex w-full justify-center">
    <div
      class="flex cursor-pointer items-center justify-center text-xs transition-all"
      data-cy="no-email-received-container">
      <div class="text-white/50" data-cy="no-email-received-text">
        You didn't receive any mail?
      </div>
    </div>
  </div>

  <GradientButton
    buttonType="submit"
    text="Enter"
    :handleClick="handleSubmit"
    :disabled="false"
    buttonClass="w-full h-full text-white"
    data-cy="otp-submit-button"
    :isLoading="isLoading" />
</template>

<script setup lang="ts">
import CustomInput from "../atoms/CustomInput.vue";

import GradientButton from "../atoms/buttons/GradientButton.vue";
import { useAuthStore } from "../../stores/authStore";
import { reactive, ref } from "vue";
const isLoading = ref(false);

const store = useAuthStore();

const formData = reactive({
  value1: "",
  value2: "",
  value3: "",
  value4: "",
  value5: "",
  value6: ""
});

const handleSubmit = async () => {
  isLoading.value = true;
  const otp =
    formData.value1 +
    formData.value2 +
    formData.value3 +
    formData.value4 +
    formData.value5 +
    formData.value6;
  setTimeout(() => {
    isLoading.value = false;
    store.setCurrentModal("loginSuccess", "");
  }, 1000);
  // store.setCurrentModal("loginSuccess", "");
};
</script>
