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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst Cabecera = (param)=>{\n    let { mostrarBotonHome } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleLogout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"isLoggedIn\");\n        router.push(\"/\"); // Redirige a la página de inicio después de cerrar sesión\n    };\n    const handleHome = ()=>{\n        router.push(\"/\"); // Redirige a la página de inicio después de cerrar sesión\n    };\n    const username = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"username\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        style: {\n            backgroundColor: \"rgba(0, 80, 255, 0.5)\",\n            color: \"white\",\n            padding: \"0.5px\",\n            textAlign: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\",\n                    listStyleType: \"none\"\n                },\n                children: [\n                    showHomeButton && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        id: \"boton-home\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleHome,\n                            className: \"btn home\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"./images/home.png\",\n                                    alt: \"Inicio\",\n                                    style: {\n                                        width: \"40px\",\n                                        height: \"40px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 80\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                            lineNumber: 22,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            display: \"flex\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"./images/perfil.png\",\n                                alt: \"Inicio\",\n                                style: {\n                                    width: \"30px\",\n                                    height: \"30px\",\n                                    marginRight: \"10px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 25,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"black\",\n                                    marginRight: \"50px\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: username\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 79\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 26,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleLogout,\n                                className: \"btn cerrar\",\n                                children: \"Cerrar Sesi\\xf3n\"\n                            }, void 0, false, {\n                                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Cabecera, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Cabecera;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cabecera);\nvar _c;\n$RefreshReg$(_c, \"Cabecera\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYWJlY2VyYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNSO0FBRWhDLE1BQU1FLFdBQVc7UUFBQyxFQUFFQyxnQkFBZ0IsRUFBRTs7SUFDbEMsTUFBTUMsU0FBU0osc0RBQVNBO0lBRXhCLE1BQU1LLGVBQWU7UUFDakJKLHdEQUFjLENBQUM7UUFDZkcsT0FBT0csSUFBSSxDQUFDLE1BQU0sMERBQTBEO0lBQ2hGO0lBQ0EsTUFBTUMsYUFBYTtRQUNqQkosT0FBT0csSUFBSSxDQUFDLE1BQU0sMERBQTBEO0lBQ2hGO0lBQ0UsTUFBTUUsV0FBV1IscURBQVcsQ0FBQztJQUM3QixxQkFDSSw4REFBQ1U7UUFBT0MsT0FBTztZQUFFQyxpQkFBaUI7WUFBeUJDLE9BQU87WUFBU0MsU0FBUztZQUFTQyxXQUFXO1FBQVM7a0JBRTdHLDRFQUFDQztzQkFDRyw0RUFBQ0M7Z0JBQUdOLE9BQU87b0JBQUVPLFNBQVM7b0JBQVFDLGdCQUFnQjtvQkFBaUJDLFlBQVk7b0JBQVVDLGVBQWU7Z0JBQU87O29CQUMxR0MsZ0NBQ0csOERBQUNDO3dCQUFHQyxJQUFHO2tDQUNDLDRFQUFDQzs0QkFBT0MsU0FBU25COzRCQUFZb0IsV0FBVTs7Z0NBQVc7OENBQUMsOERBQUNDO29DQUFJQyxLQUFJO29DQUFvQkMsS0FBSTtvQ0FBU25CLE9BQU87d0NBQUVvQixPQUFPO3dDQUFRQyxRQUFRO29DQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FFNUksOERBQUNUO3dCQUFHWixPQUFPOzRCQUFFTyxTQUFTOzRCQUFRRSxZQUFZO3dCQUFTOzswQ0FDL0MsOERBQUNRO2dDQUFJQyxLQUFJO2dDQUFzQkMsS0FBSTtnQ0FBU25CLE9BQU87b0NBQUVvQixPQUFPO29DQUFRQyxRQUFRO29DQUFRQyxhQUFZO2dDQUFPOzs7Ozs7MENBQ3ZHLDhEQUFDQztnQ0FBS3ZCLE9BQU87b0NBQUVFLE9BQU87b0NBQVNvQixhQUFhO2dDQUFPOzBDQUFHLDRFQUFDRTs4Q0FBUTNCOzs7Ozs7Ozs7OzswQ0FDL0QsOERBQUNpQjtnQ0FBT0MsU0FBU3RCO2dDQUFjdUIsV0FBVTswQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05RTtHQTdCTTFCOztRQUNhRixrREFBU0E7OztLQUR0QkU7QUErQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FiZWNlcmEuanM/ZjkwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuXG5jb25zdCBDYWJlY2VyYSA9ICh7IG1vc3RyYXJCb3RvbkhvbWUgfSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgICAgICBDb29raWVzLnJlbW92ZSgnaXNMb2dnZWRJbicpO1xuICAgICAgICByb3V0ZXIucHVzaCgnLycpOyAvLyBSZWRpcmlnZSBhIGxhIHDDoWdpbmEgZGUgaW5pY2lvIGRlc3B1w6lzIGRlIGNlcnJhciBzZXNpw7NuXG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVIb21lID0gKCkgPT4ge1xuICAgICAgcm91dGVyLnB1c2goJy8nKTsgLy8gUmVkaXJpZ2UgYSBsYSBww6FnaW5hIGRlIGluaWNpbyBkZXNwdcOpcyBkZSBjZXJyYXIgc2VzacOzblxuICB9O1xuICAgIGNvbnN0IHVzZXJuYW1lID0gQ29va2llcy5nZXQoJ3VzZXJuYW1lJyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDgwLCAyNTUsIDAuNSknLCBjb2xvcjogJ3doaXRlJywgcGFkZGluZzogJzAuNXB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgIHsvKiBBcXXDrSBwdWVkZXMgY29sb2NhciB0dSBjb250ZW5pZG8gZGUgY2FiZWNlcmEgKi99XG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBsaXN0U3R5bGVUeXBlOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAge3Nob3dIb21lQnV0dG9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiYm90b24taG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlSG9tZX0gY2xhc3NOYW1lPSdidG4gaG9tZSc+IDxpbWcgc3JjPVwiLi9pbWFnZXMvaG9tZS5wbmdcIiBhbHQ9XCJJbmljaW9cIiBzdHlsZT17eyB3aWR0aDogJzQwcHgnLCBoZWlnaHQ6ICc0MHB4JyB9fSAvPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPil9XG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9wZXJmaWwucG5nXCIgYWx0PVwiSW5pY2lvXCIgc3R5bGU9e3sgd2lkdGg6ICczMHB4JywgaGVpZ2h0OiAnMzBweCcsIG1hcmdpblJpZ2h0OicxMHB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIG1hcmdpblJpZ2h0OiAnNTBweCcgfX0+PHN0cm9uZz57dXNlcm5hbWV9PC9zdHJvbmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9IGNsYXNzTmFtZT0nYnRuIGNlcnJhcic+Q2VycmFyIFNlc2nDs248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhYmVjZXJhO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkNvb2tpZXMiLCJDYWJlY2VyYSIsIm1vc3RyYXJCb3RvbkhvbWUiLCJyb3V0ZXIiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmUiLCJwdXNoIiwiaGFuZGxlSG9tZSIsInVzZXJuYW1lIiwiZ2V0IiwiaGVhZGVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJuYXYiLCJ1bCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJsaXN0U3R5bGVUeXBlIiwic2hvd0hvbWVCdXR0b24iLCJsaSIsImlkIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJzcGFuIiwic3Ryb25nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/cabecera.js\n"));

/***/ })

});