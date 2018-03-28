<template>
  <nav v-bind:class="{ 'product-nav': headerLayout }">
    <router-link to="/" tag="a">Brand</router-link>
    <router-link to="/shirts" activeClass="active" tag="a">Shirts</router-link>
    <router-link to="/pants" activeClass="active" tag="a">Pants</router-link>  
    <router-link to="/shoes" activeClass="active" tag="a">Shoes</router-link>  
               
</nav>
</template>

<script>
export default {
  computed: {
    headerLayout() {
      return this.$store.getters.getSidemenu;
    }
  },
};
</script>

<style scoped>
  nav {
    height: 50px;
    line-height: 50px;
    padding-right: 15px;
    text-align: right;
  }

  a {
    margin-right: 15px;
    color: black;
    text-decoration: none;
    padding-bottom: 2px;
  }

  a.active,
  a:hover {
    padding-bottom: 0;
    border-bottom: 2px solid black;
  }

  .product-nav {
    order: 2;
    height: 100vh;
    background: #f9f9f9;
    position: fixed;
    right: 0;
    border-left: 1px solid #d8d8d8;
    display: flex;
    flex-direction: column;
    width: 242px;
    text-align: flex-start;
  }

  .product-nav a {
    margin: 32px auto;
    line-height: 25px;
    font-size: 18px;
  }
  
</style>