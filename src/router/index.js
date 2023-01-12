/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-08 17:27:54
 * @LastEditTime: 2023-01-12 14:37:32
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \bitwarden_data_de_duplication\src\router\index.js
 */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/duplicate",
      name: "duplicate",
      component: () => import("../views/DuplicateView.vue"),
    },
    {
      path: "/folder",
      name: "folder",
      component: () => import("../views/FolderView.vue"),
    },
  ],
});

export default router;
