<template>
  <div>
      <nav v-bind:class="[headerLayout ? 'product-nav' : '', activeHeader ? 'product-nav--active' : '']">
      <router-link to="/" tag="a">Brand</router-link>
      <router-link to="/shirts" activeClass="active" tag="a">Shirts</router-link>
      <router-link to="/pants" activeClass="active" tag="a">Pants</router-link>  
      <router-link to="/shoes" activeClass="active" tag="a">Shoes</router-link>  
    </nav>
    <div v-on:click="activeHeader = !activeHeader"
        v-bind:class="headerLayout ? '' : 'hidden'" class="toggle-menu">Toggle</div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      activeHeader: false
    }
  },
  computed: {
    headerLayout() {
      return this.$store.getters.getSidemenu;
    }
  },
  watch: {
    $route(to, from) {
      this.activeHeader = false
    }
  }
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
    text-align: center;
    z-index: 99;
    transition: all .25s ease;
  }
  .hidden {
    display: none !important;
  }
  @media (max-width: 1040px) {
    .product-nav {
      transform: translateX(100%);
    }

    .product-nav--active {
      transform: translateX(0%);
    }
  }

  .toggle-menu {
    display: none;
  }
  
  @media (max-width: 1040px) {
    .toggle-menu {
      display: block;
      position: fixed;
      right: 12px;
      top: 12px;
      cursor: pointer;
      z-index: 999;
    }
  }
  

  .product-nav a {
    margin: 32px auto;
    line-height: 25px;
    font-size: 18px;
  }
  
</style>