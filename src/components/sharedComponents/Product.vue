<template>
  <div>
     <h2>{{ shirt.title }}</h2>
     <!-- <h2>{{shirt.fields.title}}</h2>
      <img :src="shirt.fields.productImage.fields.file.url" :alt="shirt.fields.productImage.fields.title"/>
 -->
     <vue-markdown>
         {{shirt.bodyText}}
      </vue-markdown>
     
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
   data() {
      return {
         shirt: {
            title: '',
            bodyText: '',
            url: '',
            imgTitle: ''
         }
      }
   },
   components: {
      VueMarkdown
   },
   created() {
    this.getEnity();
  },
   methods: {
      getEnity() {
         const vm = this;
         const contentful = require('contentful');
         const client = contentful.createClient({
            space: 'j0ouvu2ui9to',
            accessToken: 'd5a77f0039560bd9b386c0505de1cd9dbc2b123184fe79beaca51bdde287ef76'
         });
         
         client.getEntry(vm.$route.params.id)
            .then(function (shirt) {
            vm.shirt.title = shirt.fields.title;
            vm.shirt.bodyText = shirt.fields.bodyText;
            console.log(vm.shirt);
        })
      }
   }
}
</script>

<style>

</style>
