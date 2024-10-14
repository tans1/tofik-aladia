import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/SignUpHeader.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import { useAuthStore } from "/_nuxt/stores/authStore.ts";
const _sfc_main = {
  name: "SignUpHeader",
  components: {
    CustomIcon
  },
  setup() {
    const authStore = useAuthStore();

    const backToLogin = () => {
      authStore.setCurrentModal("home", authStore.user.email);
    };

    return {
      backToLogin
    };
  }
};

import { resolveComponent as _resolveComponent,   openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"

const _hoisted_1 = {
  class: "hidden group-hover:flex",
  "data-v-inspector": "components/molecules/SignUpHeader.vue:6:5"
}
const _hoisted_2 = {
  class: "group-hover:hidden",
  "data-v-inspector": "components/molecules/SignUpHeader.vue:11:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CustomIcon = _resolveComponent("CustomIcon")

  return (_openBlock(), _createElementBlock("div", {
    class: "group flex h-8 scale-100 cursor-pointer items-center justify-center gap-2 pb-4 transition-all active:scale-95",
    onClick: _cache[0] || (_cache[0] = (...args) => ($setup.backToLogin && $setup.backToLogin(...args))),
    "data-cy": "signup-header",
    "data-v-inspector": "components/molecules/SignUpHeader.vue:2:3"
  }, [
    _createElementVNode("div", _hoisted_1, [
      _createVNode(_component_CustomIcon, {
        iconClass: "fa-solid fa-arrow-left transition-all text-white",
        "data-cy": "arrow-left-icon"
      })
    ]),
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_CustomIcon, {
        iconClass: "fa-solid fa-chevron-left transition-all text-white",
        "data-cy": "chevron-left-icon"
      })
    ]),
    _cache[1] || (_cache[1] = _createElementVNode("div", {
      class: "text-white text-sm",
      "data-cy": "back-to-login-text",
      "data-v-inspector": "components/molecules/SignUpHeader.vue:16:5"
    }, " Back to Log in ", -1 /* HOISTED */))
  ]))
}


_sfc_main.__hmrId = "eb8f4357"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/molecules/SignUpHeader.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBLE1BQUssQ0FBRSxVQUFTLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7QUFDaEQsTUFBSyxDQUFFLEVBQUUsWUFBVyxDQUFFLEVBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNyRCxLQUFLLFVBQVU7RUFDYixJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUM7RUFDcEIsVUFBVSxFQUFFO0lBQ1Y7RUFDRixDQUFDO0VBQ0QsS0FBSyxDQUFDLEVBQUU7SUFDTixLQUFJLENBQUUsU0FBUSxDQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7O0lBRWhDLEtBQUksQ0FBRSxXQUFVLENBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO01BQ3hCLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6RCxDQUFDOztJQUVELE1BQUssQ0FBRTtNQUNMO0lBQ0YsQ0FBQztFQUNIO0FBQ0YsQ0FBQzs7Ozs7RUFuQ1EsS0FBSyxFQUFDLHlCQUF5QjtFQUFDLGtCQUFnQixFQUFDOzs7RUFLakQsS0FBSyxFQUFDLG9CQUFvQjtFQUFDLGtCQUFnQixFQUFDOzs7Ozs7d0JBVG5ELG9CQWlCTTtJQWhCSixLQUFLLEVBQUMsK0dBQStHO0lBQ3BILE9BQUssMENBQUUsaURBQVc7SUFDbkIsU0FBTyxFQUFDLGVBQWU7SUFBQyxrQkFBZ0IsRUFBQzs7SUFDekMsb0JBSU0sT0FKTixVQUlNO01BSEosYUFFOEI7UUFENUIsU0FBUyxFQUFDLGtEQUFrRDtRQUM1RCxTQUFPLEVBQUM7OztJQUVaLG9CQUlNLE9BSk4sVUFJTTtNQUhKLGFBRWdDO1FBRDlCLFNBQVMsRUFBQyxvREFBb0Q7UUFDOUQsU0FBTyxFQUFDOzs7OEJBRVosb0JBRU07TUFGRCxLQUFLLEVBQUMsb0JBQW9CO01BQUMsU0FBTyxFQUFDLG9CQUFvQjtNQUFDLGtCQUFnQixFQUFDO09BQTZDLGtCQUUzSCIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU2lnblVwSGVhZGVyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cImdyb3VwIGZsZXggaC04IHNjYWxlLTEwMCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgcGItNCB0cmFuc2l0aW9uLWFsbCBhY3RpdmU6c2NhbGUtOTVcIlxuICAgIEBjbGljaz1cImJhY2tUb0xvZ2luXCJcbiAgICBkYXRhLWN5PVwic2lnbnVwLWhlYWRlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9TaWduVXBIZWFkZXIudnVlOjI6M1wiPlxuICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4gZ3JvdXAtaG92ZXI6ZmxleFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9TaWduVXBIZWFkZXIudnVlOjY6NVwiPlxuICAgICAgPEN1c3RvbUljb25cbiAgICAgICAgaWNvbkNsYXNzPVwiZmEtc29saWQgZmEtYXJyb3ctbGVmdCB0cmFuc2l0aW9uLWFsbCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgZGF0YS1jeT1cImFycm93LWxlZnQtaWNvblwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdyb3VwLWhvdmVyOmhpZGRlblwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9TaWduVXBIZWFkZXIudnVlOjExOjVcIj5cbiAgICAgIDxDdXN0b21JY29uXG4gICAgICAgIGljb25DbGFzcz1cImZhLXNvbGlkIGZhLWNoZXZyb24tbGVmdCB0cmFuc2l0aW9uLWFsbCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgZGF0YS1jeT1cImNoZXZyb24tbGVmdC1pY29uXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC13aGl0ZSB0ZXh0LXNtXCIgZGF0YS1jeT1cImJhY2stdG8tbG9naW4tdGV4dFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9TaWduVXBIZWFkZXIudnVlOjE2OjVcIj5cbiAgICAgIEJhY2sgdG8gTG9nIGluXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDdXN0b21JY29uIGZyb20gXCIuLi9hdG9tcy9DdXN0b21JY29uLnZ1ZVwiO1xuaW1wb3J0IHsgdXNlQXV0aFN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlcy9hdXRoU3RvcmVcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJTaWduVXBIZWFkZXJcIixcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUljb25cbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgYXV0aFN0b3JlID0gdXNlQXV0aFN0b3JlKCk7XG5cbiAgICBjb25zdCBiYWNrVG9Mb2dpbiA9ICgpID0+IHtcbiAgICAgIGF1dGhTdG9yZS5zZXRDdXJyZW50TW9kYWwoXCJob21lXCIsIGF1dGhTdG9yZS51c2VyLmVtYWlsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJhY2tUb0xvZ2luXG4gICAgfTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS90YW5zL0RvY3VtZW50cy9qb2IvYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9mcm9udGVuZC9jb21wb25lbnRzL21vbGVjdWxlcy9TaWduVXBIZWFkZXIudnVlIn0=