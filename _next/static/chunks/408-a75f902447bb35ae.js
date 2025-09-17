"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[408],{

/***/ 7712:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_ytvideo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1165);
/* harmony import */ var next_head_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9008);
/* harmony import */ var next_head_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head_js__WEBPACK_IMPORTED_MODULE_2__);




function BackgroundVideo({
  video
}) {
  const [videoActionButtonLabel, setVideoActionButtonLabel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Play Video");
  const [videoUrl, setVideoUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const bgVideoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const video1Ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const playSoundRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const handleVideoActionButtonClick = () => {
    setVideoActionButtonLabel((0,_modules_ytvideo_js__WEBPACK_IMPORTED_MODULE_1__/* .handlePlaySoundButtonClick */ .TT)(videoActionButtonLabel));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setVideoUrl((0,_modules_ytvideo_js__WEBPACK_IMPORTED_MODULE_1__/* .getYTBackgroundVideoUrl */ ._e)(video));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_modules_ytvideo_js__WEBPACK_IMPORTED_MODULE_1__/* .setBackgroundVideoElementReferences */ .fO)(bgVideoRef, video1Ref, playSoundRef, setVideoActionButtonLabel);
    (0,_modules_ytvideo_js__WEBPACK_IMPORTED_MODULE_1__/* .loadYTIframePlayerAPI */ .Hj)();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((next_head_js__WEBPACK_IMPORTED_MODULE_2___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "stylesheet",
    href: "css/components/BackgroundVideo.css",
    onError: e => logResourceLoadError(e.target)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "bgVideo",
    ref: bgVideoRef,
    className: "bgVideo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", {
    id: "video1",
    className: "video1",
    ref: video1Ref,
    frameBorder: "0",
    allow: "autoplay; fullscreen",
    src: videoUrl
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "controlButtonContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    id: "playSound",
    ref: playSoundRef,
    onClick: handleVideoActionButtonClick
  }, videoActionButtonLabel))));
}
/* harmony default export */ __webpack_exports__.Z = (BackgroundVideo);
BackgroundVideo.propTypes = {
  videoID: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string).isRequired
};

/***/ }),

/***/ 5917:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _modules_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3499);
/* harmony import */ var _configs_global_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4052);
/* harmony import */ var _modules_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(786);
/* harmony import */ var _modules_pageutil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9438);
/* harmony import */ var _modules_mauticForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2549);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7311);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9008);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);








const Banner = ({
  bannerProps,
  formsets
}) => {
  let defaultImgURL = bannerProps.imageSrc ? bannerProps.imageSrc : _configs_global_json__WEBPACK_IMPORTED_MODULE_2__/* ["DEFAULT-BANNER_URL"] */ .GU;
  const [bannerImage, setBannerImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultImgURL);
  const [bannerImageBorder, setBannerImageBorder] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const headerContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const bannerStyle = bannerProps.imageSrc ? "banner" : "animatedBanner";
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!bannerProps.imageSrc) {
      (0,_modules_mauticForm__WEBPACK_IMPORTED_MODULE_5__/* .setFormsets */ .Aw)(formsets);
      setBannerImage((0,_modules_banner__WEBPACK_IMPORTED_MODULE_1__/* .getBannerImageURL */ .h)());
      setBannerImageBorder((0,_modules_banner__WEBPACK_IMPORTED_MODULE_1__/* .getBannerBorderStyle */ .v)());
    }
    (0,_modules_pageutil__WEBPACK_IMPORTED_MODULE_4__/* .setHeaderContainerRef */ .KU)(headerContainerRef);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((next_head__WEBPACK_IMPORTED_MODULE_7___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "stylesheet",
    href: "css/components/Banner.css",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_3__/* .logResourceLoadError */ .h)(e.target)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header-container",
    ref: headerContainerRef,
    role: "banner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "butterBarContainer"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: "wrapper clearfix bgclr8",
    style: bannerImageBorder ? {
      borderTop: `${bannerImageBorder}`
    } : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "praveenImg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "pp",
    className: "pp"
  }, bannerProps.imgOverlay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _configs_global_json__WEBPACK_IMPORTED_MODULE_2__/* ["DEFAULT-PRAVEEN_IMG_SRC"] */ .RV,
    width: "100%",
    alt: "praveen image",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_3__/* .logResourceLoadError */ .h)(e.target)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bannerTextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "usp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)(bannerProps.text))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: bannerStyle,
    src: bannerImage,
    alt: bannerProps.imageAlt,
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_3__/* .logResourceLoadError */ .h)(e.target)
  }))));
};
/* harmony default export */ __webpack_exports__.Z = (Banner);

