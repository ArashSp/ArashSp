<template>
    <div class="row gx-4">
        <div class="col-lg-4 col-md-6 my-3" v-for="article in DataArray">
            <div :key="article.id">
                <a :href="'/Blog/' + article.id" class="nav-link link-white">
                    <div>
                        <img :src="article.ArticlePic" class="mt-3 pb-2" style="max-width: 100%" />
                        <div class="row gx-0">
                            <div v-for="tag in article.tags" class="col-2">
                                <button type="button" class="btn blogbtn btn-sm text-icon mt-1 mx-2">
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
                            {{ article.ArticleDescription }}
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "blogCard",
    props: ["DataArray"],

    setup(props) {
        
        console.log(props.DataArray)

    }
}
</script>