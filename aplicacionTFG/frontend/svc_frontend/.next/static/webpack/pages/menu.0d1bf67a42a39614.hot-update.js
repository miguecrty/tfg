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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Cabecera = (param)=>{\n    let { mostrarBotonHome, mostrarUser } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUsername = async ()=>{\n            const fetchedUsername = await js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"username\");\n            setUsername(fetchedUsername);\n        };\n        fetchUsername();\n    }, []);\n    const handleLogout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"isLoggedIn\");\n        router.push(\"/\"); // Redirect to the homepage after logout\n    };\n    const handleHome = ()=>{\n        router.push(\"/\"); // Redirect to the homepage\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"./styles/cabecera.css\"\n                }, void 0, false, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"header\",\n                style: {\n                    minWidth: \"400px;auto\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"nav-container container-fluid px-3 w-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: mostrarBotonHome && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleHome,\n                                className: \"btn p-1.5 home-button iconohome\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faHome,\n                                    className: \"home-button\",\n                                    style: {\n                                        width: \"30px\",\n                                        height: \"30px\",\n                                        color: \"white\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 30\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, undefined),\n                        mostrarUser && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"profile-container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faUser,\n                                    className: \"logout-icon mr-3\",\n                                    style: {\n                                        width: \"20px\",\n                                        height: \"20px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"username text-black\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        style: {\n                                            color: \"white\"\n                                        },\n                                        children: username\n                                    }, void 0, false, {\n                                        fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 59\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleLogout,\n                                    className: \"cerrar p-2 logout-button\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faSignOutAlt,\n                                            className: \"logout-icon mr-3\",\n                                            style: {\n                                                width: \"20px\",\n                                                height: \"20px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        \"Cerrar Sesi\\xf3n\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                            lineNumber: 43,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/cabecera.js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Cabecera, \"avttvagYHAg3NNb2mFIxeLCKLJo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Cabecera;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cabecera);\nvar _c;\n$RefreshReg$(_c, \"Cabecera\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYWJlY2VyYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ1I7QUFDSDtBQUNtQztBQUNlO0FBQy9FLE1BQU1TLFdBQVc7UUFBQyxFQUFFQyxnQkFBZ0IsRUFBQ0MsV0FBVyxFQUFDOztJQUM3QyxNQUFNQyxTQUFTVixzREFBU0E7SUFDeEIsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDO0lBRXpDRCxnREFBU0EsQ0FBQztRQUNOLE1BQU1lLGdCQUFnQjtZQUNsQixNQUFNQyxrQkFBa0IsTUFBTWIscURBQVcsQ0FBQztZQUMxQ1csWUFBWUU7UUFDaEI7UUFDQUQ7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNRyxlQUFlO1FBQ2pCZix3REFBYyxDQUFDO1FBQ2ZTLE9BQU9RLElBQUksQ0FBQyxNQUFNLHdDQUF3QztJQUM5RDtJQUVBLE1BQU1DLGFBQWE7UUFDZlQsT0FBT1EsSUFBSSxDQUFDLE1BQU0sMkJBQTJCO0lBQ2pEO0lBRUEscUJBQ0k7OzBCQUNBLDhEQUFDaEIsa0RBQUlBOzBCQUNMLDRFQUFDa0I7b0JBQUtDLEtBQUk7b0JBQWFDLE1BQUs7Ozs7Ozs7Ozs7OzBCQUU1Qiw4REFBQ0M7Z0JBQU9DLFdBQVU7Z0JBQVNDLE9BQU87b0JBQUNDLFVBQVM7Z0JBQVk7MEJBQ3BELDRFQUFDQztvQkFBSUgsV0FBVTs7c0NBQ1gsOERBQUNJO3NDQUNJcEIsa0NBQ0csOERBQUNxQjtnQ0FBT0MsU0FBU1g7Z0NBQVlLLFdBQVU7MENBQ2xDLDRFQUFDckIsMkVBQWVBO29DQUFDNEIsTUFBTTNCLHFFQUFNQTtvQ0FBRW9CLFdBQVU7b0NBQWNDLE9BQU87d0NBQUNPLE9BQU07d0NBQU9DLFFBQU87d0NBQU9DLE9BQU07b0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7d0JBSW5IekIsNkJBQ0QsOERBQUNtQjs0QkFBSUosV0FBVTs7OENBQ1gsOERBQUNyQiwyRUFBZUE7b0NBQUM0QixNQUFNekIscUVBQU1BO29DQUFFa0IsV0FBVTtvQ0FBbUJDLE9BQU87d0NBQUNPLE9BQU07d0NBQU9DLFFBQU87b0NBQU07Ozs7Ozs4Q0FDOUYsOERBQUNFO29DQUFLWCxXQUFVOzhDQUFzQiw0RUFBQ1k7d0NBQU9YLE9BQU87NENBQUNTLE9BQU07d0NBQU87a0RBQUl2Qjs7Ozs7Ozs7Ozs7OENBQ3ZFLDhEQUFDa0I7b0NBQU9DLFNBQVNkO29DQUFjUSxXQUFVOztzREFDekMsOERBQUNyQiwyRUFBZUE7NENBQUM0QixNQUFNMUIsMkVBQVlBOzRDQUFFbUIsV0FBVTs0Q0FBbUJDLE9BQU87Z0RBQUNPLE9BQU07Z0RBQU9DLFFBQU87NENBQU07Ozs7Ozt3Q0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTN0g7R0FqRE0xQjs7UUFDYVAsa0RBQVNBOzs7S0FEdEJPO0FBbUROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhYmVjZXJhLmpzP2Y5MDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgZmFIb21lLGZhU2lnbk91dEFsdCwgZmFVc2VyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuY29uc3QgQ2FiZWNlcmEgPSAoeyBtb3N0cmFyQm90b25Ib21lLG1vc3RyYXJVc2VyfSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hVc2VybmFtZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZldGNoZWRVc2VybmFtZSA9IGF3YWl0IENvb2tpZXMuZ2V0KCd1c2VybmFtZScpO1xuICAgICAgICAgICAgc2V0VXNlcm5hbWUoZmV0Y2hlZFVzZXJuYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgZmV0Y2hVc2VybmFtZSgpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgQ29va2llcy5yZW1vdmUoJ2lzTG9nZ2VkSW4nKTtcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTsgLy8gUmVkaXJlY3QgdG8gdGhlIGhvbWVwYWdlIGFmdGVyIGxvZ291dFxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVIb21lID0gKCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaCgnLycpOyAvLyBSZWRpcmVjdCB0byB0aGUgaG9tZXBhZ2VcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi9zdHlsZXMvY2FiZWNlcmEuY3NzXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiIHN0eWxlPXt7bWluV2lkdGg6JzQwMHB4O2F1dG8nfX0+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXIgY29udGFpbmVyLWZsdWlkIHB4LTMgdy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge21vc3RyYXJCb3RvbkhvbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVIb21lfSBjbGFzc05hbWU9XCJidG4gcC0xLjUgaG9tZS1idXR0b24gaWNvbm9ob21lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIb21lfSBjbGFzc05hbWU9XCJob21lLWJ1dHRvblwiIHN0eWxlPXt7d2lkdGg6JzMwcHgnLGhlaWdodDonMzBweCcsY29sb3I6J3doaXRlJ319IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7bW9zdHJhclVzZXIgJiYoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gY2xhc3NOYW1lPVwibG9nb3V0LWljb24gbXItM1wiIHN0eWxlPXt7d2lkdGg6JzIwcHgnLGhlaWdodDonMjBweCd9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VybmFtZSB0ZXh0LWJsYWNrXCI+PHN0cm9uZyBzdHlsZT17e2NvbG9yOid3aGl0ZSd9fT57dXNlcm5hbWV9PC9zdHJvbmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gY2xhc3NOYW1lPVwiY2VycmFyIHAtMiBsb2dvdXQtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaWduT3V0QWx0fSBjbGFzc05hbWU9XCJsb2dvdXQtaWNvbiBtci0zXCIgc3R5bGU9e3t3aWR0aDonMjBweCcsaGVpZ2h0OicyMHB4J319IC8+XG4gICAgICAgICAgICAgICAgICAgIENlcnJhciBTZXNpw7NuXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FiZWNlcmE7XG5cblxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQ29va2llcyIsIkhlYWQiLCJGb250QXdlc29tZUljb24iLCJmYUhvbWUiLCJmYVNpZ25PdXRBbHQiLCJmYVVzZXIiLCJDYWJlY2VyYSIsIm1vc3RyYXJCb3RvbkhvbWUiLCJtb3N0cmFyVXNlciIsInJvdXRlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJmZXRjaFVzZXJuYW1lIiwiZmV0Y2hlZFVzZXJuYW1lIiwiZ2V0IiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlIiwicHVzaCIsImhhbmRsZUhvbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImhlYWRlciIsImNsYXNzTmFtZSIsInN0eWxlIiwibWluV2lkdGgiLCJuYXYiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiaWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJzcGFuIiwic3Ryb25nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/cabecera.js\n"));

/***/ })

});