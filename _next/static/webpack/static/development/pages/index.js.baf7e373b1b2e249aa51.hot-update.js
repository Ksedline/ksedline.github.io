webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/three/index.tsx":
/*!************************************!*\
  !*** ./components/three/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
var _jsxFileName = "/Users/ksedline/playground/next-portfolio/components/three/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ThreeComponent = function ThreeComponent() {
  var camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](70, 300 / 300, 0.01, 10);
  var scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
  var geometry = new three__WEBPACK_IMPORTED_MODULE_1__["BoxGeometry"](0.3, 0.3, 0.3);
  var material = new three__WEBPACK_IMPORTED_MODULE_1__["MeshNormalMaterial"]();
  var mesh = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geometry, material);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      renderer = _useState[0],
      setRenderer = _useState[1];

  camera.position.z = 1;
  scene.add(mesh);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setRenderer(new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({
      antialias: true,
      alpha: true
    }));
    return function () {};
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {// animate()
  }, [renderer]);

  var animate = function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.03;
    renderer.render(scene, camera);
  };

  var WithRenderer = renderer ? __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: renderer.domElement
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }) : null;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, WithRenderer);
};

/* harmony default export */ __webpack_exports__["default"] = (ThreeComponent);

/***/ })

})
//# sourceMappingURL=index.js.baf7e373b1b2e249aa51.hot-update.js.map