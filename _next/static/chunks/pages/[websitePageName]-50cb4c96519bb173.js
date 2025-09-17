(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[140],{

/***/ 1953:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __N_SSG: function() { return /* binding */ __N_SSG; },
  "default": function() { return /* binding */ _websitePageName_; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./components/templates/WebsitePage.jsx
var WebsitePage = __webpack_require__(8408);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./components/Banner.jsx
var Banner = __webpack_require__(5917);
// EXTERNAL MODULE: ./components/FooterComponent.jsx
var FooterComponent = __webpack_require__(3804);
// EXTERNAL MODULE: ./components/FormHeaderComponents/WelcomeMsg.jsx
var WelcomeMsg = __webpack_require__(658);
// EXTERNAL MODULE: ./components/FormHeaderComponents/FormHeader.jsx
var FormHeader = __webpack_require__(9283);
// EXTERNAL MODULE: ./components/FormHeaderComponents/GoogleSignInButton.jsx
var GoogleSignInButton = __webpack_require__(9676);
// EXTERNAL MODULE: ./components/FormHeaderComponents/Divider.jsx
var Divider = __webpack_require__(6611);
// EXTERNAL MODULE: ./configs/global.json
var global = __webpack_require__(4052);
// EXTERNAL MODULE: ./components/MauticForm.jsx
var MauticForm = __webpack_require__(7679);
// EXTERNAL MODULE: ./modules/ytvideo.js
var ytvideo = __webpack_require__(1165);
// EXTERNAL MODULE: ./modules/mauticForm.js
var modules_mauticForm = __webpack_require__(2549);
;// CONCATENATED MODULE: ./components/PopUpForm.jsx










const PopupForm = ({
  readMore,
  enableGoogleOneTap,
  mauticForm
}) => {
  const [formHeaderState, setFormHeaderState] = (0,react.useState)({
    alias: "",
    formHeader: "",
    displayDivider1: false,
    displayDivider2: false,
    displayGSIButton: true,
    displaySecondaryFormHeader: false
  });
  const [lpModalCloseClickCount, setLpModalCloseClickCount] = (0,react.useState)((0,modules_mauticForm/* getLocalStorageLpModalCloseClickCount */.Pn)());
  const lpModalContentRef = (0,react.useRef)(null);
  const lpModalRef = (0,react.useRef)(null);
  const lpModalCloseRef = (0,react.useRef)(null);
  const handleLpModalClose = async () => {
    if (lpModalCloseClickCount < (0,modules_mauticForm/* getNTimes */.fz)()) {
      (0,modules_mauticForm/* hidePopupForm */.fb)();
      let count = lpModalCloseClickCount + 1;
      (0,modules_mauticForm/* setLocalStorageLpModalCloseClickCount */.oV)(count);
      setLpModalCloseClickCount(count);
      if (mauticForm.controlVideos) {
        (0,ytvideo/* playVideosIfPaused */.y2)();
      }
      (0,modules_mauticForm/* showPopupForm */.W0)();
    }
  };
  (0,react.useEffect)(() => {
    (0,modules_mauticForm/* setLpModalRef */.YJ)(lpModalRef);
    (0,modules_mauticForm/* setLpModalContentRef */.mB)(lpModalContentRef);
    (0,modules_mauticForm/* setLpModalCloseRef */.JX)(lpModalCloseRef);
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement((head_default()), null, /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/components/PopUpForm.css",
    onError: e => logResourceLoadError(e.target)
  })), /*#__PURE__*/react.createElement("div", {
    id: "lpModal",
    ref: lpModalRef,
    className: "cmodal"
  }, /*#__PURE__*/react.createElement("div", {
    id: "lpModalContent",
    className: "cmodal-content",
    ref: lpModalContentRef
  }, /*#__PURE__*/react.createElement("span", {
    id: "lpModalClose",
    className: "close",
    onClick: handleLpModalClose,
    ref: lpModalCloseRef
  }, "x"), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(WelcomeMsg/* default */.Z, {
    alias: formHeaderState.alias
  }), /*#__PURE__*/react.createElement(FormHeader/* default */.Z, {
    displayFormHeader: formHeaderState.formHeader,
    formHeader: formHeaderState.formHeader,
    cssClassName: "formHeader"
  }), /*#__PURE__*/react.createElement(GoogleSignInButton/* default */.Z, {
    displayGSIButton: formHeaderState.displayGSIButton
  }), /*#__PURE__*/react.createElement(Divider/* default */.Z, {
    displayDivider: formHeaderState.displayDivider2
  }), /*#__PURE__*/react.createElement(FormHeader/* default */.Z, {
    displayFormHeader: formHeaderState.displaySecondaryFormHeader,
    formHeader: global/* FORM_HEADER-SECONDARY_FORM_HEADER */.i0,
    cssClassName: "secondaryFormHeader"
  })), /*#__PURE__*/react.createElement(MauticForm/* default */.Z, {
    formSlotIDRef: lpModalContentRef,
    readMore: readMore,
    setFormHeaderState: setFormHeaderState,
    popupForm: true,
    enableGoogleOneTap: enableGoogleOneTap,
    mauticForm: mauticForm
  }))));
};
/* harmony default export */ var PopUpForm = (PopupForm);
// EXTERNAL MODULE: ./modules/report.js
var report = __webpack_require__(3636);
// EXTERNAL MODULE: ./modules/logger.js + 1 modules
var logger = __webpack_require__(786);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./modules/content.js
var modules_content = __webpack_require__(1440);
// EXTERNAL MODULE: ./node_modules/html-react-parser/esm/index.mjs
var esm = __webpack_require__(7311);
// EXTERNAL MODULE: ./components/MenuTemplate.jsx
var MenuTemplate = __webpack_require__(1451);
;// CONCATENATED MODULE: ./components/templates/ReportPage.jsx
"use client";













const ReportPage = ({
  pageName,
  title,
  ogTags,
  bannerProps,
  footerProps,
  enableGoogleOneTap,
  beforeEmailSubmittedContent,
  afterEmailSubmittedContent,
  mauticForm,
  customCSSFile,
  menu
}) => {
  const [emailSubmitted, setEmailSubmitted] = (0,react.useState)(false);
  const [displayReadMoreButton, setDisplayReadMoreButton] = (0,react.useState)(false);
  const [displayForm, setDisplayForm] = (0,react.useState)(false);
  if (mauticForm.reportPageName) (0,modules_mauticForm/* setReportPageName */.Tp)(mauticForm.reportPageName);
  const handleReadMoreButtonClick = () => {
    (0,report/* setReadMoreFlag */.cJ)();
    setDisplayReadMoreButton(false);
    setDisplayForm(true);
  };
  (0,react.useEffect)(() => {
    let readMoreButtonNotClicked = (0,report/* getReadMoreButtonState */.jp)();
    setDisplayReadMoreButton(readMoreButtonNotClicked);
    setDisplayForm(!readMoreButtonNotClicked);
  }, []);
  (0,react.useEffect)(() => {
    if (displayForm) {
      const loadAsynFunction = async () => {
        setEmailSubmitted(await (0,modules_mauticForm/* getEmailSubmitted */.Jg)());
      };
      loadAsynFunction();
    }
  }, [displayForm]);
  const beforeEmailSubmitted = beforeEmailSubmittedContent?.map((element, index) => (0,modules_content/* createMarkup */.K)({
    ...element,
    key: index
  }));
  const afterEmailSubmitted = afterEmailSubmittedContent?.map((element, index) => (0,modules_content/* createMarkup */.K)({
    ...element,
    key: index
  }));
  const parsedBeforeEmailSubmittedContent = beforeEmailSubmitted?.map(esm/* default */.ZP);
  const parsedAfterEmailSubmittedContent = afterEmailSubmitted?.map(esm/* default */.ZP);
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement((head_default()), null, /*#__PURE__*/react.createElement("title", null, title), /*#__PURE__*/react.createElement("meta", {
    httpEquiv: "content-type",
    content: "text/html;charSet=utf-8"
  }), /*#__PURE__*/react.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge,chrome=1"
  }), /*#__PURE__*/react.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/react.createElement("meta", {
    name: "apple-itunes-app",
    content: "app-id=535886823"
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:title",
    content: ogTags.og_title
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:description",
    content: ogTags.og_description
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:image",
    content: ogTags.og_image
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:url",
    content: ogTags.og_url
  }), /*#__PURE__*/react.createElement("link", {
    href: "css/sw/styles3bb8.css",
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/sw/t1.css",
    type: "text/css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    href: "css/customStyle.css",
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans:400,600",
    rel: "stylesheet",
    type: "text/css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/newui.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/banner.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/templates/ReportPage.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), customCSSFile && /*#__PURE__*/react.createElement("link", {
    href: `css/pages/${pageName}.css`,
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("script", {
    type: "text/javascript",
    src: "https://accounts.google.com/gsi/client",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target),
    defer: true
  })), /*#__PURE__*/react.createElement((script_default()), {
    src: "/js/sw/scriptsccc7.js",
    strategy: "beforeInteractive",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), menu && /*#__PURE__*/react.createElement(MenuTemplate/* default */.Z, {
    displayPhone: menu.displayPhone,
    formsets: mauticForm.formsets
  }), /*#__PURE__*/react.createElement("div", {
    id: "page-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    id: "content",
    className: "bgclr0"
  }, /*#__PURE__*/react.createElement(Banner/* default */.Z, {
    bannerProps: bannerProps,
    formsets: mauticForm.formsets
  }), /*#__PURE__*/react.createElement("div", {
    className: "main-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "main wrapper clearfix bgclr6"
  }, /*#__PURE__*/react.createElement("div", {
    id: "greeting"
  }, /*#__PURE__*/react.createElement("div", {
    id: "dwc_alias",
    "data-slot": "dwc",
    "data-param-slot-name": "rpt_alias"
  }, "Welcome")), /*#__PURE__*/react.createElement("article", {
    id: "articlecntm",
    className: "articlecnt"
  }, parsedBeforeEmailSubmittedContent, displayReadMoreButton && /*#__PURE__*/react.createElement("section", {
    id: "note"
  }, parsedAfterEmailSubmittedContent && /*#__PURE__*/react.createElement("button", {
    onClick: handleReadMoreButtonClick,
    id: "readMore"
  }, "Read More")), emailSubmitted && parsedAfterEmailSubmittedContent)))), /*#__PURE__*/react.createElement(FooterComponent/* default */.Z, {
    footerProps: footerProps
  })), displayForm && /*#__PURE__*/react.createElement(PopUpForm, {
    readMore: true,
    enableGoogleOneTap: enableGoogleOneTap,
    mauticForm: mauticForm
  }), /*#__PURE__*/react.createElement("div", {
    id: "dwc_ucid",
    "data-slot": "dwc",
    "data-param-slot-name": "ucid"
  }));
};
/* harmony default export */ var templates_ReportPage = (ReportPage);
;// CONCATENATED MODULE: ./components/TextBanner.jsx



