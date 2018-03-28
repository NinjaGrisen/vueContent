import Home from './components/Home.vue';
import Products from './components/sharedComponents/Products.vue';
import Product from './components/sharedComponents/Product.vue';

export default [
   { path: '/', component: Home },
   { path: '/shirts', component: Products },
   { path: '/pants', component: Products },
   { path: '/shoes', component: Products },
   { path: '/item/:id', component: Product }
   //{ path: '*', redirect: '/'}
]
