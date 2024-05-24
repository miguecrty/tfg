"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pronostico",{

/***/ "./src/components/cabecera.js":
/*!************************************!*\
  !*** ./src/components/cabecera.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Cabecera = (param)=>{\n    let { mostrarBotonHome } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUsername = async ()=>{\n            const fetchedUsername = await js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"username\");\n            setUsername(fetchedUsername);\n        };\n        fetchUsername();\n    }, []);\n    const handleLogout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"isLoggedIn\");\n        router.push(\"/\"); // Redirect to the homepage after logout\n    };\n    const handleHome = ()=>{\n        router.push(\"/\"); // Redirect to the homepage\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"./styles/cabecera.css\"\n                }, void 0, false, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"header bg-dark bg-opacity-75 text-white py-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container-fluid\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row justify-content-between align-items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-auto\",\n                                children: mostrarBotonHome && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleHome,\n                                    className: \"home-button btn btn-primary p-1.5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"./images/home.png\",\n                                        alt: \"Inicio\",\n                                        className: \"home-button\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-auto\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"profile-container d-flex align-items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"./images/perfil.png\",\n                                            alt: \"Perfil\",\n                                            className: \"profile-img mr-2\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"username text-white\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: username\n                                            }, void 0, false, {\n                                                fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 71\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: handleLogout,\n                                            className: \"logout-button btn btn-danger p-2 ml-3\",\n                                            children: \"Cerrar Sesi\\xf3n\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 43,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Cabecera, \"avttvagYHAg3NNb2mFIxeLCKLJo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Cabecera;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cabecera);\nvar _c;\n$RefreshReg$(_c, \"Cabecera\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYWJlY2VyYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ1I7QUFDYztBQUNqQjtBQUU3QixNQUFNSyxXQUFXO1FBQUMsRUFBRUMsZ0JBQWdCLEVBQUU7O0lBQ2xDLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFFekNELGdEQUFTQSxDQUFDO1FBQ04sTUFBTVUsZ0JBQWdCO1lBQ2xCLE1BQU1DLGtCQUFrQixNQUFNUixxREFBVyxDQUFDO1lBQzFDTSxZQUFZRTtRQUNoQjtRQUNBRDtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1HLGVBQWU7UUFDakJWLHdEQUFjLENBQUM7UUFDZkksT0FBT1EsSUFBSSxDQUFDLE1BQU0sd0NBQXdDO0lBQzlEO0lBRUEsTUFBTUMsYUFBYTtRQUNmVCxPQUFPUSxJQUFJLENBQUMsTUFBTSwyQkFBMkI7SUFDakQ7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNYLGtEQUFJQTswQkFDRCw0RUFBQ2E7b0JBQUtDLEtBQUk7b0JBQWFDLE1BQUs7Ozs7Ozs7Ozs7OzBCQUVoQyw4REFBQ0M7Z0JBQU9DLFdBQVU7MEJBQ2QsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNYLDRFQUFDQzt3QkFBSUQsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUFJRCxXQUFVOzBDQUNWZixrQ0FDRyw4REFBQ2lCO29DQUFPQyxTQUFTUjtvQ0FBWUssV0FBVTs4Q0FDbkMsNEVBQUNJO3dDQUFJQyxLQUFJO3dDQUFvQkMsS0FBSTt3Q0FBU04sV0FBVTs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJaEUsOERBQUNDO2dDQUFJRCxXQUFVOzBDQUNYLDRFQUFDQztvQ0FBSUQsV0FBVTs7c0RBQ1gsOERBQUNJOzRDQUFJQyxLQUFJOzRDQUFzQkMsS0FBSTs0Q0FBU04sV0FBVTs7Ozs7O3NEQUN0RCw4REFBQ087NENBQUtQLFdBQVU7c0RBQXNCLDRFQUFDUTswREFBUXJCOzs7Ozs7Ozs7OztzREFDL0MsOERBQUNlOzRDQUFPQyxTQUFTWDs0Q0FBY1EsV0FBVTtzREFBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWpIO0dBaERNaEI7O1FBQ2FILGtEQUFTQTs7O0tBRHRCRztBQWtETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYWJlY2VyYS5qcz9mOTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3QgQ2FiZWNlcmEgPSAoeyBtb3N0cmFyQm90b25Ib21lIH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoVXNlcm5hbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmZXRjaGVkVXNlcm5hbWUgPSBhd2FpdCBDb29raWVzLmdldCgndXNlcm5hbWUnKTtcbiAgICAgICAgICAgIHNldFVzZXJuYW1lKGZldGNoZWRVc2VybmFtZSk7XG4gICAgICAgIH07XG4gICAgICAgIGZldGNoVXNlcm5hbWUoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgICAgIENvb2tpZXMucmVtb3ZlKCdpc0xvZ2dlZEluJyk7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7IC8vIFJlZGlyZWN0IHRvIHRoZSBob21lcGFnZSBhZnRlciBsb2dvdXRcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlSG9tZSA9ICgpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTsgLy8gUmVkaXJlY3QgdG8gdGhlIGhvbWVwYWdlXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4vc3R5bGVzL2NhYmVjZXJhLmNzc1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlciBiZy1kYXJrIGJnLW9wYWNpdHktNzUgdGV4dC13aGl0ZSBweS0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21vc3RyYXJCb3RvbkhvbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUhvbWV9IGNsYXNzTmFtZT1cImhvbWUtYnV0dG9uIGJ0biBidG4tcHJpbWFyeSBwLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9ob21lLnBuZ1wiIGFsdD1cIkluaWNpb1wiIGNsYXNzTmFtZT1cImhvbWUtYnV0dG9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jb250YWluZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL3BlcmZpbC5wbmdcIiBhbHQ9XCJQZXJmaWxcIiBjbGFzc05hbWU9XCJwcm9maWxlLWltZyBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlcm5hbWUgdGV4dC13aGl0ZVwiPjxzdHJvbmc+e3VzZXJuYW1lfTwvc3Ryb25nPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9IGNsYXNzTmFtZT1cImxvZ291dC1idXR0b24gYnRuIGJ0bi1kYW5nZXIgcC0yIG1sLTNcIj5DZXJyYXIgU2VzacOzbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhYmVjZXJhO1xuXG5cblxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQ29va2llcyIsIkhlYWQiLCJDYWJlY2VyYSIsIm1vc3RyYXJCb3RvbkhvbWUiLCJyb3V0ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZmV0Y2hVc2VybmFtZSIsImZldGNoZWRVc2VybmFtZSIsImdldCIsImhhbmRsZUxvZ291dCIsInJlbW92ZSIsInB1c2giLCJoYW5kbGVIb21lIiwibGluayIsInJlbCIsImhyZWYiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0Iiwic3BhbiIsInN0cm9uZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/cabecera.js\n"));

/***/ })

});