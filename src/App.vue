<template>
    <div class="container" v-bind:class="{ 'product-nav-body': headerLayout }">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
// https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/existence
    import Header from './components/Header.vue';
    export default {
        components: {
            appHeader: Header
        },
        computed: {
            headerLayout() {
            return this.$store.getters.getSidemenu;
            }
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Raleway:900');
    @import url('https://fonts.googleapis.com/css?family=Mukta+Vaani:400,700');
    *,
    *:after,
    *:before {
        box-sizing: border-box;
        font-family: 'Mukta Vaani', sans-serif;

    }

    body {
        min-height: 100vh;
        margin: 0;
        background: #f9f9f9;
    }

    .product-nav-body {
        display: flex;
        flex-direction: row;
    }
</style>
