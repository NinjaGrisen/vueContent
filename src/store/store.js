import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const contentful = require('contentful');
const client = contentful.createClient({
   space: 'j0ouvu2ui9to',
   accessToken: 'd5a77f0039560bd9b386c0505de1cd9dbc2b123184fe79beaca51bdde287ef76'
});

export default new Vuex.Store( {
   //stored data all over the applications
   state: {
      asyncInfo: {
         getInfoAsyncPending: true,
         getInfoAsyncPromotionPending: true,
         getAsyncData: [],
         getPromotionAsyncData: []
      }
   },
   mutations: {
      promotionMutation(state, payload) {
         client.getEntries(payload)
            .then((response) => {
               state.asyncInfo.getPromotionAsyncData = [];
               state.asyncInfo.getInfoAsyncPromotionPending = false; 
               response.items.forEach(element => {
                  state.asyncInfo.getPromotionAsyncData.push(element);
            });
         });
      },
      productMutation(state, payload) {
         state.asyncInfo.getAsyncData = [];

         let content_type = payload;
         
         if(Array.isArray(payload)) {
            content_type = payload[0];
         }

         client.getEntries(content_type)
            .then((response) => {
               state.asyncInfo.getInfoAsyncPending = false; 
               response.items.forEach(element => {
                  state.asyncInfo.getAsyncData.push(element);
            });
         });
      }
   },
   actions: {},
   getters: {
      getPromotions(state) {
         return state.asyncInfo.getPromotionAsyncData;
      },
      getPending(state) {
         return state.asyncInfo.getInfoAsyncPromotionPending;
      },
      getProducts(state) {
         return state.asyncInfo.getAsyncData;
      }
   }
})