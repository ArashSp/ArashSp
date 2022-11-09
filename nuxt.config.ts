import { defineNuxtConfig } from "nuxt";
import path from 'path';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // css: ["@/assets/scss/main.scss"],
    vite : { 
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './')
      }
    },
   
    css : { 
        preprocessorOptions : { 
            scss : { 
                sourceMap : false , 
                additionalData : `@import "@/assets/scss/main.scss";`,
//                 additionalData (source, fp) {
//                   // All scss files ending with imports.scss
//                   // will not re-import additionalData
//                   if (fp.endsWith('variables.scss')) return source;
//                   // Use additionalData from legacy nuxt scss options
//                   return `@import "@/assets/scss/main.scss"; ${source}`
//                 } 
            } , 
        } , 
    } ,  
    },
});
