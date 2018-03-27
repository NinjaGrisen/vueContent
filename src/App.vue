<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
// https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/existence
    import Header from './components/Header.vue';
    export default {
        components: {
            appHeader: Header
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Raleway:900');

    *,
    *:after,
    *:before {
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        margin: 0;
        background: #f9f9f9;
    }
</style>
