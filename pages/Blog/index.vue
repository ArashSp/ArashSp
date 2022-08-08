<template>
  <div>
    <div
      class="row gx-0 d-none d-lg-flex d-xl-flex"
      style="background-color: #141b24"
    >
      <div class="col-2"></div>
      <div class="col-8" v-for="article in myJson.slice(0, 1)">
        <div class="row gx-0" style="background-color: #141b24">
          <div class="col">
            <img
              :src="article.ArticlePic"
              class="mt-5 mb-3 pb-4 blogbox"
              style="max-width: 100%"
            />
          </div>
          <div class="col">
            <div class="row">
              <div v-for="tag in article.tags" class="col-2">
                <button
                  type="button"
                  class="btn blogbtn btn-sm text-icon ms-3 mt-5 px-2"
                >
                  {{ tag.name }}
                </button>
              </div>
            </div>

            <p class="fw-bold display-9 ps-3 mt-3">
              {{ article.MainTitle }}
            </p>
            <p class="fw-lighter display-7 ps-3">
              {{ article.Author }} , {{ article.ArticleDate }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-2"></div>
    </div>

    <div class="row gx-0">
      <div class="col-1"></div>
      <div class="col-10">
        <button
          type="button"
          class="btn blogbtn btn-sm text-icon ms-2 mt-5 px-2"
          @click="AllSORT()"
        >
          All
        </button>
        <button
          type="button"
          class="btn blogbtn btn-sm text-icon ms-2 mt-5 px-2"
          @click="APISORT()"
        >
          API
        </button>
        <button
          type="button"
          class="btn blogbtn btn-sm text-icon ms-2 mt-5 px-2"
          @click="COMPANYSORT()"
        >
          Company
        </button>
        <button
          type="button"
          class="btn blogbtn btn-sm text-icon ms-2 mt-5 px-2"
          @click="UseSort()"
        >
          Use Case
        </button>
        <button
          type="button"
          class="btn blogbtn btn-sm text-icon ms-2 mt-5 px-2"
          @click="SecuritySort()"
        >
          Security
        </button>
      </div>
      <div class="col-1"></div>
    </div>

    <div class="row gx-0">
      <div class="col-4 my-3" v-for="article in SortedArray">
        <div :key="article.id">
          <nuxt-link :to="'/Blog/' + article.id" class="nav-link link-white">
            <div>
              <img
                :src="article.ArticlePic"
                class="mt-3 pb-2"
                style="max-width: 100%"
              />
              <div class="row gx-0">
                <div v-for="tag in article.tags" class="col-2">
                  <button
                    type="button"
                    class="btn blogbtn btn-sm text-icon mt-1 px-2"
                  >
                    {{ tag.name }}
                  </button>
                </div>
              </div>
              <p class="fw-bold display-9 mt-3">
                {{ article.MainTitle }}
              </p>
              <p class="fw-lighter display-7">
                {{ article.Author }} {{ article.ArticleDate }}
              </p>
              <p class="fw-lighter display-5">
                {{ article.CardDescription }}
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

    <Downloadnow />
  </div>
</template>
<script>
import Downloadnow from "~~/components/Downloadnow.vue";
import articles from "./article.json";

console.log();

export default {
  setup() {
    
    const route = useRoute();
    const api = tagsSearch.filter((x) => x.name === "API");
    const company = tagsSearch.filter((x) => x.name === "Company");
    const UseCases = tagsSearch.filter((x) => x.name === "useCases");
    const Secutiry = tagsSearch.filter((x) => x.name === "Security");

    return {
      api,
      company,
      UseCases,
      Secutiry,
    };
  },
  computed: {
    AllSORT() {
      this.SortedArray = this.myJson;
    },
    APISORT() {
      this.SortedArray = this.api;
    },
    COMPANYSORT() {
      this.SortedArray = this.company;
    },
    UseSort() {
      this.SortedArray = this.UseCases;
    },
    SecuritySort() {
      this.SortedArray = this.SecuritySort;
    },
  },
  data() {
    return {
      myJson: articles,
      SortedArray: articles,
      tagsSearch : articles.tags
    };
  },
  components: { Downloadnow },
};
</script>
<style scoped></style>
