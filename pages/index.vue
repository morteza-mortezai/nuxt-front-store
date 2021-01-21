<template>
  <div class="mb-12">
    <v-row justify="center" align="center">
      <!--Title Start-->
      <v-col cols="12">
        <div class="font-weight-bold titleColor">Hello Kevin</div>
        <div class="mt-0 customSub">Zehn Afzar</div>
      </v-col>
      <!--Title End-->
      <!--search box Start-->

      <v-col cols="12" sm="10" md="8" lg="6">
        <v-text-field
          color="#009788"
          rounded
          placeholder="search for . . . ."
          outlined
          clearable
          background-color="white"
        ></v-text-field>
      </v-col>
      <!--search box End-->
      <v-col cols="12">
        <!--store Start-->
        <div class="customSub">store</div>

        <slider data_source="store"></slider>
        <!--store Start-->
        <!--collection Start-->
        <div class="customSub">collection</div>
        <slider data_source="collection"></slider>
        <!--collection Start-->
      </v-col>
    </v-row>
    <!--Reminders Start-->
    <v-row>
      <v-col cols="12">
        <div class="customSub">store</div>
      </v-col>
      <v-col
        v-for="(item, index) in reminders"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <h-card :data="item"></h-card>
      </v-col>
    </v-row>
    <!--Reminders End-->
    <!--Product Start-->
    <v-row>
      <v-col cols="12">
        <div class="customSub">Products</div>
      </v-col>
      <v-col
        v-for="(item, index) in products"
        :key="index"
        cols="6"
        sm="4"
        md="3"
      >
        <c-card v-model="item.heart" :data="item"></c-card>
      </v-col>
    </v-row>
    <!--Product End-->
    <!--Reminders Start-->
    <v-row class="pb-12 mb-12">
      <v-col cols="12 ">
        <div class="customSub">UpComing webinars</div>
      </v-col>
      <v-col
        v-for="(item, index) in webinars"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <h-card :data="item"></h-card>
      </v-col>
    </v-row>
    <!--Reminders End-->
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    products() {
      return this.$store.getters.getr_products
    },
    reminders() {
      return this.$store.getters.getr_reminders
    },
    webinars() {
      return this.$store.getters.getr_webinars
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.titleColor {
  color: $c1;
  font-size: 20px;
}
.customSub {
  font-size: 26px;
  color: $txt2;
  margin: 20px 0 0 0;
}
</style>
