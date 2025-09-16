(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[140],{

/***/ 9270:
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
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./configs/global.json
var global = __webpack_require__(4052);
;// CONCATENATED MODULE: ./components/FooterComponent.jsx


const FooterComponent = ({
  footerProps
}) => {
  return /*#__PURE__*/react.createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/react.createElement("footer", {
    className: "footer wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    id: "contactinfo"
  }, /*#__PURE__*/react.createElement("div", {
    id: "disclosure"
  }, /*#__PURE__*/react.createElement("center", null, /*#__PURE__*/react.createElement("div", null, global/* PAGE_FOOTER-ADDRESS_LINE1 */.QA && global/* PAGE_FOOTER-ADDRESS_LINE1 */.QA), /*#__PURE__*/react.createElement("div", null, " ", global/* PAGE_FOOTER-ADDRESS_LINE2 */.KT && global/* PAGE_FOOTER-ADDRESS_LINE2 */.KT), /*#__PURE__*/react.createElement("div", null, " ", footerProps.displayEmail && /*#__PURE__*/react.createElement("a", {
    href: `mailto:${global/* DEFAULT-EMAIL */.jT}`
  }, global/* DEFAULT-EMAIL */.jT)), /*#__PURE__*/react.createElement("div", null, " ", footerProps.displayContactNumber && global/* DEFAULT-CONTACT_NUMBER */.cL))))));
};
/* harmony default export */ var components_FooterComponent = (FooterComponent);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./components/FormHeaderComponents/WelcomeMsg.jsx



const WelcomeMsg = ({
  alias
}) => {
  return alias && /*#__PURE__*/react.createElement("div", {
    className: "welcomeMessage"
  }, `${global/* FORM_HEADER-WELCOME_MSG */.dc} ${alias}`);
};
/* harmony default export */ var FormHeaderComponents_WelcomeMsg = (WelcomeMsg);
WelcomeMsg.propTypes = {
  alias: (prop_types_default()).string
};
// EXTERNAL MODULE: ./node_modules/html-react-parser/esm/index.mjs
var esm = __webpack_require__(7311);
;// CONCATENATED MODULE: ./components/FormHeaderComponents/FormHeader.jsx




const FormHeader = ({
  displayFormHeader,
  formHeader,
  cssClassName
}) => {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement((head_default()), null, /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/components/FormHeader.css",
    onError: e => logResourceLoadError(e.target)
  })), displayFormHeader && /*#__PURE__*/react.createElement("div", {
    className: `${cssClassName} formHeader`
  }, (0,esm/* default */.ZP)(formHeader)));
};
/* harmony default export */ var FormHeaderComponents_FormHeader = (FormHeader);
FormHeader.propTypes = {
  formHeader: (prop_types_default()).string
};
// EXTERNAL MODULE: ./modules/googleOauth.js + 1 modules
var googleOauth = __webpack_require__(7547);
;// CONCATENATED MODULE: ./components/FormHeaderComponents/GoogleSignInButton.jsx



const GoogleSignInButton = ({
  displayGSIButton
}) => {
  const googleSignInButton = (0,react.useRef)();
  (0,react.useEffect)(() => {
    (0,googleOauth/* setGSISlotRef */.Bf)(googleSignInButton);
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement((head_default()), null, /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/components/BackgroundVideo.css",
    onError: e => logResourceLoadError(e.target)
  })), displayGSIButton && /*#__PURE__*/react.createElement("div", {
    className: "googleSignInButton",
    ref: googleSignInButton
  }));
};
/* harmony default export */ var FormHeaderComponents_GoogleSignInButton = (GoogleSignInButton);
// EXTERNAL MODULE: ./modules/logger.js + 1 modules
var logger = __webpack_require__(786);
// EXTERNAL MODULE: ./messages/errorMessage.json
var errorMessage = __webpack_require__(2153);
;// CONCATENATED MODULE: ./components/FormHeaderComponents/PhoneCTAButton.jsx





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
          (0,logger/* logError */.H)(errorMessage/* MT_ERROR */.W);
        }
      });
    } else {
      let err = "mt method not found";
      (0,logger/* logError */.H)(err);
      console.log(err);
    }
  }
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement((head_default()), null, /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/components/PhoneCTAButton.css",
    onError: e => logResourceLoadError(e.target)
  })), phoneCTA.label && phoneCTA.href && /*#__PURE__*/react.createElement("p", {
    id: "cta",
    className: "cta"
  }, /*#__PURE__*/react.createElement("a", {
    className: "cta_button",
    href: phoneCTA.href,
    onClick: () => trackPhoneCTA(phoneCTA.href)
  }, global/* PHONE_CTA-LABEL_PREFIX */.ou, " ", phoneCTA.label, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-phone cta_icon"
  }))));
};
/* harmony default export */ var FormHeaderComponents_PhoneCTAButton = (PhoneCTAButton);
;// CONCATENATED MODULE: ./components/FormHeaderComponents/Divider.jsx



