"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/lista",{

/***/ "./src/pages/lista.js":
/*!****************************!*\
  !*** ./src/pages/lista.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_cabecera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cabecera */ \"./src/components/cabecera.js\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var _components_searchbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/searchbox */ \"./src/components/searchbox.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_app */ \"./src/pages/_app.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/select */ \"./src/components/select.js\");\n\n\n\n\n\n\n\n\nconst ListaLugares = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabecera__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mostrarBotonHome: true\n            }, void 0, false, {\n                fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/lista.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/lista.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = ListaLugares;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListaLugares);\nvar _c;\n$RefreshReg$(_c, \"ListaLugares\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbGlzdGEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0w7QUFDVjtBQUNZO0FBQ2hCO0FBQ0E7QUFDc0I7QUFFdEQsTUFBTVMsZUFBZTtJQUNqQixxQkFDSTs7MEJBQ0YsOERBQUNOLDREQUFRQTtnQkFBQ08sa0JBQWtCOzs7Ozs7MEJBRXRCLDhEQUFDTix1REFBR0E7Ozs7Ozs7QUFJaEI7S0FUTUs7QUFXTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbGlzdGEuanM/NDk2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYWJlY2VyYSBmcm9tICcuLi9jb21wb25lbnRzL2NhYmVjZXJhJztcbmltcG9ydCBQaWUgZnJvbSAnLi4vY29tcG9uZW50cy9waWUnO1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaGJveCc7XG5pbXBvcnQgeyBzZXJ2ZXIgfSBmcm9tICcuL19hcHAnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBTZWxlY3RQZXJzb25hbGl6YWRvIGZyb20gJ0AvY29tcG9uZW50cy9zZWxlY3QnO1xuXG5jb25zdCBMaXN0YUx1Z2FyZXMgPSAoKSA9PiB7ICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgIDxDYWJlY2VyYSBtb3N0cmFyQm90b25Ib21lPXt0cnVlfS8+IFxuICAgICAgICBcbiAgICAgICAgICAgIDxQaWUvPlxuICAgICAgICA8Lz5cbiAgICAgICAgXG4gICAgKTsgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0YUx1Z2FyZXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhYmVjZXJhIiwiUGllIiwiU2VhcmNoQm94Iiwic2VydmVyIiwiQ29va2llcyIsIlNlbGVjdFBlcnNvbmFsaXphZG8iLCJMaXN0YUx1Z2FyZXMiLCJtb3N0cmFyQm90b25Ib21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/lista.js\n"));

/***/ })

});