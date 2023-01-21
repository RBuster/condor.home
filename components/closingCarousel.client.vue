<template>
  <div class="carousel-wrapper relative w-3/4 mx-auto">
    <Carousel ref="carousel" :settings="settings" :wrap-around="true">
      <Slide v-for="slide in slides" :key="slide.id">
        <div class="carousel_item flex flex-col flex-wrap w-full">
          <img class="mx-auto w-fit mt-4" :src="slide.src">
        </div>
      </Slide>
    </Carousel>
    <div>
      <button class="nav-buttons nextBtn" @click="next">
        <img src="~/assets/images/carousel/Carousel_Arrow_Right.png" alt="Next Photo">
      </button>
      <button class="nav-buttons prevBtn" @click="prev">
        <img src="~/assets/images/carousel/Carousel_Arrow_Left.png" alt="Previous Photo">
      </button>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import { useListingsStore } from '~~/store/listings';

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide
  },
  setup () {
    const store = useListingsStore();
    return {
      store
    };
  },
  data: () => ({
    slides: [
      {
        id: 0,
        src: '/closing-carousel/closing_1.jpg'
      },
      {
        id: 1,
        src: '/closing-carousel/closing_2.jpg'
      },
      {
        id: 2,
        src: '/closing-carousel/closing_3.jpg'
      },
      {
        id: 3,
        src: '/closing-carousel/closing_4.jpg'
      }
    ],
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center'
    }
  }),
  methods: {
    next () {
      this.$refs.carousel.next();
    },
    prev () {
      this.$refs.carousel.prev();
    }
  }
});
</script>
<style lang="scss">
.nav-buttons{
  position: absolute;
  top: 40%;
  img{
    width: 40px;
  }
  &.nextBtn{
  right: -30px;
  }
  &.prevBtn{
    left: -30px;
  }
}

</style>
