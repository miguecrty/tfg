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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Cabecera = (param)=>{\n    let { mostrarBotonHome } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUsername = async ()=>{\n            const fetchedUsername = await js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"username\");\n            setUsername(fetchedUsername);\n        };\n        fetchUsername();\n    }, []); // Ejecutar una sola vez cuando el componente se monta\n    const handleLogout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"isLoggedIn\");\n        router.push(\"/\"); // Redirige a la página de inicio después de cerrar sesión\n    };\n    const handleHome = ()=>{\n        router.push(\"/\"); // Redirige a la página de inicio después de cerrar sesión\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        style: {\n            backgroundColor: \"rgba(0, 80, 255, 0.5)\",\n            color: \"white\",\n            padding: \"0.5px\",\n            textAlign: \"center\",\n            width: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\",\n                    listStyleType: \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        id: \"boton-home\",\n                        children: mostrarBotonHome && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleHome,\n                            className: \"btn home\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"./images/home.png\",\n                                    alt: \"Inicio\",\n                                    style: {\n                                        width: \"40px\",\n                                        height: \"40px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 80\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                            lineNumber: 32,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            display: \"flex\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"./images/perfil.png\",\n                                alt: \"Inicio\",\n                                style: {\n                                    width: \"30px\",\n                                    height: \"30px\",\n                                    marginRight: \"10px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"black\",\n                                    marginRight: \"50px\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: username\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 79\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleLogout,\n                                className: \"btn cerrar\",\n                                children: \"Cerrar Sesi\\xf3n\"\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 38,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                lineNumber: 29,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/migue/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Cabecera, \"avttvagYHAg3NNb2mFIxeLCKLJo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Cabecera;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cabecera);\nvar _c;\n$RefreshReg$(_c, \"Cabecera\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYWJlY2VyYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFDUjtBQUVoQyxNQUFNSSxXQUFXO1FBQUMsRUFBRUMsZ0JBQWdCLEVBQUU7O0lBQ2xDLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFFekNELGdEQUFTQSxDQUFDO1FBQ04sTUFBTVMsZ0JBQWdCO1lBQ2xCLE1BQU1DLGtCQUFrQixNQUFNUCxxREFBVyxDQUFDO1lBQzFDSyxZQUFZRTtRQUNoQjtRQUNBRDtJQUNKLEdBQUcsRUFBRSxHQUFHLHNEQUFzRDtJQUU5RCxNQUFNRyxlQUFlO1FBQ2pCVCx3REFBYyxDQUFDO1FBQ2ZHLE9BQU9RLElBQUksQ0FBQyxNQUFNLDBEQUEwRDtJQUNoRjtJQUVBLE1BQU1DLGFBQWE7UUFDZlQsT0FBT1EsSUFBSSxDQUFDLE1BQU0sMERBQTBEO0lBQ2hGO0lBRUEscUJBQ0ksOERBQUNFO1FBQU9DLE9BQU87WUFBRUMsaUJBQWlCO1lBQXlCQyxPQUFPO1lBQVNDLFNBQVM7WUFBU0MsV0FBVztZQUFVQyxPQUFPO1FBQU87a0JBQzVILDRFQUFDQztzQkFDRyw0RUFBQ0M7Z0JBQUdQLE9BQU87b0JBQUVRLFNBQVM7b0JBQVFDLGdCQUFnQjtvQkFBaUJDLFlBQVk7b0JBQVVDLGVBQWU7Z0JBQU87O2tDQUN2Ryw4REFBQ0M7d0JBQUdDLElBQUc7a0NBQ0Z6QixrQ0FDRyw4REFBQzBCOzRCQUFPQyxTQUFTakI7NEJBQVlrQixXQUFVOztnQ0FBVzs4Q0FBQyw4REFBQ0M7b0NBQUlDLEtBQUk7b0NBQW9CQyxLQUFJO29DQUFTbkIsT0FBTzt3Q0FBRUssT0FBTzt3Q0FBUWUsUUFBUTtvQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzVJLDhEQUFDUjt3QkFBR1osT0FBTzs0QkFBRVEsU0FBUzs0QkFBUUUsWUFBWTt3QkFBUzs7MENBQy9DLDhEQUFDTztnQ0FBSUMsS0FBSTtnQ0FBc0JDLEtBQUk7Z0NBQVNuQixPQUFPO29DQUFFSyxPQUFPO29DQUFRZSxRQUFRO29DQUFRQyxhQUFZO2dDQUFPOzs7Ozs7MENBQ3ZHLDhEQUFDQztnQ0FBS3RCLE9BQU87b0NBQUVFLE9BQU87b0NBQVNtQixhQUFhO2dDQUFPOzBDQUFHLDRFQUFDRTs4Q0FBUWpDOzs7Ozs7Ozs7OzswQ0FDL0QsOERBQUN3QjtnQ0FBT0MsU0FBU3BCO2dDQUFjcUIsV0FBVTswQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05RTtHQXZDTTdCOztRQUNhRixrREFBU0E7OztLQUR0QkU7QUF5Q04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FiZWNlcmEuanM/ZjkwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuY29uc3QgQ2FiZWNlcmEgPSAoeyBtb3N0cmFyQm90b25Ib21lIH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoVXNlcm5hbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmZXRjaGVkVXNlcm5hbWUgPSBhd2FpdCBDb29raWVzLmdldCgndXNlcm5hbWUnKTtcbiAgICAgICAgICAgIHNldFVzZXJuYW1lKGZldGNoZWRVc2VybmFtZSk7XG4gICAgICAgIH07XG4gICAgICAgIGZldGNoVXNlcm5hbWUoKTtcbiAgICB9LCBbXSk7IC8vIEVqZWN1dGFyIHVuYSBzb2xhIHZleiBjdWFuZG8gZWwgY29tcG9uZW50ZSBzZSBtb250YVxuXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgICAgICBDb29raWVzLnJlbW92ZSgnaXNMb2dnZWRJbicpO1xuICAgICAgICByb3V0ZXIucHVzaCgnLycpOyAvLyBSZWRpcmlnZSBhIGxhIHDDoWdpbmEgZGUgaW5pY2lvIGRlc3B1w6lzIGRlIGNlcnJhciBzZXNpw7NuXG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUhvbWUgPSAoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7IC8vIFJlZGlyaWdlIGEgbGEgcMOhZ2luYSBkZSBpbmljaW8gZGVzcHXDqXMgZGUgY2VycmFyIHNlc2nDs25cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDgwLCAyNTUsIDAuNSknLCBjb2xvcjogJ3doaXRlJywgcGFkZGluZzogJzAuNXB4JywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGxpc3RTdHlsZVR5cGU6ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiYm90b24taG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge21vc3RyYXJCb3RvbkhvbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlSG9tZX0gY2xhc3NOYW1lPSdidG4gaG9tZSc+IDxpbWcgc3JjPVwiLi9pbWFnZXMvaG9tZS5wbmdcIiBhbHQ9XCJJbmljaW9cIiBzdHlsZT17eyB3aWR0aDogJzQwcHgnLCBoZWlnaHQ6ICc0MHB4JyB9fSAvPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL3BlcmZpbC5wbmdcIiBhbHQ9XCJJbmljaW9cIiBzdHlsZT17eyB3aWR0aDogJzMwcHgnLCBoZWlnaHQ6ICczMHB4JywgbWFyZ2luUmlnaHQ6JzEwcHgnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgbWFyZ2luUmlnaHQ6ICc1MHB4JyB9fT48c3Ryb25nPnt1c2VybmFtZX08L3N0cm9uZz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gY2xhc3NOYW1lPSdidG4gY2VycmFyJz5DZXJyYXIgU2VzacOzbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FiZWNlcmE7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJDb29raWVzIiwiQ2FiZWNlcmEiLCJtb3N0cmFyQm90b25Ib21lIiwicm91dGVyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImZldGNoVXNlcm5hbWUiLCJmZXRjaGVkVXNlcm5hbWUiLCJnZXQiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmUiLCJwdXNoIiwiaGFuZGxlSG9tZSIsImhlYWRlciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwid2lkdGgiLCJuYXYiLCJ1bCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJsaXN0U3R5bGVUeXBlIiwibGkiLCJpZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsInNwYW4iLCJzdHJvbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/cabecera.js\n"));

/***/ })

});