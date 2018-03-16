import Home from './components/Home.vue';
import Shirts from './components/shirts/Products.vue';
import Stocks from './components/stocks/Stocks.vue';

export default [
   { path: '/', component: Home },
   { path: '/shirts', component: Shirts },
   { path: '/stocks', component: Stocks}
]