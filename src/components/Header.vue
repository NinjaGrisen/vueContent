<template>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header" >
      <router-link to="/" class="navbar-brand">Brand</router-link>
      <a class="navbar-brand" href="#"></a>
    </div>

    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <router-link to="/shirts" activeClass="active" tag="li"><a>shirts</a></router-link>
        <router-link to="/pants" activeClass="active" tag="li"><a>pants</a></router-link>  
        <router-link to="/shoes" activeClass="active" tag="li"><a>shoes</a></router-link>  
               
      </ul>
     
    </div>
  </div>
</nav>
</template>

<script>
export default {
  
};
</script>

<style>

</style>
