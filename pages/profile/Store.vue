<template>
  <v-row>
    <v-col
      cols="6"
      sm="4"
      md="3"
      v-for="(item, index) in products"
      :key="index"
    >
      <c-card :data="item"></c-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'Channels',
  transition: 'slide-bottom',

  layout: 'profile',
  computed: {
    products() {
      return this.$store.getters.getr_products
    },
  },
}
</script>
<style lang="scss" scoped>
.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
</style>
