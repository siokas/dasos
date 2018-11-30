<template>
  <div class="font-sans antialiased leading-tight p-0 xs:-mr-5 w-full overflow">
    <!-- <div class="bg-main-green text-center py-4 lg:px-4">
        <a href="#" class="no-underline">
            <div class="p-2 bg-green-darker items-center text-green-lightest leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                <span class="flex rounded-full bg-green uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
                <span class="font-semibold mr-2 text-left flex-auto">Please checkout our new version</span>
                <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
            </div>
        </a>
    </div> -->
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