const Divider = ({
  displayDivider
}) => {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement((head_default()), null, /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/components/Divider.css",
    onError: e => logResourceLoadError(e.target)
  })), displayDivider && /*#__PURE__*/react.createElement("div", {
    className: "divider"
  }, global/* FORM_HEADER-DIVIDER_TEXT */.hr));
};
/* harmony default export */ var FormHeaderComponents_Divider = (Divider);
// EXTERNAL MODULE: ./modules/mauticForm.js
var modules_mauticForm = __webpack_require__(2549);
;// CONCATENATED MODULE: ./components/MauticForm.jsx



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
  (0,react.useEffect)(() => {
    const loadFormAndScript = async () => {
      if (enableGoogleOneTap === false) (0,googleOauth/* disableGoogleOneTap */.md)();
      (0,modules_mauticForm/* setFormHeaders */.ZU)(emailFormHeader, phoneFormHeader, noFormHeader);
      if (popupForm) (0,modules_mauticForm/* enablePopupForm */.Y5)(mauticForm.timeInterval, mauticForm.nTimes, mauticForm.zDuration, mauticForm.controlVideos);
      (0,modules_mauticForm/* setMauticForms */.CX)(formsets);
      await (0,modules_mauticForm/* loadForm */.Sn)(formSlotIDRef, readMore);
      setFormHeaderState({
        alias: modules_mauticForm/* alias */.bm,
        formHeader: modules_mauticForm/* formHeader */.Uq,
        displayDivider1: modules_mauticForm/* displayDivider1 */.$X,
        displayGSIButton: googleOauth/* displayGSI */.cn,
        displayDivider2: googleOauth/* displayGSI */.cn,
        displaySecondaryFormHeader: googleOauth/* displayGSI */.cn
      });
    };
    loadFormAndScript();
  }, []);
  return null;
};
/* harmony default export */ var components_MauticForm = (MauticForm);
;// CONCATENATED MODULE: ./components/EmbeddedForm.jsx









const EmbeddedForm = ({
  formSlotIDRef,
  enableGoogleOneTap,
  phoneCTA,
  mauticForm
}) => {
  const [formHeaderState, setFormHeaderState] = (0,react.useState)({
    alias: "",
    formHeader: "",
    displayDivider1: false,
    displayGSIButton: true,
    displayDivider2: false,
    displaySecondaryFormHeader: false
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(FormHeaderComponents_PhoneCTAButton, {
    phoneCTA: phoneCTA
  }), phoneCTA.label && phoneCTA.href && /*#__PURE__*/react.createElement(FormHeaderComponents_Divider, {
    displayDivider: formHeaderState.displayDivider1
  }), /*#__PURE__*/react.createElement(FormHeaderComponents_WelcomeMsg, {
    alias: formHeaderState.alias
  }), /*#__PURE__*/react.createElement(FormHeaderComponents_FormHeader, {
    displayFormHeader: formHeaderState.formHeader,
    formHeader: formHeaderState.formHeader,
    cssClassName: "formHeader"
  }), /*#__PURE__*/react.createElement(FormHeaderComponents_GoogleSignInButton, {
    displayGSIButton: formHeaderState.displayGSIButton
  }), /*#__PURE__*/react.createElement(FormHeaderComponents_Divider, {
    displayDivider: formHeaderState.displayDivider2
  }), /*#__PURE__*/react.createElement(FormHeaderComponents_FormHeader, {
    displayFormHeader: formHeaderState.displaySecondaryFormHeader,
    formHeader: global/* FORM_HEADER-SECONDARY_FORM_HEADER */.i0,
    cssClassName: "secondaryFormHeader"
  })), /*#__PURE__*/react.createElement(components_MauticForm, {
    popupForm: false,
    formSlotIDRef: formSlotIDRef,
    setFormHeaderState: setFormHeaderState,
    enableGoogleOneTap: enableGoogleOneTap,
    mauticForm: mauticForm
  }));
};
/* harmony default export */ var components_EmbeddedForm = (EmbeddedForm);
EmbeddedForm.propTypes = {
  formSlotIDRef: (prop_types_default()).object
};
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./modules/content.js
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
;// CONCATENATED MODULE: ./configs/menuItems.json
var menuItems_namespaceObject = /*#__PURE__*/JSON.parse('{"Home":{"href":"/"},"TraQR":{"href":"/traqr"},"How It Works":{"href":"/how-it-works"},"Pricing":{"href":"/pricing"}}');
// EXTERNAL MODULE: ./modules/utility.js + 1 modules
var utility = __webpack_require__(5657);
;// CONCATENATED MODULE: ./modules/pageutil.js


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
      if (!(0,utility/* isInViewport */.v4)(header)) {
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
    let isCampaignValidValue = (0,modules_mauticForm/* isCampaignValid */.Uh)();
    return !isCampaignValidValue;
  } catch (err) {
    console.log(err);
  }
}
// EXTERNAL MODULE: ./node_modules/bootstrap-icons/font/bootstrap-icons.css
var bootstrap_icons = __webpack_require__(7121);
;// CONCATENATED MODULE: ./components/MenuTemplateRP.jsx







