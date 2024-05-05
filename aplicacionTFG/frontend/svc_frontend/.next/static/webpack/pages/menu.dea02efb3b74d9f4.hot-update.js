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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst Cabecera = (param)=>{\n    let { showHomeButton } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleLogout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"isLoggedIn\");\n        router.push(\"/\"); // Redirige a la página de inicio después de cerrar sesión\n    };\n    const handleHome = ()=>{\n        router.push(\"/\"); // Redirige a la página de inicio después de cerrar sesión\n    };\n    const username = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"username\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        style: {\n            backgroundColor: \"rgba(0, 80, 255, 0.5)\",\n            color: \"white\",\n            padding: \"0.5px\",\n            textAlign: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\",\n                    listStyleType: \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        id: \"boton-home\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleHome,\n                            className: \"btn home\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"./images/home.png\",\n                                    alt: \"Inicio\",\n                                    style: {\n                                        width: \"40px\",\n                                        height: \"40px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 80\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                            lineNumber: 21,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            display: \"flex\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"./images/perfil.png\",\n                                alt: \"Inicio\",\n                                style: {\n                                    width: \"30px\",\n                                    height: \"30px\",\n                                    marginRight: \"10px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 24,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"black\",\n                                    marginRight: \"50px\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: username\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 79\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 25,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleLogout,\n                                className: \"btn cerrar\",\n                                children: \"Cerrar Sesi\\xf3n\"\n                            }, void 0, false, {\n                                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 26,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Cabecera, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Cabecera;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cabecera);\nvar _c;\n$RefreshReg$(_c, \"Cabecera\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYWJlY2VyYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNSO0FBRWhDLE1BQU1FLFdBQVc7UUFBQyxFQUFFQyxjQUFjLEVBQUU7O0lBQ2hDLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUV4QixNQUFNSyxlQUFlO1FBQ2pCSix3REFBYyxDQUFDO1FBQ2ZHLE9BQU9HLElBQUksQ0FBQyxNQUFNLDBEQUEwRDtJQUNoRjtJQUNBLE1BQU1DLGFBQWE7UUFDakJKLE9BQU9HLElBQUksQ0FBQyxNQUFNLDBEQUEwRDtJQUNoRjtJQUNFLE1BQU1FLFdBQVdSLHFEQUFXLENBQUM7SUFDN0IscUJBQ0ksOERBQUNVO1FBQU9DLE9BQU87WUFBRUMsaUJBQWlCO1lBQXlCQyxPQUFPO1lBQVNDLFNBQVM7WUFBU0MsV0FBVztRQUFTO2tCQUU3Ryw0RUFBQ0M7c0JBQ0csNEVBQUNDO2dCQUFHTixPQUFPO29CQUFFTyxTQUFTO29CQUFRQyxnQkFBZ0I7b0JBQWlCQyxZQUFZO29CQUFVQyxlQUFlO2dCQUFPOztrQ0FDdkcsOERBQUNDO3dCQUFHQyxJQUFHO2tDQUNDLDRFQUFDQzs0QkFBT0MsU0FBU2xCOzRCQUFZbUIsV0FBVTs7Z0NBQVc7OENBQUMsOERBQUNDO29DQUFJQyxLQUFJO29DQUFvQkMsS0FBSTtvQ0FBU2xCLE9BQU87d0NBQUVtQixPQUFPO3dDQUFRQyxRQUFRO29DQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FFNUksOERBQUNUO3dCQUFHWCxPQUFPOzRCQUFFTyxTQUFTOzRCQUFRRSxZQUFZO3dCQUFTOzswQ0FDL0MsOERBQUNPO2dDQUFJQyxLQUFJO2dDQUFzQkMsS0FBSTtnQ0FBU2xCLE9BQU87b0NBQUVtQixPQUFPO29DQUFRQyxRQUFRO29DQUFRQyxhQUFZO2dDQUFPOzs7Ozs7MENBQ3ZHLDhEQUFDQztnQ0FBS3RCLE9BQU87b0NBQUVFLE9BQU87b0NBQVNtQixhQUFhO2dDQUFPOzBDQUFHLDRFQUFDRTs4Q0FBUTFCOzs7Ozs7Ozs7OzswQ0FDL0QsOERBQUNnQjtnQ0FBT0MsU0FBU3JCO2dDQUFjc0IsV0FBVTswQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05RTtHQTVCTXpCOztRQUNhRixrREFBU0E7OztLQUR0QkU7QUE4Qk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FiZWNlcmEuanM/ZjkwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuXG5jb25zdCBDYWJlY2VyYSA9ICh7IHNob3dIb21lQnV0dG9uIH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgQ29va2llcy5yZW1vdmUoJ2lzTG9nZ2VkSW4nKTtcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTsgLy8gUmVkaXJpZ2UgYSBsYSBww6FnaW5hIGRlIGluaWNpbyBkZXNwdcOpcyBkZSBjZXJyYXIgc2VzacOzblxuICAgIH07XG4gICAgY29uc3QgaGFuZGxlSG9tZSA9ICgpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7IC8vIFJlZGlyaWdlIGEgbGEgcMOhZ2luYSBkZSBpbmljaW8gZGVzcHXDqXMgZGUgY2VycmFyIHNlc2nDs25cbiAgfTtcbiAgICBjb25zdCB1c2VybmFtZSA9IENvb2tpZXMuZ2V0KCd1c2VybmFtZScpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCA4MCwgMjU1LCAwLjUpJywgY29sb3I6ICd3aGl0ZScsIHBhZGRpbmc6ICcwLjVweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICB7LyogQXF1w60gcHVlZGVzIGNvbG9jYXIgdHUgY29udGVuaWRvIGRlIGNhYmVjZXJhICovfVxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgbGlzdFN0eWxlVHlwZTogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJib3Rvbi1ob21lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVIb21lfSBjbGFzc05hbWU9J2J0biBob21lJz4gPGltZyBzcmM9XCIuL2ltYWdlcy9ob21lLnBuZ1wiIGFsdD1cIkluaWNpb1wiIHN0eWxlPXt7IHdpZHRoOiAnNDBweCcsIGhlaWdodDogJzQwcHgnIH19IC8+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9wZXJmaWwucG5nXCIgYWx0PVwiSW5pY2lvXCIgc3R5bGU9e3sgd2lkdGg6ICczMHB4JywgaGVpZ2h0OiAnMzBweCcsIG1hcmdpblJpZ2h0OicxMHB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIG1hcmdpblJpZ2h0OiAnNTBweCcgfX0+PHN0cm9uZz57dXNlcm5hbWV9PC9zdHJvbmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9IGNsYXNzTmFtZT0nYnRuIGNlcnJhcic+Q2VycmFyIFNlc2nDs248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhYmVjZXJhO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkNvb2tpZXMiLCJDYWJlY2VyYSIsInNob3dIb21lQnV0dG9uIiwicm91dGVyIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlIiwicHVzaCIsImhhbmRsZUhvbWUiLCJ1c2VybmFtZSIsImdldCIsImhlYWRlciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwibmF2IiwidWwiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibGlzdFN0eWxlVHlwZSIsImxpIiwiaWQiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsInNwYW4iLCJzdHJvbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/cabecera.js\n"));

/***/ })

});