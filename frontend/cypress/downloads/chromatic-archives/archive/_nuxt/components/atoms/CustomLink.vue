import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/CustomLink.vue");import { default as __nuxt_component_0 } from "/_nuxt/node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@18.19.55_ioredis@5.4.1_magicast@0.3.5_rollup@4._3qjitnmipsoft2ibsb52iurgbq/node_modules/nuxt/dist/app/components/nuxt-link.js?v=b44a2d30";

const _sfc_main = {
  name: "CustomLink",
  props: {
    endpoint: {
      type: String,
      required: true
    },
    target: {
      type: String,
      default: "_self"
    },
    text: {
      type: String,
      required: true
    },
    linkClass: {
      type: String,
      default: ""
    }
  }
};

import { toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, normalizeClass as _normalizeClass, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0

  return (_openBlock(), _createBlock(_component_NuxtLink, {
    to: $props.endpoint,
    target: $props.target,
    class: _normalizeClass($props.linkClass),
    "data-cy": "custom-link"
  }, {
    default: _withCtx(() => [
      _createTextVNode(_toDisplayString($props.text), 1 /* TEXT */)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["to", "target", "class"]))
}


_sfc_main.__hmrId = "3157804b"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/atoms/CustomLink.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7QUFXQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0VBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNmLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDSixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNmLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDWjtFQUNGO0FBQ0YsQ0FBQzs7Ozs7Ozt3QkE5QkMsYUFNVztJQUxSLEVBQUUsRUFBRSxlQUFRO0lBQ1osTUFBTSxFQUFFLGFBQU07SUFDZCxLQUFLLEVBSlYsZ0JBSVksZ0JBQVM7SUFDakIsU0FBTyxFQUFDOztJQUxaLGtCQU1JLENBQVU7TUFOZCxrQ0FNTyxXQUFJOztJQU5YIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJDdXN0b21MaW5rLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxOdXh0TGlua1xuICAgIDp0bz1cImVuZHBvaW50XCJcbiAgICA6dGFyZ2V0PVwidGFyZ2V0XCJcbiAgICA6Y2xhc3M9XCJsaW5rQ2xhc3NcIlxuICAgIGRhdGEtY3k9XCJjdXN0b20tbGlua1wiPlxuICAgIHt7IHRleHQgfX1cbiAgPC9OdXh0TGluaz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQ3VzdG9tTGlua1wiLFxuICBwcm9wczoge1xuICAgIGVuZHBvaW50OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdGFyZ2V0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcIl9zZWxmXCJcbiAgICB9LFxuICAgIHRleHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBsaW5rQ2xhc3M6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvdGFucy9Eb2N1bWVudHMvam9iL2FsYWRpYS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vZnJvbnRlbmQvY29tcG9uZW50cy9hdG9tcy9DdXN0b21MaW5rLnZ1ZSJ9