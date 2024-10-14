<template>
  <div
    class="cursor-pointer text-center text-white/40"
    data-cy="terms-and-conditions-container">
    <CustomLink
      CustomLinkClass="text-base text-white"
      text="Terms and Conditions"
      endpoint="https://www.google.com/"
      target="_blank"
      data-cy="terms-and-conditions-link" />
  </div>
</template>

<script>
import CustomLink from "../../atoms/CustomLink.vue";

export default {
  name: "TermsAndConditions",
  components: {
    CustomLink
  }
};
</script>
