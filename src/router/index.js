import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/index.vue";
import useCases from "../views/useCases/index.vue";
import Docs from "../views/Docs/index.vue";
import EventHub from "../views/EventHub/index.vue";
import GettingStarted from "../views/GettingStarted/index.vue";
import howItWorks from "../views/HowItWorks/index.vue";
import Blog from "../views/Blog/blog.vue";
import BlogDescription from "../views/BlogDescription/BlogDescription.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/useCases",
      name: "useCases",
      component: useCases,
    },
    {
      path: "/Docs",
      name: "Documentation",
      component: Docs,
    },
    {
      path: "/EventHub",
      name: "EventHub",
      component: EventHub,
    },
    {
      path: "/GettingStarted",
      name: "GettingStarted",
      component: GettingStarted,
    },
    {
      path: "/howItWorks",
      name: "howItWorks",
      component: howItWorks,
    },
    {
      path: "/Blog",
      name: "Blog",
      component: Blog,
    },
    {
      path: "/Blog/:id",
      name: "Blog Description",
      component: BlogDescription,
    },
  ],
});

export default router;
