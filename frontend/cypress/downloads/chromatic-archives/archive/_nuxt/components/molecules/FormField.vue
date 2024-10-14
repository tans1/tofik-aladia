import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/FormField.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import CustomInput from "/_nuxt/components/atoms/CustomInput.vue";
import CustomIcon from "/_nuxt/components/atoms/CustomIcon.vue";

const _sfc_main = {
  name: "FormField",
  components: {
    CustomInput,
    CustomIcon
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    updateValue: {
      type: Function,
      default: () => {}
    },
    inputType: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    iconClass: {
      type: String,
      default: "fa-envelope"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      originalType: this.inputType,
      toggleType: this.inputType
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.toggleType = this.toggleType === "text" ? "password" : "text";
    }
  }
};

import { resolveComponent as _resolveComponent,   openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=b44a2d30"

const _hoisted_1 = {
  class: "group relative flex h-10 w-full rounded transition-all bg-white",
  "data-cy": "form-field-container",
  "data-v-inspector": "components/molecules/FormField.vue:2:3"
}
const _hoisted_2 = {
  class: "flex w-10 items-center justify-center text-xl",
  "data-cy": "icon-container",
  "data-v-inspector": "components/molecules/FormField.vue:5:5"
}
const _hoisted_3 = {
  key: 2,
  class: "pointer-events-none absolute left-10 top-[0.65rem] origin-left text-sm text-black/50 transition-all scale-100",
  "data-cy": "placeholder-text",
  "data-v-inspector": "components/molecules/FormField.vue:32:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CustomIcon = _resolveComponent("CustomIcon")
  const _component_CustomInput = _resolveComponent("CustomInput")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_CustomIcon, { iconClass: $props.iconClass }, null, 8 /* PROPS */, ["iconClass"])
    ]),
    _createVNode(_component_CustomInput, {
      type: $data.toggleType,
      value: $props.value,
      onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
      class: "h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all",
      style: {"--bg-body":"white"},
      disabled: $props.disabled,
      "data-cy": "input-field"
    }, null, 8 /* PROPS */, ["type", "value", "disabled"]),
    ($data.originalType === 'password' && $data.toggleType === 'password')
      ? (_openBlock(), _createBlock(_component_CustomIcon, {
          key: 0,
          onClick: $options.togglePasswordVisibility,
          iconClass: "fa-solid absolute right-3 top-[0.7rem] scale-100 cursor-pointer text-base text-black/50 transition-all active:scale-90 fa-eye-slash",
          "data-cy": "toggle-password-visibility-icon"
        }, null, 8 /* PROPS */, ["onClick"]))
      : _createCommentVNode("v-if", true),
    ($data.originalType === 'password' && $data.toggleType === 'text')
      ? (_openBlock(), _createBlock(_component_CustomIcon, {
          key: 1,
          onClick: $options.togglePasswordVisibility,
          iconClass: "fa-solid absolute right-3 top-[0.7rem] scale-100 cursor-pointer text-base text-black/50 transition-all active:scale-90 fa-eye",
          "data-cy": "toggle-password-visibility-icon"
        }, null, 8 /* PROPS */, ["onClick"]))
      : _createCommentVNode("v-if", true),
    ($props.value === '')
      ? (_openBlock(), _createElementBlock("div", _hoisted_3, _toDisplayString($props.placeholder), 1 /* TEXT */))
      : _createCommentVNode("v-if", true)
  ]))
}


