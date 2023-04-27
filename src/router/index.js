import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/auth'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AgregarView from '../views/AgregarView.vue'
import ActualizarView from '../views/ActualizarView.vue'

const requireAuth = async(to, from, next) => {
  const storeUser = useUserStore()

  storeUser.loadingSession = true;

  const user = await storeUser.currentUser()
  if(user){
    next()
  }else{
    next('/')
  }
  storeUser.loadingSession = false
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      beforeEnter: requireAuth
    },
    {
      path: '/agregar',
      name: 'agregar',
      component: AgregarView,
      beforeEnter: requireAuth
    },
    {
      path: '/actualizar/:id',
      name: 'actualizar',
      component: ActualizarView,
      beforeEnter: requireAuth
    },
  ]
})

export default router
