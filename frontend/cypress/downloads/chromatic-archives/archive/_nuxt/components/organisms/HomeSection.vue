import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/HomeSection.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import CustomText from "/_nuxt/components/atoms/CustomText.vue";
import CustomLink from "/_nuxt/components/atoms/CustomLink.vue";
const _sfc_main = {
  name: "HomeSection",
  components: {
    CustomText,
    CustomLink
  }
};

import { resolveComponent as _resolveComponent,   openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"

const _hoisted_1 = {
  class: "relative h-[36rem] overflow-hidden bg-black/35",
  "data-cy": "home-section",
  "data-v-inspector": "components/organisms/HomeSection.vue:2:3"
}
const _hoisted_2 = {
  class: "z-1 relative flex items-center px-10 pt-40 text-white",
  "data-v-inspector": "components/organisms/HomeSection.vue:5:5"
}
const _hoisted_3 = {
  class: "mr-10 flex-1",
  "data-v-inspector": "components/organisms/HomeSection.vue:6:7"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CustomText = _resolveComponent("CustomText")
  const _component_CustomLink = _resolveComponent("CustomLink")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createVNode(_component_CustomText, {
          class: "mb-5 text-6xl font-bold opacity-90",
          text: "E-learning Revolution 2",
          "data-cy": "home-section-title"
        }),
        _createVNode(_component_CustomText, {
          class: "mb-5 text-xl",
          text: "We have worked to digitize our school, and give the whole world the opportunity to do it with a new study platform designed for teachers",
          "data-cy": "home-section-description"
        }),
        _createVNode(_component_CustomLink, {
          linkClass: "inline-block cursor-pointer rounded-md bg-black px-4 py-3",
          text: "Go to Marketplace",
          endpoint: "/",
          "data-cy": "go-to-marketplace-button"
        }),
        _cache[0] || (_cache[0] = _createElementVNode("div", { "data-v-inspector": "components/organisms/HomeSection.vue:21:9" }, [
          _createElementVNode("div", { "data-v-inspector": "components/organisms/HomeSection.vue:22:11" }, "Hello"),
          _createElementVNode("div", { "data-v-inspector": "components/organisms/HomeSection.vue:23:11" }, "en"),
          _createElementVNode("div", { "data-v-inspector": "components/organisms/HomeSection.vue:24:11" }, "it")
        ], -1 /* HOISTED */))
      ]),
      _cache[1] || (_cache[1] = _createElementVNode("div", {
        class: "h-80 flex-1 rounded bg-black",
        "data-cy": "home-section-image",
        "data-v-inspector": "components/organisms/HomeSection.vue:27:7"
      }, null, -1 /* HOISTED */))
    ])
  ]))
}


