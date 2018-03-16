<template>
  <div>
    <h1>Shirts</h1>
    <app-product v-for="shirt in shirts" :key="shirt.id" :shirt="shirt"></app-product>
  </div>
</template>

<script>
import Product from '../sharedComponents/Products.vue';

export default {
  data() {
    return {
      shirts: []
    }
  },

  components: {
    appProduct: Product
  },
  beforeCreated() {
    console.log('beforeCreated')
  },
  created() {
    this.getShirts();
  },
  methods: {
    getShirts() {
        let test = [];
        const vm = this;

        const contentful = require('contentful');
        const client = contentful.createClient({
          space: 'j0ouvu2ui9to',
          accessToken: 'd5a77f0039560bd9b386c0505de1cd9dbc2b123184fe79beaca51bdde287ef76'
        });
        /*
          Working
        */
          client.getEntries( {
            'content_type': 'shirt'
          }).then((response) => {
            response.items.forEach(element => {
              console.log(element.fields)
              vm.shirts.push(element.fields)
            });
          });

        /* Images */
        // client.getAssets()
        // .then((response) => console.log(response.items))
        // .catch(console.error)
    }
  }
}
</script>

<style>

</style>