const MenuTemplateRP = ({
  formsets
}) => {
  const [displayMenu, setDisplayMenu] = (0,react.useState)(true);
  const [navBarStyle, setNavBarStyle] = (0,react.useState)({
    backgroundColor: "transparent"
  });
  const [currentPath, setCurrentPath] = (0,react.useState)("");
  const navBarRef = (0,react.useRef)(null);
  const handleScroll = () => {
    setNavBarStyle(getNavBarStyle());
  };
  (0,react.useEffect)(() => {
    setCurrentPath(window.location.pathname);
    initializeMenuInteractions();
    (0,modules_mauticForm/* setFormsets */.Aw)(formsets);
    let isLoadMenu = loadMenu();
    if (isLoadMenu) {
      setDisplayMenu(true);
      setNavBarRef(navBarRef);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement((head_default()), null, /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/components/MenuTemplate.css",
    onError: e => logResourceLoadError(e.target)
  })), displayMenu && /*#__PURE__*/react.createElement("div", {
    id: "menuTemplate"
  }, /*#__PURE__*/react.createElement("div", {
    id: "headerMenu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mobile-menu bgclr3",
    role: "menubar"
  }, /*#__PURE__*/react.createElement("li", {
    className: "mobile-menu-button"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-bars hamburgerIcon"
  }))), /*#__PURE__*/react.createElement("nav", {
    id: "navBar",
    className: "bgclr3",
    style: navBarStyle,
    ref: navBarRef
  }, /*#__PURE__*/react.createElement("ul", {
    className: "menu container rightMenu",
    role: "menubar"
  }, Object.keys(menuItems_namespaceObject).map(key => /*#__PURE__*/react.createElement("li", {
    className: "bgclr3",
    style: {
      fontFamily: 'sans-serif'
    },
    role: "menuitem",
    key: key
  }, /*#__PURE__*/react.createElement("a", {
    href: menuItems_namespaceObject[key]?.href,
    className: currentPath === menuItems_namespaceObject[key]?.href ? "active" : ""
  }, key))), /*#__PURE__*/react.createElement("li", {
    className: "bgclr3",
    style: {
      fontFamily: "sans-serif"
    },
    role: "menuitem"
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://traqr.reachpersona.com",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "login-button"
  }, "Login ", /*#__PURE__*/react.createElement("i", {
    className: "bi bi-box-arrow-up-right"
  }))))))));
};
/* harmony default export */ var components_MenuTemplateRP = (MenuTemplateRP);
MenuTemplateRP.propTypes = {
  displayPhone: (prop_types_default()).bool
};
// EXTERNAL MODULE: ./modules/tracker.js
var tracker = __webpack_require__(8115);
// EXTERNAL MODULE: ./modules/branded.js
var branded = __webpack_require__(9602);
;// CONCATENATED MODULE: ./modules/banner.js




let banner_image_url = global/* DEFAULT-BANNER_URL */.GU;
const getBannerImageURL = () => {
  let banner_image = banner_image_url;
  if ((0,modules_mauticForm/* isCampaignValid */.Uh)() && branded/* currentPageName */.K && tracker/* utmCampaign */.S8) {
    banner_image = global/* DEFAULT-BANNER_IMG_PATH */.ex + "c-" + branded/* currentPageName */.K + "-" + tracker/* utmCampaign */.S8 + "-banner.jpg";
  } else if (branded/* currentPageName */.K) {
    banner_image = global/* DEFAULT-BANNER_IMG_PATH */.ex + "p-" + branded/* currentPageName */.K + "-banner.jpg";
  }
  return banner_image;
};
const getBannerBorderStyle = () => {
  let style = "";
  if ((0,modules_mauticForm/* isCampaignValid */.Uh)()) {
    style = "thick solid grey";
  }
  return style;
};
;// CONCATENATED MODULE: ./components/BannerRP.jsx








