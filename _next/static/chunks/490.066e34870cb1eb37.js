"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[490],{

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return App;
  }
}));
const _interop_require_default = __webpack_require__(8754);
const _jsxruntime = __webpack_require__(5893);
const _react = /*#__PURE__*/_interop_require_default._(__webpack_require__(7294));
const _utils = __webpack_require__(8900);
/**
 * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
 * This allows for keeping state between navigation, custom error handling, injecting additional data.
 */
async function appGetInitialProps(param) {
  let {
    Component,
    ctx
  } = param;
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}
class App extends _react.default.Component {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/(0, _jsxruntime.jsx)(Component, {
      ...pageProps
    });
  }
}
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ })

}]);