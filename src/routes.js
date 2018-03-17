import Home from './components/Home.vue';
import Shirts from './components/shirts/Products.vue';
import Stocks from './components/stocks/Stocks.vue';
import Product from './components/sharedComponents/Product.vue';

export default [
   { path: '/', component: Home },
   { path: '/shirts', component: Shirts },
   { path: '/shirt/:id', component: Product },
   { path: '/stocks', component: Stocks},
   //{ path: '*', redirect: '/'}
]
