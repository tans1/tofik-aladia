<template>
  <div
    class="mb-6 flex items-center justify-between gap-4"
    data-cy="external-auth-divider">
    <div class="h-[1px] w-40 bg-gradient-to-r from-white/0 to-white"></div>
    <div>Or</div>
    <div class="h-[1px] w-40 bg-gradient-to-r from-white to-white/0"></div>
  </div>

  <div class="mb-8 flex w-full flex-col gap-4" data-cy="external-auths">
    <div v-for="(auth, index) in externalAuths" :key="index">
      <OAuth :src="auth.imageSrc" :text="auth.text" data-cy="oauth-button" />
    </div>
  </div>
</template>

<script>
import OAuth from "../molecules/OAuthButton.vue";
import { ExternalAuths } from "../../assets/staticData/data.ts";

export default {
  name: "ExternalAuth",
  components: {
    OAuth
  },
  data() {
    return {
      externalAuths: ExternalAuths
    };
  }
};
</script>
