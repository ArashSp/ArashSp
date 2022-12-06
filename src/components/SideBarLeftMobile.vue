<template>
  <div class="my-3">
    <button
      class="btn btn-outline-btnsearch dropdown-toggle fixedNavBar py-3"
      id="NavigationDocs"
      data-bs-toggle="collapse"
      data-bs-auto-close="outside"
      data-bs-target=".dropdown-menu"
      style="width: 100%"
    >
      Navigation
    </button>

    <ul
      class="bg-codesample noStyle dropdown-menu persistant shadow"
      aria-labelledby="dropdown" 
      style="width: 100%; "
      id="dropdown"
    >
      <li>
        <button
          class="btn btn-transparent align-items-center rounded collapsed text-white fw-normal display-6"
          data-bs-toggle="collapse"
          data-bs-target="#Overview-collapse"
        >
          Overview
        </button>
        <div class="collapse" id="Overview-collapse">
          <ul class="btn-toggle-nav pb-1 fw-lighter display-7 noStyle">
            <li class="py-3">
              <a
                href="/GettingStarted"
                class="text-decoration-none link-white"
              >
                Getting Started</a
              >
            </li>
            <li class="pb-3">
              <a href="/Docs" class="text-decoration-none link-white">
                Api Documentation</a
              >
            </li>
            <li class="pb-3">
              <a href="" class="text-decoration-none link-white">
                Vision</a
              >
            </li>
          </ul>
        </div>
      </li>

      <li>
        <button
          class="btn btn-transparent align-items-center rounded collapsed text-white fw-normal display-6"
          data-bs-toggle="collapse"
          data-bs-target="#API-collapse"
        >
          API Documentation
        </button>
        <div class="collapse" id="API-collapse">
          <ul
            class="btn-toggle-nav pb-1 fw-lighter display-7 noStyle text-listtext"
          >
            <li class="py-2"><a href=""></a></li>
          </ul>
        </div>
      </li>

      <li>
        <button
          class="btn btn-transparent align-items-center rounded collapsed text-white fw-normal display-6"
          data-bs-toggle="collapse"
          data-bs-target="#Integrations-collapse"
        >
          Integrations
        </button>
        <div class="collapse" id="Integrations-collapse">
          <ul
            class="btn-toggle-nav pb-1 fw-lighter display-7 noStyle text-listtext"
          >
            <li class="py-2"><a href=""></a></li>
          </ul>
        </div>
      </li>

      <li>
        <button
          class="btn btn-transparent align-items-center rounded collapsed text-white fw-normal display-6"
          data-bs-toggle="collapse"
          data-bs-target="#Plugins-collapse"
        >
          Plugins
        </button>
        <div class="collapse" id="Plugins-collapse">
          <ul
            class="btn-toggle-nav pb-1 fw-lighter display-7 noStyle text-listtext"
          >
            <li class="py-2"><a href=""></a></li>
          </ul>
        </div>
      </li>

      <li>
        <button
          class="btn btn-transparent align-items-center rounded collapsed text-white fw-normal display-6"
          data-bs-toggle="collapse"
          data-bs-target="#Configuration-collapse"
        >
          Configuration
        </button>
        <div class="collapse" id="Configuration-collapse">
          <ul
            class="btn-toggle-nav pb-1 fw-lighter display-7 noStyle text-listtext"
          >
            <li class="py-2"><a href=""></a></li>
          </ul>
        </div>
      </li>

      <li>
        <button
          class="btn btn-transparent align-items-center rounded collapsed text-white fw-normal display-6"
          data-bs-toggle="collapse"
          data-bs-target="#Deployment-collapse"
        >
          Deployment
        </button>
        <div class="collapse" id="Deployment-collapse">
          <ul
            class="btn-toggle-nav fw-lighter display-7 pb-1 noStyle text-listtext"
          >
            <li class="py-2"><a href=""></a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  
</template>
<script>
export default {};
</script>
<style scoped>
.noStyle {
  list-style-type: none;
}
.fixedNavBar {
  position: fixed;
  top: 58px;
  right: 0;
  left: 0;
  background-color: #11171f;
  color: #66a3ff;
}
</style>