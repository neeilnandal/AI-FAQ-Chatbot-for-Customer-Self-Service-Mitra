/*
  Mitra Botpress Webchat Embed

  Notes:
  - This file contains browser-side Botpress webchat configuration.
  - Public Botpress identifiers may be visible because the widget runs client-side.
  - Do not place private credentials, admin tokens, internal documents, or customer data here.
  - Restrict allowedOrigins in production.
*/

(function () {
  function initMitraChatbot() {
    if (!window.botpressWebChat) {
      console.error("Botpress Webchat script did not load.");
      return;
    }

    window.botpressWebChat.init({
      composerPlaceholder: "Chat with Mitra",
      botConversationDescription: "Customer support chatbot for FAQ self-service",
      botId: "b53b849f-1eb2-493a-9746-fc818d576c5c",
      hostUrl: "https://cdn.botpress.cloud/webchat/v1",
      messagingUrl: "https://messaging.botpress.cloud",
      clientId: "b53b849f-1eb2-493a-9746-fc818d576c5c",
      webhookId: "0bb8fa12-c2b5-4dd9-923f-4fd1679c208b",
      lazySocket: true,
      themeName: "prism",
      botName: "Mitra",
      avatarUrl: "https://www.mynetsec.com",
      stylesheet: "https://mynetsec.com/style.xml",
      frontendVersion: "v1",
      useSessionStorage: true,
      showBotInfoPage: true,
      showPoweredBy: true,
      theme: "prism",
      themeColor: "#2563eb",

      /*
        Production recommendation:
        Replace [] with approved domains, for example:
        allowedOrigins: ["https://mynetsec.com", "https://www.mynetsec.com"]
      */
      allowedOrigins: []
    });

    const openButton = document.getElementById("open-chat");

    if (openButton) {
      openButton.addEventListener("click", function () {
        window.botpressWebChat.sendEvent({ type: "show" });
      });
    }
  }

  window.addEventListener("load", initMitraChatbot);
})();
