<template>
  <div class="cont d-inline-block">
    <input type="text" v-model="data"  />
    <v-icon size="15">mdi-magnify</v-icon>
  </div>
</template>
<script>
export default {
  name: 'CTextField',
  data() {
    return {
      data: null,
    }
  },
  watch:{
      value:function(){
          this.data=this.value
      },
      data:function(){
         this.$emit('input', this.data)
      }
  },
  props: ['value'],
}
</script>
<style lang="scss" scoped>
.cont {
  border: 1px solid gray;
  padding: 2px 10px;
  border-radius: 5px;
  input {
    max-width: 150px;
  }
  input:focus,
  input:active {
    outline: none !important;
  }
}
</style>
