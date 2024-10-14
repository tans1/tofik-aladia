<template>
  <div
    class="px-4 flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95"
    data-cy="oauth-button">
    <CustomImage :src="src" class="h-6" data-cy="oauth-image" />

    <div class="w-40">
      <CustomText
        class="text-sm text-white"
        :text="text"
        data-cy="oauth-text" />
    </div>
  </div>
</template>

<script>
import CustomImage from "../atoms/CustomImage.vue";
import CustomText from "../atoms/CustomText.vue";

export default {
  name: "OAuth",
  components: {
    CustomImage,
    CustomText
  },
  props: {
    src: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }
};
</script>
