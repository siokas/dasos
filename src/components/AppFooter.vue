<template>
<div class="pt-24">
    <div class="bg-main-black">
        <div class="w-full text-center pt-8 opacity-25">
            <a href="#" v-scroll-to="'#app'"><img src="./../assets/up-arrow.svg" alt="" class="h-6"></a>
        </div>

        <div class="w-full text-center">
            <div>
                <img src="./../assets/pine.svg" alt="Dasos Logo" class="h-16 mt-8">
            </div>
            <div class="text-grey-lightest fond-bold text-2xl">
                dasos
            </div>
            
        </div>
        <div class="flex items-start justify-center text-center text-grey-lightest mt-24">
            <div class="md:w-1/5 xs:w-1/3">
                <div class="font-bold text-lg">Features</div>
                <div class="flex flex-col items-center font-thin text-sm opacity-50 mt-4">
                    <a href="#" class="no-underline text-grey-lightest">Mountain</a>
                    <a href="#" class="no-underline text-grey-lightest mt-2">Tent</a>
                    <a href="#" class="no-underline text-grey-lightest mt-2">Picnic</a>
                    <a href="#" class="no-underline text-grey-lightest mt-2">Compass</a>
                    <a href="#" class="no-underline text-grey-lightest mt-2">Forest</a>
                </div>
                
            </div>
            <div class="md:w-1/5 xs:w-1/3">
                <div class="font-bold text-lg">Downloads</div>
                <div class="flex flex-col items-center font-thin text-sm opacity-50 mt-4">
                    <a href="#" class="no-underline text-grey-lightest">Apple App Store <span class="md:inline-block xs:hidden">(iOS)</span></a>
                    <a href="#" class="no-underline text-grey-lightest mt-2">Google Play Store <span class="md:inline-block xs:hidden">(Android)</span></a>
                </div>
                
            </div>
            <div class="md:w-1/5 xs:w-1/3">
                <div class="font-bold text-lg">Company</div>
                <div class="flex flex-col items-center font-thin text-sm opacity-50 mt-4">
                    <a href="#" class="no-underline text-grey-lightest">About Us</a>
                    <a href="#" class="no-underline text-grey-lightest mt-2">Jobs</a>
                    <a href="#" class="no-underline text-grey-lightest mt-2">Sitemap</a>
                </div>
                
            </div>
        </div>
        <div class="flex flex-wrap mt-12 items-center justify-between p-3">
            <div class="text-grey-lightest text-sm opacity-75">
                designed and developed by 
                <a href="https://github.com/siokas" class="no-underline text-blue">siokas</a>
            </div>
            <div class="">
                <img src="./../assets/facebook.svg" alt="facebook icon" class="h-6 mr-6">
                <img src="./../assets/twitter.svg" alt="twitter icon" class="h-6 mr-6">
                <img src="./../assets/youtube.svg" alt="youtube icon" class="h-6">
                <!-- <img src="./../assets/google-plus.svg" alt="googleplus icon" class="h-6"> -->
                <!-- <img src="./../assets/linkedin.svg" alt="" class="h-6 mr-6"> -->
            </div>

        </div>
        
    </div>
</div>
</template>

<script>
export default {

};
</script>