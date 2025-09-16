import { currentPageName, getPageID } from "./branded";
import { onFeedbackFormSubmitEvent } from "./feedbackForm";
import {
  initGoogleIdentityService,
  initGoogleSignIn,
  initOneTapSignIn,
} from "./googleOauth";
import { gtmContainerID, sendGTMEvents } from "./gtm";
import { logError, logResourceLoadError } from "./logger";
import {
  mauticSrc,
  pCode,
  utmCampaign,
  utmContent,
  utmMedium,
  utmSource,
  utmTerm,
} from "./tracker";
import errorMessageConfig from "../messages/errorMessage.json";
import { addPhoneValidation, validateField } from "./utility";
import globalConfig from "../configs/global.json";
import { pauseVideosIfPlaying } from "./ytvideo";
import { getReadMoreFlag } from "./report";
import {getQueryParameter} from "./utility";

let FORMSETS;
let emailFormHeader;
let phoneFormHeader;
let noFormHeader;
export let formName;
export let progressiveFormName;
export let displayDivider1 = false;
export let alias = null;
export let formHeader = "";
export let oauthLoginRequired = true;
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

if (typeof window !== "undefined" && typeof MauticFormCallback == "undefined") {
  window.MauticFormCallback = {};
}

export const setReportPageName = (reportName) => {
  reportPageName = reportName;
};

export const getMtSendUpdateFlag = () => {
  return globalThis?.sessionStorage?.getItem("mtSendUpdate");
};

export const setLpModalRef = (ref) => {
  lpModalRef = ref;
};

export const setLpModalCloseRef = (ref) => {
  lpModalCloseRef = ref;
};

export const setLpModalContentRef = (ref) => {
  lpModalContentRef = ref;
};

export const getNTimes = () => {
  return nTimes;
};

export const getEmailSubmitted = async () => {
  return new Promise((resolve) => {
    let formLoadedTimeInterval = setInterval(() => {
      if (isFormLoaded()) {
        clearInterval(formLoadedTimeInterval);
        resolve(isEmailSubmitted);
      }
    }, 500);
  });
};

export const setFormHeaders = (emailFormHeaderValue, phoneFormHeaderValue, noFormHeaderValue) => {
  emailFormHeader = emailFormHeaderValue
    ? emailFormHeaderValue
    : globalConfig["FORM_HEADER-EMAIL_FORM_HEADER"];
  phoneFormHeader = phoneFormHeaderValue
    ? phoneFormHeaderValue
    : globalConfig["FORM_HEADER-PHONE_FORM_HEADER"];
  noFormHeader = noFormHeaderValue ? noFormHeaderValue : "";  
};

export const setReferralFormHeader = (referralFormHeaderValue) => {
  referralFormHeader = referralFormHeaderValue ? referralFormHeaderValue : "";
};

export const hidePopupForm = () => {
  if (lpModalRef.current) {
    let body = document.getElementsByTagName("body")[0];
    lpModalRef.current.style.display = "none";
    body.style.overflow = "auto";
  }
};

function setCurrentPage(formName) {
  let currentPage = globalThis?.document?.getElementById(
    "mauticform_input_" + formName + "_currentpage"
  );
  if (currentPage) {
    let pageID = getPageID();
    if (pageID) {
      currentPage.value =
        currentPageName == pageID
          ? currentPageName
          : currentPageName + "/?id=" + pageID;
    } else {
      currentPage.value = currentPageName;
    }
  }
}

export function setCurrentUrl(formName) {
  let rtn = globalThis?.document?.getElementById(
    "mauticform_" + formName + "_return"
  );
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
    let email = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_f_email"
    );
    let phone = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_f_phone"
    );
    let fullname = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_fullname"
    );
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
    },
  };
}

