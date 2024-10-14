import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/CustomInput.vue");/* Injection by vite-plugin-vue-inspector Start */
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
  name: "CustomInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    updateValue: {
      type: Function,
      default: () => {}
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};

import { normalizeClass as _normalizeClass, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"

const _hoisted_1 = ["type", "placeholder", "value", "disabled"]

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("input", {
    type: $props.type,
    placeholder: $props.placeholder,
    value: $props.value,
    class: _normalizeClass($props.class),
    disabled: $props.disabled,
    "data-cy": "input-component",
    "data-v-inspector": "components/atoms/CustomInput.vue:2:3"
  }, null, 10 /* CLASS, PROPS */, _hoisted_1))
}


_sfc_main.__hmrId = "b4c4d6d1"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/atoms/CustomInput.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVdBLEtBQUssVUFBVTtFQUNiLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQztFQUNuQixLQUFLLEVBQUU7SUFDTCxJQUFJLEVBQUU7TUFDSixJQUFJLEVBQUUsTUFBTTtNQUNaLE9BQU8sRUFBRSxDQUFDLElBQUk7SUFDaEIsQ0FBQztJQUNELFdBQVcsRUFBRTtNQUNYLElBQUksRUFBRSxNQUFNO01BQ1osT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsS0FBSyxFQUFFO01BQ0wsSUFBSSxFQUFFLE1BQU07TUFDWixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCxLQUFLLEVBQUU7TUFDTCxJQUFJLEVBQUUsTUFBTTtNQUNaLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELFdBQVcsRUFBRTtNQUNYLElBQUksRUFBRSxRQUFRO01BQ2QsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0QsUUFBUSxFQUFFO01BQ1IsSUFBSSxFQUFFLE9BQU87TUFDYixPQUFPLEVBQUU7SUFDWDtFQUNGO0FBQ0YsQ0FBQzs7OzttQkF2Q0Q7Ozt3QkFDRSxvQkFNc0Y7SUFMbkYsSUFBSSxFQUFFLFdBQUk7SUFDVixXQUFXLEVBQUUsa0JBQVc7SUFDeEIsS0FBSyxFQUFFLFlBQUs7SUFDWixLQUFLLEVBTFYsZ0JBS1ksWUFBSztJQUNaLFFBQVEsRUFBRSxlQUFRO0lBQ25CLFNBQU8sRUFBQyxpQkFBaUI7SUFBQyxrQkFBZ0IsRUFBQztrQ0FQL0MiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkN1c3RvbUlucHV0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxpbnB1dFxuICAgIDp0eXBlPVwidHlwZVwiXG4gICAgOnBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXJcIlxuICAgIDp2YWx1ZT1cInZhbHVlXCJcbiAgICA6Y2xhc3M9XCJjbGFzc1wiXG4gICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgIGRhdGEtY3k9XCJpbnB1dC1jb21wb25lbnRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9DdXN0b21JbnB1dC52dWU6MjozXCIgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQ3VzdG9tSW5wdXRcIixcbiAgcHJvcHM6IHtcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcInRleHRcIlxuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICB9LFxuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcIlwiXG4gICAgfSxcbiAgICBjbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH0sXG4gICAgdXBkYXRlVmFsdWU6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgZGVmYXVsdDogKCkgPT4ge31cbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvdGFucy9Eb2N1bWVudHMvam9iL2FsYWRpYS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vZnJvbnRlbmQvY29tcG9uZW50cy9hdG9tcy9DdXN0b21JbnB1dC52dWUifQ==