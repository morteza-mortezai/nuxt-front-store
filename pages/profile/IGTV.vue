<template>
 <pics></pics>
 
</template>
<script>
export default {

  layout: 'profile',
  transition: 'slide-bottom',
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
