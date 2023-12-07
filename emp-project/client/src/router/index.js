import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/MainComponent.vue'
import EmpList from '../views/EmpList.vue'
import EmpInfo from '../views/EmpInfo.vue'
import EmpForm from '../views/EmpFormView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/emps',
    name: 'empList',
    component: EmpList
  },
  {
    path: '/empInfo',
    name: 'empInfo',
    component: EmpInfo
  },
  {
    path: '/empForm',
    name: 'empForm',
    component: EmpForm
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
