"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/menu",{

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_cabecera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/cabecera */ \"./src/components/cabecera.js\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Menu = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleItemClick = (url)=>{\n        router.push(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabecera__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                showHomeButton: false\n            }, void 0, false, {\n                fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"menu\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Men\\xfa principal\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"menu-list\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"menu-item-container\",\n                                onClick: ()=>handleItemClick(\"/tiempo\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"menu-item\",\n                                        children: \"Seleccionar lugar para monitorizar\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                        lineNumber: 19,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"./images/map.png\",\n                                        alt: \"Imagen 1\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                        lineNumber: 20,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                lineNumber: 18,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"menu-item-container\",\n                                onClick: ()=>handleItemClick(\"/lista\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"menu-item\",\n                                        children: \"Lista de lugares monitorizados\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"./images/lista.png\",\n                                        alt: \"Imagen 2\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                lineNumber: 22,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"menu-item-container\",\n                                onClick: ()=>handleItemClick(\"/pronostico\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"menu-item\",\n                                        children: \"Pron\\xf3stico de 5 d\\xedas\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"./images/pronostico.jpg\",\n                                        alt: \"Imagen 3\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Menu, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QztBQUNUO0FBQ1Y7QUFDYztBQUV4QyxNQUFNSSxPQUFPOztJQUVULE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNRyxrQkFBa0IsQ0FBQ0M7UUFDckJGLE9BQU9HLElBQUksQ0FBQ0Q7SUFDaEI7SUFDQSxxQkFDSSw4REFBQ0U7OzBCQUNHLDhEQUFDVCw0REFBUUE7Z0JBQUNVLGdCQUFnQjs7Ozs7OzBCQUMxQiw4REFBQ0Q7Z0JBQUlFLFdBQVU7O2tDQUNYLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzt3QkFBR0YsV0FBVTs7MENBQ1YsOERBQUNHO2dDQUFHSCxXQUFVO2dDQUFzQkksU0FBUyxJQUFNVCxnQkFBZ0I7O2tEQUMvRCw4REFBQ1U7d0NBQUtMLFdBQVU7a0RBQVk7Ozs7OztrREFDNUIsOERBQUNNO3dDQUFJQyxLQUFJO3dDQUFtQkMsS0FBSTs7Ozs7Ozs7Ozs7OzBDQUVwQyw4REFBQ0w7Z0NBQUdILFdBQVU7Z0NBQXNCSSxTQUFTLElBQU1ULGdCQUFnQjs7a0RBQ25FLDhEQUFDVTt3Q0FBS0wsV0FBVTtrREFBWTs7Ozs7O2tEQUN4Qiw4REFBQ007d0NBQUlDLEtBQUk7d0NBQXFCQyxLQUFJOzs7Ozs7Ozs7Ozs7MENBRXRDLDhEQUFDTDtnQ0FBR0gsV0FBVTtnQ0FBc0JJLFNBQVMsSUFBTVQsZ0JBQWdCOztrREFDbkUsOERBQUNVO3dDQUFLTCxXQUFVO2tEQUFZOzs7Ozs7a0RBQ3hCLDhEQUFDTTt3Q0FBSUMsS0FBSTt3Q0FBMEJDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbkQsOERBQUNsQix1REFBR0E7Ozs7Ozs7Ozs7O0FBR2hCO0dBN0JNRzs7UUFFYUQsa0RBQVNBOzs7S0FGdEJDO0FBK0JOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9tZW51LmpzPzVlZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhYmVjZXJhIGZyb20gJ0AvY29tcG9uZW50cy9jYWJlY2VyYSc7XG5pbXBvcnQgUGllIGZyb20gJy4uL2NvbXBvbmVudHMvcGllJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IE1lbnUgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID0gKHVybCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaCh1cmwpO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDYWJlY2VyYSBzaG93SG9tZUJ1dHRvbj17ZmFsc2V9Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgICAgIDxoMT5NZW7DuiBwcmluY2lwYWw8L2gxPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbS1jb250YWluZXJcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soJy90aWVtcG8nKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj5TZWxlY2Npb25hciBsdWdhciBwYXJhIG1vbml0b3JpemFyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9tYXAucG5nXCIgYWx0PVwiSW1hZ2VuIDFcIiAvPiBcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbS1jb250YWluZXJcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soJy9saXN0YScpfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+TGlzdGEgZGUgbHVnYXJlcyBtb25pdG9yaXphZG9zPC9zcGFuPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvbGlzdGEucG5nXCIgYWx0PVwiSW1hZ2VuIDJcIiAvPiBcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbS1jb250YWluZXJcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soJy9wcm9ub3N0aWNvJyl9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj5Qcm9uw7NzdGljbyBkZSA1IGTDrWFzPC9zcGFuPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvcHJvbm9zdGljby5qcGdcIiBhbHQ9XCJJbWFnZW4gM1wiIC8+IFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxQaWUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iXSwibmFtZXMiOlsiQ2FiZWNlcmEiLCJQaWUiLCJSZWFjdCIsInVzZVJvdXRlciIsIk1lbnUiLCJyb3V0ZXIiLCJoYW5kbGVJdGVtQ2xpY2siLCJ1cmwiLCJwdXNoIiwiZGl2Iiwic2hvd0hvbWVCdXR0b24iLCJjbGFzc05hbWUiLCJoMSIsInVsIiwibGkiLCJvbkNsaWNrIiwic3BhbiIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/menu.js\n"));

/***/ })

});