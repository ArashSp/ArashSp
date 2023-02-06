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
            <p class="fw-bold display-9">Release Notes</p>
          </div>
          <div class="row gx-0 pb-3">
            <p class="fw-bold display-3">Release 2.0.0</p>
            <ul class="fw-lighter display-5 ">
              <strong>Features</strong>
              <li class="pt-3 ms-5 lh-base mt-2">
                Split up webhookie services to microservices
              </li>
              <li class="pt-3 ms-5 lh-base">
                Support of AWS EKS
              </li>
              <li class="pt-3 ms-5 lh-base">
                Transformations in subscriptions.
              </li>
            </ul>
          </div>
          <div class="row gx-0 pb-3">
            <p class="fw-bold display-3">Release 1.3.5</p>
            <ul class="fw-lighter display-5 ">
              <strong>Bug Fixes</strong>
              <li class="pt-3 ms-5 lh-base mt-2">
                Fixed the issue when some valid subscription status
                transitions could not be made
              </li>
              <li class="pt-3 ms-5 lh-base">
                Fixed 3 dot menu icon positioning on top of the menu
              </li>
              <li class="pt-3 ms-5 lh-base">
                Hide 3 dot menu when there is no item in the menu
              </li>
              <li class="pt-3 ms-5 lh-base">
                Fixed the issue when Suspend action is available for
                non-suspendable subscriptions
              </li>
            </ul>
          </div>
          <div class="row gx-0 pb-3">
            <p class="fw-bold display-3">Release 1.3.4</p>
            <ul class="fw-lighter display-5 ">
              <strong>Features</strong>
              <li class="pt-3 ms-5 lh-base mt-2">
                Added Submit action to the subscription menu so that
                consumer can go to submit subscription step from the menu
              </li>
            </ul>
            <ul class="fw-lighter display-5 ">
              <strong>Bug Fixes</strong>
              <li class="pt-3 ms-5 lh-base mt-2">
                Fix click issue in the context-menu
              </li>
            </ul>
          </div>
          <div class="row gx-0 pb-3">
            <p class="fw-bold display-3">Release 1.3.3</p>
            <ul class="fw-lighter display-5 ">
              <strong>Features</strong>
              <li class="pt-3 ms-5 lh-base mt-2">
                Added subscription approval to the webhooks
              </li>
              <li class="pt-3 ms-5 lh-base">
                Added the version number in the health indicator
              </li>
              <li class="pt-3 ms-5 lh-base">
                Added About menu which includes product and database version
                information
              </li>
              <li class="pt-3 ms-5 lh-base">
                Added webhookie version to the banner
              </li>
            </ul>
          </div>
          <div class="row gx-0 pb-3">
            <p class="fw-bold display-3">Release 1.2.0</p>
            <ul class="fw-lighter display-5 ">
              <strong>Features</strong>
              <li class="pt-3 ms-5 lh-base mt-2">
                new Subscription UX
              </li>
              <li class="pt-3 ms-5 lh-base">
                rename SAVED to DRAFT when subscription is saved
              </li>
            </ul>
          </div>
          <div class="row gx-0 pb-3">
            <p class="fw-bold display-3">Release 1.2.0</p>
            <ul class="fw-lighter display-5 ">
              <strong>Features</strong>
              <li class="pt-3 ms-5 lh-base mt-2">
                new Subscription UX
              </li>
              <li class="pt-3 ms-5 lh-base">
                rename SAVED to DRAFT when subscription is saved
              </li>
            </ul>
          </div>
          <div class="row gx-0 pb-3">
            <p class="fw-bold display-3">Release 1.1.1</p>
            <ul class="fw-lighter display-5 ">
              <strong>Features</strong>
              <li class="pt-3 ms-5 lh-base mt-2">
                Add application management group and assign user to that group remove
                consumer groups from application
              </li>
              <li class="pt-3 ms-5 lh-base">
                Add OAuth 2.0 support for subscriptions
              </li>
            </ul>
            <ul class="fw-lighter display-5 ">
              <strong>Bug Fixes</strong>
              <li class="pt-3 ms-5 lh-base mt-2">
                Fix and refactor Migrator issue when having only one migration to be applied
              </li>
            </ul>
          </div>
          <div class="row gx-0 pb-3">
            <p class="fw-bold display-3">Release 1.0</p>
            <p class="fw-lighter display-5 lh-base">
              Initial release of webhookie
            </p>
          </div>
          <div class="d-flex justify-content-between gx-0 pb-5">
            <div >
              <a href="/Docs/APIDocumentation">
                <button type="button" class="btn btn-outline-btnsearch px-4">
                  &lt API Documentation
                </button>
              </a>
            </div>
            <div >
              <a href="/Docs/DeveloperPortal">
                <button type="button" class="btn btn-outline-btnsearch px-4 ms-4">
                  Developer Portal &gt
                </button>
              </a>
            </div>
          </div>
        </div>

        <!--<div class="col-3 ">
          <SidebarRight class="sticky-top sticky-top-fix" />
        </div>-->
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