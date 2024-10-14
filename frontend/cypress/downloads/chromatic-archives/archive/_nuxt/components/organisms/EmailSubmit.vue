import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/EmailSubmit.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import { defineComponent as _defineComponent } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
import CustomText from "/_nuxt/components/atoms/CustomText.vue";
import FormField from "/_nuxt/components/molecules/FormField.vue";
import GradientButton from "/_nuxt/components/atoms/buttons/GradientButton.vue";
import { useVuelidate } from "/_nuxt/node_modules/.cache/vite/client/deps/@vuelidate_core.js?v=b44a2d30";
import { emailValidation } from "/_nuxt/validations/emailValidation.ts";
import { submitEmail } from "/_nuxt/api/api.ts";
import { useAuthStore } from "/_nuxt/stores/authStore.ts";
import { reactive, ref } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "EmailSubmit",
  setup(__props, { expose: __expose }) {
    __expose();
    const authStore = useAuthStore();
    const isLoading = ref(false);
    const formData = reactive({
      email: authStore.user.email
    });
    const rules = emailValidation;
    const $v = useVuelidate(rules, formData);
    const handleSubmit = async () => {
      $v.value.$touch();
      $v.value.$validate();
      if (!$v.value.$error) {
        isLoading.value = true;
        const res = await submitEmail(formData.email);
        setTimeout(() => {
          isLoading.value = false;
          if (res.status === 200) {
            authStore.setCurrentModal("login", formData.email);
          } else if (res.status === 404) {
            authStore.setCurrentModal("signup", formData.email);
          }
        }, 1e3);
      }
    };
    const __returned__ = { authStore, isLoading, formData, rules, $v, handleSubmit, CustomText, FormField, GradientButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import {   toDisplayString as _toDisplayString, openBlock as _openBlock,  createCommentVNode as _createCommentVNode, withModifiers as _withModifiers, Fragment as _Fragment } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
const _hoisted_1 = { "data-v-inspector": "components/organisms/EmailSubmit.vue:2:3" };
const _hoisted_2 = {
  class: "px-4 mb-5",
  "data-v-inspector": "components/organisms/EmailSubmit.vue:5:3"
};
const _hoisted_3 = {
  key: 0,
  class: "text-red-500 text-sm",
  "data-cy": "email-error",
  "data-v-inspector": "components/organisms/EmailSubmit.vue:18:7"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createElementVNode("div", _hoisted_1, [
        _createVNode($setup["CustomText"], {
          class: "mb-5 text-base text-center",
          text: "Enter your email"
        })
      ]),
      _createElementVNode("div", _hoisted_2, [
        _createElementVNode(
          "form",
          {
            class: "flex flex-col space-y-2",
            "data-cy": "email-form",
            onSubmit: _withModifiers($setup.handleSubmit, ["prevent"]),
            "data-v-inspector": "components/organisms/EmailSubmit.vue:6:5"
          },
          [
            _createVNode($setup["FormField"], {
              modelValue: $setup.formData.email,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.formData.email = $event),
              placeholder: "Email Address",
              iconClass: "fa-solid fa-envelope text-base text-black/70",
              value: $setup.formData.email,
              updateValue: $setup.$v.email.$touch,
              "data-cy": "email-input"
            }, null, 8, ["modelValue", "value", "updateValue"]),
            $setup.$v.$error ? (_openBlock(), _createElementBlock(
              "div",
              _hoisted_3,
              _toDisplayString($setup.$v.email.$errors[0].$message),
              1
              /* TEXT */
            )) : _createCommentVNode("v-if", true),
            _createVNode($setup["GradientButton"], {
              text: "Enter",
              buttonType: "submit",
              buttonClass: "text-white",
              "data-cy": "submit-button",
              handleClick: $setup.handleSubmit,
              isLoading: $setup.isLoading
            }, null, 8, ["isLoading"])
          ],
          32
          /* NEED_HYDRATION */
        )
      ])
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
_sfc_main.__hmrId = "3f44e4fa";
typeof __VUE_HMR_RUNTIME__ !== "undefined" && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main);
import.meta.hot.accept((mod) => {
  if (!mod) return;
  const { default: updated, _rerender_only } = mod;
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render);
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated);
  }
});
import _export_sfc from "/_nuxt/@id/__x00__plugin-vue:export-helper";
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/organisms/EmailSubmit.vue"]]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZUFBZTtBQUN0QixPQUFPLG9CQUFvQjtBQUMzQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLHVCQUF1QjtBQUNoQyxTQUFTLG1CQUFtQjtBQUM1QixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLFVBQVUsV0FBVzs7Ozs7QUFDOUIsVUFBTSxZQUFZLGFBQWE7QUFDL0IsVUFBTSxZQUFZLElBQUksS0FBSztBQUUzQixVQUFNLFdBQVcsU0FBUztBQUFBLE1BQ3hCLE9BQU8sVUFBVSxLQUFLO0FBQUEsSUFDeEIsQ0FBQztBQUNELFVBQU0sUUFBUTtBQUNkLFVBQU0sS0FBSyxhQUFhLE9BQU8sUUFBUTtBQUN2QyxVQUFNLGVBQWUsWUFBWTtBQUMvQixTQUFHLE1BQU0sT0FBTztBQUNoQixTQUFHLE1BQU0sVUFBVTtBQUNuQixVQUFJLENBQUMsR0FBRyxNQUFNLFFBQVE7QUFDcEIsa0JBQVUsUUFBUTtBQUNsQixjQUFNLE1BQU0sTUFBTSxZQUFZLFNBQVMsS0FBSztBQUM1QyxtQkFBVyxNQUFNO0FBQ2Ysb0JBQVUsUUFBUTtBQUNsQixjQUFJLElBQUksV0FBVyxLQUFLO0FBQ3RCLHNCQUFVLGdCQUFnQixTQUFTLFNBQVMsS0FBSztBQUFBLFVBQ25ELFdBQVcsSUFBSSxXQUFXLEtBQUs7QUFDN0Isc0JBQVUsZ0JBQWdCLFVBQVUsU0FBUyxLQUFLO0FBQUEsVUFDcEQ7QUFBQSxRQUNGLEdBQUcsR0FBSTtBQUFBLE1BQ1Q7QUFBQSxJQUNGOzs7Ozs7O3FCQTlETyxvQkFBaUIsMkNBQTBDOztFQUczRCxPQUFNO0FBQUEsRUFBWSxvQkFBaUI7OztFQUoxQztBQUFBLEVBaUI0QixPQUFNO0FBQUEsRUFBdUIsV0FBUTtBQUFBLEVBQWMsb0JBQWlCOzs7dUJBakJoRztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0Usb0JBRU0sT0FGTixZQUVNO0FBQUEsUUFESixhQUF5RTtBQUFBLFVBQTdELE9BQU07QUFBQSxVQUE2QixNQUFLO0FBQUE7O01BRXRELG9CQXdCTSxPQXhCTixZQXdCTTtBQUFBLFFBdkJKO0FBQUEsVUFzQk87QUFBQTtBQUFBLFlBckJMLE9BQU07QUFBQSxZQUNOLFdBQVE7QUFBQSxZQUNQLFVBUlAsZUFRdUIscUJBQVk7QUFBQSxZQUFFLG9CQUFpQjtBQUFBOztZQUNoRCxhQU0wQjtBQUFBLGNBZmhDLFlBVWlCLGdCQUFTO0FBQUEsY0FWMUIsNkRBVWlCLGdCQUFTLFFBQUs7QUFBQSxjQUN2QixhQUFZO0FBQUEsY0FDWixXQUFVO0FBQUEsY0FDVCxPQUFPLGdCQUFTO0FBQUEsY0FDaEIsYUFBYSxVQUFHLE1BQU07QUFBQSxjQUN2QixXQUFRO0FBQUE7WUFFQyxVQUFHLHdCQUFkO0FBQUEsY0FFTTtBQUFBLGNBRk47QUFBQSxjQUVNLGlCQURELFVBQUcsTUFBTSxRQUFPLEdBQUksUUFBUTtBQUFBO0FBQUE7QUFBQSxpQkFsQnZDO0FBQUEsWUFvQk0sYUFNMkI7QUFBQSxjQUx6QixNQUFLO0FBQUEsY0FDTCxZQUFXO0FBQUEsY0FDWCxhQUFZO0FBQUEsY0FDWixXQUFRO0FBQUEsY0FDUCxhQUFhO0FBQUEsY0FDYixXQUFXO0FBQUEiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkVtYWlsU3VibWl0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL0VtYWlsU3VibWl0LnZ1ZToyOjNcIj5cbiAgICA8Q3VzdG9tVGV4dCBjbGFzcz1cIm1iLTUgdGV4dC1iYXNlIHRleHQtY2VudGVyXCIgdGV4dD1cIkVudGVyIHlvdXIgZW1haWxcIiAvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInB4LTQgbWItNVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9FbWFpbFN1Ym1pdC52dWU6NTozXCI+XG4gICAgPGZvcm1cbiAgICAgIGNsYXNzPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTJcIlxuICAgICAgZGF0YS1jeT1cImVtYWlsLWZvcm1cIlxuICAgICAgQHN1Ym1pdC5wcmV2ZW50PVwiaGFuZGxlU3VibWl0XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL0VtYWlsU3VibWl0LnZ1ZTo2OjVcIj5cbiAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgdi1tb2RlbD1cImZvcm1EYXRhLmVtYWlsXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgaWNvbkNsYXNzPVwiZmEtc29saWQgZmEtZW52ZWxvcGUgdGV4dC1iYXNlIHRleHQtYmxhY2svNzBcIlxuICAgICAgICA6dmFsdWU9XCJmb3JtRGF0YS5lbWFpbFwiXG4gICAgICAgIDp1cGRhdGVWYWx1ZT1cIiR2LmVtYWlsLiR0b3VjaFwiXG4gICAgICAgIGRhdGEtY3k9XCJlbWFpbC1pbnB1dFwiIC8+XG5cbiAgICAgIDxkaXYgdi1pZj1cIiR2LiRlcnJvclwiIGNsYXNzPVwidGV4dC1yZWQtNTAwIHRleHQtc21cIiBkYXRhLWN5PVwiZW1haWwtZXJyb3JcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvRW1haWxTdWJtaXQudnVlOjE4OjdcIj5cbiAgICAgICAge3sgJHYuZW1haWwuJGVycm9yc1swXS4kbWVzc2FnZSB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8R3JhZGllbnRCdXR0b25cbiAgICAgICAgdGV4dD1cIkVudGVyXCJcbiAgICAgICAgYnV0dG9uVHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIGJ1dHRvbkNsYXNzPVwidGV4dC13aGl0ZVwiXG4gICAgICAgIGRhdGEtY3k9XCJzdWJtaXQtYnV0dG9uXCJcbiAgICAgICAgOmhhbmRsZUNsaWNrPVwiaGFuZGxlU3VibWl0XCJcbiAgICAgICAgOmlzTG9hZGluZz1cImlzTG9hZGluZ1wiIC8+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgQ3VzdG9tVGV4dCBmcm9tIFwiLi4vYXRvbXMvQ3VzdG9tVGV4dC52dWVcIjtcbmltcG9ydCBGb3JtRmllbGQgZnJvbSBcIi4uL21vbGVjdWxlcy9Gb3JtRmllbGQudnVlXCI7XG5pbXBvcnQgR3JhZGllbnRCdXR0b24gZnJvbSBcIi4uL2F0b21zL2J1dHRvbnMvR3JhZGllbnRCdXR0b24udnVlXCI7XG5pbXBvcnQgeyB1c2VWdWVsaWRhdGUgfSBmcm9tIFwiQHZ1ZWxpZGF0ZS9jb3JlXCI7XG5pbXBvcnQgeyBlbWFpbFZhbGlkYXRpb24gfSBmcm9tIFwiLi4vLi4vdmFsaWRhdGlvbnMvZW1haWxWYWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBzdWJtaXRFbWFpbCB9IGZyb20gXCIuLi8uLi9hcGkvYXBpXCI7XG5pbXBvcnQgeyB1c2VBdXRoU3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzL2F1dGhTdG9yZVwiO1xuaW1wb3J0IHsgcmVhY3RpdmUsIHJlZiB9IGZyb20gXCJ2dWVcIjtcbmNvbnN0IGF1dGhTdG9yZSA9IHVzZUF1dGhTdG9yZSgpO1xuY29uc3QgaXNMb2FkaW5nID0gcmVmKGZhbHNlKTtcblxuY29uc3QgZm9ybURhdGEgPSByZWFjdGl2ZSh7XG4gIGVtYWlsOiBhdXRoU3RvcmUudXNlci5lbWFpbFxufSk7XG5jb25zdCBydWxlcyA9IGVtYWlsVmFsaWRhdGlvbjtcbmNvbnN0ICR2ID0gdXNlVnVlbGlkYXRlKHJ1bGVzLCBmb3JtRGF0YSk7XG5jb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICR2LnZhbHVlLiR0b3VjaCgpO1xuICAkdi52YWx1ZS4kdmFsaWRhdGUoKTtcbiAgaWYgKCEkdi52YWx1ZS4kZXJyb3IpIHtcbiAgICBpc0xvYWRpbmcudmFsdWUgPSB0cnVlO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHN1Ym1pdEVtYWlsKGZvcm1EYXRhLmVtYWlsKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlzTG9hZGluZy52YWx1ZSA9IGZhbHNlO1xuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBhdXRoU3RvcmUuc2V0Q3VycmVudE1vZGFsKFwibG9naW5cIiwgZm9ybURhdGEuZW1haWwpO1xuICAgICAgfSBlbHNlIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgYXV0aFN0b3JlLnNldEN1cnJlbnRNb2RhbChcInNpZ251cFwiLCBmb3JtRGF0YS5lbWFpbCk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvdGFucy9Eb2N1bWVudHMvam9iL2FsYWRpYS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vZnJvbnRlbmQvY29tcG9uZW50cy9vcmdhbmlzbXMvRW1haWxTdWJtaXQudnVlIn0=