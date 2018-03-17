<template>
   <div>
      <!-- <pre>{{shirt}}</pre> -->
      <b>{{shirt.sys.id}}</b>
      <h2>{{shirt.fields.title}}</h2>
      <router-link :to="{path:`shirt/${shirt.sys.id}`, params: {id: shirt.sys.id }}" tag="a">Shirt</router-link>
      <vue-markdown>
         {{shirt.fields.bodyText}}
      </vue-markdown>
      <img :src="shirt.fields.productImage.fields.file.url" :alt="shirt.fields.productImage.fields.title"/>

   </div>
</template>


<script>
import VueMarkdown from 'vue-markdown'

export default {

   props: ['shirt'],
   components: {
      VueMarkdown
   },
}
</script>

<style>
   img {
      border: 1px solid blue;
   }
</style>
