(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[888],{

/***/ 9602:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: function() { return /* binding */ currentPageName; },
/* harmony export */   e: function() { return /* binding */ getPageID; }
/* harmony export */ });
let currentPageName = getCurrentPageName();
const getPageID = () => {
  return currentPageName.split(".")[0];
};
function getCurrentPageName() {
  let pageName;
  let path = globalThis?.window?.location.pathname;
  path = decodeURIComponent(path);
  if (path == "/") {
    pageName = "index";
  } else {
    let arr = path.split("/");
    pageName = arr[arr.length - 1];
    pageName = pageName.split(".")[0];
  }
  return pageName;
}

/***/ }),

/***/ 1021:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EJ: function() { return /* binding */ enableUnsubscribe; },
/* harmony export */   O5: function() { return /* binding */ resubscribe; },
/* harmony export */   Pl: function() { return /* binding */ hideFeedbackForm; },
/* harmony export */   ew: function() { return /* binding */ onFeedbackFormSubmitEvent; },
/* harmony export */   hH: function() { return /* binding */ setUnsubscribeAnonymousUserMessage; },
/* harmony export */   ky: function() { return /* binding */ setFeedbackModalRef; },
/* harmony export */   r1: function() { return /* binding */ unsubscribe; },
/* harmony export */   tf: function() { return /* binding */ setResubscribeSuccessMessage; },
/* harmony export */   wu: function() { return /* binding */ userHasUnsubscribed; }
/* harmony export */ });
/* harmony import */ var _mauticForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2549);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(786);
/* harmony import */ var _configs_global_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4052);
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8115);
/* harmony import */ var _messages_errorMessage_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2153);
/* harmony import */ var _branded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9602);






let unsubscribeAnonymousUserMessage;
let resubscribeSuccessMessage;
const FEEDBACK_FORMSET = _configs_global_json__WEBPACK_IMPORTED_MODULE_2__/* .FEEDBACK_FORMSET */ .k8;
let feedbackFormName;
let feedbackFormID;
let unsubscribeCollateral = "";
let feedbackModalRef;
const setFeedbackModalRef = ref => {
  feedbackModalRef = ref;
};
const setUnsubscribeAnonymousUserMessage = unsubscribeAnonymousUserMessageValue => {
  unsubscribeAnonymousUserMessage = unsubscribeAnonymousUserMessageValue ? unsubscribeAnonymousUserMessageValue : _configs_global_json__WEBPACK_IMPORTED_MODULE_2__/* .UNSUBSCRIBE_ANONYMOUS_USER_MESSAGE */ .IU;
};
const setResubscribeSuccessMessage = resubscribeSuccessMessageValue => {
  resubscribeSuccessMessage = resubscribeSuccessMessageValue ? resubscribeSuccessMessageValue : _configs_global_json__WEBPACK_IMPORTED_MODULE_2__/* .RESUBSCRIBE_SUCCESS_MESSAGE */ .XI;
};
async function onFeedbackFormSubmitEvent() {
  let pageTitle = "Unsubscribed from " + unsubscribeCollateral;
  return new Promise((resolve, reject) => {
    mt("send", "pageview", {
      page_title: pageTitle,
      tags: "unsubscribe-" + unsubscribeCollateral.toLowerCase() + ",-resubscribe-" + unsubscribeCollateral.toLowerCase()
    }, {
      onerror: function () {
        (0,_logger__WEBPACK_IMPORTED_MODULE_1__/* .logError */ .H)(_messages_errorMessage_json__WEBPACK_IMPORTED_MODULE_4__/* .MT_ERROR */ .W);
        reject(false);
      },
      onload: function () {
        resolve(true);
      }
    });
  });
}
function loadFeedbackForm(feedbackFormSlotRef) {
  if (feedbackFormSlotRef.current) {
    let src = _tracker__WEBPACK_IMPORTED_MODULE_3__/* .mauticSrc */ .i3 + "/form/generate.js?id=" + feedbackFormID;
    let script = document.createElement("script");
    script.setAttribute("src", src);
    script.addEventListener("load", function () {
      (0,_mauticForm__WEBPACK_IMPORTED_MODULE_0__/* .setMauticFormFields */ .JG)(feedbackFormName);
      displayFeedbackForm();
      (0,_mauticForm__WEBPACK_IMPORTED_MODULE_0__/* .setCurrentUrl */ .NM)(feedbackFormName);
      (0,_mauticForm__WEBPACK_IMPORTED_MODULE_0__/* .updateFormActionAttribute */ ._F)(feedbackFormName);
    });
    script.onerror = function () {
      (0,_logger__WEBPACK_IMPORTED_MODULE_1__/* .logResourceLoadError */ .h)(this);
    };
    feedbackFormSlotRef.current.appendChild(script);
  } else {
    (0,_logger__WEBPACK_IMPORTED_MODULE_1__/* .logError */ .H)("feedbackFormSlot is not defined");
    console.log("feedbackFormSlot is not defined");
  }
}
function displayFeedbackForm() {
  let body = document.getElementsByTagName("body")[0];
  if (feedbackModalRef) {
    feedbackModalRef.current.style.display = "block";
    body.style.overflow = "hidden";
  }
}
function hideFeedbackForm() {
  let body = document.getElementsByTagName("body")[0];
  if (feedbackModalRef) {
    feedbackModalRef.current.style.display = "none";
    body.style.overflow = "auto";
  }
}
function userHasUnsubscribed() {
  let ret = false;
  let unsubscribed = globalThis?.sessionStorage?.getItem("unsubscribed-" + _branded__WEBPACK_IMPORTED_MODULE_5__/* .currentPageName */ .K);
  if (unsubscribed == "yes") {
    ret = true;
  }
  return ret;
}
function feedbackFormLoaded() {
  let ret = false;
  let feedbackForm = document.getElementById("mauticform_" + feedbackFormName);
  if (feedbackForm) {
    ret = true;
  }
  return ret;
}
function unsubscribe(e, feedbackFormSlotRef) {
  e.preventDefault();
  if (isAnonymousUser()) {
    alert(unsubscribeAnonymousUserMessage);
    return;
  } else if (!feedbackFormLoaded()) {
    loadFeedbackForm(feedbackFormSlotRef);
  } else {
    displayFeedbackForm();
  }
}
function isAnonymousUser() {
  let ret = false;
  let alias = document.getElementById("mauticform_input_" + _mauticForm__WEBPACK_IMPORTED_MODULE_0__/* .formName */ .Wj + "_alias");
  if (alias && !alias.value) {
    ret = true;
  }
  return ret;
}
async function resubscribe(e) {
  e.preventDefault();
  let resubscribed = await new Promise((resolve, reject) => {
    let pageTitle = "Re-Subscribed to " + unsubscribeCollateral;
    mt("send", "pageview", {
      page_title: pageTitle,
      tags: "-unsubscribe-" + unsubscribeCollateral.toLowerCase() + ",resubscribe-" + unsubscribeCollateral.toLowerCase()
    }, {
      onerror: function () {
        (0,_logger__WEBPACK_IMPORTED_MODULE_1__/* .logError */ .H)(_messages_errorMessage_json__WEBPACK_IMPORTED_MODULE_4__/* .MT_ERROR */ .W);
        reject(false);
      },
      onload: function () {
        resolve(true);
      }
    });
  });
  if (resubscribed) {
    sessionStorage.removeItem("unsubscribed-" + _branded__WEBPACK_IMPORTED_MODULE_5__/* .currentPageName */ .K);
    alert(resubscribeSuccessMessage);
  }
  return resubscribed;
}
function enableUnsubscribe(usCollateral) {
  if (usCollateral) {
    unsubscribeCollateral = usCollateral;
    setFeedbackForm();
  }
}
function setFeedbackForm() {
  if (FEEDBACK_FORMSET) {
    [feedbackFormName, feedbackFormID] = FEEDBACK_FORMSET;
    (0,_mauticForm__WEBPACK_IMPORTED_MODULE_0__/* .addMauticFormHookForFeedbackForm */ .o_)(feedbackFormName);
  } else {
    (0,_logger__WEBPACK_IMPORTED_MODULE_1__/* .logError */ .H)("Feedback form is not configured");
  }
}

/***/ }),

