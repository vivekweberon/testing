import { _rollbarConfig } from "./rb-config.js";

if (_rollbarConfig) {
  _rollbarConfig.payload.user = getClientInfo();
}

// Rollbar Snippet
//  removed the rollbar snippet for testing
// End Rollbar Snippet

export function logResourceLoadError(ref) {
  if (typeof window !== "undefined") {
    let err = "Error loading: '" + (ref.src || ref.href) + "'";
    if (globalThis?.window?.Rollbar) {
      Rollbar.error(err);
    } else {
      console.log(err);
    }
    return false;
  }
}

export function logError(err) {
  if (typeof window !== "undefined") {
    if (globalThis?.window?.Rollbar) {
      Rollbar.error(err);
    } else {
      console.log(err);
    }
  }
}

function getClientInfo() {
  if (typeof window !== "undefined") {
    let client = {};
    client.userAgent = globalThis?.navigator?.userAgent;
    client.browser = getBrowserName();
    client.cookieEnabled = globalThis?.navigator?.cookieEnabled;
    client.language = globalThis?.navigator?.language;
    client.vendor = globalThis?.navigator?.vendor;
    client.webdriver = globalThis?.navigator?.webdriver;
    client.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    client.PageURL = globalThis?.window?.location.href;
    client.referrer =
      globalThis?.document?.referrer == ""
        ? "Direct"
        : globalThis.document?.referrer;
    return client;
  }
}

function getBrowserName() {
  let sBrowser,
    sUsrAg = globalThis?.navigator?.userAgent;
  if (sUsrAg?.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";
  } else if (sUsrAg?.indexOf("SamsungBrowser") > -1) {
    sBrowser = "Samsung Internet";
  } else if (sUsrAg?.indexOf("Opera") > -1 || sUsrAg?.indexOf("OPR") > -1) {
    sBrowser = "Opera";
  } else if (sUsrAg?.indexOf("Trident") > -1) {
    sBrowser = "Microsoft Internet Explorer";
  } else if (sUsrAg?.indexOf("Edge") > -1) {
    sBrowser = "Microsoft Edge (Legacy)";
  } else if (sUsrAg?.indexOf("Edg") > -1) {
    sBrowser = "Microsoft Edge (Chromium)";
  } else if (sUsrAg?.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome or Chromium";
  } else if (sUsrAg?.indexOf("Safari") > -1) {
    sBrowser = "Apple Safari";
  } else {
    sBrowser = "unknown";
  }
  return sBrowser;
}
