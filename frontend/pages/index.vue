<template>
  <Header data-cy="header-component" />
  <HomeSection data-cy="home-section" />
  <AuthModal data-cy="auth-modal" />
</template>

<script setup lang="ts">
import Header from "../components/templates/Header.vue";
import HomeSection from "../components/organisms/HomeSection.vue";
import AuthModal from "../components/templates/AuthModal.vue";
import { useAuthStore } from "../stores/authStore";
const store = useAuthStore();
</script>

<style>
body {
  background-color: #101010;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100vw;
}
</style>
