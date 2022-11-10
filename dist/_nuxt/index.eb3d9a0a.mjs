import{_ as d,a as c}from"./SidebarRight.9461acdb.mjs";import{a as u,o as w,e as y,f as t,h as s,w as a,l as n,k as e,i as m,p as v,j as f}from"./entry.d48b0872.mjs";import{_ as r}from"./Downloadnow.dc9a2b25.mjs";const g=""+new URL("portal-home-page.1021195c.svg",import.meta.url).href,h=""+new URL("webhook-page.964dea6a.svg",import.meta.url).href,k=""+new URL("create-webhook-API.77c88c82.svg",import.meta.url).href,x=""+new URL("New-Subscription-UX.a9c4aa66.svg",import.meta.url).href,P=""+new URL("Traffic.e6e07731.svg",import.meta.url).href;const A={return:{},components:{SidebarLeft:d,SidebarRight:c,Downloadnow:r}},i=l=>(v("data-v-2d2152eb"),l=l(),f(),l),I=n('<div class="row gx-0" data-v-2d2152eb><div class="col-3" data-v-2d2152eb></div><div class="col-6" data-v-2d2152eb><form class="d-flex pt-4" data-v-2d2152eb><input class="form-control bg-blackBg text-white py-2 px-4" type="search" placeholder="Search..." aria-label="Search" data-v-2d2152eb><button class="btn btn-btnsearch text-white px-4 py-2" type="submit" data-v-2d2152eb> Search </button></form></div><div class="col-3" data-v-2d2152eb></div></div>',1),S={class:"row gx-0"},T={class:"col-3"},C={class:"col-6"},L={class:"row"},R=i(()=>t("p",{class:"fw-bold display-10 pt-4"},"Get started fast",-1)),U=i(()=>t("p",{class:"fw-lighter display-5 py-3"}," The easiest way to evaluate webhookie is using docker. ",-1)),z={class:"fw-lighter display-5 py-3"},W=e(" Make sure you have "),B=e("docker"),N=e(" installed on your system. "),M=n('<p class="fw-lighter display-5 py-3" data-v-2d2152eb> Download our docker-compose file and supporting keycloak files in this zip file. </p><button type="button" class="btn btn-primary fw-normal display-5 px-3 py-3" style="max-width:60%;" data-v-2d2152eb> Download webhookie-w-mongodb-keycloak.zip </button><p class="fw-lighter display-5 py-4" data-v-2d2152eb> Unpack the zip file to a new folder dedicated to webhookie. </p><div class="warningBox p-4" data-v-2d2152eb><p class="fw-lighter display-5 lh-base" data-v-2d2152eb><strong data-v-2d2152eb>Note Apple M1 users:</strong> the standard keycloak image in the docker compose file does not yet support the Apple M1 ARM based architecture. Therefore you need to replace the keycloak image inside the docker-compose (docker-compose.yml) file with </p><p class="fw-lighter display-5" data-v-2d2152eb><code class="text-white bg-blackBg display-7 fw-light" data-v-2d2152eb>wizzn/keycloak:14</code> (instead of : <code class="text-white bg-blackBg display-7 fw-light" data-v-2d2152eb>quay.io/keycloak/keycloak:14.0.0</code> ) </p></div><p class="fw-lighter display-5 mt-3" data-v-2d2152eb> From the new folder issue the following command in your terminal. </p><p class="fw-lighter display-5 pt-3" data-v-2d2152eb> Unpack the zip file to a new folder dedicated to <strong data-v-2d2152eb>webhookie</strong>. </p><div class="bg-codesample py-4 px-2 my-3" data-v-2d2152eb><code class="text-white fw-light display-7 px-5" data-v-2d2152eb> docker compose up</code></div><p class="fw-lighter display-5 mt-4 mb-5" data-v-2d2152eb> This will start the necessary containers to evaluate the product. </p>',8),V={class:"row"},D=i(()=>t("p",{class:"fw-bold display-10 my-4"},"Using webhookie",-1)),E={class:"fw-lighter display-5 pt-3 pb-1"},G=e(" In your browser go to the webhookie developer portal . "),$=e("http://localhost:4300"),q=n('<ul class="fw-lighter display-5 pt-3 pb-4 list-unstyled" data-v-2d2152eb> An admin user has been set up for you with the following details: <li class="pt-3 ps-5" data-v-2d2152eb><strong data-v-2d2152eb>username:</strong> webhookie_admin </li><li class="pt-3 ps-5" data-v-2d2152eb><strong data-v-2d2152eb>password:</strong> passwd1</li></ul><p class="fw-lighter display-5 lh-base" data-v-2d2152eb> Login to webhookie when the server health indicator is green. The health indicator is the dot next to login. This will become green when the server and its dependencies are up. </p><img src="'+g+'" class="mt-3 mb-3 pb-5" style="max-width:100%;" data-v-2d2152eb>',3),H={class:"row"},F=i(()=>t("p",{class:"fw-bold display-3 pb-3"},"Create a webhook API",-1)),X=i(()=>t("p",{class:"fw-lighter display-5"},[e(" In the "),t("strong",null,"Webhooks"),e(" section, you can create a new Webhook API. ")],-1)),Y=i(()=>t("img",{src:h,class:"mt-2 mb-3 pb-4",style:{"max-width":"100%"}},null,-1)),j={class:"fw-lighter display-5 lh-base"},Q=e(" When you create a new Webhook API you will see a preloaded "),O=e("ASYNC API specification"),J=e(" called the Pet Store Events API. You can replace this or edit it to reflect your own Webhook API details. Alternatively, you can just publish the Pet Store Events API to get a feel for the product. "),K=i(()=>t("img",{src:k,class:"mt-3 mb-3 pb-4",style:{"max-width":"100%"}},null,-1)),Z=i(()=>t("p",{class:"fw-lighter display-5 lh-base"},[e(" When you click "),t("strong",null,"Publish"),e(" , the API will be available, to discover and subscribe, to any users within the consumer groups you selected. ")],-1)),tt=i(()=>t("img",{src:h,class:"mt-3 mb-3 pb-4",style:{"max-width":"100%"}},null,-1)),et={class:"fw-lighter display-5 mt-3 list-unstyled"},st=e(" For more informaion: "),ot={class:"pt-3 ps-5"},at=e(" Webhook APIs "),it={class:"pt-3 ps-5"},nt=e("Consumer Groups "),lt={class:"pt-3 ps-5 pb-5"},dt=e("Provider Groups"),ct={class:"row"},rt=n('<p class="fw-bold display-3" data-v-2d2152eb>Setup a subscription</p><p class="fw-lighter display-5 lh-base" data-v-2d2152eb> Subscriptions are set up by your webhook consumers. They are self-managed subscriptions meaning that as an application provider you don\u2019t have to lift a finger to help your subscribers integrate. </p><img src="'+x+'" class="mt-3 mb-3 pb-4" style="max-width:100%;" data-v-2d2152eb><ul class="fw-lighter display-5 list-unstyled" data-v-2d2152eb> A subscription is created with the following steps <li class="pt-3 ps-5 lh-base" data-v-2d2152eb> 1.Click <strong data-v-2d2152eb>Subscribe</strong> on the webhook you want to subscribe to </li><li class="pt-3 ps-5 lh-base" data-v-2d2152eb> 2.<strong data-v-2d2152eb>Create Application</strong> \u2013 this application is a logical container for the callbacks associated with it. It should reflect the name of the application that hosts the callback. </li><li class="pt-3 ps-5 lh-base" data-v-2d2152eb> 3.<strong data-v-2d2152eb>Create Callback</strong> \u2013 this is the actual callback URL details. In CE you can choose to secure your callback with a HMAC signature (if you need a few more security options check out our Enterprise edition). </li><li class="pt-3 ps-5 lh-base" data-v-2d2152eb> 4.<strong data-v-2d2152eb>Save</strong> the Subscription </li><li class="pt-3 ps-5 lh-base" data-v-2d2152eb> 5.<strong data-v-2d2152eb>Test</strong> the Subscription \u2013 Webhookie will send the example request body to your callback. If you get a 2XX response from your callback then you are good to proceed. </li><li class="pt-3 ps-5 pb-3 lh-base" data-v-2d2152eb> 6.<strong data-v-2d2152eb>Activate</strong> the Subscription \u2013 your callback will now start receiving traffic when the events occur. </li></ul>',4),ht={class:"fw-lighter display-5 list-unstyled"},pt=e(" For more informaion: "),bt={class:"pt-3 ps-5"},_t=e(" Subscriptions "),ut={class:"pt-3 ps-5"},wt=e("Applications "),yt={class:"pt-3 ps-5 pb-5"},mt=e("Callbacks"),vt={class:"row"},ft=i(()=>t("p",{class:"fw-bold display-3 pb-4"},"Publish an event",-1)),gt={class:"fw-lighter display-5 list-unstyled"},kt=e(" There are two options to integrate your product or system with webhookie. These are: "),xt={class:"pt-3 ps-5 lh-base"},Pt=i(()=>t("strong",null,"AMQP",-1)),At=e(" \u2013 If you have RabbitMQ or any other message bus within your architecture you can use it to send events to webhookie. "),It=e(" See AMQP Setup"),St=e(". "),Tt={class:"pt-3 ps-5 pb-4 lh-base"},Ct=i(()=>t("strong",null,"API",-1)),Lt=e(" \u2013 If you don\u2019t have a message bus within your architecture then we have a simple REST API to post events to webhookie."),Rt=e(" See API integration"),Ut=e(". "),zt=n(`<p class="fw-lighter display-5 lh-base pb-3" data-v-2d2152eb> If you want to quickly evaluate the product, without integrating, you can use an API client like Postman to publish events to webhookie. </p><ul class="fw-lighter display-5 list-unstyled lh-base" data-v-2d2152eb> To publish an event to webhookie requires two steps. The first to get an access token and the second to post the event. <li class="pt-3 ps-5" data-v-2d2152eb> 1.Get a token to publish events to webhookie <div class="text-white bg-codesample p-4 m-4" data-v-2d2152eb><pre data-v-2d2152eb>    POST /auth/realms/webhookie/protocol/openid-connect/token \r
    HTTP/1.1\r
    Host: localhost:8800\r
    Authorization: Basic d2ViaG9va2llX2NsaWVudDo=\r
    Content-Type: application/x-www-form-urlencoded\r
\r
    username=webhookie_admin&amp;password=passwd1&amp;grant_type=password\r
            </pre></div></li><li class="pt-3 ps-5" data-v-2d2152eb> 2. Publish an event (<strong data-v-2d2152eb>Note</strong>: we are publishing a <strong data-v-2d2152eb>createdPet</strong> event \u2013 see the wh-topic header).1.Get a token to publish events to webhookie <div class="text-white bg-codesample p-4 m-4" data-v-2d2152eb><pre data-v-2d2152eb>    POST /ingress/event \r
    HTTP/1.1\r
    Host: localhost:8000\r
    wh-topic: createdPet\r
    wh-trace-id: 7b338cb9-bb17-4aee-9cc9-705af28a1cf9\r
    Content-Type: text/plain\r
    Authorization: Bearer\r
\r
    Your test message\r
            </pre></div></li></ul><p class="fw-lighter display-5 lh-base pb-3" data-v-2d2152eb> You can download a Postman script with the above two API requests below (note: you must extract the json file from the zip file before you import it into Postman). </p><button type="button" class="btn btn-primary fw-normal display-5 px-3 py-2 mt-1 mb-5" style="max-width:60%;" data-v-2d2152eb> Download webhookie-w-mongodb-keycloak.zip </button>`,4),Wt=i(()=>t("div",{class:"row"},[t("p",{class:"fw-bold display-3 mt-5"},"View Traffic"),t("p",{class:"fw-lighter display-5 lh-base"}," If you navigate to Traffic in the webhookie developer portal you can see the traffic being sent to your subscription. "),t("img",{src:P,class:"mt-3 mb-3 pb-4",style:{"max-width":"100%"}})],-1)),Bt={class:"row"},Nt=i(()=>t("p",{class:"fw-bold display-3 mt-4"},"What\u2019s next?",-1)),Mt={class:"fw-lighter display-5 list-unstyled pt-3"},Vt=e(" For more informaion: "),Dt={class:"pt-3 ps-5"},Et=e(" Understand the "),Gt=e(" architecture and deployment "),$t=e(" options we support. "),qt={class:"pt-3 ps-5"},Ht=e(" Learn how to . "),Ft=e("white label the developer portal "),Xt={class:"pt-3 ps-5"},Yt=e(" Learn how to Integrate webhookie with your own . "),jt=e("identity platform"),Qt={class:"col-3"};function Ot(l,Jt,Kt,Zt,te,ee){const p=d,o=m,b=c,_=r;return w(),y("div",null,[t("div",null,[I,t("div",S,[t("div",T,[s(p)]),t("div",C,[t("div",L,[R,U,t("p",z,[W,s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[B]),_:1}),N]),M]),t("div",V,[D,t("p",E,[G,s(o,{to:"http://localhost:4300",class:"text-decoration-none link-btnsearch"},{default:a(()=>[$]),_:1})]),q]),t("div",H,[F,X,Y,t("p",j,[Q,s(o,{to:"http://localhost:4300",class:"text-decoration-none link-btnsearch"},{default:a(()=>[O]),_:1}),J]),K,Z,tt,t("ul",et,[st,t("li",ot,[s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[at]),_:1})]),t("li",it,[s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[nt]),_:1})]),t("li",lt,[s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[dt]),_:1})])])]),t("div",ct,[rt,t("ul",ht,[pt,t("li",bt,[s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[_t]),_:1})]),t("li",ut,[s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[wt]),_:1})]),t("li",yt,[s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[mt]),_:1})])])]),t("div",vt,[ft,t("ul",gt,[kt,t("li",xt,[Pt,At,s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[It]),_:1}),St]),t("li",Tt,[Ct,Lt,s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[Rt]),_:1}),Ut])]),zt]),Wt,t("div",Bt,[Nt,t("ul",Mt,[Vt,t("li",Dt,[Et,s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[Gt]),_:1}),$t]),t("li",qt,[Ht,s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[Ft]),_:1})]),t("li",Xt,[Yt,s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[jt]),_:1})])])])]),t("div",Qt,[s(b)])])]),s(_,{class:"my-5"})])}const ie=u(A,[["render",Ot],["__scopeId","data-v-2d2152eb"]]);export{ie as default};
