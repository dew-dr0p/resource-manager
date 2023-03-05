import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterStaff from '@/views/RegisterStaff.vue'
import RegisterStudent from '@/views/RegisterStudent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register_staff',
      name: 'register staff',
      component: RegisterStaff
    },
    {
      path: '/register_student',
      name: 'register student',
      component: RegisterStudent
    },
    // {
    //   path: '/accounts/:user/',
    //   name: 'register student',
    //   component: RegisterStudent
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
