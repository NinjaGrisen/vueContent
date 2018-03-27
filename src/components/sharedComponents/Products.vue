<template>
   <div>
      <b>{{product.sys.id}}</b>
      <h2>{{product.fields.title}}</h2>
      <router-link :to="{path:`item/${product.sys.id}`, params: {id: product.sys.id }}" tag="a">Visa mer</router-link>
      <vue-markdown>
         {{product.fields.bodyText}}
      </vue-markdown>
      <img :src="product.fields.productImage.fields.file.url" :alt="product.fields.productImage.fields.title"/>

   </div>
</template>


<script>
import VueMarkdown from 'vue-markdown'

export default {

   props: ['product'],
   components: {
      VueMarkdown
   }
}
</script>

<style scoped>

</style>
