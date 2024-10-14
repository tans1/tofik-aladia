<template>
  <div
    class="relative z-10 flex h-9 w-full items-center gap-2 px-2 text-sm"
    data-cy="searchbar-wrapper">
    <div
      class="shrink-0 cursor-pointer text-lg transition-all group-hover/input:scale-110"
      data-cy="searchbar-icon">
      <CustomIcon iconClass="fa-solid fa-magnifying-glass text-xs text-white" />
    </div>

    <CustomInput
      class="h-full w-0 flex-1 bg-transparent text-13 outline-none text-white"
      placeholder="Search courses..."
      value=""
      @input="updateValue"
      data-cy="searchbar-input" />
  </div>
</template>

<script>
import CustomIcon from "../atoms/CustomIcon.vue";
import CustomInput from "../atoms/CustomInput.vue";

export default {
  name: "SearchBar",
  components: {
    CustomIcon,
    CustomInput
  },
  methods: {
    updateValue(value) {}
  }
};
</script>
