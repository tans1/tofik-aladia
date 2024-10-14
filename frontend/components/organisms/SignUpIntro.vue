<template>
  <div
    class="mb-4 flex w-full items-end gap-6 px-4 text-white"
    data-cy="signup-intro">
    <div
      class="relative h-24 w-24 rounded border transition-all border-white/20 hover:border-white"
      data-cy="profile-picture-container">
      <div class="gradient absolute inset-0 opacity-20"></div>
      <AttachImage
        :class="{
          'absolute inset-0 h-full w-full rounded object-cover': !error,
          'absolute inset-0 h-full w-full rounded object-cover border border-red-300':
            error
        }"
        src="https://develop.aladia.io/logo/image.png"
        data-cy="profile-picture" />
    </div>

    <div>
      <CustomText
        class="mb-1 text-sm font-semibold"
        text="Nice to meet you,"
        data-cy="signup-intro-greeting" />
      <div class="text-xs text-white/70">
        <CustomText
          text="Upload a profile picture"
          data-cy="upload-profile-pic" />
        <CustomText text="and complete your" data-cy="complete-your" />
        <CustomText text="presentation" data-cy="presentation" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomImage from "../atoms/CustomImage.vue";
import CustomText from "../atoms/CustomText.vue";
import AttachImage from "../atoms/AttachImage.vue";

export default {
  name: "SignUpIntro",
  components: {
    CustomImage,
    CustomText,
    AttachImage
  },
  props: {
    error: {
      type: Boolean,
      default: false
    }
  }
};
</script>
