import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/OTPFields.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import { defineComponent as _defineComponent } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
import CustomInput from "/_nuxt/components/atoms/CustomInput.vue";
import GradientButton from "/_nuxt/components/atoms/buttons/GradientButton.vue";
import { useAuthStore } from "/_nuxt/stores/authStore.ts";
import { reactive, ref } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "OTPFields",
  setup(__props, { expose: __expose }) {
    __expose();
    const isLoading = ref(false);
    const store = useAuthStore();
    const formData = reactive({
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: ""
    });
    const handleSubmit = async () => {
      isLoading.value = true;
      const otp = formData.value1 + formData.value2 + formData.value3 + formData.value4 + formData.value5 + formData.value6;
      setTimeout(() => {
        isLoading.value = false;
        store.setCurrentModal("loginSuccess", "");
      }, 1e3);
    };
    const __returned__ = { isLoading, store, formData, handleSubmit, CustomInput, GradientButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import { withModifiers as _withModifiers,   Fragment as _Fragment, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
const _hoisted_1 = {
  class: "relative mb-4 flex h-10 w-full justify-between text-xl text-black",
  "data-v-inspector": "components/organisms/OTPFields.vue:2:3"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createElementVNode("div", _hoisted_1, [
        _createElementVNode(
          "form",
          {
            onSubmit: _withModifiers($setup.handleSubmit, ["prevent"]),
            "data-v-inspector": "components/organisms/OTPFields.vue:4:5"
          },
          null,
          32
          /* NEED_HYDRATION */
        ),
        _createVNode($setup["CustomInput"], {
          maxlength: "1",
          "data-cy": "otp-field-1",
          class: "flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90",
          value: $setup.formData.value1,
          onInput: _cache[0] || (_cache[0] = ($event) => $setup.formData.value1 = $event.target.value)
        }, null, 8, ["value"]),
        _createVNode($setup["CustomInput"], {
          maxlength: "1",
          "data-cy": "otp-field-2",
          class: "flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90",
          value: $setup.formData.value2,
          onInput: _cache[1] || (_cache[1] = ($event) => $setup.formData.value2 = $event.target.value)
        }, null, 8, ["value"]),
        _createVNode($setup["CustomInput"], {
          maxlength: "1",
          "data-cy": "otp-field-3",
          class: "flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90",
          value: $setup.formData.value3,
          onInput: _cache[2] || (_cache[2] = ($event) => $setup.formData.value3 = $event.target.value)
        }, null, 8, ["value"]),
        _createVNode($setup["CustomInput"], {
          maxlength: "1",
          "data-cy": "otp-field-4",
          class: "flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90",
          value: $setup.formData.value4,
          onInput: _cache[3] || (_cache[3] = ($event) => $setup.formData.value4 = $event.target.value)
        }, null, 8, ["value"]),
        _createVNode($setup["CustomInput"], {
          maxlength: "1",
          "data-cy": "otp-field-5",
          class: "flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90",
          value: $setup.formData.value5,
          onInput: _cache[4] || (_cache[4] = ($event) => $setup.formData.value5 = $event.target.value)
        }, null, 8, ["value"]),
        _createVNode($setup["CustomInput"], {
          maxlength: "1",
          "data-cy": "otp-field-6",
          class: "flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90",
          value: $setup.formData.value6,
          onInput: _cache[5] || (_cache[5] = ($event) => $setup.formData.value6 = $event.target.value)
        }, null, 8, ["value"])
      ]),
      _cache[6] || (_cache[6] = _createElementVNode(
        "div",
        {
          class: "mb-24 flex w-full justify-center",
          "data-v-inspector": "components/organisms/OTPFields.vue:44:3"
        },
        [
          _createElementVNode("div", {
            class: "flex cursor-pointer items-center justify-center text-xs transition-all",
            "data-cy": "no-email-received-container",
            "data-v-inspector": "components/organisms/OTPFields.vue:45:5"
          }, [
            _createElementVNode("div", {
              class: "text-white/50",
              "data-cy": "no-email-received-text",
              "data-v-inspector": "components/organisms/OTPFields.vue:48:7"
            }, " You didn't receive any mail? ")
          ])
        ],
        -1
        /* HOISTED */
      )),
      _createVNode($setup["GradientButton"], {
        buttonType: "submit",
        text: "Enter",
        handleClick: $setup.handleSubmit,
        disabled: false,
        buttonClass: "w-full h-full text-white",
        "data-cy": "otp-submit-button",
        isLoading: $setup.isLoading
      }, null, 8, ["isLoading"])
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
_sfc_main.__hmrId = "47ee9de3";
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
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/organisms/OTPFields.vue"]]);

//# sourceMappingURL=data:application/json;base64,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OlsiT1RQRmllbGRzLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cInJlbGF0aXZlIG1iLTQgZmxleCBoLTEwIHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gdGV4dC14bCB0ZXh0LWJsYWNrXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL09UUEZpZWxkcy52dWU6MjozXCI+XG4gICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwiaGFuZGxlU3VibWl0XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL09UUEZpZWxkcy52dWU6NDo1XCI+PC9mb3JtPlxuICAgIDxDdXN0b21JbnB1dFxuICAgICAgbWF4bGVuZ3RoPVwiMVwiXG4gICAgICBkYXRhLWN5PVwib3RwLWZpZWxkLTFcIlxuICAgICAgY2xhc3M9XCJmbGV4IHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgYmctd2hpdGUgdGV4dC1jZW50ZXIgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tdHJhbnNmb3JtIGFjdGl2ZTpzY2FsZS05MFwiXG4gICAgICA6dmFsdWU9XCJmb3JtRGF0YS52YWx1ZTFcIlxuICAgICAgQGlucHV0PVwiZm9ybURhdGEudmFsdWUxID0gJGV2ZW50LnRhcmdldC52YWx1ZVwiIC8+XG5cbiAgICA8Q3VzdG9tSW5wdXRcbiAgICAgIG1heGxlbmd0aD1cIjFcIlxuICAgICAgZGF0YS1jeT1cIm90cC1maWVsZC0yXCJcbiAgICAgIGNsYXNzPVwiZmxleCB3LTEwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGJnLXdoaXRlIHRleHQtY2VudGVyIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBhY3RpdmU6c2NhbGUtOTBcIlxuICAgICAgOnZhbHVlPVwiZm9ybURhdGEudmFsdWUyXCJcbiAgICAgIEBpbnB1dD1cImZvcm1EYXRhLnZhbHVlMiA9ICRldmVudC50YXJnZXQudmFsdWVcIiAvPlxuICAgIDxDdXN0b21JbnB1dFxuICAgICAgbWF4bGVuZ3RoPVwiMVwiXG4gICAgICBkYXRhLWN5PVwib3RwLWZpZWxkLTNcIlxuICAgICAgY2xhc3M9XCJmbGV4IHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgYmctd2hpdGUgdGV4dC1jZW50ZXIgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tdHJhbnNmb3JtIGFjdGl2ZTpzY2FsZS05MFwiXG4gICAgICA6dmFsdWU9XCJmb3JtRGF0YS52YWx1ZTNcIlxuICAgICAgQGlucHV0PVwiZm9ybURhdGEudmFsdWUzID0gJGV2ZW50LnRhcmdldC52YWx1ZVwiIC8+XG4gICAgPEN1c3RvbUlucHV0XG4gICAgICBtYXhsZW5ndGg9XCIxXCJcbiAgICAgIGRhdGEtY3k9XCJvdHAtZmllbGQtNFwiXG4gICAgICBjbGFzcz1cImZsZXggdy0xMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZCBiZy13aGl0ZSB0ZXh0LWNlbnRlciBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gYWN0aXZlOnNjYWxlLTkwXCJcbiAgICAgIDp2YWx1ZT1cImZvcm1EYXRhLnZhbHVlNFwiXG4gICAgICBAaW5wdXQ9XCJmb3JtRGF0YS52YWx1ZTQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXCIgLz5cblxuICAgIDxDdXN0b21JbnB1dFxuICAgICAgbWF4bGVuZ3RoPVwiMVwiXG4gICAgICBkYXRhLWN5PVwib3RwLWZpZWxkLTVcIlxuICAgICAgY2xhc3M9XCJmbGV4IHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgYmctd2hpdGUgdGV4dC1jZW50ZXIgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tdHJhbnNmb3JtIGFjdGl2ZTpzY2FsZS05MFwiXG4gICAgICA6dmFsdWU9XCJmb3JtRGF0YS52YWx1ZTVcIlxuICAgICAgQGlucHV0PVwiZm9ybURhdGEudmFsdWU1ID0gJGV2ZW50LnRhcmdldC52YWx1ZVwiIC8+XG4gICAgPEN1c3RvbUlucHV0XG4gICAgICBtYXhsZW5ndGg9XCIxXCJcbiAgICAgIGRhdGEtY3k9XCJvdHAtZmllbGQtNlwiXG4gICAgICBjbGFzcz1cImZsZXggdy0xMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZCBiZy13aGl0ZSB0ZXh0LWNlbnRlciBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gYWN0aXZlOnNjYWxlLTkwXCJcbiAgICAgIDp2YWx1ZT1cImZvcm1EYXRhLnZhbHVlNlwiXG4gICAgICBAaW5wdXQ9XCJmb3JtRGF0YS52YWx1ZTYgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXCIgLz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJtYi0yNCBmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9PVFBGaWVsZHMudnVlOjQ0OjNcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImZsZXggY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQteHMgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgZGF0YS1jeT1cIm5vLWVtYWlsLXJlY2VpdmVkLWNvbnRhaW5lclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9PVFBGaWVsZHMudnVlOjQ1OjVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdoaXRlLzUwXCIgZGF0YS1jeT1cIm5vLWVtYWlsLXJlY2VpdmVkLXRleHRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvT1RQRmllbGRzLnZ1ZTo0ODo3XCI+XG4gICAgICAgIFlvdSBkaWRuJ3QgcmVjZWl2ZSBhbnkgbWFpbD9cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8R3JhZGllbnRCdXR0b25cbiAgICBidXR0b25UeXBlPVwic3VibWl0XCJcbiAgICB0ZXh0PVwiRW50ZXJcIlxuICAgIDpoYW5kbGVDbGljaz1cImhhbmRsZVN1Ym1pdFwiXG4gICAgOmRpc2FibGVkPVwiZmFsc2VcIlxuICAgIGJ1dHRvbkNsYXNzPVwidy1mdWxsIGgtZnVsbCB0ZXh0LXdoaXRlXCJcbiAgICBkYXRhLWN5PVwib3RwLXN1Ym1pdC1idXR0b25cIlxuICAgIDppc0xvYWRpbmc9XCJpc0xvYWRpbmdcIiAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCBDdXN0b21JbnB1dCBmcm9tIFwiLi4vYXRvbXMvQ3VzdG9tSW5wdXQudnVlXCI7XG5cbmltcG9ydCBHcmFkaWVudEJ1dHRvbiBmcm9tIFwiLi4vYXRvbXMvYnV0dG9ucy9HcmFkaWVudEJ1dHRvbi52dWVcIjtcbmltcG9ydCB7IHVzZUF1dGhTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXMvYXV0aFN0b3JlXCI7XG5pbXBvcnQgeyByZWFjdGl2ZSwgcmVmIH0gZnJvbSBcInZ1ZVwiO1xuY29uc3QgaXNMb2FkaW5nID0gcmVmKGZhbHNlKTtcblxuY29uc3Qgc3RvcmUgPSB1c2VBdXRoU3RvcmUoKTtcblxuY29uc3QgZm9ybURhdGEgPSByZWFjdGl2ZSh7XG4gIHZhbHVlMTogXCJcIixcbiAgdmFsdWUyOiBcIlwiLFxuICB2YWx1ZTM6IFwiXCIsXG4gIHZhbHVlNDogXCJcIixcbiAgdmFsdWU1OiBcIlwiLFxuICB2YWx1ZTY6IFwiXCJcbn0pO1xuXG5jb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gIGlzTG9hZGluZy52YWx1ZSA9IHRydWU7XG4gIGNvbnN0IG90cCA9XG4gICAgZm9ybURhdGEudmFsdWUxICtcbiAgICBmb3JtRGF0YS52YWx1ZTIgK1xuICAgIGZvcm1EYXRhLnZhbHVlMyArXG4gICAgZm9ybURhdGEudmFsdWU0ICtcbiAgICBmb3JtRGF0YS52YWx1ZTUgK1xuICAgIGZvcm1EYXRhLnZhbHVlNjtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaXNMb2FkaW5nLnZhbHVlID0gZmFsc2U7XG4gICAgc3RvcmUuc2V0Q3VycmVudE1vZGFsKFwibG9naW5TdWNjZXNzXCIsIFwiXCIpO1xuICB9LCAxMDAwKTtcbiAgLy8gc3RvcmUuc2V0Q3VycmVudE1vZGFsKFwibG9naW5TdWNjZXNzXCIsIFwiXCIpO1xufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS90YW5zL0RvY3VtZW50cy9qb2IvYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9mcm9udGVuZC9jb21wb25lbnRzL29yZ2FuaXNtcy9PVFBGaWVsZHMudnVlIn0=