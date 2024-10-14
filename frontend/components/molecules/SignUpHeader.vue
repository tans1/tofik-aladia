<template>
  <div
    class="group flex h-8 scale-100 cursor-pointer items-center justify-center gap-2 pb-4 transition-all active:scale-95"
    @click="backToLogin"
    data-cy="signup-header">
    <div class="hidden group-hover:flex">
      <CustomIcon
        iconClass="fa-solid fa-arrow-left transition-all text-white"
        data-cy="arrow-left-icon" />
    </div>
    <div class="group-hover:hidden">
      <CustomIcon
        iconClass="fa-solid fa-chevron-left transition-all text-white"
        data-cy="chevron-left-icon" />
    </div>
    <div class="text-white text-sm" data-cy="back-to-login-text">
      Back to Log in
    </div>
  </div>
</template>

<script>
import CustomIcon from "../atoms/CustomIcon.vue";
import { useAuthStore } from "../../stores/authStore";
export default {
  name: "SignUpHeader",
  components: {
    CustomIcon
  },
  setup() {
    const authStore = useAuthStore();

    const backToLogin = () => {
      authStore.setCurrentModal("home", authStore.user.email);
    };

    return {
      backToLogin
    };
  }
};
</script>
