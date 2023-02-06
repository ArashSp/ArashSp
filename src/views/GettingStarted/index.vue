<template>
  <div>
    <div class="container">
      <div class="row gx-0 justify-content-center">
        <div class="col-3 mt-5 fixedSideRight">
          <SidebarLeft />
        </div>
        <div class="col-lg-6 col-md-auto mt-5">
          <div class="row">
            <p class="fw-bold display-10 pt-4">Get started fast</p>
            <p class="fw-lighter display-5 py-3">
              The easiest way to evaluate webhookie is using docker.
            </p>

            <p class="fw-lighter display-5 py-3">
              Make sure you have
              <a href="" class="text-decoration-none link-btnsearch">docker</a>
              installed on your system.
            </p>

            <p class="fw-lighter display-5 py-3">
              Download our docker-compose file and supporting keycloak files in
              this zip file.
            </p>

            <button type="button" class="btn btn-primary fw-normal display-5 px-3 py-3 col-lg-7 col-md-auto">
              Download webhookie-w-mongodb-keycloak.zip
            </button>
            <p class="fw-lighter display-5 py-4">
              Unpack the zip file to a new folder dedicated to webhookie.
            </p>

            <div class="warningBox p-4">
              <p class="fw-lighter display-5 lh-base">
                <strong>Note Apple M1 users:</strong> the standard keycloak
                image in the docker compose file does not yet support the Apple
                M1 ARM based architecture. Therefore you need to replace the
                keycloak image inside the docker-compose (docker-compose.yml)
                file with
              </p>
              <p class="fw-lighter display-5">
                <code class="text-white bg-blackBg display-7 fw-light">wizzn/keycloak:14</code>
                (instead of :
                <code class="text-white bg-blackBg display-7 fw-light">quay.io/keycloak/keycloak:14.0.0</code>
                )
              </p>
            </div>
            <p class="fw-lighter display-5 mt-3">
              From the new folder issue the following command in your terminal.
            </p>
            <p class="fw-lighter display-5 pt-3">
              Unpack the zip file to a new folder dedicated to
              <strong>webhookie</strong>.
            </p>
            <div class="bg-codesample py-4 px-2 my-3">
              <code class="text-white fw-light display-7 px-5">
                docker compose up</code>
            </div>
            <p class="fw-lighter display-5 mt-4 mb-5">
              This will start the necessary containers to evaluate the product.
            </p>
          </div>
          <div class="row">
            <p class="fw-bold display-10 my-4">Using webhookie</p>

            <p class="fw-lighter display-5 pt-3 pb-1">
              In your browser go to the webhookie developer portal .
              <a href="http://localhost:4300"
                class="text-decoration-none link-btnsearch">http://localhost:4300</a>
            </p>

            <ul class="fw-lighter display-5 pt-3 pb-4 ">
              An admin user has been set up for you with the following details:
              <li class="pt-3 mt-3 ps-1 ms-5">
                <strong>username:</strong> webhookie_admin
              </li>
              <li class="pt-3 ps-1 ms-5"><strong>password:</strong> passwd1</li>
            </ul>

            <p class="fw-lighter display-5 lh-base">
              Login to webhookie when the server health indicator is green. The
              health indicator is the dot next to login. This will become green
              when the server and its dependencies are up.
            </p>
            <img src="/images/portal-home-page.svg" class="mt-3 mb-3 pb-5" style="max-width: 100%" />
          </div>
          <div class="row">
            <p class="fw-bold display-3 pb-3">Create a webhook API</p>

            <p class="fw-lighter display-5">
              In the <strong>Webhooks</strong> section, you can create a new
              Webhook API.
            </p>
            <img src="/images/webhook-page.svg" class="mt-2 mb-3 pb-4" style="max-width: 100%" />
            <p class="fw-lighter display-5 lh-base">
              When you create a new Webhook API you will see a preloaded
              <a href="http://localhost:4300" class="text-decoration-none link-btnsearch">ASYNC API
                specification</a>
              called the Pet Store Events API. You can replace this or edit it
              to reflect your own Webhook API details. Alternatively, you can
              just publish the Pet Store Events API to get a feel for the
              product.
            </p>
            <img src="/images/create-webhook-API.svg" class="mt-3 mb-3 pb-4" style="max-width: 100%" />
            <p class="fw-lighter display-5 lh-base">
              When you click <strong>Publish</strong> , the API will be
              available, to discover and subscribe, to any users within the
              consumer groups you selected.
            </p>
            <img src="/images/webhook-page.svg" class="mt-3 mb-3 pb-4" style="max-width: 100%" />

            <ul class="fw-lighter display-5 mt-3">
              For more informaion:
              <li class="pt-3 ps-3 ms-5">
                <a href="" class="text-decoration-none link-btnsearch">
                  Webhook APIs
                </a>
              </li>
              <li class="pt-3 ps-3 ms-5">
                <a href="" class="text-decoration-none link-btnsearch">Consumer Groups
                </a>
              </li>
              <li class="pt-3 ps-3 pb-5 ms-5">
                <a href="" class="text-decoration-none link-btnsearch">Provider Groups</a>
              </li>
            </ul>
          </div>
          <div class="row">
            <p class="fw-bold display-3">Setup a subscription</p>

            <p class="fw-lighter display-5 lh-base">
              Subscriptions are set up by your webhook consumers. They are
              self-managed subscriptions meaning that as an application provider
              you don’t have to lift a finger to help your subscribers
              integrate.
            </p>
            <img src="/images/New-Subscription-UX.svg" class="mt-3 mb-3 pb-4" style="max-width: 100%" />
            <ul class="fw-lighter display-5 list-unstyled">
              A subscription is created with the following steps

              <li class="pt-3 mt-2 ps-4 lh-base">
                1. Click <strong>Subscribe</strong> on the webhook you want to
                subscribe to
              </li>
              <li class="pt-3 ps-4 lh-base">
                2. <strong>Create Application</strong> – this application is a
                logical container for the callbacks associated with it. It
                should reflect the name of the application that hosts the
                callback.
              </li>
              <li class="pt-3 ps-4 lh-base">
                3. <strong>Create Callback</strong> – this is the actual callback
                URL details. In CE you can choose to secure your callback with a
                HMAC signature (if you need a few more security options check
                out our Enterprise edition).
              </li>
              <li class="pt-3 ps-4 lh-base">
                4. <strong>Save</strong> the Subscription
              </li>
              <li class="pt-3 ps-4 lh-base">
                5. <strong>Test</strong> the Subscription – Webhookie will send
                the example request body to your callback. If you get a 2XX
                response from your callback then you are good to proceed.
              </li>
              <li class="pt-3 ps-4 pb-3 lh-base">
                6. <strong>Activate</strong> the Subscription – your callback
                will now start receiving traffic when the events occur.
              </li>
            </ul>

            <ul class="fw-lighter display-5">
              For more informaion:
              <li class="pt-3 mt-3 ps-1 ms-5">
                <a href="" class="text-decoration-none link-btnsearch">
                  Subscriptions
                </a>
              </li>
              <li class="pt-3 ps-1 ms-5">
                <a href="" class="text-decoration-none link-btnsearch">Applications
                </a>
              </li>
              <li class="pt-3 ps-1 pb-5 ms-5">
                <a href="" class="text-decoration-none link-btnsearch">Callbacks</a>
              </li>
            </ul>
          </div>
          <div class="row">
            <p class="fw-bold display-3 pb-4">Publish an event</p>

            <ul class="fw-lighter display-5">
              There are two options to integrate your product or system with
              webhookie. These are:
              <li class="pt-3 ps-1 lh-base ms-5">
                <strong>AMQP</strong> – If you have RabbitMQ or any other
                message bus within your architecture you can use it to send
                events to webhookie.
                <a href="" class="text-decoration-none link-btnsearch">
                  See AMQP Setup</a>.
              </li>
              <li class="pt-3 ps-1 pb-4 lh-base ms-5">
                <strong>API</strong> – If you don’t have a message bus within
                your architecture then we have a simple REST API to post events
                to webhookie.<a href="" class="text-decoration-none link-btnsearch">
                  See API integration</a>.
              </li>
            </ul>

            <p class="fw-lighter display-5 lh-base pb-3 ms-5">
              If you want to quickly evaluate the product, without integrating,
              you can use an API client like Postman to publish events to
              webhookie.
            </p>
            <ul class="fw-lighter display-5 lh-base ms-5 list-unstyled">
              To publish an event to webhookie requires two steps. The first to
              get an access token and the second to post the event.

              <li class="pt-3 ps-1 ms-3">
                1.Get a token to publish events to webhookie
                <div class="text-white bg-codesample p-4 m-4">
                  <pre>
    POST /auth/realms/webhookie/protocol/openid-connect/token 
    HTTP/1.1
    Host: localhost:8800
    Authorization: Basic d2ViaG9va2llX2NsaWVudDo=
    Content-Type: application/x-www-form-urlencoded

    username=webhookie_admin&password=passwd1&grant_type=password
            </pre>
                </div>
              </li>
              <li class="pt-3 ps-1 ms-3">
                2. Publish an event (<strong>Note</strong>: we are publishing a
                <strong>createdPet</strong> event – see the wh-topic
                header).1.Get a token to publish events to webhookie
                <div class="text-white bg-codesample p-4 m-4">
                  <pre>
    POST /ingress/event 
    HTTP/1.1
    Host: localhost:8000
    wh-topic: createdPet
    wh-trace-id: 7b338cb9-bb17-4aee-9cc9-705af28a1cf9
    Content-Type: text/plain
    Authorization: Bearer

    Your test message
            </pre>
                </div>
              </li>
            </ul>
            <p class="fw-lighter display-5 lh-base pb-3">
              You can download a Postman script with the above two API requests
              below (note: you must extract the json file from the zip file
              before you import it into Postman).
            </p>
            <button type="button" class="btn btn-primary fw-normal display-5 px-3 py-2 mt-1 mb-5 col-lg-7 col-md-auto ">
              Download webhookie-w-mongodb-keycloak.zip
            </button>
          </div>
          <div class="row">
            <p class="fw-bold display-3 mt-5">View Traffic</p>

            <p class="fw-lighter display-5 lh-base">
              If you navigate to Traffic in the webhookie developer portal you
              can see the traffic being sent to your subscription.
            </p>
            <img src="/images/Traffic.svg" class="mt-3 mb-3 pb-4" style="max-width: 100%" />
          </div>
          <div class="row container">
            <p class="fw-bold display-3 mt-4">What’s next?</p>

            <ul class="fw-lighter display-5 pt-3 mt-3">
              For more informaion:
              <li class="pt-3 ps-1 ms-5">
                Understand the

                <a href="" class="text-decoration-none link-btnsearch">
                  architecture and deployment
                </a>
                options we support.
              </li>
              <li class="pt-3 ps-1 ms-5">
                Learn how to .

                <a href="" class="text-decoration-none link-btnsearch">white label the developer portal
                </a>
              </li>
              <li class="pt-3 ps-1 ms-5">
                Learn how to Integrate webhookie with your own .
                <a href="" class="text-decoration-none link-btnsearch">identity platform</a>
              </li>
            </ul>
          </div>
        </div> 
      </div>
    </div>
    <Downloadnow class="my-5" />
  </div>
</template>

<script>

import SidebarRight from "../../components/Docs/SidebarRight.vue";
import Downloadnow from "../../components/layout/Downloadnow.vue";

export default {
  return: {},
  components: {  SidebarRight, Downloadnow },
};
</script>
<style scoped>
.warningBox {
  background: #3e412c;
  box-shadow: inset 5px 0px 0px #ffed51;
}
.fixedSideRight{
  position: fixed;
  top: 70px;
  left: 11%;
  max-width: 250px ;
}
</style>