/***/ 7547:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  md: function() { return /* binding */ disableGoogleOneTap; },
  cn: function() { return /* binding */ displayGSI; },
  Au: function() { return /* binding */ initGoogleIdentityService; },
  ve: function() { return /* binding */ initGoogleSignIn; },
  SO: function() { return /* binding */ initOneTapSignIn; },
  Bf: function() { return /* binding */ setGSISlotRef; }
});

;// CONCATENATED MODULE: ./node_modules/jwt-decode/build/esm/index.js
class InvalidTokenError extends Error {
}
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
        let code = p.charCodeAt(0).toString(16).toUpperCase();
        if (code.length < 2) {
            code = "0" + code;
        }
        return "%" + code;
    }));
}
function base64UrlDecode(str) {
    let output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch (output.length % 4) {
        case 0:
            break;
        case 2:
            output += "==";
            break;
        case 3:
            output += "=";
            break;
        default:
            throw new Error("base64 string is not of the correct length");
    }
    try {
        return b64DecodeUnicode(output);
    }
    catch (err) {
        return atob(output);
    }
}
function jwtDecode(token, options) {
    if (typeof token !== "string") {
        throw new InvalidTokenError("Invalid token specified: must be a string");
    }
    options || (options = {});
    const pos = options.header === true ? 0 : 1;
    const part = token.split(".")[pos];
    if (typeof part !== "string") {
        throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
    }
    let decoded;
    try {
        decoded = base64UrlDecode(part);
    }
    catch (e) {
        throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
    }
    try {
        return JSON.parse(decoded);
    }
    catch (e) {
        throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
    }
}

// EXTERNAL MODULE: ./configs/global.json
var global = __webpack_require__(4052);
// EXTERNAL MODULE: ./modules/mauticForm.js
var mauticForm = __webpack_require__(2549);
;// CONCATENATED MODULE: ./modules/googleOauth.js



let displayGSI;
let enableGoogleOneTap = true;
let enableGoogleSignIn = true;
let GSISlotRef;
function updateDisplayGSI(newValue) {
  displayGSI = newValue;
}
function initGoogleIdentityService() {
  if ((enableGoogleOneTap || enableGoogleSignIn) && mauticForm/* oauthLoginRequired */.G9) {
    google.accounts.id.initialize({
      client_id: global/* GOOGLE_OAUTH_CLIENT_ID */.m8,
      callback: handleCredentialResponse,
      cancel_on_tap_outside: false,
      itp_support: false,
      context: "signin",
      ux_mode: "popup"
    });
  }
}
function initOneTapSignIn() {
  if (enableGoogleOneTap && mauticForm/* oauthLoginRequired */.G9) {
    google.accounts.id.prompt();
  }
}
function handleCredentialResponse(response) {
  const cred = jwtDecode(response.credential);
  const selectBy = response.select_by;
  let source = "";
  if (selectBy && selectBy.includes("user")) {
    source = "Google-OneTap";
  } else if (selectBy && selectBy.includes("btn")) {
    source = "Google-SignIn";
  }
  if (cred.email) {
    (0,mauticForm/* submitOauthNameAndEmail */.gZ)(cred.email, cred.name, source);
  }
}
const setGSISlotRef = newValue => {
  GSISlotRef = newValue;
};
function initGoogleSignIn() {
  let email = globalThis?.document?.getElementById("mauticform_input_" + mauticForm/* formName */.Wj + "_f_email");
  if (mauticForm/* formName */.Wj == mauticForm/* progressiveFormName */.oW && email && mauticForm/* oauthLoginRequired */.G9) {
    updateDisplayGSI(true);
    google.accounts.id.renderButton(GSISlotRef.current, {
      theme: "filled_blue",
      size: "large",
      type: "standard",
      shape: "rectangular",
      text: "signin_with",
      logo_alignment: "left",
      width: "240px"
    });
  }
}
function disableGoogleOneTap() {
  enableGoogleOneTap = false;
}

/***/ }),

/***/ 8684:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BW: function() { return /* binding */ gtmContainerID; },
/* harmony export */   SD: function() { return /* binding */ sendGTMEvents; },
/* harmony export */   gC: function() { return /* binding */ loadGTMScript; }
/* harmony export */ });
/* harmony import */ var _configs_global_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4052);
/* harmony import */ var _mauticForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2549);


let gtmContainerID;
const loadGTMScript = () => {
  if (true) {
    if (_configs_global_json__WEBPACK_IMPORTED_MODULE_0__/* .GTM_CONFIG */ .Cz) {
      let hostname = globalThis?.window?.location.hostname;
      gtmContainerID = _configs_global_json__WEBPACK_IMPORTED_MODULE_0__/* .GTM_CONFIG */ .Cz[hostname];
      if (gtmContainerID) {
        let gtmScript = globalThis?.document?.createElement("script");
        let gtmCode = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','" + gtmContainerID + "');";
        gtmScript.innerHTML = gtmCode;
        let head = globalThis?.document?.getElementsByTagName("head")[0];
        head.prepend(gtmScript);
      }
    }
  }
};
function sendEmailOrPhoneVerifiedEvents(id) {
  if (true) {
    if ((id == "ev" || id == "sv") && sessionStorage.getItem("gtm_" + id) != "yes") {
      let ev = globalThis?.document?.getElementById("mauticform_input_" + _mauticForm__WEBPACK_IMPORTED_MODULE_1__/* .progressiveFormName */ .oW + "_" + id);
      if (ev && ev.value == "true") {
        let eventName = id == "ev" ? "emailVerified" : "phoneVerified";
        window.dataLayer.push({
          event: eventName
        });
        sessionStorage.setItem("gtm_" + id, "yes");
      }
    }
  }
}
function sendGTMEvents() {
  sendEmailOrPhoneVerifiedEvents("ev");
  sendEmailOrPhoneVerifiedEvents("sv");
}

/***/ }),

/***/ 786:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: function() { return /* binding */ logError; },
  h: function() { return /* binding */ logResourceLoadError; }
});

// EXTERNAL MODULE: ./modules/tracker.js
var tracker = __webpack_require__(8115);
// EXTERNAL MODULE: ./configs/global.json
var global = __webpack_require__(4052);
// EXTERNAL MODULE: ./messages/errorMessage.json
var errorMessage = __webpack_require__(2153);
;// CONCATENATED MODULE: ./modules/rb-config.js



var _rollbarConfig = {
  accessToken: global/* ROLLBAR_CONFIG.ROLLBAR_ACCESS_TOKEN */.bQ.J,
  captureUncaught: true,
  captureUnhandledRejections: true,
  retryInterval: 5000,
  autoInstrument: {
    network: true,
    log: true,
    dom: true,
    navigation: true,
    connectivity: true,
    contentSecurityPolicy: true,
    errorOnContentSecurityPolicy: true
  },
  payload: {
    environment: ""
  }
};
updateRollbarEnvironment();
updateRollbarPerson();
function updateRollbarEnvironment() {
  if (_rollbarConfig) {
    let hostname = globalThis?.window?.location.hostname;
    _rollbarConfig.payload.environment = global/* ROLLBAR_CONFIG.ROLLBAR_ENVIRONMENTS */.bQ.p[hostname] ? global/* ROLLBAR_CONFIG.ROLLBAR_ENVIRONMENTS */.bQ.p[hostname] : "NOT DEFINED";
  }
}
function updateRollbarPerson() {
  let userID;
  let interval_Rollbar_UserID = setInterval(function () {
    if (globalThis?.window?.getUserIDFromCookie) {
      userID = (0,tracker/* getUserIDFromCookie */.ls)();
      if (userID) {
        if (globalThis?.window?.Rollbar) {
          Rollbar.configure({
            payload: {
              person: {
                id: userID
              }
            }
          });
        } else {
          console.log(errorMessage/* ROLLBAR_ERROR */.J);
        }
        clearInterval(interval_Rollbar_UserID);
      }
    }
  }, 1000);
}
;// CONCATENATED MODULE: ./modules/logger.js

if (_rollbarConfig) {
  _rollbarConfig.payload.user = getClientInfo();
}

// Rollbar Snippet
//  removed the rollbar snippet for testing
// End Rollbar Snippet

