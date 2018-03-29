<template>
  <div class="product-wrapper">
    <div v-if="firstProduct" class="product-main" v-bind:style="{'background-image': `url(${firstProduct.fields.productImage.fields.file.url})`}">
        <router-link :to="{path:`item/${firstProduct.sys.id}`, params: {id: firstProduct.sys.id }}" tag="a">
        <h2>{{firstProduct.fields.title}}
          <span>{{firstProduct.fields.price | currency}}</span>
        </h2>
        <span class="show-more">Show more</span>
        </router-link>
    </div>
    <app-triss :products="products"></app-triss> 
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import Triss from "./ThreeProducts.vue";

export default {
  components: {
      VueMarkdown,
      appTriss: Triss
  },
  computed: {
    products() {
      let products = [];
      for(var i = 0; i < this.$store.getters.getProducts.length; i++) {
        if(i != 0) {
          products.push(this.$store.getters.getProducts[i]);
        }
      }
      return products;
    },
    firstProduct() {
      return this.$store.getters.getProducts[0];
    }
  },
  created() {
    this.setContentType();
    this.setHeaderStyle();
  },
  watch: {
    $route(to, from) {
      this.setContentType();
      this.setHeaderStyle();
    }
  },
  methods: {
    setHeaderStyle() {
     this.$store.commit('layoutMutation', true);
    },
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
      this.$store.dispatch('productMutation', {content_type});
    }
  }
};
</script>

<style scoped>

.product-wrapper {
  width: calc(100% - 242px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

@media (max-width: 1040px) {
    .product-wrapper {
      width: 100%;
    }
  }

.product-main {
  width: 100%;
  background-size: cover;
  background-position: center;
  background-color: white;
}
.product-main a{
  height: 60vh;
  display: flex;
  align-items: center;
  position: relative;
  text-decoration: none;
  color: black;
}

.product-main h2 {
  font-size: 5vw;
  margin-left: 12px;
  background: white;
  padding: 0 22px;
  position: relative;
}

.product-main h2 span {
  position: absolute;
  background: white;
  padding: 0 24px;
  left: 0;
  top: -83%;
}

.product-main a .show-more {
  position: absolute;
  bottom: 33px;
  left: 50%;
  transform: translateX(-50%);
  color: black;
  text-decoration: none;
  font-weight: bold;
  background: #ffffff59;
  padding: 2px 6px;
  
}

.product-main:hover a .show-more {
  padding-bottom: 0;
  border-bottom: 2px solid black;
} 
    
</style>
