<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img class="w-full h-full" :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
  </div>
</template>

<script>
export default {
  name: "HomeSlider",
  data() {
    return {
      images: [
        require("../assets/Slider1.jpg"),
        require("../assets/Slider2.jpg"),
        require("../assets/Slider3.jpg"),
      ],
      timer: null,
      currentIndex: 0
    };
  },


  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 5000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>