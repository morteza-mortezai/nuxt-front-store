<template>
  <div>
    <VueSlickCarousel v-bind="settings" class="py-5">
      <div class="py-3" v-for="(item, index) in cardData" :key="index">
        <CCard cclass="mx-3" :data="item" ></CCard>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Slider',
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        slidesToShow: this.data_source == 'store' ? 4 : 6,
        infinite: true,
       autoplay: true,
        arrows: false,
        centerMode: true,
        rtl: true,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1264,
            settings: {
              slidesToShow: this.data_source == 'store' ? 4 : 6,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: this.data_source == 'store' ? 3 : 5,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: this.data_source == 'store' ? 2 : 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: this.data_source == 'store' ? 1 : 2,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      },
    }
  },
  computed: {
    cardData() {
      if (this.data_source == 'store') return this.$store.getters.getr_store
      if (this.data_source == 'collection')
        return this.$store.getters.getr_collection
    },
  },
  props: {
    data_source: {
      type: String,
      default: '',
      required: true,
    },
    type: {
      type: String,

      required: false,
    },
  },
}
</script>
<style lang="scss" scoped>
  .slick-slide {
  // Remove outline
  outline: none !important;
}
</style>
