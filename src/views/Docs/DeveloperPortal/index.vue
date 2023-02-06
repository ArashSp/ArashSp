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
            <p class="fw-bold display-9">Developer Portal</p>
          </div>
          <div class="row gx-0">
            <p class="fw-lighter display-5 lh-base pb-3">
              webhookie's developer portal enables you to get started fast with event-driven APIs.
              It can be used by your developer communities to design, deploy, subscribe and manage
              event-driven APIs.
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              The portal can be branded.  You can use your own logo, brand colour, page title, tag line,
              favicon and hero image.
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              If however you would like to include webhookie in your own developer portal you can of
              course do so using webhookie's API.
            </p>
          </div>

          <div class="d-flex justify-content-between gx-0 pb-5">
            <div >
              <a href="/Docs/ReleaseNotes">
                <button type="button" class="btn btn-outline-btnsearch px-4">
                  &lt Release Notes
                </button>
              </a>
            </div>
            <div >
              <a href="/Docs/APIManagement">
                <button type="button" class="btn btn-outline-btnsearch px-4 ms-4">
                  API Management &gt
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