const TextBanner = ({
  bannerText
}) => {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement((head_default()), null, /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/components/TextBanner.css",
    onError: e => logResourceLoadError(e.target)
  })), /*#__PURE__*/react.createElement("div", {
    id: "banner",
    className: "bannerContainer"
  }, /*#__PURE__*/react.createElement("div", {
    className: "bannerTextContainer"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", {
    id: "usp"
  }, /*#__PURE__*/react.createElement("div", {
    className: "bannerText"
  }, (0,esm/* default */.ZP)(bannerText)))))));
};
/* harmony default export */ var components_TextBanner = (TextBanner);
// EXTERNAL MODULE: ./components/BackgroundVideo.jsx
var BackgroundVideo = __webpack_require__(7712);
// EXTERNAL MODULE: ./modules/feedbackForm.js
var feedbackForm = __webpack_require__(1021);
;// CONCATENATED MODULE: ./components/FeedBackForm.jsx





const FeedBackForm = ({
  unsubscribeProps
}) => {
  const [displayUnsubscribeMessage, setDisplayUnsubscribeMessage] = (0,react.useState)(true);
  const feedbackModalRef = (0,react.useRef)(null);
  const feedbackFormSlotRef = (0,react.useRef)(null);
  let {
    unsubsbscribeCollateralType,
    FEEDBACK_FORM_HEADER,
    UNSUBSCRIBE_INSTRUCTION,
    UNSUBSCRIBE_LINK_TEXT,
    RESUBSCRIBE_LINK_TEXT,
    RESUBSCRIBE_INSTRUCTION,
    UNSUBSCRIBE_ANONYMOUS_USER_MESSAGE,
    RESUBSCRIBE_SUCCESS_MESSAGE
  } = unsubscribeProps;
  const unsubscribeInstruction = UNSUBSCRIBE_INSTRUCTION ? UNSUBSCRIBE_INSTRUCTION : global/* UNSUBSCRIBE_INSTRUCTION */.jE;
  const unsubscribeLinkText = UNSUBSCRIBE_LINK_TEXT ? UNSUBSCRIBE_LINK_TEXT : global/* UNSUBSCRIBE_LINK_TEXT */._p;
  const resubscribeInstruction = RESUBSCRIBE_INSTRUCTION ? RESUBSCRIBE_INSTRUCTION : global/* RESUBSCRIBE_INSTRUCTION */.WK;
  const resubscribeLinkText = RESUBSCRIBE_LINK_TEXT ? RESUBSCRIBE_LINK_TEXT : global/* RESUBSCRIBE_LINK_TEXT */.c2;
  const formHeader = FEEDBACK_FORM_HEADER ? FEEDBACK_FORM_HEADER : global/* FEEDBACK_FORM_HEADER */.Zx;
  const handleFeedbackClose = () => {
    (0,feedbackForm/* hideFeedbackForm */.Pl)();
  };
  const handleUnsubscribeClick = event => {
    (0,feedbackForm/* unsubscribe */.r1)(event, feedbackFormSlotRef);
  };
  const handleResubscribeClick = async event => {
    let resubscribed = await (0,feedbackForm/* resubscribe */.O5)(event);
    setDisplayUnsubscribeMessage(resubscribed);
  };
  (0,react.useEffect)(() => {
    (0,feedbackForm/* enableUnsubscribe */.EJ)(unsubsbscribeCollateralType);
    setDisplayUnsubscribeMessage(!(0,feedbackForm/* userHasUnsubscribed */.wu)());
    (0,feedbackForm/* setFeedbackModalRef */.ky)(feedbackModalRef);
    (0,feedbackForm/* setUnsubscribeAnonymousUserMessage */.hH)(UNSUBSCRIBE_ANONYMOUS_USER_MESSAGE);
    (0,feedbackForm/* setResubscribeSuccessMessage */.tf)(RESUBSCRIBE_SUCCESS_MESSAGE);
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement((head_default()), null, /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/components/FeedbackForm.css",
    onError: e => logResourceLoadError(e.target)
  })), /*#__PURE__*/react.createElement("div", {
    className: "subscribeOrUnsubscribeButton"
  }, displayUnsubscribeMessage ? /*#__PURE__*/react.createElement("div", {
    id: "unsubscribe",
    className: "unsubscribe"
  }, unsubscribeInstruction, /*#__PURE__*/react.createElement("a", {
    href: "",
    onClick: handleUnsubscribeClick
  }, unsubscribeLinkText)) : /*#__PURE__*/react.createElement("div", {
    id: "resubscribe",
    className: "resubscribe"
  }, resubscribeInstruction, /*#__PURE__*/react.createElement("a", {
    href: "",
    onClick: handleResubscribeClick
  }, resubscribeLinkText))), /*#__PURE__*/react.createElement("div", {
    id: "feedbackModal",
    className: "cmodal",
    ref: feedbackModalRef
  }, /*#__PURE__*/react.createElement("div", {
    id: "feedbackContent",
    className: "cmodal-content",
    ref: feedbackFormSlotRef
  }, /*#__PURE__*/react.createElement("span", {
    id: "feedbackClose",
    className: "close",
    onClick: handleFeedbackClose
  }, "x"), /*#__PURE__*/react.createElement(FormHeader/* default */.Z, {
    displayFormHeader: true,
    cssClassName: "formHeader",
    formHeader: formHeader
  }))));
};
/* harmony default export */ var components_FeedBackForm = (FeedBackForm);
// EXTERNAL MODULE: ./components/EmbeddedForm.jsx
var EmbeddedForm = __webpack_require__(7879);
;// CONCATENATED MODULE: ./components/templates/AletterLandingPage.jsx
"use client";









