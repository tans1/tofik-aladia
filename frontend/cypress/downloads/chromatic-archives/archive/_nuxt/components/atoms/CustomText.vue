import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/CustomText.vue");/* Injection by vite-plugin-vue-inspector Start */
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

// import { useI18n, useLocalePath } from "#imports";
const _sfc_main = {
  name: "CustomText",
  props: {
    text: {
      type: String,
      required: true
    },
    class: {
      type: String,
      default: ""
    }
  }
};

import { toDisplayString as _toDisplayString, normalizeClass as _normalizeClass, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("p", {
    class: _normalizeClass($props.class),
    "data-cy": "text-component",
    "data-v-inspector": "components/atoms/CustomText.vue:2:3"
  }, _toDisplayString($props.text), 3 /* TEXT, CLASS */))
}


_sfc_main.__hmrId = "89351264"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/atoms/CustomText.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQU9BLENBQUMsRUFBRSxNQUFLLENBQUUsRUFBRSxPQUFPLEVBQUUsYUFBWSxDQUFFLEVBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDcEQsS0FBSyxVQUFVO0VBQ2IsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDO0VBQ2xCLEtBQUssRUFBRTtJQUNMLElBQUksRUFBRTtNQUNKLElBQUksRUFBRSxNQUFNO01BQ1osUUFBUSxFQUFFO0lBQ1osQ0FBQztJQUNELEtBQUssRUFBRTtNQUNMLElBQUksRUFBRSxNQUFNO01BQ1osT0FBTyxFQUFFLENBQUM7SUFDWjtFQUNGO0FBQ0YsQ0FBQzs7Ozs7d0JBbkJDLG9CQUVJO0lBRkEsS0FBSyxFQURYLGdCQUNhLFlBQUs7SUFBRSxTQUFPLEVBQUMsZ0JBQWdCO0lBQUMsa0JBQWdCLEVBQUM7c0JBQ3ZELFdBQUkiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkN1c3RvbVRleHQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHAgOmNsYXNzPVwiY2xhc3NcIiBkYXRhLWN5PVwidGV4dC1jb21wb25lbnRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9DdXN0b21UZXh0LnZ1ZToyOjNcIj5cbiAgICB7eyB0ZXh0IH19XG4gIDwvcD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vLyBpbXBvcnQgeyB1c2VJMThuLCB1c2VMb2NhbGVQYXRoIH0gZnJvbSBcIiNpbXBvcnRzXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQ3VzdG9tVGV4dFwiLFxuICBwcm9wczoge1xuICAgIHRleHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBjbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS90YW5zL0RvY3VtZW50cy9qb2IvYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9mcm9udGVuZC9jb21wb25lbnRzL2F0b21zL0N1c3RvbVRleHQudnVlIn0=