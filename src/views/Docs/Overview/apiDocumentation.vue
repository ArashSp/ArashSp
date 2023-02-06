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
            <p class="fw-bold display-9">API Documentation</p>
          </div>
          <div class="row gx-0">
            <p class="fw-lighter display-5 lh-base pb-3">
              We think we provide a pretty nice developer portal that can be
              used to administer, deploy and consume webhook APIs. However, we
              know that in many use cases you’d like to have your own user
              experience and/or integrate with your existing developer portal.
              With webhookie’s API, we have you covered! All the interactions
              you see on our developer portal are utilizing our webhookie API.
            </p>
          </div>
          <div class="row gx-0">
            <p class="fw-lighter display-5 lh-base pb-3">
              The full and most up-to-date swagger API documentation can be
              found at
              <a href="http://localhost:8000/swagger-ui.html"
                class="link-btnsearch">http://localhost:8000/swagger-ui.html</a>
              after you install it.
            </p>
          </div>
          <div class="row gx-0">
            <p class="fw-lighter display-5 pb-5">
              Here we provide just an overview of the different APIs that come
              with the product.
            </p>
          </div>

          <div class="pt-4" id="AdminAPI">
            <div class="row gx-0 pb-3">
              <p class="fw-bold display-9">Admin API</p>
            </div>
            <div class="row gx-0">
              <p class="fw-lighter display-5 lh-base pb-3">
                With the Admin API, you can manage the consumer groups and
                provider groups on your webhookie instance. The API requires the
                WH_ADMIN role.
              </p>
            </div>
            <div class="row gx-0">
              <p class="fw-lighter display-5 lh-base pb-3">
                Check out the swagger API documentation at
                <a href="http://localhost:8000/swagger-ui.html"
                  class="link-btnsearch">http://localhost:8000/swagger-ui.html</a>
                for a full list of endpoints.
              </p>
            </div>
            <div class="row gx-0 bg-codesample fw-light display-7">
              <pre><code>
    # As an example here is the request to create a new provider group
    # this is how comments will be styled

        
                 <p class="text-btnsearch ps-3">  POST /admin/providergroups</p>
    # This is how important keywords and  commands will be styled 

    Host: localhost:8000
    Authorization: Bearer   &lt;bearer token&gt;
    Content-Type: application/json

    { 
     "name": "New Provider Group",
     "description": "My new provider group", "iamGroupName":
     "newProviderGroup"
    } 

    # This is how code will be styled
              </code></pre>
            </div>
          </div>
          <!-- API Documentation -->
          <div class="pt-4 mt-4" id="GroupAPI">
            <div class="row gx-0 pb-3">
              <p class="fw-bold display-9">Group API</p>
            </div>
            <div class="row gx-0">
              <p class="fw-lighter display-5 lh-base pb-3">
                The Group API has endpoints to return the list of consumer
                groups and provider groups that are applicable for the logged-in
                user when creating webhook APIs. The API requires the
                WH_PROVIDER role.
              </p>
            </div>
            <div class="row gx-0">
              <p class="fw-lighter display-5 lh-base pb-3">
                Check out the swagger API documentation at
                <a href="http://localhost:8000/swagger-ui.html"
                  class="link-btnsearch">http://localhost:8000/swagger-ui.html</a>
                for a full list of endpoints.
              </p>
            </div>
            <div class="row gx-0 bg-codesample fw-light display-7">
              <pre><code>
    # Returns the list of provider groups that the logged in user belongs to. 

       <p class="text-btnsearch ps-3"> GET /group/providergroups</p>
    Host: localhost:8000
    Authorization: Bearer &lt;bearer token&gt;
              </code></pre>
            </div>
          </div>
          <!-- Group API -->
          <div class="pt-4 mt-4" id="PublicAPI">
            <div class="row gx-0 pb-3">
              <p class="fw-bold display-9">Public API</p>
            </div>
            <div class="row gx-0">
              <p class="fw-lighter display-5 lh-base pb-3">
                The Public API has an endpoint to return configuration
                information to the front-end that is required to initialize
                webhookie. An example of this information is the identity
                platform information such as client id etc.
              </p>
            </div>
            <div class="row gx-0 bg-codesample fw-light display-7">
              <pre><code> 
      <p class="text-btnsearch ps-3"> GET /public/config</p>
    Host: localhost:8000
    Authorization: Bearer &lt;bearer token&gt;
              </code></pre>
            </div>
          </div>
          <!-- Public API -->
          <div class="pt-4 mt-4" id="SubscriptionAPI">
            <div class="row gx-0 pb-3">
              <p class="fw-bold display-9">Subscription API</p>
            </div>
            <div class="row gx-0">
              <p class="fw-lighter display-5 lh-base pb-3">
                With the subscription API, you can set up and manage
                subscriptions, applications, and callbacks. It also contains
                some endpoints where, as a provider, you can discover the
                entities and the associated application and callbacks that
                subscribe to your data.
              </p>
            </div>
            <div class="row gx-0">
              <p class="fw-lighter display-5 lh-base pb-3">
                Check out the swagger API documentation at
                <a href="http://localhost:8000/swagger-ui.html"
                  class="link-btnsearch">http://localhost:8000/swagger-ui.html</a>
                for a full list of endpoints.
              </p>
            </div>
            <div class="row gx-0 bg-codesample fw-light display-7">
              <pre><code>
    # create a subscription with a callback that has been previously created.
 <p class="text-btnsearch ps-3"> POST /subscriptions </p>
    Host: localhost:8000
    Authorization: Bearer &lt;bearer token&gt;
    Content-Type: application/json

    {
       "topic": "createdPet",
       "callbackId": "61a48ec991139d3f29761825"
    }
              </code></pre>
            </div>
          </div>
          <!-- Subscription API -->
          <div class="pt-4 mt-4" id="TrafficAPI">
            <div class="row gx-0 pb-3">
              <p class="fw-bold display-9">Traffic API</p>
            </div>
            <div class="row gx-0">
              <p class="fw-lighter display-5 lh-base pb-3">
                With the Traffic API, you can inspect the traffic being sent to
                your callbacks as a WH_CONSUMER and inspect the traffic being
                sent through your API as a WH_PROVIDER.
              </p>
            </div>
            <div class="row gx-0">
              <p class="fw-lighter display-5 lh-base pb-3">
                Check out the swagger API documentation at
                <a href="http://localhost:8000/swagger-ui.html"
                  class="link-btnsearch">http://localhost:8000/swagger-ui.html</a>
                for a full list of endpoints.
              </p>
            </div>
            <div class="row gx-0 bg-codesample fw-light display-7">
              <pre><code>
    # retrieve the spans (events) that have been sent to your callback URL.
    <p class="text-btnsearch ps-3">GET /traffic/span</p>
    Host: localhost:8000
    Authorization: Bearer &lt;bearer token&gt;
              </code></pre>
            </div>
          </div>
          <!-- Traffic API -->
          <div class="pt-4 mt-4" id="UserAPI">
            <div class="row gx-0 pb-3">
              <p class="fw-bold display-9">User API</p>
            </div>
            <div class="row gx-0">
              <p class="fw-lighter display-5 lh-base pb-3">
                With the User API, you can inspect the account details (e.g.
                consumer groups, provider groups, roles) of the logged-in user.
                This API requires the WH_CONSUMER role.
              </p>
            </div>
            <div class="row gx-0">
              <p class="fw-lighter display-5 lh-base pb-3">
                Check out the swagger API documentation at
                <a href="http://localhost:8000/swagger-ui.html"
                  class="link-btnsearch">http://localhost:8000/swagger-ui.html</a>
                for a full list of endpoints.
              </p>
            </div>
            <div class="row gx-0 bg-codesample fw-light display-7">
              <pre><code>
      <p class="text-btnsearch ps-3"> GET /user</p>   
    Host: localhost:8000
    Authorization: Bearer &lt;bearer token&gt;
              </code></pre>
            </div>
          </div>
          <!-- User API -->
          <div class="pt-4 mt-4 pb-5 mb-5" id="WebhookAPI">
            <div class="row gx-0 pb-3">
              <p class="fw-bold display-9">Webhook API</p>
            </div>
            <div class="row gx-0">
              <p class="fw-lighter display-5 lh-base pb-3">
                With the Webhook API API, you can manage the webhook APIs in
                webhookie. Creating the webhook APIs requires the WH_PROVIDER
                role while to retrieve webhook APIs requires the WH_CONSUMER
                role.
              </p>
            </div>
            <div class="row gx-0">
              <p class="fw-lighter display-5 lh-base pb-3">
                Check out the swagger API documentation at
                <a href="http://localhost:8000/swagger-ui.html"
                  class="link-btnsearch">http://localhost:8000/swagger-ui.html</a>
                for a full list of endpoints.
              </p>
            </div>
            <div class="row gx-0 bg-codesample fw-light display-7">
              <pre><code>
    # To retrieve the list of webhook APIs your user has permission to discover
        <p class="text-btnsearch ps-3">GET /webhookapis</p>
    Host: localhost:8000
    Authorization: Bearer &lt;bearer token&gt;

              </code></pre>
            </div>
          </div>
          <!-- Webhook API  -->

          <div class="d-flex justify-content-between gx-0 pb-5">
            <div >
              <a href="/Docs/ArchitectureOverview">
                <button type="button" class="btn btn-outline-btnsearch px-4">
                  &lt Architecture Overview
                </button>
              </a>
            </div>
            <div>
              <a href="/Docs/ReleaseNotes">
                <button type="button" class="btn btn-outline-btnsearch px-4 ms-4">
                  Release Notes &gt
                </button>
              </a>
            </div>
          </div>
        </div>

        <div class="col-3 ">
          <SidebarRight class="sticky-top sticky-top-fix" />
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