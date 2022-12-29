<template>
  <div class="carousel-wrapper relative w-3/4 mx-auto">
    <Carousel ref="carousel" :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="slide in slides" :key="slide.dre">
        <div class="carousel_item flex flex-col flex-wrap w-full">
          <img class="mx-auto w-28 mt-4" :src="slide.imageRef" alt="">
          <div class="info flex flex-col content-start mx-auto w-28">
            <span class="font-bold">{{ slide.name }}</span>
            <span>{{ slide.title }}</span>
            <span>DRE# {{ slide.dre }}</span>
          </div>
        </div>
      </Slide>
    </Carousel>
    <div>
      <button class="nav-buttons nextBtn" @click="next">
        <img src="~/assets/images/carousel/Carousel_Arrow_Right.png" alt="Next Team Member">
      </button>
      <button class="nav-buttons prevBtn" @click="prev">
        <img src="~/assets/images/carousel/Carousel_Arrow_Left.png" alt="Previous Team Member">
      </button>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide
  },
  data: () => ({
    slides: [
      {
        id: 0,
        imageRef: 'https://placekitten.com/g/200/300',
        name: 'Lia Irvin',
        title: 'Owner',
        dre: 1234567
      },
      {
        id: 1,
        imageRef: 'https://placekitten.com/g/200/300',
        name: 'PLACEHOLDER',
        title: 'placeholder',
        dre: 1234567
      },
      {
        id: 2,
        imageRef: 'https://placekitten.com/g/200/300',
        name: 'PLACEHOLDER',
        title: 'placeholder',
        dre: 1234567
      },
      {
        id: 3,
        imageRef: 'https://placekitten.com/g/200/300',
        name: 'PLACEHOLDER',
        title: 'placeholder',
        dre: 1234567
      },
      {
        id: 4,
        imageRef: 'https://placekitten.com/g/200/300',
        name: 'PLACEHOLDER',
        title: 'placeholder',
        dre: 1234567
      },
      {
        id: 5,
        imageRef: 'https://placekitten.com/g/200/300',
        name: 'PLACEHOLDER',
        title: 'placeholder',
        dre: 1234567
      },
      {
        id: 6,
        imageRef: 'https://placekitten.com/g/200/300',
        name: 'PLACEHOLDER',
        title: 'placeholder',
        dre: 1234567
      },
      {
        id: 7,
        imageRef: 'https://placekitten.com/g/200/300',
        name: 'PLACEHOLDER',
        title: 'placeholder',
        dre: 1234567
      }
    ],
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center'
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center'
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start'
      }
    },
    currentSlide: null
  }),
  mounted () {
    this.currentSlide = this.$refs.carousel.currentSlide;
  },
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
<style scoped lang="scss">
.carousel_item{
    background:transparent url('~/assets/images/backgrounds/wavy.png') no-repeat center center;
    background-size: 100% 100%;
    box-shadow: inset -10px 0px 20px -10px #000;
    .info{
        text-align: left;
    }
}
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