const BannerRP = ({
  bannerProps,
  formsets
}) => {
  let defaultImgURL = bannerProps.imageSrc ? bannerProps.imageSrc : global/* DEFAULT-BANNER_URL */.GU;
  const [bannerImage, setBannerImage] = (0,react.useState)(defaultImgURL);
  const [bannerImageBorder, setBannerImageBorder] = (0,react.useState)("");
  const headerContainerRef = (0,react.useRef)(null);
  const bannerStyle = bannerProps.imageSrc ? "banner" : "animatedBanner";
  (0,react.useEffect)(() => {
    if (!bannerProps.imageSrc) {
      (0,modules_mauticForm/* setFormsets */.Aw)(formsets);
      setBannerImage(getBannerImageURL());
      setBannerImageBorder(getBannerBorderStyle());
    }
    setHeaderContainerRef(headerContainerRef);
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement((head_default()), null, /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/components/BannerRP.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  })), /*#__PURE__*/react.createElement("div", {
    className: "headerContainer",
    ref: headerContainerRef,
    role: "banner"
  }, /*#__PURE__*/react.createElement("div", {
    className: "butterBarContainer"
  }), /*#__PURE__*/react.createElement("header", {
    className: "wrapper clearfix bgclr8 banner",
    style: bannerImageBorder ? {
      borderTop: `${bannerImageBorder}`
    } : null
  }, /*#__PURE__*/react.createElement("div", {
    className: "praveenImg"
  }, /*#__PURE__*/react.createElement("div", {
    className: "pp"
  }, bannerProps.imgOverlay && /*#__PURE__*/react.createElement("img", {
    src: global/* DEFAULT-PRAVEEN_IMG_SRC */.RV,
    width: "100%",
    alt: "praveen image",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  })), /*#__PURE__*/react.createElement("div", {
    className: "bannerTextContainer"
  }, bannerProps.text.map(header => /*#__PURE__*/react.createElement("h2", null, (0,esm/* default */.ZP)(header))))), /*#__PURE__*/react.createElement("img", {
    className: bannerStyle,
    src: bannerImage,
    alt: bannerProps.imageAlt,
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }))));
};
/* harmony default export */ var components_BannerRP = (BannerRP);
// EXTERNAL MODULE: ./modules/ytvideo.js
var ytvideo = __webpack_require__(1165);
;// CONCATENATED MODULE: ./components/BackgroundVideo.jsx




function BackgroundVideo({
  video
}) {
  const [videoActionButtonLabel, setVideoActionButtonLabel] = (0,react.useState)("Play Video");
  const [videoUrl, setVideoUrl] = (0,react.useState)("");
  const bgVideoRef = (0,react.useRef)(null);
  const video1Ref = (0,react.useRef)(null);
  const playSoundRef = (0,react.useRef)(null);
  const handleVideoActionButtonClick = () => {
    setVideoActionButtonLabel((0,ytvideo/* handlePlaySoundButtonClick */.TT)(videoActionButtonLabel));
  };
  (0,react.useEffect)(() => {
    setVideoUrl((0,ytvideo/* getYTBackgroundVideoUrl */._e)(video));
  }, []);
  (0,react.useEffect)(() => {
    (0,ytvideo/* setBackgroundVideoElementReferences */.fO)(bgVideoRef, video1Ref, playSoundRef, setVideoActionButtonLabel);
    (0,ytvideo/* loadYTIframePlayerAPI */.Hj)();
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement((head_default()), null, /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/components/BackgroundVideo.css",
    onError: e => logResourceLoadError(e.target)
  })), /*#__PURE__*/react.createElement("div", {
    id: "bgVideo",
    ref: bgVideoRef,
    className: "bgVideo"
  }, /*#__PURE__*/react.createElement("iframe", {
    id: "video1",
    className: "video1",
    ref: video1Ref,
    frameBorder: "0",
    allow: "autoplay; fullscreen",
    src: videoUrl
  }), /*#__PURE__*/react.createElement("div", {
    className: "controlButtonContainer"
  }, /*#__PURE__*/react.createElement("a", {
    id: "playSound",
    ref: playSoundRef,
    onClick: handleVideoActionButtonClick
  }, videoActionButtonLabel))));
}
/* harmony default export */ var components_BackgroundVideo = (BackgroundVideo);
BackgroundVideo.propTypes = {
  videoID: (prop_types_default()).string.isRequired
};
;// CONCATENATED MODULE: ./components/MenuTemplate.jsx







