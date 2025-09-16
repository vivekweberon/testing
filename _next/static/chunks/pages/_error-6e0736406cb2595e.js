(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[820,537],{

/***/ 8537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return Error;
  }
}));
const _interop_require_default = __webpack_require__(8754);
const _jsxruntime = __webpack_require__(5893);
const _react = /*#__PURE__*/_interop_require_default._(__webpack_require__(7294));
const _head = /*#__PURE__*/_interop_require_default._(__webpack_require__(4394));
const statusCodes = {
  400: "Bad Request",
  404: "This page could not be found",
  405: "Method Not Allowed",
  500: "Internal Server Error"
};
function _getInitialProps(param) {
  let {
    res,
    err
  } = param;
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
const styles = {
  error: {
    // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
    fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
    height: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  desc: {
    lineHeight: "48px"
  },
  h1: {
    display: "inline-block",
    margin: "0 20px 0 0",
    paddingRight: 23,
    fontSize: 24,
    fontWeight: 500,
    verticalAlign: "top"
  },
  h2: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "28px"
  },
  wrap: {
    display: "inline-block"
  }
};
class Error extends _react.default.Component {
  render() {
    const {
      statusCode,
      withDarkMode = true
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || "An unexpected error has occurred";
    return /*#__PURE__*/(0, _jsxruntime.jsxs)("div", {
      style: styles.error,
      children: [/*#__PURE__*/(0, _jsxruntime.jsx)(_head.default, {
        children: /*#__PURE__*/(0, _jsxruntime.jsx)("title", {
          children: statusCode ? statusCode + ": " + title : "Application error: a client-side exception has occurred"
        })
      }), /*#__PURE__*/(0, _jsxruntime.jsxs)("div", {
        style: styles.desc,
        children: [/*#__PURE__*/(0, _jsxruntime.jsx)("style", {
          dangerouslySetInnerHTML: {
            /* CSS minified from
            body { margin: 0; color: #000; background: #fff; }
            .next-error-h1 {
            border-right: 1px solid rgba(0, 0, 0, .3);
            }
            ${
            withDarkMode
            ? `@media (prefers-color-scheme: dark) {
            body { color: #fff; background: #000; }
            .next-error-h1 {
            border-right: 1px solid rgba(255, 255, 255, .3);
            }
            }`
            : ''
            }
            */
            __html: "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}" + (withDarkMode ? "@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}" : "")
          }
        }), statusCode ? /*#__PURE__*/(0, _jsxruntime.jsx)("h1", {
          className: "next-error-h1",
          style: styles.h1,
          children: statusCode
        }) : null, /*#__PURE__*/(0, _jsxruntime.jsx)("div", {
          style: styles.wrap,
          children: /*#__PURE__*/(0, _jsxruntime.jsxs)("h2", {
            style: styles.h2,
            children: [this.props.title || statusCode ? title : /*#__PURE__*/(0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
              children: "Application error: a client-side exception has occurred (see the browser console for more information)"
            }), "."]
          })
        })]
      })]
    });
  }
}
Error.displayName = "ErrorPage";
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 8767:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "AmpStateContext", ({
  enumerable: true,
  get: function () {
    return AmpStateContext;
  }
}));
const _interop_require_default = __webpack_require__(8754);
const _react = /*#__PURE__*/_interop_require_default._(__webpack_require__(7294));
const AmpStateContext = _react.default.createContext({});
if (false) {}

/***/ }),

/***/ 1057:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "isInAmpMode", ({
  enumerable: true,
  get: function () {
    return isInAmpMode;
  }
}));
function isInAmpMode(param) {
  let {
    ampFirst = false,
    hybrid = false,
    hasQuery = false
  } = param === void 0 ? {} : param;
  return ampFirst || hybrid && hasQuery;
}

/***/ }),

