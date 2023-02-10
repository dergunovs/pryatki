import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Main', component: () => import('@/components/main/pages/MainPage.vue') },

  { path: '/shop', name: 'Shop', component: () => import('@/components/shop/pages/ShopPage.vue') },

  { path: '/map', name: 'Maps', component: () => import('@/components/map/pages/MapsPage.vue') },
  { path: '/map/:id', name: 'Map', component: () => import('@/components/map/pages/MapPage.vue') },

  { path: '/credits', name: 'Credits', component: () => import('@/components/credits/pages/CreditsPage.vue') },
];
