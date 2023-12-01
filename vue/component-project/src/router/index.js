import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import ListBinding from '../views/ListBinding.vue'
import IFBinding from '../views/IFBinding.vue'
import OnEvent from '../views/OnEvent.vue'
import Options from '../views/Options.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dataBinding',
    name: 'dataBinding',
    component: DataBinding    
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/listBinding',
    name: 'listBinding',
    component: ListBinding    
  },
  {
    path: '/ifBinding',
    name: 'ifBinding',
    component: IFBinding    
  },
  {
    path: '/onEvent',
    name: 'onEvent',
    component: OnEvent    
  },
  {
    path: '/options',
    name: 'options',
    component: Options    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