_sfc_main.__hmrId = "aeb74fa3"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/tans/Documents/job/aladia/frontend-qa-selection/frontend/components/molecules/FormField.vue"]])
//# sourceMappingURL=data:application/json;base64,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bkNwQiIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRm9ybUZpZWxkLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cImdyb3VwIHJlbGF0aXZlIGZsZXggaC0xMCB3LWZ1bGwgcm91bmRlZCB0cmFuc2l0aW9uLWFsbCBiZy13aGl0ZVwiXG4gICAgZGF0YS1jeT1cImZvcm0tZmllbGQtY29udGFpbmVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL0Zvcm1GaWVsZC52dWU6MjozXCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJmbGV4IHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQteGxcIlxuICAgICAgZGF0YS1jeT1cImljb24tY29udGFpbmVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL0Zvcm1GaWVsZC52dWU6NTo1XCI+XG4gICAgICA8Q3VzdG9tSWNvbiA6aWNvbkNsYXNzPVwiaWNvbkNsYXNzXCIgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxDdXN0b21JbnB1dFxuICAgICAgOnR5cGU9XCJ0b2dnbGVUeXBlXCJcbiAgICAgIDp2YWx1ZT1cInZhbHVlXCJcbiAgICAgIEBpbnB1dD1cIiRlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsICRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgIGNsYXNzPVwiaC1mdWxsIGZsZXgtMSByb3VuZGVkIGJnLXRyYW5zcGFyZW50IHRleHQtc20gdGV4dC1ibGFjayBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgc3R5bGU9XCItLWJnLWJvZHk6IHdoaXRlXCJcbiAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgIGRhdGEtY3k9XCJpbnB1dC1maWVsZFwiIC8+XG5cbiAgICA8Q3VzdG9tSWNvblxuICAgICAgdi1pZj1cIm9yaWdpbmFsVHlwZSA9PT0gJ3Bhc3N3b3JkJyAmJiB0b2dnbGVUeXBlID09PSAncGFzc3dvcmQnXCJcbiAgICAgIEBjbGljaz1cInRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eVwiXG4gICAgICBpY29uQ2xhc3M9XCJmYS1zb2xpZCBhYnNvbHV0ZSByaWdodC0zIHRvcC1bMC43cmVtXSBzY2FsZS0xMDAgY3Vyc29yLXBvaW50ZXIgdGV4dC1iYXNlIHRleHQtYmxhY2svNTAgdHJhbnNpdGlvbi1hbGwgYWN0aXZlOnNjYWxlLTkwIGZhLWV5ZS1zbGFzaFwiXG4gICAgICBkYXRhLWN5PVwidG9nZ2xlLXBhc3N3b3JkLXZpc2liaWxpdHktaWNvblwiIC8+XG5cbiAgICA8Q3VzdG9tSWNvblxuICAgICAgdi1pZj1cIm9yaWdpbmFsVHlwZSA9PT0gJ3Bhc3N3b3JkJyAmJiB0b2dnbGVUeXBlID09PSAndGV4dCdcIlxuICAgICAgQGNsaWNrPVwidG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5XCJcbiAgICAgIGljb25DbGFzcz1cImZhLXNvbGlkIGFic29sdXRlIHJpZ2h0LTMgdG9wLVswLjdyZW1dIHNjYWxlLTEwMCBjdXJzb3ItcG9pbnRlciB0ZXh0LWJhc2UgdGV4dC1ibGFjay81MCB0cmFuc2l0aW9uLWFsbCBhY3RpdmU6c2NhbGUtOTAgZmEtZXllXCJcbiAgICAgIGRhdGEtY3k9XCJ0b2dnbGUtcGFzc3dvcmQtdmlzaWJpbGl0eS1pY29uXCIgLz5cblxuICAgIDxkaXZcbiAgICAgIHYtaWY9XCJ2YWx1ZSA9PT0gJydcIlxuICAgICAgY2xhc3M9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGxlZnQtMTAgdG9wLVswLjY1cmVtXSBvcmlnaW4tbGVmdCB0ZXh0LXNtIHRleHQtYmxhY2svNTAgdHJhbnNpdGlvbi1hbGwgc2NhbGUtMTAwXCJcbiAgICAgIGRhdGEtY3k9XCJwbGFjZWhvbGRlci10ZXh0XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL0Zvcm1GaWVsZC52dWU6MzI6NVwiPlxuICAgICAge3sgcGxhY2Vob2xkZXIgfX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEN1c3RvbUlucHV0IGZyb20gXCIuLi9hdG9tcy9DdXN0b21JbnB1dC52dWVcIjtcbmltcG9ydCBDdXN0b21JY29uIGZyb20gXCIuLi9hdG9tcy9DdXN0b21JY29uLnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiRm9ybUZpZWxkXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21JbnB1dCxcbiAgICBDdXN0b21JY29uXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICB9LFxuICAgIHVwZGF0ZVZhbHVlOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIGRlZmF1bHQ6ICgpID0+IHt9XG4gICAgfSxcbiAgICBpbnB1dFR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwidGV4dFwiXG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH0sXG4gICAgaWNvbkNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcImZhLWVudmVsb3BlXCJcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yaWdpbmFsVHlwZTogdGhpcy5pbnB1dFR5cGUsXG4gICAgICB0b2dnbGVUeXBlOiB0aGlzLmlucHV0VHlwZVxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkoKSB7XG4gICAgICB0aGlzLnRvZ2dsZVR5cGUgPSB0aGlzLnRvZ2dsZVR5cGUgPT09IFwidGV4dFwiID8gXCJwYXNzd29yZFwiIDogXCJ0ZXh0XCI7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL3RhbnMvRG9jdW1lbnRzL2pvYi9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL2Zyb250ZW5kL2NvbXBvbmVudHMvbW9sZWN1bGVzL0Zvcm1GaWVsZC52dWUifQ==