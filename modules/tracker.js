import { logError } from "./logger.js";
import globalConfig from "../configs/global.json";
import { getSearchParams } from "./utility.js";
import errorMessageConfig from "../messages/errorMessage.json";

// Query Parameters
export let utmSource;
export let utmMedium;
export let utmCampaign;
export let utmContent;
export let utmTerm;
export let pageTitle;
export let pCode;
export let mauticSrc = "";
let lp_CTA_Link_Domain = "";
let cs;

// Converted this into globalVariable because gtm is using this config
if (typeof window !== "undefined") {
  window.USERID_PREFIX_CONFIG = globalConfig.USERID_PREFIX_CONFIG;
}

globalThis?.window?.addEventListener("load", () => {
  trackParametersOnPageLoad();
});

setLpCTALinkDomain();
setMauticSrc();
extractTrackingParameters();

function setMauticSrc() {
  if (typeof window !== "undefined") {
    if (globalConfig.MAUTIC_SRC) {
      let hostname = globalThis?.window?.location.hostname;
      mauticSrc = globalConfig.MAUTIC_SRC[hostname];
      window.mauticSrc = mauticSrc;
      if (!mauticSrc) {
        logError("mauticSrc is not defined for this Domain");
      }
    } else {
      logError("MAUTIC_SRC is not defined");
    }
  }
}

function extractTrackingParameters() {
  if (typeof window !== "undefined") {
    let params = getSearchParams(globalThis?.window?.location.href);
    setUTMParameters(params);
    setCampaignSource();
    setPageTitle();
    setPcode(params);
  }
}

function setUTMParameters(params) {
  let utmParams = ["utm_medium", "utm_source", "utm_campaign", "utm_content", "utm_term"];
  let utmValues = utmParams.map(function (utm) {
    return params[utm] == undefined ? "" : decodeURIComponent(params[utm].trim());
  });
  utmMedium = utmValues[0];
  utmSource = utmValues[1];
  utmCampaign = utmValues[2];
  utmContent = utmValues[3];
  utmTerm = utmValues[4];
}

function setCampaignSource() {
  cs = getCampaignSource();
}

function setPcode(params) {
  pCode = extractPcode(params["pcode"]);
}

function setPageTitle() {
  pageTitle = "";
  let title = globalThis?.document?.querySelector("title");
  if (title && title.textContent) {
    pageTitle = title.textContent;
    if (cs) {
      pageTitle += ": " + cs;
    }
  }
}

function trackParametersOnPageLoad() {
  if (pCode) {
    mt(
      "send",
      "pageview",
      { page_title: pageTitle, pcode: pCode, tags: cs },
      {
        onerror: function () {
          logError(errorMessageConfig.MT_ERROR);
        },
      }
    );
  } else {
    mt(
      "send",
      "pageview",
      { page_title: pageTitle, tags: cs },
      {
        onerror: function () {
          logError(errorMessageConfig.MT_ERROR);
        },
      }
    );
  }
}

function getCampaignSource() {
  let campaignSource = "";
  if (utmCampaign && utmSource && utmMedium) {
    campaignSource = utmCampaign + "-" + utmSource + "-" + utmMedium;
  }
  return campaignSource;
}

function extractPcode(pcodeStr) {
  let pcode = pcodeStr;
  if (pcode != undefined && pcode != "") {
    pcode = pcode.trim();
    pcode = decodeURIComponent(pcode);
    pcode = pcode.split("?")[0];
    pcode = pcode.endsWith("/") ? pcode.substring(0, pcode.length - 1) : pcode;
    let pcodeArr = pcode.split("/");
    pcode = pcodeArr[pcodeArr.length - 1];
    pcode = pcode.includes("-") ? pcode.split("-")[1] : pcode;
    pcode = pcode == "" ? undefined : pcode;
  } else {
    pcode = undefined;
  }
  return pcode;
}

export function getUserIDFromCookie() {
  let name = "mtc_id=";
  let decodedCookie = decodeURIComponent(globalThis?.document?.cookie);
  let ca = decodedCookie.split(";");
  let c;
  let m_uid;

  for (let i = 0; i < ca.length; i++) {
    c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      m_uid = c.substring(name.length, c.length);
      break;
    }
  }
  if (m_uid && mauticSrc && globalConfig.USERID_PREFIX_CONFIG) {
    let url = new URL(mauticSrc);
    let hostname = url.hostname;
    let prefix = globalConfig.USERID_PREFIX_CONFIG[hostname];
    m_uid = prefix ? prefix + "-" + m_uid : m_uid;
  }
  return m_uid;
}

function setLpCTALinkDomain() {
  if (typeof window !== "undefined") {
    if (globalConfig.LP_CTA_LINK_DOMAIN_CONFIG) {
      let hostname = globalThis?.window?.location.hostname;
      lp_CTA_Link_Domain = globalConfig.LP_CTA_LINK_DOMAIN_CONFIG[hostname];
      if (!lp_CTA_Link_Domain) {
        logError("lp_CTA_Link_Domain is not defined for this Domain");
      }
    } else {
      logError("LP_CTA_LINK_DOMAIN_CONFIG is not defined");
    }
  }
}

(function (w, d, t, u, n, a, m) {
  if (typeof w === "undefined" || typeof d === "undefined") {
    console.error("window or document is not defined");
    return;
  }

  w["MauticTrackingObject"] = n;
  w[n] =
    w[n] ||
    function () {
      (w[n].q = w[n].q || []).push(arguments);
    };
  a = d.createElement(t);
  m = d.getElementsByTagName(t)[0];
  a.async = 1;
  a.src = u;
  m.parentNode.insertBefore(a, m);
})(typeof window !== "undefined" ? window : undefined, typeof document !== "undefined" ? document : undefined, "script", mauticSrc + "/mtc.js", "mt");
