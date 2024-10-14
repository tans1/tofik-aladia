import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/termsAndConditions/AcceptTermsAndConditions.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import CustomLink from "/_nuxt/components/atoms/CustomLink.vue";
import CustomInput from "/_nuxt/components/atoms/CustomInput.vue";

const _sfc_main = {
  name: "AcceptTermsAndConditions",
  components: {
    CustomLink,
    CustomInput
  }
};

import { resolveComponent as _resolveComponent,   createTextVNode as _createTextVNode, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"

const _hoisted_1 = {
  class: "mb-4 flex items-center gap-2",
  "data-cy": "accept-terms-container",
  "data-v-inspector": "components/molecules/termsAndConditions/AcceptTermsAndConditions.vue:2:3"
}
const _hoisted_2 = {
  class: "flex h-4 w-4 items-center justify-center pt-0.5",
  "data-cy": "checkbox-container",
  "data-v-inspector": "components/molecules/termsAndConditions/AcceptTermsAndConditions.vue:3:5"
}
const _hoisted_3 = {
  class: "text-xs text-white/70",
  "data-cy": "terms-text",
  "data-v-inspector": "components/molecules/termsAndConditions/AcceptTermsAndConditions.vue:11:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CustomInput = _resolveComponent("CustomInput")
  const _component_CustomLink = _resolveComponent("CustomLink")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_CustomInput, {
        type: "checkbox",
        class: "rounded transition-all border-white/50 hover:border-white cursor-pointer w-full h-full",
        "data-cy": "terms-checkbox"
      })
    ]),
    _createElementVNode("div", _hoisted_3, [
      _cache[0] || (_cache[0] = _createTextVNode(" I accept ")),
      _createVNode(_component_CustomLink, {
        linkClass: "underline text-white",
        text: "Terms & Conditions",
        target: "_blank",
        "data-cy": "terms-link",
        endpoint: "/"
      }),
      _createVNode(_component_CustomLink, {
        linkClass: "underline text-white",
        text: "Privacy Policy",
        target: "_blank",
        "data-cy": "privacy-policy-link",
        endpoint: "/"
      })
    ])
  ]))
}


