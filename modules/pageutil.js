import { isCampaignValid } from "./mauticForm";
import { isInViewport } from "./utility";

let headerContainerRef;
let navBarRef;

export const setHeaderContainerRef = (newValue) => {
  headerContainerRef = newValue;
};
export const initializeMenuInteractions = async () => {
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
  $("ul.menu > li").hover(
    function (n) {
      window.innerWidth > 768 && (n.preventDefault(), $(this).find(".sub-menu").slideDown(), $(this).children("a:first").removeClass("menu-head"), $(this).children("a:first").addClass("menu-head-over"));
    },
    function (n) {
      window.innerWidth > 768 && (n.preventDefault(), $(".sub-menu").hide(), $(this).children("a:first").removeClass("menu-head-over"), $(this).children("a:first").addClass("menu-head"));
    }
  );
  $(window).resize(function () {
    window.innerWidth >= 768 && n.removeAttr("style");
  });
};

export const setNavBarRef = (newValue) => {
  navBarRef = newValue;
};

export function getNavBarStyle() {
  let navBarStyle;
  if (headerContainerRef.current) {
    let header = headerContainerRef.current;
    if (navBarRef.current) {
      if (!isInViewport(header)) {
        navBarStyle = { backgroundColor: "white", borderBottom: "1px solid #e0e0e0" };
      } else {
        navBarStyle = { backgroundColor: "transparent" };
      }
    }
  }
  return navBarStyle;
}

export function loadMenu() {
  try {
    let isCampaignValidValue = isCampaignValid();
    return !isCampaignValidValue;
  } catch (err) {
    console.log(err);
  }
}
