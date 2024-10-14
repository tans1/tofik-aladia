import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/LoginIntro.vue");/* Injection by vite-plugin-vue-inspector Start */
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
  name: "LoginIntro",
  components: {
    CustomImage,
    CustomText
  }
};

import { resolveComponent as _resolveComponent,   openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"

const _hoisted_1 = {
  class: "relative z-10 p-5 text-13",
  "data-cy": "login-intro",
  "data-v-inspector": "components/organisms/LoginIntro.vue:2:3"
}
const _hoisted_2 = {
  class: "relative flex h-32 justify-between overflow-hidden rounded border border-white/20 bg-black px-8 py-6 opacity-80 transition-all duration-300 mt-0 mb-6",
  "data-cy": "login-intro-card",
  "data-v-inspector": "components/organisms/LoginIntro.vue:3:5"
}
const _hoisted_3 = {
  class: "relative flex w-full justify-between transition-all duration-300 opacity-100",
  "data-v-inspector": "components/organisms/LoginIntro.vue:6:7"
}
const _hoisted_4 = { "data-v-inspector": "components/organisms/LoginIntro.vue:8:9" }
const _hoisted_5 = { "data-v-inspector": "components/organisms/LoginIntro.vue:14:9" }

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CustomImage = _resolveComponent("CustomImage")
  const _component_CustomText = _resolveComponent("CustomText")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createElementVNode("div", _hoisted_4, [
          _createVNode(_component_CustomImage, {
            src: "https://develop.aladia.io/_nuxt/image.ChQ3biW9.png",
            class: "h-20 w-20 object-cover",
            "data-cy": "login-intro-image"
          })
        ]),
        _createElementVNode("div", _hoisted_5, [
          _createVNode(_component_CustomText, {
            text: "Welcome to Aladia",
            class: "text-white text-base",
            "data-cy": "login-intro-title"
          }),
          _createVNode(_component_CustomText, {
            text: "Create or access your",
            class: "text-white/70 text-sm",
            "data-cy": "login-intro-subtitle"
          }),
          _createVNode(_component_CustomText, {
            text: "account from here ",
            class: "text-white/70 text-sm",
            "data-cy": "login-intro-description"
          })
        ])
      ])
    ])
  ]))
}


