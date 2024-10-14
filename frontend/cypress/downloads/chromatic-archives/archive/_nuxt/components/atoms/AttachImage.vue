import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/AttachImage.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import { ref } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
import { useAuthStore } from "/_nuxt/stores/authStore.ts";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "AttachImage",
  props: {
    src: {
      type: String,
      required: true
    },
    class: {
      type: String,
      default: ""
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const imageSrc = ref("https://develop.aladia.io/logo/image.png");
    const authStore = useAuthStore();
    const onFileChange = (event) => {
      const target = event.target;
      const file = target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            imageSrc.value = e.target.result;
            authStore.setImageUrl(e.target.result);
          }
        };
        reader.readAsDataURL(file);
      }
    };
    const triggerFileInput = () => {
      const fileInput = document.querySelector('input[type="file"]');
      fileInput?.click();
    };
    const __returned__ = { props, imageSrc, authStore, onFileChange, triggerFileInput };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import {  normalizeClass as _normalizeClass, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30";
const _hoisted_1 = { "data-v-inspector": "components/atoms/AttachImage.vue:2:3" };
const _hoisted_2 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: $setup.onFileChange,
        "data-cy": "image-attach-input",
        style: { "display": "none" },
        ref: "fileInput",
        "data-v-inspector": "components/atoms/AttachImage.vue:3:5"
      },
      null,
      544
      /* NEED_HYDRATION, NEED_PATCH */
    ),
    _createElementVNode("img", {
      src: $setup.imageSrc,
      class: _normalizeClass($props.class),
      "data-cy": "image-attach-component",
      onClick: $setup.triggerFileInput,
      "data-v-inspector": "components/atoms/AttachImage.vue:10:5"
    }, null, 10, _hoisted_2)
  ]);
}
_sfc_main.__hmrId = "cbb7086c";
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
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/atoms/AttachImage.vue"]]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsU0FBUyxXQUFzQztBQUMvQyxTQUFTLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLFVBQU0sUUFBUTtBQVdkLFVBQU0sV0FBVyxJQUFJLDBDQUEwQztBQUUvRCxVQUFNLFlBQVksYUFBYTtBQUUvQixVQUFNLGVBQWUsQ0FBQyxVQUFpQjtBQUNyQyxZQUFNLFNBQVMsTUFBTTtBQUNyQixZQUFNLE9BQU8sT0FBTyxRQUFRLENBQUM7QUFFN0IsVUFBSSxNQUFNO0FBQ1IsY0FBTSxTQUFTLElBQUksV0FBVztBQUM5QixlQUFPLFNBQVMsQ0FBQyxNQUFNO0FBQ3JCLGNBQUksRUFBRSxRQUFRLFFBQVE7QUFDcEIscUJBQVMsUUFBUSxFQUFFLE9BQU87QUFDMUIsc0JBQVUsWUFBWSxFQUFFLE9BQU8sTUFBZ0I7QUFBQSxVQUNqRDtBQUFBLFFBQ0Y7QUFDQSxlQUFPLGNBQWMsSUFBSTtBQUFBLE1BQzNCO0FBQUEsSUFDRjtBQUVBLFVBQU0sbUJBQW1CLE1BQU07QUFDN0IsWUFBTSxZQUFZLFNBQVMsY0FBYyxvQkFBb0I7QUFDN0QsaUJBQVcsTUFBTTtBQUFBLElBQ25COzs7Ozs7O3FCQXRETyxvQkFBaUIsdUNBQXNDO21CQUQ5RDs7dUJBQ0Usb0JBYU0sT0FiTixZQWFNO0FBQUEsSUFaSjtBQUFBLE1BTTRFO0FBQUE7QUFBQSxRQUwxRSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDTixVQUFRO0FBQUEsUUFDVCxXQUFRO0FBQUEsUUFDUjtBQUFBLFFBQ0EsS0FBSTtBQUFBLFFBQVksb0JBQWlCO0FBQUE7Ozs7O0lBQ25DLG9CQUl1RjtBQUFBLE1BSHBGLEtBQUs7QUFBQSxNQUNMLE9BWFAsZ0JBV2MsWUFBSztBQUFBLE1BQ2IsV0FBUTtBQUFBLE1BQ1AsU0FBTztBQUFBLE1BQWtCLG9CQUFpQjtBQUFBLGlCQWJqRDtBQUFBIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBdHRhY2hJbWFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0F0dGFjaEltYWdlLnZ1ZToyOjNcIj5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgQGNoYW5nZT1cIm9uRmlsZUNoYW5nZVwiXG4gICAgICBkYXRhLWN5PVwiaW1hZ2UtYXR0YWNoLWlucHV0XCJcbiAgICAgIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiXG4gICAgICByZWY9XCJmaWxlSW5wdXRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9BdHRhY2hJbWFnZS52dWU6Mzo1XCIgLz5cbiAgICA8aW1nXG4gICAgICA6c3JjPVwiaW1hZ2VTcmNcIlxuICAgICAgOmNsYXNzPVwiY2xhc3NcIlxuICAgICAgZGF0YS1jeT1cImltYWdlLWF0dGFjaC1jb21wb25lbnRcIlxuICAgICAgQGNsaWNrPVwidHJpZ2dlckZpbGVJbnB1dFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0F0dGFjaEltYWdlLnZ1ZToxMDo1XCIgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgcmVmLCBkZWZpbmVQcm9wcywgd2l0aERlZmF1bHRzIH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IHsgdXNlQXV0aFN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlcy9hdXRoU3RvcmVcIjtcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gIHNyYzoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuICBjbGFzczoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBcIlwiXG4gIH1cbn0pO1xuXG5jb25zdCBpbWFnZVNyYyA9IHJlZihcImh0dHBzOi8vZGV2ZWxvcC5hbGFkaWEuaW8vbG9nby9pbWFnZS5wbmdcIik7XG5cbmNvbnN0IGF1dGhTdG9yZSA9IHVzZUF1dGhTdG9yZSgpO1xuXG5jb25zdCBvbkZpbGVDaGFuZ2UgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBmaWxlID0gdGFyZ2V0LmZpbGVzPy5bMF07XG5cbiAgaWYgKGZpbGUpIHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0Py5yZXN1bHQpIHtcbiAgICAgICAgaW1hZ2VTcmMudmFsdWUgPSBlLnRhcmdldC5yZXN1bHQgYXMgc3RyaW5nO1xuICAgICAgICBhdXRoU3RvcmUuc2V0SW1hZ2VVcmwoZS50YXJnZXQucmVzdWx0IGFzIHN0cmluZyk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgfVxufTtcblxuY29uc3QgdHJpZ2dlckZpbGVJbnB1dCA9ICgpID0+IHtcbiAgY29uc3QgZmlsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0nKTtcbiAgZmlsZUlucHV0Py5jbGljaygpO1xufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS90YW5zL0RvY3VtZW50cy9qb2IvYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9mcm9udGVuZC9jb21wb25lbnRzL2F0b21zL0F0dGFjaEltYWdlLnZ1ZSJ9