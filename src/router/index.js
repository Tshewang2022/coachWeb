import { createRouter, createWebHistory } from 'vue-router'
import CoachesList from '@/pages/coaches/CoachesList.vue'
import CoachDetails from '@/pages/coaches/CoachDetails.vue'
import ContactCoach from '@/pages/requests/ContactCoach.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/coaches'},
    {
      path: '/coaches',
      component: CoachesList
    },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      children: {
        name: 'contact', path: 'contact', component: ContactCoach
      }
    }
  ]
})

export default router
