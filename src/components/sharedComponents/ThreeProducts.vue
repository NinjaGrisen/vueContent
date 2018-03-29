<template>
   <div class="cheap-products-wrapper--center">
      <div class="cheap-products-wrapper">
         <div v-for="(product, index) in products" :key="product.id" class="cheap-products-first" v-if="index == 0">
            <router-link :to="{path:`item/${product.sys.id}`, params: {id: product.sys.id }}" tag="div">
               <div class="cheap-products-first-text">
                  <h2>{{product.fields.title}} {{product.id}}</h2>
               </div>
               <div class="cheap-products-first-image" v-bind:style="{'background-image': `url(${product.fields.productImage.fields.file.url})`}"></div>
            </router-link>
         </div>
         <div class="cheap-products-last-items">
            <div v-for="(product, index) in products" :key="product.id" v-if="index > 0">
               <router-link class="cheap-products" 
                  :to="{path:`item/${product.sys.id}`, 
                  params: {id: product.sys.id }}" 
                  tag="div"
                  v-bind:class="{ 'cheap-products--last': index === 2 }">
                  
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
export default {
   props: ["products"]
}
</script>

<style scoped>

.cheap-products-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 66px auto;
  cursor: pointer;
  background: white;
}

.cheap-products-wrapper--center {
   margin: 0 auto;
   width: 100%;
    max-width: 1240px;
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