function logResourceLoadError(ref) {
  if (true) {
    let err = "Error loading: '" + (ref.src || ref.href) + "'";
    if (globalThis?.window?.Rollbar) {
      Rollbar.error(err);
    } else {
      console.log(err);
    }
    return false;
  }
}
function logError(err) {
  if (true) {
    if (globalThis?.window?.Rollbar) {
      Rollbar.error(err);
    } else {
      console.log(err);
    }
  }
}
function getClientInfo() {
  if (true) {
    let client = {};
    client.userAgent = globalThis?.navigator?.userAgent;
    client.browser = getBrowserName();
    client.cookieEnabled = globalThis?.navigator?.cookieEnabled;
    client.language = globalThis?.navigator?.language;
    client.vendor = globalThis?.navigator?.vendor;
    client.webdriver = globalThis?.navigator?.webdriver;
    client.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    client.PageURL = globalThis?.window?.location.href;
    client.referrer = globalThis?.document?.referrer == "" ? "Direct" : globalThis.document?.referrer;
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

/***/ }),

/***/ 2549:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $X: function() { return /* binding */ displayDivider1; },
/* harmony export */   Aw: function() { return /* binding */ setFormsets; },
/* harmony export */   CX: function() { return /* binding */ setMauticForms; },
/* harmony export */   G9: function() { return /* binding */ oauthLoginRequired; },
/* harmony export */   IR: function() { return /* binding */ setReferralFormHeader; },
/* harmony export */   JG: function() { return /* binding */ setMauticFormFields; },
/* harmony export */   JX: function() { return /* binding */ setLpModalCloseRef; },
/* harmony export */   Jg: function() { return /* binding */ getEmailSubmitted; },
/* harmony export */   NM: function() { return /* binding */ setCurrentUrl; },
/* harmony export */   Pn: function() { return /* binding */ getLocalStorageLpModalCloseClickCount; },
/* harmony export */   Sn: function() { return /* binding */ loadForm; },
/* harmony export */   Tp: function() { return /* binding */ setReportPageName; },
/* harmony export */   Uh: function() { return /* binding */ isCampaignValid; },
/* harmony export */   Uq: function() { return /* binding */ formHeader; },
/* harmony export */   W0: function() { return /* binding */ showPopupForm; },
/* harmony export */   WS: function() { return /* binding */ getMtSendUpdateFlag; },
/* harmony export */   Wj: function() { return /* binding */ formName; },
/* harmony export */   Y5: function() { return /* binding */ enablePopupForm; },
/* harmony export */   YJ: function() { return /* binding */ setLpModalRef; },
/* harmony export */   ZU: function() { return /* binding */ setFormHeaders; },
/* harmony export */   _F: function() { return /* binding */ updateFormActionAttribute; },
/* harmony export */   bm: function() { return /* binding */ alias; },
/* harmony export */   fb: function() { return /* binding */ hidePopupForm; },
/* harmony export */   fz: function() { return /* binding */ getNTimes; },
/* harmony export */   gZ: function() { return /* binding */ submitOauthNameAndEmail; },
/* harmony export */   mB: function() { return /* binding */ setLpModalContentRef; },
/* harmony export */   oV: function() { return /* binding */ setLocalStorageLpModalCloseClickCount; },
/* harmony export */   oW: function() { return /* binding */ progressiveFormName; },
/* harmony export */   o_: function() { return /* binding */ addMauticFormHookForFeedbackForm; },
/* harmony export */   xw: function() { return /* binding */ enableEmbeddedFormForKnownContacts; }
/* harmony export */ });
/* harmony import */ var _branded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9602);
/* harmony import */ var _feedbackForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1021);
/* harmony import */ var _googleOauth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7547);
/* harmony import */ var _gtm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8684);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(786);
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8115);
/* harmony import */ var _messages_errorMessage_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2153);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5657);
/* harmony import */ var _configs_global_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4052);
/* harmony import */ var _ytvideo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1165);
/* harmony import */ var _report__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3636);












