import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/pages/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    component: () => import('@/pages/profile/index.vue'),
    children: [
      {
        path: ':id',
        component: () => import('@/pages/profile/id.vue'),
      },
    ],
  },
  {
    path: '/follow',
    component: () => import('@/pages/follow/index.vue'),
  },
  {
    path: '/register',
    component: () => import('@/pages/register.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login.vue'),
  },
  {
    path: '/google/callback',
    component: () => import('@/pages/google/callback.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'Home',
    },
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
