webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/three/index.tsx":
/*!************************************!*\
  !*** ./components/three/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


var _this = undefined,
    _jsxFileName = "/Users/ksedline/playground/next-portfolio/components/three/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var ThreeComponent = function ThreeComponent() {
  var camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](70, 300 / 300, 0.01, 10);
  var scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
  var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](0.3, 0.3, 0.3);
  var material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshNormalMaterial"]();
  var mesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, material);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      renderer = _useState[0],
      setRenderer = _useState[1];

  camera.position.z = 1;
  scene.add(mesh);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setRenderer(new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({
      antialias: true,
      alpha: true
    }));
    window.onresize = onWindowResized.bind(_this);
    return function () {};
  }, []);

  var onWindowResized = function onWindowResized() {
    var _ref;

    Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

    console.log(window.innerWidth);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (renderer) animate();
  }, [renderer]);

  var animate = function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.03;
    mesh.rotation.y += 0.03;
    renderer.render(scene, camera);
  };

  var appendCanvas = function appendCanvas(ref) {
    if (ref && renderer) {
      var width = ref.clientWidth || 300;
      var height = ref.clientHeight || 300;
      renderer.setSize(width, height);
      camera.setViewOffset(width, height, 0, 0, width, height);
      ref.appendChild(renderer.domElement);
    }
  };

  return __jsx("div", {
    className: "canvas__wrapper",
    ref: appendCanvas,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ThreeComponent);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ })

})
//# sourceMappingURL=index.js.ebbac8db867452687db8.hot-update.js.map