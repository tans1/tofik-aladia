import { computed } from "vue";
import { required, minLength, helpers } from "@vuelidate/validators";

export const signUpValidation = computed(() => {
  return {
    firstName: {
      required: helpers.withMessage("Required", required),
      minLength: helpers.withMessage(
        "At least two characters required",
        minLength(2)
      )
    },
    surName: {
      required: helpers.withMessage("Required", required),
      minLength: helpers.withMessage(
        "At least two characters required",
        minLength(2)
      )
    },
    password: {
      required: helpers.withMessage("Required", required),
      minLength: helpers.withMessage(
        "Password must be at least 8 char long",
        minLength(8)
      )
    },
    confirmPassword: {
      required: helpers.withMessage("Required", required)
    }
  };
});

export const checkPassword = (password: string) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[@$!%*?&]/.test(password);

  const errors = {
    upperCase: !hasUpperCase ? "Upper case letter required" : "",
    number: !hasNumber ? "Number required" : "",
    symbol: !hasSymbol ? "Symbol required (@$!%*?&)" : ""
  };

  const count = Object.values(errors).filter((error) => error !== "").length;

  return {
    valid: hasUpperCase && hasNumber && hasSymbol,
    count,
    errors,
    message: !hasUpperCase
      ? "Upper case letter required"
      : !hasNumber
        ? "Number required"
        : !hasSymbol
          ? "Symbol required (@$!%*?&)"
          : ""
  };
};
