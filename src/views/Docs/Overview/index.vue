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
            <p class="fw-bold display-9">Overview</p>
          </div>
          <div class="row gx-0">
            <ul class="fw-lighter display-5 ">
              webhookie is an open-source webhook API platform that enables
              you to quickly add webhook API capability to your product, platform
              or integration architecture. It provides:
              <li class="pt-3 ms-5 lh-base mt-2">
                <a href="/Docs/DeveloperPortal">
                  <strong>Developer Portal</strong>
                </a> – make your webhook APIs discoverable.
                Brand your portal. Get started fast.
              </li>
              <li class="pt-3 ms-5 lh-base ">
                <a href="/Docs/APIManagement">
                  <strong>API Management</strong>
                </a> – Design your webhook APIs using the
                ASYNC API specification and deploy in seconds making it discoverable to
                the consumers of your choice.
              </li>
              <li class="pt-3 ms-5 lh-base">
                <a href="/Docs/SubscriptionManagement">
                  <strong>Subscription Management</strong>
                </a> – consumers can manage their own
                subscriptions.
              </li>
              <li class="pt-3 ms-5 lh-base">
                <a href="/Docs/TrafficManagement">
                  <strong>Traffic Management</strong>
                </a> – allow your API providers and consumers
                to inspect the traffic being sent to their subscriptions.
              </li>
              <li class="pt-3 ms-5 lh-base">
                <a href="/Docs/Security">
                  <strong>Security</strong>
                </a> – the most secure webhook solution on the market.
              </li>
              <li class="pt-3 ms-5 pb-4 lh-base">
                <a href="/Docs/Administration">
                  <strong>Administration</strong>
                </a> – setup new consumer and provider groups.
              </li>
            </ul>
          </div>
          <br>
          <!--<div class="row container">
            <p class="fw-bold display-3 mt-4" id="next">Next Steps</p>

            <ul class="fw-lighter display-5 list-unstyled pt-3">
              <li class="pt-3 ps-5">
                <a href="" class=" ">
                  Getting Started
                </a>
              </li>
              <li class="pt-3 ps-5">
                <a href="" class=" ">Architecture Overview
                </a>
              </li>
            </ul>
          </div> -->


          <div class="d-flex justify-content-between gx-0 pb-5">
            <div >
              <a href="/Docs/GettingStarted">
                <button type="button" class="btn btn-outline-btnsearch px-4">
                  Getting Started &gt
                </button>
              </a>
            </div>
          </div>
        </div>

       <!-- <div class="col-3 ">
          <SidebarRight class="sticky-top sticky-top-fix" />
        </div> -->
      </div>
    </div>
    <Downloadnow class="my-5" />
  </div>
</template>

<script>
import SidebarLeft from "../../../components/SidebarLeft.vue";
import SidebarRight from "../../../components/SidebarRight.vue";
import Downloadnow from "../../../components/Downloadnow.vue";
import SideBarLeftMobile from "../../../components/SideBarLeftMobile.vue";

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