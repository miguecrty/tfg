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

/***/ "./src/components/cabecera.js":
/*!************************************!*\
  !*** ./src/components/cabecera.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst Cabecera = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleLogout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"isLoggedIn\");\n        router.push(\"/\"); // Redirige a la página de inicio después de cerrar sesión\n    };\n    const username = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"username\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        style: {\n            backgroundColor: \"rgba(0, 0, 255, 1)\",\n            color: \"white\",\n            padding: \"0.5px\",\n            textAlign: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\",\n                    listStyleType: \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            style: {\n                                color: \"white\",\n                                textDecoration: \"none\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"./images/home.png\",\n                                alt: \"Inicio\",\n                                style: {\n                                    width: \"40px\",\n                                    height: \"40px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 20,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                            lineNumber: 18,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            display: \"flex\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"./images/perfil.png\",\n                                alt: \"Inicio\",\n                                style: {\n                                    width: \"30px\",\n                                    height: \"30px\",\n                                    marginRight: \"10px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 24,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"white\",\n                                    marginRight: \"50px\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: username\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 79\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 25,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleLogout,\n                                className: \"btn cerrar\",\n                                children: \"Cerrar Sesi\\xf3n\"\n                            }, void 0, false, {\n                                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 26,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                lineNumber: 16,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Cabecera, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Cabecera;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cabecera);\nvar _c;\n$RefreshReg$(_c, \"Cabecera\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYWJlY2VyYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNSO0FBRWhDLE1BQU1FLFdBQVc7O0lBQ2IsTUFBTUMsU0FBU0gsc0RBQVNBO0lBRXhCLE1BQU1JLGVBQWU7UUFDakJILHdEQUFjLENBQUM7UUFDZkUsT0FBT0csSUFBSSxDQUFDLE1BQU0sMERBQTBEO0lBQ2hGO0lBQ0EsTUFBTUMsV0FBV04scURBQVcsQ0FBQztJQUM3QixxQkFDSSw4REFBQ1E7UUFBT0MsT0FBTztZQUFFQyxpQkFBaUI7WUFBc0JDLE9BQU87WUFBU0MsU0FBUztZQUFTQyxXQUFXO1FBQVM7a0JBRTFHLDRFQUFDQztzQkFDRyw0RUFBQ0M7Z0JBQUdOLE9BQU87b0JBQUVPLFNBQVM7b0JBQVFDLGdCQUFnQjtvQkFBaUJDLFlBQVk7b0JBQVVDLGVBQWU7Z0JBQU87O2tDQUN2Ryw4REFBQ0M7a0NBQ0csNEVBQUNDOzRCQUFFQyxNQUFLOzRCQUFJYixPQUFPO2dDQUFFRSxPQUFPO2dDQUFTWSxnQkFBZ0I7NEJBQU87c0NBRXhELDRFQUFDQztnQ0FBSUMsS0FBSTtnQ0FBb0JDLEtBQUk7Z0NBQVNqQixPQUFPO29DQUFFa0IsT0FBTztvQ0FBUUMsUUFBUTtnQ0FBTzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHekYsOERBQUNSO3dCQUFHWCxPQUFPOzRCQUFFTyxTQUFTOzRCQUFRRSxZQUFZO3dCQUFTOzswQ0FDL0MsOERBQUNNO2dDQUFJQyxLQUFJO2dDQUFzQkMsS0FBSTtnQ0FBU2pCLE9BQU87b0NBQUVrQixPQUFPO29DQUFRQyxRQUFRO29DQUFRQyxhQUFZO2dDQUFPOzs7Ozs7MENBQ3ZHLDhEQUFDQztnQ0FBS3JCLE9BQU87b0NBQUVFLE9BQU87b0NBQVNrQixhQUFhO2dDQUFPOzBDQUFHLDRFQUFDRTs4Q0FBUXpCOzs7Ozs7Ozs7OzswQ0FDL0QsOERBQUMwQjtnQ0FBT0MsU0FBUzlCO2dDQUFjK0IsV0FBVTswQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05RTtHQTVCTWpDOztRQUNhRixrREFBU0E7OztLQUR0QkU7QUE4Qk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FiZWNlcmEuanM/ZjkwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuXG5jb25zdCBDYWJlY2VyYSA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgQ29va2llcy5yZW1vdmUoJ2lzTG9nZ2VkSW4nKTtcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTsgLy8gUmVkaXJpZ2UgYSBsYSBww6FnaW5hIGRlIGluaWNpbyBkZXNwdcOpcyBkZSBjZXJyYXIgc2VzacOzblxuICAgIH07XG4gICAgY29uc3QgdXNlcm5hbWUgPSBDb29raWVzLmdldCgndXNlcm5hbWUnKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMjU1LCAxKScsIGNvbG9yOiAnd2hpdGUnLCBwYWRkaW5nOiAnMC41cHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgey8qIEFxdcOtIHB1ZWRlcyBjb2xvY2FyIHR1IGNvbnRlbmlkbyBkZSBjYWJlY2VyYSAqL31cbiAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGxpc3RTdHlsZVR5cGU6ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogSWNvbm8gZGUgY2FzYSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2hvbWUucG5nXCIgYWx0PVwiSW5pY2lvXCIgc3R5bGU9e3sgd2lkdGg6ICc0MHB4JywgaGVpZ2h0OiAnNDBweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL3BlcmZpbC5wbmdcIiBhbHQ9XCJJbmljaW9cIiBzdHlsZT17eyB3aWR0aDogJzMwcHgnLCBoZWlnaHQ6ICczMHB4JywgbWFyZ2luUmlnaHQ6JzEwcHgnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgbWFyZ2luUmlnaHQ6ICc1MHB4JyB9fT48c3Ryb25nPnt1c2VybmFtZX08L3N0cm9uZz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gY2xhc3NOYW1lPSdidG4gY2VycmFyJz5DZXJyYXIgU2VzacOzbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FiZWNlcmE7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiQ29va2llcyIsIkNhYmVjZXJhIiwicm91dGVyIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlIiwicHVzaCIsInVzZXJuYW1lIiwiZ2V0IiwiaGVhZGVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJuYXYiLCJ1bCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJsaXN0U3R5bGVUeXBlIiwibGkiLCJhIiwiaHJlZiIsInRleHREZWNvcmF0aW9uIiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsInNwYW4iLCJzdHJvbmciLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/cabecera.js\n"));

/***/ })

});