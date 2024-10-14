import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/JoinButton.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */

import CustomButton from "/_nuxt/components/atoms/buttons/SimpleButton.vue";
import CustomIcon from "/_nuxt/components/atoms/CustomIcon.vue";
import CustomText from "/_nuxt/components/atoms/CustomText.vue";
import { useAuthStore } from "/_nuxt/stores/authStore.ts";

const _sfc_main = {
  name: "JoinButton",
  components: {
    CustomButton,
    CustomIcon,
    CustomText
  },
  setup() {
    const authStore = useAuthStore();
    const click = () => {
      authStore.setCurrentModal("home", authStore.user.email);
      authStore.openModal();
    };

    return {
      authStore,
      click
    };
  }
};

import {  resolveComponent as _resolveComponent,  withCtx as _withCtx, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"

const _hoisted_1 = {
  class: "group relative shrink-0 scale-100 cursor-pointer items-center justify-center overflow-hidden rounded border px-3 py-2 text-sm leading-none transition-all hover:border-transparent active:scale-95",
  "data-cy": "join-button-inner",
  "data-v-inspector": "components/molecules/JoinButton.vue:6:5"
}
const _hoisted_2 = { "data-v-inspector": "components/molecules/JoinButton.vue:16:7" }

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CustomIcon = _resolveComponent("CustomIcon")
  const _component_CustomText = _resolveComponent("CustomText")
  const _component_CustomButton = _resolveComponent("CustomButton")

  return (_openBlock(), _createElementBlock("div", {
    class: "flex items-center gap-1.5 pr-4 hover:text-black text-white",
    onClick: _cache[0] || (_cache[0] = (...args) => ($setup.authStore.openModal && $setup.authStore.openModal(...args))),
    "data-cy": "join-button-container",
    "data-v-inspector": "components/molecules/JoinButton.vue:2:3"
  }, [
    _createElementVNode("div", _hoisted_1, [
      _cache[1] || (_cache[1] = _createElementVNode("div", {
        class: "absolute inset-0 z-0 flex h-full w-full items-center justify-center",
        "data-v-inspector": "components/molecules/JoinButton.vue:9:7"
      }, [
        _createElementVNode("div", {
          "data-v-df211d4a": "",
          class: "gradient h-0 w-0 rounded-full transition-all duration-200 group-hover:h-full group-hover:w-full group-hover:rounded",
          "data-v-inspector": "components/molecules/JoinButton.vue:11:9"
        })
      ], -1 /* HOISTED */)),
      _createElementVNode("div", _hoisted_2, [
        _createVNode(_component_CustomButton, {
          class: "relative z-10000 flex items-center justify-center gap-2",
          "data-cy": "join-button"
        }, {
          default: _withCtx(() => [
            _createVNode(_component_CustomIcon, { iconClass: "fa-solid fa-user-plus" }),
            _createVNode(_component_CustomText, {
              class: "text-xs font-semibold",
              text: "Join Us",
              "data-cy": "join-button-text"
            })
          ]),
          _: 1 /* STABLE */
        })
      ])
    ])
  ]))
}

import "/_nuxt/components/molecules/JoinButton.vue?vue&type=style&index=0&lang.css"

