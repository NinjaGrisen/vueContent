<template>
   <div>
      <h2>{{shirt.title}}</h2>
      <vue-markdown>
         {{shirt.bodyText}}
      </vue-markdown>
      <img :src="shirt.productImage.fields.file.url" :alt="shirt.productImage.fields.title">
   </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {

   props: ['shirt'],
   components: {
      VueMarkdown
   }
}
</script>

<style>
   img {
      border: 1px solid blue;
   }
</style>