export function addMauticFormHookForFeedbackForm(fName) {
  MauticFormCallback[fName] = {
    onValidateEnd: async function (formValid) {
      if (formValid) {
        await onFeedbackFormSubmitEvent();
      }
    },
    onResponseEnd: function (response) {
      sessionStorage.setItem("unsubscribed-" + currentPageName, "yes");
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    },
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
  let lpTag = currentPageName;
  let pageID = getPageID();
  // store the update in session storage, which will be sent after form submission
  let mtSendUpdate;
  let formData = {};
  let pageTitle = "Form submitted on: " + lpTag;
  if (pCode != undefined) {
    mtSendUpdate = {
      page_title: pageTitle,
      pcode: pCode,
      tags: lpTag,
    };
  } else {
    mtSendUpdate = { page_title: pageTitle, tags: lpTag };
  }
  sessionStorage.mtSendUpdate = JSON.stringify(mtSendUpdate);
  // to update alias field
  let alias = document.getElementById(
    "mauticform_input_" + formName + "_alias"
  );
  let fullname = document.getElementById(
    "mauticform_input_" + formName + "_fullname"
  );

  if (fullname != undefined && alias != undefined) {
    alias.value = fullname.value;
    formData.fullname = fullname.value;
  }
  // set popup form submission flag for the page
  if (popupForm) {
    localStorage.setItem(pageID + "-sf", "1");
  }

  // to update email and phone submitted fields
  let femail = document.getElementById(
    "mauticform_input_" + formName + "_f_email"
  );
  let fphone = document.getElementById(
    "mauticform_input_" + formName + "_f_phone"
  );
  let email_submitted = document.getElementById(
    "mauticform_input_" + formName + "_email_submitted"
  );
  let phone_submitted = document.getElementById(
    "mauticform_input_" + formName + "_phone_submitted"
  );

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
  let report = globalThis?.document?.getElementById(
    "mauticform_input_" + formName + "_report"
  );
  if (report) {
    report.value = reportPageName;
  }
}

export function setMauticFormFields(formName) {
  let cUTMSourceField = globalThis?.document?.getElementById(
    "mauticform_input_" + formName + "_c_utm_source"
  );
  let cUTMMediumField = globalThis?.document?.getElementById(
    "mauticform_input_" + formName + "_c_utm_medium"
  );
  let cUTMCampaignField = globalThis?.document?.getElementById(
    "mauticform_input_" + formName + "_c_utm_campaign"
  );
  let cUTMTermField = globalThis?.document?.getElementById(
    "mauticform_input_" + formName + "_c_utm_term"
  );
  let cUTMContentField = globalThis?.document?.getElementById(
    "mauticform_input_" + formName + "_c_utm_content"
  );

  if (
    cUTMSourceField &&
    cUTMMediumField &&
    cUTMCampaignField &&
    cUTMTermField &&
    cUTMContentField
  ) {
    cUTMSourceField.value = utmSource;
    cUTMMediumField.value = utmMedium;
    cUTMCampaignField.value = utmCampaign;
    cUTMTermField.value = utmTerm;
    cUTMContentField.value = utmContent;
  }
  setCurrentPage(formName);
}

export function updateFormActionAttribute(formName) {
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
    let pageID = getPageID();
    let submitFlag =
      localStorage.getItem(pageID + "-sf") == undefined
        ? 0
        : Number(localStorage.getItem(pageID + "-sf"));
    let count =
      localStorage.getItem(pageID + "-count") == undefined
        ? 0
        : Number(localStorage.getItem(pageID + "-count"));

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

export async function loadForm(formSlotRef, readMore) {
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
          logError(errorMessageConfig.MT_ERROR);
          reject(errorMessageConfig.MT_ERROR);
        },
      });
    });
  } else {
    if (readMore) {
      let readMoreFlag = getReadMoreFlag();
      if (readMoreFlag !== "yes") {
        return;
      }
    }
    if (pCode) {
      await identifyUserAndLoadMauticForm();
    } else {
      await loadMauticForm();
    }
  }
}

