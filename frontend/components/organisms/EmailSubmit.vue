<template>
  <div>
    <CustomText class="mb-5 text-base text-center" text="Enter your email" />
  </div>
  <div class="px-4 mb-5">
    <form
      class="flex flex-col space-y-2"
      data-cy="email-form"
      @submit.prevent="handleSubmit">
      <FormField
        v-model="formData.email"
        placeholder="Email Address"
        iconClass="fa-solid fa-envelope text-base text-black/70"
        :value="formData.email"
        :updateValue="$v.email.$touch"
        data-cy="email-input" />

      <div v-if="$v.$error" class="text-red-500 text-sm" data-cy="email-error">
        {{ $v.email.$errors[0].$message }}
      </div>
      <GradientButton
        text="Enter"
        buttonType="submit"
        buttonClass="text-white"
        data-cy="submit-button"
        :handleClick="handleSubmit"
        :isLoading="isLoading" />
    </form>
  </div>
</template>

<script setup lang="ts">
import CustomText from "../atoms/CustomText.vue";
import FormField from "../molecules/FormField.vue";
import GradientButton from "../atoms/buttons/GradientButton.vue";
import { useVuelidate } from "@vuelidate/core";
import { emailValidation } from "../../validations/emailValidation";
import { submitEmail } from "../../api/api";
import { useAuthStore } from "../../stores/authStore";
import { reactive, ref } from "vue";
const authStore = useAuthStore();
const isLoading = ref(false);

const formData = reactive({
  email: authStore.user.email
});
const rules = emailValidation;
const $v = useVuelidate(rules, formData);
const handleSubmit = async () => {
  $v.value.$touch();
  $v.value.$validate();
  if (!$v.value.$error) {
    isLoading.value = true;
    const res = await submitEmail(formData.email);
    setTimeout(() => {
      isLoading.value = false;
      if (res.status === 200) {
        authStore.setCurrentModal("login", formData.email);
      } else if (res.status === 404) {
        authStore.setCurrentModal("signup", formData.email);
      }
    }, 1000);
  }
};
</script>
