<template>
  <div>
    <div class="row gx-0 mb-5">
      <div class="col-3">
        <div class="my-5"></div>
        <div class="ps-5 mt-5 pe-5">
          <p class="fw-normal display-6">Recents posts</p>
          <nav class="nav flex-column dw-bold display-6">
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              to=""
              >Webhook APis are Rest APIS perfect side kick!</Nuxt-link
            >
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              to=""
              >The 4 use cases for webhook api</Nuxt-link
            >
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              to=""
              >Getting started with webhookie</Nuxt-link
            >
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              to=""
              >Visual update</Nuxt-link
            >
          </nav>
        </div>
      </div>
      <div class="col-6">
        <div class="row gx-0">
          <div class="pt-5">
            <button
              type="button"
              class="btn blogbtn btn-sm text-icon mt-1 px-2 text-white"
            >
              General
            </button>
            <button
              type="button"
              class="btn blogbtn btn-sm text-icon ms-3 mt-1 px-2 text-white"
            >
              Use Case
            </button>
            <p class="fw-bold display-9 mt-3 mt-4">
              Webhook APIs are REST APIS perfect side kick!
            </p>
            <p class="fw-lighter display-7">Liam Frode . February 2, 2022</p>

            <img
              src="../../assets/images/Frame 266.svg"
              class="mt-3 pb-2"
              style="max-width: 100%"
            />
            <p class="fw-bold display-9 my-5">The success of REST APIs</p>
            <p class="fw-lighter display-5 lh-base pb-3">
              In Postman’s <strong>State of the API</strong> 2021 report 94% of
              developers stated they use REST APIs with nearly 50% of developers
              reporting that they not only used REST APIs but loved them too!
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              If you’re involved in digital product development or data
              integration you probably don’t need much convincing of the value
              and necessity of REST APIs.
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              The simplicity of HTTP and JSON, powered by the Open API
              Specification (OAS or Swagger for those that prefer the grassroots
              name) has given agility and speed in accessing and managing data.
            </p>
            <img
              src="../../assets/images/Frame 302.svg"
              class="mt-3 pb-4"
              style="max-width: 100%"
            />
            <p class="fw-bold display-9 mt-3 mb-4">But where do they fit in?</p>
            <p class="fw-lighter display-5 lh-base pb-3">
              All technology was initially built for a specific purpose, after
              which if the technology is successful, it starts getting used for
              other purposes only because developers become familiar with or
              want to use that technology. Sometimes it makes sense to use the
              technology outside of its sweet spot (normally due to time to
              market – it takes time to learn and use other technology), other
              times not so much.
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              So to understand REST API’s sweet spot it is first necessary to
              acknowledge its characteristics. REST APIs are request-driven,
              which means that the API consumer (the client) needs to initiate
              the call. This means that REST APIs are great when building apps
              or web-based applications where users initiate actions (i.e. they
              login, check a dashboard, dive into data).
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              So using REST API’s make sense when the request is initiated by
              user interactions or by a received event (usually triggered by
              preceding user interactions). What about using a REST API when the
              request is triggered by a job that runs every x secs/mins looking
              for updates or new records? Hmm… here is where we think the
              technology is not the right fit and where other solutions should
              be used.
            </p>

            <p class="fw-light display-10 mt-3 mt-4">
              But where do they fit in?
            </p>
            <ul>
              <li class="fw-lighter display-5 lh-base pb-3">
                Data is not retrieved in real-time. Which can lead to poor UX.
              </li>
              <li class="fw-lighter display-5 lh-base pb-3">
                The solution doesn’t scale well. With each API client polling
                the API it quickly adds unnecessary load on the system. Leading
                to performance degradation and increased costs.
              </li>
              <li class="fw-lighter display-5lh-base pb-3">
                It’s a waste of energy and resources, every call to the API
                executes code and queries in a database regardless of if there
                is new data or not.
              </li>
            </ul>
            <img
              src="../../assets/images/Frame 299.svg"
              class="mt-3 pb-4"
              style="max-width: 100%"
            />
            <p class="fw-bold display-9 mt-3 mt-4">
              What about backend Integration?
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              So what about system-to-system integration or B2B integration? The
              majority of this integration is about synchronising data between
              systems.
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              To solve this type of integration with REST APIs would either
              require the upstream system to bundle all downstream systems REST
              APIs into one transaction meaning that when some data was created
              or updated it would synchronise all downstream systems in the same
              transaction…gulp – let’s not go there! Or it would require that
              all downstream systems call the upstream systems REST API on a
              schedule… not a great idea (re-read above).
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              Does this mean we shouldn’t use APIs for backend integration? On
              the contrary, APIs with their discoverability, reusability, and
              simplicity are simply too good not to use. We just need to use the
              right type.
            </p>

            <p class="fw-bold display-9 mt-3 mt-4">
              Webhook APIs to continue the journey
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              Webhook APIs have the simplicity of REST APIs with HTTP and JSON.
              However, instead of being request-driven, they are event-driven
              with a publish and subscribe pattern. These characteristics make
              them a perfect fit to complement REST APIs for backend integration
              – both application-to-application (A2A) and business-to-business
              (B2B).
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              With webhook APIs, developers must initially set up a subscription
              to receive the data. After the subscription is approved the data
              is simply pushed to the destination specified in their
              subscription every time the event occurs.
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              So instead of setting up a schedule to poll for new or updated
              records, the new or updated records are pushed whenever the events
              happen directly to the downstream system(s) – real-time, scalable,
              and efficient!
            </p>

            <img
              src="../../assets/images/Frame 301.svg"
              class="mt-3 pb-4"
              style="max-width: 100%"
            />

            <p class="fw-bold display-9 mt-3 mt-4">Into the sunset</p>
            <p class="fw-lighter display-5 lh-base pb-3">
              REST APIs have provided the foundation for the digital age, the
              hero if you like. However like all good heroes in film series,
              after the first installment, they need a side-kick in the 2nd and
              third installments to tackle the additional challenges that their
              initial success brings them. Webhook APIs are REST APIs perfect
              side-kick. Ready to provide companies with the complete toolset to
              defeat the integration villain!
            </p>
            <p class="fw-lighter display-5 lh-base pb-3">
              If you are looking for a webhook solution that you can plug into
              your architecture try webhookie. It’s open-source and easy to
              deploy as a container. Get started fast with webhookie.
            </p>
            <Nuxt-Link to="/Blog">
              <button
                type="button"
                class="btn btn-outline-btnsearch fw-lighter display-6 my-4"
              >
                Recents Posts
              </button>
            </Nuxt-Link>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="mt-5 pe-5">
          <nav class="nav flex-column dw-bold display-6">
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              to=""
              >The success of rest APIs</Nuxt-link
            >
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              to=""
              >But where do they fit it?</Nuxt-link
            >
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7 ps-3"
              to=""
              >Why do you say? Well A few reasons that include:</Nuxt-link
            >
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              to=""
              >What about backend Integration?</Nuxt-link
            >
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              to=""
              >Webhook APIs to continuew jorney</Nuxt-link
            >
            <Nuxt-link
              class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
              to=""
              >Into the sunset</Nuxt-link
            >
          </nav>
        </div>
      </div>
    </div>
    <Downloadnow />
  </div>
</template>
<script>
import Downloadnow from "~~/components/Downloadnow.vue";
export default {
  components: { Downloadnow },
};
</script>