/***/ 4394:
/***/ (function(module, exports, __webpack_require__) {

"use client";
"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
0 && (0);
function _export(target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: true,
    get: all[name]
  });
}
_export(exports, {
  default: function () {
    return _default;
  },
  defaultHead: function () {
    return defaultHead;
  }
});
const _interop_require_default = __webpack_require__(8754);
const _interop_require_wildcard = __webpack_require__(1757);
const _jsxruntime = __webpack_require__(5893);
const _react = /*#__PURE__*/_interop_require_wildcard._(__webpack_require__(7294));
const _sideeffect = /*#__PURE__*/_interop_require_default._(__webpack_require__(5562));
const _ampcontextsharedruntime = __webpack_require__(8767);
const _headmanagercontextsharedruntime = __webpack_require__(4376);
const _ampmode = __webpack_require__(1057);
const _warnonce = __webpack_require__(3678);
function defaultHead(inAmpMode) {
  if (inAmpMode === void 0) inAmpMode = false;
  const head = [/*#__PURE__*/(0, _jsxruntime.jsx)("meta", {
    charSet: "utf-8"
  })];
  if (!inAmpMode) {
    head.push( /*#__PURE__*/(0, _jsxruntime.jsx)("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }
  return head;
}
function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === "string" || typeof child === "number") {
    return list;
  }
  // Adds support for React.Fragment
  if (child.type === _react.default.Fragment) {
    return list.concat(
    // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
    _react.default.Children.toArray(child.props.children).reduce(
    // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
    (fragmentList, fragmentChild) => {
      if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
        return fragmentList;
      }
      return fragmentList.concat(fragmentChild);
    }, []));
  }
  return list.concat(child);
}
const METATYPES = ["name", "httpEquiv", "charSet", "itemProp"];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/
function unique() {
  const keys = new Set();
  const tags = new Set();
  const metaTypes = new Set();
  const metaCategories = {};
  return h => {
    let isUnique = true;
    let hasKey = false;
    if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
      hasKey = true;
      const key = h.key.slice(h.key.indexOf("$") + 1);
      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    }
    // eslint-disable-next-line default-case
    switch (h.type) {
      case "title":
      case "base":
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }
        break;
      case "meta":
        for (let i = 0, len = METATYPES.length; i < len; i++) {
          const metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;
          if (metatype === "charSet") {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            const category = h.props[metatype];
            const categories = metaCategories[metatype] || new Set();
            if ((metatype !== "name" || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }
        break;
    }
    return isUnique;
  };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */
function reduceComponents(headChildrenElements, props) {
  const {
    inAmpMode
  } = props;
  return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i) => {
    const key = c.key || i;
    if ( true && !inAmpMode) {
      if (c.type === "link" && c.props["href"] &&
      // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
      ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(url => c.props["href"].startsWith(url))) {
        const newProps = {
          ...(c.props || {})
        };
        newProps["data-href"] = newProps["href"];
        newProps["href"] = undefined;
        // Add this attribute to make it easy to identify optimized tags
        newProps["data-optimized-fonts"] = true;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      }
    }
    if (false) {}
    return /*#__PURE__*/_react.default.cloneElement(c, {
      key
    });
  });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */
function Head(param) {
  let {
    children
  } = param;
  const ampState = (0, _react.useContext)(_ampcontextsharedruntime.AmpStateContext);
  const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
  return /*#__PURE__*/(0, _jsxruntime.jsx)(_sideeffect.default, {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _ampmode.isInAmpMode)(ampState),
    children: children
  });
}
const _default = Head;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 5562:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return SideEffect;
  }
}));
const _react = __webpack_require__(7294);
const isServer = false;
const useClientOnlyLayoutEffect = isServer ? () => {} : _react.useLayoutEffect;
const useClientOnlyEffect = isServer ? () => {} : _react.useEffect;
function SideEffect(props) {
  const {
    headManager,
    reduceComponentsToState
  } = props;
  function emitChange() {
    if (headManager && headManager.mountedInstances) {
      const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
      headManager.updateHead(reduceComponentsToState(headElements, props));
    }
  }
  if (isServer) {
    var _headManager_mountedInstances;
    headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
    emitChange();
  }
  useClientOnlyLayoutEffect(() => {
    var _headManager_mountedInstances;
    headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
    return () => {
      var _headManager_mountedInstances;
      headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.delete(props.children);
    };
  });
  // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
  // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
  // being rendered, we only trigger the method from the last one.
  // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
  // singleton in the layout effect pass, and actually trigger it in the effect pass.
  useClientOnlyLayoutEffect(() => {
    if (headManager) {
      headManager._pendingUpdate = emitChange;
    }
    return () => {
      if (headManager) {
        headManager._pendingUpdate = emitChange;
      }
    };
  });
  useClientOnlyEffect(() => {
    if (headManager && headManager._pendingUpdate) {
      headManager._pendingUpdate();
      headManager._pendingUpdate = null;
    }
    return () => {
      if (headManager && headManager._pendingUpdate) {
        headManager._pendingUpdate();
        headManager._pendingUpdate = null;
      }
    };
  });
  return null;
}

/***/ }),

/***/ 3678:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "warnOnce", ({
  enumerable: true,
  get: function () {
    return warnOnce;
  }
}));
let warnOnce = _ => {};
if (false) {}

/***/ }),

/***/ 1981:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(8537);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [888,774,179], function() { return __webpack_exec__(1981); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);