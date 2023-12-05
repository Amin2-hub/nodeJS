
import { createApp } from 'vue'
import App from './App.vue'
import mixin from './mixin.js'
import store from './store.js'
//전역에서 mixin 사용가능하게 선언
createApp(App)
.use(store)
.mixin(mixin)
.directive('focus', {
   mounted(el, binding, vnode, prevNode){
      console.log('mounted',el, binding, vnode, prevNode);
      if(binding.value){
         el.style.color='gray';
      }else{
         el.style.color='black';
      }
   },
   updated(el, binding, vnode, prevNode){
      console.log('updated',el, binding, vnode, prevNode);
      if(binding.value){
         // el.focus();
         el.style.color='gray';
      }else{
         el.style.color='black';
      }
      
   }
})
.mount('#app')
