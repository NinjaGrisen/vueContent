<template>
  <div class="product-wrapper-single" v-if="product">

  <div 
    class="product-main-single"
    v-bind:style="{'background-image': `url(${productImage})`}">
        <h2>{{product.fields.title}}
          <span>{{product.fields.price | currency}}</span>
        </h2>
    </div>
    <vue-markdown class="product-text">
      {{product.fields.bodyText}}
    </vue-markdown>

    <div class="cheap-products-wrapper" v-if="relatedProducts.length > 0">
      <div v-for="(product, index) in relatedProducts" :key="product.id" class="cheap-products-first" v-if="index == 0">
          <router-link :to="{path:`item/${product.sys.id}`, params: {id: product.sys.id }}" tag="div">
          <div class="cheap-products-first-text">
            <h2>{{product.fields.title}}</h2>
            
          </div>
          <div class="cheap-products-first-image" v-bind:style="{'background-image': `url(${relatedProductImages[index]})`}"></div>
          </router-link>
      </div>
      <div class="cheap-products-last-items">
        <div v-for="(product, index) in relatedProducts" :key="product.id" v-if="index > 0">
            <router-link class="cheap-products" 
              :to="{path:`item/${product.sys.id}`, 
              params: {id: product.sys.id }}" 
              tag="div"
              v-bind:class="{ 'cheap-products--last': index === 2 }">
              <div class="cheap-products-last-items-text">
                <h2>{{product.fields.title}}</h2>
                <span>Show more</span>
              </div>
              <div class="cheap-products-last-items--bg" v-bind:style="{'background-image': `url(${relatedProductImages[index]})`}"></div>
            </router-link>
        </div>
      </div>
    </div>
</div>
  
</template>

<script>
import VueMarkdown from 'vue-markdown';


export default {
  components: {
    VueMarkdown
   },
  watch: {
    $route(to, from) {
      this.setHeaderStyle();
    }
  },
  created() {
    this.getProduct();
    this.setHeaderStyle();
  },
  computed: {
    product() {
      return this.$store.getters.getProduct;
    },
    productImage() {
      return this.$store.getters.getProductImage;
    },
    relatedProducts() {
      console.log(this.$store.getters.getRelatedProducts)
      return this.$store.getters.getRelatedProducts;
    },
    relatedProductImages() {
      return this.$store.getters.getRelatedProductImage
    }
    
  },
   methods: {
     setHeaderStyle() {
      this.$store.commit('layoutMutation', true);
    },
    getProduct() {
      this.$store.dispatch('singleProductMutation', this.$route.params.id);
    }
  }
}
</script>

<style scoped>

.product-wrapper-single {
  width: calc(100% - 242px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  transition: all .25s ease;
}

@media (max-width: 1040px) {
    .product-wrapper-single {
      width: 100%;
    }
  }

.product-text {
  max-width: 810px;
  width: 100%;
  margin: 0 24px;
}

.product-main-single {
  width: 100%;
  background-size: cover;
  background-position: center;
  background-color: white;
  height: 60vh;
  display: flex;
  align-items: center;
  position: relative;
  text-decoration: none;
  color: black;
}

.product-main-single h2 {
  font-size: 5vw;
  margin-left: 12px;
  background: white;
  padding: 0 22px;
  position: relative;
}

.product-main-single h2 span {
  position: absolute;
  background: white;
  padding: 0 24px;
  left: 0;
  top: -83%;
}


.cheap-products-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
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
  background-color: #e2e2e2;
  background-size: cover;
}


@media (max-width: 760px) {
  .cheap-products-wrapper {
    flex-direction: column;
    padding-bottom: 12px;
  }
  .cheap-products-first {
    max-width: calc(100% - 24px);
  }
  .cheap-products-first-image {
    height: 382px;
    background-position: center;
  }

  .cheap-products-last-items {
    flex-direction: row;
    width: 100%;
  }

  .cheap-products-last-items .cheap-products {
    margin-top: 0;

  }
}

</style>