let FORMSETS;
let emailFormHeader;
let phoneFormHeader;
let noFormHeader;
let formName;
let progressiveFormName;
let displayDivider1 = false;
let alias = null;
let formHeader = "";
let oauthLoginRequired = true;
let isEmailSubmitted = false;
let controlVideos = false;
let referralFormHeader;
let mFormSlotRef;
let formID;
let progressiveFormID;
let embeddedFormForKnownContacts = false;
let embeddedFormSlotRef;
let popupForm = false;
let timeInterval;
let nTimes;
let zDuration;
let formLoaded = false;
let MauticSDK;
let MauticSDKLoaded;
let reportPageName = "NA";
let lpModalRef;
let lpModalCloseRef;
let lpModalContentRef;
if ( true && typeof MauticFormCallback == "undefined") {
  window.MauticFormCallback = {};
}
const setReportPageName = reportName => {
  reportPageName = reportName;
};
const getMtSendUpdateFlag = () => {
  return globalThis?.sessionStorage?.getItem("mtSendUpdate");
};
const setLpModalRef = ref => {
  lpModalRef = ref;
};
const setLpModalCloseRef = ref => {
  lpModalCloseRef = ref;
};
const setLpModalContentRef = ref => {
  lpModalContentRef = ref;
};
const getNTimes = () => {
  return nTimes;
};
const getEmailSubmitted = async () => {
  return new Promise(resolve => {
    let formLoadedTimeInterval = setInterval(() => {
      if (isFormLoaded()) {
        clearInterval(formLoadedTimeInterval);
        resolve(isEmailSubmitted);
      }
    }, 500);
  });
};
const setFormHeaders = (emailFormHeaderValue, phoneFormHeaderValue, noFormHeaderValue) => {
  emailFormHeader = emailFormHeaderValue ? emailFormHeaderValue : _configs_global_json__WEBPACK_IMPORTED_MODULE_8__/* ["FORM_HEADER-EMAIL_FORM_HEADER"] */ .mM;
  phoneFormHeader = phoneFormHeaderValue ? phoneFormHeaderValue : _configs_global_json__WEBPACK_IMPORTED_MODULE_8__/* ["FORM_HEADER-PHONE_FORM_HEADER"] */ .vZ;
  noFormHeader = noFormHeaderValue ? noFormHeaderValue : "";
};
const setReferralFormHeader = referralFormHeaderValue => {
  referralFormHeader = referralFormHeaderValue ? referralFormHeaderValue : "";
};
const hidePopupForm = () => {
  if (lpModalRef.current) {
    let body = document.getElementsByTagName("body")[0];
    lpModalRef.current.style.display = "none";
    body.style.overflow = "auto";
  }
};
function setCurrentPage(formName) {
  let currentPage = globalThis?.document?.getElementById("mauticform_input_" + formName + "_currentpage");
  if (currentPage) {
    let pageID = (0,_branded__WEBPACK_IMPORTED_MODULE_0__/* .getPageID */ .e)();
    if (pageID) {
      currentPage.value = _branded__WEBPACK_IMPORTED_MODULE_0__/* .currentPageName */ .K == pageID ? _branded__WEBPACK_IMPORTED_MODULE_0__/* .currentPageName */ .K : _branded__WEBPACK_IMPORTED_MODULE_0__/* .currentPageName */ .K + "/?id=" + pageID;
    } else {
      currentPage.value = _branded__WEBPACK_IMPORTED_MODULE_0__/* .currentPageName */ .K;
    }
  }
}
function setCurrentUrl(formName) {
  let rtn = globalThis?.document?.getElementById("mauticform_" + formName + "_return");
  if (rtn) {
    let contactAnchor = mFormSlotRef ? "#" + mFormSlotRef.current.id : "";
    let href = window.location.href;
    if (contactAnchor) {
      href = href.includes(contactAnchor) ? href : href + contactAnchor;
    }
    rtn.value = href;
  }
}
function isEndOfForm() {
  let ret = false;
  if (formName == progressiveFormName) {
    ret = isEndOfProgressiveForm();
  }
  return ret;
}
function isEndOfProgressiveForm() {
  let ret = false;
  if (formName != "pfhomewardboundlp") {
    let email = globalThis?.document?.getElementById("mauticform_input_" + formName + "_f_email");
    let phone = globalThis?.document?.getElementById("mauticform_input_" + formName + "_f_phone");
    let fullname = globalThis?.document?.getElementById("mauticform_input_" + formName + "_fullname");
    ret = email == null && phone == null && fullname == null;
  }
  return ret;
}
function addMauticFormHooksOnSubmitAndOnResponse(fName) {
  MauticFormCallback[fName] = {
    onValidateEnd: function (formValid) {
      if (formValid) {
        onFormSubmitEvent();
      }
    },
    onResponseEnd: function (response) {
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  };
}
function addMauticFormHookForFeedbackForm(fName) {
  MauticFormCallback[fName] = {
    onValidateEnd: async function (formValid) {
      if (formValid) {
        await (0,_feedbackForm__WEBPACK_IMPORTED_MODULE_1__/* .onFeedbackFormSubmitEvent */ .ew)();
      }
    },
    onResponseEnd: function (response) {
      sessionStorage.setItem("unsubscribed-" + _branded__WEBPACK_IMPORTED_MODULE_0__/* .currentPageName */ .K, "yes");
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  };
}
function hideLastForm() {
  let form = globalThis?.document?.getElementById("mauticform_" + formName);
  form.parentNode.removeChild(form);
  if (formName == progressiveFormName) {
    resetMauticSDK();
  }
}
function onFormSubmitEvent() {
  let lpTag = _branded__WEBPACK_IMPORTED_MODULE_0__/* .currentPageName */ .K;
  let pageID = (0,_branded__WEBPACK_IMPORTED_MODULE_0__/* .getPageID */ .e)();
  // store the update in session storage, which will be sent after form submission
  let mtSendUpdate;
  let formData = {};
  let pageTitle = "Form submitted on: " + lpTag;
  if (_tracker__WEBPACK_IMPORTED_MODULE_5__/* .pCode */ ._b != undefined) {
    mtSendUpdate = {
      page_title: pageTitle,
      pcode: _tracker__WEBPACK_IMPORTED_MODULE_5__/* .pCode */ ._b,
      tags: lpTag
    };
  } else {
    mtSendUpdate = {
      page_title: pageTitle,
      tags: lpTag
    };
  }
  sessionStorage.mtSendUpdate = JSON.stringify(mtSendUpdate);
  // to update alias field
  let alias = document.getElementById("mauticform_input_" + formName + "_alias");
  let fullname = document.getElementById("mauticform_input_" + formName + "_fullname");
  if (fullname != undefined && alias != undefined) {
    alias.value = fullname.value;
    formData.fullname = fullname.value;
  }
  // set popup form submission flag for the page
  if (popupForm) {
    localStorage.setItem(pageID + "-sf", "1");
  }

  // to update email and phone submitted fields
  let femail = document.getElementById("mauticform_input_" + formName + "_f_email");
  let fphone = document.getElementById("mauticform_input_" + formName + "_f_phone");
  let email_submitted = document.getElementById("mauticform_input_" + formName + "_email_submitted");
  let phone_submitted = document.getElementById("mauticform_input_" + formName + "_phone_submitted");
  if (femail && email_submitted) {
    email_submitted.value = "yes";
    formData.email = femail.value;
  }
  if (fphone && phone_submitted) {
    phone_submitted.value = "yes";
    formData.phone = fphone.value;
  }

  //send form data to Rollbar
  if (window.Rollbar) {
    Rollbar.info("Form-Submission", formData);
  }

  // to update report name
  updateReportField();
}
function updateReportField() {
  let report = globalThis?.document?.getElementById("mauticform_input_" + formName + "_report");
  if (report) {
    report.value = reportPageName;
  }
}
function setMauticFormFields(formName) {
  let cUTMSourceField = globalThis?.document?.getElementById("mauticform_input_" + formName + "_c_utm_source");
  let cUTMMediumField = globalThis?.document?.getElementById("mauticform_input_" + formName + "_c_utm_medium");
  let cUTMCampaignField = globalThis?.document?.getElementById("mauticform_input_" + formName + "_c_utm_campaign");
  let cUTMTermField = globalThis?.document?.getElementById("mauticform_input_" + formName + "_c_utm_term");
  let cUTMContentField = globalThis?.document?.getElementById("mauticform_input_" + formName + "_c_utm_content");
  if (cUTMSourceField && cUTMMediumField && cUTMCampaignField && cUTMTermField && cUTMContentField) {
    cUTMSourceField.value = _tracker__WEBPACK_IMPORTED_MODULE_5__/* .utmSource */ .z6;
    cUTMMediumField.value = _tracker__WEBPACK_IMPORTED_MODULE_5__/* .utmMedium */ .pi;
    cUTMCampaignField.value = _tracker__WEBPACK_IMPORTED_MODULE_5__/* .utmCampaign */ .S8;
    cUTMTermField.value = _tracker__WEBPACK_IMPORTED_MODULE_5__/* .utmTerm */ .ap;
    cUTMContentField.value = _tracker__WEBPACK_IMPORTED_MODULE_5__/* .utmContent */ .WA;
  }
  setCurrentPage(formName);
}
function updateFormActionAttribute(formName) {
  let mForm = globalThis?.document?.getElementById("mauticform_" + formName);
  if (mForm) {
    let arr = window.location.href.split("?");
    if (arr.length == 2 && arr[1] != undefined && arr[1] != "") {
      let action = mForm.getAttribute("action");
      action = action + "&" + arr[1];
      mForm.setAttribute("action", action);
    }
  }
}
async function displayPopupForm() {
  if (popupForm) {
    let endOfForm = isEndOfForm();
    let pageID = (0,_branded__WEBPACK_IMPORTED_MODULE_0__/* .getPageID */ .e)();
    let submitFlag = localStorage.getItem(pageID + "-sf") == undefined ? 0 : Number(localStorage.getItem(pageID + "-sf"));
    let count = localStorage.getItem(pageID + "-count") == undefined ? 0 : Number(localStorage.getItem(pageID + "-count"));
    if (!endOfForm) {
      if (submitFlag == 1) {
        submitFlag = 0;
        localStorage.setItem(pageID + "-sf", submitFlag.toString());
        count = 0;
        setLocalStorageLpModalCloseClickCount(count);
        showPopupForm(zDuration);
      } else if (count == nTimes) {
        showPopupForm(0);
      } else {
        showPopupForm();
      }
    } else {
      hidePopupForm();
    }
  }
}
async function loadForm(formSlotRef, readMore) {
  mFormSlotRef = formSlotRef;
  let mtSendUpdate = sessionStorage.mtSendUpdate;
  if (mtSendUpdate) {
    return new Promise((resolve, reject) => {
      mtSendUpdate = JSON.parse(mtSendUpdate);
      mt("send", "pageview", mtSendUpdate, {
        onload: function () {
          sessionStorage.mtSendUpdate = "";
          loadForm(formSlotRef, readMore).then(resolve).catch(reject);
        },
        onerror: function () {
          (0,_logger__WEBPACK_IMPORTED_MODULE_4__/* .logError */ .H)(_messages_errorMessage_json__WEBPACK_IMPORTED_MODULE_6__/* .MT_ERROR */ .W);
          reject(_messages_errorMessage_json__WEBPACK_IMPORTED_MODULE_6__/* .MT_ERROR */ .W);
        }
      });
    });
  } else {
    if (readMore) {
      let readMoreFlag = (0,_report__WEBPACK_IMPORTED_MODULE_10__/* .getReadMoreFlag */ .Wc)();
      if (readMoreFlag !== "yes") {
        return;
      }
    }
    if (_tracker__WEBPACK_IMPORTED_MODULE_5__/* .pCode */ ._b) {
      await identifyUserAndLoadMauticForm();
    } else {
      await loadMauticForm();
    }
  }
}
async function loadMauticForm() {
  await new Promise((resolve, reject) => {
    let aside = mFormSlotRef.current;
    let src = _tracker__WEBPACK_IMPORTED_MODULE_5__/* .mauticSrc */ .i3 + "/form/generate.js?id=" + formID;
    let script = globalThis?.document?.createElement("script");
    script.setAttribute("src", src);
    script.addEventListener("load", function () {
      formOnload();
      resolve();
    });
    script.onerror = function () {
      (0,_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(this);
      reject("Error loading Mautic form resource");
    };
    if (aside) {
      aside.appendChild(script);
    }
  });
}
function setTraQRPlan(formName) {
  let plan = (0,_utility__WEBPACK_IMPORTED_MODULE_7__/* .getQueryParameter */ .ce)('plan');
  if (plan && formName == 'pftraqr') {
    let planField = globalThis?.document?.getElementById("mauticform_input_" + formName + "_plan");
    if (planField) {
      plan = plan.charAt(0).toUpperCase() + plan.slice(1).toLowerCase();
      planField.value = plan;
    }
  }
}
function formOnload() {
  let form = globalThis?.document?.getElementById("mauticform_" + formName);
  let submit = globalThis?.document?.getElementById("mauticform_input_" + formName + "_submit");
  if (form != null && submit != null) {
    switchToEmbeddedFormForKnownContacts();
    setEmailSubmitted();
    if (_gtm__WEBPACK_IMPORTED_MODULE_3__/* .gtmContainerID */ .BW) {
      (0,_gtm__WEBPACK_IMPORTED_MODULE_3__/* .sendGTMEvents */ .SD)();
    }
    displayPopupForm();
    if (window.google) {
      setOauthLoginRequired();
      (0,_googleOauth__WEBPACK_IMPORTED_MODULE_2__/* .initGoogleIdentityService */ .Au)();
      (0,_googleOauth__WEBPACK_IMPORTED_MODULE_2__/* .initOneTapSignIn */ .SO)();
      (0,_googleOauth__WEBPACK_IMPORTED_MODULE_2__/* .initGoogleSignIn */ .ve)();
    }
    addValidationToFields();
    createFormHeader();
    if (!isEndOfForm()) {
      setMauticFormFields(formName);
      setTraQRPlan(formName);
      setCurrentUrl(formName);
      updateFormActionAttribute(formName);
      displayDivider1 = true;
    } else if (submit.innerHTML == "Get Report") {
      displayDivider1 = true;
    } else if (submit.innerHTML == "Submit") {
      displayDivider1 = false;
      hideLastForm();
    }
    formLoaded = true;
  }
}
function isFormLoaded() {
  return formLoaded;
}
function setFormLoaded(loaded) {
  formLoaded = loaded;
}
async function identifyUserAndLoadMauticForm() {
  if (_tracker__WEBPACK_IMPORTED_MODULE_5__/* .pCode */ ._b != undefined) {
    let pageTitle = "Known user visit: " + _tracker__WEBPACK_IMPORTED_MODULE_5__/* .pCode */ ._b;
    return new Promise((resolve, reject) => {
      mt("send", "pageview", {
        page_title: pageTitle,
        pcode: _tracker__WEBPACK_IMPORTED_MODULE_5__/* .pCode */ ._b
      }, {
        onload: async function () {
          await loadMauticForm();
          resolve();
        },
        onerror: function () {
          (0,_logger__WEBPACK_IMPORTED_MODULE_4__/* .logError */ .H)(_messages_errorMessage_json__WEBPACK_IMPORTED_MODULE_6__/* .MT_ERROR */ .W);
          reject();
        }
      });
    });
  } else {
    await loadMauticForm();
  }
}
function switchToEmbeddedFormForKnownContacts() {
  if (embeddedFormForKnownContacts) {
    let email = globalThis?.document?.getElementById("mauticform_input_" + formName + "_f_email");
    let phone = globalThis?.document?.getElementById("mauticform_input_" + formName + "_f_phone");
    let fullname = globalThis?.document?.getElementById("mauticform_input_" + formName + "_fullname");
    let knownContact = email == null && phone == null && fullname == null;
    if (knownContact) {
      const element = lpModalCloseRef.current;
      element.remove();
      let lpModalContent = lpModalContentRef.current;
      let aside = embeddedFormSlotRef.current;
      while (lpModalContent.firstChild) {
        aside.appendChild(lpModalContent.firstChild);
      }
      mFormSlotRef = embeddedFormSlotRef;
      popupForm = false;
    }
  }
}
function setForm(reqFormName, reqFormID) {
  formName = reqFormName;
  formID = reqFormID;
}
const setFormsets = formsets => {
  FORMSETS = formsets;
};
function setMauticForms(formsets) {
  try {
    setFormsets(formsets);
    let formset = getFormset(_tracker__WEBPACK_IMPORTED_MODULE_5__/* .utmCampaign */ .S8, formsets);
    if (formset) {
      [progressiveFormName, progressiveFormID] = formset;
      setForm(progressiveFormName, progressiveFormID);
      addMauticFormHooksOnSubmitAndOnResponse(progressiveFormName);
    }
  } catch (err) {
    console.log(err);
  }
}
function enableEmbeddedFormForKnownContacts(formSlotRef) {
  embeddedFormForKnownContacts = true;
  embeddedFormSlotRef = formSlotRef;
}
function submitOauthNameAndEmail(oEmail, oName, oSource) {
  if (oEmail) {
    let email = globalThis?.document?.getElementById("mauticform_input_" + formName + "_f_email");
    let fullname = globalThis?.document?.getElementById("mauticform_input_" + formName + "_fullname");
    let alias = globalThis?.document?.getElementById("mauticform_input_" + formName + "_alias");
    let submit = globalThis?.document?.getElementById("mauticform_input_" + formName + "_submit");
    let oauthName = globalThis?.document?.getElementById("mauticform_input_" + formName + "_oauth_name");
    let oauthEmail = globalThis?.document?.getElementById("mauticform_input_" + formName + "_oauth_email");
    let oauthSource = globalThis?.document?.getElementById("mauticform_input_" + formName + "_oauth_source");
    let ev = globalThis?.document?.getElementById("mauticform_input_" + formName + "_ev");
    if (email) {
      email.value = oEmail;
      if (fullname) {
        fullname.value = oName;
      }
      alias.value = oName;
      oauthName.value = oName;
      oauthEmail.value = oEmail;
      oauthSource.value = oSource;
      ev.value = true;
      sessionStorage.setItem("g-signin", "yes");
      submit.click();
    } else {
      let lpTag = _branded__WEBPACK_IMPORTED_MODULE_0__/* .currentPageName */ .K;
      let pageTitle = "Google-SignIn or Google-OneTap";
      mt("send", "pageview", {
        page_title: pageTitle,
        tags: lpTag,
        email: oEmail,
        firstname: oName,
        alias: oName,
        oauth_email: oEmail,
        oauth_name: oName,
        oauth_source: oSource,
        ev: true,
        email_submitted: "yes"
      }, {
        onload: function () {
          window.location.reload();
        },
        onerror: function () {
          (0,_logger__WEBPACK_IMPORTED_MODULE_4__/* .logError */ .H)(MT_ERROR);
        }
      });
    }
  }
}
function addValidationToFields() {
  let emailFields = ["email", "f_email", "friend_email"];
  let phoneFields = ["phone", "f_phone", "friend_phone"];
  emailFields.forEach(function (fieldName) {
    let email = globalThis?.document?.getElementById("mauticform_input_" + formName + "_" + fieldName);
    if (email) {
      (0,_utility__WEBPACK_IMPORTED_MODULE_7__/* .validateField */ .OP)(email);
    }
  });
  phoneFields.forEach(function (fieldName) {
    let phone = globalThis?.document?.getElementById("mauticform_input_" + formName + "_" + fieldName);
    if (phone) {
      (0,_utility__WEBPACK_IMPORTED_MODULE_7__/* .addPhoneValidation */ .o2)(phone);
      (0,_utility__WEBPACK_IMPORTED_MODULE_7__/* .validateField */ .OP)(phone);
    }
  });
}
function getDefaultFormsetOfThePage(formsets) {
  let formset;
  if (formsets) {
    formset = formsets["defaultFormset"];
  }
  return formset;
}
function getFormset(utmCampaign, formsets) {
  let formset = getFormset_UTM(utmCampaign, formsets);
  formset = formset ? formset : getDefaultFormsetOfThePage(formsets);
  return formset;
}
function getFormset_UTM(utmCampaign, formsets) {
  let formset;
  if (utmCampaign && formsets) {
    formset = formsets["cf:" + utmCampaign];
  }
  return formset;
}
function resetMauticSDK() {
  let head = globalThis?.document?.getElementsByTagName("head")[0];
  let sts = head.getElementsByTagName("script");
  if (sts.length > 0) {
    let src;
    for (let i = 0; i < sts.length; ++i) {
      src = sts[i].getAttribute("src");
      if (src && src.includes("mautic-form.js") || src == undefined && sts[i].innerHTML.includes("This section is only needed once per page")) {
        head.removeChild(sts[i]);
        --i;
      }
    }
    MauticSDKLoaded = undefined;
    MauticSDK = undefined;
  }
}

// Variable to update the alias after the googleSignIn

function setAlias(newValue) {
  alias = newValue;
}
function createFormHeader() {
  let alias = globalThis?.document?.getElementById("mauticform_input_" + formName + "_alias");
  let emailVerified = globalThis?.document?.getElementById("mauticform_input_" + formName + "_ev");
  if (formName == progressiveFormName) {
    let email = globalThis?.document?.getElementById("mauticform_input_" + formName + "_f_email");
    let phone = globalThis?.document?.getElementById("mauticform_input_" + formName + "_f_phone");
    formHeader = email != undefined ? emailFormHeader : phone != undefined ? phoneFormHeader : noFormHeader != undefined ? noFormHeader : referralFormHeader != undefined ? referralFormHeader : "";
  }
  if (alias) {
    alias = alias.value;
    if (alias && emailVerified.value == "true") {
      setAlias(alias);
    }
  }
}
function setOauthLoginRequired() {
  let ret = false;
  if (sessionStorage.getItem("g-signin") != "yes") {
    let emailVerified = globalThis?.document?.getElementById("mauticform_input_" + formName + "_ev");
    if (emailVerified && emailVerified.value != "true") {
      ret = true;
    }
  }
  oauthLoginRequired = ret;
}
function isCampaignValid() {
  let campaignValid;
  let formsetName = getFormset_UTM(_tracker__WEBPACK_IMPORTED_MODULE_5__/* .utmCampaign */ .S8, FORMSETS);
  campaignValid = formsetName ? true : false;
  return campaignValid;
}
function enablePopupForm(x, y, z, cv) {
  popupForm = true;
  if (x != undefined && Number.isInteger(x) && y != undefined && Number.isInteger(y) && z != undefined && Number.isInteger(z)) {
    timeInterval = x;
    nTimes = y;
    zDuration = z;
  } else {
    timeInterval = _configs_global_json__WEBPACK_IMPORTED_MODULE_8__/* ["POPUP_FORM-TIME_INTERVAL"] */ .yH;
    nTimes = _configs_global_json__WEBPACK_IMPORTED_MODULE_8__/* ["POPUP_FORM-N_TIMES"] */ .MG;
    zDuration = _configs_global_json__WEBPACK_IMPORTED_MODULE_8__/* ["POPUP_FORM-Z_DURATION"] */ .w4;
  }
  if (cv == true) {
    controlVideos = true;
  }
}
const getLocalStorageLpModalCloseClickCount = () => {
  let pageID = (0,_branded__WEBPACK_IMPORTED_MODULE_0__/* .getPageID */ .e)();
  let count;
  let submitFlag = globalThis?.localStorage?.getItem(pageID + "-sf") == undefined ? 0 : Number(localStorage.getItem(pageID + "-sf"));
  if (submitFlag == 1) {
    count = 0;
  } else {
    count = globalThis?.localStorage?.getItem(pageID + "-count") == undefined ? 0 : Number(localStorage.getItem(pageID + "-count"));
  }
  return count;
};
const setLocalStorageLpModalCloseClickCount = count => {
  let pageID = (0,_branded__WEBPACK_IMPORTED_MODULE_0__/* .getPageID */ .e)();
  localStorage.setItem(pageID + "-count", count.toString());
};
const showPopupForm = duration => {
  let x = duration ? duration : timeInterval;
  const timer = setInterval(() => {
    if (lpModalRef.current) {
      let body = document.getElementsByTagName("body")[0];
      lpModalRef.current.style.display = "block";
      body.style.overflow = "hidden";
    }
    if (controlVideos) (0,_ytvideo__WEBPACK_IMPORTED_MODULE_9__/* .pauseVideosIfPlaying */ .Dh)();
    clearInterval(timer);
  }, x);
};
function setEmailSubmitted() {
  let emailSubmitted = document.getElementById("mauticform_input_" + formName + "_email_submitted");
  let emailVerified = document.getElementById("mauticform_input_" + formName + "_ev");
  if (emailSubmitted && emailVerified) {
    if (emailSubmitted.value == "yes" || emailVerified.value == "true") {
      isEmailSubmitted = true;
    }
  }
}

/***/ }),

/***/ 3636:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wc: function() { return /* binding */ getReadMoreFlag; },
/* harmony export */   cJ: function() { return /* binding */ setReadMoreFlag; },
/* harmony export */   jp: function() { return /* binding */ getReadMoreButtonState; }
/* harmony export */ });
/* harmony import */ var _mauticForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2549);
/* harmony import */ var _branded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9602);


