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
  var camera, scene, renderer;
  var geometry, material, mesh;

  var init = function init() {
    camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](70, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.z = 1;
    scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
    geometry = new three__WEBPACK_IMPORTED_MODULE_1__["BoxGeometry"](0.2, 0.2, 0.2);
    material = new three__WEBPACK_IMPORTED_MODULE_1__["MeshNormalMaterial"]();
    mesh = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geometry, material);
    scene.add(mesh);
    renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('#threed').innerHTML = renderer.domElement;
    console.log(renderer.domElement);
  };

  var animate = function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
    renderer.render(scene, camera);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setTimeout(function () {
      init();
      animate();
    }, 1000);
    return function () {};
  }, []);
  return __jsx("div", {
    id: "threed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ThreeComponent);

/***/ })

})
//# sourceMappingURL=index.js.f41c5f97100d5bfb4027.hot-update.js.map