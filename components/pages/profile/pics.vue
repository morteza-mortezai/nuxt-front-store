<template>
  <v-row>
    <v-col v-for="n in 9" :key="n" cols="4">
      <div class="imgCon">
        <img class="imgfluid" src="@/assets/1.png" alt="" />
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'Pics',
 
 
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.imgCon {
  // background: transparent !important;
  background: radial-gradient(
    circle,
    rgb(180, 230, 236) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  img {
    width: 100%;
  }
}

</style>
