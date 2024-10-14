import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/CustomIcon.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */

const _sfc_main = {
  name: "CustomIcon",
  props: {
    iconClass: {
      type: String,
      required: true
    }
  }
};

import { normalizeClass as _normalizeClass,  openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"

const _hoisted_1 = {
  "data-cy": "custom-icon",
  "data-v-inspector": "components/atoms/CustomIcon.vue:2:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("i", {
      class: _normalizeClass($props.iconClass),
      "data-v-inspector": "components/atoms/CustomIcon.vue:3:5"
    }, null, 2 /* CLASS */)
  ]))
}


_sfc_main.__hmrId = "e2ff8902"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/atoms/CustomIcon.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFPQSxLQUFLLFVBQVU7RUFDYixJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUM7RUFDbEIsS0FBSyxFQUFFO0lBQ0wsU0FBUyxFQUFFO01BQ1QsSUFBSSxFQUFFLE1BQU07TUFDWixRQUFRLEVBQUU7SUFDWjtFQUNGO0FBQ0YsQ0FBQzs7Ozs7RUFkTSxTQUFPLEVBQUMsYUFBYTtFQUFDLGtCQUFnQixFQUFDOzs7O3dCQUE1QyxvQkFFTSxPQUZOLFVBRU07SUFESixvQkFBK0U7TUFBM0UsS0FBSyxFQUZiLGdCQUVlLGdCQUFTO01BQUUsa0JBQWdCLEVBQUMiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkN1c3RvbUljb24udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBkYXRhLWN5PVwiY3VzdG9tLWljb25cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9DdXN0b21JY29uLnZ1ZToyOjNcIj5cbiAgICA8aSA6Y2xhc3M9XCJpY29uQ2xhc3NcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9DdXN0b21JY29uLnZ1ZTozOjVcIiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQ3VzdG9tSWNvblwiLFxuICBwcm9wczoge1xuICAgIGljb25DbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvdGFucy9Eb2N1bWVudHMvam9iL2FsYWRpYS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vZnJvbnRlbmQvY29tcG9uZW50cy9hdG9tcy9DdXN0b21JY29uLnZ1ZSJ9