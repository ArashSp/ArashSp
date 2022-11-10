import{_ as s,a as o}from"./SidebarRight-f8c53802.mjs";import{a as c,o as p,e as d,f as t,h as e,w as h,l as u,i as g}from"./entry-066ba218.mjs";import{_ as a}from"./Downloadnow-1b678e87.mjs";const b={return:{},components:{SidebarLeft:s,SidebarRight:o,Downloadnow:a}},w={class:"container"},v={class:"row gx-0"},f={class:"col-3"},m={class:"col-lg-6 col-md-auto mt-5"},y=u(`<div class="pt-4"><div class="row gx-0 pb-3"><p class="fw-bold display-9">API Documentation</p></div><div class="row gx-0"><p class="fw-lighter display-5 lh-base pb-3"> We think we provide a pretty nice developer portal that can be used to administer, deploy and consume webhook APIs. However, we know that in many use cases you\u2019d like to have your own user experience and/or integrate with your existing developer portal. With webhookie\u2019s API, we have you covered! All the interactions you see on our developer portal are utilizing our webhookie API. </p></div><div class="row gx-0"><p class="fw-lighter display-5 lh-base pb-3"> The full and most up-to-date swagger API documentation can be found at <a href="http://localhost:8000/swagger-ui.html" class="link-btnsearch">http://localhost:8000/swagger-ui.html</a> after you install it. </p></div><div class="row gx-0"><p class="fw-lighter display-5 pb-5"> Here we provide just an overview of the different APIs that come with the product. </p></div></div><div class="pt-4" id="API"><div class="row gx-0 pb-3"><p class="fw-bold display-9">API Documentation</p></div><div class="row gx-0"><p class="fw-lighter display-5 lh-base pb-3"> With the Admin API, you can manage the consumer groups and provider groups on your webhookie instance. The API requires the WH_ADMIN role. </p></div><div class="row gx-0"><p class="fw-lighter display-5 lh-base pb-3"> Check out the swagger API documentation at <a href="http://localhost:8000/swagger-ui.html" class="link-btnsearch">http://localhost:8000/swagger-ui.html</a> for a full list of endpoints. </p></div><div class="row gx-0 bg-codesample fw-light display-7"><pre><code>\r
    # As an example here is the request to create a new provider group\r
    # this is how comments will be styled\r
\r
        \r
                 <p class="text-btnsearch ps-3">  POST /admin/providergroups</p>\r
    # This is how important keywords and  commands will be styled \r
\r
    Host: localhost:8000\r
    Authorization: Bearer   &lt;bearer token&gt;\r
    Content-Type: application/json\r
\r
    { \r
     &quot;name&quot;: &quot;New Provider Group&quot;,\r
     &quot;description&quot;: &quot;My new provider group&quot;, &quot;iamGroupName&quot;:\r
     &quot;newProviderGroup&quot;\r
    } \r
\r
    # This is how code will be styled\r
              </code></pre></div></div><div class="pt-4 mt-4" id="Group"><div class="row gx-0 pb-3"><p class="fw-bold display-9">Group API</p></div><div class="row gx-0"><p class="fw-lighter display-5 lh-base pb-3"> The Group API has endpoints to return the list of consumer groups and provider groups that are applicable for the logged-in user when creating webhook APIs. The API requires the WH_PROVIDER role. </p></div><div class="row gx-0"><p class="fw-lighter display-5 lh-base pb-3"> Check out the swagger API documentation at <a href="http://localhost:8000/swagger-ui.html" class="link-btnsearch">http://localhost:8000/swagger-ui.html</a> for a full list of endpoints. </p></div><div class="row gx-0 bg-codesample fw-light display-7"><pre><code>\r
    # Returns the list of provider groups that the logged in user belongs to. \r
\r
       <p class="text-btnsearch ps-3"> GET /group/providergroups</p>\r
    Host: localhost:8000\r
    Authorization: Bearer &lt;bearer token&gt;\r
              </code></pre></div></div><div class="pt-4 mt-4" id="Public"><div class="row gx-0 pb-3"><p class="fw-bold display-9">Public API</p></div><div class="row gx-0"><p class="fw-lighter display-5 lh-base pb-3"> The Public API has an endpoint to return configuration information to the front-end that is required to initialize webhookie. An example of this information is the identity platform information such as client id etc. </p></div><div class="row gx-0 bg-codesample fw-light display-7"><pre><code> \r
      <p class="text-btnsearch ps-3"> GET /public/config</p>\r
    Host: localhost:8000\r
    Authorization: Bearer &lt;bearer token&gt;\r
              </code></pre></div></div><div class="pt-4 mt-4" id="Subscription"><div class="row gx-0 pb-3"><p class="fw-bold display-9">Subscription API</p></div><div class="row gx-0"><p class="fw-lighter display-5 lh-base pb-3"> With the subscription API, you can set up and manage subscriptions, applications, and callbacks. It also contains some endpoints where, as a provider, you can discover the entities and the associated application and callbacks that subscribe to your data. </p></div><div class="row gx-0"><p class="fw-lighter display-5 lh-base pb-3"> Check out the swagger API documentation at <a href="http://localhost:8000/swagger-ui.html" class="link-btnsearch">http://localhost:8000/swagger-ui.html</a> for a full list of endpoints. </p></div><div class="row gx-0 bg-codesample fw-light display-7"><pre><code>\r
    # create a subscription with a callback that has been previously created.\r
 <p class="text-btnsearch ps-3"> POST /subscriptions </p>\r
    Host: localhost:8000\r
    Authorization: Bearer &lt;bearer token&gt;\r
    Content-Type: application/json\r
\r
    {\r
       &quot;topic&quot;: &quot;createdPet&quot;,\r
       &quot;callbackId&quot;: &quot;61a48ec991139d3f29761825&quot;\r
    }\r
              </code></pre></div></div><div class="pt-4 mt-4" id="Traffic "><div class="row gx-0 pb-3"><p class="fw-bold display-9">Traffic API</p></div><div class="row gx-0"><p class="fw-lighter display-5 lh-base pb-3"> With the Traffic API, you can inspect the traffic being sent to your callbacks as a WH_CONSUMER and inspect the traffic being sent through your API as a WH_PROVIDER. </p></div><div class="row gx-0"><p class="fw-lighter display-5 lh-base pb-3"> Check out the swagger API documentation at <a href="http://localhost:8000/swagger-ui.html" class="link-btnsearch">http://localhost:8000/swagger-ui.html</a> for a full list of endpoints. </p></div><div class="row gx-0 bg-codesample fw-light display-7"><pre><code>\r
    # retrieve the spans (events) that have been sent to your callback URL.\r
    <p class="text-btnsearch ps-3">GET /traffic/span</p>\r
    Host: localhost:8000\r
    Authorization: Bearer &lt;bearer token&gt;\r
              </code></pre></div></div><div class="pt-4 mt-4" id="User"><div class="row gx-0 pb-3"><p class="fw-bold display-9">User API</p></div><div class="row gx-0"><p class="fw-lighter display-5 lh-base pb-3"> With the User API, you can inspect the account details (e.g. consumer groups, provider groups, roles) of the logged-in user. This API requires the WH_CONSUMER role. </p></div><div class="row gx-0"><p class="fw-lighter display-5 lh-base pb-3"> Check out the swagger API documentation at <a href="http://localhost:8000/swagger-ui.html" class="link-btnsearch">http://localhost:8000/swagger-ui.html</a> for a full list of endpoints. </p></div><div class="row gx-0 bg-codesample fw-light display-7"><pre><code>\r
      <p class="text-btnsearch ps-3"> GET /user</p>   \r
    Host: localhost:8000\r
    Authorization: Bearer &lt;bearer token&gt;\r
              </code></pre></div></div><div class="pt-4 mt-4 pb-5 mb-5" id="Webhook"><div class="row gx-0 pb-3"><p class="fw-bold display-9">Webhook API API</p></div><div class="row gx-0"><p class="fw-lighter display-5 lh-base pb-3"> With the Webhook API API, you can manage the webhook APIs in webhookie. Creating the webhook APIs requires the WH_PROVIDER role while to retrieve webhook APIs requires the WH_CONSUMER role. </p></div><div class="row gx-0"><p class="fw-lighter display-5 lh-base pb-3"> Check out the swagger API documentation at <a href="http://localhost:8000/swagger-ui.html" class="link-btnsearch">http://localhost:8000/swagger-ui.html</a> for a full list of endpoints. </p></div><div class="row gx-0 bg-codesample fw-light display-7"><pre><code>\r
    # To retrieve the list of webhook APIs your user has permission to discover\r
        <p class="text-btnsearch ps-3">GET /webhookapis</p>\r
    Host: localhost:8000\r
    Authorization: Bearer &lt;bearer token&gt;\r
\r
              </code></pre></div></div>`,8),_={class:"row gx-0 pb-5"},x={class:"col"},A=t("button",{type:"button",class:"btn btn-outline-btnsearch px-4"}," Get started ",-1),P=t("div",{class:"col text-right"},[t("button",{type:"button",class:"btn btn-outline-btnsearch px-4 ms-4"}," Road map ")],-1),k={class:"col-3"};function I(q,T,W,H,R,C){const i=s,r=g,l=o,n=a;return p(),d("div",w,[t("div",v,[t("div",f,[e(i)]),t("div",m,[y,t("div",_,[t("div",x,[e(r,{to:"/GettingStarted"},{default:h(()=>[A]),_:1})]),P])]),t("div",k,[e(l)]),e(n)])])}var B=c(b,[["render",I]]);export{B as default};
