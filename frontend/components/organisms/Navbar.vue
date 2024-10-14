<template>
  <div
    class="flex h-14 w-full items-center justify-between gap-2 bg-[#060606] px-4 py-2"
    data-cy="navbar-container">
    <div
      class="flex items-center gap-4 md:pl-20"
      data-cy="navbar-left-section"></div>

    <div
      class="pointer-events-none absolute inset-0 z-10 flex h-full w-full items-center justify-center"
      data-cy="navbar-center-section">
      <div
        class="w-3/5 sm:w-1/3 group/input pointer-events-auto relative h-full rounded-md pt-2 transition-all"
        data-cy="searchbar-container">
        <SearchBar data-cy="searchbar-component" />
      </div>
    </div>
    <JoinButton data-cy="join-button" />
  </div>
</template>

<script>
import SearchBar from "../molecules/SearchBar.vue";
import JoinButton from "../molecules/JoinButton.vue";
export default {
  name: "Navbar",
  components: {
    SearchBar,
    JoinButton
  }
};
</script>
