<template>
    <div class="pt-5 row">
        <div v-for="tag in DataArray.tags" class="col-3 ">
          <div class="blogbtn text-icon mt-1 px-2 text-white text-center py-2" style="">
            {{ tag.name }}
          </div>
        </div>
        <div class="">
          <p class="fw-bold display-9 mt-3 mt-4">
            {{ DataArray.MainTitle }}
          </p>
          <p class="fw-lighter display-7">{{ DataArray.Author }}</p>
          <img :src="DataArray.ArticlePic" class="mt-3 pb-2" style="max-width: 100%" />
        </div>
        <Sections :DataArray="DataArray" />
        <a href="/Blog">
          <button type="button" class="btn btn-outline-btnsearch fw-lighter display-6 my-4">
            Recents Posts
          </button>
        </a>
      </div>
</template>
<script>
export default {
    name: "MainBlog",
    props: ["DataArray"],
}
</script>