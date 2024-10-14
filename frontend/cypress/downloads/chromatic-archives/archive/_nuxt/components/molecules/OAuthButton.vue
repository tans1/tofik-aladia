import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/OAuthButton.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import CustomImage from "/_nuxt/components/atoms/CustomImage.vue";
import CustomText from "/_nuxt/components/atoms/CustomText.vue";

const _sfc_main = {
  name: "OAuth",
  components: {
    CustomImage,
    CustomText
  },
  props: {
    src: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }
};

import { resolveComponent as _resolveComponent,   openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"

const _hoisted_1 = {
  class: "px-4 flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95",
  "data-cy": "oauth-button",
  "data-v-inspector": "components/molecules/OAuthButton.vue:2:3"
}
const _hoisted_2 = {
  class: "w-40",
  "data-v-inspector": "components/molecules/OAuthButton.vue:7:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CustomImage = _resolveComponent("CustomImage")
  const _component_CustomText = _resolveComponent("CustomText")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_CustomImage, {
      src: $props.src,
      class: "h-6",
      "data-cy": "oauth-image"
    }, null, 8 /* PROPS */, ["src"]),
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_CustomText, {
        class: "text-sm text-white",
        text: $props.text,
        "data-cy": "oauth-text"
      }, null, 8 /* PROPS */, ["text"])
    ])
  ]))
}


_sfc_main.__hmrId = "e6bd0ce3"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/molecules/OAuthButton.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLE1BQUssQ0FBRSxXQUFVLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7QUFDbEQsTUFBSyxDQUFFLFVBQVMsQ0FBRSxJQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQzs7QUFFaEQsS0FBSyxVQUFVO0VBQ2IsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO0VBQ2IsVUFBVSxFQUFFO0lBQ1YsV0FBVztJQUNYO0VBQ0YsQ0FBQztFQUNELEtBQUssRUFBRTtJQUNMLEdBQUcsRUFBRTtNQUNILElBQUksRUFBRSxNQUFNO01BQ1osT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsSUFBSSxFQUFFO01BQ0osSUFBSSxFQUFFLE1BQU07TUFDWixPQUFPLEVBQUUsQ0FBQztJQUNaO0VBQ0Y7QUFDRixDQUFDOzs7OztFQWpDRyxLQUFLLEVBQUMscU5BQXFOO0VBQzNOLFNBQU8sRUFBQyxjQUFjO0VBQUMsa0JBQWdCLEVBQUM7OztFQUduQyxLQUFLLEVBQUMsTUFBTTtFQUFDLGtCQUFnQixFQUFDOzs7Ozs7O3dCQUxyQyxvQkFXTSxPQVhOLFVBV007SUFSSixhQUE0RDtNQUE5QyxHQUFHLEVBQUUsVUFBRztNQUFFLEtBQUssRUFBQyxLQUFLO01BQUMsU0FBTyxFQUFDOztJQUU1QyxvQkFLTSxPQUxOLFVBS007TUFKSixhQUd5QjtRQUZ2QixLQUFLLEVBQUMsb0JBQW9CO1FBQ3pCLElBQUksRUFBRSxXQUFJO1FBQ1gsU0FBTyxFQUFDIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJPQXV0aEJ1dHRvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJweC00IGZsZXggY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IHJvdW5kZWQgYm9yZGVyIGJvcmRlci13aGl0ZS8yMCBweS0xLjUgc2hhZG93LVswcHhfM3B4XzZweF8jMDAwMDAwMDBdIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJnLXdoaXRlLzIwIGhvdmVyOnNoYWRvdy1bMHB4XzNweF82cHhfIzAwMDAwMF0gYWN0aXZlOnNjYWxlLTk1XCJcbiAgICBkYXRhLWN5PVwib2F1dGgtYnV0dG9uXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL09BdXRoQnV0dG9uLnZ1ZToyOjNcIj5cbiAgICA8Q3VzdG9tSW1hZ2UgOnNyYz1cInNyY1wiIGNsYXNzPVwiaC02XCIgZGF0YS1jeT1cIm9hdXRoLWltYWdlXCIgLz5cblxuICAgIDxkaXYgY2xhc3M9XCJ3LTQwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL09BdXRoQnV0dG9uLnZ1ZTo3OjVcIj5cbiAgICAgIDxDdXN0b21UZXh0XG4gICAgICAgIGNsYXNzPVwidGV4dC1zbSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgOnRleHQ9XCJ0ZXh0XCJcbiAgICAgICAgZGF0YS1jeT1cIm9hdXRoLXRleHRcIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2F0b21zL0N1c3RvbUltYWdlLnZ1ZVwiO1xuaW1wb3J0IEN1c3RvbVRleHQgZnJvbSBcIi4uL2F0b21zL0N1c3RvbVRleHQudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJPQXV0aFwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgQ3VzdG9tSW1hZ2UsXG4gICAgQ3VzdG9tVGV4dFxuICB9LFxuICBwcm9wczoge1xuICAgIHNyYzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS90YW5zL0RvY3VtZW50cy9qb2IvYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9mcm9udGVuZC9jb21wb25lbnRzL21vbGVjdWxlcy9PQXV0aEJ1dHRvbi52dWUifQ==