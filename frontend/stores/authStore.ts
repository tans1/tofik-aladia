import { email } from "@vuelidate/validators";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isModalOpen: false,
    currentModal: "home",
    user: {
      email: "",
      firstName: "",
      surName: "",
      imageUrl: ""
    }
  }),
  actions: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    setCurrentModal(modal: string, data: string) {
      this.currentModal = modal;
      this.user.email = data;
    },
    setUserData(data: { firstName: string; surName: string; email: string }) {
      this.user.email = data.email;
      this.user.firstName = data.firstName;
      this.user.surName = data.surName;
    },

    setImageUrl(url: string) {
      this.user.imageUrl = url;
    }
  }
});
