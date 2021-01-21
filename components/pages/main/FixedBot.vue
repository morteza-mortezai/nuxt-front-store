<template>
   <v-btn @click="$emit('click' , true)" rounded class="fixedbtn">
       <v-icon>mdi-cog</v-icon>
   </v-btn>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">

    .fixedbtn{
      
        position: fixed;
        left:0px;
        top:20%;
        &.v-btn--rounded{

  border-bottom-right-radius: 50px !important;
        border-top-right-radius: 50px !important;
          border-bottom-left-radius: 0px !important;
        border-top-left-radius: 0px !important;
        }
    }
</style>