import { addMauticFormHookForFeedbackForm, formName, setCurrentUrl, setMauticFormFields, updateFormActionAttribute } from "./mauticForm";
import { logError, logResourceLoadError } from "./logger";
import globalConfig from "../configs/global.json";
import { mauticSrc } from "./tracker";
import errorMessageConfig from "../messages/errorMessage.json";
import { currentPageName } from "./branded";

let unsubscribeAnonymousUserMessage;
let resubscribeSuccessMessage;
const FEEDBACK_FORMSET = globalConfig.FEEDBACK_FORMSET;
let feedbackFormName;
let feedbackFormID;
let unsubscribeCollateral = "";
let feedbackModalRef;

export const setFeedbackModalRef = (ref) => {
  feedbackModalRef = ref;
};

export const setUnsubscribeAnonymousUserMessage = (unsubscribeAnonymousUserMessageValue) => {
  unsubscribeAnonymousUserMessage = unsubscribeAnonymousUserMessageValue ? unsubscribeAnonymousUserMessageValue : globalConfig.UNSUBSCRIBE_ANONYMOUS_USER_MESSAGE;
};

export const setResubscribeSuccessMessage = (resubscribeSuccessMessageValue) => {
  resubscribeSuccessMessage = resubscribeSuccessMessageValue ? resubscribeSuccessMessageValue : globalConfig.RESUBSCRIBE_SUCCESS_MESSAGE;
};

export async function onFeedbackFormSubmitEvent() {
  let pageTitle = "Unsubscribed from " + unsubscribeCollateral;
  return new Promise((resolve, reject) => {
    mt(
      "send",
      "pageview",
      {
        page_title: pageTitle,
        tags: "unsubscribe-" + unsubscribeCollateral.toLowerCase() + ",-resubscribe-" + unsubscribeCollateral.toLowerCase(),
      },
      {
        onerror: function () {
          logError(errorMessageConfig.MT_ERROR);
          reject(false);
        },
        onload: function () {
          resolve(true);
        },
      }
    );
  });
}

function loadFeedbackForm(feedbackFormSlotRef) {
  if (feedbackFormSlotRef.current) {
    let src = mauticSrc + "/form/generate.js?id=" + feedbackFormID;
    let script = document.createElement("script");
    script.setAttribute("src", src);
    script.addEventListener("load", function () {
      setMauticFormFields(feedbackFormName);
      displayFeedbackForm();
      setCurrentUrl(feedbackFormName);
      updateFormActionAttribute(feedbackFormName);
    });
    script.onerror = function () {
      logResourceLoadError(this);
    };
    feedbackFormSlotRef.current.appendChild(script);
  } else {
    logError("feedbackFormSlot is not defined");
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

export function hideFeedbackForm() {
  let body = document.getElementsByTagName("body")[0];
  if (feedbackModalRef) {
    feedbackModalRef.current.style.display = "none";
    body.style.overflow = "auto";
  }
}

export function userHasUnsubscribed() {
  let ret = false;
  let unsubscribed = globalThis?.sessionStorage?.getItem("unsubscribed-" + currentPageName);
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

export function unsubscribe(e, feedbackFormSlotRef) {
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
  let alias = document.getElementById("mauticform_input_" + formName + "_alias");
  if (alias && !alias.value) {
    ret = true;
  }
  return ret;
}

export async function resubscribe(e) {
  e.preventDefault();
  let resubscribed = await new Promise((resolve, reject) => {
    let pageTitle = "Re-Subscribed to " + unsubscribeCollateral;
    mt(
      "send",
      "pageview",
      {
        page_title: pageTitle,
        tags: "-unsubscribe-" + unsubscribeCollateral.toLowerCase() + ",resubscribe-" + unsubscribeCollateral.toLowerCase(),
      },
      {
        onerror: function () {
          logError(errorMessageConfig.MT_ERROR);
          reject(false);
        },
        onload: function () {
          resolve(true);
        },
      }
    );
  });

  if (resubscribed) {
    sessionStorage.removeItem("unsubscribed-" + currentPageName);
    alert(resubscribeSuccessMessage);
  }
  return resubscribed;
}

export function enableUnsubscribe(usCollateral) {
  if (usCollateral) {
    unsubscribeCollateral = usCollateral;
    setFeedbackForm();
  }
}

function setFeedbackForm() {
  if (FEEDBACK_FORMSET) {
    [feedbackFormName, feedbackFormID] = FEEDBACK_FORMSET;
    addMauticFormHookForFeedbackForm(feedbackFormName);
  } else {
    logError("Feedback form is not configured");
  }
}
