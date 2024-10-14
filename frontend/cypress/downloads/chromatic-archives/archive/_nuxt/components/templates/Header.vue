import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/Header.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import Navbar from "/_nuxt/components/organisms/Navbar.vue";
const _sfc_main = {
  name: "Header",
  components: {
    Navbar
  }
};

import { resolveComponent as _resolveComponent,  openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"

const _hoisted_1 = {
  class: "flex h-14 w-full items-center justify-between gap-2 bg-[#060606] px-4 py-2",
  "data-cy": "header-container",
  "data-v-inspector": "components/templates/Header.vue:2:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Navbar = _resolveComponent("Navbar")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_Navbar, { "data-cy": "navbar-component" })
  ]))
}


_sfc_main.__hmrId = "12509bbb"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/templates/Header.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFTQSxNQUFLLENBQUUsTUFBSyxDQUFFLElBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQzVDLEtBQUssVUFBVTtFQUNiLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztFQUNkLFVBQVUsRUFBRTtJQUNWO0VBQ0Y7QUFDRixDQUFDOzs7OztFQWJHLEtBQUssRUFBQyw0RUFBNEU7RUFDbEYsU0FBTyxFQUFDLGtCQUFrQjtFQUFDLGtCQUFnQixFQUFDOzs7Ozs7d0JBRjlDLG9CQUlNLE9BSk4sVUFJTTtJQURKLGFBQXFDLHFCQUE3QixTQUFPLEVBQUMsa0JBQWtCIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJIZWFkZXIudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZmxleCBoLTE0IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yIGJnLVsjMDYwNjA2XSBweC00IHB5LTJcIlxuICAgIGRhdGEtY3k9XCJoZWFkZXItY29udGFpbmVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL0hlYWRlci52dWU6MjozXCI+XG4gICAgPE5hdmJhciBkYXRhLWN5PVwibmF2YmFyLWNvbXBvbmVudFwiIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL29yZ2FuaXNtcy9OYXZiYXIudnVlXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiSGVhZGVyXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBOYXZiYXJcbiAgfVxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS90YW5zL0RvY3VtZW50cy9qb2IvYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9mcm9udGVuZC9jb21wb25lbnRzL3RlbXBsYXRlcy9IZWFkZXIudnVlIn0=