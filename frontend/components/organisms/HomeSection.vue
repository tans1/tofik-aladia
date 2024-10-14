<template>
  <div
    class="relative h-[36rem] overflow-hidden bg-black/35"
    data-cy="home-section">
    <div class="z-1 relative flex items-center px-10 pt-40 text-white">
      <div class="mr-10 flex-1">
        <CustomText
          class="mb-5 text-6xl font-bold opacity-90"
          text="E-learning Revolution 2"
          data-cy="home-section-title" />
        <CustomText
          class="mb-5 text-xl"
          text="We have worked to digitize our school, and give the whole world the opportunity to do it with a new study platform designed for teachers"
          data-cy="home-section-description" />

        <CustomLink
          linkClass="inline-block cursor-pointer rounded-md bg-black px-4 py-3"
          text="Go to Marketplace"
          endpoint="/"
          data-cy="go-to-marketplace-button" />
        <div>
          <div>Hello</div>
          <div>en</div>
          <div>it</div>
        </div>
      </div>
      <div
        class="h-80 flex-1 rounded bg-black"
        data-cy="home-section-image"></div>
    </div>
  </div>
</template>

<script>
import CustomText from "../atoms/CustomText.vue";
import CustomLink from "../atoms/CustomLink.vue";
export default {
  name: "HomeSection",
  components: {
    CustomText,
    CustomLink
  }
};
</script>
