<template>
  <div>
    <h1>Shoes</h1>
    <app-slider v-for="product in products" :key="product.id" :promotion="product"></app-slider>
  </div>
</template>

<script>
import Slider from './sharedComponents/ImageSlider.vue';

export default {
  data() {
    return {
      products: []
    }
  },

  components: {
    appSlider: Slider
  },
  created() {
    this.getProduct('product');
    this.getProduct('shirt');
    this.getProduct('pants');
  },
  methods: {
    getProduct(content_type) {
      const vm = this;

      const contentful = require('contentful');
      const client = contentful.createClient({
        space: 'j0ouvu2ui9to',
        accessToken: 'd5a77f0039560bd9b386c0505de1cd9dbc2b123184fe79beaca51bdde287ef76'
      });
      
      client.getEntries( {
        content_type,
        'fields.promotion': 'true'
        })
        .then((response) => {
          response.items.forEach(element => {
            vm.products.push(element);
            console.log(element);
          });
        });
    }
  }
}
</script>

<style>

</style>