_sfc_main.__hmrId = "befe30a9"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/organisms/LoginIntro.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBLE1BQUssQ0FBRSxXQUFVLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7QUFDbEQsTUFBSyxDQUFFLFVBQVMsQ0FBRSxJQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQzs7QUFFaEQsS0FBSyxVQUFVO0VBQ2IsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDO0VBQ2xCLFVBQVUsRUFBRTtJQUNWLFdBQVc7SUFDWDtFQUNGO0FBQ0YsQ0FBQzs7Ozs7RUF6Q00sS0FBSyxFQUFDLDJCQUEyQjtFQUFDLFNBQU8sRUFBQyxhQUFhO0VBQUMsa0JBQWdCLEVBQUM7OztFQUUxRSxLQUFLLEVBQUMsdUpBQXVKO0VBQzdKLFNBQU8sRUFBQyxrQkFBa0I7RUFBQyxrQkFBZ0IsRUFBQzs7O0VBRTFDLEtBQUssRUFBQyw4RUFBOEU7RUFBQyxrQkFBZ0IsRUFBQzs7cUJBQ2pHLGtCQUFnQixFQUFDLHlDQUF5QztxQkFNMUQsa0JBQWdCLEVBQUMsMENBQTBDOzs7Ozs7d0JBWnRFLG9CQTRCTSxPQTVCTixVQTRCTTtJQTNCSixvQkEwQk0sT0ExQk4sVUEwQk07TUF2Qkosb0JBc0JNLE9BdEJOLFVBc0JNO1FBcEJKLG9CQUtNLE9BTE4sVUFLTTtVQUpKLGFBR2dDO1lBRjlCLEdBQUcsRUFBQyxvREFBb0Q7WUFDeEQsS0FBSyxFQUFDLHdCQUF3QjtZQUM5QixTQUFPLEVBQUM7OztRQUVaLG9CQWFNLE9BYk4sVUFhTTtVQVpKLGFBR2dDO1lBRjlCLElBQUksRUFBQyxtQkFBbUI7WUFDeEIsS0FBSyxFQUFDLHNCQUFzQjtZQUM1QixTQUFPLEVBQUM7O1VBQ1YsYUFHbUM7WUFGakMsSUFBSSxFQUFDLHVCQUF1QjtZQUM1QixLQUFLLEVBQUMsdUJBQXVCO1lBQzdCLFNBQU8sRUFBQzs7VUFDVixhQUdzQztZQUZwQyxJQUFJLEVBQUMsb0JBQW9CO1lBQ3pCLEtBQUssRUFBQyx1QkFBdUI7WUFDN0IsU0FBTyxFQUFDIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJMb2dpbkludHJvLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSB6LTEwIHAtNSB0ZXh0LTEzXCIgZGF0YS1jeT1cImxvZ2luLWludHJvXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL0xvZ2luSW50cm8udnVlOjI6M1wiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwicmVsYXRpdmUgZmxleCBoLTMyIGp1c3RpZnktYmV0d2VlbiBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZCBib3JkZXIgYm9yZGVyLXdoaXRlLzIwIGJnLWJsYWNrIHB4LTggcHktNiBvcGFjaXR5LTgwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBtdC0wIG1iLTZcIlxuICAgICAgZGF0YS1jeT1cImxvZ2luLWludHJvLWNhcmRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvTG9naW5JbnRyby52dWU6Mzo1XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwicmVsYXRpdmUgZmxleCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBvcGFjaXR5LTEwMFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9Mb2dpbkludHJvLnZ1ZTo2OjdcIj5cbiAgICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvTG9naW5JbnRyby52dWU6ODo5XCI+XG4gICAgICAgICAgPEN1c3RvbUltYWdlXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2RldmVsb3AuYWxhZGlhLmlvL19udXh0L2ltYWdlLkNoUTNiaVc5LnBuZ1wiXG4gICAgICAgICAgICBjbGFzcz1cImgtMjAgdy0yMCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgZGF0YS1jeT1cImxvZ2luLWludHJvLWltYWdlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL0xvZ2luSW50cm8udnVlOjE0OjlcIj5cbiAgICAgICAgICA8Q3VzdG9tVGV4dFxuICAgICAgICAgICAgdGV4dD1cIldlbGNvbWUgdG8gQWxhZGlhXCJcbiAgICAgICAgICAgIGNsYXNzPVwidGV4dC13aGl0ZSB0ZXh0LWJhc2VcIlxuICAgICAgICAgICAgZGF0YS1jeT1cImxvZ2luLWludHJvLXRpdGxlXCIgLz5cbiAgICAgICAgICA8Q3VzdG9tVGV4dFxuICAgICAgICAgICAgdGV4dD1cIkNyZWF0ZSBvciBhY2Nlc3MgeW91clwiXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtd2hpdGUvNzAgdGV4dC1zbVwiXG4gICAgICAgICAgICBkYXRhLWN5PVwibG9naW4taW50cm8tc3VidGl0bGVcIiAvPlxuICAgICAgICAgIDxDdXN0b21UZXh0XG4gICAgICAgICAgICB0ZXh0PVwiYWNjb3VudCBmcm9tIGhlcmUgXCJcbiAgICAgICAgICAgIGNsYXNzPVwidGV4dC13aGl0ZS83MCB0ZXh0LXNtXCJcbiAgICAgICAgICAgIGRhdGEtY3k9XCJsb2dpbi1pbnRyby1kZXNjcmlwdGlvblwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiLi4vYXRvbXMvQ3VzdG9tSW1hZ2UudnVlXCI7XG5pbXBvcnQgQ3VzdG9tVGV4dCBmcm9tIFwiLi4vYXRvbXMvQ3VzdG9tVGV4dC52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkxvZ2luSW50cm9cIixcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUltYWdlLFxuICAgIEN1c3RvbVRleHRcbiAgfVxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS90YW5zL0RvY3VtZW50cy9qb2IvYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9mcm9udGVuZC9jb21wb25lbnRzL29yZ2FuaXNtcy9Mb2dpbkludHJvLnZ1ZSJ9