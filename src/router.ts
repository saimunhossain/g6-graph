import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/",
    name: "large-graph",
    component: () => import("./components/LargeGraphData.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
