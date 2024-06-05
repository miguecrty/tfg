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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_cabecera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/cabecera */ \"./src/components/cabecera.js\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/withAuth */ \"./src/components/withAuth.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n// Menu.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Menu = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkAuthentication = async ()=>{\n            const usuario = await js_cookie__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"username\");\n            setAuthenticated(usuario);\n        };\n        checkAuthentication();\n    }, []);\n    const handleItemClick = (url)=>{\n        router.push(url);\n    };\n    if (!authenticated) {\n        return null; // O algún indicador de carga mientras se verifica la autenticación\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fondo\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Men\\xfa principal\"\n                        }, void 0, false, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"./images/logo.png\"\n                        }, void 0, false, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\"\n                        }, void 0, false, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"./styles/menu.css\"\n                        }, void 0, false, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabecera__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    mostrarBotonHome: false,\n                    mostrarUser: true\n                }, void 0, false, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"display-2 text-center mt-2\",\n                    children: \"Men\\xfa principal\"\n                }, void 0, false, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"containerP d-flex flex-wrap justify-content-around mt-4 mb-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white bg-opacity-50 card border-0 shadow\",\n                            onClick: ()=>handleItemClick(\"/monitorizar\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"title text-center mt-4\",\n                                    children: \"Lista de lugares\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"card-img\",\n                                    src: \"./images/lista.png\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white bg-opacity-50 card border-0 shadow\",\n                            onClick: ()=>handleItemClick(\"/pronostico\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"title text-center mt-4\",\n                                    children: \"Pron\\xf3stico\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"card-img\",\n                                    src: \"./images/pronostico.png\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white bg-opacity-50 card border-0 shadow\",\n                            onClick: ()=>handleItemClick(\"/micuenta\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"title text-center mt-4\",\n                                    children: \"Mi cuenta\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"card-img\",\n                                    src: \"./images/configuracion.png\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Menu, \"xjmeprWTFgpsplQuCVbQ4AipOFU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Menu));\nvar _c, _c1;\n$RefreshReg$(_c, \"Menu\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsVUFBVTs7O0FBQ3lDO0FBQ1g7QUFDWDtBQUNnQjtBQUNUO0FBQ1M7QUFDYjtBQUNoQyxNQUFNUyxPQUFPOztJQUNULE1BQU1DLFNBQVNQLHNEQUFTQTtJQUN4QixNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFFekNDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVcsc0JBQXNCO1lBQ3hCLE1BQU1DLFVBQVUsTUFBTU4scURBQVcsQ0FBQztZQUNsQ1EsaUJBQWlCRjtRQUNyQjtRQUVBRDtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1JLGtCQUFrQixDQUFDQztRQUNyQlIsT0FBT1MsSUFBSSxDQUFDRDtJQUNoQjtJQUVBLElBQUksQ0FBQ0UsZUFBZTtRQUNoQixPQUFPLE1BQU0sbUVBQW1FO0lBQ3BGO0lBRUEscUJBQ0k7a0JBQ0ksNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDbEIsa0RBQUlBOztzQ0FDRCw4REFBQ21CO3NDQUFNOzs7Ozs7c0NBQ1AsOERBQUNDOzRCQUFLQyxLQUFJOzRCQUFPQyxNQUFLOzs7Ozs7c0NBQ3RCLDhEQUFDRjs0QkFBS0MsS0FBSTs0QkFBYUMsTUFBSzs7Ozs7O3NDQUM1Qiw4REFBQ0Y7NEJBQUtDLEtBQUk7NEJBQWFDLE1BQUs7Ozs7Ozs7Ozs7Ozs4QkFFaEMsOERBQUNyQiw0REFBUUE7b0JBQUNzQixrQkFBa0I7b0JBQU9DLGFBQWE7Ozs7Ozs4QkFDaEQsOERBQUNDO29CQUFHUCxXQUFVOzhCQUE2Qjs7Ozs7OzhCQUMzQyw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDs0QkFBSUMsV0FBVTs0QkFBOENRLFNBQVMsSUFBTWIsZ0JBQWdCOzs4Q0FDeEYsOERBQUNZO29DQUFHUCxXQUFVOzhDQUF5Qjs7Ozs7OzhDQUN2Qyw4REFBQ1M7b0NBQUlULFdBQVU7b0NBQVdVLEtBQUk7b0NBQXFCQyxLQUFJOzs7Ozs7Ozs7Ozs7c0NBRTNELDhEQUFDWjs0QkFBSUMsV0FBVTs0QkFBOENRLFNBQVMsSUFBTWIsZ0JBQWdCOzs4Q0FDeEYsOERBQUNZO29DQUFHUCxXQUFVOzhDQUF5Qjs7Ozs7OzhDQUN2Qyw4REFBQ1M7b0NBQUlULFdBQVU7b0NBQVdVLEtBQUk7b0NBQTBCQyxLQUFJOzs7Ozs7Ozs7Ozs7c0NBRWhFLDhEQUFDWjs0QkFBSUMsV0FBVTs0QkFBOENRLFNBQVMsSUFBTWIsZ0JBQWdCOzs4Q0FDeEYsOERBQUNZO29DQUFHUCxXQUFVOzhDQUF5Qjs7Ozs7OzhDQUN2Qyw4REFBQ1M7b0NBQUlULFdBQVU7b0NBQVdVLEtBQUk7b0NBQTZCQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR3ZFLDhEQUFDM0IsdURBQUdBOzs7Ozs7Ozs7Ozs7QUFJcEI7R0FsRE1HOztRQUNhTixrREFBU0E7OztLQUR0Qk07QUFvRE4sK0RBQWUsTUFBQUYsZ0VBQVFBLENBQUNFLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21lbnUuanM/NWVlYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNZW51LmpzXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQ2FiZWNlcmEgZnJvbSAnQC9jb21wb25lbnRzL2NhYmVjZXJhJztcbmltcG9ydCBQaWUgZnJvbSAnLi4vY29tcG9uZW50cy9waWUnO1xuaW1wb3J0IHdpdGhBdXRoIGZyb20gJ0AvY29tcG9uZW50cy93aXRoQXV0aCc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuY29uc3QgTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWNrQXV0aGVudGljYXRpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c3VhcmlvID0gYXdhaXQgQ29va2llcy5nZXQoJ3VzZXJuYW1lJyk7XG4gICAgICAgICAgICBzZXRBdXRoZW50aWNhdGVkKHVzdWFyaW8pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNoZWNrQXV0aGVudGljYXRpb24oKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVJdGVtQ2xpY2sgPSAodXJsKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKHVybCk7XG4gICAgfTtcblxuICAgIGlmICghYXV0aGVudGljYXRlZCkge1xuICAgICAgICByZXR1cm4gbnVsbDsgLy8gTyBhbGfDum4gaW5kaWNhZG9yIGRlIGNhcmdhIG1pZW50cmFzIHNlIHZlcmlmaWNhIGxhIGF1dGVudGljYWNpw7NuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb25kbyc+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5NZW7DuiBwcmluY2lwYWw8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi4vaW1hZ2VzL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4vc3R5bGVzL21lbnUuY3NzXCIgLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPENhYmVjZXJhIG1vc3RyYXJCb3RvbkhvbWU9e2ZhbHNlfSBtb3N0cmFyVXNlcj17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTIgdGV4dC1jZW50ZXIgbXQtMic+TWVuw7ogcHJpbmNpcGFsPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclAgZC1mbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIG10LTQgbWItNVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJnLW9wYWNpdHktNTAgY2FyZCBib3JkZXItMCBzaGFkb3dcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soJy9tb25pdG9yaXphcicpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSB0ZXh0LWNlbnRlciBtdC00XCI+TGlzdGEgZGUgbHVnYXJlczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nXCIgc3JjPVwiLi9pbWFnZXMvbGlzdGEucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYmctb3BhY2l0eS01MCBjYXJkIGJvcmRlci0wIHNoYWRvd1wiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljaygnL3Byb25vc3RpY28nKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgdGV4dC1jZW50ZXIgbXQtNFwiPlByb27Ds3N0aWNvPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWdcIiBzcmM9XCIuL2ltYWdlcy9wcm9ub3N0aWNvLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJnLW9wYWNpdHktNTAgY2FyZCBib3JkZXItMCBzaGFkb3dcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soJy9taWN1ZW50YScpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSB0ZXh0LWNlbnRlciBtdC00XCI+TWkgY3VlbnRhPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWdcIiBzcmM9XCIuL2ltYWdlcy9jb25maWd1cmFjaW9uLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxQaWUgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoTWVudSk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkhlYWQiLCJDYWJlY2VyYSIsIlBpZSIsIndpdGhBdXRoIiwiQ29va2llcyIsIk1lbnUiLCJyb3V0ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiY2hlY2tBdXRoZW50aWNhdGlvbiIsInVzdWFyaW8iLCJnZXQiLCJzZXRBdXRoZW50aWNhdGVkIiwiaGFuZGxlSXRlbUNsaWNrIiwidXJsIiwicHVzaCIsImF1dGhlbnRpY2F0ZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibW9zdHJhckJvdG9uSG9tZSIsIm1vc3RyYXJVc2VyIiwiaDEiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/menu.js\n"));

/***/ })

});