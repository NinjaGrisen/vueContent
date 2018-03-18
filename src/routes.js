import Home from './components/Home.vue';
import Shirts from './components/shirts/Products.vue';
import Pants from './components/pants/Products.vue';
import Shoes from './components/shoes/Products.vue';
import Product from './components/sharedComponents/Product.vue';

export default [
   { path: '/', component: Home },
   { path: '/shirts', component: Shirts },
   { path: '/pants', component: Pants },
   { path: '/shoes', component: Shoes },
   { path: '/item/:id', component: Product }
   //{ path: '*', redirect: '/'}
]
