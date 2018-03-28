<template>
  <div class="product-wrapper">
    <div v-for="(product, index) in products" 
      v-bind:class="{ 'product-main': index == 0 }"
        :key="product.id"
        v-if="index == 0"
        v-bind:style="{'background-image': `url(${product.fields.productImage.fields.file.url})`}">
        <router-link :to="{path:`item/${product.sys.id}`, params: {id: product.sys.id }}" tag="a">
        <h2>{{product.fields.title}}
          <span>{{product.fields.price | currency}}</span>
        </h2>
        <span class="show-more">Show more</span>
        </router-link>
    </div>
    <div class="cheap-products-wrapper">
      <div v-for="(product, index) in products" :key="product.id" class="cheap-products-first" v-if="index == 1">
          <router-link :to="{path:`./item/${product.sys.id}`, params: {id: product.sys.id }}" tag="div">
          <div class="cheap-products-first-text">
            <h2>{{product.fields.title}} {{product.id}}</h2>
            
          </div>
          <div class="cheap-products-first-image" v-bind:style="{'background-image': `url(${product.fields.productImage.fields.file.url})`}"></div>
          </router-link>
      </div>
      <div class="cheap-products-last-items">
        <div v-for="(product, index) in products" :key="product.id" v-if="index > 1">
            <router-link class="cheap-products" 
              :to="{path:`./item/${product.sys.id}`, 
              params: {id: product.sys.id }}" 
              tag="div"
              v-bind:class="{ 'cheap-products--last': index === 3 }">
              <div class="cheap-products-last-items-text">
                <h2>{{product.fields.title}} {{product.id}}</h2>
                <span>Show more</span>
              </div>
              <div class="cheap-products-last-items--bg" v-bind:style="{'background-image': `url(${product.fields.productImage.fields.file.url})`}"></div>
            </router-link>
        </div>
      </div>
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
  width: calc(100vw - 259px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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

.cheap-products-wrapper {
  display: flex;
  flex-direction: row;
  width: 100vw;
  max-width: 1240px;
  margin: 66px auto;
  cursor: pointer;
  background: white;
}

.cheap-products-wrapper img {
  width: 100%;
}

.cheap-products-last-items {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 300px;
}

.cheap-products-last-items-text {
  flex-grow: 1;
  text-align: center;
}

.cheap-products-last-items .cheap-products{
  width: calc(100% - 24px);
  margin: 12px;
  background-color: #e2e2e2;
  display: flex;
  align-items: center;
  min-height: 300px;
}

.cheap-products-last-items .cheap-products--last {
  background-color: #f9dddd;
  margin-top: 0;
}

.cheap-products-last-items .cheap-products:hover span  {
  border-bottom: 2px solid black;
}

.cheap-products-last-items--bg {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 200px;
  width: 50%;
  width: 146px;
  border: 12px solid white;
  margin-right: 31px;
      
}

.cheap-products-first {
  max-width: calc(50% - 12px);
  flex-grow: 1;
  position: relative;
  margin: 12px 0 12px 12px;
}

.cheap-products-first-text {
    position: absolute;
    width: calc(100% - 24px);
    background: white;
    text-align: center;
    left: 12px;
    bottom: 12px;
}

.cheap-products-first-image{
  height: 612px;
  background-size: cover;
  background-color: #e2e2e2;
}
    
    
    
    
</style>
