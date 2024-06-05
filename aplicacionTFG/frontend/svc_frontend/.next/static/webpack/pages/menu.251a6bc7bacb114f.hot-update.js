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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_cabecera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/cabecera */ \"./src/components/cabecera.js\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/withAuth */ \"./src/components/withAuth.js\");\n// Menu.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Menu = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [authenticated, setAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkAuthentication = async ()=>{\n            const isAuthenticated = await fetchAuthentication(); // Función para verificar la autenticación\n            setAuthenticated(isAuthenticated);\n        };\n        checkAuthentication();\n    }, []);\n    const handleItemClick = (url)=>{\n        router.push(url);\n    };\n    if (!authenticated) {\n        return null; // O algún indicador de carga mientras se verifica la autenticación\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fondo\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Men\\xfa principal\"\n                        }, void 0, false, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"./images/logo.png\"\n                        }, void 0, false, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\"\n                        }, void 0, false, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"./styles/menu.css\"\n                        }, void 0, false, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabecera__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    mostrarBotonHome: false,\n                    mostrarUser: true\n                }, void 0, false, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"display-2 text-center mt-2\",\n                    children: \"Men\\xfa principal\"\n                }, void 0, false, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"containerP d-flex flex-wrap justify-content-around mt-4 mb-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white bg-opacity-50 card border-0 shadow\",\n                            onClick: ()=>handleItemClick(\"/monitorizar\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"title text-center mt-4\",\n                                    children: \"Lista de lugares\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"card-img\",\n                                    src: \"./images/lista.png\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white bg-opacity-50 card border-0 shadow\",\n                            onClick: ()=>handleItemClick(\"/pronostico\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"title text-center mt-4\",\n                                    children: \"Pron\\xf3stico\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"card-img\",\n                                    src: \"./images/pronostico.png\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white bg-opacity-50 card border-0 shadow\",\n                            onClick: ()=>handleItemClick(\"/micuenta\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"title text-center mt-4\",\n                                    children: \"Mi cuenta\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"card-img\",\n                                    src: \"./images/configuracion.png\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Menu, \"JlrHzgUgpXIgw3bpc2GKJ+NKX78=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Menu));\nvar _c, _c1;\n$RefreshReg$(_c, \"Menu\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxVQUFVOzs7QUFDeUM7QUFDWDtBQUNYO0FBQ2dCO0FBQ1Q7QUFDUztBQUU3QyxNQUFNUSxPQUFPOztJQUNULE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNLENBQUNPLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBQztJQUVuREMsZ0RBQVNBLENBQUM7UUFDTixNQUFNVSxzQkFBc0I7WUFDeEIsTUFBTUMsa0JBQWtCLE1BQU1DLHVCQUF1QiwwQ0FBMEM7WUFDL0ZILGlCQUFpQkU7UUFDckI7UUFFQUQ7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNRyxrQkFBa0IsQ0FBQ0M7UUFDckJQLE9BQU9RLElBQUksQ0FBQ0Q7SUFDaEI7SUFFQSxJQUFJLENBQUNOLGVBQWU7UUFDaEIsT0FBTyxNQUFNLG1FQUFtRTtJQUNwRjtJQUVBLHFCQUNJO2tCQUNJLDRFQUFDUTtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ2Ysa0RBQUlBOztzQ0FDRCw4REFBQ2dCO3NDQUFNOzs7Ozs7c0NBQ1AsOERBQUNDOzRCQUFLQyxLQUFJOzRCQUFPQyxNQUFLOzs7Ozs7c0NBQ3RCLDhEQUFDRjs0QkFBS0MsS0FBSTs0QkFBYUMsTUFBSzs7Ozs7O3NDQUM1Qiw4REFBQ0Y7NEJBQUtDLEtBQUk7NEJBQWFDLE1BQUs7Ozs7Ozs7Ozs7Ozs4QkFFaEMsOERBQUNsQiw0REFBUUE7b0JBQUNtQixrQkFBa0I7b0JBQU9DLGFBQWE7Ozs7Ozs4QkFDaEQsOERBQUNDO29CQUFHUCxXQUFVOzhCQUE2Qjs7Ozs7OzhCQUMzQyw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDs0QkFBSUMsV0FBVTs0QkFBOENRLFNBQVMsSUFBTVosZ0JBQWdCOzs4Q0FDeEYsOERBQUNXO29DQUFHUCxXQUFVOzhDQUF5Qjs7Ozs7OzhDQUN2Qyw4REFBQ1M7b0NBQUlULFdBQVU7b0NBQVdVLEtBQUk7b0NBQXFCQyxLQUFJOzs7Ozs7Ozs7Ozs7c0NBRTNELDhEQUFDWjs0QkFBSUMsV0FBVTs0QkFBOENRLFNBQVMsSUFBTVosZ0JBQWdCOzs4Q0FDeEYsOERBQUNXO29DQUFHUCxXQUFVOzhDQUF5Qjs7Ozs7OzhDQUN2Qyw4REFBQ1M7b0NBQUlULFdBQVU7b0NBQVdVLEtBQUk7b0NBQTBCQyxLQUFJOzs7Ozs7Ozs7Ozs7c0NBRWhFLDhEQUFDWjs0QkFBSUMsV0FBVTs0QkFBOENRLFNBQVMsSUFBTVosZ0JBQWdCOzs4Q0FDeEYsOERBQUNXO29DQUFHUCxXQUFVOzhDQUF5Qjs7Ozs7OzhDQUN2Qyw4REFBQ1M7b0NBQUlULFdBQVU7b0NBQVdVLEtBQUk7b0NBQTZCQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR3ZFLDhEQUFDeEIsdURBQUdBOzs7Ozs7Ozs7Ozs7QUFJcEI7R0FsRE1FOztRQUNhTCxrREFBU0E7OztLQUR0Qks7QUFvRE4sK0RBQWUsTUFBQUQsZ0VBQVFBLENBQUNDLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21lbnUuanM/NWVlYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNZW51LmpzXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQ2FiZWNlcmEgZnJvbSAnQC9jb21wb25lbnRzL2NhYmVjZXJhJztcbmltcG9ydCBQaWUgZnJvbSAnLi4vY29tcG9uZW50cy9waWUnO1xuaW1wb3J0IHdpdGhBdXRoIGZyb20gJ0AvY29tcG9uZW50cy93aXRoQXV0aCc7XG5cbmNvbnN0IE1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2F1dGhlbnRpY2F0ZWQsIHNldEF1dGhlbnRpY2F0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2tBdXRoZW50aWNhdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9IGF3YWl0IGZldGNoQXV0aGVudGljYXRpb24oKTsgLy8gRnVuY2nDs24gcGFyYSB2ZXJpZmljYXIgbGEgYXV0ZW50aWNhY2nDs25cbiAgICAgICAgICAgIHNldEF1dGhlbnRpY2F0ZWQoaXNBdXRoZW50aWNhdGVkKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjaGVja0F1dGhlbnRpY2F0aW9uKCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID0gKHVybCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaCh1cmwpO1xuICAgIH07XG5cbiAgICBpZiAoIWF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7IC8vIE8gYWxnw7puIGluZGljYWRvciBkZSBjYXJnYSBtaWVudHJhcyBzZSB2ZXJpZmljYSBsYSBhdXRlbnRpY2FjacOzblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9uZG8nPlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+TWVuw7ogcHJpbmNpcGFsPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIuL2ltYWdlcy9sb2dvLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuL3N0eWxlcy9tZW51LmNzc1wiIC8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxDYWJlY2VyYSBtb3N0cmFyQm90b25Ib21lPXtmYWxzZX0gbW9zdHJhclVzZXI9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS0yIHRleHQtY2VudGVyIG10LTInPk1lbsO6IHByaW5jaXBhbDwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJQIGQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWFyb3VuZCBtdC00IG1iLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBiZy1vcGFjaXR5LTUwIGNhcmQgYm9yZGVyLTAgc2hhZG93XCIgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKCcvbW9uaXRvcml6YXInKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgdGV4dC1jZW50ZXIgbXQtNFwiPkxpc3RhIGRlIGx1Z2FyZXM8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZ1wiIHNyYz1cIi4vaW1hZ2VzL2xpc3RhLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJnLW9wYWNpdHktNTAgY2FyZCBib3JkZXItMCBzaGFkb3dcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soJy9wcm9ub3N0aWNvJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIHRleHQtY2VudGVyIG10LTRcIj5Qcm9uw7NzdGljbzwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nXCIgc3JjPVwiLi9pbWFnZXMvcHJvbm9zdGljby5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBiZy1vcGFjaXR5LTUwIGNhcmQgYm9yZGVyLTAgc2hhZG93XCIgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKCcvbWljdWVudGEnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgdGV4dC1jZW50ZXIgbXQtNFwiPk1pIGN1ZW50YTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nXCIgc3JjPVwiLi9pbWFnZXMvY29uZmlndXJhY2lvbi5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8UGllIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKE1lbnUpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJIZWFkIiwiQ2FiZWNlcmEiLCJQaWUiLCJ3aXRoQXV0aCIsIk1lbnUiLCJyb3V0ZXIiLCJhdXRoZW50aWNhdGVkIiwic2V0QXV0aGVudGljYXRlZCIsImNoZWNrQXV0aGVudGljYXRpb24iLCJpc0F1dGhlbnRpY2F0ZWQiLCJmZXRjaEF1dGhlbnRpY2F0aW9uIiwiaGFuZGxlSXRlbUNsaWNrIiwidXJsIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtb3N0cmFyQm90b25Ib21lIiwibW9zdHJhclVzZXIiLCJoMSIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/menu.js\n"));

/***/ })

});