/***/ }),

/***/ 8060:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _modules_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3499);
/* harmony import */ var _configs_global_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4052);
/* harmony import */ var _modules_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(786);
/* harmony import */ var _modules_pageutil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9438);
/* harmony import */ var _modules_mauticForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2549);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7311);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9008);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);








const BannerRP = ({
  bannerProps,
  formsets
}) => {
  let defaultImgURL = bannerProps.imageSrc ? bannerProps.imageSrc : _configs_global_json__WEBPACK_IMPORTED_MODULE_2__/* ["DEFAULT-BANNER_URL"] */ .GU;
  const [bannerImage, setBannerImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultImgURL);
  const [bannerImageBorder, setBannerImageBorder] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const headerContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const bannerStyle = bannerProps.imageSrc ? "banner" : "animatedBanner";
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!bannerProps.imageSrc) {
      (0,_modules_mauticForm__WEBPACK_IMPORTED_MODULE_5__/* .setFormsets */ .Aw)(formsets);
      setBannerImage((0,_modules_banner__WEBPACK_IMPORTED_MODULE_1__/* .getBannerImageURL */ .h)());
      setBannerImageBorder((0,_modules_banner__WEBPACK_IMPORTED_MODULE_1__/* .getBannerBorderStyle */ .v)());
    }
    (0,_modules_pageutil__WEBPACK_IMPORTED_MODULE_4__/* .setHeaderContainerRef */ .KU)(headerContainerRef);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((next_head__WEBPACK_IMPORTED_MODULE_7___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "stylesheet",
    href: "css/components/BannerRP.css",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_3__/* .logResourceLoadError */ .h)(e.target)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "headerContainer",
    ref: headerContainerRef,
    role: "banner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "butterBarContainer"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: "wrapper clearfix bgclr8 banner",
    style: bannerImageBorder ? {
      borderTop: `${bannerImageBorder}`
    } : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "praveenImg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pp"
  }, bannerProps.imgOverlay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _configs_global_json__WEBPACK_IMPORTED_MODULE_2__/* ["DEFAULT-PRAVEEN_IMG_SRC"] */ .RV,
    width: "100%",
    alt: "praveen image",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_3__/* .logResourceLoadError */ .h)(e.target)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bannerTextContainer"
  }, bannerProps.text.map(header => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)(header))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: bannerStyle,
    src: bannerImage,
    alt: bannerProps.imageAlt,
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_3__/* .logResourceLoadError */ .h)(e.target)
  }))));
};
/* harmony default export */ __webpack_exports__.Z = (BannerRP);

/***/ }),

/***/ 7879:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _FormHeaderComponents_WelcomeMsg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(658);
/* harmony import */ var _FormHeaderComponents_FormHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9283);
/* harmony import */ var _FormHeaderComponents_GoogleSignInButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9676);
/* harmony import */ var _FormHeaderComponents_PhoneCTAButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(199);
/* harmony import */ var _FormHeaderComponents_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6611);
/* harmony import */ var _configs_global_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4052);
/* harmony import */ var _MauticForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7679);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);









const EmbeddedForm = ({
  formSlotIDRef,
  enableGoogleOneTap,
  phoneCTA,
  mauticForm
}) => {
  const [formHeaderState, setFormHeaderState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    alias: "",
    formHeader: "",
    displayDivider1: false,
    displayGSIButton: true,
    displayDivider2: false,
    displaySecondaryFormHeader: false
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormHeaderComponents_PhoneCTAButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    phoneCTA: phoneCTA
  }), phoneCTA.label && phoneCTA.href && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormHeaderComponents_Divider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    displayDivider: formHeaderState.displayDivider1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormHeaderComponents_WelcomeMsg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    alias: formHeaderState.alias
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormHeaderComponents_FormHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    displayFormHeader: formHeaderState.formHeader,
    formHeader: formHeaderState.formHeader,
    cssClassName: "formHeader"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormHeaderComponents_GoogleSignInButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    displayGSIButton: formHeaderState.displayGSIButton
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormHeaderComponents_Divider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    displayDivider: formHeaderState.displayDivider2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormHeaderComponents_FormHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    displayFormHeader: formHeaderState.displaySecondaryFormHeader,
    formHeader: _configs_global_json__WEBPACK_IMPORTED_MODULE_6__/* ["FORM_HEADER-SECONDARY_FORM_HEADER"] */ .i0,
    cssClassName: "secondaryFormHeader"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MauticForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    popupForm: false,
    formSlotIDRef: formSlotIDRef,
    setFormHeaderState: setFormHeaderState,
    enableGoogleOneTap: enableGoogleOneTap,
    mauticForm: mauticForm
  }));
};
/* harmony default export */ __webpack_exports__.Z = (EmbeddedForm);
EmbeddedForm.propTypes = {
  formSlotIDRef: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)
};