const MenuTemplate = ({
  displayPhone,
  formsets
}) => {
  const [displayMenu, setDisplayMenu] = (0,react.useState)(true);
  const [navBarStyle, setNavBarStyle] = (0,react.useState)({
    backgroundColor: "transparent"
  });
  const navBarRef = (0,react.useRef)(null);
  const handleScroll = () => {
    setNavBarStyle(getNavBarStyle());
  };
  (0,react.useEffect)(() => {
    (0,modules_mauticForm/* setFormsets */.Aw)(formsets);
    initializeMenuInteractions();
    let isLoadMenu = loadMenu();
    if (isLoadMenu) {
      setDisplayMenu(true);
      setNavBarRef(navBarRef);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement((head_default()), null, /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/components/MenuTemplate.css",
    onError: e => logResourceLoadError(e.target)
  })), displayMenu && /*#__PURE__*/react.createElement("div", {
    id: "menuTemplate"
  }, /*#__PURE__*/react.createElement("div", {
    id: "headerMenu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mobile-menu bgclr3",
    role: "menubar"
  }, /*#__PURE__*/react.createElement("li", {
    className: "leftMenu"
  }, /*#__PURE__*/react.createElement("a", {
    target: "_blank",
    href: `mailto:${global/* DEFAULT-EMAIL */.jT}`,
    rel: "noreferrer"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-envelope icon"
  }))), displayPhone && /*#__PURE__*/react.createElement("li", {
    className: "leftMenu w-phone"
  }, /*#__PURE__*/react.createElement("a", {
    href: `tel:${global/* DEFAULT-CONTACT_NUMBER */.cL}`
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-phone icon"
  }))), /*#__PURE__*/react.createElement("li", {
    className: "mobile-menu-button"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-bars hamburgerIcon"
  }))), /*#__PURE__*/react.createElement("nav", {
    id: "navBar",
    className: "bgclr3",
    style: navBarStyle,
    ref: navBarRef
  }, /*#__PURE__*/react.createElement("ul", {
    className: "leftMenu"
  }, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: `mailto:${global/* DEFAULT-EMAIL */.jT}`
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-envelope icon"
  }), " ", /*#__PURE__*/react.createElement("span", {
    className: "aText"
  }, "Email"))), displayPhone && /*#__PURE__*/react.createElement("li", {
    className: "w-phone"
  }, /*#__PURE__*/react.createElement("a", {
    href: `tel:${global/* DEFAULT-CONTACT_NUMBER */.cL}`
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-phone icon"
  }), " ", /*#__PURE__*/react.createElement("span", {
    className: "aText"
  }, global/* DEFAULT-CONTACT_NUMBER */.cL)))), /*#__PURE__*/react.createElement("ul", {
    className: "menu container rightMenu",
    role: "menubar"
  }, /*#__PURE__*/react.createElement("li", {
    className: "bgclr3",
    role: "menuitem"
  }, /*#__PURE__*/react.createElement("a", {
    href: menuItems_namespaceObject?.Home?.href
  }, "HOME")), /*#__PURE__*/react.createElement("li", {
    className: "bgclr3",
    role: "menuitem"
  }, /*#__PURE__*/react.createElement("a", {
    className: "menu-head",
    href: menuItems_namespaceObject?.MORE?.href
  }, "MORE", /*#__PURE__*/react.createElement("span", {
    className: "triangle-bottom"
  })), /*#__PURE__*/react.createElement("div", {
    className: "sub-menu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container bgclr3"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("ul", {
    role: "menu"
  }, menuItems_namespaceObject?.MORE?.subMenu?.map((menuItem, index) => /*#__PURE__*/react.createElement("li", {
    role: "menuitem",
    key: index
  }, /*#__PURE__*/react.createElement("a", {
    href: menuItem?.href
  }, menuItem.title)))))))), /*#__PURE__*/react.createElement("li", {
    className: "bgclr3",
    role: "menuitem"
  }, /*#__PURE__*/react.createElement("a", {
    className: "menu-head",
    href: menuItems_namespaceObject?.Buyers?.href
  }, "Buyers", /*#__PURE__*/react.createElement("span", {
    className: "triangle-bottom"
  })), /*#__PURE__*/react.createElement("div", {
    className: "sub-menu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container bgclr3"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("ul", {
    role: "menu"
  }, menuItems_namespaceObject?.Buyers?.subMenu?.map((menuItem, index) => /*#__PURE__*/react.createElement("li", {
    role: "menuitem",
    key: index
  }, /*#__PURE__*/react.createElement("a", {
    href: menuItem?.href
  }, menuItem?.title)))))))), /*#__PURE__*/react.createElement("li", {
    className: "bgclr3",
    role: "menuitem"
  }, /*#__PURE__*/react.createElement("a", {
    className: "menu-head",
    href: menuItems_namespaceObject?.Sellers?.href
  }, "Sellers", /*#__PURE__*/react.createElement("span", {
    className: "triangle-bottom"
  })), /*#__PURE__*/react.createElement("div", {
    className: "sub-menu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container bgclr3"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("ul", {
    role: "menu"
  }, menuItems_namespaceObject?.Sellers?.subMenu?.map((menuItem, index) => /*#__PURE__*/react.createElement("li", {
    role: "menuitem",
    key: index
  }, /*#__PURE__*/react.createElement("a", {
    href: menuItem?.href
  }, menuItem?.title)))))))), /*#__PURE__*/react.createElement("li", {
    className: "bgclr3",
    role: "menuitem"
  }, /*#__PURE__*/react.createElement("a", {
    className: "menu-head",
    href: menuItems_namespaceObject?.Contact?.href
  }, "Contact", /*#__PURE__*/react.createElement("span", {
    className: "triangle-bottom"
  })), /*#__PURE__*/react.createElement("div", {
    className: "sub-menu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container bgclr3"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("ul", {
    role: "menu"
  }, menuItems_namespaceObject?.Contact?.subMenu?.map((menuItem, index) => /*#__PURE__*/react.createElement("li", {
    role: "menuitem",
    key: index
  }, /*#__PURE__*/react.createElement("a", {
    href: menuItem?.href
  }, menuItem?.title)))))))), /*#__PURE__*/react.createElement("li", {
    className: "bgclr3",
    role: "menuitem"
  }, /*#__PURE__*/react.createElement("a", {
    href: menuItems_namespaceObject?.Blog?.href
  }, "Blog")))))));
};
/* harmony default export */ var components_MenuTemplate = (MenuTemplate);
MenuTemplate.propTypes = {
  displayPhone: (prop_types_default()).bool
};
;// CONCATENATED MODULE: ./components/Banner.jsx








