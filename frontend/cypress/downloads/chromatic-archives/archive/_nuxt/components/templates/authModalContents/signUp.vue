import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/authModalContents/signUp.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import SignUpHeader from "/_nuxt/components/molecules/SignUpHeader.vue";
import SignUpIntro from "/_nuxt/components/organisms/SignUpIntro.vue";
import AcceptTermsAndConditions from "/_nuxt/components/molecules/termsAndConditions/AcceptTermsAndConditions.vue";
import CustomText from "/_nuxt/components/atoms/CustomText.vue";
import FormField from "/_nuxt/components/molecules/FormField.vue";
import GradientButton from "/_nuxt/components/atoms/buttons/GradientButton.vue";
import { useVuelidate } from "/_nuxt/node_modules/.cache/vite/client/deps/@vuelidate_core.js?v=b44a2d30";
import { useAuthStore } from "/_nuxt/stores/authStore.ts";
import {
  signUpValidation,
  checkPassword
} from "/_nuxt/validations/signupValidation.ts";
import { reactive, ref } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "signUp",
  setup(__props, { expose: __expose }) {
    __expose();
    const authStore = useAuthStore();
    const formData = reactive({
      email: authStore.user.email,
      firstName: "",
      surName: "",
      password: "",
      confirmPassword: ""
    });
    const rules = signUpValidation;
    const $v = useVuelidate(rules, formData);
    const isLoading = ref(false);
    const imageNotAttached = ref(false);
    const handleSubmit = async () => {
      imageNotAttached.value = authStore.user.imageUrl === "";
      $v.value.$touch();
      $v.value.$validate();
      const passwordCheck = checkPassword(formData.password);
      if (!$v.value.$error && passwordCheck.valid) {
        isLoading.value = true;
        localStorage.setItem("email", formData.email);
        authStore.setUserData({
          email: formData.email,
          firstName: formData.firstName,
          surName: formData.surName
        });
        setTimeout(() => {
          isLoading.value = false;
          authStore.setCurrentModal("otp", formData.email);
        }, 1e3);
      }
    };
    const __returned__ = { authStore, formData, rules, $v, isLoading, imageNotAttached, handleSubmit, SignUpHeader, SignUpIntro, AcceptTermsAndConditions, CustomText, FormField, GradientButton, get checkPassword() {
      return checkPassword;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import {   toDisplayString as _toDisplayString, normalizeClass as _normalizeClass, withModifiers as _withModifiers, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
const _hoisted_1 = {
  class: "relative z-10 p-5 text-13 h-[40rem] w-[26rem] bg-black/40 text-white backdrop-blur",
  "data-v-inspector": "components/templates/authModalContents/signUp.vue:2:3"
};
const _hoisted_2 = {
  class: "flex flex-col items-center px-4",
  "data-v-inspector": "components/templates/authModalContents/signUp.vue:4:5"
};
const _hoisted_3 = {
  class: "px-4",
  "data-v-inspector": "components/templates/authModalContents/signUp.vue:13:5"
};
const _hoisted_4 = {
  class: "text-red-500 text-xs",
  "data-cy": "first-name-error",
  "data-v-inspector": "components/templates/authModalContents/signUp.vue:25:9"
};
const _hoisted_5 = { "data-v-inspector": "components/templates/authModalContents/signUp.vue:26:11" };
const _hoisted_6 = {
  class: "text-red-500 text-xs w-full h-full",
  "data-cy": "surname-error",
  "data-v-inspector": "components/templates/authModalContents/signUp.vue:37:9"
};
const _hoisted_7 = { "data-v-inspector": "components/templates/authModalContents/signUp.vue:38:11" };
const _hoisted_8 = {
  class: "flex flex-col space-y-1",
  "data-v-inspector": "components/templates/authModalContents/signUp.vue:48:9"
};
const _hoisted_9 = {
  class: "flex w-full flex-1 flex-col justify-center h-[50%] mt-3",
  "data-v-inspector": "components/templates/authModalContents/signUp.vue:49:11"
};
const _hoisted_10 = {
  class: "flex h-4 w-full items-center justify-between text-xs mt-2 mb-2",
  "data-v-inspector": "components/templates/authModalContents/signUp.vue:64:13"
};
const _hoisted_11 = { "data-v-inspector": "components/templates/authModalContents/signUp.vue:66:15" };
const _hoisted_12 = { "data-v-inspector": "components/templates/authModalContents/signUp.vue:84:19" };
const _hoisted_13 = {
  class: "h-1.5 w-24 rounded bg-[#4e4e4e]",
  "data-v-inspector": "components/templates/authModalContents/signUp.vue:97:15"
};
const _hoisted_14 = {
  class: "flex w-full flex-1 flex-col justify-center h-[50%]",
  "data-v-inspector": "components/templates/authModalContents/signUp.vue:118:11"
};
const _hoisted_15 = {
  class: "flex h-4 w-full items-center justify-between text-xs mt-2 mb-2",
  "data-v-inspector": "components/templates/authModalContents/signUp.vue:128:13"
};
const _hoisted_16 = { "data-v-inspector": "components/templates/authModalContents/signUp.vue:130:15" };
const _hoisted_17 = {
  class: "text-[#E54E4E]",
  "data-cy": "confirm-password-error",
  "data-v-inspector": "components/templates/authModalContents/signUp.vue:131:17"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode($setup["SignUpHeader"], { "data-cy": "sign-up-header" }),
      _createVNode($setup["SignUpIntro"], {
        "data-cy": "sign-up-intro",
        error: $setup.imageNotAttached
      }, null, 8, ["error"]),
      _createVNode($setup["AcceptTermsAndConditions"], { "data-cy": "accept-terms" }),
      _createVNode($setup["CustomText"], {
        text: "Enter your details",
        class: "mb-4 text-center text-xs",
        "data-cy": "enter-details-text"
      })
    ]),
    _createElementVNode("div", _hoisted_3, [
      _createElementVNode(
        "form",
        {
          class: "flex flex-col space-y-1",
          onSubmit: _withModifiers($setup.handleSubmit, ["prevent"]),
          "data-cy": "sign-up-form",
          "data-v-inspector": "components/templates/authModalContents/signUp.vue:14:7"
        },
        [
          _createVNode($setup["FormField"], {
            modelValue: $setup.formData.firstName,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.formData.firstName = $event),
            value: $setup.formData.firstName,
            onInput: $setup.$v.firstName.$touch,
            placeholder: "Name",
            iconClass: "fa-solid fa-user text-base text-black/70",
            "data-cy": "first-name-field"
          }, null, 8, ["modelValue", "value", "onInput"]),
          _createElementVNode("div", _hoisted_4, [
            _createElementVNode(
              "span",
              _hoisted_5,
              _toDisplayString($setup.$v.firstName.$error ? $setup.$v.firstName.$errors[0]?.$message : "\xA0"),
              1
              /* TEXT */
            )
          ]),
          _createVNode($setup["FormField"], {
            modelValue: $setup.formData.surName,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.formData.surName = $event),
            value: $setup.formData.surName,
            onInput: $setup.$v.surName.$touch,
            placeholder: "Surname",
            iconClass: "fa-solid fa-user text-base text-black/70",
            "data-cy": "surname-field"
          }, null, 8, ["modelValue", "value", "onInput"]),
          _createElementVNode("div", _hoisted_6, [
            _createElementVNode(
              "span",
              _hoisted_7,
              _toDisplayString($setup.$v.surName.$error ? $setup.$v.surName.$errors[0]?.$message : "\xA0"),
              1
              /* TEXT */
            )
          ]),
          _createVNode($setup["FormField"], {
            placeholder: $setup.formData.email,
            disabled: true,
            iconClass: "fa-solid fa-envelope text-base text-black/70",
            "data-cy": "email-field"
          }, null, 8, ["placeholder"]),
          _createElementVNode("div", _hoisted_8, [
            _createElementVNode("div", _hoisted_9, [
              _createVNode($setup["FormField"], {
                modelValue: $setup.formData.password,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.formData.password = $event),
                value: $setup.formData.password,
                onInput: _cache[3] || (_cache[3] = () => {
                  $setup.$v.password.$touch();
                  $setup.$v.password.$validate();
                }),
                iconClass: "fa-solid fa-key text-base text-black/70",
                inputType: "password",
                placeholder: "Password",
                "data-cy": "password-field"
              }, null, 8, ["modelValue", "value"]),
              _createElementVNode("div", _hoisted_10, [
                _createElementVNode("div", _hoisted_11, [
                  _createElementVNode(
                    "div",
                    {
                      class: _normalizeClass(["text-xs", {
                        "text-white": !$setup.$v.password.$dirty,
                        "text-red-500": $setup.$v.password.$dirty && $setup.$v.password.$error,
                        "text-[#e3e469]": $setup.$v.password.$dirty && !$setup.checkPassword($setup.formData.password).valid && !$setup.$v.password.$error,
                        "text-[#49a02f]": $setup.checkPassword($setup.formData.password).valid && !$setup.$v.password.$error
                      }]),
                      "data-cy": "password-error",
                      "data-v-inspector": "components/templates/authModalContents/signUp.vue:67:17"
                    },
                    [
                      _createElementVNode(
                        "span",
                        _hoisted_12,
                        _toDisplayString($setup.$v.password.$error ? $setup.$v.password.$errors[0]?.$message : $setup.$v.password.$dirty ? $setup.checkPassword($setup.formData.password).valid ? "Strong password" : $setup.checkPassword($setup.formData.password).message : "\xA0"),
                        1
                        /* TEXT */
                      )
                    ],
                    2
                    /* CLASS */
                  )
                ]),
                _createElementVNode("div", _hoisted_13, [
                  _createElementVNode(
                    "div",
                    {
                      class: _normalizeClass(["h-full rounded transition-all duration-300 w-0", {
                        "bg-[#4e4e4e]": !$setup.$v.password.$dirty,
                        "bg-[#dc7c56] w-1/2": $setup.$v.password.$error,
                        "bg-[#e3e469] w-4/5": $setup.$v.password.$dirty && !$setup.checkPassword($setup.formData.password).valid && !$setup.$v.password.$error,
                        "bg-[#49a02f] w-full": $setup.checkPassword($setup.formData.password).valid && !$setup.$v.password.$error
                      }]),
                      "data-v-inspector": "components/templates/authModalContents/signUp.vue:98:17"
                    },
                    null,
                    2
                    /* CLASS */
                  )
                ])
              ])
            ]),
            _createElementVNode("div", _hoisted_14, [
              _createVNode($setup["FormField"], {
                modelValue: $setup.formData.confirmPassword,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.formData.confirmPassword = $event),
                value: $setup.formData.confirmPassword,
                onInput: $setup.$v.confirmPassword.$touch,
                iconClass: "fa-solid fa-key text-base text-black/70",
                inputType: "password",
                placeholder: "Confirm Password",
                "data-cy": "confirm-password-field"
              }, null, 8, ["modelValue", "value", "onInput"]),
              _createElementVNode("div", _hoisted_15, [
                _createElementVNode("div", _hoisted_16, [
                  _createElementVNode(
                    "div",
                    _hoisted_17,
                    _toDisplayString($setup.formData.password !== $setup.formData.confirmPassword && $setup.formData.confirmPassword !== "" ? "Passwords don't match" : "\xA0"),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          _createVNode($setup["GradientButton"], {
            text: "Enter",
            buttonType: "submit",
            "data-cy": "submit-button",
            disabled: $setup.formData.password !== $setup.formData.confirmPassword || $setup.$v.$pending || $setup.$v.$errors.length > 0,
            isLoading: $setup.isLoading
          }, null, 8, ["disabled", "isLoading"])
        ],
        32
        /* NEED_HYDRATION */
      )
    ])
  ]);
}
_sfc_main.__hmrId = "c41a6c51";
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
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/templates/authModalContents/signUp.vue"]]);

//# sourceMappingURL=data:application/json;base64,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N0hqRCxZQXVIdUIsZ0JBQVM7QUFBQSxnQkF2SGhDLDZEQXVIdUIsZ0JBQVMsa0JBQWU7QUFBQSxnQkFDaEMsT0FBTyxnQkFBUztBQUFBLGdCQUNoQixTQUFPLFVBQUcsZ0JBQWdCO0FBQUEsZ0JBQzNCLFdBQVU7QUFBQSxnQkFDVixXQUFVO0FBQUEsZ0JBQ1YsYUFBWTtBQUFBLGdCQUNaLFdBQVE7QUFBQTtjQUVWLG9CQVlNLE9BWk4sYUFZTTtBQUFBLGdCQVZKLG9CQVNNLE9BVE4sYUFTTTtBQUFBLGtCQVJKO0FBQUEsb0JBT007QUFBQSxvQkFQTjtBQUFBLG9CQU9NLGlCQUxGLGdCQUFTLGFBQWEsZ0JBQVMsbUJBQXVDLGdCQUFTLG9CQUFlOzs7Ozs7OztVQVUxRyxhQVMyQjtBQUFBLFlBUnpCLE1BQUs7QUFBQSxZQUNMLFlBQVc7QUFBQSxZQUNYLFdBQVE7QUFBQSxZQUNQLFVBQXVCLGdCQUFTLGFBQWEsZ0JBQVMsbUJBQStCLFVBQUcsWUFBd0IsVUFBRyxRQUFRLFNBQU07QUFBQSxZQUtqSSxXQUFXO0FBQUEiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInNpZ25VcC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJyZWxhdGl2ZSB6LTEwIHAtNSB0ZXh0LTEzIGgtWzQwcmVtXSB3LVsyNnJlbV0gYmctYmxhY2svNDAgdGV4dC13aGl0ZSBiYWNrZHJvcC1ibHVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL2F1dGhNb2RhbENvbnRlbnRzL3NpZ25VcC52dWU6MjozXCI+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHB4LTRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvYXV0aE1vZGFsQ29udGVudHMvc2lnblVwLnZ1ZTo0OjVcIj5cbiAgICAgIDxTaWduVXBIZWFkZXIgZGF0YS1jeT1cInNpZ24tdXAtaGVhZGVyXCIgLz5cbiAgICAgIDxTaWduVXBJbnRybyBkYXRhLWN5PVwic2lnbi11cC1pbnRyb1wiIDplcnJvcj1cImltYWdlTm90QXR0YWNoZWRcIiAvPlxuICAgICAgPEFjY2VwdFRlcm1zQW5kQ29uZGl0aW9ucyBkYXRhLWN5PVwiYWNjZXB0LXRlcm1zXCIgLz5cbiAgICAgIDxDdXN0b21UZXh0XG4gICAgICAgIHRleHQ9XCJFbnRlciB5b3VyIGRldGFpbHNcIlxuICAgICAgICBjbGFzcz1cIm1iLTQgdGV4dC1jZW50ZXIgdGV4dC14c1wiXG4gICAgICAgIGRhdGEtY3k9XCJlbnRlci1kZXRhaWxzLXRleHRcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJweC00XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL2F1dGhNb2RhbENvbnRlbnRzL3NpZ25VcC52dWU6MTM6NVwiPlxuICAgICAgPGZvcm1cbiAgICAgICAgY2xhc3M9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMVwiXG4gICAgICAgIEBzdWJtaXQucHJldmVudD1cImhhbmRsZVN1Ym1pdFwiXG4gICAgICAgIGRhdGEtY3k9XCJzaWduLXVwLWZvcm1cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvYXV0aE1vZGFsQ29udGVudHMvc2lnblVwLnZ1ZToxNDo3XCI+XG4gICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICB2LW1vZGVsPVwiZm9ybURhdGEuZmlyc3ROYW1lXCJcbiAgICAgICAgICA6dmFsdWU9XCJmb3JtRGF0YS5maXJzdE5hbWVcIlxuICAgICAgICAgIEBpbnB1dD1cIiR2LmZpcnN0TmFtZS4kdG91Y2hcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgaWNvbkNsYXNzPVwiZmEtc29saWQgZmEtdXNlciB0ZXh0LWJhc2UgdGV4dC1ibGFjay83MFwiXG4gICAgICAgICAgZGF0YS1jeT1cImZpcnN0LW5hbWUtZmllbGRcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yZWQtNTAwIHRleHQteHNcIiBkYXRhLWN5PVwiZmlyc3QtbmFtZS1lcnJvclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9hdXRoTW9kYWxDb250ZW50cy9zaWduVXAudnVlOjI1OjlcIj5cbiAgICAgICAgICA8c3BhbiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvYXV0aE1vZGFsQ29udGVudHMvc2lnblVwLnZ1ZToyNjoxMVwiPnt7XG4gICAgICAgICAgICAkdi5maXJzdE5hbWUuJGVycm9yID8gJHYuZmlyc3ROYW1lLiRlcnJvcnNbMF0/LiRtZXNzYWdlIDogXCImbmJzcFwiXG4gICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgdi1tb2RlbD1cImZvcm1EYXRhLnN1ck5hbWVcIlxuICAgICAgICAgIDp2YWx1ZT1cImZvcm1EYXRhLnN1ck5hbWVcIlxuICAgICAgICAgIEBpbnB1dD1cIiR2LnN1ck5hbWUuJHRvdWNoXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN1cm5hbWVcIlxuICAgICAgICAgIGljb25DbGFzcz1cImZhLXNvbGlkIGZhLXVzZXIgdGV4dC1iYXNlIHRleHQtYmxhY2svNzBcIlxuICAgICAgICAgIGRhdGEtY3k9XCJzdXJuYW1lLWZpZWxkXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmVkLTUwMCB0ZXh0LXhzIHctZnVsbCBoLWZ1bGxcIiBkYXRhLWN5PVwic3VybmFtZS1lcnJvclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9hdXRoTW9kYWxDb250ZW50cy9zaWduVXAudnVlOjM3OjlcIj5cbiAgICAgICAgICA8c3BhbiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvYXV0aE1vZGFsQ29udGVudHMvc2lnblVwLnZ1ZTozODoxMVwiPnt7XG4gICAgICAgICAgICAkdi5zdXJOYW1lLiRlcnJvciA/ICR2LnN1ck5hbWUuJGVycm9yc1swXT8uJG1lc3NhZ2UgOiBcIiZuYnNwXCJcbiAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJmb3JtRGF0YS5lbWFpbFwiXG4gICAgICAgICAgOmRpc2FibGVkPVwidHJ1ZVwiXG4gICAgICAgICAgaWNvbkNsYXNzPVwiZmEtc29saWQgZmEtZW52ZWxvcGUgdGV4dC1iYXNlIHRleHQtYmxhY2svNzBcIlxuICAgICAgICAgIGRhdGEtY3k9XCJlbWFpbC1maWVsZFwiIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgc3BhY2UteS0xXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL2F1dGhNb2RhbENvbnRlbnRzL3NpZ25VcC52dWU6NDg6OVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHctZnVsbCBmbGV4LTEgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaC1bNTAlXSBtdC0zXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL2F1dGhNb2RhbENvbnRlbnRzL3NpZ25VcC52dWU6NDk6MTFcIj5cbiAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm1EYXRhLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgOnZhbHVlPVwiZm9ybURhdGEucGFzc3dvcmRcIlxuICAgICAgICAgICAgICBAaW5wdXQ9XCJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAkdi5wYXNzd29yZC4kdG91Y2goKTtcbiAgICAgICAgICAgICAgICAgICR2LnBhc3N3b3JkLiR2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgaWNvbkNsYXNzPVwiZmEtc29saWQgZmEta2V5IHRleHQtYmFzZSB0ZXh0LWJsYWNrLzcwXCJcbiAgICAgICAgICAgICAgaW5wdXRUeXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgZGF0YS1jeT1cInBhc3N3b3JkLWZpZWxkXCIgLz5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXggaC00IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgbXQtMiBtYi0yXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL2F1dGhNb2RhbENvbnRlbnRzL3NpZ25VcC52dWU6NjQ6MTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvYXV0aE1vZGFsQ29udGVudHMvc2lnblVwLnZ1ZTo2NjoxNVwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC14c1wiXG4gICAgICAgICAgICAgICAgICBkYXRhLWN5PVwicGFzc3dvcmQtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAndGV4dC13aGl0ZSc6ICEkdi5wYXNzd29yZC4kZGlydHksXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LXJlZC01MDAnOiAkdi5wYXNzd29yZC4kZGlydHkgJiYgJHYucGFzc3dvcmQuJGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAndGV4dC1bI2UzZTQ2OV0nOlxuICAgICAgICAgICAgICAgICAgICAgICR2LnBhc3N3b3JkLiRkaXJ0eSAmJlxuICAgICAgICAgICAgICAgICAgICAgICFjaGVja1Bhc3N3b3JkKGZvcm1EYXRhLnBhc3N3b3JkKS52YWxpZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICEkdi5wYXNzd29yZC4kZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LVsjNDlhMDJmXSc6XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tQYXNzd29yZChmb3JtRGF0YS5wYXNzd29yZCkudmFsaWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAhJHYucGFzc3dvcmQuJGVycm9yXG4gICAgICAgICAgICAgICAgICB9XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL2F1dGhNb2RhbENvbnRlbnRzL3NpZ25VcC52dWU6Njc6MTdcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9hdXRoTW9kYWxDb250ZW50cy9zaWduVXAudnVlOjg0OjE5XCJcbiAgICAgICAgICAgICAgICAgICAgPnt7XG4gICAgICAgICAgICAgICAgICAgICAgJHYucGFzc3dvcmQuJGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICR2LnBhc3N3b3JkLiRlcnJvcnNbMF0/LiRtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICR2LnBhc3N3b3JkLiRkaXJ0eVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGVja1Bhc3N3b3JkKGZvcm1EYXRhLnBhc3N3b3JkKS52YWxpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiU3Ryb25nIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGVja1Bhc3N3b3JkKGZvcm1EYXRhLnBhc3N3b3JkKS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiJm5ic3BcIlxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImgtMS41IHctMjQgcm91bmRlZCBiZy1bIzRlNGU0ZV1cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvYXV0aE1vZGFsQ29udGVudHMvc2lnblVwLnZ1ZTo5NzoxNVwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaC1mdWxsIHJvdW5kZWQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHctMFwiXG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICdiZy1bIzRlNGU0ZV0nOiAhJHYucGFzc3dvcmQuJGRpcnR5LFxuICAgICAgICAgICAgICAgICAgICAnYmctWyNkYzdjNTZdIHctMS8yJzogJHYucGFzc3dvcmQuJGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAnYmctWyNlM2U0NjldIHctNC81JzpcbiAgICAgICAgICAgICAgICAgICAgICAkdi5wYXNzd29yZC4kZGlydHkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAhY2hlY2tQYXNzd29yZChmb3JtRGF0YS5wYXNzd29yZCkudmFsaWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAhJHYucGFzc3dvcmQuJGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAnYmctWyM0OWEwMmZdIHctZnVsbCc6XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tQYXNzd29yZChmb3JtRGF0YS5wYXNzd29yZCkudmFsaWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAhJHYucGFzc3dvcmQuJGVycm9yXG4gICAgICAgICAgICAgICAgICB9XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL2F1dGhNb2RhbENvbnRlbnRzL3NpZ25VcC52dWU6OTg6MTdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHctZnVsbCBmbGV4LTEgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaC1bNTAlXVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9hdXRoTW9kYWxDb250ZW50cy9zaWduVXAudnVlOjExODoxMVwiPlxuICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybURhdGEuY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgOnZhbHVlPVwiZm9ybURhdGEuY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgQGlucHV0PVwiJHYuY29uZmlybVBhc3N3b3JkLiR0b3VjaFwiXG4gICAgICAgICAgICAgIGljb25DbGFzcz1cImZhLXNvbGlkIGZhLWtleSB0ZXh0LWJhc2UgdGV4dC1ibGFjay83MFwiXG4gICAgICAgICAgICAgIGlucHV0VHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgZGF0YS1jeT1cImNvbmZpcm0tcGFzc3dvcmQtZmllbGRcIiAvPlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwiZmxleCBoLTQgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyBtdC0yIG1iLTJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvYXV0aE1vZGFsQ29udGVudHMvc2lnblVwLnZ1ZToxMjg6MTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvYXV0aE1vZGFsQ29udGVudHMvc2lnblVwLnZ1ZToxMzA6MTVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1bI0U1NEU0RV1cIiBkYXRhLWN5PVwiY29uZmlybS1wYXNzd29yZC1lcnJvclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9hdXRoTW9kYWxDb250ZW50cy9zaWduVXAudnVlOjEzMToxN1wiPlxuICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEucGFzc3dvcmQgIT09IGZvcm1EYXRhLmNvbmZpcm1QYXNzd29yZCAmJlxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5jb25maXJtUGFzc3dvcmQgIT09IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiUGFzc3dvcmRzIGRvbid0IG1hdGNoXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiJm5ic3BcIlxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxHcmFkaWVudEJ1dHRvblxuICAgICAgICAgIHRleHQ9XCJFbnRlclwiXG4gICAgICAgICAgYnV0dG9uVHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgZGF0YS1jeT1cInN1Ym1pdC1idXR0b25cIlxuICAgICAgICAgIDpkaXNhYmxlZD1cIlxuICAgICAgICAgICAgZm9ybURhdGEucGFzc3dvcmQgIT09IGZvcm1EYXRhLmNvbmZpcm1QYXNzd29yZCB8fFxuICAgICAgICAgICAgJHYuJHBlbmRpbmcgfHxcbiAgICAgICAgICAgICR2LiRlcnJvcnMubGVuZ3RoID4gMFxuICAgICAgICAgIFwiXG4gICAgICAgICAgOmlzTG9hZGluZz1cImlzTG9hZGluZ1wiIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCBTaWduVXBIZWFkZXIgZnJvbSBcIi4uLy4uL21vbGVjdWxlcy9TaWduVXBIZWFkZXIudnVlXCI7XG5pbXBvcnQgU2lnblVwSW50cm8gZnJvbSBcIi4uLy4uL29yZ2FuaXNtcy9TaWduVXBJbnRyby52dWVcIjtcbmltcG9ydCBBY2NlcHRUZXJtc0FuZENvbmRpdGlvbnMgZnJvbSBcIi4uLy4uL21vbGVjdWxlcy90ZXJtc0FuZENvbmRpdGlvbnMvQWNjZXB0VGVybXNBbmRDb25kaXRpb25zLnZ1ZVwiO1xuaW1wb3J0IEN1c3RvbVRleHQgZnJvbSBcIi4uLy4uL2F0b21zL0N1c3RvbVRleHQudnVlXCI7XG5pbXBvcnQgRm9ybUZpZWxkIGZyb20gXCIuLi8uLi9tb2xlY3VsZXMvRm9ybUZpZWxkLnZ1ZVwiO1xuaW1wb3J0IEdyYWRpZW50QnV0dG9uIGZyb20gXCIuLi8uLi9hdG9tcy9idXR0b25zL0dyYWRpZW50QnV0dG9uLnZ1ZVwiO1xuaW1wb3J0IHsgdXNlVnVlbGlkYXRlIH0gZnJvbSBcIkB2dWVsaWRhdGUvY29yZVwiO1xuaW1wb3J0IHsgdXNlQXV0aFN0b3JlIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3Jlcy9hdXRoU3RvcmVcIjtcbmltcG9ydCB7XG4gIHNpZ25VcFZhbGlkYXRpb24sXG4gIGNoZWNrUGFzc3dvcmRcbn0gZnJvbSBcIi4uLy4uLy4uL3ZhbGlkYXRpb25zL3NpZ251cFZhbGlkYXRpb25cIjtcbmltcG9ydCB7IHJlYWN0aXZlLCByZWYgfSBmcm9tIFwidnVlXCI7XG5jb25zdCBhdXRoU3RvcmUgPSB1c2VBdXRoU3RvcmUoKTtcblxuY29uc3QgZm9ybURhdGEgPSByZWFjdGl2ZSh7XG4gIGVtYWlsOiBhdXRoU3RvcmUudXNlci5lbWFpbCxcbiAgZmlyc3ROYW1lOiBcIlwiLFxuICBzdXJOYW1lOiBcIlwiLFxuICBwYXNzd29yZDogXCJcIixcbiAgY29uZmlybVBhc3N3b3JkOiBcIlwiXG59KTtcbmNvbnN0IHJ1bGVzID0gc2lnblVwVmFsaWRhdGlvbjtcbmNvbnN0ICR2ID0gdXNlVnVlbGlkYXRlKHJ1bGVzLCBmb3JtRGF0YSk7XG5cbmNvbnN0IGlzTG9hZGluZyA9IHJlZihmYWxzZSk7XG5jb25zdCBpbWFnZU5vdEF0dGFjaGVkID0gcmVmKGZhbHNlKTtcblxuY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICBpbWFnZU5vdEF0dGFjaGVkLnZhbHVlID0gYXV0aFN0b3JlLnVzZXIuaW1hZ2VVcmwgPT09IFwiXCI7XG5cbiAgJHYudmFsdWUuJHRvdWNoKCk7XG4gICR2LnZhbHVlLiR2YWxpZGF0ZSgpO1xuICBjb25zdCBwYXNzd29yZENoZWNrID0gY2hlY2tQYXNzd29yZChmb3JtRGF0YS5wYXNzd29yZCk7XG4gIGlmICghJHYudmFsdWUuJGVycm9yICYmIHBhc3N3b3JkQ2hlY2sudmFsaWQpIHtcbiAgICBpc0xvYWRpbmcudmFsdWUgPSB0cnVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxcIiwgZm9ybURhdGEuZW1haWwpO1xuICAgIGF1dGhTdG9yZS5zZXRVc2VyRGF0YSh7XG4gICAgICBlbWFpbDogZm9ybURhdGEuZW1haWwsXG4gICAgICBmaXJzdE5hbWU6IGZvcm1EYXRhLmZpcnN0TmFtZSxcbiAgICAgIHN1ck5hbWU6IGZvcm1EYXRhLnN1ck5hbWVcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlzTG9hZGluZy52YWx1ZSA9IGZhbHNlO1xuICAgICAgYXV0aFN0b3JlLnNldEN1cnJlbnRNb2RhbChcIm90cFwiLCBmb3JtRGF0YS5lbWFpbCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvdGFucy9Eb2N1bWVudHMvam9iL2FsYWRpYS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vZnJvbnRlbmQvY29tcG9uZW50cy90ZW1wbGF0ZXMvYXV0aE1vZGFsQ29udGVudHMvc2lnblVwLnZ1ZSJ9