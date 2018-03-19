<template>
  <div>
    <div class="header__wrapper">
      <h1>{{title}}</h1>
    </div>
    <div class="slider__wrapper">
      <app-slider v-on:changeTitle="updateTitle($event)"
        v-for="product in products" :key="product.id" :promotion="product"></app-slider>
    </div>
  </div>
</template>

<script>
import Slider from './sharedComponents/ImageSlider.vue';

export default {
  data() {
    return {
      products: [],
      title: ''
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
    updateTitle(e) {
      this.title = e;
    },
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
          });
        });
    }
  }
}
</script>

<style scoped>
  h1 {
    position: absolute;
    right: 70px;
    font-size: 5rem;
    top: -71px;
    font-family: 'Raleway', sans-serif;
    color: #ebeae5;
    text-shadow: 3px -1px 5px rgba(0,0,0,.2);
  }
  .header__wrapper {
    position: relative;
    width: 100%;
    height: 50px;
  }
  .slider__wrapper {
    display: flex;
    flex-direction: row;
  }
</style>