<template>
   <div  v-touch:swipe.left="swipeLeftHandler"
         v-touch:swipe.right="swipeRightHandler">
      <h2>{{promotion.fields.title}}</h2>
      <router-link :to="{path:`item/${promotion.sys.id}`, params: {id: promotion.sys.id }}" tag="a">Visa mer</router-link>
      <vue-markdown>
         {{promotion.fields.bodyText}}
      </vue-markdown>
      <img :src="promotion.fields.productImage.fields.file.url" :alt="promotion.fields.productImage.fields.title"/>

   </div>
</template>


<script>
import VueMarkdown from 'vue-markdown'

export default {

   props: ['promotion'],
   components: {
      VueMarkdown
   },
   methods: {
      swipeLeftHandler() {
         console.log('swipe Left');
      },
      swipeRightHandler() {
         console.log('swipe Right');
      }
   }
}
</script>

<style scoped>
   img {
      border: 1px solid blue;
   }
</style>
