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

/***/ "./src/components/pie.js":
/*!*******************************!*\
  !*** ./src/components/pie.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\n\n\n\nconst Pie = (param)=>{\n    let { ayuda, page, setShowTooltip } = param;\n    const seccionAyuda = ()=>{\n        if (page === \"monitorizar\") {\n            console.log(\"H\");\n        }\n        if (page === \"pronostico\") {\n            console.log(\"B\");\n        }\n        if (page === \"mi cuenta\") {\n            console.log(\"M\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"bg-dark bg-opacity-75 text-white py-2\",\n        style: {\n            position: \"fixed\",\n            bottom: 0,\n            left: \"50%\",\n            transform: \"translateX(-50%)\",\n            width: \"100%\",\n            boxShadow: \"0px -5px 10px rgba(0, 0, 0, 0.5)\",\n            height: \"5%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"col text-white text-center\",\n                    style: {\n                        whiteSpace: \"nowrap\",\n                        overflow: \"hidden\",\n                        textOverflow: \"ellipsis\",\n                        fontSize: \"0.9rem\"\n                    },\n                    children: \"\\xa9 TFG [Monitorizaci\\xf3n] : Miguel \\xc1ngel L\\xf3pez Rodr\\xedguez\"\n                }, void 0, false, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/pie.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                ayuda && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        \"Ayuda\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCircleInfo,\n                            onClick: seccionAyuda,\n                            onMouseEnter: ()=>setShowTooltip(true),\n                            onMouseLeave: ()=>setShowTooltip(false),\n                            className: \"col-md-1 mr-2 mb-2\",\n                            style: {\n                                width: \"25px\",\n                                height: \"25px\",\n                                cursor: \"pointer\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/pie.js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/pie.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/pie.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Pie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pie);\nvar _c;\n$RefreshReg$(_c, \"Pie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9waWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDdUM7QUFDQTtBQUVqRSxNQUFNRyxNQUFNO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLGNBQWMsRUFBRTtJQUMxQyxNQUFNQyxlQUFlO1FBQ25CLElBQUlGLFNBQVMsZUFBZTtZQUMxQkcsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7UUFDQSxJQUFJSixTQUFTLGNBQWM7WUFDekJHLFFBQVFDLEdBQUcsQ0FBQztRQUNkO1FBQ0EsSUFBSUosU0FBUyxhQUFhO1lBQ3hCRyxRQUFRQyxHQUFHLENBQUM7UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7UUFDVkMsT0FBTztZQUNMQyxVQUFVO1lBQ1ZDLFFBQVE7WUFDUkMsTUFBTTtZQUNOQyxXQUFXO1lBQ1hDLE9BQU87WUFDUEMsV0FBVztZQUNYQyxRQUFRO1FBQ1Y7a0JBRUEsNEVBQUNDO1lBQUlULFdBQVU7OzhCQUNiLDhEQUFDVTtvQkFDQ1YsV0FBVTtvQkFDVkMsT0FBTzt3QkFDTFUsWUFBWTt3QkFDWkMsVUFBVTt3QkFDVkMsY0FBYzt3QkFDZEMsVUFBVTtvQkFDWjs4QkFDRDs7Ozs7O2dCQUdBckIsdUJBQ0M7O3dCQUFFO3NDQUVBLDhEQUFDSCwyRUFBZUE7NEJBQ2R5QixNQUFNeEIsMkVBQVlBOzRCQUNsQnlCLFNBQVNwQjs0QkFDVHFCLGNBQWMsSUFBTXRCLGVBQWU7NEJBQ25DdUIsY0FBYyxJQUFNdkIsZUFBZTs0QkFDbkNLLFdBQVU7NEJBQ1ZDLE9BQU87Z0NBQUVLLE9BQU87Z0NBQVFFLFFBQVE7Z0NBQVFXLFFBQVE7NEJBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEU7S0F0RE0zQjtBQXdETiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9waWUuanM/MGRkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQ2lyY2xlSW5mbyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbmNvbnN0IFBpZSA9ICh7IGF5dWRhLCBwYWdlLCBzZXRTaG93VG9vbHRpcCB9KSA9PiB7XG4gIGNvbnN0IHNlY2Npb25BeXVkYSA9ICgpID0+IHtcbiAgICBpZiAocGFnZSA9PT0gJ21vbml0b3JpemFyJykge1xuICAgICAgY29uc29sZS5sb2coXCJIXCIpO1xuICAgIH1cbiAgICBpZiAocGFnZSA9PT0gJ3Byb25vc3RpY28nKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkJcIik7XG4gICAgfVxuICAgIGlmIChwYWdlID09PSAnbWkgY3VlbnRhJykge1xuICAgICAgY29uc29sZS5sb2coXCJNXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb290ZXJcbiAgICAgIGNsYXNzTmFtZT1cImJnLWRhcmsgYmctb3BhY2l0eS03NSB0ZXh0LXdoaXRlIHB5LTJcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBib3hTaGFkb3c6ICcwcHggLTVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgICAgIGhlaWdodDogJzUlJ1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgPHBcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb2wgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcwLjlyZW0nLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAmY29weTsgVEZHIFtNb25pdG9yaXphY2nDs25dIDogTWlndWVsIMOBbmdlbCBMw7NwZXogUm9kcsOtZ3VlelxuICAgICAgICA8L3A+XG4gICAgICAgIHtheXVkYSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIEF5dWRhXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgIGljb249e2ZhQ2lyY2xlSW5mb31cbiAgICAgICAgICAgICAgb25DbGljaz17c2VjY2lvbkF5dWRhfVxuICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNob3dUb29sdGlwKHRydWUpfVxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNob3dUb29sdGlwKGZhbHNlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb2wtbWQtMSBtci0yIG1iLTInXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjVweCcsIGhlaWdodDogJzI1cHgnLCBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGllO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9udEF3ZXNvbWVJY29uIiwiZmFDaXJjbGVJbmZvIiwiUGllIiwiYXl1ZGEiLCJwYWdlIiwic2V0U2hvd1Rvb2x0aXAiLCJzZWNjaW9uQXl1ZGEiLCJjb25zb2xlIiwibG9nIiwiZm9vdGVyIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwb3NpdGlvbiIsImJvdHRvbSIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJveFNoYWRvdyIsImhlaWdodCIsImRpdiIsInAiLCJ3aGl0ZVNwYWNlIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJmb250U2l6ZSIsImljb24iLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/pie.js\n"));

/***/ })

});