/***/ }),

/***/ 3804:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _configs_global_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4052);


const FooterComponent = ({
  footerProps
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", {
    className: "footer wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "contactinfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "disclosure"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, _configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* ["PAGE_FOOTER-ADDRESS_LINE1"] */ .QA && _configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* ["PAGE_FOOTER-ADDRESS_LINE1"] */ .QA), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, " ", _configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* ["PAGE_FOOTER-ADDRESS_LINE2"] */ .KT && _configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* ["PAGE_FOOTER-ADDRESS_LINE2"] */ .KT), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, " ", footerProps.displayEmail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: `mailto:${_configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* ["DEFAULT-EMAIL"] */ .jT}`
  }, _configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* ["DEFAULT-EMAIL"] */ .jT)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, " ", footerProps.displayContactNumber && _configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* ["DEFAULT-CONTACT_NUMBER"] */ .cL))))));
};
/* harmony default export */ __webpack_exports__.Z = (FooterComponent);

/***/ }),

/***/ 6611:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _configs_global_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4052);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9008);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);



const Divider = ({
  displayDivider
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((next_head__WEBPACK_IMPORTED_MODULE_2___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "stylesheet",
    href: "css/components/Divider.css",
    onError: e => logResourceLoadError(e.target)
  })), displayDivider && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "divider"
  }, _configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* ["FORM_HEADER-DIVIDER_TEXT"] */ .hr));
};
/* harmony default export */ __webpack_exports__.Z = (Divider);

/***/ }),

/***/ 9283:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9008);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7311);




const FormHeader = ({
  displayFormHeader,
  formHeader,
  cssClassName
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((next_head__WEBPACK_IMPORTED_MODULE_1___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "stylesheet",
    href: "css/components/FormHeader.css",
    onError: e => logResourceLoadError(e.target)
  })), displayFormHeader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: `${cssClassName} formHeader`
  }, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(formHeader)));
};
/* harmony default export */ __webpack_exports__.Z = (FormHeader);
FormHeader.propTypes = {
  formHeader: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};

/***/ }),

/***/ 9676:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _modules_googleOauth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7547);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9008);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);



const GoogleSignInButton = ({
  displayGSIButton
}) => {
  const googleSignInButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_modules_googleOauth__WEBPACK_IMPORTED_MODULE_1__/* .setGSISlotRef */ .Bf)(googleSignInButton);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((next_head__WEBPACK_IMPORTED_MODULE_2___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "stylesheet",
    href: "css/components/BackgroundVideo.css",
    onError: e => logResourceLoadError(e.target)
  })), displayGSIButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "googleSignInButton",
    ref: googleSignInButton
  }));
};
/* harmony default export */ __webpack_exports__.Z = (GoogleSignInButton);

/***/ }),

/***/ 199:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _configs_global_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4052);
/* harmony import */ var _modules_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(786);
/* harmony import */ var _messages_errorMessage_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2153);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9008);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);





const PhoneCTAButton = ({
  phoneCTA
}) => {
  function trackPhoneCTA(href) {
    let arr = href.split(",");
    let pageTitle = "Tried Calling: " + arr[0];
    pageTitle += arr.length > 1 ? " ext:" + arr[arr.length - 1] : "";
    if (window.mt) {
      mt("send", "pageview", {
        page_title: pageTitle
      }, {
        onerror: function () {
          (0,_modules_logger__WEBPACK_IMPORTED_MODULE_2__/* .logError */ .H)(_messages_errorMessage_json__WEBPACK_IMPORTED_MODULE_3__/* .MT_ERROR */ .W);
        }
      });
    } else {
      let err = "mt method not found";
      (0,_modules_logger__WEBPACK_IMPORTED_MODULE_2__/* .logError */ .H)(err);
      console.log(err);
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((next_head__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "stylesheet",
    href: "css/components/PhoneCTAButton.css",
    onError: e => logResourceLoadError(e.target)
  })), phoneCTA.label && phoneCTA.href && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    id: "cta",
    className: "cta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "cta_button",
    href: phoneCTA.href,
    onClick: () => trackPhoneCTA(phoneCTA.href)
  }, _configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* ["PHONE_CTA-LABEL_PREFIX"] */ .ou, " ", phoneCTA.label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-phone cta_icon"
  }))));
};
/* harmony default export */ __webpack_exports__.Z = (PhoneCTAButton);

