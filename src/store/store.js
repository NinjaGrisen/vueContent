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
         getPromotionAsyncData: [],
         getSingleProduct: null,
         getSingleProductImage: null,
         getSingleProductRelatedProducts: [],
         getSingleProductRelatedProductsImages: []
      },
      layout: {
            sideMenu: false
      }
   },
   mutations: {
      layoutMutation(state, payload) {
            state.layout.sideMenu = false;
            
            if(payload) {
                  state.layout.sideMenu = payload;
            } else {
                  state.layout.sideMenu = false;
            }
            console.log(payload, 'from store')
      },
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
      singleProductMutation(state, payload) {
            let shirtId = null;
            let relatedProducts = null;
            let respons;
            state.asyncInfo.getSingleProductImage = null;
            client.getEntry(payload)
                  .then(function (shirt) {
                        state.asyncInfo.getSingleProduct = shirt
                        shirtId = shirt.fields.productImage.sys.id;
                        relatedProducts = shirt.fields.liknandeProdukter;
                  })
                  .then((res) => {
                        client.getAsset(shirtId)
                        .then((asset) => {
                              state.asyncInfo.getSingleProductImage = null;
                              state.asyncInfo.getSingleProductImage = asset.fields.file.url;
                  })
                  .then((res) => {
                        for(let i = 0; i < relatedProducts.length; i++) {
                              client.getEntry(relatedProducts[i].sys.id)
                              .then((res) => {
                                    respons = res;
                                    state.asyncInfo.getSingleProductRelatedProducts.push(res)
                              })
                              .then((res) => {
                                    console.log(respons.fields.productImage.sys.id)

                                    client.getAsset(respons.fields.productImage.sys.id)
                                    .then((res) => {
                                          state.asyncInfo.getSingleProductRelatedProductsImages.push(res.fields.file.url)
                                    })
                              })

                        }
                  })
                  .catch(console.error)
            }); 

      },
      productMutation(state, payload) {
         state.asyncInfo.getAsyncData = [];

         client.getEntries(payload)
            .then((response) => {
               state.asyncInfo.getInfoAsyncPending = false; 
               response.items.forEach(element => {
                  state.asyncInfo.getAsyncData.push(element);
            });
         });
      }
   },
   actions: {
      promotionMutation(context, payload) {
            context.commit('promotionMutation', payload)
      },
      productMutation(context, payload) {
            context.commit('productMutation', payload)
      },
      singleProductMutation(context, payload) {
            context.commit('singleProductMutation', payload)
      }
   },
   getters: {
      getSidemenu(state) {
            return state.layout.sideMenu;
      },
      getPromotions(state) {
         return state.asyncInfo.getPromotionAsyncData;
      },
      getPending(state) {
         return state.asyncInfo.getInfoAsyncPromotionPending;
      },
      getProducts(state) {
         return state.asyncInfo.getAsyncData;
      },
      getProduct(state) {
            return state.asyncInfo.getSingleProduct;
      },
      getProductImage(state) {
            return state.asyncInfo.getSingleProductImage;
      },
      getRelatedProducts(state) {
            return state.asyncInfo.getSingleProductRelatedProducts;
      },
      getRelatedProductImage(state) {
            return state.asyncInfo.getSingleProductRelatedProductsImages;
      }
   }
})