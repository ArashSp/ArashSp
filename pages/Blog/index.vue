<template>
  <div>
    <div
      class="row gx-0 d-none d-lg-flex d-xl-flex"
      style="background-color: #141b24"
    >
      <div class="col-2"></div>
      <div class="col-8">
        <div class="row gx-0" style="background-color: #141b24">
          <div class="col">
            <img
              src="../../assets/images/Frame 266.svg"
              class="mt-5 mb-3 pb-4 blogbox"
              style="max-width: 100%"
            />
          </div>
          <div class="col">
            <button
              type="button"
              class="btn blogbtn btn-sm text-icon ms-3 mt-5 px-2"
            >
              API
            </button>
            <button
              type="button"
              class="btn blogbtn btn-sm text-icon ms-3 mt-5 px-2"
            >
              Use Case
            </button>

            <p class="fw-bold display-9 ps-3 mt-3">
              Webhook APIs are REST APIS perfect side kick!
            </p>
            <p class="fw-lighter display-7">Liam Frode . February 2, 2022</p>
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
        >
          All
        </button>
        <button
          type="button"
          class="btn blogbtn btn-sm text-icon ms-2 mt-5 px-2"
        >
          API
        </button>
        <button
          type="button"
          class="btn blogbtn btn-sm text-icon ms-2 mt-5 px-2"
        >
          Company
        </button>
        <button
          type="button"
          class="btn blogbtn btn-sm text-icon ms-2 mt-5 px-2"
        >
          Use Case
        </button>
        <button
          type="button"
          class="btn blogbtn btn-sm text-icon ms-2 mt-5 px-2"
        >
          Security
        </button>
      </div>
      <div class="col-1"></div>
    </div>

    <div class="row gx-0" >
    
      <div class="col-4 my-3 " v-for="article in myJson">
      <div :key="article.id">
        <nuxt-link :to="'/Blogs/' + article.id" class="nav-link link-white">
          <div>
            <img
              :src="article.ArticlePic"
              class="mt-3 pb-2"
              style="max-width: 100%"
            />
        
            <button
              type="button"
              class="btn blogbtn btn-sm text-icon mt-1 px-2"
            >
              {{article.btn1Name}}
            </button>
            <button
              type="button"
              class="btn blogbtn btn-sm text-icon ms-2 mt-1 px-2"
              
            >
              {{article.btn2Name}}
            </button>
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
import articles from './article.json'



console.log();


export default {
  components: { Downloadnow },
  data() {
    return {
        myJson: articles
    };
  },
  mounted() {
    
  },
};
</script>
<style scoped></style>