const getReadMoreFlag = () => {
  return globalThis?.localStorage?.getItem(_branded__WEBPACK_IMPORTED_MODULE_1__/* .currentPageName */ .K + "-readMore");
};
const setReadMoreFlag = () => {
  let pageName = _branded__WEBPACK_IMPORTED_MODULE_1__/* .currentPageName */ .K.split(".")[0];
  let readMoreFlag = localStorage.getItem(pageName + "-readMore");
  if (readMoreFlag == "yes") {
    return;
  } else {
    localStorage.setItem(pageName + "-readMore", "yes");
  }
};
const getReadMoreButtonState = () => {
  let ret = true;
  if ((0,_mauticForm__WEBPACK_IMPORTED_MODULE_0__/* .getMtSendUpdateFlag */ .WS)() || getReadMoreFlag() == "yes") {
    ret = false;
  }
  return ret;
};

/***/ }),

/***/ 8115:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S8: function() { return /* binding */ utmCampaign; },
/* harmony export */   WA: function() { return /* binding */ utmContent; },
/* harmony export */   _b: function() { return /* binding */ pCode; },
/* harmony export */   ap: function() { return /* binding */ utmTerm; },
/* harmony export */   i3: function() { return /* binding */ mauticSrc; },
/* harmony export */   ls: function() { return /* binding */ getUserIDFromCookie; },
/* harmony export */   pi: function() { return /* binding */ utmMedium; },
/* harmony export */   z6: function() { return /* binding */ utmSource; }
/* harmony export */ });
/* unused harmony export pageTitle */
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(786);
/* harmony import */ var _configs_global_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4052);
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5657);
/* harmony import */ var _messages_errorMessage_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2153);





