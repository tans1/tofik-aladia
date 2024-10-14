import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/termsAndConditions/TermsAndConditions.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import CustomLink from "/_nuxt/components/atoms/CustomLink.vue";

const _sfc_main = {
  name: "TermsAndConditions",
  components: {
    CustomLink
  }
};

import { resolveComponent as _resolveComponent,  openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"

const _hoisted_1 = {
  class: "cursor-pointer text-center text-white/40",
  "data-cy": "terms-and-conditions-container",
  "data-v-inspector": "components/molecules/termsAndConditions/TermsAndConditions.vue:2:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CustomLink = _resolveComponent("CustomLink")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_CustomLink, {
      CustomLinkClass: "text-base text-white",
      text: "Terms and Conditions",
      endpoint: "https://www.google.com/",
      target: "_blank",
      "data-cy": "terms-and-conditions-link"
    })
  ]))
}


_sfc_main.__hmrId = "74c4c5b7"
typeof __VUE_HMR_RUNTIME__ !== 'undefined' && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main)
import.meta.hot.accept(mod => {
  if (!mod) return
  const { default: updated, _rerender_only } = mod
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render)
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated)
  }
})
import _export_sfc from "/_nuxt/@id/__x00__plugin-vue:export-helper"
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/molecules/termsAndConditions/TermsAndConditions.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFjQSxNQUFLLENBQUUsVUFBUyxDQUFFLElBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDOztBQUVuRCxLQUFLLFVBQVU7RUFDYixJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztFQUMxQixVQUFVLEVBQUU7SUFDVjtFQUNGO0FBQ0YsQ0FBQzs7Ozs7RUFuQkcsS0FBSyxFQUFDLDBDQUEwQztFQUNoRCxTQUFPLEVBQUMsZ0NBQWdDO0VBQUMsa0JBQWdCLEVBQUM7Ozs7Ozt3QkFGNUQsb0JBU00sT0FUTixVQVNNO0lBTkosYUFLd0M7TUFKdEMsZUFBZSxFQUFDLHNCQUFzQjtNQUN0QyxJQUFJLEVBQUMsc0JBQXNCO01BQzNCLFFBQVEsRUFBQyx5QkFBeUI7TUFDbEMsTUFBTSxFQUFDLFFBQVE7TUFDZixTQUFPLEVBQUMiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlRlcm1zQW5kQ29uZGl0aW9ucy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlLzQwXCJcbiAgICBkYXRhLWN5PVwidGVybXMtYW5kLWNvbmRpdGlvbnMtY29udGFpbmVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL3Rlcm1zQW5kQ29uZGl0aW9ucy9UZXJtc0FuZENvbmRpdGlvbnMudnVlOjI6M1wiPlxuICAgIDxDdXN0b21MaW5rXG4gICAgICBDdXN0b21MaW5rQ2xhc3M9XCJ0ZXh0LWJhc2UgdGV4dC13aGl0ZVwiXG4gICAgICB0ZXh0PVwiVGVybXMgYW5kIENvbmRpdGlvbnNcIlxuICAgICAgZW5kcG9pbnQ9XCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgZGF0YS1jeT1cInRlcm1zLWFuZC1jb25kaXRpb25zLWxpbmtcIiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ3VzdG9tTGluayBmcm9tIFwiLi4vLi4vYXRvbXMvQ3VzdG9tTGluay52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlRlcm1zQW5kQ29uZGl0aW9uc1wiLFxuICBjb21wb25lbnRzOiB7XG4gICAgQ3VzdG9tTGlua1xuICB9XG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL3RhbnMvRG9jdW1lbnRzL2pvYi9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL2Zyb250ZW5kL2NvbXBvbmVudHMvbW9sZWN1bGVzL3Rlcm1zQW5kQ29uZGl0aW9ucy9UZXJtc0FuZENvbmRpdGlvbnMudnVlIn0=