/***/ }),

/***/ 658:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configs_global_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4052);



const WelcomeMsg = ({
  alias
}) => {
  return alias && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "welcomeMessage"
  }, `${_configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* ["FORM_HEADER-WELCOME_MSG"] */ .dc} ${alias}`);
};
/* harmony default export */ __webpack_exports__.Z = (WelcomeMsg);
WelcomeMsg.propTypes = {
  alias: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};

/***/ }),

/***/ 7679:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _modules_mauticForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2549);
/* harmony import */ var _modules_googleOauth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7547);



const MauticForm = ({
  formSlotIDRef,
  readMore,
  setFormHeaderState,
  popupForm,
  enableGoogleOneTap,
  mauticForm
}) => {
  let {
    emailFormHeader,
    phoneFormHeader,
    noFormHeader,
    formsets
  } = mauticForm;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const loadFormAndScript = async () => {
      if (enableGoogleOneTap === false) (0,_modules_googleOauth__WEBPACK_IMPORTED_MODULE_2__/* .disableGoogleOneTap */ .md)();
      (0,_modules_mauticForm__WEBPACK_IMPORTED_MODULE_1__/* .setFormHeaders */ .ZU)(emailFormHeader, phoneFormHeader, noFormHeader);
      if (popupForm) (0,_modules_mauticForm__WEBPACK_IMPORTED_MODULE_1__/* .enablePopupForm */ .Y5)(mauticForm.timeInterval, mauticForm.nTimes, mauticForm.zDuration, mauticForm.controlVideos);
      (0,_modules_mauticForm__WEBPACK_IMPORTED_MODULE_1__/* .setMauticForms */ .CX)(formsets);
      await (0,_modules_mauticForm__WEBPACK_IMPORTED_MODULE_1__/* .loadForm */ .Sn)(formSlotIDRef, readMore);
      setFormHeaderState({
        alias: _modules_mauticForm__WEBPACK_IMPORTED_MODULE_1__/* .alias */ .bm,
        formHeader: _modules_mauticForm__WEBPACK_IMPORTED_MODULE_1__/* .formHeader */ .Uq,
        displayDivider1: _modules_mauticForm__WEBPACK_IMPORTED_MODULE_1__/* .displayDivider1 */ .$X,
        displayGSIButton: _modules_googleOauth__WEBPACK_IMPORTED_MODULE_2__/* .displayGSI */ .cn,
        displayDivider2: _modules_googleOauth__WEBPACK_IMPORTED_MODULE_2__/* .displayGSI */ .cn,
        displaySecondaryFormHeader: _modules_googleOauth__WEBPACK_IMPORTED_MODULE_2__/* .displayGSI */ .cn
      });
    };
    loadFormAndScript();
  }, []);
  return null;
};
/* harmony default export */ __webpack_exports__.Z = (MauticForm);

/***/ }),

/***/ 1451:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _configs_global_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4052);
/* harmony import */ var _configs_menuItems_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2108);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_pageutil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9438);
/* harmony import */ var _modules_mauticForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2549);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9008);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);







