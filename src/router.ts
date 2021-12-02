import { createRouter, createWebHistory } from 'vue-router'

import { Pazuzu } from '@/pages/'

const routes = [
  {
    path: '/',
    component: Pazuzu,
    meta: {
      title: 'Pazuzu',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
