<template>
  <div
    class="flex items-center gap-1.5 pr-4 hover:text-black text-white"
    @click="authStore.openModal"
    data-cy="join-button-container">
    <div
      class="group relative shrink-0 scale-100 cursor-pointer items-center justify-center overflow-hidden rounded border px-3 py-2 text-sm leading-none transition-all hover:border-transparent active:scale-95"
      data-cy="join-button-inner">
      <div
        class="absolute inset-0 z-0 flex h-full w-full items-center justify-center">
        <div
          data-v-df211d4a
          class="gradient h-0 w-0 rounded-full transition-all duration-200 group-hover:h-full group-hover:w-full group-hover:rounded"></div>
      </div>

      <div>
        <CustomButton
          class="relative z-10000 flex items-center justify-center gap-2"
          data-cy="join-button">
          <CustomIcon iconClass="fa-solid fa-user-plus" />
          <CustomText
            class="text-xs font-semibold"
            text="Join Us"
            data-cy="join-button-text" />
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../atoms/buttons/SimpleButton.vue";
import CustomIcon from "../atoms/CustomIcon.vue";
import CustomText from "../atoms/CustomText.vue";
import { useAuthStore } from "../../stores/authStore.ts";

export default {
  name: "JoinButton",
  components: {
    CustomButton,
    CustomIcon,
    CustomText
  },
  setup() {
    const authStore = useAuthStore();
    const click = () => {
      authStore.setCurrentModal("home", authStore.user.email);
      authStore.openModal();
    };

    return {
      authStore,
      click
    };
  }
};
</script>

<style>
.gradient[data-v-df211d4a] {
  background: transparent
    linear-gradient(
      134deg,
      #bf953f,
      #fcf6ba 22%,
      #b38738 52%,
      #fbf6b7 79%,
      #aa771c
    )
    0 0 no-repeat padding-box;
}
</style>