const AletterLandingPage = ({
  pageName,
  title,
  video,
  bannerText,
  phoneCTA,
  ogTags,
  enableGoogleOneTap,
  unsubscribeProps,
  mauticForm,
  pageContent,
  customCSSFile
}) => {
  const asideRef = (0,react.useRef)(null);
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement((head_default()), null, /*#__PURE__*/react.createElement("title", null, title), /*#__PURE__*/react.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), /*#__PURE__*/react.createElement("meta", {
    name: "apple-itunes-app",
    content: "app-id=535886823"
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:title",
    content: ogTags.og_title
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:description",
    content: ogTags.og_description
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:image",
    content: ogTags.og_image
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:url",
    content: ogTags.og_url
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/bootstrap.min.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/fa.min.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/lp-aletter_galeranch.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    href: "css/lp.css",
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    href: "css/templates/AletterLandingPage.css",
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), customCSSFile && /*#__PURE__*/react.createElement("link", {
    href: `css/pages/${pageName}.css`,
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("script", {
    type: "text/javascript",
    src: "https://accounts.google.com/gsi/client",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target),
    defer: true
  })), /*#__PURE__*/react.createElement((script_default()), {
    src: "js/jquery-3.5.1.min.js",
    strategy: "beforeInteractive",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement((script_default()), {
    src: "js/bootstrap.min.js",
    strategy: "beforeInteractive",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement(components_TextBanner, {
    bannerText: bannerText
  }), /*#__PURE__*/react.createElement(BackgroundVideo/* default */.Z, {
    video: video
  }), /*#__PURE__*/react.createElement("div", {
    id: "mForm",
    className: "container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "row form-container"
  }, pageContent && /*#__PURE__*/react.createElement("div", {
    id: "content",
    className: "container-fluid"
  }, /*#__PURE__*/react.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col-12 header-container"
  }, /*#__PURE__*/react.createElement("h1", null, pageContent)))), /*#__PURE__*/react.createElement("div", {
    id: "aside",
    ref: asideRef,
    className: "col-12"
  }, /*#__PURE__*/react.createElement(EmbeddedForm/* default */.Z, {
    formSlotIDRef: asideRef,
    enableGoogleOneTap: enableGoogleOneTap,
    phoneCTA: phoneCTA,
    mauticForm: mauticForm
  })))), unsubscribeProps && /*#__PURE__*/react.createElement(components_FeedBackForm, {
    unsubscribeProps: unsubscribeProps
  }));
};
/* harmony default export */ var templates_AletterLandingPage = (AletterLandingPage);
// EXTERNAL MODULE: ./components/FormHeaderComponents/PhoneCTAButton.jsx
var PhoneCTAButton = __webpack_require__(199);
;// CONCATENATED MODULE: ./components/templates/FestivalPage.jsx
"use client";









