<template>
  <div
    class="relative z-10 p-5 text-13 h-[40rem] w-[26rem] bg-black/40 text-white backdrop-blur">
    <div class="flex flex-col items-center px-4">
      <SignUpHeader data-cy="sign-up-header" />
      <SignUpIntro data-cy="sign-up-intro" :error="imageNotAttached" />
      <AcceptTermsAndConditions data-cy="accept-terms" />
      <CustomText
        text="Enter your details"
        class="mb-4 text-center text-xs"
        data-cy="enter-details-text" />
    </div>
    <div class="px-4">
      <form
        class="flex flex-col space-y-1"
        @submit.prevent="handleSubmit"
        data-cy="sign-up-form">
        <FormField
          v-model="formData.firstName"
          :value="formData.firstName"
          @input="$v.firstName.$touch"
          placeholder="Name"
          iconClass="fa-solid fa-user text-base text-black/70"
          data-cy="first-name-field" />
        <div class="text-red-500 text-xs" data-cy="first-name-error">
          <span>{{
            $v.firstName.$error ? $v.firstName.$errors[0]?.$message : "&nbsp"
          }}</span>
        </div>
        <FormField
          v-model="formData.surName"
          :value="formData.surName"
          @input="$v.surName.$touch"
          placeholder="Surname"
          iconClass="fa-solid fa-user text-base text-black/70"
          data-cy="surname-field" />
        <div class="text-red-500 text-xs w-full h-full" data-cy="surname-error">
          <span>{{
            $v.surName.$error ? $v.surName.$errors[0]?.$message : "&nbsp"
          }}</span>
        </div>
        <FormField
          :placeholder="formData.email"
          :disabled="true"
          iconClass="fa-solid fa-envelope text-base text-black/70"
          data-cy="email-field" />

        <div class="flex flex-col space-y-1">
          <div class="flex w-full flex-1 flex-col justify-center h-[50%] mt-3">
            <FormField
              v-model="formData.password"
              :value="formData.password"
              @input="
                () => {
                  $v.password.$touch();
                  $v.password.$validate();
                }
              "
              iconClass="fa-solid fa-key text-base text-black/70"
              inputType="password"
              placeholder="Password"
              data-cy="password-field" />

            <div
              class="flex h-4 w-full items-center justify-between text-xs mt-2 mb-2">
              <div>
                <div
                  class="text-xs"
                  data-cy="password-error"
                  :class="{
                    'text-white': !$v.password.$dirty,
                    'text-red-500': $v.password.$dirty && $v.password.$error,
                    'text-[#e3e469]':
                      $v.password.$dirty &&
                      !checkPassword(formData.password).valid &&
                      !$v.password.$error,
                    'text-[#49a02f]':
                      checkPassword(formData.password).valid &&
                      !$v.password.$error
                  }">
                  <span
                    >{{
                      $v.password.$error
                        ? $v.password.$errors[0]?.$message
                        : $v.password.$dirty
                        ? checkPassword(formData.password).valid
                          ? "Strong password"
                          : checkPassword(formData.password).message
                        : "&nbsp"
                    }}
                  </span>
                </div>
              </div>
              <div class="h-1.5 w-24 rounded bg-[#4e4e4e]">
                <div
                  class="h-full rounded transition-all duration-300 w-0"
                  :class="{
                    'bg-[#4e4e4e]': !$v.password.$dirty,
                    'bg-[#dc7c56] w-1/2': $v.password.$error,
                    'bg-[#e3e469] w-4/5':
                      $v.password.$dirty &&
                      !checkPassword(formData.password).valid &&
                      !$v.password.$error,
                    'bg-[#49a02f] w-full':
                      checkPassword(formData.password).valid &&
                      !$v.password.$error
                  }"></div>
              </div>
            </div>
          </div>

          <div class="flex w-full flex-1 flex-col justify-center h-[50%]">
            <FormField
              v-model="formData.confirmPassword"
              :value="formData.confirmPassword"
              @input="$v.confirmPassword.$touch"
              iconClass="fa-solid fa-key text-base text-black/70"
              inputType="password"
              placeholder="Confirm Password"
              data-cy="confirm-password-field" />

            <div
              class="flex h-4 w-full items-center justify-between text-xs mt-2 mb-2">
              <div>
                <div class="text-[#E54E4E]" data-cy="confirm-password-error">
                  {{
                    formData.password !== formData.confirmPassword &&
                    formData.confirmPassword !== ""
                      ? "Passwords don't match"
                      : "&nbsp"
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <GradientButton
          text="Enter"
          buttonType="submit"
          data-cy="submit-button"
          :disabled="
            formData.password !== formData.confirmPassword ||
            $v.$pending ||
            $v.$errors.length > 0
          "
          :isLoading="isLoading" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import SignUpHeader from "../../molecules/SignUpHeader.vue";
import SignUpIntro from "../../organisms/SignUpIntro.vue";
import AcceptTermsAndConditions from "../../molecules/termsAndConditions/AcceptTermsAndConditions.vue";
import CustomText from "../../atoms/CustomText.vue";
import FormField from "../../molecules/FormField.vue";
import GradientButton from "../../atoms/buttons/GradientButton.vue";
import { useVuelidate } from "@vuelidate/core";
import { useAuthStore } from "../../../stores/authStore";
import {
  signUpValidation,
  checkPassword
} from "../../../validations/signupValidation";
import { reactive, ref } from "vue";
const authStore = useAuthStore();

const formData = reactive({
  email: authStore.user.email,
  firstName: "",
  surName: "",
  password: "",
  confirmPassword: ""
});
const rules = signUpValidation;
const $v = useVuelidate(rules, formData);

const isLoading = ref(false);
const imageNotAttached = ref(false);

const handleSubmit = async () => {
  imageNotAttached.value = authStore.user.imageUrl === "";

  $v.value.$touch();
  $v.value.$validate();
  const passwordCheck = checkPassword(formData.password);
  if (!$v.value.$error && passwordCheck.valid) {
    isLoading.value = true;
    localStorage.setItem("email", formData.email);
    authStore.setUserData({
      email: formData.email,
      firstName: formData.firstName,
      surName: formData.surName
    });
    setTimeout(() => {
      isLoading.value = false;
      authStore.setCurrentModal("otp", formData.email);
    }, 1000);
  }
};
</script>
