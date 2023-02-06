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
            <p class="fw-bold display-9">Architecture Overview</p>
          </div>
          <div class="row gx-0">
            <ul class="fw-lighter display-5 list-unstyled">
              webhookie is based on a microservice architecture.
              The architecture consists of the following components:
              <li class="pt-3 ps-5 lh-base">
                webhookie services (kube namespace - webhookie-services)
              </li>
              <li class="pt-3 ps-5 lh-base">
                MongoDB (kube namespace - webhookie-mongodb) - persistent
                storage layer. <!-- TODO - Do you want to use MongoDB Atlas or your own
                MongoDB installation read here.-->
              </li>
              <li class="pt-3 ps-5 lh-base">
                RabbitMQ (kube namespace - webhookie-rabbitmq) - messaging
                layer between microservices.  <!-- TODO - Do you want to use your own
                RabbitMQ installation read here.-->
              </li>
              <li class="pt-3 ps-5 lh-base">
                Keycloak (kube namespace - webhookie-keycloak) - user management.
                <!-- TODO - Do you want to use your own identity platform read here.-->
              </li>
            </ul>
          </div>
          <div class="row">
            <p class="fw-lighter display-5 lh-base">
              webhookie complements an existing integration landscape with mature
              webhook capabilities. It often (but does not need to) sits in a
              landscape that already has an API Gateway and an ESB or EDA platform.
              Webhookie specialises in simplifying and accelerating
              Application-to-Application (A2A) and Business-to-Business (B2B)
              integration where APIs are used.
            </p>
          </div>
          <div class="row gx-0">
            <ul class="fw-lighter display-5 list-unstyled">
              webhookie enables provider applications to transmit events securely
              and with guaranteed delivery to consumer applications.  The
              following terms and concepts are used in webhookie:
              <li class="pt-3 ps-5 lh-base">
                <strong>Admin Role</strong> - A role that, when given to a user, allows them to
                set up and maintain the webhookie instance.  <!-- TODO - Read more about
                roles here.-->
              </li>
              <li class="pt-3 ps-5 lh-base">
                <strong>Authorised consumer</strong> - Events being sent from a provider
                application can be tagged with specific entities allowing only
                those entities to receive the event.  This is known as a
                authorised consumer.
              </li>
              <li class="pt-3 ps-5 lh-base">
                <strong>API Specification</strong> - An ASYNC API Specification that specifies
                the capabilities of the webhook API.
              </li>
              <li class="pt-3 ps-5 lh-base">
                <strong>Callback</strong> - The consumer applications endpoint where they will
                receive the events from webhookie.
              </li>
              <li class="pt-3 ps-5 lh-base">
                <strong>Consumer Application</strong> - The application that will
                consume events from webhookie. Consumer applications have a list
                of callbacks associated with them.
              </li>
              <li class="pt-3 ps-5 lh-base">
                <strong>Consumer Groups</strong> - A group that a user can belong to.
                The discovery and consumption of webhook API's can be limited to
                specific consumer groups.
              </li>
              <li class="pt-3 ps-5 lh-base">
                <strong>Consumer Role</strong> - A role that, when given to a
                user, allows them to subscribe to webhook APIs that they have
                access to. Which webhook APIs they have access to discover and
                subscribe is limited to what consumer groups they belong to.
              </li>
              <li class="pt-3 ps-5 lh-base">
                <strong>Entity</strong> - Often reflecting a company. This is
                an entity a user belongs to. Events being sent from a provider
                application can be tagged with specific entities allowing only
                those entities to receive the event.  This is known as a
                authorised consumer.
              </li>
              <li class="pt-3 ps-5 lh-base">
                <strong>Event</strong> - An event is a logical instance of a
                topic sent into webhookie by a provider application.
              </li>
              <li class="pt-3 ps-5 lh-base">
                <strong>Message</strong> - A message and event are treated
                identically in webhookie and the term is used interchangeably
                in the documentation.
              </li>
              <li class="pt-3 ps-5 lh-base">
                <strong>Provider Application</strong> - The application that
                provides events to webhookie.
              </li>
              <li class="pt-3 ps-5 lh-base">
                <strong>Provider Groups</strong> - A group that a user can belong
                to. The management of a webhook API can be limited to specific
                provider groups.
              </li>
              <li class="pt-3 ps-5 lh-base">
                <strong>Provider Role</strong> - A role that, when given to a
                user, allows them to manage webhook APIs they have access to.
                Which webhook APIs they have access to manage is limited to what
                provider groups they belong to.
              </li>
              <li class="pt-3 ps-5 lh-base">
                <strong>Span</strong> - A physical instance of an event that is
                sent to a specific consumer application.  An event or trace that
                is received by a provider application can result in several spans
                depending on how many subscribers there are to the topic. Each
                span has it's own unique span id.
              </li>
              <li class="pt-3 ps-5 lh-base">
                <strong>Subscriptions</strong> - A subscription is setup by a user
                with a consumer role. A subscription consists of a topic, a
                (consumer) application, a callback, an optional transformation
                and an optional approval.
              </li>
              <li class="pt-3 ps-5 lh-base">
                <strong>Subscription approval</strong> - Webhook APIs can be
                configured by the provider to require approvals before a
                subscription can be activated.
              </li>
              <li class="pt-3 ps-5 lh-base">
                <strong>Topic</strong> - A webhook API consists of multiple topics that can be
                subscribed to by consumers.
              </li>
              <li class="pt-3 ps-5 lh-base">
                <strong>Trace</strong> - A trace is a physical instance of an event with a
                unique tracking or trace id.
              </li>
              <li class="pt-3 ps-5 lh-base">
                <strong>Transformation</strong> - A subscription can include a transformation,
                in JSLT, that transform the event data into a different data model so that the
                consumer only receives the data model they want. This can be used to achieve an
                accelerated integration from a webhook API directly to a consumers REST API.
              </li>
              <li class="pt-3 ps-5 pb-4 lh-base">
                <strong>Webhook API</strong> - A webhook API is described by an ASYNC API
                specification and contains a list of topics and the associated schemas for each
                topic. A webhook API is managed by a providers belonging to an API Provider group
                and is consumed by consumers belonging to an API consumer group.
              </li>
            </ul>
          </div>

          <div class="d-flex justify-content-between gx-0 pb-5">
            <div >
              <a href="/Docs/GettingStarted">
                <button type="button" class="btn btn-outline-btnsearch px-4">
                  &lt Getting Started
                </button>
              </a>
            </div>
            <div >
              <a href="/Docs/APIDocumentation">
                <button type="button" class="btn btn-outline-btnsearch px-4 ms-4">
                  API Documentation &gt
                </button>
              </a>
            </div>
          </div>
        </div>

        <!-- <div class="col-3 ">
          <SidebarRight class="sticky-top sticky-top-fix" />
        </div> -->
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