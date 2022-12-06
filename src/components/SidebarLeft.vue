<template>
  <div class="d-none d-lg-block">
    <ul class="pt-5 bg-transparent noStyle">
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
            <li class="pb-3"><a href=""> Vision</a></li>
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
          data-toggle="collapse"
          data-target="#Deployment-collapse"
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
<style scoped>
.noStyle {
  list-style-type: none;
}
</style>
