import globalConfig from "../configs/global.json";
import { progressiveFormName } from "./mauticForm";

export let gtmContainerID;

export const loadGTMScript = () => {
  if (typeof window !== "undefined") {
    if (globalConfig.GTM_CONFIG) {
      let hostname = globalThis?.window?.location.hostname;
      gtmContainerID = globalConfig.GTM_CONFIG[hostname];
      if (gtmContainerID) {
        let gtmScript = globalThis?.document?.createElement("script");
        let gtmCode =
          "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','" +
          gtmContainerID +
          "');";
        gtmScript.innerHTML = gtmCode;
        let head = globalThis?.document?.getElementsByTagName("head")[0];
        head.prepend(gtmScript);
      }
    }
  }
};

function sendEmailOrPhoneVerifiedEvents(id) {
  if (typeof window !== "undefined") {
    if ((id == "ev" || id == "sv") && sessionStorage.getItem("gtm_" + id) != "yes") {
      let ev = globalThis?.document?.getElementById("mauticform_input_" + progressiveFormName + "_" + id);
      if (ev && ev.value == "true") {
        let eventName = id == "ev" ? "emailVerified" : "phoneVerified";
        window.dataLayer.push({
          event: eventName,
        });
        sessionStorage.setItem("gtm_" + id, "yes");
      }
    }
  }
}
export function sendGTMEvents() {
  sendEmailOrPhoneVerifiedEvents("ev");
  sendEmailOrPhoneVerifiedEvents("sv");
}
