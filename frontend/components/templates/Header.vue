<template>
  <div
    class="flex h-14 w-full items-center justify-between gap-2 bg-[#060606] px-4 py-2"
    data-cy="header-container">
    <Navbar data-cy="navbar-component" />
  </div>
</template>

<script>
import Navbar from "../organisms/Navbar.vue";
export default {
  name: "Header",
  components: {
    Navbar
  }
};
</script>
