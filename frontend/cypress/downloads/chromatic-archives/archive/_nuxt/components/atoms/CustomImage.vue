import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/CustomImage.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */

const _sfc_main = {
  name: "CustomImage",
  props: {
    src: {
      type: String,
      required: true
    },
    class: {
      type: String,
      default: ""
    }
  }
};

import { normalizeClass as _normalizeClass, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"

const _hoisted_1 = ["src"]

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("img", {
    src: $props.src,
    class: _normalizeClass($props.class),
    "data-cy": "image-component",
    "data-v-inspector": "components/atoms/CustomImage.vue:2:3"
  }, null, 10 /* CLASS, PROPS */, _hoisted_1))
}


_sfc_main.__hmrId = "0ccf8768"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/atoms/CustomImage.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUtBLEtBQUssVUFBVTtFQUNiLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQztFQUNuQixLQUFLLEVBQUU7SUFDTCxHQUFHLEVBQUU7TUFDSCxJQUFJLEVBQUUsTUFBTTtNQUNaLFFBQVEsRUFBRTtJQUNaLENBQUM7SUFDRCxLQUFLLEVBQUU7TUFDTCxJQUFJLEVBQUUsTUFBTTtNQUNaLE9BQU8sRUFBRSxDQUFDO0lBQ1o7RUFDRjtBQUNGLENBQUM7Ozs7bUJBakJEOzs7d0JBQ0Usb0JBQW1IO0lBQTdHLEdBQUcsRUFBRSxVQUFHO0lBQUcsS0FBSyxFQUR4QixnQkFDMEIsWUFBSztJQUFFLFNBQU8sRUFBQyxpQkFBaUI7SUFBQyxrQkFBZ0IsRUFBQztrQ0FENUUiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkN1c3RvbUltYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxpbWcgOnNyYz1cInNyY1wiIDpjbGFzcz1cImNsYXNzXCIgZGF0YS1jeT1cImltYWdlLWNvbXBvbmVudFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0N1c3RvbUltYWdlLnZ1ZToyOjNcIiAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJDdXN0b21JbWFnZVwiLFxuICBwcm9wczoge1xuICAgIHNyYzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcIlwiXG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL3RhbnMvRG9jdW1lbnRzL2pvYi9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL2Zyb250ZW5kL2NvbXBvbmVudHMvYXRvbXMvQ3VzdG9tSW1hZ2UudnVlIn0=