const MenuTemplate = ({
  displayPhone,
  formsets
}) => {
  const [displayMenu, setDisplayMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [navBarStyle, setNavBarStyle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    backgroundColor: "transparent"
  });
  const navBarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const handleScroll = () => {
    setNavBarStyle((0,_modules_pageutil__WEBPACK_IMPORTED_MODULE_3__/* .getNavBarStyle */ .th)());
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_modules_mauticForm__WEBPACK_IMPORTED_MODULE_4__/* .setFormsets */ .Aw)(formsets);
    (0,_modules_pageutil__WEBPACK_IMPORTED_MODULE_3__/* .initializeMenuInteractions */ .P2)();
    let isLoadMenu = (0,_modules_pageutil__WEBPACK_IMPORTED_MODULE_3__/* .loadMenu */ .CZ)();
    if (isLoadMenu) {
      setDisplayMenu(true);
      (0,_modules_pageutil__WEBPACK_IMPORTED_MODULE_3__/* .setNavBarRef */ .IG)(navBarRef);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((next_head__WEBPACK_IMPORTED_MODULE_5___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "stylesheet",
    href: "css/components/MenuTemplate.css",
    onError: e => logResourceLoadError(e.target)
  })), displayMenu && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "menuTemplate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "headerMenu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mobile-menu bgclr3",
    role: "menubar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "leftMenu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    target: "_blank",
    href: `mailto:${_configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* ["DEFAULT-EMAIL"] */ .jT}`,
    rel: "noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-envelope icon"
  }))), displayPhone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "leftMenu w-phone"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: `tel:${_configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* ["DEFAULT-CONTACT_NUMBER"] */ .cL}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-phone icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "mobile-menu-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-bars hamburgerIcon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    id: "navBar",
    className: "bgclr3",
    style: navBarStyle,
    ref: navBarRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "leftMenu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: `mailto:${_configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* ["DEFAULT-EMAIL"] */ .jT}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-envelope icon"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "aText"
  }, "Email"))), displayPhone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "w-phone"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: `tel:${_configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* ["DEFAULT-CONTACT_NUMBER"] */ .cL}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-phone icon"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "aText"
  }, _configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* ["DEFAULT-CONTACT_NUMBER"] */ .cL)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "menu container rightMenu",
    role: "menubar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "bgclr3",
    role: "menuitem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: _configs_menuItems_json__WEBPACK_IMPORTED_MODULE_2__?.Home?.href
  }, "HOME")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "bgclr3",
    role: "menuitem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "menu-head",
    href: _configs_menuItems_json__WEBPACK_IMPORTED_MODULE_2__?.MORE?.href
  }, "MORE", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "triangle-bottom"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sub-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container bgclr3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    role: "menu"
  }, _configs_menuItems_json__WEBPACK_IMPORTED_MODULE_2__?.MORE?.subMenu?.map((menuItem, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    role: "menuitem",
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: menuItem?.href
  }, menuItem.title)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "bgclr3",
    role: "menuitem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "menu-head",
    href: _configs_menuItems_json__WEBPACK_IMPORTED_MODULE_2__?.Buyers?.href
  }, "Buyers", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "triangle-bottom"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sub-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container bgclr3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    role: "menu"
  }, _configs_menuItems_json__WEBPACK_IMPORTED_MODULE_2__?.Buyers?.subMenu?.map((menuItem, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    role: "menuitem",
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: menuItem?.href
  }, menuItem?.title)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "bgclr3",
    role: "menuitem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "menu-head",
    href: _configs_menuItems_json__WEBPACK_IMPORTED_MODULE_2__?.Sellers?.href
  }, "Sellers", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "triangle-bottom"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sub-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container bgclr3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    role: "menu"
  }, _configs_menuItems_json__WEBPACK_IMPORTED_MODULE_2__?.Sellers?.subMenu?.map((menuItem, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    role: "menuitem",
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: menuItem?.href
  }, menuItem?.title)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "bgclr3",
    role: "menuitem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "menu-head",
    href: _configs_menuItems_json__WEBPACK_IMPORTED_MODULE_2__?.Contact?.href
  }, "Contact", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "triangle-bottom"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sub-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container bgclr3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    role: "menu"
  }, _configs_menuItems_json__WEBPACK_IMPORTED_MODULE_2__?.Contact?.subMenu?.map((menuItem, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    role: "menuitem",
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: menuItem?.href
  }, menuItem?.title)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "bgclr3",
    role: "menuitem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: _configs_menuItems_json__WEBPACK_IMPORTED_MODULE_2__?.Blog?.href
  }, "Blog")))))));
};
/* harmony default export */ __webpack_exports__.Z = (MenuTemplate);
MenuTemplate.propTypes = {
  displayPhone: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool)
};

/***/ }),

/***/ 2681:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _configs_menuItems_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2108);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_pageutil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9438);
/* harmony import */ var _modules_mauticForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2549);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9008);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7121);
/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_5__);







const MenuTemplateRP = ({
  formsets
}) => {
  const [displayMenu, setDisplayMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [navBarStyle, setNavBarStyle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    backgroundColor: "transparent"
  });
  const [currentPath, setCurrentPath] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const navBarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const handleScroll = () => {
    setNavBarStyle((0,_modules_pageutil__WEBPACK_IMPORTED_MODULE_2__/* .getNavBarStyle */ .th)());
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCurrentPath(window.location.pathname);
    (0,_modules_pageutil__WEBPACK_IMPORTED_MODULE_2__/* .initializeMenuInteractions */ .P2)();
    (0,_modules_mauticForm__WEBPACK_IMPORTED_MODULE_3__/* .setFormsets */ .Aw)(formsets);
    let isLoadMenu = (0,_modules_pageutil__WEBPACK_IMPORTED_MODULE_2__/* .loadMenu */ .CZ)();
    if (isLoadMenu) {
      setDisplayMenu(true);
      (0,_modules_pageutil__WEBPACK_IMPORTED_MODULE_2__/* .setNavBarRef */ .IG)(navBarRef);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((next_head__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "stylesheet",
    href: "css/components/MenuTemplate.css",
    onError: e => logResourceLoadError(e.target)
  })), displayMenu && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "menuTemplate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "headerMenu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mobile-menu bgclr3",
    role: "menubar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "mobile-menu-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-bars hamburgerIcon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    id: "navBar",
    className: "bgclr3",
    style: navBarStyle,
    ref: navBarRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "menu container rightMenu",
    role: "menubar"
  }, Object.keys(_configs_menuItems_json__WEBPACK_IMPORTED_MODULE_1__).map(key => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "bgclr3",
    style: {
      fontFamily: 'sans-serif'
    },
    role: "menuitem",
    key: key
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: _configs_menuItems_json__WEBPACK_IMPORTED_MODULE_1__[key]?.href,
    className: currentPath === _configs_menuItems_json__WEBPACK_IMPORTED_MODULE_1__[key]?.href ? "active" : ""
  }, key))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "bgclr3",
    style: {
      fontFamily: "sans-serif"
    },
    role: "menuitem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://traqr.reachpersona.com",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "login-button"
  }, "Login ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bi bi-box-arrow-up-right"
  }))))))));
};
/* harmony default export */ __webpack_exports__.Z = (MenuTemplateRP);
MenuTemplateRP.propTypes = {
  displayPhone: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool)
};

/***/ }),

/***/ 8408:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9008);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FooterComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3804);
/* harmony import */ var _EmbeddedForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7879);
/* harmony import */ var _modules_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(786);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_mauticForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2549);
/* harmony import */ var _modules_content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1440);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7311);
/* harmony import */ var _MenuTemplateRP__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2681);
/* harmony import */ var _BannerRP__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8060);
/* harmony import */ var _BackgroundVideo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7712);
/* harmony import */ var _configs_global_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4052);
/* harmony import */ var _MenuTemplate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1451);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5917);
"use client";
















function WebsitePage(props) {
  const {
    pageName,
    title,
    ogTags,
    bannerProps,
    phoneCTA,
    menu,
    enableGoogleOneTap,
    footerProps,
    mauticForm,
    pageContent,
    footerImage,
    customCSSFile,
    video,
    chatBot
  } = props;
  let chatBotDFAgent;
  if (chatBot.enableChatBot) {
    chatBotDFAgent = chatBot.chatbotDFAgent ? chatBot.chatbotDFAgent : _configs_global_json__WEBPACK_IMPORTED_MODULE_11__/* ["DEFAULT-CHATBOT-DF-AGENT"] */ .Wd;
  }
  const asideRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_modules_mauticForm__WEBPACK_IMPORTED_MODULE_6__/* .setReportPageName */ .Tp)(mauticForm.reportPageName);
  if (mauticForm.referralFormHeader) (0,_modules_mauticForm__WEBPACK_IMPORTED_MODULE_6__/* .setReferralFormHeader */ .IR)(mauticForm.referralFormHeader);
  let articleWidth = !mauticForm.formsets ? {
    width: "100%"
  } : {};
  let asideWidth = !mauticForm.formsets ? {
    width: "0px",
    display: "none"
  } : !pageContent ? {
    width: "100%"
  } : {};
  const content = Array.isArray(pageContent) ? pageContent?.map((element, index) => (0,_modules_content__WEBPACK_IMPORTED_MODULE_14__/* .createMarkup */ .K)({
    ...element,
    key: index
  })) : [];
  const parsedContent = content?.map(html_react_parser__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP);
  const setPageCampaignSource = () => {
    if (typeof setChatbotDFAgent === "function") {
      setChatbotDFAgent(chatBotDFAgent);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((next_head__WEBPACK_IMPORTED_MODULE_1___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    httpEquiv: "content-type",
    content: "text/html;charSet=utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge,chrome=1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "apple-itunes-app",
    content: "app-id=535886823"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:title",
    content: ogTags.og_title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:description",
    content: ogTags.og_description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:image",
    content: ogTags.og_image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:url",
    content: ogTags.og_url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    href: "css/sw/styles3bb8.css?v=AUcpKiC1BEGp1mp0rFd8QrbpJS68UXwJcjvhlicFcHQ1",
    rel: "stylesheet",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "stylesheet",
    href: "css/sw/t1.css",
    type: "text/css",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    href: "css/customStyle.css",
    rel: "stylesheet",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans:400,600",
    rel: "stylesheet",
    type: "text/css",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "stylesheet",
    href: "css/newui.css",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "stylesheet",
    href: "css/banner.css",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "stylesheet",
    href: "css/bootstrap.min.css",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "stylesheet",
    href: "css/fa.min.css",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "stylesheet",
    href: "css/templates/WebsitePage.css",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  }), video && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    href: "css/lp.css",
    rel: "stylesheet",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "stylesheet",
    href: "css/rp.css",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  }), chatBot.enableChatBot && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "stylesheet",
    href: "/css/chatbot.css",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  }), customCSSFile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    href: `css/pages/${pageName}.css`,
    rel: "stylesheet",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("script", {
    async: true,
    type: "text/javascript",
    src: "https://accounts.google.com/gsi/client",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
    src: "js/jquery-3.5.1.min.js",
    strategy: "beforeInteractive",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  }), chatBot.enableChatBot && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
    src: "/js/chatbot.js",
    onLoad: () => {
      setPageCampaignSource();
    },
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
    src: "/js/index.js",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
    src: "https://kit.fontawesome.com/c3c47df7d6.js",
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "page-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "content",
    className: "bgclr0"
  }, menu && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MenuTemplateRP__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    displayPhone: menu.displayPhone,
    formsets: mauticForm.formsets
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BannerRP__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    bannerProps: bannerProps,
    formsets: mauticForm.formsets
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "main-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "main wrapper clearfix bgclr6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
    className: "bgclr8",
    style: articleWidth
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "articlecntm",
    className: "articlecnt"
  }, video && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BackgroundVideo__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    video: video
  }), parsedContent && parsedContent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("aside", {
    style: asideWidth,
    className: "bgclr3",
    id: "aside",
    ref: asideRef
  }, mauticForm.formsets && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EmbeddedForm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    formSlotIDRef: asideRef,
    phoneCTA: phoneCTA,
    enableGoogleOneTap: enableGoogleOneTap,
    mauticForm: mauticForm
  })))), footerImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "wrapper clearfix bgclr8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: footerImage.src,
    width: "100%",
    alt: footerImage.alt,
    onError: e => (0,_modules_logger__WEBPACK_IMPORTED_MODULE_4__/* .logResourceLoadError */ .h)(e.target)
  }))), footerProps && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FooterComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    footerProps: footerProps
  })), chatBot.enableChatBot && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "chatContain"
  }));
}
/* harmony default export */ __webpack_exports__.Z = (WebsitePage);

/***/ }),

/***/ 3499:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: function() { return /* binding */ getBannerImageURL; },
/* harmony export */   v: function() { return /* binding */ getBannerBorderStyle; }
/* harmony export */ });
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8115);
/* harmony import */ var _configs_global_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4052);
/* harmony import */ var _mauticForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2549);
/* harmony import */ var _branded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9602);




let banner_image_url = _configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* ["DEFAULT-BANNER_URL"] */ .GU;
const getBannerImageURL = () => {
  let banner_image = banner_image_url;
  if ((0,_mauticForm__WEBPACK_IMPORTED_MODULE_2__/* .isCampaignValid */ .Uh)() && _branded__WEBPACK_IMPORTED_MODULE_3__/* .currentPageName */ .K && _tracker__WEBPACK_IMPORTED_MODULE_0__/* .utmCampaign */ .S8) {
    banner_image = _configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* ["DEFAULT-BANNER_IMG_PATH"] */ .ex + "c-" + _branded__WEBPACK_IMPORTED_MODULE_3__/* .currentPageName */ .K + "-" + _tracker__WEBPACK_IMPORTED_MODULE_0__/* .utmCampaign */ .S8 + "-banner.jpg";
  } else if (_branded__WEBPACK_IMPORTED_MODULE_3__/* .currentPageName */ .K) {
    banner_image = _configs_global_json__WEBPACK_IMPORTED_MODULE_1__/* ["DEFAULT-BANNER_IMG_PATH"] */ .ex + "p-" + _branded__WEBPACK_IMPORTED_MODULE_3__/* .currentPageName */ .K + "-banner.jpg";
  }
  return banner_image;
};
const getBannerBorderStyle = () => {
  let style = "";
  if ((0,_mauticForm__WEBPACK_IMPORTED_MODULE_2__/* .isCampaignValid */ .Uh)()) {
    style = "thick solid grey";
  }
  return style;
};

/***/ }),

/***/ 1440:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: function() { return /* binding */ createMarkup; }
/* harmony export */ });
function createMarkup(element) {
  const {
    type: tagName,
    attributes,
    content,
    children
  } = element;
  if (typeof tagName !== "string" && typeof attributes !== "object" && typeof children !== "object" && typeof content !== "string") {
    throw new Error("Invalid arguments. Provide a valid tag name and attributes object.");
  }
  const selfClosingTags = ["br", "hr", "img"];
  let attributesString = "";
  if (attributes) {
    attributesString = Object.entries(attributes).map(([key, value]) => {
      if (key === "style" && typeof value === "object") {
        const styleString = Object.entries(value).map(([styleKey, styleValue]) => `${styleKey.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${styleValue}`).join("; ");
        return `style="${styleString}"`;
      } else if (typeof value === "boolean") {
        return value ? key : "";
      } else {
        return `${key}="${value}"`;
      }
    }).filter(Boolean).join(" ");
  }

  // Handle self-closing tags
  if (selfClosingTags.includes(tagName)) {
    return `<${tagName}${attributesString ? ` ${attributesString}` : ""} />`;
  }
  const contentMarkup = content || "";
  const childrenMarkup = Array.isArray(children) ? children.map(createMarkup).join("") : "";
  return `<${tagName}${attributesString ? ` ${attributesString}` : ""}>${contentMarkup}${childrenMarkup}</${tagName}>`;
}

/***/ }),

/***/ 9438:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CZ: function() { return /* binding */ loadMenu; },
/* harmony export */   IG: function() { return /* binding */ setNavBarRef; },
/* harmony export */   KU: function() { return /* binding */ setHeaderContainerRef; },
/* harmony export */   P2: function() { return /* binding */ initializeMenuInteractions; },
/* harmony export */   th: function() { return /* binding */ getNavBarStyle; }
/* harmony export */ });
/* harmony import */ var _mauticForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2549);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5657);


let headerContainerRef;
let navBarRef;
const setHeaderContainerRef = newValue => {
  headerContainerRef = newValue;
};
const initializeMenuInteractions = async () => {
  // script to make menu and sub-menus work
  var t = $(".mobile-menu-button"),
    n = $(".menu");
  $(t).on("click", function (t) {
    t.preventDefault();
    n.slideToggle();
  });
  $(".menu > li > .menu-head").click(function (n) {
    window.innerWidth <= 768 && (n.preventDefault(), $(".sub-menu").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown());
  });
  var i = function () {
      return /ipad/i.test(navigator.userAgent);
    },
    r = function () {
      return /iphone/i.test(navigator.userAgent);
    },
    u = function () {
      return /ipod/i.test(navigator.userAgent);
    },
    f = u() || i() || r() ? "touchstart" : "click";
  $("body").bind(f, function (t) {
    $(t.target).closest("nav").length === 0 && $(t.target).closest(".mobile-menu").length === 0 && ($(".sub-menu").slideUp(), window.innerWidth < 768 && n.slideUp());
  });
  $("ul.menu > li").hover(function (n) {
    window.innerWidth > 768 && (n.preventDefault(), $(this).find(".sub-menu").slideDown(), $(this).children("a:first").removeClass("menu-head"), $(this).children("a:first").addClass("menu-head-over"));
  }, function (n) {
    window.innerWidth > 768 && (n.preventDefault(), $(".sub-menu").hide(), $(this).children("a:first").removeClass("menu-head-over"), $(this).children("a:first").addClass("menu-head"));
  });
  $(window).resize(function () {
    window.innerWidth >= 768 && n.removeAttr("style");
  });
};
const setNavBarRef = newValue => {
  navBarRef = newValue;
};
function getNavBarStyle() {
  let navBarStyle;
  if (headerContainerRef.current) {
    let header = headerContainerRef.current;
    if (navBarRef.current) {
      if (!(0,_utility__WEBPACK_IMPORTED_MODULE_1__/* .isInViewport */ .v4)(header)) {
        navBarStyle = {
          backgroundColor: "white",
          borderBottom: "1px solid #e0e0e0"
        };
      } else {
        navBarStyle = {
          backgroundColor: "transparent"
        };
      }
    }
  }
  return navBarStyle;
}
function loadMenu() {
  try {
    let isCampaignValidValue = (0,_mauticForm__WEBPACK_IMPORTED_MODULE_0__/* .isCampaignValid */ .Uh)();
    return !isCampaignValidValue;
  } catch (err) {
    console.log(err);
  }
}

/***/ }),

/***/ 2108:
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"Home":{"href":"/"},"TraQR":{"href":"/traqr"},"How It Works":{"href":"/how-it-works"},"Pricing":{"href":"/pricing"}}');

/***/ })

}]);