// Query Parameters
let utmSource;
let utmMedium;
let utmCampaign;
let utmContent;
let utmTerm;
let pageTitle;
let pCode;
let mauticSrc = "";
let lp_CTA_Link_Domain = "";
let cs;

// Converted this into globalVariable because gtm is using this config
if (true) {
  window.USERID_PREFIX_CONFIG = _configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* .USERID_PREFIX_CONFIG */ .iq;
}
globalThis?.window?.addEventListener("load", () => {
  trackParametersOnPageLoad();
});
setLpCTALinkDomain();
setMauticSrc();
extractTrackingParameters();
function setMauticSrc() {
  if (true) {
    if (_configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* .MAUTIC_SRC */ .de) {
      let hostname = globalThis?.window?.location.hostname;
      mauticSrc = _configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* .MAUTIC_SRC */ .de[hostname];
      window.mauticSrc = mauticSrc;
      if (!mauticSrc) {
        (0,_logger_js__WEBPACK_IMPORTED_MODULE_0__/* .logError */ .H)("mauticSrc is not defined for this Domain");
      }
    } else {
      (0,_logger_js__WEBPACK_IMPORTED_MODULE_0__/* .logError */ .H)("MAUTIC_SRC is not defined");
    }
  }
}
function extractTrackingParameters() {
  if (true) {
    let params = (0,_utility_js__WEBPACK_IMPORTED_MODULE_2__/* .getSearchParams */ .Qw)(globalThis?.window?.location.href);
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
    mt("send", "pageview", {
      page_title: pageTitle,
      pcode: pCode,
      tags: cs
    }, {
      onerror: function () {
        (0,_logger_js__WEBPACK_IMPORTED_MODULE_0__/* .logError */ .H)(_messages_errorMessage_json__WEBPACK_IMPORTED_MODULE_3__/* .MT_ERROR */ .W);
      }
    });
  } else {
    mt("send", "pageview", {
      page_title: pageTitle,
      tags: cs
    }, {
      onerror: function () {
        (0,_logger_js__WEBPACK_IMPORTED_MODULE_0__/* .logError */ .H)(_messages_errorMessage_json__WEBPACK_IMPORTED_MODULE_3__/* .MT_ERROR */ .W);
      }
    });
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
function getUserIDFromCookie() {
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
  if (m_uid && mauticSrc && _configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* .USERID_PREFIX_CONFIG */ .iq) {
    let url = new URL(mauticSrc);
    let hostname = url.hostname;
    let prefix = _configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* .USERID_PREFIX_CONFIG */ .iq[hostname];
    m_uid = prefix ? prefix + "-" + m_uid : m_uid;
  }
  return m_uid;
}
function setLpCTALinkDomain() {
  if (true) {
    if (_configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* .LP_CTA_LINK_DOMAIN_CONFIG */ .RO) {
      let hostname = globalThis?.window?.location.hostname;
      lp_CTA_Link_Domain = _configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* .LP_CTA_LINK_DOMAIN_CONFIG */ .RO[hostname];
      if (!lp_CTA_Link_Domain) {
        (0,_logger_js__WEBPACK_IMPORTED_MODULE_0__/* .logError */ .H)("lp_CTA_Link_Domain is not defined for this Domain");
      }
    } else {
      (0,_logger_js__WEBPACK_IMPORTED_MODULE_0__/* .logError */ .H)("LP_CTA_LINK_DOMAIN_CONFIG is not defined");
    }
  }
}
(function (w, d, t, u, n, a, m) {
  if (typeof w === "undefined" || typeof d === "undefined") {
    console.error("window or document is not defined");
    return;
  }
  w["MauticTrackingObject"] = n;
  w[n] = w[n] || function () {
    (w[n].q = w[n].q || []).push(arguments);
  };
  a = d.createElement(t);
  m = d.getElementsByTagName(t)[0];
  a.async = 1;
  a.src = u;
  m.parentNode.insertBefore(a, m);
})( true ? window : 0, typeof document !== "undefined" ? document : undefined, "script", mauticSrc + "/mtc.js", "mt");

/***/ }),

