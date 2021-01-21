<template>
  <div>
    <div
      :class="[
        'card overflow-hidden',
        cclass,
        { 'd-flex justify-space-between': data.horizontal },
      ]"
    >
      <div class="img pa-2">
      <heart-c  :value="data.heart" v-if="!data.horizontal"></heart-c>
        <img class="" :src="require('@/assets/' + data.img + '.png')" alt="" />
      </div>
      <div
        :class="[
          'detail d-flex flex-column justify-space-between my-2',
          { 'py-5': data.horizontal },
          { 'px-5': !data.horizontal },
        ]"
      >
        <div :class="['title', { 'text-center': data.price }]">
          {{ data.title }}
        </div>
        <div class="rating d-flex justify-center align-center">
          <span style="fontsize: 14px" class="pl-1">{{ data.rate }}</span>
          <v-rating
            v-if="data.rate"
            hover
            size="18"
            :value="data.rate"
            background-color="orange lighten-3"
            color="orange"
            dense
          ></v-rating>
        </div>
        <template v-if="!data.price">
          <div class="text text--black">{{ data.text }}</div>
          <div class="count text-muted">{{ data.count }}</div>
        </template>
        <div
          v-if="data.price"
          class="d-flex flex-row justify-space-between align-center"
        >
          <span class="font-weight-bold">{{ data.price }}$</span>
          <v-btn icon color="#009788">
            <v-icon>mdi-basket</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {

  name: 'CCard',
  data() {
    return {
      liked:false
    }
  },
  props: ['data', 'cclass'],
}
</script>
<style lang="scss">
@import '@/styles/variables.scss';

.card {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2);
  direction: rtl;
  .img {
    flex-basis: 45%;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgb(231, 237, 243) 100%
    );
    .icon {
      position: absolute;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  .detail {
    flex-basis: 55%;
    .title {
      color: $c1;
      font-size: 20px !important;
    }
    .text {
      font-size: 15px;
    }
  }
}
</style>