_sfc_main.__hmrId = "24ae4d17"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/organisms/HomeSection.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBLE1BQUssQ0FBRSxVQUFTLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7QUFDaEQsTUFBSyxDQUFFLFVBQVMsQ0FBRSxJQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztBQUNoRCxLQUFLLFVBQVU7RUFDYixJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7RUFDbkIsVUFBVSxFQUFFO0lBQ1YsVUFBVTtJQUNWO0VBQ0Y7QUFDRixDQUFDOzs7OztFQXhDRyxLQUFLLEVBQUMsZ0RBQWdEO0VBQ3RELFNBQU8sRUFBQyxjQUFjO0VBQUMsa0JBQWdCLEVBQUM7OztFQUNuQyxLQUFLLEVBQUMsdURBQXVEO0VBQUMsa0JBQWdCLEVBQUM7OztFQUM3RSxLQUFLLEVBQUMsY0FBYztFQUFDLGtCQUFnQixFQUFDOzs7Ozs7O3dCQUovQyxvQkE2Qk0sT0E3Qk4sVUE2Qk07SUExQkosb0JBeUJNLE9BekJOLFVBeUJNO01BeEJKLG9CQW9CTSxPQXBCTixVQW9CTTtRQW5CSixhQUdpQztVQUYvQixLQUFLLEVBQUMsb0NBQW9DO1VBQzFDLElBQUksRUFBQyx5QkFBeUI7VUFDOUIsU0FBTyxFQUFDOztRQUNWLGFBR3VDO1VBRnJDLEtBQUssRUFBQyxjQUFjO1VBQ3BCLElBQUksRUFBQywwSUFBMEk7VUFDL0ksU0FBTyxFQUFDOztRQUVWLGFBSXVDO1VBSHJDLFNBQVMsRUFBQywyREFBMkQ7VUFDckUsSUFBSSxFQUFDLG1CQUFtQjtVQUN4QixRQUFRLEVBQUMsR0FBRztVQUNaLFNBQU8sRUFBQzs7a0NBQ1Ysb0JBSU0sU0FKRCxrQkFBZ0IsRUFBQywyQ0FBMkM7VUFDL0Qsb0JBQThFLFNBQXpFLGtCQUFnQixFQUFDLDRDQUE0QyxJQUFDLE9BQUs7VUFDeEUsb0JBQTJFLFNBQXRFLGtCQUFnQixFQUFDLDRDQUE0QyxJQUFDLElBQUU7VUFDckUsb0JBQTJFLFNBQXRFLGtCQUFnQixFQUFDLDRDQUE0QyxJQUFDLElBQUU7OztnQ0FHekUsb0JBRWtHO1FBRGhHLEtBQUssRUFBQyw4QkFBOEI7UUFDcEMsU0FBTyxFQUFDLG9CQUFvQjtRQUFDLGtCQUFnQixFQUFDIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJIb21lU2VjdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJyZWxhdGl2ZSBoLVszNnJlbV0gb3ZlcmZsb3ctaGlkZGVuIGJnLWJsYWNrLzM1XCJcbiAgICBkYXRhLWN5PVwiaG9tZS1zZWN0aW9uXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL0hvbWVTZWN0aW9uLnZ1ZToyOjNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiei0xIHJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIHB4LTEwIHB0LTQwIHRleHQtd2hpdGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvSG9tZVNlY3Rpb24udnVlOjU6NVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1yLTEwIGZsZXgtMVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9Ib21lU2VjdGlvbi52dWU6Njo3XCI+XG4gICAgICAgIDxDdXN0b21UZXh0XG4gICAgICAgICAgY2xhc3M9XCJtYi01IHRleHQtNnhsIGZvbnQtYm9sZCBvcGFjaXR5LTkwXCJcbiAgICAgICAgICB0ZXh0PVwiRS1sZWFybmluZyBSZXZvbHV0aW9uIDJcIlxuICAgICAgICAgIGRhdGEtY3k9XCJob21lLXNlY3Rpb24tdGl0bGVcIiAvPlxuICAgICAgICA8Q3VzdG9tVGV4dFxuICAgICAgICAgIGNsYXNzPVwibWItNSB0ZXh0LXhsXCJcbiAgICAgICAgICB0ZXh0PVwiV2UgaGF2ZSB3b3JrZWQgdG8gZGlnaXRpemUgb3VyIHNjaG9vbCwgYW5kIGdpdmUgdGhlIHdob2xlIHdvcmxkIHRoZSBvcHBvcnR1bml0eSB0byBkbyBpdCB3aXRoIGEgbmV3IHN0dWR5IHBsYXRmb3JtIGRlc2lnbmVkIGZvciB0ZWFjaGVyc1wiXG4gICAgICAgICAgZGF0YS1jeT1cImhvbWUtc2VjdGlvbi1kZXNjcmlwdGlvblwiIC8+XG5cbiAgICAgICAgPEN1c3RvbUxpbmtcbiAgICAgICAgICBsaW5rQ2xhc3M9XCJpbmxpbmUtYmxvY2sgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1tZCBiZy1ibGFjayBweC00IHB5LTNcIlxuICAgICAgICAgIHRleHQ9XCJHbyB0byBNYXJrZXRwbGFjZVwiXG4gICAgICAgICAgZW5kcG9pbnQ9XCIvXCJcbiAgICAgICAgICBkYXRhLWN5PVwiZ28tdG8tbWFya2V0cGxhY2UtYnV0dG9uXCIgLz5cbiAgICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvSG9tZVNlY3Rpb24udnVlOjIxOjlcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9Ib21lU2VjdGlvbi52dWU6MjI6MTFcIj5IZWxsbzwvZGl2PlxuICAgICAgICAgIDxkaXYgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL0hvbWVTZWN0aW9uLnZ1ZToyMzoxMVwiPmVuPC9kaXY+XG4gICAgICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvSG9tZVNlY3Rpb24udnVlOjI0OjExXCI+aXQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJoLTgwIGZsZXgtMSByb3VuZGVkIGJnLWJsYWNrXCJcbiAgICAgICAgZGF0YS1jeT1cImhvbWUtc2VjdGlvbi1pbWFnZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9Ib21lU2VjdGlvbi52dWU6Mjc6N1wiPjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ3VzdG9tVGV4dCBmcm9tIFwiLi4vYXRvbXMvQ3VzdG9tVGV4dC52dWVcIjtcbmltcG9ydCBDdXN0b21MaW5rIGZyb20gXCIuLi9hdG9tcy9DdXN0b21MaW5rLnZ1ZVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkhvbWVTZWN0aW9uXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21UZXh0LFxuICAgIEN1c3RvbUxpbmtcbiAgfVxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS90YW5zL0RvY3VtZW50cy9qb2IvYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9mcm9udGVuZC9jb21wb25lbnRzL29yZ2FuaXNtcy9Ib21lU2VjdGlvbi52dWUifQ==