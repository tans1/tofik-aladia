<template>
  <div class="mb-4 flex items-center gap-2" data-cy="accept-terms-container">
    <div
      class="flex h-4 w-4 items-center justify-center pt-0.5"
      data-cy="checkbox-container">
      <CustomInput
        type="checkbox"
        class="rounded transition-all border-white/50 hover:border-white cursor-pointer w-full h-full"
        data-cy="terms-checkbox" />
    </div>
    <div class="text-xs text-white/70" data-cy="terms-text">
      I accept
      <CustomLink
        linkClass="underline text-white"
        text="Terms &amp; Conditions"
        target="_blank"
        data-cy="terms-link"
        endpoint="/" />
      <CustomLink
        linkClass="underline text-white"
        text="Privacy Policy"
        target="_blank"
        data-cy="privacy-policy-link"
        endpoint="/" />
    </div>
  </div>
</template>

<script>
import CustomLink from "../../atoms/CustomLink.vue";
import CustomInput from "../../atoms/CustomInput.vue";

export default {
  name: "AcceptTermsAndConditions",
  components: {
    CustomLink,
    CustomInput
  }
};
</script>
