import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Main', component: () => import('@/pages/MainPage.vue') },

  { path: '/shop', name: 'Shop', component: () => import('@/pages/ShopPage.vue') },

  { path: '/map', name: 'Maps', component: () => import('@/pages/MapsPage.vue') },
  { path: '/map/:id', name: 'Map', component: () => import('@/pages/MapPage.vue') },
];
