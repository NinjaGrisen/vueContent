<template>
  <div>
    <vue-markdown v-if="shirt.bodyText[0]">
      {{shirt.bodyText[0].bodyText}}
    </vue-markdown>
    <h2>{{ shirt.title }}</h2>
    <img :src="shirt.imgUrl"/> 
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
   data() {
      return {
         shirt: {
            title: null,
            bodyText: [],
            url: null,
            id: null,
            imgUrl: null,
            imgTitle: null
         },
         test: []
      }
   },
   components: {
      VueMarkdown
   },
   beforeMount() {
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
            vm.shirt.bodyText.push(shirt.fields);
            vm.shirt.id = shirt.fields.productImage.sys.id;

          })
          .then((res) => {
            client.getAsset(vm.shirt.id)
              .then((asset) => {
                vm.shirt.imgUrl = asset.fields.file.url;
              })
              .catch(console.error)
          });  
      }
   }
}
</script>

<style>

</style>
