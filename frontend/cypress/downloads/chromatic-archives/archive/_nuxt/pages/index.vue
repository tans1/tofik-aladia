import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/pages/index.vue");import { defineComponent as _defineComponent } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
import Header from "/_nuxt/components/templates/Header.vue";
import HomeSection from "/_nuxt/components/organisms/HomeSection.vue";
import AuthModal from "/_nuxt/components/templates/AuthModal.vue";
import { useAuthStore } from "/_nuxt/stores/authStore.ts";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "index",
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useAuthStore();
    const __returned__ = { store, Header, HomeSection, AuthModal };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import { createVNode as _createVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createVNode($setup["Header"], { "data-cy": "header-component" }),
      _createVNode($setup["HomeSection"], { "data-cy": "home-section" }),
      _createVNode($setup["AuthModal"], { "data-cy": "auth-modal" })
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
import "/_nuxt/pages/index.vue?vue&type=style&index=0&lang.css";
_sfc_main.__hmrId = "02281a80";
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
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/pages/index.vue"]]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQU9BLE9BQU8sWUFBWTtBQUNuQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGVBQWU7QUFDdEIsU0FBUyxvQkFBb0I7Ozs7O0FBQzdCLFVBQU0sUUFBUSxhQUFhOzs7Ozs7Ozt1QkFYM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFLGFBQXFDLG9CQUE3QixXQUFRLG1CQUFrQjtBQUFBLE1BQ2xDLGFBQXNDLHlCQUF6QixXQUFRLGVBQWM7QUFBQSxNQUNuQyxhQUFrQyx1QkFBdkIsV0FBUSxhQUFZO0FBQUEiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImluZGV4LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxIZWFkZXIgZGF0YS1jeT1cImhlYWRlci1jb21wb25lbnRcIiAvPlxuICA8SG9tZVNlY3Rpb24gZGF0YS1jeT1cImhvbWUtc2VjdGlvblwiIC8+XG4gIDxBdXRoTW9kYWwgZGF0YS1jeT1cImF1dGgtbW9kYWxcIiAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVtcGxhdGVzL0hlYWRlci52dWVcIjtcbmltcG9ydCBIb21lU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvSG9tZVNlY3Rpb24udnVlXCI7XG5pbXBvcnQgQXV0aE1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL3RlbXBsYXRlcy9BdXRoTW9kYWwudnVlXCI7XG5pbXBvcnQgeyB1c2VBdXRoU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVzL2F1dGhTdG9yZVwiO1xuY29uc3Qgc3RvcmUgPSB1c2VBdXRoU3RvcmUoKTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTAxMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB3aWR0aDogMTAwdnc7XG59XG48L3N0eWxlPlxuIl0sImZpbGUiOiIvaG9tZS90YW5zL0RvY3VtZW50cy9qb2IvYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9mcm9udGVuZC9wYWdlcy9pbmRleC52dWUifQ==