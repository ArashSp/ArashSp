import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/index.vue";
import useCases from "../views/useCases/index.vue";
import Docs from "../views/Docs/index.vue";
import EventHub from "../views/EventHub/index.vue";
import GettingStarted from "../views/Docs/Overview/gettingStarted.vue";
import DocsOverview from "../views/Docs/Overview/index.vue";
import ArchitectureOverview from "@/views/Docs/Overview/architectureOverview.vue";
import APIDocumentation from "../views/Docs/Overview/apiDocumentation.vue";
import DeveloperPortal from "@/views/Docs/DeveloperPortal/index.vue";
import APIManagement from "@/views/Docs/APIManagement/index.vue";
import SubscriptionManagement from "@/views/Docs/SubscriptionManagement/index.vue";
import TrafficManagement from "@/views/Docs/TrafficManagement/index.vue";
import Security from "@/views/Docs/Security/index.vue";
import Administration from "@/views/Docs/Administration/index.vue";
import ReleaseNotes from "@/views/Docs/Overview/releaseNotes.vue";
import howItWorks from "../views/HowItWorks/index.vue";
import Blog from "../views/Blog/blog.vue";
import BlogDescription from "../views/BlogDescription/BlogDescription.vue";
//import webhookieShellScript from "../scripts/webhookie.zip";

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
       path: "/Docs/Overview",
       name: "Overview",
       component: DocsOverview,
    },
    {
      path: "/Docs/ArchitectureOverview",
      name: "ArchitectureOverview",
      component: ArchitectureOverview,
    },
    {
      path: "/Docs/APIDocumentation",
      name: "APIDocumentation",
      component: APIDocumentation,
    },
    {
      path: "/Docs/DeveloperPortal",
      name: "DeveloperPortal",
      component: DeveloperPortal,
    },
    {
      path: "/Docs/APIManagement",
      name: "APIManagement",
      component: APIManagement,
    },
    {
      path: "/Docs/SubscriptionManagement",
      name: "SubscriptionManagement",
      component: SubscriptionManagement,
    },
    {
      path: "/Docs/TrafficManagement",
      name: "TrafficManagement",
      component: TrafficManagement,
    },
    {
      path: "/Docs/Security",
      name: "Security",
      component: Security,
    },
    {
      path: "/Docs/Administration",
      name: "Administration",
      component: Administration,
    },
    {
      path: "/Docs/ReleaseNotes",
      name: "ReleaseNotes",
      component: ReleaseNotes,
    },
    {
      path: "/EventHub",
      name: "EventHub",
      component: EventHub,
    },
    {
      path: "/Docs/GettingStarted",
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
