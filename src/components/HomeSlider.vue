<template>
  <carousel :items-to-show="1.5">
    <slide v-for="slide in slides" :key="slide">
      <img :src="slide.image" class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto">
      <div class="carousel__item" :style="`background : url('../assets/Slider1.jpg')`"></div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
const slides = [
    {
        image : require('@/assets/Slider1.jpg')
    },
    {
        image : require('@/assets/Slider2.jpg')
    },
    {
        image : require('@/assets/Slider3.jpg')
    }
]
export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup(){
      return{
          slides
      }
  }
};
</script>