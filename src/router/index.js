import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home/home.vue";
import EventDetail from "../components/event-detail/event-detail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/event/:id",
    name: "EventDetail",
    component: EventDetail,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
