<template>
  <div class="relative z-10 p-5 text-13" data-cy="login-intro">
    <div
      class="relative flex h-32 justify-between overflow-hidden rounded border border-white/20 bg-black px-8 py-6 opacity-80 transition-all duration-300 mt-0 mb-6"
      data-cy="login-intro-card">
      <div
        class="relative flex w-full justify-between transition-all duration-300 opacity-100">
        <div>
          <CustomImage
            src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"
            class="h-20 w-20 object-cover"
            data-cy="login-intro-image" />
        </div>
        <div>
          <CustomText
            text="Welcome to Aladia"
            class="text-white text-base"
            data-cy="login-intro-title" />
          <CustomText
            text="Create or access your"
            class="text-white/70 text-sm"
            data-cy="login-intro-subtitle" />
          <CustomText
            text="account from here "
            class="text-white/70 text-sm"
            data-cy="login-intro-description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomImage from "../atoms/CustomImage.vue";
import CustomText from "../atoms/CustomText.vue";

export default {
  name: "LoginIntro",
  components: {
    CustomImage,
    CustomText
  }
};
</script>
