<template>
      <div class="slider__image"
            @mouseenter="mouseOver"
            @mouseleave="mouseOut"
            v-bind:style="{background: promotion.fields.promoBgColor, color: promotion.fields.promoBgColor }">
            
            <h2>{{promotion.fields.title}}</h2>
            <img :src="promotion.fields.productImage.fields.file.url" :alt="promotion.fields.productImage.fields.title"/>
            <button @click="goTo(`item/${promotion.sys.id}`)">Visa produkt</button>
      </div>
</template>


<script>
import VueMarkdown from 'vue-markdown'

export default {

   props: ['promotion'],
   components: {
      VueMarkdown
   },
   methods: {
      goTo(url) {
            window.location.replace(url);
      },
      mouseOut(e) {
            this.$emit('changeTitle', '');
            const promotions = e.target.parentElement.children;
            Array.from(promotions).forEach(function(item, id) {

                  if(item.classList.contains('slider__image--bigger')) {
                        item.classList.remove('slider__image--bigger')
                  } else if(item.classList.contains('slider__image--smaller')) {
                        item.classList.remove('slider__image--smaller')
                  }
            });
      },
      mouseOver(e) {
            this.$emit('event_child', 1);

            const vm = this;
            const promotions = e.target.parentElement.children;
            let promotionIndex = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);
            Array.from(promotions).forEach((item, id) => {
                  if(id == promotionIndex) {
                        vm.$emit('changeTitle', e.target.childNodes[0].outerText);
                        item.classList.add('slider__image--bigger');
                  } else {
                        item.classList.add('slider__image--smaller');
                  }
            });

      }
   }
}
</script>

<style scoped>
   h2 {
      width: 60vw;
      position: absolute;
      opacity: 0;
      font-size: 2rem;
      font-family: 'Raleway', sans-serif;
   }

   button {
      position: absolute;
      opacity: 0;
      right: 24px;
      bottom: 24px;
      width: 100px;
      height: 43px;
      background: white;
      border: none;
      box-shadow: 2px 2px 10px rgba(0,0,0,.2);
   }
   
   .slider__image {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 25vw;
      overflow: hidden;
      padding: 12px;
      transition: all .25s ease;
   }

   .slider__image--smaller {
         width: 8vw;
   }

   .slider__image--bigger {
         width: 80vw;
         position: relative;
   }

   .slider__image--bigger:after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 25px;
      height: 100%;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, .2));
   }

   .slider__image--bigger h2 {
         opacity: 1;
         display: block;
   }

   .slider__image--bigger button {
         opacity: 1;
   }

   img {
      width: 60vw;      
   }
</style>
