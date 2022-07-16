<template>
  <div class="bg-dark text-white">
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-Navbar1 NavigationBar">
        <div class="container">
          <a class="navbar-brand ms-5 ps-5" href="#">
            <img src="./assets/images/Logo.svg" style=""
          /></a>
          <div class="collapse navbar-collapse">
            <div class="navbar-nav mt-1 mx-5 ">
              <a class="nav-link ms-1 display-7 fw-normal " href="#"> GITHUB</a>
              <a class="nav-link ms-3 display-7 fw-normal" href="#"> DOCS</a>
              <a class="nav-link ms-3 display-7 fw-normal" href="#"> COMMUNITY</a>
              <a class="nav-link ms-3 display-7 fw-normal" href="#"> HOW IT WORKS</a>
              <a class="nav-link ms-3 display-7 fw-normal" href="#">EVENT HUB</a>
              <a class="nav-link ms-3 display-7 fw-normal" href="#"> BLOG</a>
              <a class="nav-link ms-3 display-7 fw-normal" href="#"> USE CASES</a>

              <button class="btn btn-primary btn-sm ms-3 display-8 fw-bold" type="button">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="">
      <NuxtPage />
    </div>
    <div class="pt-3">
      <div class="row gx-0">
        <div class="col-2"></div>
        <div class="col-8">
          <div class="row px-0">
            <div class="col-4">
              <div class="col">
                <img src="./assets/images/Logo2.svg" class="me-5 mb-4" />

                <nav class="nav">
                  <a class="nav-link link-icon px-1" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      /></svg
                  ></a>
                  <a class="nav-link link-icon" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                      /></svg
                  ></a>
                  <a class="nav-link link-icon px-1" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                      /></svg
                  ></a>
                  <a class="nav-link link-icon" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-medium"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"
                      /></svg
                  ></a>
                  <a class="nav-link link-icon px-1" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                      /></svg
                  ></a>
                </nav>
              </div>
            </div>
            <div class="col-8">
              <div class="row">
                <div class="col-4 mt-2">
                  <p class="display-6 ms-2 fw-bold">Get Started</p>
                  <nav class="nav flex-column">
                    <a class="nav-link link-icon display-6 fw-light" href="#">Install</a>
                    <a class="nav-link link-icon display-6 fw-light" href="#">Documentation</a>
                    <a class="nav-link link-icon display-6 fw-light" href="#">Paid VS Free</a>
                    <a class="nav-link link-icon display-6 fw-light" href="#">Features</a>
                  </nav>
                </div>
                <div class="col-4 mt-2">
                  <p class="display-6 ms-2 fw-bold">Company</p>
                  <nav class="nav flex-column">
                    <a class="nav-link link-icon display-6 fw-light" href="#">About Us</a>
                    <a class="nav-link link-icon display-6 fw-light" href="#">Privacy Policy</a>
                    <a class="nav-link link-icon display-6 fw-light" href="#">Terms & Conditions</a>
                    <a class="nav-link link-icon display-6 fw-light" href="#">Contact Us</a>
                  </nav>
                </div>
                <div class="col-4 mt-2">
                  <p class="display-6 ms-2 fw-bold">Resources</p>
                  <nav class="nav flex-column">
                    <a class="nav-link link-icon display-6 fw-light" href="#">Event Hub</a>
                    <a class="nav-link link-icon display-6 fw-light" href="#">Community</a>
                    <a class="nav-link link-icon display-6 fw-light" href="#">Knowledge Base</a>
                    <a class="nav-link link-icon display-6 fw-light" href="#">Blog</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div class="border-bottom border-icon border-3 mx-3 pt-5"></div>
        </div>
        <p class="text-center py-5 display-6 fw-light">
          Copyright © 2022 Webhookie. All rights reserved
        </p>
        <div class="col-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
        },
      ],
    };
  },
};
</script>
<style scoped>
.NavigationBar {
  background: linear-gradient(104.08deg, #1b2433 39.98%, #2f4970 96.11%);
}
</style>
