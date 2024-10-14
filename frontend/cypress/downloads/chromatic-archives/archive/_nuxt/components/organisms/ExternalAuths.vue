import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/ExternalAuths.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createElementBlock as __createElementBlock,createVNode as __createVNode } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
/* Injection by vite-plugin-vue-inspector End */

import OAuth from "/_nuxt/components/molecules/OAuthButton.vue";
import { ExternalAuths } from "/_nuxt/assets/staticData/data.ts";

const _sfc_main = {
  name: "ExternalAuth",
  components: {
    OAuth
  },
  data() {
    return {
      externalAuths: ExternalAuths
    };
  }
};

import {  renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock,  resolveComponent as _resolveComponent,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"

const _hoisted_1 = {
  class: "mb-8 flex w-full flex-col gap-4",
  "data-cy": "external-auths",
  "data-v-inspector": "components/organisms/ExternalAuths.vue:10:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_OAuth = _resolveComponent("OAuth")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _cache[0] || (_cache[0] = _createElementVNode("div", {
      class: "mb-6 flex items-center justify-between gap-4",
      "data-cy": "external-auth-divider",
      "data-v-inspector": "components/organisms/ExternalAuths.vue:2:3"
    }, [
      _createElementVNode("div", {
        class: "h-[1px] w-40 bg-gradient-to-r from-white/0 to-white",
        "data-v-inspector": "components/organisms/ExternalAuths.vue:5:5"
      }),
      _createElementVNode("div", { "data-v-inspector": "components/organisms/ExternalAuths.vue:6:5" }, "Or"),
      _createElementVNode("div", {
        class: "h-[1px] w-40 bg-gradient-to-r from-white to-white/0",
        "data-v-inspector": "components/organisms/ExternalAuths.vue:7:5"
      })
    ], -1 /* HOISTED */)),
    _createElementVNode("div", _hoisted_1, [
      (_openBlock(true), _createElementBlock(_Fragment, null, _renderList($data.externalAuths, (auth, index) => {
        return (_openBlock(), _createElementBlock("div", {
          key: index,
          "data-v-inspector": "components/organisms/ExternalAuths.vue:11:5"
        }, [
          _createVNode(_component_OAuth, {
            src: auth.imageSrc,
            text: auth.text,
            "data-cy": "oauth-button"
          }, null, 8 /* PROPS */, ["src", "text"])
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ], 64 /* STABLE_FRAGMENT */))
}


_sfc_main.__hmrId = "ccda1a89"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/organisms/ExternalAuths.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE1BQUssQ0FBRSxLQUFJLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7QUFDaEQsTUFBSyxDQUFFLEVBQUUsYUFBWSxDQUFFLEVBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOztBQUUvRCxLQUFLLFVBQVU7RUFDYixJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUM7RUFDcEIsVUFBVSxFQUFFO0lBQ1Y7RUFDRixDQUFDO0VBQ0QsSUFBSSxDQUFDLEVBQUU7SUFDTCxNQUFLLENBQUU7TUFDTCxhQUFhLEVBQUU7SUFDakIsQ0FBQztFQUNIO0FBQ0YsQ0FBQzs7Ozs7RUFyQk0sS0FBSyxFQUFDLGlDQUFpQztFQUFDLFNBQU8sRUFBQyxnQkFBZ0I7RUFBQyxrQkFBZ0IsRUFBQzs7Ozs7O3dCQVR6Rjs4QkFDRSxvQkFNTTtNQUxKLEtBQUssRUFBQyw4Q0FBOEM7TUFDcEQsU0FBTyxFQUFDLHVCQUF1QjtNQUFDLGtCQUFnQixFQUFDOztNQUNqRCxvQkFBcUk7UUFBaEksS0FBSyxFQUFDLHFEQUFxRDtRQUFDLGtCQUFnQixFQUFDOztNQUNsRixvQkFBMkUsU0FBdEUsa0JBQWdCLEVBQUMsNENBQTRDLElBQUMsSUFBRTtNQUNyRSxvQkFBcUk7UUFBaEksS0FBSyxFQUFDLHFEQUFxRDtRQUFDLGtCQUFnQixFQUFDOzs7SUFHcEYsb0JBSU0sT0FKTixVQUlNO3lCQUhKLG9CQUVNLGlCQVpWLFlBVWlDLG1CQUFhLEVBVjlDLENBVWlCLElBQUksRUFBRSxLQUFLOzhCQUF4QixvQkFFTTtVQUZ1QyxHQUFHLEVBQUUsS0FBSztVQUFFLGtCQUFnQixFQUFDOztVQUN4RSxhQUF1RTtZQUEvRCxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFBRSxTQUFPLEVBQUMiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkV4dGVybmFsQXV0aHMudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwibWItNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIlxuICAgIGRhdGEtY3k9XCJleHRlcm5hbC1hdXRoLWRpdmlkZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvRXh0ZXJuYWxBdXRocy52dWU6MjozXCI+XG4gICAgPGRpdiBjbGFzcz1cImgtWzFweF0gdy00MCBiZy1ncmFkaWVudC10by1yIGZyb20td2hpdGUvMCB0by13aGl0ZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9FeHRlcm5hbEF1dGhzLnZ1ZTo1OjVcIj48L2Rpdj5cbiAgICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9FeHRlcm5hbEF1dGhzLnZ1ZTo2OjVcIj5PcjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJoLVsxcHhdIHctNDAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXdoaXRlIHRvLXdoaXRlLzBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvRXh0ZXJuYWxBdXRocy52dWU6Nzo1XCI+PC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJtYi04IGZsZXggdy1mdWxsIGZsZXgtY29sIGdhcC00XCIgZGF0YS1jeT1cImV4dGVybmFsLWF1dGhzXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL0V4dGVybmFsQXV0aHMudnVlOjEwOjNcIj5cbiAgICA8ZGl2IHYtZm9yPVwiKGF1dGgsIGluZGV4KSBpbiBleHRlcm5hbEF1dGhzXCIgOmtleT1cImluZGV4XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL0V4dGVybmFsQXV0aHMudnVlOjExOjVcIj5cbiAgICAgIDxPQXV0aCA6c3JjPVwiYXV0aC5pbWFnZVNyY1wiIDp0ZXh0PVwiYXV0aC50ZXh0XCIgZGF0YS1jeT1cIm9hdXRoLWJ1dHRvblwiIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBPQXV0aCBmcm9tIFwiLi4vbW9sZWN1bGVzL09BdXRoQnV0dG9uLnZ1ZVwiO1xuaW1wb3J0IHsgRXh0ZXJuYWxBdXRocyB9IGZyb20gXCIuLi8uLi9hc3NldHMvc3RhdGljRGF0YS9kYXRhLnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJFeHRlcm5hbEF1dGhcIixcbiAgY29tcG9uZW50czoge1xuICAgIE9BdXRoXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4dGVybmFsQXV0aHM6IEV4dGVybmFsQXV0aHNcbiAgICB9O1xuICB9XG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL3RhbnMvRG9jdW1lbnRzL2pvYi9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL2Zyb250ZW5kL2NvbXBvbmVudHMvb3JnYW5pc21zL0V4dGVybmFsQXV0aHMudnVlIn0=