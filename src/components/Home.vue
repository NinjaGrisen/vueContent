<template>
  <div>
    <div class="header__wrapper">
      <h1>{{title}}</h1>
    </div>
    <pre>{{test}}</pre>
    
    <!-- 
      fix pending in the future
      <p>{{pendingState}}</p>
    -->
    <div class="slider__wrapper">
        <app-slider v-on:changeTitle="updateTitle($event)"
          v-for="promotion in promotions" :key="promotion.id" :promotion="promotion"></app-slider>
    </div>

    <app-triss :products="products"></app-triss>
  </div>
</template>

<script>
import Slider from "./sharedComponents/ImageSlider.vue";
import Triss from "./sharedComponents/ThreeProducts.vue";
export default {
  data() {
    return {
      title: "Populära skor"
    };
  },
  components: {
    appSlider: Slider,
    appTriss: Triss
  },
  watch: {
    $route(to, from) {
      this.setHeaderStyle();
    }
  },
  created() {
    this.getProduct("shirt");
    this.getProduct("pants");
    this.promotionMutation("product");
    this.setHeaderStyle();
  },
  computed: {
    promotions() {
      return this.$store.getters.getPromotions;
    },
    pendingState() {
      //console.log('fix pending in the future')
    },
    products() {
      return this.$store.getters.getProducts;
    }
  },
  methods: {
    setHeaderStyle() {
      this.$store.commit("layoutMutation", false);
    },
    updateTitle(title) {
      this.title = title;
    },
    promotionMutation(content_type) {
      this.$store.dispatch("promotionMutation", {
        content_type,
        "fields.promotion": true
      });
    },
    getProduct(content_type) {
      this.$store.dispatch("productMutation", {
        content_type,
        "fields.priceInt[lte]": 400,
        order: "sys.createdAt"
      });
    }
  }
};
</script>

<style scoped>
h1 {
  position: absolute;
  right: 70px;
  font-size: 5rem;
  top: 0;
  font-family: "Raleway", sans-serif;
  color: #f9f9f9;
  width: 100%;
  text-align: right;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
}
.header__wrapper {
  position: relative;
  width: 100%;
  height: 50px;
}
.slider__wrapper {
  display: flex;
  flex-direction: row;
  margin-top: 100px;
}


</style>