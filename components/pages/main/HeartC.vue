<template>
  <div class="icon" @click="liked = !liked">
    <v-icon color="red "> mdi-heart{{ liked ? '' : '-outline' }} </v-icon>
  </div>
</template>
<script>
export default {
  name: 'HeartC',
  data() {
    return {
      liked: false,
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  watch: {
    value: function () {
      this.liked = this.value
    },
    liked:function(){
        this.$emit('input' , this.liked)
    }
  },
}
</script>
<style lang="">
/* v-if="!data.horizontal" */
</style>
