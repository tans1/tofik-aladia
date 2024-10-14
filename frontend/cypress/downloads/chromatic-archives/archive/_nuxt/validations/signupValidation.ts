import { computed } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
import { required, minLength, helpers } from "/_nuxt/node_modules/.cache/vite/client/deps/@vuelidate_validators.js?v=b44a2d30";
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
export const checkPassword = (password) => {
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
    message: !hasUpperCase ? "Upper case letter required" : !hasNumber ? "Number required" : !hasSymbol ? "Symbol required (@$!%*?&)" : ""
  };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cFZhbGlkYXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyByZXF1aXJlZCwgbWluTGVuZ3RoLCBoZWxwZXJzIH0gZnJvbSBcIkB2dWVsaWRhdGUvdmFsaWRhdG9yc1wiO1xuXG5leHBvcnQgY29uc3Qgc2lnblVwVmFsaWRhdGlvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmaXJzdE5hbWU6IHtcbiAgICAgIHJlcXVpcmVkOiBoZWxwZXJzLndpdGhNZXNzYWdlKFwiUmVxdWlyZWRcIiwgcmVxdWlyZWQpLFxuICAgICAgbWluTGVuZ3RoOiBoZWxwZXJzLndpdGhNZXNzYWdlKFxuICAgICAgICBcIkF0IGxlYXN0IHR3byBjaGFyYWN0ZXJzIHJlcXVpcmVkXCIsXG4gICAgICAgIG1pbkxlbmd0aCgyKVxuICAgICAgKVxuICAgIH0sXG4gICAgc3VyTmFtZToge1xuICAgICAgcmVxdWlyZWQ6IGhlbHBlcnMud2l0aE1lc3NhZ2UoXCJSZXF1aXJlZFwiLCByZXF1aXJlZCksXG4gICAgICBtaW5MZW5ndGg6IGhlbHBlcnMud2l0aE1lc3NhZ2UoXG4gICAgICAgIFwiQXQgbGVhc3QgdHdvIGNoYXJhY3RlcnMgcmVxdWlyZWRcIixcbiAgICAgICAgbWluTGVuZ3RoKDIpXG4gICAgICApXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgcmVxdWlyZWQ6IGhlbHBlcnMud2l0aE1lc3NhZ2UoXCJSZXF1aXJlZFwiLCByZXF1aXJlZCksXG4gICAgICBtaW5MZW5ndGg6IGhlbHBlcnMud2l0aE1lc3NhZ2UoXG4gICAgICAgIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXIgbG9uZ1wiLFxuICAgICAgICBtaW5MZW5ndGgoOClcbiAgICAgIClcbiAgICB9LFxuICAgIGNvbmZpcm1QYXNzd29yZDoge1xuICAgICAgcmVxdWlyZWQ6IGhlbHBlcnMud2l0aE1lc3NhZ2UoXCJSZXF1aXJlZFwiLCByZXF1aXJlZClcbiAgICB9XG4gIH07XG59KTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrUGFzc3dvcmQgPSAocGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBoYXNVcHBlckNhc2UgPSAvW0EtWl0vLnRlc3QocGFzc3dvcmQpO1xuICBjb25zdCBoYXNOdW1iZXIgPSAvXFxkLy50ZXN0KHBhc3N3b3JkKTtcbiAgY29uc3QgaGFzU3ltYm9sID0gL1tAJCElKj8mXS8udGVzdChwYXNzd29yZCk7XG5cbiAgY29uc3QgZXJyb3JzID0ge1xuICAgIHVwcGVyQ2FzZTogIWhhc1VwcGVyQ2FzZSA/IFwiVXBwZXIgY2FzZSBsZXR0ZXIgcmVxdWlyZWRcIiA6IFwiXCIsXG4gICAgbnVtYmVyOiAhaGFzTnVtYmVyID8gXCJOdW1iZXIgcmVxdWlyZWRcIiA6IFwiXCIsXG4gICAgc3ltYm9sOiAhaGFzU3ltYm9sID8gXCJTeW1ib2wgcmVxdWlyZWQgKEAkISUqPyYpXCIgOiBcIlwiXG4gIH07XG5cbiAgY29uc3QgY291bnQgPSBPYmplY3QudmFsdWVzKGVycm9ycykuZmlsdGVyKChlcnJvcikgPT4gZXJyb3IgIT09IFwiXCIpLmxlbmd0aDtcblxuICByZXR1cm4ge1xuICAgIHZhbGlkOiBoYXNVcHBlckNhc2UgJiYgaGFzTnVtYmVyICYmIGhhc1N5bWJvbCxcbiAgICBjb3VudCxcbiAgICBlcnJvcnMsXG4gICAgbWVzc2FnZTogIWhhc1VwcGVyQ2FzZVxuICAgICAgPyBcIlVwcGVyIGNhc2UgbGV0dGVyIHJlcXVpcmVkXCJcbiAgICAgIDogIWhhc051bWJlclxuICAgICAgICA/IFwiTnVtYmVyIHJlcXVpcmVkXCJcbiAgICAgICAgOiAhaGFzU3ltYm9sXG4gICAgICAgICAgPyBcIlN5bWJvbCByZXF1aXJlZCAoQCQhJSo/JilcIlxuICAgICAgICAgIDogXCJcIlxuICB9O1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxnQkFBZ0I7QUFDekIsU0FBUyxVQUFVLFdBQVcsZUFBZTtBQUV0QyxhQUFNLG1CQUFtQixTQUFTLE1BQU07QUFDN0MsU0FBTztBQUFBLElBQ0wsV0FBVztBQUFBLE1BQ1QsVUFBVSxRQUFRLFlBQVksWUFBWSxRQUFRO0FBQUEsTUFDbEQsV0FBVyxRQUFRO0FBQUEsUUFDakI7QUFBQSxRQUNBLFVBQVUsQ0FBQztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxVQUFVLFFBQVEsWUFBWSxZQUFZLFFBQVE7QUFBQSxNQUNsRCxXQUFXLFFBQVE7QUFBQSxRQUNqQjtBQUFBLFFBQ0EsVUFBVSxDQUFDO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLFVBQVUsUUFBUSxZQUFZLFlBQVksUUFBUTtBQUFBLE1BQ2xELFdBQVcsUUFBUTtBQUFBLFFBQ2pCO0FBQUEsUUFDQSxVQUFVLENBQUM7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLElBQ0EsaUJBQWlCO0FBQUEsTUFDZixVQUFVLFFBQVEsWUFBWSxZQUFZLFFBQVE7QUFBQSxJQUNwRDtBQUFBLEVBQ0Y7QUFDRixDQUFDO0FBRU0sYUFBTSxnQkFBZ0IsQ0FBQyxhQUFxQjtBQUNqRCxRQUFNLGVBQWUsUUFBUSxLQUFLLFFBQVE7QUFDMUMsUUFBTSxZQUFZLEtBQUssS0FBSyxRQUFRO0FBQ3BDLFFBQU0sWUFBWSxZQUFZLEtBQUssUUFBUTtBQUUzQyxRQUFNLFNBQVM7QUFBQSxJQUNiLFdBQVcsQ0FBQyxlQUFlLCtCQUErQjtBQUFBLElBQzFELFFBQVEsQ0FBQyxZQUFZLG9CQUFvQjtBQUFBLElBQ3pDLFFBQVEsQ0FBQyxZQUFZLDhCQUE4QjtBQUFBLEVBQ3JEO0FBRUEsUUFBTSxRQUFRLE9BQU8sT0FBTyxNQUFNLEVBQUUsT0FBTyxDQUFDLFVBQVUsVUFBVSxFQUFFLEVBQUU7QUFFcEUsU0FBTztBQUFBLElBQ0wsT0FBTyxnQkFBZ0IsYUFBYTtBQUFBLElBQ3BDO0FBQUEsSUFDQTtBQUFBLElBQ0EsU0FBUyxDQUFDLGVBQ04sK0JBQ0EsQ0FBQyxZQUNDLG9CQUNBLENBQUMsWUFDQyw4QkFDQTtBQUFBLEVBQ1Y7QUFDRjsiLCJuYW1lcyI6W119