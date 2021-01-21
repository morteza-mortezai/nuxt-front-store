export const state = () => ({
  store: [
    {
      horizontal: true,
      
      img: '1',
      title: 'title',
      text: 'some detail',
      count: 5,
      heart: false,
    },
    {
      horizontal: true,
      
      img: '1',
      title: 'title2',
      text: 'some detail2',
      count: 10,
      heart: false,
    },
    {
      horizontal: true,
      
      img: '1',
      title: 'title2',
      text: 'some detail2',
      count: 10,
      heart: false,
    },
    {
      horizontal: true,
      
      img: '1',
      title: 'title2',
      text: 'some detail2',
      count: 10,
      heart: false,
    },
    {
      horizontal: true,
      
      img: '1',
      title: 'title2',
      text: 'some detail2',
      count: 10,
      heart: false,
    },
  ],
  collection: [
    {
      horizontal: false,
      
      img: '1',
      title: 'title',
      text: 'some detail',
      count: 5,
      heart: false,
    },
    {
      horizontal: false,
      
      img: '1',
      title: 'title',
      text: 'some detail',
      count: 5,
      heart: false,
    },
    {
      horizontal: false,
      
      img: '1',
      title: 'title',
      text: 'some detail',
      count: 5,
      heart: false,
    },
    {
      horizontal: false,
      
      img: '1',
      title: 'title',
      text: 'some detail',
      count: 5,
      heart: false,
    },
    {
      horizontal: false,
      
      img: '1',
      title: 'title',
      text: 'some detail',
      count: 5,
      heart: false,
    },
    {
      horizontal: false,
      
      img: '1',
      title: 'title',
      text: 'some detail',
      count: 5,
      heart: false,
    },
    {
      horizontal: false,
      
      img: '1',
      title: 'title',
      text: 'some detail',
      count: 5,
      heart: false,
    },
    {
      horizontal: false,
      
      img: '1',
      title: 'title',
      text: 'some detail',
      count: 5,
      heart: false,
    },
    {
      horizontal: false,
      
      img: '1',
      title: 'title',
      text: 'some detail',
      count: 5,
      heart: false,
    },
 
  ],
  products: [
    {
      horizontal: false,
      
      img: '1',
      title: 'title',
      text: 'some detail',
      count: 5,
      heart: true,
      price:100,
      rate:3
    },
    {
      horizontal: false,
      
      img: '1',
      title: 'title2',
      text: 'some detail',
      count: 5,
      heart: true,
      price:252,
      rate:1
    },
    {
      horizontal: false,
      
      img: '1',
      title: 'title2',
      text: 'some detail',
      count: 5,
      heart: false,
      price:200,
      rate:4
    },
    {
      horizontal: false,
      
      img: '1',
      title: 'title2',
      text: 'some detail',
      count: 5,
      heart: false,
      price:200,
      rate:4
    },
    {
      horizontal: false,
      
      img: '1',
      title: 'title2',
      text: 'some detail',
      count: 5,
      heart: false,
      price:200,
      rate:4
    },
    {
      horizontal: false,
      
      img: '1',
      title: 'title2',
      text: 'some detail',
      count: 5,
      heart: false,
      price:200,
      rate:4
    },
 
 
  ],
  reminders:[
     
      {id:1,   title:'title one' , detail:'detail' , icon:'camera-flip-outline' , iconColor:'red' , iconBgColor:'red lighten-5'},
      {id:2,   title:'title two' , detail:'detail' , icon:'water-outline' , iconColor:'blue' , iconBgColor:'blue lighten-5'},
      {id:3,   title:'Add new' , detail:'some detail' , icon:'alarm',iconColor:'grey darken-2' ,iconBgColor:'grey lighten-3' , last:true ,color:'white'},
  ],
  webinars:[
      {id:1, img:'1.png', rate:'3', title:'title one' , detail:'detail' , },
      {id:2, img:'1.png', rate:'4', title:'title two' , detail:'detail' , },
      {id:3, img:'1.png', rate:'5', title:'title three' , detail:'detail' , },
    
  ],
 
})
export const getters = {
  getr_store(state) {
    return state.store
  },
  getr_collection(state) {
    return state.collection
  },
  getr_products(state) {
    return state.products
  },
  getr_reminders(state){
      return state.reminders
  },
  getr_webinars(state){
      return state.webinars
  },

}
export const mutations = {}
export const actions = {}
