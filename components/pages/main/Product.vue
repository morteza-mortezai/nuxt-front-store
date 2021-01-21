<template>
 <v-row>
     <v-col v-for="(item,index) in cardData" :key="index" cols="12" sm="6" md="3">
        <c-card  :data="item"></c-card>
 </v-col>
 </v-row>
</template>
<script>

export default {
 
    name:'Product',
    computed:{
        cardData(){
            return this.$store.getters.getr_products
        }
    }

}
</script>