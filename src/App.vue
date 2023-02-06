<template>
  <div class="bg-blackBg text-white">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/layout/TheHeader.vue";
import Footer from "./components/layout/TheFooter.vue";

export default {
  head() {
    return {
      title: "Webhookie",
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
        },
      ],
    };
  },
  components:{Header ,Footer}
};
</script>

