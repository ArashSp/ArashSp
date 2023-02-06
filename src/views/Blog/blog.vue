<template>
  <div>
    <div class="container bg-blackBg text-white">
      <hero :DataArray="myJson" />
      <div class="row gx-0 justify-content-center">
        <div class="col-lg-10 col-md-auto">
          <button type="button" class="btn blogbtn btn-sm text-icon ms-2 mt-5 px-2" @click="AllSORT()">
            All
          </button>
          <button type="button" class="btn blogbtn btn-sm text-icon ms-2 mt-5 px-2" @click="APISORT()">
            API
          </button>
          <button type="button" class="btn blogbtn btn-sm text-icon ms-2 mt-5 px-2" @click="COMPANYSORT()">
            Company
          </button>
          <button type="button" class="btn blogbtn btn-sm text-icon ms-2 mt-5 px-2" @click="UseSort()">
            Use Case
          </button>
          <button type="button" class="btn blogbtn btn-sm text-icon ms-2 mt-5 px-2" @click="SecuritySort()">
            Security
          </button>
        </div>
        <BlogCard :DataArray="SortedArray" />
      </div>
    </div>

    <Downloadnow class="my-5 " />
  </div>
</template>
<script>
import Downloadnow from "../../components/layout/Downloadnow.vue";
import articles from "../BlogDescription/articles.json";
import BlogCard from "../../components/blog/BlogCard.vue";
import { useRouter } from "vue-router";
import hero from "../../components/blog/hero.vue";

export default {
  setup() {
    const route = useRouter();
    const api = articles.filter((x) => x.tags.some((t) => t.name === "API"));
    const company = articles.filter((x) =>
      x.tags.some((t) => t.name === "Company")
    );
    const UseCases = articles.filter((x) =>
      x.tags.some((t) => t.name === "useCases")
    );
    const Secutiry = articles.filter((x) =>
      x.tags.some((t) => t.name === "Security")
    );
    return {
      api,
      company,
      UseCases,
      Secutiry,
    };
  },
  data() {
    return {
      myJson: articles,
      SortedArray: articles,
    };
  },
  methods: {
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
  components: { Downloadnow, BlogCard,hero },
};
</script>
