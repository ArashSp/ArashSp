<template>
  <div class="col-3 d-none d-lg-block fixedSideleft">
    <div class="mt-5 pe-5">
      <nav class="nav flex-column dw-bold display-6">
        <div v-for="item in DataArray.sections">
          <a class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
            :href="'#' + item.NavigationTag">{{ item.Title }}</a>
          <div v-if="item.Child">
            <a class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7 ps-4"
              :href="'#' + item.Child.NavigationTag">{{ item.Child.Title }}</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "RightSideMenu",
  props: ["DataArray"],
}
</script>
<style>
.fixedSideleft {
  position: fixed;
  top: 70px;
  right: 5%;
  max-width: 400px;
}
</style>