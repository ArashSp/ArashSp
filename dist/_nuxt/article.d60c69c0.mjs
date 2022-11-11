const e = [
  {
    id: "1",
    MainTitle: "Webhook APIs are REST APIS perfect side kick!",
    ArticlePic: "..//images/Frame266.svg",
    ArticleDate: "February 2, 2022",
    Author: "Liam Forde  ",
    CardDescription:
      "The success of REST APIs In Postman\u2019s State of the\u2026",
    tags: [{ name: "API" }, { name: "useCases" }],
    ArticleTitle1: " The success of REST APIs",
    ArticleBody1:
      "In Postman\u2019s State of the API 2021 report 94% of developers stated they use REST APIs with nearly 50% of developers reporting that they not only used REST APIs but loved them too!",
    ArticleBody1_2:
      "If you\u2019re involved in digital product development or data integration you probably don\u2019t need much convincing of the value and necessity of REST APIs.",
    ArticleBody1_3:
      "The simplicity of HTTP and JSON, powered by the Open API Specification (OAS or Swagger for those that prefer the grassroots name) has given agility and speed in accessing and managing data.",
    ArticlePic1: "..//images/Frame302.svg",
    ArticleTitle2: "But where do they fit in?",
    ArticleBody2:
      "All technology was initially built for a specific purpose, after which if the technology is successful, it starts getting used for other purposes only because developers become familiar with or want to use that technology. Sometimes it makes sense to use the technology outside of its sweet spot (normally due to time to market \u2013 it takes time to learn and use other technology), other times not so much.",
    ArticleBody2_2:
      "So to understand REST API\u2019s sweet spot it is first necessary to acknowledge its characteristics. REST APIs are request-driven, which means that the API consumer (the client) needs to initiate the call. This means that REST APIs are great when building apps or web-based applications where users initiate actions (i.e. they login, check a dashboard, dive into data).",
    ArticleBody2_3:
      "So using REST API\u2019s make sense when the request is initiated by user interactions or by a received event (usually triggered by preceding user interactions). What about using a REST API when the request is triggered by a job that runs every x secs/mins looking for updates or new records? Hmm\u2026 here is where we think the technology is not the right fit and where other solutions should be used.",
    ArticlePic2: "",
    ArticleTitle3: "Why do you say? Well a few reasons that include:",
    ArticleBody3:
      "    Data is not retrieved in real-time. Which can lead to poor UX.",
    ArticleBody3_2:
      "The solution doesn\u2019t scale well. With each API client polling the API it quickly adds unnecessary load on the system. Leading to performance degradation and increased costs.",
    ArticleBody3_3:
      "It\u2019s a waste of energy and resources, every call to the API executes code and queries in a database regardless of if there is new data or not.",
    ArticlePic3: "..//images/Frame299.svg",
    ArticleTitle4: "What about backend Integration?",
    ArticleBody4:
      "So what about system-to-system integration or B2B integration? The majority of this integration is about synchronising data between systems.",
    ArticleBody4_2:
      "To solve this type of integration with REST APIs would either require the upstream system to bundle all downstream systems REST APIs into one transaction meaning that when some data was created or updated it would synchronise all downstream systems in the same transaction\u2026gulp \u2013 let\u2019s not go there! Or it would require that all downstream systems call the upstream systems REST API on a schedule\u2026 not a great idea (re-read above).",
    ArticleBody4_3:
      "Does this mean we shouldn\u2019t use APIs for backend integration? On the contrary, APIs with their discoverability, reusability, and simplicity are simply too good not to use. We just need to use the right type.",
    ArticlePic4: "",
    ArticleTitle5: "Webhook APIs to continue the journey",
    ArticleBody5:
      "Webhook APIs have the simplicity of REST APIs with HTTP and JSON. However, instead of being request-driven, they are event-driven with a publish and subscribe pattern. These characteristics make them a perfect fit to complement REST APIs for backend integration \u2013 both application-to-application (A2A) and business-to-business (B2B).",
    ArticleBody5_2:
      "With webhook APIs, developers must initially set up a subscription to receive the data. After the subscription is approved the data is simply pushed to the destination specified in their subscription every time the event occurs.",
    ArticleBody5_3:
      "So instead of setting up a schedule to poll for new or updated records, the new or updated records are pushed whenever the events happen directly to the downstream system(s) \u2013 real-time, scalable, and efficient!",
    ArticlePic5: "..//images/Frame301.svg",
    ArticleTitle6: "Into the sunset",
    ArticleBody6:
      "REST APIs have provided the foundation for the digital age, the hero if you like. However like all good heroes in film series, after the first installment, they need a side-kick in the 2nd and third installments to tackle the additional challenges that their initial success brings them. Webhook APIs are REST APIs perfect side-kick. Ready to provide companies with the complete toolset to defeat the integration villain!",
    ArticleBody6_2:
      "If you are looking for a webhook solution that you can plug into your architecture try webhookie. It\u2019s open-source and easy to deploy as a container. Get started fast with webhookie.",
    ArticleBody6_3: "",
    ArticlePic6: "",
  },
  {
    id: "2",
    MainTitle: "The 4 use cases for webhook APIs",
    ArticlePic: "..//images/Frame266.svg",
    ArticleDate: "Decemeber 3, 2021  ",
    Author: "Liam Forde    ",
    CardDescription: "The use of webhooks is on the rise so in the  future...",
    tags: [{ name: "API" }],
    ArticleTitle1: " The success of REST APIs",
    ArticleBody1:
      "In Postman\u2019s State of the API 2021 report 94% of developers stated they use REST APIs with nearly 50% of developers reporting that they not only used REST APIs but loved them too!",
    ArticleBody1_2:
      "If you\u2019re involved in digital product development or data integration you probably don\u2019t need much convincing of the value and necessity of REST APIs.",
    ArticleBody1_3:
      "The simplicity of HTTP and JSON, powered by the Open API Specification (OAS or Swagger for those that prefer the grassroots name) has given agility and speed in accessing and managing data.",
    ArticlePic1: "..//images/Frame302.svg",
  },
  {
    id: "3",
    MainTitle: "The 4 use cases for webhook APIs",
    ArticlePic: "..//images/Frame266.svg",
    ArticleDate: "Decemeber 3, 2021  ",
    Author: "Liam Forde    ",
    CardDescription: "The use of webhooks is on the rise so in the  future...",
    tags: [{ name: "API" }],
    ArticleTitle1: " The success of REST APIs",
    ArticleBody1:
      "In Postman\u2019s State of the API 2021 report 94% of developers stated they use REST APIs with nearly 50% of developers reporting that they not only used REST APIs but loved them too!",
    ArticleBody1_2:
      "If you\u2019re involved in digital product development or data integration you probably don\u2019t need much convincing of the value and necessity of REST APIs.",
    ArticleBody1_3:
      "The simplicity of HTTP and JSON, powered by the Open API Specification (OAS or Swagger for those that prefer the grassroots name) has given agility and speed in accessing and managing data.",
    ArticlePic1: "..//images/Frame302.svg",
  },
  {
    id: "4",
    MainTitle: "The 4 use cases for webhook APIs",
    ArticlePic: "..//images/Frame266.svg",
    ArticleDate: "Decemeber 3, 2021  ",
    Author: "Liam Forde    ",
    CardDescription: "The use of webhooks is on the rise so in the  future...",
    tags: [{ name: "API" }],
    ArticleTitle1: " The success of REST APIs",
    ArticleBody1:
      "In Postman\u2019s State of the API 2021 report 94% of developers stated they use REST APIs with nearly 50% of developers reporting that they not only used REST APIs but loved them too!",
    ArticleBody1_2:
      "If you\u2019re involved in digital product development or data integration you probably don\u2019t need much convincing of the value and necessity of REST APIs.",
    ArticleBody1_3:
      "The simplicity of HTTP and JSON, powered by the Open API Specification (OAS or Swagger for those that prefer the grassroots name) has given agility and speed in accessing and managing data.",
    ArticlePic1: "..//images/Frame302.svg",
  },
];
export { e as a };
