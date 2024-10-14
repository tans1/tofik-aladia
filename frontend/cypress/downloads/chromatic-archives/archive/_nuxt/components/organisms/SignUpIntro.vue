import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/SignUpIntro.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import CustomImage from "/_nuxt/components/atoms/CustomImage.vue";
import CustomText from "/_nuxt/components/atoms/CustomText.vue";
import AttachImage from "/_nuxt/components/atoms/AttachImage.vue";

const _sfc_main = {
  name: "SignUpIntro",
  components: {
    CustomImage,
    CustomText,
    AttachImage
  },
  props: {
    error: {
      type: Boolean,
      default: false
    }
  }
};

import {  resolveComponent as _resolveComponent, normalizeClass as _normalizeClass,  openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"

const _hoisted_1 = {
  class: "mb-4 flex w-full items-end gap-6 px-4 text-white",
  "data-cy": "signup-intro",
  "data-v-inspector": "components/organisms/SignUpIntro.vue:2:3"
}
const _hoisted_2 = {
  class: "relative h-24 w-24 rounded border transition-all border-white/20 hover:border-white",
  "data-cy": "profile-picture-container",
  "data-v-inspector": "components/organisms/SignUpIntro.vue:5:5"
}
const _hoisted_3 = { "data-v-inspector": "components/organisms/SignUpIntro.vue:19:5" }
const _hoisted_4 = {
  class: "text-xs text-white/70",
  "data-v-inspector": "components/organisms/SignUpIntro.vue:24:7"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AttachImage = _resolveComponent("AttachImage")
  const _component_CustomText = _resolveComponent("CustomText")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _cache[0] || (_cache[0] = _createElementVNode("div", {
        class: "gradient absolute inset-0 opacity-20",
        "data-v-inspector": "components/organisms/SignUpIntro.vue:8:7"
      }, null, -1 /* HOISTED */)),
      _createVNode(_component_AttachImage, {
        class: _normalizeClass({
          'absolute inset-0 h-full w-full rounded object-cover': !$props.error,
          'absolute inset-0 h-full w-full rounded object-cover border border-red-300':
            $props.error
        }),
        src: "https://develop.aladia.io/logo/image.png",
        "data-cy": "profile-picture"
      }, null, 8 /* PROPS */, ["class"])
    ]),
    _createElementVNode("div", _hoisted_3, [
      _createVNode(_component_CustomText, {
        class: "mb-1 text-sm font-semibold",
        text: "Nice to meet you,",
        "data-cy": "signup-intro-greeting"
      }),
      _createElementVNode("div", _hoisted_4, [
        _createVNode(_component_CustomText, {
          text: "Upload a profile picture",
          "data-cy": "upload-profile-pic"
        }),
        _createVNode(_component_CustomText, {
          text: "and complete your",
          "data-cy": "complete-your"
        }),
        _createVNode(_component_CustomText, {
          text: "presentation",
          "data-cy": "presentation"
        })
      ])
    ])
  ]))
}


