import{_ as c,a as d}from"./SidebarRight.44942d08.js";import{a as _,e as w,f as e,h as s,j as t,w as o,l,i as g,o as y,p as m,k as v}from"./entry.bd0fefb3.js";import{_ as r}from"./Downloadnow.3c28d837.js";const f=""+globalThis.__publicAssetsURL("images/portal-home-page.svg"),p=""+globalThis.__publicAssetsURL("images/webhook-page.svg"),k=""+globalThis.__publicAssetsURL("images/create-webhook-API.svg"),x=""+globalThis.__publicAssetsURL("images/New-Subscription-UX.svg"),A=""+globalThis.__publicAssetsURL("images/Traffic.svg");const P={return:{},components:{SidebarLeft:c,SidebarRight:d,Downloadnow:r}},i=n=>(m("data-v-a8e06ee7"),n=n(),v(),n),I={class:"container"},S=l('<div class="row gx-0" data-v-a8e06ee7><div class="col-3" data-v-a8e06ee7></div><div class="col-lg-6 col-md-auto" data-v-a8e06ee7><form class="d-flex pt-4" data-v-a8e06ee7><input class="form-control bg-blackBg text-white py-2 px-4" type="search" placeholder="Search..." aria-label="Search" data-v-a8e06ee7><button class="btn btn-btnsearch text-white px-4 py-2" type="submit" data-v-a8e06ee7> Search </button></form></div><div class="col-3" data-v-a8e06ee7></div></div>',1),T={class:"row gx-0"},C={class:"col-3"},L={class:"col-lg-6 col-md-auto"},R={class:"row"},U=i(()=>e("p",{class:"fw-bold display-10 pt-4"},"Get started fast",-1)),z=i(()=>e("p",{class:"fw-lighter display-5 py-3"}," The easiest way to evaluate webhookie is using docker. ",-1)),W={class:"fw-lighter display-5 py-3"},B=l('<p class="fw-lighter display-5 py-3" data-v-a8e06ee7> Download our docker-compose file and supporting keycloak files in this zip file. </p><button type="button" class="btn btn-primary fw-normal display-5 px-3 py-3 col-lg-7 col-md-auto" data-v-a8e06ee7> Download webhookie-w-mongodb-keycloak.zip </button><p class="fw-lighter display-5 py-4" data-v-a8e06ee7> Unpack the zip file to a new folder dedicated to webhookie. </p><div class="warningBox p-4" data-v-a8e06ee7><p class="fw-lighter display-5 lh-base" data-v-a8e06ee7><strong data-v-a8e06ee7>Note Apple M1 users:</strong> the standard keycloak image in the docker compose file does not yet support the Apple M1 ARM based architecture. Therefore you need to replace the keycloak image inside the docker-compose (docker-compose.yml) file with </p><p class="fw-lighter display-5" data-v-a8e06ee7><code class="text-white bg-blackBg display-7 fw-light" data-v-a8e06ee7>wizzn/keycloak:14</code> (instead of : <code class="text-white bg-blackBg display-7 fw-light" data-v-a8e06ee7>quay.io/keycloak/keycloak:14.0.0</code> ) </p></div><p class="fw-lighter display-5 mt-3" data-v-a8e06ee7> From the new folder issue the following command in your terminal. </p><p class="fw-lighter display-5 pt-3" data-v-a8e06ee7> Unpack the zip file to a new folder dedicated to <strong data-v-a8e06ee7>webhookie</strong>. </p><div class="bg-codesample py-4 px-2 my-3" data-v-a8e06ee7><code class="text-white fw-light display-7 px-5" data-v-a8e06ee7> docker compose up</code></div><p class="fw-lighter display-5 mt-4 mb-5" data-v-a8e06ee7> This will start the necessary containers to evaluate the product. </p>',8),N={class:"row"},M=i(()=>e("p",{class:"fw-bold display-10 my-4"},"Using webhookie",-1)),V={class:"fw-lighter display-5 pt-3 pb-1"},D=l('<ul class="fw-lighter display-5 pt-3 pb-4 list-unstyled" data-v-a8e06ee7> An admin user has been set up for you with the following details: <li class="pt-3 ps-5" data-v-a8e06ee7><strong data-v-a8e06ee7>username:</strong> webhookie_admin </li><li class="pt-3 ps-5" data-v-a8e06ee7><strong data-v-a8e06ee7>password:</strong> passwd1</li></ul><p class="fw-lighter display-5 lh-base" data-v-a8e06ee7> Login to webhookie when the server health indicator is green. The health indicator is the dot next to login. This will become green when the server and its dependencies are up. </p><img src="'+f+'" class="mt-3 mb-3 pb-5" style="max-width:100%;" data-v-a8e06ee7>',3),E={class:"row"},G=i(()=>e("p",{class:"fw-bold display-3 pb-3"},"Create a webhook API",-1)),$=i(()=>e("p",{class:"fw-lighter display-5"},[t(" In the "),e("strong",null,"Webhooks"),t(" section, you can create a new Webhook API. ")],-1)),q=i(()=>e("img",{src:p,class:"mt-2 mb-3 pb-4",style:{"max-width":"100%"}},null,-1)),H={class:"fw-lighter display-5 lh-base"},F=i(()=>e("img",{src:k,class:"mt-3 mb-3 pb-4",style:{"max-width":"100%"}},null,-1)),X=i(()=>e("p",{class:"fw-lighter display-5 lh-base"},[t(" When you click "),e("strong",null,"Publish"),t(" , the API will be available, to discover and subscribe, to any users within the consumer groups you selected. ")],-1)),Y=i(()=>e("img",{src:p,class:"mt-3 mb-3 pb-4",style:{"max-width":"100%"}},null,-1)),j={class:"fw-lighter display-5 mt-3 list-unstyled"},Q={class:"pt-3 ps-5"},O={class:"pt-3 ps-5"},J={class:"pt-3 ps-5 pb-5"},K={class:"row"},Z=l('<p class="fw-bold display-3" data-v-a8e06ee7>Setup a subscription</p><p class="fw-lighter display-5 lh-base" data-v-a8e06ee7> Subscriptions are set up by your webhook consumers. They are self-managed subscriptions meaning that as an application provider you don\u2019t have to lift a finger to help your subscribers integrate. </p><img src="'+x+'" class="mt-3 mb-3 pb-4" style="max-width:100%;" data-v-a8e06ee7><ul class="fw-lighter display-5 list-unstyled" data-v-a8e06ee7> A subscription is created with the following steps <li class="pt-3 ps-5 lh-base" data-v-a8e06ee7> 1.Click <strong data-v-a8e06ee7>Subscribe</strong> on the webhook you want to subscribe to </li><li class="pt-3 ps-5 lh-base" data-v-a8e06ee7> 2.<strong data-v-a8e06ee7>Create Application</strong> \u2013 this application is a logical container for the callbacks associated with it. It should reflect the name of the application that hosts the callback. </li><li class="pt-3 ps-5 lh-base" data-v-a8e06ee7> 3.<strong data-v-a8e06ee7>Create Callback</strong> \u2013 this is the actual callback URL details. In CE you can choose to secure your callback with a HMAC signature (if you need a few more security options check out our Enterprise edition). </li><li class="pt-3 ps-5 lh-base" data-v-a8e06ee7> 4.<strong data-v-a8e06ee7>Save</strong> the Subscription </li><li class="pt-3 ps-5 lh-base" data-v-a8e06ee7> 5.<strong data-v-a8e06ee7>Test</strong> the Subscription \u2013 Webhookie will send the example request body to your callback. If you get a 2XX response from your callback then you are good to proceed. </li><li class="pt-3 ps-5 pb-3 lh-base" data-v-a8e06ee7> 6.<strong data-v-a8e06ee7>Activate</strong> the Subscription \u2013 your callback will now start receiving traffic when the events occur. </li></ul>',4),ee={class:"fw-lighter display-5 list-unstyled"},te={class:"pt-3 ps-5"},se={class:"pt-3 ps-5"},ae={class:"pt-3 ps-5 pb-5"},oe={class:"row"},ie=i(()=>e("p",{class:"fw-bold display-3 pb-4"},"Publish an event",-1)),le={class:"fw-lighter display-5 list-unstyled"},ne={class:"pt-3 ps-5 lh-base"},ce=i(()=>e("strong",null,"AMQP",-1)),de={class:"pt-3 ps-5 pb-4 lh-base"},re=i(()=>e("strong",null,"API",-1)),pe=l(`<p class="fw-lighter display-5 lh-base pb-3" data-v-a8e06ee7> If you want to quickly evaluate the product, without integrating, you can use an API client like Postman to publish events to webhookie. </p><ul class="fw-lighter display-5 list-unstyled lh-base" data-v-a8e06ee7> To publish an event to webhookie requires two steps. The first to get an access token and the second to post the event. <li class="pt-3 ps-5" data-v-a8e06ee7> 1.Get a token to publish events to webhookie <div class="text-white bg-codesample p-4 m-4" data-v-a8e06ee7><pre data-v-a8e06ee7>    POST /auth/realms/webhookie/protocol/openid-connect/token 
    HTTP/1.1
    Host: localhost:8800
    Authorization: Basic d2ViaG9va2llX2NsaWVudDo=
    Content-Type: application/x-www-form-urlencoded

    username=webhookie_admin&amp;password=passwd1&amp;grant_type=password
            </pre></div></li><li class="pt-3 ps-5" data-v-a8e06ee7> 2. Publish an event (<strong data-v-a8e06ee7>Note</strong>: we are publishing a <strong data-v-a8e06ee7>createdPet</strong> event \u2013 see the wh-topic header).1.Get a token to publish events to webhookie <div class="text-white bg-codesample p-4 m-4" data-v-a8e06ee7><pre data-v-a8e06ee7>    POST /ingress/event 
    HTTP/1.1
    Host: localhost:8000
    wh-topic: createdPet
    wh-trace-id: 7b338cb9-bb17-4aee-9cc9-705af28a1cf9
    Content-Type: text/plain
    Authorization: Bearer

    Your test message
            </pre></div></li></ul><p class="fw-lighter display-5 lh-base pb-3" data-v-a8e06ee7> You can download a Postman script with the above two API requests below (note: you must extract the json file from the zip file before you import it into Postman). </p><button type="button" class="btn btn-primary fw-normal display-5 px-3 py-2 mt-1 mb-5 col-lg-7 col-md-auto" data-v-a8e06ee7> Download webhookie-w-mongodb-keycloak.zip </button>`,4),he=i(()=>e("div",{class:"row"},[e("p",{class:"fw-bold display-3 mt-5"},"View Traffic"),e("p",{class:"fw-lighter display-5 lh-base"}," If you navigate to Traffic in the webhookie developer portal you can see the traffic being sent to your subscription. "),e("img",{src:A,class:"mt-3 mb-3 pb-4",style:{"max-width":"100%"}})],-1)),ue={class:"row container"},be=i(()=>e("p",{class:"fw-bold display-3 mt-4"},"What\u2019s next?",-1)),_e={class:"fw-lighter display-5 list-unstyled pt-3"},we={class:"pt-3 ps-5"},ge={class:"pt-3 ps-5"},ye={class:"pt-3 ps-5"},me={class:"col-3"};function ve(n,fe,ke,xe,Ae,Pe){const h=c,a=g,u=d,b=r;return y(),w("div",null,[e("div",I,[S,e("div",T,[e("div",C,[s(h)]),e("div",L,[e("div",R,[U,z,e("p",W,[t(" Make sure you have "),s(a,{to:"",class:"text-decoration-none link-btnsearch"},{default:o(()=>[t("docker")]),_:1}),t(" installed on your system. ")]),B]),e("div",N,[M,e("p",V,[t(" In your browser go to the webhookie developer portal . "),s(a,{to:"http://localhost:4300",class:"text-decoration-none link-btnsearch"},{default:o(()=>[t("http://localhost:4300")]),_:1})]),D]),e("div",E,[G,$,q,e("p",H,[t(" When you create a new Webhook API you will see a preloaded "),s(a,{to:"http://localhost:4300",class:"text-decoration-none link-btnsearch"},{default:o(()=>[t("ASYNC API specification")]),_:1}),t(" called the Pet Store Events API. You can replace this or edit it to reflect your own Webhook API details. Alternatively, you can just publish the Pet Store Events API to get a feel for the product. ")]),F,X,Y,e("ul",j,[t(" For more informaion: "),e("li",Q,[s(a,{to:"",class:"text-decoration-none link-btnsearch"},{default:o(()=>[t(" Webhook APIs ")]),_:1})]),e("li",O,[s(a,{to:"",class:"text-decoration-none link-btnsearch"},{default:o(()=>[t("Consumer Groups ")]),_:1})]),e("li",J,[s(a,{to:"",class:"text-decoration-none link-btnsearch"},{default:o(()=>[t("Provider Groups")]),_:1})])])]),e("div",K,[Z,e("ul",ee,[t(" For more informaion: "),e("li",te,[s(a,{to:"",class:"text-decoration-none link-btnsearch"},{default:o(()=>[t(" Subscriptions ")]),_:1})]),e("li",se,[s(a,{to:"",class:"text-decoration-none link-btnsearch"},{default:o(()=>[t("Applications ")]),_:1})]),e("li",ae,[s(a,{to:"",class:"text-decoration-none link-btnsearch"},{default:o(()=>[t("Callbacks")]),_:1})])])]),e("div",oe,[ie,e("ul",le,[t(" There are two options to integrate your product or system with webhookie. These are: "),e("li",ne,[ce,t(" \u2013 If you have RabbitMQ or any other message bus within your architecture you can use it to send events to webhookie. "),s(a,{to:"",class:"text-decoration-none link-btnsearch"},{default:o(()=>[t(" See AMQP Setup")]),_:1}),t(". ")]),e("li",de,[re,t(" \u2013 If you don\u2019t have a message bus within your architecture then we have a simple REST API to post events to webhookie."),s(a,{to:"",class:"text-decoration-none link-btnsearch"},{default:o(()=>[t(" See API integration")]),_:1}),t(". ")])]),pe]),he,e("div",ue,[be,e("ul",_e,[t(" For more informaion: "),e("li",we,[t(" Understand the "),s(a,{to:"",class:"text-decoration-none link-btnsearch"},{default:o(()=>[t(" architecture and deployment ")]),_:1}),t(" options we support. ")]),e("li",ge,[t(" Learn how to . "),s(a,{to:"",class:"text-decoration-none link-btnsearch"},{default:o(()=>[t("white label the developer portal ")]),_:1})]),e("li",ye,[t(" Learn how to Integrate webhookie with your own . "),s(a,{to:"",class:"text-decoration-none link-btnsearch"},{default:o(()=>[t("identity platform")]),_:1})])])])]),e("div",me,[s(u)])])]),s(b,{class:"my-5"})])}const Ce=_(P,[["render",ve],["__scopeId","data-v-a8e06ee7"]]);export{Ce as default};
