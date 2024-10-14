import { required, email, helpers } from "@vuelidate/validators";
import { computed } from "vue";

export const emailValidation = computed(() => {
  return {
    email: {
      required: helpers.withMessage("Required", required),
      email: helpers.withMessage("Invalid email", email)
    }
  };
});