/***/ 5657:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o2: function() { return /* binding */ addPhoneValidation; },
  ce: function() { return /* binding */ getQueryParameter; },
  Qw: function() { return /* binding */ getSearchParams; },
  v4: function() { return /* binding */ isInViewport; },
  OP: function() { return /* binding */ validateField; }
});

;// CONCATENATED MODULE: ./configs/areacodes.json
var areacodes_namespaceObject = /*#__PURE__*/JSON.parse('[1201,1202,1203,1205,1206,1207,1208,1209,1210,1212,1213,1214,1215,1216,1217,1218,1219,1224,1225,1228,1229,1231,1234,1239,1240,1248,1251,1252,1253,1254,1256,1260,1262,1267,1269,1270,1276,1278,1281,1301,1302,1303,1304,1305,1307,1308,1309,1310,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1323,1325,1330,1331,1334,1336,1337,1339,1346,1347,1351,1352,1360,1361,1364,1385,1386,1401,1402,1404,1405,1406,1407,1408,1409,1410,1412,1413,1414,1415,1417,1419,1423,1424,1425,1430,1432,1434,1435,1440,1442,1443,1447,1458,1464,1469,1470,1475,1478,1479,1480,1484,1500,1501,1502,1503,1504,1505,1507,1508,1509,1510,1512,1513,1515,1516,1517,1518,1520,1530,1531,1534,1539,1540,1541,1551,1557,1559,1561,1562,1563,1567,1570,1571,1573,1574,1575,1580,1585,1586,1601,1602,1603,1605,1606,1607,1608,1609,1610,1612,1614,1615,1616,1617,1618,1619,1620,1623,1626,1630,1631,1636,1641,1646,1650,1651,1657,1660,1661,1662,1667,1669,1678,1681,1682,1701,1702,1703,1704,1706,1707,1708,1712,1713,1714,1715,1716,1717,1718,1719,1720,1724,1725,1727,1730,1731,1732,1734,1740,1747,1752,1754,1757,1760,1762,1763,1765,1769,1770,1772,1773,1774,1775,1779,1781,1785,1786,1801,1802,1803,1804,1805,1806,1808,1810,1812,1813,1814,1815,1816,1817,1818,1830,1831,1832,1835,1843,1845,1847,1848,1849,1850,1856,1857,1858,1859,1860,1862,1863,1864,1865,1870,1872,1878,1901,1903,1904,1906,1907,1908,1909,1910,1912,1913,1914,1915,1916,1917,1918,1919,1920,1925,1927,1928,1929,1930,1931,1936,1937,1938,1940,1941,1947,1949,1951,1952,1954,1956,1959,1970,1971,1972,1973,1978,1979,1980,1984,1985,1989]');
;// CONCATENATED MODULE: ./modules/utility.js

let areaCodeRegex = new RegExp(areacodes_namespaceObject.join("|"));
if (true) {
  window.getQueryParameter = getQueryParameter;
}
function addPhoneValidation(phone) {
  phone.addEventListener("input", function (e) {
    var x = e.target.value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : x[1] + "-" + x[2] + (x[3] ? "-" + x[3] : "");
    let result = validateAreaCode(phone.value);
    if (!result) {
      phone.setCustomValidity("Please enter valid US phone number.");
    } else {
      phone.setCustomValidity("");
    }
  });
}
function validateField(field) {
  field.addEventListener("blur", function (e) {
    field.reportValidity();
  });
}
function validateAreaCode(phoneNumber) {
  let ret = false;
  if (phoneNumber && phoneNumber != "" && phoneNumber.includes("-") && areaCodeRegex != "") {
    let val = phoneNumber.split("-")[0];
    if (areaCodeRegex.test("1" + val)) {
      ret = true;
    }
  }
  return ret;
}
function getSearchParams(url_string) {
  var params2 = {};
  try {
    var url = new URL(url_string);
    var search = url.search;
    search.substr(1).split("&").forEach(function (pair) {
      var keyValues = pair.split("=");
      params2[keyValues[0]] = keyValues[1];
    });
  } catch (e) {
    console.log(e);
  }
  return params2;
}
function getQueryParameter(name) {
  var value;
  try {
    value = getSearchParams(window.location.href)[name];
  } catch (err) {
    console.log(err);
  }
  return value;
}
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  let bottom = rect.bottom;
  return bottom > 0;
}

/***/ }),

/***/ 1165:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dh: function() { return /* binding */ pauseVideosIfPlaying; },
/* harmony export */   Hj: function() { return /* binding */ loadYTIframePlayerAPI; },
/* harmony export */   TT: function() { return /* binding */ handlePlaySoundButtonClick; },
/* harmony export */   _e: function() { return /* binding */ getYTBackgroundVideoUrl; },
/* harmony export */   fO: function() { return /* binding */ setBackgroundVideoElementReferences; },
/* harmony export */   y2: function() { return /* binding */ playVideosIfPaused; }
/* harmony export */ });
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(786);

