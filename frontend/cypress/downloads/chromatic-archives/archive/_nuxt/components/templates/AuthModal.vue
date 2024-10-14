import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/AuthModal.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"
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
/* Injection by vite-plugin-vue-inspector End */
import { defineComponent as _defineComponent } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
import { useAuthStore } from "/_nuxt/stores/authStore.ts";
import Home from "/_nuxt/components/templates/authModalContents/Home.vue";
import Login from "/_nuxt/components/templates/authModalContents/Login.vue";
import LoginSuccess from "/_nuxt/components/templates/authModalContents/loginSuccess.vue";
import SignUp from "/_nuxt/components/templates/authModalContents/signUp.vue";
import OTP from "/_nuxt/components/templates/authModalContents/OTP.vue";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "AuthModal",
  setup(__props, { expose: __expose }) {
    __expose();
    const authStore = useAuthStore();
    const closeModal = () => authStore.closeModal();
    const __returned__ = { authStore, closeModal, Home, Login, LoginSuccess, SignUp, OTP };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import { openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode,  withModifiers as _withModifiers,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
const _hoisted_1 = { "data-v-inspector": "components/templates/AuthModal.vue:2:3" };
const _hoisted_2 = {
  class: "relative -mt-20 flex h-[40rem] w-[26rem] flex-col rounded-md border border-white",
  "data-cy": "modal-content",
  "data-v-inspector": "components/templates/AuthModal.vue:8:7"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    $setup.authStore.isModalOpen ? (_openBlock(), _createElementBlock("div", {
      key: 0,
      class: "fixed bottom-0 left-0 right-0 top-0 z-[90] flex h-full w-full items-center justify-center bg-black/50 backdrop-blur transition-all duration-300",
      onClick: _withModifiers($setup.closeModal, ["self"]),
      "data-cy": "modal-overlay",
      "data-v-inspector": "components/templates/AuthModal.vue:3:5"
    }, [
      _createElementVNode("div", _hoisted_2, [
        $setup.authStore.currentModal === "home" ? (_openBlock(), _createBlock($setup["Home"], {
          key: 0,
          "data-cy": "home-contents"
        })) : _createCommentVNode("v-if", true),
        $setup.authStore.currentModal === "login" ? (_openBlock(), _createBlock($setup["Login"], {
          key: 1,
          "data-cy": "login-contents"
        })) : _createCommentVNode("v-if", true),
        $setup.authStore.currentModal === "signup" ? (_openBlock(), _createBlock($setup["SignUp"], {
          key: 2,
          "data-cy": "sign-up-contents"
        })) : _createCommentVNode("v-if", true),
        $setup.authStore.currentModal === "otp" ? (_openBlock(), _createBlock($setup["OTP"], {
          key: 3,
          "data-cy": "otp-contents"
        })) : _createCommentVNode("v-if", true),
        $setup.authStore.currentModal === "loginSuccess" ? (_openBlock(), _createBlock($setup["LoginSuccess"], {
          key: 4,
          "data-cy": "password-success-contents"
        })) : _createCommentVNode("v-if", true)
      ])
    ])) : _createCommentVNode("v-if", true)
  ]);
}
_sfc_main.__hmrId = "aabe20fc";
typeof __VUE_HMR_RUNTIME__ !== "undefined" && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main);
import.meta.hot.accept((mod) => {
  if (!mod) return;
  const { default: updated, _rerender_only } = mod;
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render);
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated);
  }
});
import _export_sfc from "/_nuxt/@id/__x00__plugin-vue:export-helper";
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/templates/AuthModal.vue"]]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUE2QkEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sV0FBVztBQUNsQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLFlBQVk7QUFDbkIsT0FBTyxTQUFTOzs7OztBQUVoQixVQUFNLFlBQVksYUFBYTtBQUUvQixVQUFNLGFBQWEsTUFBTSxVQUFVLFdBQVc7Ozs7Ozs7cUJBckN2QyxvQkFBaUIseUNBQXdDOztFQU94RCxPQUFNO0FBQUEsRUFDTixXQUFRO0FBQUEsRUFBZ0Isb0JBQWlCOzs7dUJBUi9DLG9CQXdCTSxPQXhCTixZQXdCTTtBQUFBLElBdEJJLGlCQUFVLDZCQURsQixvQkFzQk07QUFBQSxNQXhCVjtBQUFBLE1BSU0sT0FBTTtBQUFBLE1BQ0wsU0FMUCxlQUttQixtQkFBVTtBQUFBLE1BQ3ZCLFdBQVE7QUFBQSxNQUFnQixvQkFBaUI7QUFBQTtNQUN6QyxvQkFnQk0sT0FoQk4sWUFnQk07QUFBQSxRQVpJLGlCQUFVLGlCQUFZLHdCQUQ5QixhQUU0QjtBQUFBLFVBWnBDO0FBQUEsVUFZVSxXQUFRO0FBQUEsY0FabEI7QUFBQSxRQWNnQixpQkFBVSxpQkFBWSx5QkFEOUIsYUFFNkI7QUFBQSxVQWZyQztBQUFBLFVBZVUsV0FBUTtBQUFBLGNBZmxCO0FBQUEsUUFpQmdCLGlCQUFVLGlCQUFZLDBCQUQ5QixhQUUrQjtBQUFBLFVBbEJ2QztBQUFBLFVBa0JVLFdBQVE7QUFBQSxjQWxCbEI7QUFBQSxRQW1CbUIsaUJBQVUsaUJBQVksdUJBQWpDLGFBQXNFO0FBQUEsVUFuQjlFO0FBQUEsVUFtQnFELFdBQVE7QUFBQSxjQW5CN0Q7QUFBQSxRQXFCZ0IsaUJBQVUsaUJBQVksZ0NBRDlCLGFBRXdDO0FBQUEsVUF0QmhEO0FBQUEsVUFzQlUsV0FBUTtBQUFBLGNBdEJsQjtBQUFBO1VBQUE7QUFBQSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQXV0aE1vZGFsLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL0F1dGhNb2RhbC52dWU6MjozXCI+XG4gICAgPGRpdlxuICAgICAgdi1pZj1cImF1dGhTdG9yZS5pc01vZGFsT3BlblwiXG4gICAgICBjbGFzcz1cImZpeGVkIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIHRvcC0wIHotWzkwXSBmbGV4IGgtZnVsbCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrLzUwIGJhY2tkcm9wLWJsdXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgIEBjbGljay5zZWxmPVwiY2xvc2VNb2RhbFwiXG4gICAgICBkYXRhLWN5PVwibW9kYWwtb3ZlcmxheVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9BdXRoTW9kYWwudnVlOjM6NVwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInJlbGF0aXZlIC1tdC0yMCBmbGV4IGgtWzQwcmVtXSB3LVsyNnJlbV0gZmxleC1jb2wgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXdoaXRlXCJcbiAgICAgICAgZGF0YS1jeT1cIm1vZGFsLWNvbnRlbnRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvQXV0aE1vZGFsLnZ1ZTo4OjdcIj5cbiAgICAgICAgPEhvbWVcbiAgICAgICAgICB2LWlmPVwiYXV0aFN0b3JlLmN1cnJlbnRNb2RhbCA9PT0gJ2hvbWUnXCJcbiAgICAgICAgICBkYXRhLWN5PVwiaG9tZS1jb250ZW50c1wiIC8+XG4gICAgICAgIDxMb2dpblxuICAgICAgICAgIHYtaWY9XCJhdXRoU3RvcmUuY3VycmVudE1vZGFsID09PSAnbG9naW4nXCJcbiAgICAgICAgICBkYXRhLWN5PVwibG9naW4tY29udGVudHNcIiAvPlxuICAgICAgICA8U2lnblVwXG4gICAgICAgICAgdi1pZj1cImF1dGhTdG9yZS5jdXJyZW50TW9kYWwgPT09ICdzaWdudXAnXCJcbiAgICAgICAgICBkYXRhLWN5PVwic2lnbi11cC1jb250ZW50c1wiIC8+XG4gICAgICAgIDxPVFAgdi1pZj1cImF1dGhTdG9yZS5jdXJyZW50TW9kYWwgPT09ICdvdHAnXCIgZGF0YS1jeT1cIm90cC1jb250ZW50c1wiIC8+XG4gICAgICAgIDxMb2dpblN1Y2Nlc3NcbiAgICAgICAgICB2LWlmPVwiYXV0aFN0b3JlLmN1cnJlbnRNb2RhbCA9PT0gJ2xvZ2luU3VjY2VzcydcIlxuICAgICAgICAgIGRhdGEtY3k9XCJwYXNzd29yZC1zdWNjZXNzLWNvbnRlbnRzXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VBdXRoU3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzL2F1dGhTdG9yZVwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vYXV0aE1vZGFsQ29udGVudHMvSG9tZS52dWVcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9hdXRoTW9kYWxDb250ZW50cy9Mb2dpbi52dWVcIjtcbmltcG9ydCBMb2dpblN1Y2Nlc3MgZnJvbSBcIi4vYXV0aE1vZGFsQ29udGVudHMvbG9naW5TdWNjZXNzLnZ1ZVwiO1xuaW1wb3J0IFNpZ25VcCBmcm9tIFwiLi9hdXRoTW9kYWxDb250ZW50cy9zaWduVXAudnVlXCI7XG5pbXBvcnQgT1RQIGZyb20gXCIuL2F1dGhNb2RhbENvbnRlbnRzL09UUC52dWVcIjtcblxuY29uc3QgYXV0aFN0b3JlID0gdXNlQXV0aFN0b3JlKCk7XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiBhdXRoU3RvcmUuY2xvc2VNb2RhbCgpO1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL3RhbnMvRG9jdW1lbnRzL2pvYi9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL2Zyb250ZW5kL2NvbXBvbmVudHMvdGVtcGxhdGVzL0F1dGhNb2RhbC52dWUifQ==