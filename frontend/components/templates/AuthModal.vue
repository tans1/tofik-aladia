<template>
  <div>
    <div
      v-if="authStore.isModalOpen"
      class="fixed bottom-0 left-0 right-0 top-0 z-[90] flex h-full w-full items-center justify-center bg-black/50 backdrop-blur transition-all duration-300"
      @click.self="closeModal"
      data-cy="modal-overlay">
      <div
        class="relative -mt-20 flex h-[40rem] w-[26rem] flex-col rounded-md border border-white"
        data-cy="modal-content">
        <Home
          v-if="authStore.currentModal === 'home'"
          data-cy="home-contents" />
        <Login
          v-if="authStore.currentModal === 'login'"
          data-cy="login-contents" />
        <SignUp
          v-if="authStore.currentModal === 'signup'"
          data-cy="sign-up-contents" />
        <OTP v-if="authStore.currentModal === 'otp'" data-cy="otp-contents" />
        <LoginSuccess
          v-if="authStore.currentModal === 'loginSuccess'"
          data-cy="password-success-contents" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../../stores/authStore";
import Home from "./authModalContents/Home.vue";
import Login from "./authModalContents/Login.vue";
import LoginSuccess from "./authModalContents/loginSuccess.vue";
import SignUp from "./authModalContents/signUp.vue";
import OTP from "./authModalContents/OTP.vue";

const authStore = useAuthStore();

const closeModal = () => authStore.closeModal();
</script>
