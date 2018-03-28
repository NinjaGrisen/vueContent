<template>
  <div>
    <h1>Shoe</h1>
    <div v-for="product in products" :key="product.id">
        <b>{{product.sys.id}}</b>
        <h2>{{product.fields.title}}</h2>
        <router-link :to="{path:`item/${product.sys.id}`, params: {id: product.sys.id }}" tag="a">Visa mer</router-link>
        <vue-markdown>
          {{product.fields.bodyText}}
        </vue-markdown>
        <img :src="product.fields.productImage.fields.file.url" :alt="product.fields.productImage.fields.title"/>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  components: {
      VueMarkdown
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    }
  },
  created() {
    this.setContentType();
  },
  watch: {
    $route(to, from) {
      this.setContentType();
    }
  },
  methods: {
    setContentType() {
      let query = this.$route.path
        .replace("/", "")
        .trim()
        .substring(0, this.$route.path.length - 2);
      if (query === "shoe") {
        query = "product";
      }
      if (query === "pant") {
        query = "pants";
      }
      this.getProducts(query);
    },
    getProducts(content_type) {
      this.$store.commit("productMutation", { content_type });
    }
  }
};
</script>

<style>

</style>
