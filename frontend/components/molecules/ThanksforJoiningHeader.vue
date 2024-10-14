<template>
  <div class="flex flex-col items-center px-6 pt-8">
    <CustomImage
      src="https://develop.aladia.io/logo/image.png"
      class="mb-2 h-24 w-24 rounded object-cover" />
    <CustomText
      class="mb-4 text-lg font-semibold"
      data-cy="welcome-message-join-header"
      :text="`${store.user.firstName} ${store.user.surName}`" />
    <CustomText class="mb-8 text-white/70" text="Thanks for joining Aladia." />
    <CustomText
      class="mb-20 text-center text-white/70"
      data-cy="otp-message"
      text="Please enter below the 6-digit code we sent you through your registration
      e-mail:" />
  </div>
</template>

<script setup lang="ts">
import CustomImage from "../atoms/CustomImage.vue";
import CustomText from "../atoms/CustomText.vue";
import { useAuthStore } from "../../stores/authStore";
const store = useAuthStore();
</script>
