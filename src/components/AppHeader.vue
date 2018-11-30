<template>
    <div class="bg-main-black">
        <header class="container mx-auto">
            <navigation-menu></navigation-menu>
            <div class="pt-16 lg:flex items-center">
                <div class="lg:w-1/2 text-center">
                    <img src="./../assets/iphones.png" alt="iphones image" class="xl:h-iphones lg:h-100 md:h-100 sm:h-100 xs:h-100">
                </div>
    
                <div class="w-auto xs:m-0 md:m-1 md:pl-24 md:pr-24">
                    <h2 class="text-white font-black lg:text-4xl md:text-3xl sm:text-xl xs:text-lg mb-4 lg:w-4/5 text-center">
                        The best app in the world!
                    </h2>
                    <div class="text-grey-light opacity-50 mb-4 text-justify lg:w-4/5 md:text-md sm:text-sm xs:text-sm">
                        This app helps you discover all the forests arround in order to reconnect with the nature. Download the app and escape from the urban chaos!
                    </div>
                    <div class="flex text-center lg:w-auto mb-4 lg:mb-0 justify-center lg:w-4/5">
                        <a href="#" v-scroll-to="'#download'" class="flex-1 text-center verical-center justify-center text-sm px-6 py-3 leading-none no-underline border rounded-xl bg-main-green text-grey-lightest border-black hover:border-grey-lightest hover:text-grey-lightest hover:bg-transparent mt-4 mt-0 mr-10">
                            Download
                        </a>
                        <span class="flex-2 inline-flex items-center justify-center text-center mt-4">
                            <img src="./../assets/play-button.svg" alt="play button" class="h-8 mr-2">
                            <a href="#" class="no-underline text-semibold text-grey-lightest text-lg opacity-50 hover:opacity-100">
                                <span class="md:text-lg sm:text-md md:block xs:hidden">Watch How it Works</span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    
        <svg preserveAspectRatio="xMidYMax meet" class="svg-separator sep12" viewBox="0 0 1600 200" style="display: block;" data-height="200">
          <polygon style="fill: #f8fafc;" points="-4,24 800,198 1604,24 1604,204 -4,204 "></polygon> 
          <polygon style="opacity: 1;fill: #95a5a6;" points="-4,0 800,198 1604,0 1604,11.833 800,198 -4,12 "></polygon> 
          <polygon style="opacity: 1;fill: #dae1e7;" points="-4,12 -4,24 800,198 1604,24 1604,11.833 800,198 "></polygon>
        </svg>
    </div>
</template>

<script>
    import NavigationMenu from "./NavigationMenu";

    export default {
    components: {
        NavigationMenu
    },
    data() {
        return {};
    }
    };
</script>
