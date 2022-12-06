<template>
<div>
  <div class="container">
    <div class="row gx-0 mb-5">
      <div class="col-3 d-none d-lg-flex">
        <div class="ps-5 mt-5 pe-5">
          <p class="fw-normal display-6">Recents posts</p>
          <nav class="nav flex-column dw-bold display-6">
            <a
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              href=""
              >Webhook APis are Rest APIS perfect side kick!</a
            >
            <a
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              href=""
              >The 4 use cases for webhook api</a
            >
            <a
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              href=""
              >Getting started with webhookie</a
            >
            <a
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              href=""
              >Visual update</a
            >
          </nav>
        </div>
      </div>
      <div class="col-lg-6 col-md-auto">
        <div class="row gx-0">
          <div class="pt-5 row">
          <div v-for="tag in article.tags" class="col-3 ">
            <div

              class="blogbtn text-icon mt-1 px-2 text-white text-center py-2"
              style=""
            >
              {{ tag.name }}
              </div>
            </div>

            <div class="">
              <p class="fw-bold display-9 mt-3 mt-4">
                {{ article.MainTitle }}
              </p>
              <p class="fw-lighter display-7">{{ article.Author }}</p>

              <img
                :src="article.ArticlePic"
                class="mt-3 pb-2"
                style="max-width: 100%"
              />
              <p class="fw-bold display-9 my-5">{{ article.ArticleTitle1 }}</p>
              <p class="fw-lighter display-5 lh-base pb-3">
                {{ article.ArticleBody1 }}
              </p>
              <p class="fw-lighter display-5 lh-base pb-3">
                {{ article.ArticleBody1_2 }}
              </p>
              <p class="fw-lighter display-5 lh-base pb-3">
                {{ article.ArticleBody1_3 }}
              </p>
              <img
                :src="article.ArticlePic1"
                class="mt-3 pb-4"
                style="max-width: 100%"
              />
              <p class="fw-bold display-9 mt-3 mb-4">
                {{ article.ArticleTitle2 }}
              </p>
              <p class="fw-lighter display-5 lh-base pb-3">
                {{ article.ArticleBody2 }}
              </p>
              <p class="fw-lighter display-5 lh-base pb-3">
                {{ article.ArticleBody2_2 }}
              </p>
              <p class="fw-lighter display-5 lh-base pb-3">
                {{ article.ArticleBody2_3 }}
              </p>

              <p class="fw-light display-10 mt-3 mt-4">
                {{ article.ArticleTitle3 }}
              </p>
              <ul>
                <li class="fw-lighter display-5 lh-base pb-3">
                  {{ article.ArticleBody3 }}
                </li>
                <li class="fw-lighter display-5 lh-base pb-3">
                  {{ article.ArticleBody3_2 }}
                </li>
                <li class="fw-lighter display-5lh-base pb-3">
                  {{ article.ArticleBody3_3 }}
                </li>
              </ul>
              <img
                :src="article.ArticlePic3"
                class="mt-3 pb-4"
                style="max-width: 100%"
              />
              <p class="fw-bold display-9 mt-3 mt-4">
                {{ article.ArticleTitle4 }}
              </p>
              <p class="fw-lighter display-5 lh-base pb-3">
                {{ article.ArticleBody4 }}
              </p>
              <p class="fw-lighter display-5 lh-base pb-3">
                {{ article.ArticleBody4_2 }}
              </p>
              <p class="fw-lighter display-5 lh-base pb-3">
                {{ article.ArticleBody4_3 }}
              </p>

              <p class="fw-bold display-9 mt-3 mt-4">
                {{ article.ArticleTitle5 }}
              </p>
              <p class="fw-lighter display-5 lh-base pb-3">
                {{ article.ArticleBody5 }}
              </p>
              <p class="fw-lighter display-5 lh-base pb-3">
                {{ article.ArticleBody5_2 }}
              </p>
              <p class="fw-lighter display-5 lh-base pb-3">
                {{ article.ArticleBody5_3 }}
              </p>

              <img
                :src="article.ArticlePic5"
                class="mt-3 pb-4"
                style="max-width: 100%"
              />

              <p class="fw-bold display-9 mt-3 mt-4">
                {{ article.ArticleTitle6 }}
              </p>
              <p class="fw-lighter display-5 lh-base pb-3">
                {{ article.ArticleBody6 }}
              </p>
              <p class="fw-lighter display-5 lh-base pb-3">
                {{ article.ArticleBody6_2 }}
              </p>
            </div>
            <a href="/Blog">
              <button
                type="button"
                class="btn btn-outline-btnsearch fw-lighter display-6 my-4"
              >
                Recents Posts
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="col-3 d-none d-lg-block">
        <div class="mt-5 pe-5">
          <nav class="nav flex-column dw-bold display-6">
            <a
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              href=""
              >The success of rest APIs</a
            >
            <a
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              href=""
              >But where do they fit it?</a
            >
            <a
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7 ps-3"
              href=""
              >Why do you say? Well A few reasons that include:</a
            >
            <a
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              href=""
              >What about backend Integration?</a
            >
            <a
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              href=""
              >Webhook APIs to continuew jorney</a
            >
            <a
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              href=""
              >Into the sunset</a
            >
          </nav>
        </div>
      </div>
    </div>
  </div>
    <Downloadnow   class="my-5 "/>
</div>
</template>
<script>
import Downloadnow from "../../components/Downloadnow.vue";
import articles from "./article.json";
import { useRoute } from "vue-router";

export default {
  setup() {   
    const route = useRoute();
    const article = articles.find(x => x.id == route.params.id);
    console.log(route.params.id);
    return {
      article
    };
  },
  components: { Downloadnow },

  data() {
    return {
    };
  },
  mounted() {
  },
};
</script>
<style scoped>

p:empty{
  display: none;
}

ul:empty{
  display: none;
}

li:empty{
  display: none;
}
</style>
