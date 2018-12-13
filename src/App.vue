<template>
  <div id="app">
    <app-header></app-header>
    <app-features></app-features>
    <app-download></app-download>
    <app-testimonials></app-testimonials>
    <app-contact></app-contact>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFeatures from "./components/AppFeatures.vue";
import AppTestimonials from "./components/AppTestimonials.vue";
import AppFooter from "./components/AppFooter.vue";
import AppContact from "./components/AppContact.vue";
import AppDownload from "./components/AppDownload.vue";

export default {
  components: {
    AppHeader,
    AppFeatures,
    AppTestimonials,
    AppFooter,
    AppContact,
    AppDownload
  }
};
</script>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;
</style>