let player;
let player2;
let pausedByCode = false;
let pausedByUser = false;
let playedByCode = false;
let playedByUser = false;
let pausedByForm = false;
let bgVideoElement;
let emVideoElement;
let video1Element;
let video2Element;
let playSoundElement;
let bgVideoStart = 0;
let updateBgVideoActionButtonLabel;
function setBackgroundVideoElementReferences(bgVideoRef, video1Ref, playSoundRef, setVideoActionButtonLabel) {
  bgVideoElement = bgVideoRef;
  video1Element = video1Ref;
  playSoundElement = playSoundRef;
  updateBgVideoActionButtonLabel = setVideoActionButtonLabel;
}
function setEmbeddedVideoElementReferences(emVideoRef, video2Ref) {
  emVideoElement = emVideoRef;
  video2Element = video2Ref;
}
if (true) {
  window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
}
function onYouTubeIframeAPIReady() {
  if (bgVideoElement && isVisible(bgVideoElement)) {
    player = new YT.Player(video1Element.current.id, {
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
        onError: onPlayerError
      }
    });
  }
  if (emVideoElement && isVisible(emVideoElement)) {
    player2 = new YT.Player(video2Element.current.id, {
      events: {
        onStateChange: onPlayer2StateChange,
        onError: onPlayerError
      }
    });
  }
  window.onscroll = playVisibleVideos;
}
function onPlayerError(event) {
  let errMsg = "yt_video_load_error: " + event.data;
  if (sessionStorage.getItem(errMsg) != "yes") {
    sessionStorage.setItem(errMsg, "yes");
    (0,_logger_js__WEBPACK_IMPORTED_MODULE_0__/* .logError */ .H)("Youtube Player Error: " + event.data);
    location.reload();
  }
}
function onPlayer2StateChange(event) {
  let playerStatus = event.data;
  if (playerStatus == 2 && !pausedByCode) {
    setVideoStateVariables(false, true, false, false);
  } else if (playerStatus == 1 && !playedByCode) {
    setVideoStateVariables(true, false, false, false);
  }
}
function setVideoStateVariables(userPlay, userPause, codePlay, codePause) {
  pausedByCode = codePause;
  pausedByUser = userPause;
  playedByCode = codePlay;
  playedByUser = userPlay;
}
function onPlayerReady(event) {
  //player.playVideo();
}
function onPlayerStateChange(event) {
  let playerStatus = event.data;
  if (playerStatus == -1) {
    console.log("unstarted");
  } else if (playerStatus == 0) {
    console.log("ended");
    //player.seekTo(bgVideoStart);
    //player.pauseVideo();
    //playSoundElement.current.innerHTML = "Play Video";
    player.stopVideo();
    updateBgVideoActionButtonLabel("Play Video");
    video1Element.current.style.pointerEvents = "auto";
  } else if (playerStatus == 1) {
    console.log("playing");
    //playSoundElement.current.innerHTML = "Pause Video";
    video1Element.current.style.pointerEvents = "none";
    updateBgVideoActionButtonLabel("Pause Video");
  } else if (playerStatus == 2) {
    console.log("paused");
  } else if (playerStatus == 3) {
    console.log("buffering");
  } else if (playerStatus == 5) {
    console.log("video cued");
  }
}
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  let contentHeight = document.documentElement.clientHeight;
  let top = rect.top;
  let bottom = rect.bottom;
  let topVisible = top >= 75 && top < contentHeight;
  let bottomVisible = bottom < contentHeight && bottom > 80;
  let middleVisible = top < 75 && bottom > contentHeight;
  return topVisible || bottomVisible || middleVisible;
}
function playVideo(iframePlayer) {
  let state = iframePlayer.getPlayerState();
  if (state == 2) {
    iframePlayer.playVideo();
  }
}
function pauseVideo(iframePlayer) {
  let state = iframePlayer.getPlayerState();
  if (state != 2) {
    iframePlayer.pauseVideo();
  }
}
function isVisible(sectionID) {
  let ret = false;
  let element = sectionID.current;
  if (element) {
    let display = element.style.display;
    if (display != "none") {
      ret = true;
    }
  }
  return ret;
}
function playVisibleVideos() {
  if (bgVideoElement && isVisible(bgVideoElement)) {
    if (isInViewport(video1Element.current)) {
      let action = playSoundElement.current.innerHTML;
      if (action != "Play Video") {
        playVideo(player);
      }
    } else {
      pauseVideo(player);
    }
  }
  if (emVideoElement && isVisible(emVideoElement)) {
    if (isInViewport(video2Element.current)) {
      if (pausedByCode) {
        setVideoStateVariables(false, false, true, false);
        playVideo(player2);
      }
    } else {
      if (playedByCode || playedByUser) {
        setVideoStateVariables(false, false, false, true);
        pauseVideo(player2);
      }
    }
  }
}
const getYTBackgroundVideoUrl = video => {
  let {
    videoID,
    videoStart,
    videoEnd,
    cc_load_policy
  } = video;
  if (videoID) {
    let videoURL = "https://www.youtube.com/embed/" + videoID + "?cc_load_policy=1&controls=0&showinfo=0&disablekb=1&modestbranding=1&rel=0&autoplay=0&mute=0&playsinline=1&enablejsapi=1";
    if (videoStart) {
      videoURL += "&start=" + videoStart;
      bgVideoStart = videoStart;
    }
    if (videoEnd) {
      videoURL += "&end=" + videoEnd;
    }
    if (cc_load_policy === 0) {
      videoURL = videoURL.replace("cc_load_policy=1", "cc_load_policy=0");
    }
    let origin = `&origin=https%3A%2F%2F${globalThis?.window?.location.hostname}`;
    return videoURL + origin;
  }
};
const handlePlaySoundButtonClick = playerAction => {
  let ret = "";
  if (player.isMuted()) {
    playBGVideoFromBeginning();
    ret = "Pause Video";
  } else {
    if (playerAction == "Play Video") {
      let state = player.getPlayerState();
      if (state == 0) {
        playBGVideoFromBeginning();
        ret = "Pause Video";
      } else {
        resumeBGVideo();
        ret = "Pause Video";
      }
    } else if (playerAction == "Pause Video") {
      player.pauseVideo();
      ret = "Play Video";
    }
  }
  return ret;
};
function playBGVideoFromBeginning() {
  player.seekTo(bgVideoStart);
  player.unMute();
}
function resumeBGVideo() {
  player.playVideo();
}
const getYTEmbeddedVideoUrl = embeddedVideoID => {
  if (embeddedVideoID && embeddedVideoID != "") {
    const videoURL = "https://www.youtube.com/embed/" + embeddedVideoID + "?rel=0&controls=1&autoplay=0&cc_load_policy=1&modestbranding=1&showinfo=0&playsinline=1&enablejsapi=1" + "&origin=" + globalThis?.window?.location.hostname;
    return videoURL;
  }
};
function loadYTIframePlayerAPI() {
  var tag = document.createElement("script");
  tag.id = "iframe-yt";
  tag.src = "https://www.youtube.com/iframe_api";
  tag.onerror = function () {
    (0,_logger_js__WEBPACK_IMPORTED_MODULE_0__/* .logResourceLoadError */ .h)(this);
  };
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
function playVideosIfPaused() {
  if (player && isInViewport(video1Element.current)) {
    playVideo(player);
  }
  if (player2 && isInViewport(video2Element.current) && pausedByForm) {
    playVideo(player2);
    pausedByForm = false;
  }
}
function pauseVideosIfPlaying() {
  if (player && isInViewport(video1Element.current)) {
    pauseVideo(player);
  }
  if (player2 && isInViewport(video2Element.current)) {
    let state = player2.getPlayerState();
    if (state != 2) {
      player2.pauseVideo();
      pausedByForm = true;
    }
  }
}

/***/ }),

/***/ 7661:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_gtm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8684);



function MyApp({
  Component,
  pageProps
}) {
  // To load GTM script for all the pages
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_modules_gtm__WEBPACK_IMPORTED_MODULE_1__/* .loadGTMScript */ .gC)();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, pageProps));
}
MyApp.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 1118:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(7661);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 2703:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(414);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 5697:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(2703)();
}


/***/ }),

/***/ 414:
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 4052:
/***/ (function(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"cL":"925-452-7483","jT":"support@ReachPersona.com","GU":"/images/sw/banners/new/default_banner.jpg","RV":"images/rp/ReachPersona-LOGO.-V3psd.png","ex":"/images/sw/banners/new/","QA":"","KT":"","hr":"_ _ _ _ _ _ _ _ _ _ _ _ OR _ _ _ _ _ _ _ _ _ _ _ _","i0":"Submit the form below:","dc":"Welcome","vZ":"Review Email. Best number to reach you?","mM":"Get this FREE report now:","yH":3000,"MG":3,"w4":5000,"jE":"We hope you found this Useful. To unsubscribe,","_p":"Click here","IU":"Please introduce yourself by submitting the form given below inorder to Unsubscribe","WK":"You have unsubscribed to this mailing. To re-subscribe,","c2":"Click here","XI":"You have been Resubscribed to this mailing","Wd":"postcard_cp","k8":["pffeedback","208"],"Zx":"Please submit to Unsubscribe from this mailing","ou":"Call","m8":"819755038455-07s13rbrbq92u2hoa07mutpfk8hrtrb9.apps.googleusercontent.com","Cz":{"www.reachpersona.com":"GTM-WQKQHT2"},"de":{"blue.reachpersona.com":"https://leads-blue.reachpersona.com","www.reachpersona.com":"https://my.reachpersona.com"},"iq":{"my.reachpersona.com":"TC"},"RO":{},"bQ":{"p":{"www.reachpersona.com":"Production-ReachPersona"},"J":"3a9451ec1ecb4f85876a84204843e1fe"}}');

/***/ }),

/***/ 2153:
/***/ (function(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"W":"Error invoking mt method","J":"Rollbar is not available to configure Person"}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [774,179], function() { return __webpack_exec__(1118), __webpack_exec__(1171); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);