<template>
<nav class="flex items-center justify-between flex-wrap p-8">
    <app-logo></app-logo>
    <div class="block lg:hidden">
        <button @click="toggleMenu" class="flex items-center px-3 py-2 border rounded text-grey-lightest border-grey-lightest hover:text-main-green hover:border-main-green focus:outline-none">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
    </div>
    <div class="w-full lg:flex items-center lg:w-auto sm:block" v-bind:class="{'xs:hidden': menu}">
        <a href="#" v-scroll-to="'#features'" class="block mt-4 lg:inline-block lg:mt-0 sm:text-right font-medium no-underline text-grey-lightest hover:text-main-green mr-4">
        features
      </a>
        <a href="#" v-scroll-to="'#testimonials'" class="block mt-4 lg:inline-block sm:text-right lg:mt-0 font-medium no-underline text-grey-lightest hover:text-main-green mr-4">
        testimonials
      </a>
        <a href="#" v-scroll-to="'#contact'" class="block mt-4 lg:inline-block sm:text-right lg:mt-0 font-medium no-underline text-grey-lightest hover:text-main-green mr-4">
        contact
      </a>
    </div>
</nav>
</template>

<script>
import AppLogo from "./AppLogo.vue";

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      menu: true
    };
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu
    }
  },
};
</script>
