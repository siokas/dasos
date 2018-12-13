<template>
  <div id="testimonials" class="bg-grey-lightest pt-12 pb-12">
      <carousel :per-page="1" class="text-black" autoplay loop paginationColor="#000000" paginationActiveColor="#1f8a65">
        <slide v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="text-center">
        <div class="text-2xl italic">
          {{ testimonial.title}}
        </div>
        <p class="text-black font-base text-md opacity-50 m-10">
          {{ testimonial.message }}
        </p>
        <div class="inline-flex">
            <img :src="'avatars/' + testimonial.icon" alt="avatar" class="h-16">
          <div class="text-black mt-3 ml-6">
            <div class="font-medium text-lg">
              {{ testimonial.name }}
            </div>
            <div class="font-thin text-md opacity-75">
              {{ testimonial.job }}
            </div>
          </div>
        </div>
      </div>
        </slide>
      </carousel>
    </div>
  <!-- </div> -->
</template>

<script>
  export default {
    data() {
      return {
        testimonials: null
      };
    },
    mounted(){
      axios.get('testimonials.json').then(response => (
        this.testimonials = response.data
        ))
    }
  };
</script>
