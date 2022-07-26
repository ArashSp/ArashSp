<template>
  <div>
    <div class="row gx-0 mb-5">
      <div class="col-3 d-none d-lg-block">
        <div class="ps-5 mt-5 pe-5">
          <p class="fw-normal display-6">Recents posts</p>
          <nav class="nav flex-column dw-bold display-6">
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              to=""
              >Webhook APis are Rest APIS perfect side kick!</Nuxt-link
            >
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              to=""
              >The 4 use cases for webhook api</Nuxt-link
            >
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              to=""
              >Getting started with webhookie</Nuxt-link
            >
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              to=""
              >Visual update</Nuxt-link
            >
          </nav>
        </div>
      </div>
      <div class="col-6">
        <div class="row gx-0">
          <div class="pt-5 row">
            <div class="blogbtn text-icon mt-1 mx-2 text-white text-center py-2" style="max-width:15%;">General</div>
            <div class="blogbtn text-icon mt-1 mx-2 text-white text-center py-2"  style="max-width:15%;">
              Use Case
            </div>
            <p class="fw-bold display-9 mt-3 mt-4">
              {{ currentArticle.MainTitle }}
            </p>
            <p class="fw-lighter display-7"> {{currentArticle.Author}}</p>

            <img
              :src="currentArticle.ArticlePic"
              class="mt-3 pb-2"
              style="max-width: 100%"
            />
            <p class="fw-bold display-9 my-5">{{ currentArticle.ArticleTitle1 }}</p>
            <p class="fw-lighter display-5 lh-base pb-3">
              {{ currentArticle.ArticleBody1 }}
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              {{ currentArticle.ArticleBody1_2 }}
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              {{ currentArticle.ArticleBody1_3 }}
            </p>
            <img :src="currentArticle.ArticlePic1" class="mt-3 pb-4" style="max-width: 100%" />
            <p class="fw-bold display-9 mt-3 mb-4">{{ currentArticle.ArticleTitle2 }}</p>
            <p class="fw-lighter display-5 lh-base pb-3">
              {{ currentArticle.ArticleBody2 }}
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              {{ currentArticle.ArticleBody2_2 }}
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              {{ currentArticle.ArticleBody2_3 }}
            </p>

            <p class="fw-light display-10 mt-3 mt-4">
              {{ currentArticle.ArticleTitle3 }}
            </p>
            <ul>
              <li class="fw-lighter display-5 lh-base pb-3">
                {{ currentArticle.ArticleBody3 }}
              </li>
              <li class="fw-lighter display-5 lh-base pb-3">
                {{ currentArticle.ArticleBody3_2 }}
              </li>
              <li class="fw-lighter display-5lh-base pb-3">
                {{ currentArticle.ArticleBody3_3 }}
              </li>
            </ul>
            <img
              :src="currentArticle.ArticlePic3"
              class="mt-3 pb-4"
              style="max-width: 100%"
            />
            <p class="fw-bold display-9 mt-3 mt-4">
              {{ currentArticle.ArticleTitle4 }}
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              {{ currentArticle.ArticleBody4 }}
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              {{ currentArticle.ArticleBody4_2 }}
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              {{ currentArticle.ArticleBody4_3 }}
            </p>

            <p class="fw-bold display-9 mt-3 mt-4">
              {{ currentArticle.ArticleTitle5 }}
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              {{ currentArticle.ArticleBody5 }}
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              {{ currentArticle.ArticleBody5_2 }}
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              {{ currentArticle.ArticleBody5_3 }}
            </p>

            <img
              :src="currentArticle.ArticlePic5"
              class="mt-3 pb-4"
              style="max-width: 100%"
            />

            <p class="fw-bold display-9 mt-3 mt-4">{{ currentArticle.ArticleTitle6 }}</p>
            <p class="fw-lighter display-5 lh-base pb-3">
              {{ currentArticle.ArticleBody6 }}
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              {{ currentArticle.ArticleBody6_2 }}
            </p>
            <Nuxt-Link to="/Blog">
              <button
                type="button"
                class="btn btn-outline-btnsearch fw-lighter display-6 my-4"
              >
                Recents Posts
              </button>
            </Nuxt-Link>
          </div>
        </div>
      </div>
      <div class="col-3 d-none d-lg-block">
        <div class="mt-5 pe-5">
          <nav class="nav flex-column dw-bold display-6">
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              to=""
              >The success of rest APIs</Nuxt-link
            >
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              to=""
              >But where do they fit it?</Nuxt-link
            >
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7 ps-3"
              to=""
              >Why do you say? Well A few reasons that include:</Nuxt-link
            >
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              to=""
              >What about backend Integration?</Nuxt-link
            >
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              to=""
              >Webhook APIs to continuew jorney</Nuxt-link
            >
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              to=""
              >Into the sunset</Nuxt-link
            >
          </nav>
        </div>
      </div>
    </div>
    <Downloadnow />
  </div>
</template>
<script>
import Downloadnow from "../../components/Downloadnow.vue";
import articles from "./article.json";
// const route = useRoute();



export default {
  // setup() {
    //   route.params.id = search.value;
  //   if (search.value == myJson.id)
  //   {
    
    //   }
  // },
 
  components: { Downloadnow },
  data() {
    // this.newArray= result.data.filter(myJson => myJson.id === route.params.id )[0];
    return {
      myJson: articles,
      currentArticle: {},
    };
  },
  mounted() {
    currentArticle = myJson.find(j => j.id === $route.params.id )    
  }
};
</script>
