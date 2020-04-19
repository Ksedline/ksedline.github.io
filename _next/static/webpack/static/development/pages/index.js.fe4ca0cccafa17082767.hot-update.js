webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layout/header.tsx":
/*!**************************************!*\
  !*** ./components/layout/header.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdi/react */ "./node_modules/@mdi/react/Icon.js");
/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdi_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
var _this = undefined,
    _jsxFileName = "/Users/ksedline/playground/next-portfolio/components/layout/header.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Header = function Header() {
  var currentYearOld = function currentYearOld() {
    var birthDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(1996, 0, 17, 3, 30));
    var now = moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date());
    return now.diff(birthDate, 'year');
  };

  return __jsx("header", {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "header__avatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "header__avatar-img",
    src: "https://hsto.org/getpro/moikrug/uploads/user/100/024/364/0/avatar/medium_b927fdb65bb090c8314f17074175b9ee.jpg",
    alt: "Avatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "header__description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "header__description-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "Shekhovtsov Kirill, ", currentYearOld(), " years old"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Frontend (Fullstack) Developer, TeamLead"), __jsx("div", {
    className: "header__icons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "header__icons-icon",
    title: "E-Mail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }), __jsx(_mdi_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    path: _mdi_js__WEBPACK_IMPORTED_MODULE_3__["mdiEmail"],
    size: 1.7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "header__icons-icon",
    title: "Telegram",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(_mdi_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    path: _mdi_js__WEBPACK_IMPORTED_MODULE_3__["mdiTelegram"],
    size: 1.7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "header__icons-icon",
    title: "Twitter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(_mdi_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    path: _mdi_js__WEBPACK_IMPORTED_MODULE_3__["mdiTwitter"],
    size: 1.7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "header__icons-icon",
    title: "Instagram",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(_mdi_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    path: _mdi_js__WEBPACK_IMPORTED_MODULE_3__["mdiInstagram"],
    size: 1.7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "header__icons-icon",
    title: "GitHub",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(_mdi_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    path: _mdi_js__WEBPACK_IMPORTED_MODULE_3__["mdiGithub"],
    size: 1.7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "header__icons-icon",
    title: "GitLab",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(_mdi_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    path: _mdi_js__WEBPACK_IMPORTED_MODULE_3__["mdiGitlab"],
    size: 1.7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "header__icons-icon",
    title: "BitBucket",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(_mdi_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    path: _mdi_js__WEBPACK_IMPORTED_MODULE_3__["mdiBitbucket"],
    size: 1.7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "header__icons-icon",
    title: "NPM",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx(_mdi_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    path: _mdi_js__WEBPACK_IMPORTED_MODULE_3__["mdiNpm"],
    size: 1.7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.fe4ca0cccafa17082767.hot-update.js.map