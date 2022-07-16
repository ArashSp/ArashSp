<template>
  <div class="bg-dark text-white">
    <nav class="navbar navbar-expand-lg navbar-dark bg-Navbar1 NavigationBar">
      <div class="container">
        <a class="navbar-brand ms-5 ps-5" href="#">
          <img src="../assets/images/Logo.svg" style=""
        /></a>
        <div class="collapse navbar-collapse">
          <div class="navbar-nav mt-1 mx-5">
            <a class="nav-link ms-1 display-7 fw-normal" href="#"> GITHUB</a>
            <a class="nav-link ms-3 display-7 fw-normal" href="#"> DOCS</a>
            <a class="nav-link ms-3 display-7 fw-normal" href="#"> COMMUNITY</a>
            <nuxt-link class="nav-link ms-3 display-7 fw-normal" to="/HowItWorks">
              HOW IT WORKS</nuxt-link
            >
            <a class="nav-link ms-3 display-7 fw-normal" href="#">EVENT HUB</a>
            <a class="nav-link ms-3 display-7 fw-normal" href="#"> BLOG</a>
            <a class="nav-link ms-3 display-7 fw-normal" href="#"> USE CASES</a>

            <button
              class="btn btn-primary btn-sm ms-3 display-8 fw-bold"
              type="button"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
.NavigationBar {
  background: linear-gradient(104.08deg, #1b2433 39.98%, #2f4970 96.11%);
}
</style>