async function loadMauticForm() {
  await new Promise((resolve, reject) => {
    let aside = mFormSlotRef.current;
    let src = mauticSrc + "/form/generate.js?id=" + formID;
    let script = globalThis?.document?.createElement("script");
    script.setAttribute("src", src);
    script.addEventListener("load", function () {
      formOnload();
      resolve();
    });
    script.onerror = function () {
      logResourceLoadError(this);
      reject("Error loading Mautic form resource");
    };
    if (aside) {
      aside.appendChild(script);
    }
  });
}

function setTraQRPlan(formName){
  let plan = getQueryParameter('plan');
  if((plan)&&(formName == 'pftraqr')){
    let planField = globalThis?.document?.getElementById("mauticform_input_" + formName + "_plan");
    if(planField){
      plan = plan.charAt(0).toUpperCase() + plan.slice(1).toLowerCase();
      planField.value = plan
    }
  }
}

function formOnload() {
  let form = globalThis?.document?.getElementById("mauticform_" + formName);
  let submit = globalThis?.document?.getElementById(
    "mauticform_input_" + formName + "_submit"
  );
  if (form != null && submit != null) {
    switchToEmbeddedFormForKnownContacts();
    setEmailSubmitted();

    if (gtmContainerID) {
      sendGTMEvents();
    }

    displayPopupForm();
    if (window.google) {
      setOauthLoginRequired();
      initGoogleIdentityService();
      initOneTapSignIn();
      initGoogleSignIn();
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
  if (pCode != undefined) {
    let pageTitle = "Known user visit: " + pCode;
    return new Promise((resolve, reject) => {
      mt(
        "send",
        "pageview",
        { page_title: pageTitle, pcode: pCode },
        {
          onload: async function () {
            await loadMauticForm();
            resolve();
          },
          onerror: function () {
            logError(errorMessageConfig.MT_ERROR);
            reject();
          },
        }
      );
    });
  } else {
    await loadMauticForm();
  }
}

function switchToEmbeddedFormForKnownContacts() {
  if (embeddedFormForKnownContacts) {
    let email = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_f_email"
    );
    let phone = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_f_phone"
    );
    let fullname = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_fullname"
    );

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

export const setFormsets = (formsets) => {
  FORMSETS = formsets;
};

export function setMauticForms(formsets) {
  try {
    setFormsets(formsets);
    let formset = getFormset(utmCampaign, formsets);
    if (formset) {
      [progressiveFormName, progressiveFormID] = formset;
      setForm(progressiveFormName, progressiveFormID);
      addMauticFormHooksOnSubmitAndOnResponse(progressiveFormName);
    }
  } catch (err) {
    console.log(err);
  }
}

export function enableEmbeddedFormForKnownContacts(formSlotRef) {
  embeddedFormForKnownContacts = true;
  embeddedFormSlotRef = formSlotRef;
}

export function submitOauthNameAndEmail(oEmail, oName, oSource) {
  if (oEmail) {
    let email = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_f_email"
    );
    let fullname = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_fullname"
    );
    let alias = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_alias"
    );
    let submit = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_submit"
    );
    let oauthName = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_oauth_name"
    );
    let oauthEmail = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_oauth_email"
    );
    let oauthSource = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_oauth_source"
    );
    let ev = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_ev"
    );
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
      let lpTag = currentPageName;
      let pageTitle = "Google-SignIn or Google-OneTap";
      mt(
        "send",
        "pageview",
        {
          page_title: pageTitle,
          tags: lpTag,
          email: oEmail,
          firstname: oName,
          alias: oName,
          oauth_email: oEmail,
          oauth_name: oName,
          oauth_source: oSource,
          ev: true,
          email_submitted: "yes",
        },
        {
          onload: function () {
            window.location.reload();
          },
          onerror: function () {
            logError(MT_ERROR);
          },
        }
      );
    }
  }
}

