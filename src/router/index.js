import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/main-page/MainPage';
import DonatePage from '../components/donate-page/DonatePage'


const routes = [
  {
    path: '/',
    alias: '/main',
    name: 'main',
    component: MainPage
  },
  {
    path: '/donate',
    name: 'donate',
    component: DonatePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
