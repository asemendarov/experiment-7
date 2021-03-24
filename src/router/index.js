import Vue from "vue";
import VueRouter from "vue-router";

import SearchPage from "@/views/SearchPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/search",
    name: "Search",
    component: SearchPage
  },
  {
    path: "*",
    redirect: { name: "Search" }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
