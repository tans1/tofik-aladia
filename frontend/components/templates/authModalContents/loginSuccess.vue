<template>
  <div class="flex flex-col items-center px-6 pt-8 space-y-4">
    <CustomImage
      src="https://develop.aladia.io/logo/image.png"
      class="mb-2 h-24 w-24 rounded object-cover" />
    <CustomText
      class="mb-4 text-lg font-semibold"
      :text="`${store.user?.firstName} ${store.user?.surName}`" />
    <CustomText class="mb-8 text-white/70" text="Thanks for joining Aladia." />
    <GradientButton
      text="Enter MarketPlace"
      data-cy="submit-button"
      :handleClick="getIn"
      buttonClass="pt-20 h-full w-full text-white" />
  </div>
</template>

<script setup lang="ts">
import CustomText from "../../atoms/CustomText.vue";
import GradientButton from "../../atoms/buttons/GradientButton.vue";
import CustomImage from "../../atoms/CustomImage.vue";
import { useAuthStore } from "../../../stores/authStore";

const store = useAuthStore();

const getIn = () => {
  store.closeModal();
  store.setCurrentModal("home", store.user?.email);
};
</script>
