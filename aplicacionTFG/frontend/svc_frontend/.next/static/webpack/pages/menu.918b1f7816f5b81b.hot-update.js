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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst Cabecera = (param)=>{\n    let { mostrarBotonHome } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleLogout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"isLoggedIn\");\n        router.push(\"/\"); // Redirige a la página de inicio después de cerrar sesión\n    };\n    const handleHome = ()=>{\n        router.push(\"/\"); // Redirige a la página de inicio después de cerrar sesión\n    };\n    const username = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"username\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        style: {\n            backgroundColor: \"rgba(0, 80, 255, 0.5)\",\n            color: \"white\",\n            padding: \"0.5px\",\n            textAlign: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\",\n                    listStyleType: \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        id: \"boton-home\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleHome,\n                            className: \"btn home\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"./images/home.png\",\n                                    alt: \"Inicio\",\n                                    style: {\n                                        width: \"40px\",\n                                        height: \"40px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 80\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                            lineNumber: 21,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            display: \"flex\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"./images/perfil.png\",\n                                alt: \"Inicio\",\n                                style: {\n                                    width: \"30px\",\n                                    height: \"30px\",\n                                    marginRight: \"10px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 24,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"black\",\n                                    marginRight: \"50px\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: username\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 79\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 25,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleLogout,\n                                className: \"btn cerrar\",\n                                children: \"Cerrar Sesi\\xf3n\"\n                            }, void 0, false, {\n                                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 26,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Cabecera, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Cabecera;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cabecera);\nvar _c;\n$RefreshReg$(_c, \"Cabecera\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYWJlY2VyYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNSO0FBRWhDLE1BQU1FLFdBQVc7UUFBQyxFQUFFQyxnQkFBZ0IsRUFBRTs7SUFDbEMsTUFBTUMsU0FBU0osc0RBQVNBO0lBRXhCLE1BQU1LLGVBQWU7UUFDakJKLHdEQUFjLENBQUM7UUFDZkcsT0FBT0csSUFBSSxDQUFDLE1BQU0sMERBQTBEO0lBQ2hGO0lBQ0EsTUFBTUMsYUFBYTtRQUNqQkosT0FBT0csSUFBSSxDQUFDLE1BQU0sMERBQTBEO0lBQ2hGO0lBQ0UsTUFBTUUsV0FBV1IscURBQVcsQ0FBQztJQUM3QixxQkFDSSw4REFBQ1U7UUFBT0MsT0FBTztZQUFFQyxpQkFBaUI7WUFBeUJDLE9BQU87WUFBU0MsU0FBUztZQUFTQyxXQUFXO1FBQVM7a0JBRTdHLDRFQUFDQztzQkFDRyw0RUFBQ0M7Z0JBQUdOLE9BQU87b0JBQUVPLFNBQVM7b0JBQVFDLGdCQUFnQjtvQkFBaUJDLFlBQVk7b0JBQVVDLGVBQWU7Z0JBQU87O2tDQUN2Ryw4REFBQ0M7d0JBQUdDLElBQUc7a0NBQ0MsNEVBQUNDOzRCQUFPQyxTQUFTbEI7NEJBQVltQixXQUFVOztnQ0FBVzs4Q0FBQyw4REFBQ0M7b0NBQUlDLEtBQUk7b0NBQW9CQyxLQUFJO29DQUFTbEIsT0FBTzt3Q0FBRW1CLE9BQU87d0NBQVFDLFFBQVE7b0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUU1SSw4REFBQ1Q7d0JBQUdYLE9BQU87NEJBQUVPLFNBQVM7NEJBQVFFLFlBQVk7d0JBQVM7OzBDQUMvQyw4REFBQ087Z0NBQUlDLEtBQUk7Z0NBQXNCQyxLQUFJO2dDQUFTbEIsT0FBTztvQ0FBRW1CLE9BQU87b0NBQVFDLFFBQVE7b0NBQVFDLGFBQVk7Z0NBQU87Ozs7OzswQ0FDdkcsOERBQUNDO2dDQUFLdEIsT0FBTztvQ0FBRUUsT0FBTztvQ0FBU21CLGFBQWE7Z0NBQU87MENBQUcsNEVBQUNFOzhDQUFRMUI7Ozs7Ozs7Ozs7OzBDQUMvRCw4REFBQ2dCO2dDQUFPQyxTQUFTckI7Z0NBQWNzQixXQUFVOzBDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlFO0dBNUJNekI7O1FBQ2FGLGtEQUFTQTs7O0tBRHRCRTtBQThCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYWJlY2VyYS5qcz9mOTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmNvbnN0IENhYmVjZXJhID0gKHsgbW9zdHJhckJvdG9uSG9tZSB9KSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgICAgIENvb2tpZXMucmVtb3ZlKCdpc0xvZ2dlZEluJyk7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7IC8vIFJlZGlyaWdlIGEgbGEgcMOhZ2luYSBkZSBpbmljaW8gZGVzcHXDqXMgZGUgY2VycmFyIHNlc2nDs25cbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUhvbWUgPSAoKSA9PiB7XG4gICAgICByb3V0ZXIucHVzaCgnLycpOyAvLyBSZWRpcmlnZSBhIGxhIHDDoWdpbmEgZGUgaW5pY2lvIGRlc3B1w6lzIGRlIGNlcnJhciBzZXNpw7NuXG4gIH07XG4gICAgY29uc3QgdXNlcm5hbWUgPSBDb29raWVzLmdldCgndXNlcm5hbWUnKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgODAsIDI1NSwgMC41KScsIGNvbG9yOiAnd2hpdGUnLCBwYWRkaW5nOiAnMC41cHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgey8qIEFxdcOtIHB1ZWRlcyBjb2xvY2FyIHR1IGNvbnRlbmlkbyBkZSBjYWJlY2VyYSAqL31cbiAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGxpc3RTdHlsZVR5cGU6ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiYm90b24taG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlSG9tZX0gY2xhc3NOYW1lPSdidG4gaG9tZSc+IDxpbWcgc3JjPVwiLi9pbWFnZXMvaG9tZS5wbmdcIiBhbHQ9XCJJbmljaW9cIiBzdHlsZT17eyB3aWR0aDogJzQwcHgnLCBoZWlnaHQ6ICc0MHB4JyB9fSAvPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvcGVyZmlsLnBuZ1wiIGFsdD1cIkluaWNpb1wiIHN0eWxlPXt7IHdpZHRoOiAnMzBweCcsIGhlaWdodDogJzMwcHgnLCBtYXJnaW5SaWdodDonMTBweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBtYXJnaW5SaWdodDogJzUwcHgnIH19PjxzdHJvbmc+e3VzZXJuYW1lfTwvc3Ryb25nPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fSBjbGFzc05hbWU9J2J0biBjZXJyYXInPkNlcnJhciBTZXNpw7NuPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYWJlY2VyYTtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJDb29raWVzIiwiQ2FiZWNlcmEiLCJtb3N0cmFyQm90b25Ib21lIiwicm91dGVyIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlIiwicHVzaCIsImhhbmRsZUhvbWUiLCJ1c2VybmFtZSIsImdldCIsImhlYWRlciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwibmF2IiwidWwiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibGlzdFN0eWxlVHlwZSIsImxpIiwiaWQiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsInNwYW4iLCJzdHJvbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/cabecera.js\n"));

/***/ })

});