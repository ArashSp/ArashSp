<template>
  <div class="bg-blackBg text-white" style="height: 70px;">
    <!-- max-width1600px will break the page and will be shorter than the page  -->
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-Navbar1 NavigationBar row gx-0"
      style="position: fixed; width: 100%; padding: 12px 0px; z-index: 1"
    >
      <div class="row container">
        <div class="col-4 justify-content-center">
          <a class="navbar-brand ps-5" href="/">
            <img src="../assets/images/Group.svg" class="navbarLogo"
          /></a>
        </div>
        <div
          class="dropstart d-xl-none d-lg-none d-inline-md justify-content-start"
          style="max-width: 50px"
        >
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
              <a class="dropdown-item display-7 pb-1" href="https://github.com/webhookie"
                >GITHUB</a
              >
            </li>
            <li>
              <a class="dropdown-item display-7 pb-1" href="/Docs"
                >DOCS</a
              >
            </li>
            <li>
              <a class="dropdown-item display-7 pb-1" href="https://community.webhookie.com"
                >COMMUNITY</a
              >
            </li>
            <li>
              <a class="dropdown-item display-7 pb-1" href="/HowItWorks"
                >HOW IT WORKS</a
              >
            </li>
            <li>
              <a class="dropdown-item display-7 pb-1" href="/EventHub"
                >EVENT HUB</a
              >
            </li>
            <li>
              <a class="dropdown-item display-7 pb-1" href="/Blog"
                >BLOG</a
              >
            </li>
            <li>
              <a class="dropdown-item display-7 pb-1" href="/useCases"
                >USE CASES</a
              >
            </li>
          </ul>
        </div>
        <div
          class="collapse navbar-collapse d-lg-none d-md-none d-inline-xl col-8 ms-n5"
        >
          <div class="navbar-nav mt-1 text-center">
            <a class="nav-link ms-1 display-7 fw-light navtop" href="https://github.com/webhookie">
              GITHUB</a
            >
            <a
              class="nav-link ms-3 display-7 fw-light lh-sm navtop"
              href="/Docs"
            >
              DOCS</a
            >
            <a class="nav-link ms-3 display-7 fw-light lh-sm navtop" href="https://community.webhookie.com">
              COMMUNITY</a
            >
            <a
              class="nav-link ms-3 display-7 fw-light lh-sm navtop"
              href="/HowItWorks"
            >
              HOW IT WORKS</a
            >
            <a
              class="nav-link ms-3 display-7 fw-light lh-sm navtop"
              href="/EventHub"
              >EVENT HUB</a
            >
            <a
              class="nav-link ms-3 display-7 fw-light lh-sm navtop"
              href="/Blog"
            >
              BLOG</a
            >
            <a
              class="nav-link mx-3 display-7 fw-light lh-sm navtop"
              href="/useCases"
            >
              USE CASES</a
            >

            <button class="btn btn-primary btn-sm" type="button">
              <a
                href="/GettingStarted"
                class="text-decoration-none text-white display-8 fw-bold"
              >
                GET STARTED
              </a>
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
  z-index: 99999 !important;
}
</style>
<style scoped>
.navtop {
  padding: 6px 22px 8px 22px;
  letter-spacing: 1px;
}
.navbarLogo {
  height: 32px;
  width: auto;
}
</style>

<!-- d-xl-none d-lg-none d-block-md  -->
