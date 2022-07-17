<template>
  <div class="bg-dark text-white">
    <nav class="navbar navbar-expand-lg navbar-dark bg-Navbar1 NavigationBar">
      <div class="container">
        <Nuxt-link class="navbar-brand ms-5 ps-5" to="/">
          <img src="../assets/images/Logo.svg" style=""
        /></Nuxt-link>
        <div class="collapse navbar-collapse">
          <div class="navbar-nav mt-1 mx-5">
            <a class="nav-link ms-1 display-7 fw-normal" href="#"> GITHUB</a>
            <Nuxt-link class="nav-link ms-3 display-7 fw-normal" to="/Docs">
              DOCS</Nuxt-link
            >
            <a class="nav-link ms-3 display-7 fw-normal" href="#"> COMMUNITY</a>
            <nuxt-link
              class="nav-link ms-3 display-7 fw-normal"
              to="/HowItWorks"
            >
              HOW IT WORKS</nuxt-link
            >
            <Nuxt-link class="nav-link ms-3 display-7 fw-normal" to="/EventHub"
              >EVENT HUB</Nuxt-link
            >
            <Nuxt-link class="nav-link ms-3 display-7 fw-normal" to="/Blog">
              BLOG</Nuxt-link
            >
            <Nuxt-link class="nav-link ms-3 display-7 fw-normal" to="/useCases">
              USE CASES</Nuxt-link
            >

            <button
              class="btn btn-primary btn-sm ms-3 "
              type="button"
            >
              <nuxt-link to="/GettingStarted" class=" text-decoration-none text-white display-8 fw-bold"> GET STARTED </nuxt-link>
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