function addValidationToFields() {
  let emailFields = ["email", "f_email", "friend_email"];
  let phoneFields = ["phone", "f_phone", "friend_phone"];
  emailFields.forEach(function (fieldName) {
    let email = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_" + fieldName
    );
    if (email) {
      validateField(email);
    }
  });

  phoneFields.forEach(function (fieldName) {
    let phone = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_" + fieldName
    );
    if (phone) {
      addPhoneValidation(phone);
      validateField(phone);
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
      if (
        (src && src.includes("mautic-form.js")) ||
        (src == undefined &&
          sts[i].innerHTML.includes(
            "This section is only needed once per page"
          ))
      ) {
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
  let alias = globalThis?.document?.getElementById(
    "mauticform_input_" + formName + "_alias"
  );
  let emailVerified = globalThis?.document?.getElementById(
    "mauticform_input_" + formName + "_ev"
  );

  if (formName == progressiveFormName) {
    let email = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_f_email"
    );
    let phone = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_f_phone"
    );
    formHeader =
      email != undefined
        ? emailFormHeader
        : phone != undefined
          ? phoneFormHeader
          : noFormHeader != undefined
            ? noFormHeader
            : referralFormHeader != undefined
              ? referralFormHeader
              : "";
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
    let emailVerified = globalThis?.document?.getElementById(
      "mauticform_input_" + formName + "_ev"
    );
    if (emailVerified && emailVerified.value != "true") {
      ret = true;
    }
  }
  oauthLoginRequired = ret;
}

export function isCampaignValid() {
  let campaignValid;
  let formsetName = getFormset_UTM(utmCampaign, FORMSETS);
  campaignValid = formsetName ? true : false;
  return campaignValid;
}

export function enablePopupForm(x, y, z, cv) {
  popupForm = true;
  if (
    x != undefined &&
    Number.isInteger(x) &&
    y != undefined &&
    Number.isInteger(y) &&
    z != undefined &&
    Number.isInteger(z)
  ) {
    timeInterval = x;
    nTimes = y;
    zDuration = z;
  } else {
    timeInterval = globalConfig["POPUP_FORM-TIME_INTERVAL"];
    nTimes = globalConfig["POPUP_FORM-N_TIMES"];
    zDuration = globalConfig["POPUP_FORM-Z_DURATION"];
  }
  if (cv == true) {
    controlVideos = true;
  }
}

export const getLocalStorageLpModalCloseClickCount = () => {
  let pageID = getPageID();
  let count;
  let submitFlag =
    globalThis?.localStorage?.getItem(pageID + "-sf") == undefined
      ? 0
      : Number(localStorage.getItem(pageID + "-sf"));
  if (submitFlag == 1) {
    count = 0;
  } else {
    count =
      globalThis?.localStorage?.getItem(pageID + "-count") == undefined
        ? 0
        : Number(localStorage.getItem(pageID + "-count"));
  }
  return count;
};

export const setLocalStorageLpModalCloseClickCount = (count) => {
  let pageID = getPageID();
  localStorage.setItem(pageID + "-count", count.toString());
};

export const showPopupForm = (duration) => {
  let x = duration ? duration : timeInterval;
  const timer = setInterval(() => {
    if (lpModalRef.current) {
      let body = document.getElementsByTagName("body")[0];
      lpModalRef.current.style.display = "block";
      body.style.overflow = "hidden";
    }
    if (controlVideos) pauseVideosIfPlaying();
    clearInterval(timer);
  }, x);
};

function setEmailSubmitted() {
  let emailSubmitted = document.getElementById(
    "mauticform_input_" + formName + "_email_submitted"
  );
  let emailVerified = document.getElementById(
    "mauticform_input_" + formName + "_ev"
  );
  if (emailSubmitted && emailVerified) {
    if (emailSubmitted.value == "yes" || emailVerified.value == "true") {
      isEmailSubmitted = true;
    }
  }
}
