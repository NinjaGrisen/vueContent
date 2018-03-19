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
        background: #ebeae5;
        margin: 0;
    }
</style>
