import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Home.vue'),
    },
    {
      path: '/about',
      component: () => import('@/pages/About.vue'),
    },
    {
      path: '/rules',
      component: () => import('@/pages/Rules.vue'),
    },
  ],
});

export default router;
