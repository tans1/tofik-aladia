<template>
  <div>
    <input
      type="file"
      accept="image/*"
      @change="onFileChange"
      data-cy="image-attach-input"
      style="display: none"
      ref="fileInput" />
    <img
      :src="imageSrc"
      :class="class"
      data-cy="image-attach-component"
      @click="triggerFileInput" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, withDefaults } from "vue";
import { useAuthStore } from "../../stores/authStore";

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  class: {
    type: String,
    default: ""
  }
});

const imageSrc = ref("https://develop.aladia.io/logo/image.png");

const authStore = useAuthStore();

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        imageSrc.value = e.target.result as string;
        authStore.setImageUrl(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  }
};

const triggerFileInput = () => {
  const fileInput = document.querySelector('input[type="file"]');
  fileInput?.click();
};
</script>
