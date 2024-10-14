import { required, email, helpers } from "/_nuxt/node_modules/.cache/vite/client/deps/@vuelidate_validators.js?v=b44a2d30";
import { computed } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
export const emailValidation = computed(() => {
  return {
    email: {
      required: helpers.withMessage("Required", required),
      email: helpers.withMessage("Invalid email", email)
    }
  };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsVmFsaWRhdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1aXJlZCwgZW1haWwsIGhlbHBlcnMgfSBmcm9tIFwiQHZ1ZWxpZGF0ZS92YWxpZGF0b3JzXCI7XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gXCJ2dWVcIjtcblxuZXhwb3J0IGNvbnN0IGVtYWlsVmFsaWRhdGlvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBlbWFpbDoge1xuICAgICAgcmVxdWlyZWQ6IGhlbHBlcnMud2l0aE1lc3NhZ2UoXCJSZXF1aXJlZFwiLCByZXF1aXJlZCksXG4gICAgICBlbWFpbDogaGVscGVycy53aXRoTWVzc2FnZShcIkludmFsaWQgZW1haWxcIiwgZW1haWwpXG4gICAgfVxuICB9O1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsVUFBVSxPQUFPLGVBQWU7QUFDekMsU0FBUyxnQkFBZ0I7QUFFbEIsYUFBTSxrQkFBa0IsU0FBUyxNQUFNO0FBQzVDLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNMLFVBQVUsUUFBUSxZQUFZLFlBQVksUUFBUTtBQUFBLE1BQ2xELE9BQU8sUUFBUSxZQUFZLGlCQUFpQixLQUFLO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLCJuYW1lcyI6W119