<template>
  <div class="carousel-wrapper relative w-3/4 mx-auto">
    <Carousel ref="carousel" :settings="settings" :breakpoints="breakpoints" :wrap-around="true">
      <Slide v-for="slide in slides" :key="slide.ListingId">
        <div class="carousel_item flex flex-col flex-wrap w-full">
          <img class="mx-auto w-28 mt-4" :src="slide.featuredPhoto" alt="">
          <div class="info flex flex-col content-start mx-auto w-28">
            <span class="font-bold">{{ slide.StreetNumber }}</span>
            <span>{{ slide.BedroomsTotal }}/{{ slide.Bathrooms }}</span>
            <span>{{ slide.ListPrice }}/Month</span>
            <span>{{ slide.ListingId }}</span>
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
        itemsToShow: 3,
        snapAlign: 'center'
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: 'start'
      }
    },
    currentSlide: null
  }),
  computed: {
    slides () {
      const retVal = this.store.getListings.map((listing) => {
        return {
          ...listing,
          featuredPhoto: listing.PropertyPictures.find((pic) => { return pic.Order === 1; }).MediaURL
        };
      });
      return retVal;
    }
  },
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
.carousel__track{
  .carousel__slide--visible:nth-child(1){
    border: solid red 1px;
    >.carousel_item{
      background:transparent url('~/assets/images/carousel/Carousel_LineBG_1.png') no-repeat center center;
      background-size: 100% 100%;
    }
  }
  .carousel__slide--visible:nth-child(2){
    >.carousel_item{
      background:transparent url('~/assets/images/carousel/Carousel_LineBG_2.png') no-repeat center center;
      background-size: 100% 100%;
    }
  }
  .carousel__slide--visible:nth-child(3){
    >.carousel_item{
      background:transparent url('~/assets/images/carousel/Carousel_LineBG_3.png') no-repeat center center;
      background-size: 100% 100%;
    }
  }
  .carousel__slide--visible:nth-child(4){
    >.carousel_item{
      background:transparent url('~/assets/images/carousel/Carousel_LineBG_4.png') no-repeat center center;
      background-size: 100% 100%;
    }
  }
  .carousel__slide--visible:nth-child(5){
    >.carousel_item{
      background:transparent url('~/assets/images/carousel/Carousel_LineBG_1.png') no-repeat center center;
      background-size: 100% 100%;
    }
  }
  .carousel__slide--visible:nth-child(6){
    >.carousel_item{
      background:transparent url('~/assets/images/carousel/Carousel_LineBG_2.png') no-repeat center center;
      background-size: 100% 100%;
    }
  }
  .carousel__slide--visible:nth-child(7){
    >.carousel_item{
      background:transparent url('~/assets/images/carousel/Carousel_LineBG_3.png') no-repeat center center;
      background-size: 100% 100%;
    }
  }
  .carousel__slide--visible:nth-child(8){
    >.carousel_item{
      background:transparent url('~/assets/images/carousel/Carousel_LineBG_4.png') no-repeat center center;
      background-size: 100% 100%;
    }
  }
  .carousel__slide{
    .carousel_item{
      box-shadow: inset -10px 0px 20px -10px #000;
        .info{
            text-align: left;
        }
    }
  }

}

</style>
