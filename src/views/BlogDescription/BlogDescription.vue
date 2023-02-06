<template>
  <div>
    <div class="container">
      <div class="row gx-0 mb-5 justify-content-center">
        <LeftSideMenu />
        <div class="col-lg-6 col-md-auto">
          <div class="row gx-0">
            <MainInfo :DataArray="article" />
          </div>
          <Sections :DataArray="article" />
        </div>
        <RightSideMenu :DataArray="article" />
      </div>
    </div>
    <Downloadnow class="my-5 " />
  </div>
</template>
<script>
import LeftSideMenu from "../../components/blogDescription/LeftSideMenu.vue"
import RightSideMenu from "../../components/blogDescription/RightSideMenu.vue"
import MainInfo from "../../components/blogDescription/Main.vue";
import Sections from "../../components/blogDescription/Sections.vue";
import Downloadnow from "../../components/layout/Downloadnow.vue";
import articles from "./articles.json";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const article = articles.find(x => x.id == route.params.id);
    return {
      article
    };
  },
  components: { Downloadnow, Sections, MainInfo, RightSideMenu, LeftSideMenu },
  data() {
    return {
    };
  },
  mounted() {
  },
};
</script>

