import { createRouter, createWebHistory } from 'vue-router';

import { MAIN_URL } from '@/main/constants';
import { MAP_URL } from '@/map/constants';
import { CREDITS_URL } from '@/credits/constants';
import { SHOP_URL } from '@/shop/constants';

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: MAIN_URL, name: 'Main', component: () => import('@/main/pages/MainPage.vue') },

    { path: MAP_URL, name: 'Maps', component: () => import('@/map/pages/MapsPage.vue') },
    { path: `${MAP_URL}/:id`, name: 'Map', component: () => import('@/map/pages/MapPage.vue') },

    { path: CREDITS_URL, name: 'Credits', component: () => import('@/credits/pages/CreditsPage.vue') },

    { path: SHOP_URL, name: 'Shop', component: () => import('@/shop/pages/ShopPage.vue') },
  ],
});

export default router;