const FestivalPage = ({
  pageName,
  title,
  ogTags,
  video,
  bannerText,
  phoneCTA,
  controlVideos,
  enableGoogleOneTap,
  timeInterval,
  nTimes,
  zDuration,
  mauticForm,
  customCSSFile
}) => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement((head_default()), null, /*#__PURE__*/react.createElement("title", null, title), /*#__PURE__*/react.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), /*#__PURE__*/react.createElement("meta", {
    name: "apple-itunes-app",
    content: "app-id=535886823"
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:title",
    content: ogTags.og_title
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:description",
    content: ogTags.og_description
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:image",
    content: ogTags.og_image
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:url",
    content: ogTags.og_url
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/bootstrap.min.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/fa.min.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    href: "css/lp.css",
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    href: "css/templates/FestivalPage.css",
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), customCSSFile && /*#__PURE__*/react.createElement("link", {
    href: `css/pages/${pageName}.css`,
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("script", {
    type: "text/javascript",
    src: "https://accounts.google.com/gsi/client",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target),
    defer: true
  })), /*#__PURE__*/react.createElement((script_default()), {
    src: "js/jquery-3.5.1.min.js",
    strategy: "beforeInteractive",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement((script_default()), {
    src: "js/bootstrap.min.js",
    strategy: "beforeInteractive",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement(components_TextBanner, {
    bannerText: bannerText
  }), /*#__PURE__*/react.createElement(BackgroundVideo/* default */.Z, {
    video: video
  }), /*#__PURE__*/react.createElement(PhoneCTAButton/* default */.Z, {
    phoneCTA: phoneCTA
  }), /*#__PURE__*/react.createElement("div", {
    id: "dwc_alias",
    "data-slot": "dwc",
    "data-param-slot-name": "festivals_alias",
    className: "welcomeMessage"
  }), /*#__PURE__*/react.createElement(PopUpForm, {
    controlVideos: controlVideos,
    enableGoogleOneTap: enableGoogleOneTap,
    mauticForm: mauticForm,
    timeInterval: timeInterval,
    nTimes: nTimes,
    zDuration: zDuration
  }));
};
/* harmony default export */ var templates_FestivalPage = (FestivalPage);
;// CONCATENATED MODULE: ./components/templates/HomewardBoundLandingPage.jsx
"use client";












function HomewardBoundLandingPage({
  pageName,
  title,
  video,
  bannerText,
  phoneCTA,
  enableGoogleOneTap,
  ogTags,
  mauticForm,
  zDuration,
  timeInterval,
  nTimes,
  controlVideos,
  customCSSFile
}) {
  const [emailSubmitted, setEmailSubmitted] = (0,react.useState)(false);
  const asideRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    (0,modules_mauticForm/* enableEmbeddedFormForKnownContacts */.xw)(asideRef);
    (0,modules_mauticForm/* setReferralFormHeader */.IR)(mauticForm.referralFormHeader);
    const loadAsynFunction = async () => {
      setEmailSubmitted(await (0,modules_mauticForm/* getEmailSubmitted */.Jg)());
    };
    loadAsynFunction();
  }, []);
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement((head_default()), null, /*#__PURE__*/react.createElement("title", null, title), /*#__PURE__*/react.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), /*#__PURE__*/react.createElement("meta", {
    name: "apple-itunes-app",
    content: "app-id=535886823"
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:title",
    content: ogTags.og_title
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:description",
    content: ogTags.og_description
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:image",
    content: ogTags.og_image
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:url",
    content: ogTags.og_url
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/bootstrap.min.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/fa.min.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    href: "css/lp.css",
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    href: "css/templates/HomewardBoundLandingPage.css",
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), customCSSFile && /*#__PURE__*/react.createElement("link", {
    href: `css/pages/${pageName}.css`,
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("script", {
    type: "text/javascript",
    src: "https://accounts.google.com/gsi/client",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target),
    defer: true
  })), /*#__PURE__*/react.createElement((script_default()), {
    src: "/js/jquery-3.5.1.min.js",
    strategy: "beforeInteractive",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement((script_default()), {
    src: "js/bootstrap.min.js",
    strategy: "beforeInteractive",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement(components_TextBanner, {
    bannerText: bannerText
  }), /*#__PURE__*/react.createElement(BackgroundVideo/* default */.Z, {
    video: video
  }), /*#__PURE__*/react.createElement("div", {
    id: "mForm",
    className: "container"
  }, /*#__PURE__*/react.createElement(PhoneCTAButton/* default */.Z, {
    phoneCTA: phoneCTA
  }), /*#__PURE__*/react.createElement(Divider/* default */.Z, {
    displayDivider: emailSubmitted
  }), /*#__PURE__*/react.createElement("div", {
    className: "row form-container"
  }, /*#__PURE__*/react.createElement("div", {
    id: "aside",
    ref: asideRef,
    className: "col-12"
  }))), /*#__PURE__*/react.createElement(PopUpForm, {
    controlVideos: controlVideos,
    enableGoogleOneTap: enableGoogleOneTap,
    timeInterval: timeInterval,
    nTimes: nTimes,
    zDuration: zDuration,
    mauticForm: mauticForm
  }));
}
/* harmony default export */ var templates_HomewardBoundLandingPage = (HomewardBoundLandingPage);
// EXTERNAL MODULE: ./components/BannerRP.jsx
var BannerRP = __webpack_require__(8060);
// EXTERNAL MODULE: ./components/MenuTemplateRP.jsx
var MenuTemplateRP = __webpack_require__(2681);
;// CONCATENATED MODULE: ./components/templates/GenericPage.jsx
"use client";














const GenericPage = ({
  pageName,
  title,
  video,
  bannerText,
  bannerProps,
  phoneCTA,
  ogTags,
  enableGoogleOneTap,
  unsubscribeProps,
  mauticForm,
  pageContent,
  customCSSFile,
  menu,
  chatBot
}) => {
  const asideRef = (0,react.useRef)(null);
  let chatBotDFAgent;
  if (chatBot.enableChatBot) {
    chatBotDFAgent = chatBot.chatbotDFAgent ? chatBot.chatbotDFAgent : global/* DEFAULT-CHATBOT-DF-AGENT */.Wd;
  }
  const setPageCampaignSource = () => {
    if (typeof setChatbotDFAgent === "function") {
      console.log("chatBotDFAgent", chatBotDFAgent);
      setChatbotDFAgent(chatBotDFAgent);
    }
  };
  const content = Array.isArray(pageContent) ? pageContent?.map((element, index) => (0,modules_content/* createMarkup */.K)({
    ...element,
    key: index
  })) : [];
  const parsedContent = content?.map(esm/* default */.ZP);
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement((head_default()), null, /*#__PURE__*/react.createElement("title", null, title), /*#__PURE__*/react.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), /*#__PURE__*/react.createElement("meta", {
    name: "apple-itunes-app",
    content: "app-id=535886823"
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:title",
    content: ogTags.og_title
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:description",
    content: ogTags.og_description
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:image",
    content: ogTags.og_image
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:url",
    content: ogTags.og_url
  }), menu && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("link", {
    href: "css/sw/styles3bb8.css?v=AUcpKiC1BEGp1mp0rFd8QrbpJS68UXwJcjvhlicFcHQ1",
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/sw/t1.css",
    type: "text/css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    href: "css/customStyle.css",
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/newui.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  })), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/bootstrap.min.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/fa.min.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    href: "css/lp.css",
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/banner.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/rp.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/templates/GenericPage.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), chatBot.enableChatBot && /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "/css/chatbot.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), customCSSFile && /*#__PURE__*/react.createElement("link", {
    href: `css/pages/${pageName}.css`,
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("script", {
    type: "text/javascript",
    src: "https://accounts.google.com/gsi/client",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target),
    defer: true
  })), chatBot.enableChatBot && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement((script_default()), {
    src: "/js/chatbot.js",
    onLoad: () => {
      setPageCampaignSource();
    },
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement((script_default()), {
    src: "/js/index.js",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement((script_default()), {
    src: "https://kit.fontawesome.com/c3c47df7d6.js",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  })), /*#__PURE__*/react.createElement((script_default()), {
    src: "js/jquery-3.5.1.min.js",
    strategy: "beforeInteractive",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement((script_default()), {
    src: "js/bootstrap.min.js",
    strategy: "beforeInteractive",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("div", {
    id: "content"
  }, menu && /*#__PURE__*/react.createElement(MenuTemplateRP/* default */.Z, {
    menu: menu
  }), bannerText && /*#__PURE__*/react.createElement(components_TextBanner, {
    bannerText: bannerText
  }), bannerProps && /*#__PURE__*/react.createElement(BannerRP/* default */.Z, {
    bannerProps: bannerProps,
    formsets: mauticForm.formsets
  }), video && /*#__PURE__*/react.createElement(BackgroundVideo/* default */.Z, {
    video: video
  }), /*#__PURE__*/react.createElement("div", {
    className: "pageContent"
  }, parsedContent && parsedContent)), /*#__PURE__*/react.createElement("div", {
    id: "mForm",
    className: "container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "row form-container"
  }, /*#__PURE__*/react.createElement("div", {
    id: "aside",
    ref: asideRef,
    className: "col-12"
  }, /*#__PURE__*/react.createElement(EmbeddedForm/* default */.Z, {
    formSlotIDRef: asideRef,
    enableGoogleOneTap: enableGoogleOneTap,
    phoneCTA: phoneCTA,
    mauticForm: mauticForm
  })))), unsubscribeProps && /*#__PURE__*/react.createElement(components_FeedBackForm, {
    unsubscribeProps: unsubscribeProps
  }), chatBot.enableChatBot && /*#__PURE__*/react.createElement("div", {
    id: "chatContain"
  }));
};
/* harmony default export */ var templates_GenericPage = (GenericPage);
;// CONCATENATED MODULE: ./components/templates/PricingPage.jsx







function PricingPage(props) {
  const {
    billingNote,
    currencyOptions,
    plans,
    pageName,
    title,
    ogTags,
    bannerProps,
    menu,
    customCSSFile,
    chatBot
  } = props;
  const [billingPeriod, setBillingPeriod] = (0,react.useState)("Yearly");
  const [currency, setCurrency] = (0,react.useState)(currencyOptions[0]);
  const options = Object.keys(plans);
  const calculateSavings = planTitle => {
    if (billingPeriod !== "Yearly") return null;
    const monthlyPlan = plans.Monthly.find(plan => plan.title === planTitle);
    const yearlyPlan = plans.Yearly.find(plan => plan.title === planTitle);
    if (!monthlyPlan || !yearlyPlan) return null;
    const monthlyCostYear = monthlyPlan.price[currency] * 12;
    const yearlyCost = yearlyPlan.price[currency];
    const saved = monthlyCostYear - yearlyCost;
    if (saved <= 0) return null;
    return `$${saved}`;
  };
  let chatBotDFAgent;
  if (chatBot.enableChatBot) {
    chatBotDFAgent = chatBot.chatbotDFAgent ? chatBot.chatbotDFAgent : global/* DEFAULT-CHATBOT-DF-AGENT */.Wd;
  }
  let articleWidth = {
    width: "100%"
  };
  const setPageCampaignSource = () => {
    if (typeof setChatbotDFAgent === "function") {
      setChatbotDFAgent(chatBotDFAgent);
    }
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement((head_default()), null, /*#__PURE__*/react.createElement("title", null, title), /*#__PURE__*/react.createElement("meta", {
    httpEquiv: "content-type",
    content: "text/html;charSet=utf-8"
  }), /*#__PURE__*/react.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge,chrome=1"
  }), /*#__PURE__*/react.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/react.createElement("meta", {
    name: "apple-itunes-app",
    content: "app-id=535886823"
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:title",
    content: ogTags.og_title
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:description",
    content: ogTags.og_description
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:image",
    content: ogTags.og_image
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:url",
    content: ogTags.og_url
  }), /*#__PURE__*/react.createElement("link", {
    href: "css/sw/styles3bb8.css?v=AUcpKiC1BEGp1mp0rFd8QrbpJS68UXwJcjvhlicFcHQ1",
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/sw/t1.css",
    type: "text/css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    href: "css/customStyle.css",
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans:400,600",
    rel: "stylesheet",
    type: "text/css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/newui.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/banner.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/bootstrap.min.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/fa.min.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/rp.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), chatBot.enableChatBot && /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "/css/chatbot.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/templates/PricingPage.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), customCSSFile && /*#__PURE__*/react.createElement("link", {
    href: `css/pages/${pageName}.css`,
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  })), /*#__PURE__*/react.createElement((script_default()), {
    src: "js/jquery-3.5.1.min.js",
    strategy: "beforeInteractive",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), chatBot.enableChatBot && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement((script_default()), {
    src: "/js/chatbot.js",
    onLoad: () => {
      setPageCampaignSource();
    },
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement((script_default()), {
    src: "/js/index.js",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement((script_default()), {
    src: "https://kit.fontawesome.com/c3c47df7d6.js",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  })), /*#__PURE__*/react.createElement("div", {
    id: "page-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    id: "content",
    className: "bgclr0"
  }, menu && /*#__PURE__*/react.createElement(MenuTemplateRP/* default */.Z, {
    displayPhone: menu.displayPhone
  }), /*#__PURE__*/react.createElement(BannerRP/* default */.Z, {
    bannerProps: bannerProps
  }), /*#__PURE__*/react.createElement("div", {
    className: "main-container"
  }, /*#__PURE__*/react.createElement("div", {
    id: "pricing-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "toggle-container"
  }, options.map(option => /*#__PURE__*/react.createElement("button", {
    key: option,
    className: `toggle-button ${billingPeriod === option ? "active" : ""}`,
    onClick: () => setBillingPeriod(option)
  }, option))), /*#__PURE__*/react.createElement("p", {
    className: "pricing-note"
  }, billingPeriod === "Monthly" ? billingNote.monthly : billingNote.yearly), /*#__PURE__*/react.createElement("div", {
    className: "currency-row"
  }, /*#__PURE__*/react.createElement("select", {
    name: "currency",
    id: "currency-select",
    className: "currency-dropdown",
    value: currency,
    onChange: e => setCurrency(e.target.value)
  }, currencyOptions.map(code => /*#__PURE__*/react.createElement("option", {
    key: code,
    value: code
  }, code)))), /*#__PURE__*/react.createElement("div", {
    className: "pricing-grid"
  }, plans[billingPeriod].map(plan => {
    const savings = calculateSavings(plan.title);
    return /*#__PURE__*/react.createElement("div", {
      key: plan.title,
      className: "pricing-card"
    }, savings && /*#__PURE__*/react.createElement("div", {
      className: "savings-banner"
    }, "Save ", savings, " yearly."), /*#__PURE__*/react.createElement("h2", {
      id: `plan-${plan.title}`
    }, plan.title), /*#__PURE__*/react.createElement("p", {
      className: "price"
    }, plan.displayPrice[currency]), /*#__PURE__*/react.createElement("a", {
      href: `/start-using-traqr?plan=${plan.title}`,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "pricing-button"
    }, plan.title === "FREE" ? `Sign Up for ${plan.title}` : `Get ${plan.title} NOW`), /*#__PURE__*/react.createElement("hr", {
      className: "pricing-divider"
    }), /*#__PURE__*/react.createElement("ul", null, plan.features.map((feature, index) => /*#__PURE__*/react.createElement("li", {
      key: index
    }, feature))));
  })))))), chatBot.enableChatBot && /*#__PURE__*/react.createElement("div", {
    id: "chatContain"
  }));
}
;// CONCATENATED MODULE: ./pages/[websitePageName].js
"use client";









function BrandedWebsitePage(props) {
  return /*#__PURE__*/react.createElement(react.Fragment, null, props.pageType == "WebsitePage" && /*#__PURE__*/react.createElement(WebsitePage/* default */.Z, props), props.pageType == "ReportPage" && /*#__PURE__*/react.createElement(templates_ReportPage, props), props.pageType == "AletterLandingPage" && /*#__PURE__*/react.createElement(templates_AletterLandingPage, props), props.pageType == "FestivalPage" && /*#__PURE__*/react.createElement(templates_FestivalPage, props), props.pageType == "HomewardBoundLandingPage" && /*#__PURE__*/react.createElement(templates_HomewardBoundLandingPage, props), props.pageType == "GenericPage" && /*#__PURE__*/react.createElement(templates_GenericPage, props), props.pageType == "PricingPage" && /*#__PURE__*/react.createElement(PricingPage, props));
}
var __N_SSG = true;
/* harmony default export */ var _websitePageName_ = (BrandedWebsitePage);

/***/ }),

/***/ 4795:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/[websitePageName]",
      function () {
        return __webpack_require__(1953);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [416,408,888,774,179], function() { return __webpack_exec__(4795); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);