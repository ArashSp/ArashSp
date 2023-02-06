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
            <p class="fw-bold display-9">Subscription Management</p>
          </div>
          <div class="row gx-0">
            <p class="fw-lighter display-5 lh-base pb-3">
              webhookie provides the capability for developer communities to implement and
              manage subscriptions to the webhooks they need. As a provider of data it's possible
              to tailor the subscription workflow to include governance workflows to approve subscriptions
              or enable straightforward subscriptions when extra governance is not required.
            </p>
          </div>

          <div class="d-flex justify-content-between gx-0 pb-5">
            <div >
              <a href="/Docs/APIManagement">
                <button type="button" class="btn btn-outline-btnsearch px-4">
                  &lt API Management
                </button>
              </a>
            </div>
            <div >
              <a href="/Docs/TrafficManagement">
                <button type="button" class="btn btn-outline-btnsearch px-4 ms-4">
                  Traffic Management &gt
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