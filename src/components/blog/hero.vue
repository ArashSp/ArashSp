<template>
    <div class="row gx-0 d-none d-lg-flex d-xl-flex justify-content-center"
        style="background-color: #141b24; width: 100%;">
        <div class="col-8" v-for="article in DataArray.slice(0, 1)">
          <div class="row gx-0" style="background-color: #141b24">
            <div class="col">
              <img :src="article.ArticlePic" class="mt-5 mb-3 pb-4 blogbox" style="max-width: 100%" />
            </div>
            <div class="col">
              <div class="row">
                <div v-for="tag in article.tags" class="col-2">
                  <button type="button" class="btn blogbtn btn-sm text-icon ms-3 mt-5 px-2">
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
      </div>
</template>
<script>
export default {
    name: "LeftSideMenu",
    props: ["DataArray"],
}
</script>