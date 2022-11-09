import { defineNuxtConfig } from "nuxt";



// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss"],
  vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    sourceMap: true,
                    additionalData: `@import "@/assets/scss/main.scss";`,
                },
            },
        }, 
    },
  },
);
