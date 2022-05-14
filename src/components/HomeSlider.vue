<template>
  <carousel class="mt-0 md:mt-8" :items-to-show="1" :autoplay="2500" snapAlign="center" :wrapAround="true">
    <slide v-for="slide in slides" :key="slide">
      <img :src="slide" />
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

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data(){
      return {
          slides : [
              require("@/assets/Slider1.jpg"),
              require("@/assets/Slider2.jpg"),
              require("@/assets/Slider3.jpg")
          ]
      }
  }
};
</script>
<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 2px solid white;
}
</style>