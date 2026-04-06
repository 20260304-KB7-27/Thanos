import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/student',
      component: () => import('@/pages/DonghyeonPage.vue'),
    },
  ],
});

export default router;
