import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/buttons/SimpleButton.vue");/* Injection by vite-plugin-vue-inspector Start */
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
  name: "CustomButton",
  props: {
    type: {
      type: String,
      default: "button"
    },
    class: {
      type: String,
      default: ""
    },
    click: {
      type: Function,
      default: () => {}
    }
  }
};

import { renderSlot as _renderSlot, normalizeClass as _normalizeClass, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"

const _hoisted_1 = ["type"]

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("button", {
    class: _normalizeClass($props.class),
    onClick: _cache[0] || (_cache[0] = (...args) => ($props.click && $props.click(...args))),
    type: $props.type,
    "data-cy": "button-component",
    "data-v-inspector": "components/atoms/buttons/SimpleButton.vue:2:3"
  }, [
    _renderSlot(_ctx.$slots, "default")
  ], 10 /* CLASS, PROPS */, _hoisted_1))
}


_sfc_main.__hmrId = "d3c835e1"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/atoms/buttons/SimpleButton.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQU9BLEtBQUssVUFBVTtFQUNiLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQztFQUNwQixLQUFLLEVBQUU7SUFDTCxJQUFJLEVBQUU7TUFDSixJQUFJLEVBQUUsTUFBTTtNQUNaLE9BQU8sRUFBRSxDQUFDLE1BQU07SUFDbEIsQ0FBQztJQUNELEtBQUssRUFBRTtNQUNMLElBQUksRUFBRSxNQUFNO01BQ1osT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsS0FBSyxFQUFFO01BQ0wsSUFBSSxFQUFFLFFBQVE7TUFDZCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2xCO0VBQ0Y7QUFDRixDQUFDOzs7O21CQXZCRDs7O3dCQUNFLG9CQUVTO0lBRkEsS0FBSyxFQURoQixnQkFDa0IsWUFBSztJQUFHLE9BQUssMENBQUUscUNBQUs7SUFBRyxJQUFJLEVBQUUsV0FBSTtJQUFFLFNBQU8sRUFBQyxrQkFBa0I7SUFBQyxrQkFBZ0IsRUFBQzs7SUFDN0YsWUFBUTs0QkFGWiIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU2ltcGxlQnV0dG9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxidXR0b24gOmNsYXNzPVwiY2xhc3NcIiBAY2xpY2s9XCJjbGlja1wiIDp0eXBlPVwidHlwZVwiIGRhdGEtY3k9XCJidXR0b24tY29tcG9uZW50XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvYnV0dG9ucy9TaW1wbGVCdXR0b24udnVlOjI6M1wiPlxuICAgIDxzbG90IC8+XG4gIDwvYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJDdXN0b21CdXR0b25cIixcbiAgcHJvcHM6IHtcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBjbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH0sXG4gICAgY2xpY2s6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgZGVmYXVsdDogKCkgPT4ge31cbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvdGFucy9Eb2N1bWVudHMvam9iL2FsYWRpYS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vZnJvbnRlbmQvY29tcG9uZW50cy9hdG9tcy9idXR0b25zL1NpbXBsZUJ1dHRvbi52dWUifQ==