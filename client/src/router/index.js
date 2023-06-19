import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignUpView.vue'
import DetailView from '../views/DetailView.vue'
import BookmarkView from '../views/BookmarkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/bookmark',
      name: 'bookmark',
      component: BookmarkView
    },
    {
      path: '/articles/:id',
      name: 'detail',
      component: DetailView
    },
  ]
})

router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.getItem('access_token')
  if (!isAuthenticated && to.name == 'bookmark') next({ name: 'login' })
  if (isAuthenticated && to.name == 'login') next({ name: 'home' })
  if (isAuthenticated && to.name == 'signup') next({ name: 'home' })
  else next()
})

export default router
