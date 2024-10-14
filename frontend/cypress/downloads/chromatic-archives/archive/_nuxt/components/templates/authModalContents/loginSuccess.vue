import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/authModalContents/loginSuccess.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import { defineComponent as _defineComponent } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
import CustomText from "/_nuxt/components/atoms/CustomText.vue";
import GradientButton from "/_nuxt/components/atoms/buttons/GradientButton.vue";
import CustomImage from "/_nuxt/components/atoms/CustomImage.vue";
import { useAuthStore } from "/_nuxt/stores/authStore.ts";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "loginSuccess",
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useAuthStore();
    const getIn = () => {
      store.closeModal();
      store.setCurrentModal("home", store.user?.email);
    };
    const __returned__ = { store, getIn, CustomText, GradientButton, CustomImage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import {  openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
const _hoisted_1 = {
  class: "flex flex-col items-center px-6 pt-8 space-y-4",
  "data-v-inspector": "components/templates/authModalContents/loginSuccess.vue:2:3"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode($setup["CustomImage"], {
      src: "https://develop.aladia.io/logo/image.png",
      class: "mb-2 h-24 w-24 rounded object-cover"
    }),
    _createVNode($setup["CustomText"], {
      class: "mb-4 text-lg font-semibold",
      text: `${$setup.store.user?.firstName} ${$setup.store.user?.surName}`
    }, null, 8, ["text"]),
    _createVNode($setup["CustomText"], {
      class: "mb-8 text-white/70",
      text: "Thanks for joining Aladia."
    }),
    _createVNode($setup["GradientButton"], {
      text: "Enter MarketPlace",
      "data-cy": "submit-button",
      handleClick: $setup.getIn,
      buttonClass: "pt-20 h-full w-full text-white"
    })
  ]);
}
_sfc_main.__hmrId = "6c14bef6";
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
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/templates/authModalContents/loginSuccess.vue"]]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxvQkFBb0I7QUFDM0IsT0FBTyxpQkFBaUI7QUFDeEIsU0FBUyxvQkFBb0I7Ozs7O0FBRTdCLFVBQU0sUUFBUSxhQUFhO0FBRTNCLFVBQU0sUUFBUSxNQUFNO0FBQ2xCLFlBQU0sV0FBVztBQUNqQixZQUFNLGdCQUFnQixRQUFRLE1BQU0sTUFBTSxLQUFLO0FBQUEsSUFDakQ7Ozs7Ozs7O0VBM0JPLE9BQU07QUFBQSxFQUFpRCxvQkFBaUI7Ozt1QkFBN0Usb0JBYU0sT0FiTixZQWFNO0FBQUEsSUFaSixhQUVnRDtBQUFBLE1BRDlDLEtBQUk7QUFBQSxNQUNKLE9BQU07QUFBQTtJQUNSLGFBRThEO0FBQUEsTUFENUQsT0FBTTtBQUFBLE1BQ0wsTUFBSSxHQUFLLGFBQU0sTUFBTSxTQUFTLElBQUksYUFBTSxNQUFNLE9BQU87QUFBQTtJQUN4RCxhQUEyRTtBQUFBLE1BQS9ELE9BQU07QUFBQSxNQUFxQixNQUFLO0FBQUE7SUFDNUMsYUFJaUQ7QUFBQSxNQUgvQyxNQUFLO0FBQUEsTUFDTCxXQUFRO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDZCxhQUFZO0FBQUEiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImxvZ2luU3VjY2Vzcy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHgtNiBwdC04IHNwYWNlLXktNFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9hdXRoTW9kYWxDb250ZW50cy9sb2dpblN1Y2Nlc3MudnVlOjI6M1wiPlxuICAgIDxDdXN0b21JbWFnZVxuICAgICAgc3JjPVwiaHR0cHM6Ly9kZXZlbG9wLmFsYWRpYS5pby9sb2dvL2ltYWdlLnBuZ1wiXG4gICAgICBjbGFzcz1cIm1iLTIgaC0yNCB3LTI0IHJvdW5kZWQgb2JqZWN0LWNvdmVyXCIgLz5cbiAgICA8Q3VzdG9tVGV4dFxuICAgICAgY2xhc3M9XCJtYi00IHRleHQtbGcgZm9udC1zZW1pYm9sZFwiXG4gICAgICA6dGV4dD1cImAke3N0b3JlLnVzZXI/LmZpcnN0TmFtZX0gJHtzdG9yZS51c2VyPy5zdXJOYW1lfWBcIiAvPlxuICAgIDxDdXN0b21UZXh0IGNsYXNzPVwibWItOCB0ZXh0LXdoaXRlLzcwXCIgdGV4dD1cIlRoYW5rcyBmb3Igam9pbmluZyBBbGFkaWEuXCIgLz5cbiAgICA8R3JhZGllbnRCdXR0b25cbiAgICAgIHRleHQ9XCJFbnRlciBNYXJrZXRQbGFjZVwiXG4gICAgICBkYXRhLWN5PVwic3VibWl0LWJ1dHRvblwiXG4gICAgICA6aGFuZGxlQ2xpY2s9XCJnZXRJblwiXG4gICAgICBidXR0b25DbGFzcz1cInB0LTIwIGgtZnVsbCB3LWZ1bGwgdGV4dC13aGl0ZVwiIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCBDdXN0b21UZXh0IGZyb20gXCIuLi8uLi9hdG9tcy9DdXN0b21UZXh0LnZ1ZVwiO1xuaW1wb3J0IEdyYWRpZW50QnV0dG9uIGZyb20gXCIuLi8uLi9hdG9tcy9idXR0b25zL0dyYWRpZW50QnV0dG9uLnZ1ZVwiO1xuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi8uLi9hdG9tcy9DdXN0b21JbWFnZS52dWVcIjtcbmltcG9ydCB7IHVzZUF1dGhTdG9yZSB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZXMvYXV0aFN0b3JlXCI7XG5cbmNvbnN0IHN0b3JlID0gdXNlQXV0aFN0b3JlKCk7XG5cbmNvbnN0IGdldEluID0gKCkgPT4ge1xuICBzdG9yZS5jbG9zZU1vZGFsKCk7XG4gIHN0b3JlLnNldEN1cnJlbnRNb2RhbChcImhvbWVcIiwgc3RvcmUudXNlcj8uZW1haWwpO1xufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS90YW5zL0RvY3VtZW50cy9qb2IvYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9mcm9udGVuZC9jb21wb25lbnRzL3RlbXBsYXRlcy9hdXRoTW9kYWxDb250ZW50cy9sb2dpblN1Y2Nlc3MudnVlIn0=