_sfc_main.__hmrId = "899d5848"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/molecules/termsAndConditions/AcceptTermsAndConditions.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBLE1BQUssQ0FBRSxVQUFTLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7QUFDbkQsTUFBSyxDQUFFLFdBQVUsQ0FBRSxJQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQzs7QUFFckQsS0FBSyxVQUFVO0VBQ2IsSUFBSSxFQUFFLENBQUMsd0JBQXdCLENBQUM7RUFDaEMsVUFBVSxFQUFFO0lBQ1YsVUFBVTtJQUNWO0VBQ0Y7QUFDRixDQUFDOzs7OztFQXJDTSxLQUFLLEVBQUMsOEJBQThCO0VBQUMsU0FBTyxFQUFDLHdCQUF3QjtFQUFDLGtCQUFnQixFQUFDOzs7RUFFeEYsS0FBSyxFQUFDLGlEQUFpRDtFQUN2RCxTQUFPLEVBQUMsb0JBQW9CO0VBQUMsa0JBQWdCLEVBQUM7OztFQU0zQyxLQUFLLEVBQUMsdUJBQXVCO0VBQUMsU0FBTyxFQUFDLFlBQVk7RUFBQyxrQkFBZ0IsRUFBQzs7Ozs7Ozt3QkFUM0Usb0JBd0JNLE9BeEJOLFVBd0JNO0lBdkJKLG9CQU9NLE9BUE4sVUFPTTtNQUpKLGFBRzZCO1FBRjNCLElBQUksRUFBQyxVQUFVO1FBQ2YsS0FBSyxFQUFDLHdGQUF3RjtRQUM5RixTQUFPLEVBQUM7OztJQUVaLG9CQWNNLE9BZE4sVUFjTTtnQ0F4QlYsaUJBVXlKLFlBRW5KO01BQUEsYUFLaUI7UUFKZixTQUFTLEVBQUMsc0JBQXNCO1FBQ2hDLElBQUksRUFBQyxvQkFBd0I7UUFDN0IsTUFBTSxFQUFDLFFBQVE7UUFDZixTQUFPLEVBQUMsWUFBWTtRQUNwQixRQUFRLEVBQUM7O01BQ1gsYUFLaUI7UUFKZixTQUFTLEVBQUMsc0JBQXNCO1FBQ2hDLElBQUksRUFBQyxnQkFBZ0I7UUFDckIsTUFBTSxFQUFDLFFBQVE7UUFDZixTQUFPLEVBQUMscUJBQXFCO1FBQzdCLFFBQVEsRUFBQyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQWNjZXB0VGVybXNBbmRDb25kaXRpb25zLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtYi00IGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCIgZGF0YS1jeT1cImFjY2VwdC10ZXJtcy1jb250YWluZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvdGVybXNBbmRDb25kaXRpb25zL0FjY2VwdFRlcm1zQW5kQ29uZGl0aW9ucy52dWU6MjozXCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJmbGV4IGgtNCB3LTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTAuNVwiXG4gICAgICBkYXRhLWN5PVwiY2hlY2tib3gtY29udGFpbmVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL3Rlcm1zQW5kQ29uZGl0aW9ucy9BY2NlcHRUZXJtc0FuZENvbmRpdGlvbnMudnVlOjM6NVwiPlxuICAgICAgPEN1c3RvbUlucHV0XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIGNsYXNzPVwicm91bmRlZCB0cmFuc2l0aW9uLWFsbCBib3JkZXItd2hpdGUvNTAgaG92ZXI6Ym9yZGVyLXdoaXRlIGN1cnNvci1wb2ludGVyIHctZnVsbCBoLWZ1bGxcIlxuICAgICAgICBkYXRhLWN5PVwidGVybXMtY2hlY2tib3hcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXhzIHRleHQtd2hpdGUvNzBcIiBkYXRhLWN5PVwidGVybXMtdGV4dFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy90ZXJtc0FuZENvbmRpdGlvbnMvQWNjZXB0VGVybXNBbmRDb25kaXRpb25zLnZ1ZToxMTo1XCI+XG4gICAgICBJIGFjY2VwdFxuICAgICAgPEN1c3RvbUxpbmtcbiAgICAgICAgbGlua0NsYXNzPVwidW5kZXJsaW5lIHRleHQtd2hpdGVcIlxuICAgICAgICB0ZXh0PVwiVGVybXMgJmFtcDsgQ29uZGl0aW9uc1wiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIGRhdGEtY3k9XCJ0ZXJtcy1saW5rXCJcbiAgICAgICAgZW5kcG9pbnQ9XCIvXCIgLz5cbiAgICAgIDxDdXN0b21MaW5rXG4gICAgICAgIGxpbmtDbGFzcz1cInVuZGVybGluZSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgdGV4dD1cIlByaXZhY3kgUG9saWN5XCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgZGF0YS1jeT1cInByaXZhY3ktcG9saWN5LWxpbmtcIlxuICAgICAgICBlbmRwb2ludD1cIi9cIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ3VzdG9tTGluayBmcm9tIFwiLi4vLi4vYXRvbXMvQ3VzdG9tTGluay52dWVcIjtcbmltcG9ydCBDdXN0b21JbnB1dCBmcm9tIFwiLi4vLi4vYXRvbXMvQ3VzdG9tSW5wdXQudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJBY2NlcHRUZXJtc0FuZENvbmRpdGlvbnNcIixcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUxpbmssXG4gICAgQ3VzdG9tSW5wdXRcbiAgfVxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS90YW5zL0RvY3VtZW50cy9qb2IvYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9mcm9udGVuZC9jb21wb25lbnRzL21vbGVjdWxlcy90ZXJtc0FuZENvbmRpdGlvbnMvQWNjZXB0VGVybXNBbmRDb25kaXRpb25zLnZ1ZSJ9