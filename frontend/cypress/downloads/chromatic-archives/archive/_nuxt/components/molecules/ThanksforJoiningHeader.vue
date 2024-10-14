import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/ThanksforJoiningHeader.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import CustomImage from "/_nuxt/components/atoms/CustomImage.vue";
import CustomText from "/_nuxt/components/atoms/CustomText.vue";
import { useAuthStore } from "/_nuxt/stores/authStore.ts";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "ThanksforJoiningHeader",
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useAuthStore();
    const __returned__ = { store, CustomImage, CustomText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import {  openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
const _hoisted_1 = {
  class: "flex flex-col items-center px-6 pt-8",
  "data-v-inspector": "components/molecules/ThanksforJoiningHeader.vue:2:3"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode($setup["CustomImage"], {
      src: "https://develop.aladia.io/logo/image.png",
      class: "mb-2 h-24 w-24 rounded object-cover"
    }),
    _createVNode($setup["CustomText"], {
      class: "mb-4 text-lg font-semibold",
      "data-cy": "welcome-message-join-header",
      text: `${$setup.store.user.firstName} ${$setup.store.user.surName}`
    }, null, 8, ["text"]),
    _createVNode($setup["CustomText"], {
      class: "mb-8 text-white/70",
      text: "Thanks for joining Aladia."
    }),
    _createVNode($setup["CustomText"], {
      class: "mb-20 text-center text-white/70",
      "data-cy": "otp-message",
      text: "Please enter below the 6-digit code we sent you through your registration\n      e-mail:"
    })
  ]);
}
_sfc_main.__hmrId = "1a79f4e1";
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
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/molecules/ThanksforJoiningHeader.vue"]]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFtQkEsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyxvQkFBb0I7Ozs7O0FBQzdCLFVBQU0sUUFBUSxhQUFhOzs7Ozs7OztFQXJCcEIsT0FBTTtBQUFBLEVBQXVDLG9CQUFpQjs7O3VCQUFuRSxvQkFjTSxPQWROLFlBY007QUFBQSxJQWJKLGFBRWdEO0FBQUEsTUFEOUMsS0FBSTtBQUFBLE1BQ0osT0FBTTtBQUFBO0lBQ1IsYUFHNEQ7QUFBQSxNQUYxRCxPQUFNO0FBQUEsTUFDTixXQUFRO0FBQUEsTUFDUCxNQUFJLEdBQUssYUFBTSxLQUFLLFNBQVMsSUFBSSxhQUFNLEtBQUssT0FBTztBQUFBO0lBQ3RELGFBQTJFO0FBQUEsTUFBL0QsT0FBTTtBQUFBLE1BQXFCLE1BQUs7QUFBQTtJQUM1QyxhQUlhO0FBQUEsTUFIWCxPQUFNO0FBQUEsTUFDTixXQUFRO0FBQUEsTUFDUixNQUFLO0FBQUEiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlRoYW5rc2ZvckpvaW5pbmdIZWFkZXIudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHB4LTYgcHQtOFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9UaGFua3Nmb3JKb2luaW5nSGVhZGVyLnZ1ZToyOjNcIj5cbiAgICA8Q3VzdG9tSW1hZ2VcbiAgICAgIHNyYz1cImh0dHBzOi8vZGV2ZWxvcC5hbGFkaWEuaW8vbG9nby9pbWFnZS5wbmdcIlxuICAgICAgY2xhc3M9XCJtYi0yIGgtMjQgdy0yNCByb3VuZGVkIG9iamVjdC1jb3ZlclwiIC8+XG4gICAgPEN1c3RvbVRleHRcbiAgICAgIGNsYXNzPVwibWItNCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgZGF0YS1jeT1cIndlbGNvbWUtbWVzc2FnZS1qb2luLWhlYWRlclwiXG4gICAgICA6dGV4dD1cImAke3N0b3JlLnVzZXIuZmlyc3ROYW1lfSAke3N0b3JlLnVzZXIuc3VyTmFtZX1gXCIgLz5cbiAgICA8Q3VzdG9tVGV4dCBjbGFzcz1cIm1iLTggdGV4dC13aGl0ZS83MFwiIHRleHQ9XCJUaGFua3MgZm9yIGpvaW5pbmcgQWxhZGlhLlwiIC8+XG4gICAgPEN1c3RvbVRleHRcbiAgICAgIGNsYXNzPVwibWItMjAgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZS83MFwiXG4gICAgICBkYXRhLWN5PVwib3RwLW1lc3NhZ2VcIlxuICAgICAgdGV4dD1cIlBsZWFzZSBlbnRlciBiZWxvdyB0aGUgNi1kaWdpdCBjb2RlIHdlIHNlbnQgeW91IHRocm91Z2ggeW91ciByZWdpc3RyYXRpb25cbiAgICAgIGUtbWFpbDpcIiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2F0b21zL0N1c3RvbUltYWdlLnZ1ZVwiO1xuaW1wb3J0IEN1c3RvbVRleHQgZnJvbSBcIi4uL2F0b21zL0N1c3RvbVRleHQudnVlXCI7XG5pbXBvcnQgeyB1c2VBdXRoU3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzL2F1dGhTdG9yZVwiO1xuY29uc3Qgc3RvcmUgPSB1c2VBdXRoU3RvcmUoKTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS90YW5zL0RvY3VtZW50cy9qb2IvYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9mcm9udGVuZC9jb21wb25lbnRzL21vbGVjdWxlcy9UaGFua3Nmb3JKb2luaW5nSGVhZGVyLnZ1ZSJ9