<template>
  <div
    class="relative z-10 p-5 text-13 h-[40rem] w-[26rem] bg-black/40 text-white backdrop-blur"
    data-cy="new-password-container">
    <SignUpHeader data-cy="sign-up-header" />
    <LoginIntro data-cy="password-recovery-email-body" />
    <CustomText text="Enter your password" class="text-center text-xs mb-5" />

    <div class="px-4">
      <form
        class="flex flex-col space-y-1"
        @submit.prevent="handleSubmit"
        data-cy="sign-up-form">
        <div class="flex flex-col space-y-1">
          <div class="flex w-full flex-1 flex-col justify-center h-[50%] mt-3">
            <FormField
              v-model="formData.password"
              :value="formData.password"
              iconClass="fa-solid fa-key text-base text-black/70"
              inputType="password"
              placeholder="Password"
              data-cy="password-field" />

            <div
              class="flex h-4 w-full items-center justify-end text-xs mt-2 mb-2 cursor-pointer">
              <CustomText text="Forgot password?" class="" />
            </div>
          </div>
        </div>
        <GradientButton
          text="Enter"
          buttonType="submit"
          data-cy="submit-button"
          :isLoading="isLoading" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormField from "../../molecules/FormField.vue";
import GradientButton from "../../atoms/buttons/GradientButton.vue";
import LoginIntro from "../../organisms/LoginIntro.vue";
import SignUpHeader from "../../molecules/SignUpHeader.vue";
import CustomText from "../../atoms/CustomText.vue";
import { login } from "../../../api/api";
import { useAuthStore } from "../../../stores/authStore";
import { reactive, ref } from "vue";

const isLoading = ref(false);

const store = useAuthStore();

const formData = reactive({
  email: store.user?.email,
  password: ""
});

const handleSubmit = async () => {
  isLoading.value = true;
  const res = await login(formData.email, formData.password);
  if (res.status === 200) {
    setTimeout(() => {
      isLoading.value = false;
      store.setCurrentModal("loginSuccess", store.user?.email);
    }, 1000);
    // store.setCurrentModal("loginSuccess", store.user?.email);
  }
};
</script>