_sfc_main.__hmrId = "462e0df5"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/organisms/SignUpIntro.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBbUNBLE1BQUssQ0FBRSxXQUFVLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7QUFDbEQsTUFBSyxDQUFFLFVBQVMsQ0FBRSxJQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztBQUNoRCxNQUFLLENBQUUsV0FBVSxDQUFFLElBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDOztBQUVsRCxLQUFLLFVBQVU7RUFDYixJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7RUFDbkIsVUFBVSxFQUFFO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVjtFQUNGLENBQUM7RUFDRCxLQUFLLEVBQUU7SUFDTCxLQUFLLEVBQUU7TUFDTCxJQUFJLEVBQUUsT0FBTztNQUNiLE9BQU8sRUFBRTtJQUNYO0VBQ0Y7QUFDRixDQUFDOzs7OztFQWxERyxLQUFLLEVBQUMsa0RBQWtEO0VBQ3hELFNBQU8sRUFBQyxjQUFjO0VBQUMsa0JBQWdCLEVBQUM7OztFQUV0QyxLQUFLLEVBQUMscUZBQXFGO0VBQzNGLFNBQU8sRUFBQywyQkFBMkI7RUFBQyxrQkFBZ0IsRUFBQzs7cUJBWWxELGtCQUFnQixFQUFDLDJDQUEyQzs7RUFLMUQsS0FBSyxFQUFDLHVCQUF1QjtFQUFDLGtCQUFnQixFQUFDOzs7Ozs7O3dCQXRCeEQsb0JBOEJNLE9BOUJOLFVBOEJNO0lBM0JKLG9CQVlNLE9BWk4sVUFZTTtnQ0FUSixvQkFBb0g7UUFBL0csS0FBSyxFQUFDLHNDQUFzQztRQUFDLGtCQUFnQixFQUFDOztNQUNuRSxhQU84QjtRQU4zQixLQUFLLEVBVGQ7a0VBU29GLFlBQUs7O1lBQXFHOztRQUt0TCxHQUFHLEVBQUMsMENBQTBDO1FBQzlDLFNBQU8sRUFBQzs7O0lBR1osb0JBWU0sT0FaTixVQVlNO01BWEosYUFHb0M7UUFGbEMsS0FBSyxFQUFDLDRCQUE0QjtRQUNsQyxJQUFJLEVBQUMsbUJBQW1CO1FBQ3hCLFNBQU8sRUFBQzs7TUFDVixvQkFNTSxPQU5OLFVBTU07UUFMSixhQUVpQztVQUQvQixJQUFJLEVBQUMsMEJBQTBCO1VBQy9CLFNBQU8sRUFBQzs7UUFDVixhQUErRDtVQUFuRCxJQUFJLEVBQUMsbUJBQW1CO1VBQUMsU0FBTyxFQUFDOztRQUM3QyxhQUF5RDtVQUE3QyxJQUFJLEVBQUMsY0FBYztVQUFDLFNBQU8sRUFBQyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU2lnblVwSW50cm8udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwibWItNCBmbGV4IHctZnVsbCBpdGVtcy1lbmQgZ2FwLTYgcHgtNCB0ZXh0LXdoaXRlXCJcbiAgICBkYXRhLWN5PVwic2lnbnVwLWludHJvXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL1NpZ25VcEludHJvLnZ1ZToyOjNcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInJlbGF0aXZlIGgtMjQgdy0yNCByb3VuZGVkIGJvcmRlciB0cmFuc2l0aW9uLWFsbCBib3JkZXItd2hpdGUvMjAgaG92ZXI6Ym9yZGVyLXdoaXRlXCJcbiAgICAgIGRhdGEtY3k9XCJwcm9maWxlLXBpY3R1cmUtY29udGFpbmVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL1NpZ25VcEludHJvLnZ1ZTo1OjVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJncmFkaWVudCBhYnNvbHV0ZSBpbnNldC0wIG9wYWNpdHktMjBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvU2lnblVwSW50cm8udnVlOjg6N1wiPjwvZGl2PlxuICAgICAgPEF0dGFjaEltYWdlXG4gICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAnYWJzb2x1dGUgaW5zZXQtMCBoLWZ1bGwgdy1mdWxsIHJvdW5kZWQgb2JqZWN0LWNvdmVyJzogIWVycm9yLFxuICAgICAgICAgICdhYnNvbHV0ZSBpbnNldC0wIGgtZnVsbCB3LWZ1bGwgcm91bmRlZCBvYmplY3QtY292ZXIgYm9yZGVyIGJvcmRlci1yZWQtMzAwJzpcbiAgICAgICAgICAgIGVycm9yXG4gICAgICAgIH1cIlxuICAgICAgICBzcmM9XCJodHRwczovL2RldmVsb3AuYWxhZGlhLmlvL2xvZ28vaW1hZ2UucG5nXCJcbiAgICAgICAgZGF0YS1jeT1cInByb2ZpbGUtcGljdHVyZVwiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9TaWduVXBJbnRyby52dWU6MTk6NVwiPlxuICAgICAgPEN1c3RvbVRleHRcbiAgICAgICAgY2xhc3M9XCJtYi0xIHRleHQtc20gZm9udC1zZW1pYm9sZFwiXG4gICAgICAgIHRleHQ9XCJOaWNlIHRvIG1lZXQgeW91LFwiXG4gICAgICAgIGRhdGEtY3k9XCJzaWdudXAtaW50cm8tZ3JlZXRpbmdcIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cInRleHQteHMgdGV4dC13aGl0ZS83MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9TaWduVXBJbnRyby52dWU6MjQ6N1wiPlxuICAgICAgICA8Q3VzdG9tVGV4dFxuICAgICAgICAgIHRleHQ9XCJVcGxvYWQgYSBwcm9maWxlIHBpY3R1cmVcIlxuICAgICAgICAgIGRhdGEtY3k9XCJ1cGxvYWQtcHJvZmlsZS1waWNcIiAvPlxuICAgICAgICA8Q3VzdG9tVGV4dCB0ZXh0PVwiYW5kIGNvbXBsZXRlIHlvdXJcIiBkYXRhLWN5PVwiY29tcGxldGUteW91clwiIC8+XG4gICAgICAgIDxDdXN0b21UZXh0IHRleHQ9XCJwcmVzZW50YXRpb25cIiBkYXRhLWN5PVwicHJlc2VudGF0aW9uXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2F0b21zL0N1c3RvbUltYWdlLnZ1ZVwiO1xuaW1wb3J0IEN1c3RvbVRleHQgZnJvbSBcIi4uL2F0b21zL0N1c3RvbVRleHQudnVlXCI7XG5pbXBvcnQgQXR0YWNoSW1hZ2UgZnJvbSBcIi4uL2F0b21zL0F0dGFjaEltYWdlLnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiU2lnblVwSW50cm9cIixcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUltYWdlLFxuICAgIEN1c3RvbVRleHQsXG4gICAgQXR0YWNoSW1hZ2VcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBlcnJvcjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL3RhbnMvRG9jdW1lbnRzL2pvYi9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL2Zyb250ZW5kL2NvbXBvbmVudHMvb3JnYW5pc21zL1NpZ25VcEludHJvLnZ1ZSJ9