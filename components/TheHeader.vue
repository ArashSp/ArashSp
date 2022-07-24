<template>
  <div class="bg-dark text-white">
    <nav class="navbar navbar-expand-lg navbar-dark bg-Navbar1 NavigationBar">
      <div class="container">
        <div class="">
          <Nuxt-link class="navbar-brand ps-5" to="/">
            <img src="../assets/images/Group.svg" style=""
          /></Nuxt-link>
        </div>
        <div class="dropstart d-xl-none d-lg-none d-block-md">
          <button
            class="btn dropdown-toggle text-icon"
            type="button"
            id="Menu"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-dark mt-5 me-n5 NavigationBar"
            aria-labelledby="Menu"
          >
            <li>
              <Nuxt-link class="dropdown-item display-7 pb-1" to=""
                >GITHUB</Nuxt-link
              >
            </li>
            <li>
              <Nuxt-link class="dropdown-item display-7 pb-1" to="/Docs"
                >DOCS</Nuxt-link
              >
            </li>
            <li>
              <Nuxt-link class="dropdown-item display-7 pb-1" to=""
                >COMMUNITY</Nuxt-link
              >
            </li>
            <li>
              <Nuxt-link class="dropdown-item display-7 pb-1" to="/HowItWorks"
                >HOW IT WORKS</Nuxt-link
              >
            </li>
            <li>
              <Nuxt-link class="dropdown-item display-7 pb-1" to="EventHub"
                >EVENT HUB</Nuxt-link
              >
            </li>
            <li>
              <Nuxt-link class="dropdown-item display-7 pb-1" to="/Blog"
                >BLOG</Nuxt-link
              >
            </li>
            <li>
              <Nuxt-link class="dropdown-item display-7 pb-1" to="/useCases"
                >USE CASES</Nuxt-link
              >
            </li>
          </ul>
        </div>
        <div
          class="collapse navbar-collapse d-lg-none d-md-none d-inline-xl ms-5"
        >
          <div class="navbar-nav mt-1">
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
            <Nuxt-link class="nav-link mx-3 display-7 fw-normal" to="/useCases">
              USE CASES</Nuxt-link
            >

            <button class="btn btn-primary btn-sm" type="button">
              <nuxt-link
                to="/GettingStarted"
                class="text-decoration-none text-white display-8 fw-bold"
              >
                GET STARTED
              </nuxt-link>
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

<!-- d-xl-none d-lg-none d-block-md  -->
