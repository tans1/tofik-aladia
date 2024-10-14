import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/SearchBar.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import CustomIcon from "/_nuxt/components/atoms/CustomIcon.vue";
import CustomInput from "/_nuxt/components/atoms/CustomInput.vue";

const _sfc_main = {
  name: "SearchBar",
  components: {
    CustomIcon,
    CustomInput
  },
  methods: {
    updateValue(value) {}
  }
};

import { resolveComponent as _resolveComponent,   openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"

const _hoisted_1 = {
  class: "relative z-10 flex h-9 w-full items-center gap-2 px-2 text-sm",
  "data-cy": "searchbar-wrapper",
  "data-v-inspector": "components/molecules/SearchBar.vue:2:3"
}
const _hoisted_2 = {
  class: "shrink-0 cursor-pointer text-lg transition-all group-hover/input:scale-110",
  "data-cy": "searchbar-icon",
  "data-v-inspector": "components/molecules/SearchBar.vue:5:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CustomIcon = _resolveComponent("CustomIcon")
  const _component_CustomInput = _resolveComponent("CustomInput")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_CustomIcon, { iconClass: "fa-solid fa-magnifying-glass text-xs text-white" })
    ]),
    _createVNode(_component_CustomInput, {
      class: "h-full w-0 flex-1 bg-transparent text-13 outline-none text-white",
      placeholder: "Search courses...",
      value: "",
      onInput: $options.updateValue,
      "data-cy": "searchbar-input"
    }, null, 8 /* PROPS */, ["onInput"])
  ]))
}


_sfc_main.__hmrId = "c79a63c6"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/molecules/SearchBar.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBLE1BQUssQ0FBRSxVQUFTLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7QUFDaEQsTUFBSyxDQUFFLFdBQVUsQ0FBRSxJQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQzs7QUFFbEQsS0FBSyxVQUFVO0VBQ2IsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDO0VBQ2pCLFVBQVUsRUFBRTtJQUNWLFVBQVU7SUFDVjtFQUNGLENBQUM7RUFDRCxPQUFPLEVBQUU7SUFDUCxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7RUFDdEI7QUFDRixDQUFDOzs7OztFQTlCRyxLQUFLLEVBQUMsK0RBQStEO0VBQ3JFLFNBQU8sRUFBQyxtQkFBbUI7RUFBQyxrQkFBZ0IsRUFBQzs7O0VBRTNDLEtBQUssRUFBQyw0RUFBNEU7RUFDbEYsU0FBTyxFQUFDLGdCQUFnQjtFQUFDLGtCQUFnQixFQUFDOzs7Ozs7O3dCQUw5QyxvQkFlTSxPQWZOLFVBZU07SUFaSixvQkFJTSxPQUpOLFVBSU07TUFESixhQUEwRSx5QkFBOUQsU0FBUyxFQUFDLGlEQUFpRDs7SUFHekUsYUFLOEI7TUFKNUIsS0FBSyxFQUFDLGtFQUFrRTtNQUN4RSxXQUFXLEVBQUMsbUJBQW1CO01BQy9CLEtBQUssRUFBQyxFQUFFO01BQ1AsT0FBSyxFQUFFLG9CQUFXO01BQ25CLFNBQU8sRUFBQyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU2VhcmNoQmFyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cInJlbGF0aXZlIHotMTAgZmxleCBoLTkgdy1mdWxsIGl0ZW1zLWNlbnRlciBnYXAtMiBweC0yIHRleHQtc21cIlxuICAgIGRhdGEtY3k9XCJzZWFyY2hiYXItd3JhcHBlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9TZWFyY2hCYXIudnVlOjI6M1wiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwic2hyaW5rLTAgY3Vyc29yLXBvaW50ZXIgdGV4dC1sZyB0cmFuc2l0aW9uLWFsbCBncm91cC1ob3Zlci9pbnB1dDpzY2FsZS0xMTBcIlxuICAgICAgZGF0YS1jeT1cInNlYXJjaGJhci1pY29uXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL1NlYXJjaEJhci52dWU6NTo1XCI+XG4gICAgICA8Q3VzdG9tSWNvbiBpY29uQ2xhc3M9XCJmYS1zb2xpZCBmYS1tYWduaWZ5aW5nLWdsYXNzIHRleHQteHMgdGV4dC13aGl0ZVwiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8Q3VzdG9tSW5wdXRcbiAgICAgIGNsYXNzPVwiaC1mdWxsIHctMCBmbGV4LTEgYmctdHJhbnNwYXJlbnQgdGV4dC0xMyBvdXRsaW5lLW5vbmUgdGV4dC13aGl0ZVwiXG4gICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBjb3Vyc2VzLi4uXCJcbiAgICAgIHZhbHVlPVwiXCJcbiAgICAgIEBpbnB1dD1cInVwZGF0ZVZhbHVlXCJcbiAgICAgIGRhdGEtY3k9XCJzZWFyY2hiYXItaW5wdXRcIiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ3VzdG9tSWNvbiBmcm9tIFwiLi4vYXRvbXMvQ3VzdG9tSWNvbi52dWVcIjtcbmltcG9ydCBDdXN0b21JbnB1dCBmcm9tIFwiLi4vYXRvbXMvQ3VzdG9tSW5wdXQudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJTZWFyY2hCYXJcIixcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUljb24sXG4gICAgQ3VzdG9tSW5wdXRcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZVZhbHVlKHZhbHVlKSB7fVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL3RhbnMvRG9jdW1lbnRzL2pvYi9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL2Zyb250ZW5kL2NvbXBvbmVudHMvbW9sZWN1bGVzL1NlYXJjaEJhci52dWUifQ==