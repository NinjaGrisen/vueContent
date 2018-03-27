<template>
  <div>
    <h1>Pants</h1>
    <app-product v-for="product in products" :key="product.id" :product="product"></app-product>
  </div>
</template>

<script>
import Product from '../sharedComponents/Products.vue';

export default {
  components: {
    appProduct: Product
  },
  computed: {
    products() {
      console.log('pants')
      return this.$store.getters.getProducts;
    }
  },
  created() {
    this.getProducts('pants');
  },
  methods: {
    
    getProducts(content_type) {
      this.$store.commit('productMutation', {content_type});
    }
  }
}
</script>

<style>

</style>
