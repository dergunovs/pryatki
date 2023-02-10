import { createRouter, createWebHistory } from 'vue-router';

import { MAIN_URL } from '@/components/main/constants';
import { MAP_URL } from '@/components/map/constants';
import { CREDITS_URL } from '@/components/credits/constants';
import { SHOP_URL } from '@/components/shop/constants';

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: MAIN_URL, name: 'Main', component: () => import('@/components/main/pages/MainPage.vue') },

    { path: MAP_URL, name: 'Maps', component: () => import('@/components/map/pages/MapsPage.vue') },
    { path: `${MAP_URL}/:id`, name: 'Map', component: () => import('@/components/map/pages/MapPage.vue') },

    { path: CREDITS_URL, name: 'Credits', component: () => import('@/components/credits/pages/CreditsPage.vue') },

    { path: SHOP_URL, name: 'Shop', component: () => import('@/components/shop/pages/ShopPage.vue') },
  ],
});

export default router;
