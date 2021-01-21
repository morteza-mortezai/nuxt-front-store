<template>
<div>
    
     <div :class="['hCard d-flex align-center py-1 px-2',{'orange':data.last } ,{'white':!data.last }]">
    <div class="right" v-if="data.img">
      <v-avatar size="45" color="blue lighten-4">
        <img :src="require('@/assets/' + data.img)" />
      </v-avatar>
    </div>
    <div class="center flex-grow-1 px-2">
      <div :class="[{'white--text':data.last},'title' , {'semiblack-text':!data.last}]">{{ data.title }}</div>
      <div  :class="[{'white--text':data.last},{'grey--text':!data.last}]">{{ data.detail }}</div>
    </div>
    <div class="left" v-if="data.icon">
      <v-avatar :color="data.iconBgColor" size="45">
        <v-icon :color="data.iconColor"> mdi-{{ data.icon }} </v-icon>
      </v-avatar>
    </div>
    <div class="rate " >
      <template v-if="data.rate">
           <span class="text-muted grey--text">{{data.rate}}</span>
        <v-icon color="orange lighten" size="15">mdi-star</v-icon>
      </template>
    </div>
  </div>
</div>
 
</template>
<script>
export default {
  name: 'HCard',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.hCard {

  border-radius: 10px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2);
.semiblack-text{
  color: $txt1;
}
  .rate{
      height: 70px;
      span{
          font-size: 12px;

      }
  }
  
}
</style>
