<template>
  <div data-cy="login-page">
    <LoginIntro />

    <div class="px-4" data-cy="email-submit-container">
      <EmailSubmit />
    </div>

    <ExternalAuth data-cy="external-auth" />

    <TermsAndConditions data-cy="terms-and-conditions" />
  </div>
</template>

<script setup lang="ts">
import LoginIntro from "../../organisms/LoginIntro.vue";
import EmailSubmit from "../../organisms/EmailSubmit.vue";
import ExternalAuth from "../../organisms/ExternalAuths.vue";
import TermsAndConditions from "../../molecules/termsAndConditions/TermsAndConditions.vue";
</script>