_sfc_main.__hmrId = "dc75019d"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/molecules/JoinButton.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBLE1BQUssQ0FBRSxZQUFXLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO0FBQzVELE1BQUssQ0FBRSxVQUFTLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7QUFDaEQsTUFBSyxDQUFFLFVBQVMsQ0FBRSxJQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztBQUNoRCxNQUFLLENBQUUsRUFBRSxZQUFXLENBQUUsRUFBRSxJQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQzs7QUFFeEQsS0FBSyxVQUFVO0VBQ2IsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDO0VBQ2xCLFVBQVUsRUFBRTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1Y7RUFDRixDQUFDO0VBQ0QsS0FBSyxDQUFDLEVBQUU7SUFDTixLQUFJLENBQUUsU0FBUSxDQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDaEMsS0FBSSxDQUFFLEtBQUksQ0FBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7TUFDbEIsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO01BQ3ZELFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QixDQUFDOztJQUVELE1BQUssQ0FBRTtNQUNMLFNBQVM7TUFDVDtJQUNGLENBQUM7RUFDSDtBQUNGLENBQUM7Ozs7O0VBakRLLEtBQUssRUFBQyxvTUFBb007RUFDMU0sU0FBTyxFQUFDLG1CQUFtQjtFQUFDLGtCQUFnQixFQUFDOztxQkFReEMsa0JBQWdCLEVBQUMsMENBQTBDOzs7Ozs7O3dCQWRwRSxvQkEwQk07SUF6QkosS0FBSyxFQUFDLDREQUE0RDtJQUNqRSxPQUFLLDBDQUFFLGdCQUFTLENBQUMsU0FBUyxJQUFuQixnQkFBUyxDQUFDLFNBQVM7SUFDM0IsU0FBTyxFQUFDLHVCQUF1QjtJQUFDLGtCQUFnQixFQUFDOztJQUNqRCxvQkFxQk0sT0FyQk4sVUFxQk07Z0NBbEJKLG9CQUtNO1FBSkosS0FBSyxFQUFDLHFFQUFxRTtRQUFDLGtCQUFnQixFQUFDOztRQUM3RixvQkFFZ007VUFEOUwsaUJBQWUsRUFBZixFQUFlO1VBQ2YsS0FBSyxFQUFDLHFIQUFxSDtVQUFDLGtCQUFnQixFQUFDOzs7TUFHakosb0JBVU0sT0FWTixVQVVNO1FBVEosYUFRZTtVQVBiLEtBQUssRUFBQyx5REFBeUQ7VUFDL0QsU0FBTyxFQUFDOztVQWxCbEIsa0JBbUJVLENBQWdEO1lBQWhELGFBQWdELHlCQUFwQyxTQUFTLEVBQUMsdUJBQXVCO1lBQzdDLGFBRytCO2NBRjdCLEtBQUssRUFBQyx1QkFBdUI7Y0FDN0IsSUFBSSxFQUFDLFNBQVM7Y0FDZCxTQUFPLEVBQUM7OztVQXZCcEIiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkpvaW5CdXR0b24udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBwci00IGhvdmVyOnRleHQtYmxhY2sgdGV4dC13aGl0ZVwiXG4gICAgQGNsaWNrPVwiYXV0aFN0b3JlLm9wZW5Nb2RhbFwiXG4gICAgZGF0YS1jeT1cImpvaW4tYnV0dG9uLWNvbnRhaW5lclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9Kb2luQnV0dG9uLnZ1ZToyOjNcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImdyb3VwIHJlbGF0aXZlIHNocmluay0wIHNjYWxlLTEwMCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQgYm9yZGVyIHB4LTMgcHktMiB0ZXh0LXNtIGxlYWRpbmctbm9uZSB0cmFuc2l0aW9uLWFsbCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgYWN0aXZlOnNjYWxlLTk1XCJcbiAgICAgIGRhdGEtY3k9XCJqb2luLWJ1dHRvbi1pbm5lclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9Kb2luQnV0dG9uLnZ1ZTo2OjVcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJhYnNvbHV0ZSBpbnNldC0wIHotMCBmbGV4IGgtZnVsbCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL0pvaW5CdXR0b24udnVlOjk6N1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgZGF0YS12LWRmMjExZDRhXG4gICAgICAgICAgY2xhc3M9XCJncmFkaWVudCBoLTAgdy0wIHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZ3JvdXAtaG92ZXI6aC1mdWxsIGdyb3VwLWhvdmVyOnctZnVsbCBncm91cC1ob3Zlcjpyb3VuZGVkXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL0pvaW5CdXR0b24udnVlOjExOjlcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9Kb2luQnV0dG9uLnZ1ZToxNjo3XCI+XG4gICAgICAgIDxDdXN0b21CdXR0b25cbiAgICAgICAgICBjbGFzcz1cInJlbGF0aXZlIHotMTAwMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICAgIGRhdGEtY3k9XCJqb2luLWJ1dHRvblwiPlxuICAgICAgICAgIDxDdXN0b21JY29uIGljb25DbGFzcz1cImZhLXNvbGlkIGZhLXVzZXItcGx1c1wiIC8+XG4gICAgICAgICAgPEN1c3RvbVRleHRcbiAgICAgICAgICAgIGNsYXNzPVwidGV4dC14cyBmb250LXNlbWlib2xkXCJcbiAgICAgICAgICAgIHRleHQ9XCJKb2luIFVzXCJcbiAgICAgICAgICAgIGRhdGEtY3k9XCJqb2luLWJ1dHRvbi10ZXh0XCIgLz5cbiAgICAgICAgPC9DdXN0b21CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEN1c3RvbUJ1dHRvbiBmcm9tIFwiLi4vYXRvbXMvYnV0dG9ucy9TaW1wbGVCdXR0b24udnVlXCI7XG5pbXBvcnQgQ3VzdG9tSWNvbiBmcm9tIFwiLi4vYXRvbXMvQ3VzdG9tSWNvbi52dWVcIjtcbmltcG9ydCBDdXN0b21UZXh0IGZyb20gXCIuLi9hdG9tcy9DdXN0b21UZXh0LnZ1ZVwiO1xuaW1wb3J0IHsgdXNlQXV0aFN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlcy9hdXRoU3RvcmUudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkpvaW5CdXR0b25cIixcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUJ1dHRvbixcbiAgICBDdXN0b21JY29uLFxuICAgIEN1c3RvbVRleHRcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgYXV0aFN0b3JlID0gdXNlQXV0aFN0b3JlKCk7XG4gICAgY29uc3QgY2xpY2sgPSAoKSA9PiB7XG4gICAgICBhdXRoU3RvcmUuc2V0Q3VycmVudE1vZGFsKFwiaG9tZVwiLCBhdXRoU3RvcmUudXNlci5lbWFpbCk7XG4gICAgICBhdXRoU3RvcmUub3Blbk1vZGFsKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBhdXRoU3RvcmUsXG4gICAgICBjbGlja1xuICAgIH07XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLmdyYWRpZW50W2RhdGEtdi1kZjIxMWQ0YV0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxuICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgIDEzNGRlZyxcbiAgICAgICNiZjk1M2YsXG4gICAgICAjZmNmNmJhIDIyJSxcbiAgICAgICNiMzg3MzggNTIlLFxuICAgICAgI2ZiZjZiNyA3OSUsXG4gICAgICAjYWE3NzFjXG4gICAgKVxuICAgIDAgMCBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG48L3N0eWxlPlxuIl0sImZpbGUiOiIvaG9tZS90YW5zL0RvY3VtZW50cy9qb2IvYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9mcm9udGVuZC9jb21wb25lbnRzL21vbGVjdWxlcy9Kb2luQnV0dG9uLnZ1ZSJ9