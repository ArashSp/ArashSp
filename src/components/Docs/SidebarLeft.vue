<template>
  <div class="d-none d-lg-block">
    <ul class="bg-transparent noStyle">
      <li>
        <details class="btn btn-transparent rounded text-white fw-normal display-6"
          :open="Overview.includes(routeAddress.name)">
          <summary>
            <a href="/Docs/Overview">
              Overview
            </a>
          </summary>
          <ul class="pb-1 fw-lighter display-7 noStyle">
            <li class="py-3 text-start">
              <a href="/Docs/GettingStarted">
                Getting Started</a>
            </li>
            <li class="pb-3">
              <a href="/Docs/ArchitectureOverview">
                Architecture Overview
              </a>
            </li>
            <li class="pb-3">
              <a href="/Docs/APIDocumentation">
                API Documentation</a>
            </li>
            <li class="pb-3">
              <a href="/Docs/ReleaseNotes">
                Release Notes</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details class="btn btn-transparent rounded text-white fw-normal display-6"
          :open="DeveloperPortal.includes(routeAddress.name)">
          <summary>
            <a href="/Docs/DeveloperPortal">
              Developer Portal
            </a>
          </summary>
          <ul class="fw-lighter display-7 pb-1 noStyle text-listtext">
            <li class="py-2"><a href=""></a></li>
          </ul>
        </details>
      </li>
      <li>
        <details class="btn btn-transparent rounded text-white fw-normal display-6"
          :open="APIManagement.includes(routeAddress.name)">
          <summary>
            <a href="/Docs/APIManagement">
              API Management
            </a>
          </summary>
          <ul class="pb-1 fw-lighter display-7 noStyle text-listtext">
            <li class="py-2"><a href=""></a></li>
          </ul>
        </details>
      </li>
      <li>
        <details class="btn btn-transparent rounded  text-white fw-normal display-6"
          :open="SubscriptionManagement.includes(routeAddress.name)">
          <summary>
            <a href="/Docs/SubscriptionManagement">
              Subscription Management
            </a>
          </summary>
          <ul class="pb-1 fw-lighter display-7 noStyle text-listtext">
            <li class="py-2"><a href=""></a></li>
          </ul>
        </details>
      </li>
      <li>
        <details class="btn btn-transparent  rounded  text-white fw-normal display-6"
          :open="TrafficManagement.includes(routeAddress.name)">
          <summary>
            <a href="/Docs/TrafficManagement">
              Traffic Management
            </a>
          </summary>
          <ul class="pb-1 fw-lighter display-7 noStyle text-listtext">
            <li class="py-2"><a href=""></a></li>
          </ul>
        </details>
      </li>
      <li>
        <details class="btn btn-transparent rounded  text-white fw-normal display-6"
          :open="Security.includes(routeAddress.name)">
          <summary>
            <a href="/Docs/Security">
              Security
            </a>
          </summary>
          <ul class="fw-lighter display-7 pb-1 noStyle text-listtext">
            <li class="py-2"><a href=""></a></li>
          </ul>
        </details>
      </li>
      <li>
        <details class="btn btn-transparent rounded  text-white fw-normal display-6"
          :open="Administration.includes(routeAddress.name)">
          <summary>
            <a href="/Docs/Administration">
              Administration
            </a>
          </summary>
          <ul class="fw-lighter display-7 pb-1 noStyle text-listtext">
            <li class="py-2"><a href=""></a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</template>
<script>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router'

export default {
  name: 'sidebar-left',

  setup() {

    const route = useRoute();
    const Overview = ref([
      "ReleaseNotes", "ArchitectureOverview", "APIDocumentation", "GettingStarted", "Overview"
    ]);
    const DeveloperPortal = ref([
      "DeveloperPortal"
    ]);
    const APIManagement = ref([
      "APIManagement"
    ]);
    const SubscriptionManagement = ref([
      "SubscriptionManagement"
    ]);
    const TrafficManagement = ref([
      "TrafficManagement"
    ]);
    const Security = ref([
      "Security"
    ]);
    const Administration = ref([
      "Administration"
    ]);

    const routeAddress = computed(() => route);

    return {
      routeAddress, Overview, DeveloperPortal, APIManagement, SubscriptionManagement, TrafficManagement, Security, Administration
    }
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
}

li {
  text-align: left;
}

summary {
  text-align: left;
}

a {
  text-decoration: none !important;
  color: white !important;
}

a:hover {
  color: #33a8d1 !important;
}
</style>
