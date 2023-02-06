<template>
  <div>
    <div class="container">
      <div class="row gx-0">

        <SideBarLeftMobile class="d-xl-none d-lg-none d-inline-md " />

        <div class="col-3">
          <SidebarLeft class="sticky-top sticky-top-fix" />
        </div>

        <div class="col-lg-6 col-md-auto pt-5">
          <div class="container">
            <SideBarLeftMobile class="d-lg-none" />
          </div>

          <div class="row gx-0 pb-3">
            <p class="fw-bold display-9">API Management</p>
          </div>
          <div class="row gx-0">
            <p class="fw-lighter display-5 lh-base pb-3">
              webhookie enables your developer communites to design and deploy your own webhook APIs.
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              Webhook APIs are described using the ASYNC API Specification.
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              As soon as a webhook API is deployed other developer communities can start testing and subscribing to it.
              Even before a single event is created or sent to webhookie.  This enables an API design first approach
              which means that both your API providers and consumers can develop simultaneously saving huge amounts
              of time and money.
            </p>
          </div>

          <div class="d-flex justify-content-between gx-0 pb-5">
            <div >
              <a href="/Docs/DeveloperPortal">
                <button type="button" class="btn btn-outline-btnsearch px-4">
                  &lt Developer Portal
                </button>
              </a>
            </div>
            <div >
              <a href="/Docs/SubscriptionManagement">
                <button type="button" class="btn btn-outline-btnsearch px-4 ms-4">
                  Subscription Management &gt
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Downloadnow class="my-5" />
  </div>
</template>

<script>
import SidebarLeft from "../../../components/Docs/SidebarLeft.vue";
import SidebarRight from "../../../components/Docs/SidebarRight.vue";
import Downloadnow from "../../../components/layout/Downloadnow.vue";
import SideBarLeftMobile from "../../../components/Docs/SideBarLeftMobile.vue";

export default {
  return: {},
  components: { SidebarLeft, SidebarRight, Downloadnow, SideBarLeftMobile },
};
</script>

<style>
.sticky-top-fix{
  padding-top:80px !important ;
}
</style>