const Banner = ({
  bannerProps,
  formsets
}) => {
  let defaultImgURL = bannerProps.imageSrc ? bannerProps.imageSrc : global/* DEFAULT-BANNER_URL */.GU;
  const [bannerImage, setBannerImage] = (0,react.useState)(defaultImgURL);
  const [bannerImageBorder, setBannerImageBorder] = (0,react.useState)("");
  const headerContainerRef = (0,react.useRef)(null);
  const bannerStyle = bannerProps.imageSrc ? "banner" : "animatedBanner";
  (0,react.useEffect)(() => {
    if (!bannerProps.imageSrc) {
      (0,modules_mauticForm/* setFormsets */.Aw)(formsets);
      setBannerImage(getBannerImageURL());
      setBannerImageBorder(getBannerBorderStyle());
    }
    setHeaderContainerRef(headerContainerRef);
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement((head_default()), null, /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/components/Banner.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  })), /*#__PURE__*/react.createElement("div", {
    className: "header-container",
    ref: headerContainerRef,
    role: "banner"
  }, /*#__PURE__*/react.createElement("div", {
    className: "butterBarContainer"
  }), /*#__PURE__*/react.createElement("header", {
    className: "wrapper clearfix bgclr8",
    style: bannerImageBorder ? {
      borderTop: `${bannerImageBorder}`
    } : null
  }, /*#__PURE__*/react.createElement("div", {
    className: "praveenImg"
  }, /*#__PURE__*/react.createElement("div", {
    id: "pp",
    className: "pp"
  }, bannerProps.imgOverlay && /*#__PURE__*/react.createElement("img", {
    src: global/* DEFAULT-PRAVEEN_IMG_SRC */.RV,
    width: "100%",
    alt: "praveen image",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  })), /*#__PURE__*/react.createElement("div", {
    className: "bannerTextContainer"
  }, /*#__PURE__*/react.createElement("h1", {
    className: "usp"
  }, /*#__PURE__*/react.createElement("div", null, (0,esm/* default */.ZP)(bannerProps.text))))), /*#__PURE__*/react.createElement("img", {
    className: bannerStyle,
    src: bannerImage,
    alt: bannerProps.imageAlt,
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }))));
};
/* harmony default export */ var components_Banner = (Banner);
;// CONCATENATED MODULE: ./components/templates/WebsitePage.jsx
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
    chatBotDFAgent = chatBot.chatbotDFAgent ? chatBot.chatbotDFAgent : global/* DEFAULT-CHATBOT-DF-AGENT */.Wd;
  }
  const asideRef = (0,react.useRef)(null);
  (0,modules_mauticForm/* setReportPageName */.Tp)(mauticForm.reportPageName);
  if (mauticForm.referralFormHeader) (0,modules_mauticForm/* setReferralFormHeader */.IR)(mauticForm.referralFormHeader);
  let articleWidth = !mauticForm.formsets ? {
    width: "100%"
  } : {};
  let asideWidth = !mauticForm.formsets ? {
    width: "0px",
    display: "none"
  } : !pageContent ? {
    width: "100%"
  } : {};
  const content = Array.isArray(pageContent) ? pageContent?.map((element, index) => createMarkup({
    ...element,
    key: index
  })) : [];
  const parsedContent = content?.map(esm/* default */.ZP);
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
    href: "css/templates/WebsitePage.css",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), video && /*#__PURE__*/react.createElement("link", {
    href: "css/lp.css",
    rel: "stylesheet",
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }), /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    href: "css/rp.css",
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
    async: true,
    type: "text/javascript",
    src: "https://accounts.google.com/gsi/client",
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
  }, menu && /*#__PURE__*/react.createElement(components_MenuTemplateRP, {
    displayPhone: menu.displayPhone,
    formsets: mauticForm.formsets
  }), /*#__PURE__*/react.createElement(components_BannerRP, {
    bannerProps: bannerProps,
    formsets: mauticForm.formsets
  }), /*#__PURE__*/react.createElement("div", {
    className: "main-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "main wrapper clearfix bgclr6"
  }, /*#__PURE__*/react.createElement("article", {
    className: "bgclr8",
    style: articleWidth
  }, /*#__PURE__*/react.createElement("div", {
    id: "articlecntm",
    className: "articlecnt"
  }, video && /*#__PURE__*/react.createElement(components_BackgroundVideo, {
    video: video
  }), parsedContent && parsedContent)), /*#__PURE__*/react.createElement("aside", {
    style: asideWidth,
    className: "bgclr3",
    id: "aside",
    ref: asideRef
  }, mauticForm.formsets && /*#__PURE__*/react.createElement(components_EmbeddedForm, {
    formSlotIDRef: asideRef,
    phoneCTA: phoneCTA,
    enableGoogleOneTap: enableGoogleOneTap,
    mauticForm: mauticForm
  })))), footerImage && /*#__PURE__*/react.createElement("div", {
    class: "wrapper clearfix bgclr8"
  }, /*#__PURE__*/react.createElement("img", {
    src: footerImage.src,
    width: "100%",
    alt: footerImage.alt,
    onError: e => (0,logger/* logResourceLoadError */.h)(e.target)
  }))), footerProps && /*#__PURE__*/react.createElement(components_FooterComponent, {
    footerProps: footerProps
  })), chatBot.enableChatBot && /*#__PURE__*/react.createElement("div", {
    id: "chatContain"
  }));
}
/* harmony default export */ var templates_WebsitePage = (WebsitePage);
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
  }, "x"), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(FormHeaderComponents_WelcomeMsg, {
    alias: formHeaderState.alias
  }), /*#__PURE__*/react.createElement(FormHeaderComponents_FormHeader, {
    displayFormHeader: formHeaderState.formHeader,
    formHeader: formHeaderState.formHeader,
    cssClassName: "formHeader"
  }), /*#__PURE__*/react.createElement(FormHeaderComponents_GoogleSignInButton, {
    displayGSIButton: formHeaderState.displayGSIButton
  }), /*#__PURE__*/react.createElement(FormHeaderComponents_Divider, {
    displayDivider: formHeaderState.displayDivider2
  }), /*#__PURE__*/react.createElement(FormHeaderComponents_FormHeader, {
    displayFormHeader: formHeaderState.displaySecondaryFormHeader,
    formHeader: global/* FORM_HEADER-SECONDARY_FORM_HEADER */.i0,
    cssClassName: "secondaryFormHeader"
  })), /*#__PURE__*/react.createElement(components_MauticForm, {
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
  const beforeEmailSubmitted = beforeEmailSubmittedContent?.map((element, index) => createMarkup({
    ...element,
    key: index
  }));
  const afterEmailSubmitted = afterEmailSubmittedContent?.map((element, index) => createMarkup({
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
  }), menu && /*#__PURE__*/react.createElement(components_MenuTemplate, {
    displayPhone: menu.displayPhone,
    formsets: mauticForm.formsets
  }), /*#__PURE__*/react.createElement("div", {
    id: "page-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    id: "content",
    className: "bgclr0"
  }, /*#__PURE__*/react.createElement(components_Banner, {
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
  }, "Read More")), emailSubmitted && parsedAfterEmailSubmittedContent)))), /*#__PURE__*/react.createElement(components_FooterComponent, {
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
  }, "x"), /*#__PURE__*/react.createElement(FormHeaderComponents_FormHeader, {
    displayFormHeader: true,
    cssClassName: "formHeader",
    formHeader: formHeader
  }))));
};
/* harmony default export */ var components_FeedBackForm = (FeedBackForm);
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
  }), /*#__PURE__*/react.createElement(components_BackgroundVideo, {
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
  }, /*#__PURE__*/react.createElement(components_EmbeddedForm, {
    formSlotIDRef: asideRef,
    enableGoogleOneTap: enableGoogleOneTap,
    phoneCTA: phoneCTA,
    mauticForm: mauticForm
  })))), unsubscribeProps && /*#__PURE__*/react.createElement(components_FeedBackForm, {
    unsubscribeProps: unsubscribeProps
  }));
};
/* harmony default export */ var templates_AletterLandingPage = (AletterLandingPage);
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
  }), /*#__PURE__*/react.createElement(components_BackgroundVideo, {
    video: video
  }), /*#__PURE__*/react.createElement(FormHeaderComponents_PhoneCTAButton, {
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
  }), /*#__PURE__*/react.createElement(components_BackgroundVideo, {
    video: video
  }), /*#__PURE__*/react.createElement("div", {
    id: "mForm",
    className: "container"
  }, /*#__PURE__*/react.createElement(FormHeaderComponents_PhoneCTAButton, {
    phoneCTA: phoneCTA
  }), /*#__PURE__*/react.createElement(FormHeaderComponents_Divider, {
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
  const content = Array.isArray(pageContent) ? pageContent?.map((element, index) => createMarkup({
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
  }, menu && /*#__PURE__*/react.createElement(components_MenuTemplateRP, {
    menu: menu
  }), bannerText && /*#__PURE__*/react.createElement(components_TextBanner, {
    bannerText: bannerText
  }), bannerProps && /*#__PURE__*/react.createElement(components_BannerRP, {
    bannerProps: bannerProps,
    formsets: mauticForm.formsets
  }), video && /*#__PURE__*/react.createElement(components_BackgroundVideo, {
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
  }, /*#__PURE__*/react.createElement(components_EmbeddedForm, {
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
  }, menu && /*#__PURE__*/react.createElement(components_MenuTemplateRP, {
    displayPhone: menu.displayPhone
  }), /*#__PURE__*/react.createElement(components_BannerRP, {
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
  return /*#__PURE__*/react.createElement(react.Fragment, null, props.pageType == "WebsitePage" && /*#__PURE__*/react.createElement(templates_WebsitePage, props), props.pageType == "ReportPage" && /*#__PURE__*/react.createElement(templates_ReportPage, props), props.pageType == "AletterLandingPage" && /*#__PURE__*/react.createElement(templates_AletterLandingPage, props), props.pageType == "FestivalPage" && /*#__PURE__*/react.createElement(templates_FestivalPage, props), props.pageType == "HomewardBoundLandingPage" && /*#__PURE__*/react.createElement(templates_HomewardBoundLandingPage, props), props.pageType == "GenericPage" && /*#__PURE__*/react.createElement(templates_GenericPage, props), props.pageType == "PricingPage" && /*#__PURE__*/react.createElement(PricingPage, props));
}
var __N_SSG = true;
/* harmony default export */ var _websitePageName_ = (BrandedWebsitePage);

/***/ }),

/***/ 4795:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/[websitePageName]",
      function () {
        return __webpack_require__(9270);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [416,888,774,179], function() { return __webpack_exec__(4795); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);