<template>
  <nav>
    <router-link to="/" tag="a">Brand</router-link>
    <router-link to="/shirts" activeClass="active" tag="a">Shirts</router-link>
    <router-link to="/pants" activeClass="active" tag="a">Pants</router-link>  
    <router-link to="/shoes" activeClass="active" tag="a">Shoes</router-link>  
               
</nav>
</template>

<script>
export default {
  
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
  }

  a.active {
    color: white;
  }
  
</style>