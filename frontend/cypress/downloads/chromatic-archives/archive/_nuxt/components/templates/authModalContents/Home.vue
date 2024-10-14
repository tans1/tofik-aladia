import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/authModalContents/Home.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import LoginIntro from "/_nuxt/components/organisms/LoginIntro.vue";
import EmailSubmit from "/_nuxt/components/organisms/EmailSubmit.vue";
import ExternalAuth from "/_nuxt/components/organisms/ExternalAuths.vue";
import TermsAndConditions from "/_nuxt/components/molecules/termsAndConditions/TermsAndConditions.vue";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "Home",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { LoginIntro, EmailSubmit, ExternalAuth, TermsAndConditions };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import {   openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
const _hoisted_1 = {
  "data-cy": "login-page",
  "data-v-inspector": "components/templates/authModalContents/Home.vue:2:3"
};
const _hoisted_2 = {
  class: "px-4",
  "data-cy": "email-submit-container",
  "data-v-inspector": "components/templates/authModalContents/Home.vue:5:5"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode($setup["LoginIntro"]),
    _createElementVNode("div", _hoisted_2, [
      _createVNode($setup["EmailSubmit"])
    ]),
    _createVNode($setup["ExternalAuth"], { "data-cy": "external-auth" }),
    _createVNode($setup["TermsAndConditions"], { "data-cy": "terms-and-conditions" })
  ]);
}
_sfc_main.__hmrId = "99e26ad9";
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
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/templates/authModalContents/Home.vue"]]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyx3QkFBd0I7Ozs7Ozs7Ozs7OztFQWpCeEIsV0FBUTtBQUFBLEVBQWEsb0JBQWlCOzs7RUFHcEMsT0FBTTtBQUFBLEVBQU8sV0FBUTtBQUFBLEVBQXlCLG9CQUFpQjs7O3VCQUh0RSxvQkFVTSxPQVZOLFlBVU07QUFBQSxJQVRKLGFBQWM7QUFBQSxJQUVkLG9CQUVNLE9BRk4sWUFFTTtBQUFBLE1BREosYUFBZTtBQUFBO0lBR2pCLGFBQXdDLDBCQUExQixXQUFRLGdCQUFlO0FBQUEsSUFFckMsYUFBcUQsZ0NBQWpDLFdBQVEsdUJBQXNCO0FBQUEiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkhvbWUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBkYXRhLWN5PVwibG9naW4tcGFnZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9hdXRoTW9kYWxDb250ZW50cy9Ib21lLnZ1ZToyOjNcIj5cbiAgICA8TG9naW5JbnRybyAvPlxuXG4gICAgPGRpdiBjbGFzcz1cInB4LTRcIiBkYXRhLWN5PVwiZW1haWwtc3VibWl0LWNvbnRhaW5lclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9hdXRoTW9kYWxDb250ZW50cy9Ib21lLnZ1ZTo1OjVcIj5cbiAgICAgIDxFbWFpbFN1Ym1pdCAvPlxuICAgIDwvZGl2PlxuXG4gICAgPEV4dGVybmFsQXV0aCBkYXRhLWN5PVwiZXh0ZXJuYWwtYXV0aFwiIC8+XG5cbiAgICA8VGVybXNBbmRDb25kaXRpb25zIGRhdGEtY3k9XCJ0ZXJtcy1hbmQtY29uZGl0aW9uc1wiIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCBMb2dpbkludHJvIGZyb20gXCIuLi8uLi9vcmdhbmlzbXMvTG9naW5JbnRyby52dWVcIjtcbmltcG9ydCBFbWFpbFN1Ym1pdCBmcm9tIFwiLi4vLi4vb3JnYW5pc21zL0VtYWlsU3VibWl0LnZ1ZVwiO1xuaW1wb3J0IEV4dGVybmFsQXV0aCBmcm9tIFwiLi4vLi4vb3JnYW5pc21zL0V4dGVybmFsQXV0aHMudnVlXCI7XG5pbXBvcnQgVGVybXNBbmRDb25kaXRpb25zIGZyb20gXCIuLi8uLi9tb2xlY3VsZXMvdGVybXNBbmRDb25kaXRpb25zL1Rlcm1zQW5kQ29uZGl0aW9ucy52dWVcIjtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS90YW5zL0RvY3VtZW50cy9qb2IvYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9mcm9udGVuZC9jb21wb25lbnRzL3RlbXBsYXRlcy9hdXRoTW9kYWxDb250ZW50cy9Ib21lLnZ1ZSJ9