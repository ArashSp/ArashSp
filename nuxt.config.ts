import path from "path";

export default defineNuxtConfig({
  css: ["~/assets/scss/main.scss"],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./"),
      },
    },

    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@import "~/assets/scss/main.scss";',
    //     },
    //   },
    // },
  },
});
