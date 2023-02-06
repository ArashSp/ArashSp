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
            <p class="fw-bold display-9">Getting Started</p>
          </div>
          <div class="row gx-0">
            <ul class="fw-lighter display-5 ">
              webhookie is a container based product that enables you to add advanced webhook
              capability to your architecture. It can be deployed easily using kubernettes.
              To try it out fast we recommend using one of the following kubernettes deployments:
              <li class="pt-3 ms-5 lh-base mt-2">
                Minikube
              </li>
              <li class="pt-3 ms-5 lh-base">
                AWS EKS
              </li>
              <li class="pt-3 ms-5 pb-4 lh-base">
                For any other Kubernettes implementation it should work but may require some tweaks.
                Create an issue in our Git repo and we'll do our best to support your deployment.
              </li>
            </ul>
          </div>
          <div class="row">
            <p class="fw-lighter display-5 lh-base">
              Once you have your cluster up and running with kubectl configured then download and
              run our webhookie shell script.
            </p>
            <a href="https://github.com/webhookie/webhookie-deployment/releases/download/v1.0.9/webhookie-k8s-scripts-v1.0.9.zip">
              <button type="button" class="btn btn-primary fw-normal display-5 px-3 py-2 mt-1 mb-5 col-lg-7 col-md-auto ">
                Download webhookie.sh
              </button>
            </a>
          </div>
          <div class="row">
            <p class="fw-lighter display-5 lh-base">
              That's it. You are up and running with webhookie. Any issues please use our Git
              repo to report the issue.
            </p>
          </div>
          <div class="d-flex justify-content-between gx-0 pb-5">
            <div >
              <a href="/Docs/Overview">
                <button type="button" class="btn btn-outline-btnsearch px-4">
                  &lt Overview
                </button>
              </a>
            </div>
            <div >
              <a href="/Docs/ArchitectureOverview">
                <button type="button" class="btn btn-outline-btnsearch px-4 ms-4">
                  Architecture Overview &gt
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
