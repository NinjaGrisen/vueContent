<template>
  <div>
    <h1>Stocks stocks</h1>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
  components: {
    appStock: Stock
  },
}
</script>

<style>

</style>
