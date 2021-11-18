"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Styles_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(212);




const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;
    font-size: 1.5rem;
    
  }

  ul {
    list-style: none;
  }

  a {
    color: ${_src_Styles_Colors__WEBPACK_IMPORTED_MODULE_2__/* .BlackColor */ .SK};
    text-decoration: none;
  }

  img {
    width: 100%;
    display: block;
  }

  p {
    color: ${_src_Styles_Colors__WEBPACK_IMPORTED_MODULE_2__/* .GreyBlack */ .dy};
  }
`;
const theme = {
    colors: {
        primary: '#0070f3'
    }
};
function App({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalStyle, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
                theme: theme,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    }));
};


/***/ }),

/***/ 212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SK": () => (/* binding */ BlackColor),
/* harmony export */   "UB": () => (/* binding */ SuperBlackColor),
/* harmony export */   "JT": () => (/* binding */ GreyColor),
/* harmony export */   "dy": () => (/* binding */ GreyBlack),
/* harmony export */   "Lw": () => (/* binding */ Purple)
/* harmony export */ });
const BlackColor = '#141414';
const SuperBlackColor = '#000000';
const GreyColor = '#F5F5F5';
const GreyBlack = '#525050';
const Purple = '#A6867C';


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(510));
module.exports = __webpack_exports__;

})();