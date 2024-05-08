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

/***/ "./src/pages/pronostico.js":
/*!*********************************!*\
  !*** ./src/pages/pronostico.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_cabecera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cabecera */ \"./src/components/cabecera.js\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var _components_searchbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/searchbox */ \"./src/components/searchbox.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_app */ \"./src/pages/_app.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\n\n\n\n\n\n\n\nconst Pronostico = ()=>{\n    const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n    const username = js_cookie__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"username\");\n    const handlePlaceSelected = async (place)=>{\n        const lugar = JSON.stringify(place);\n        const mensaje = JSON.parse(lugar.toString());\n        const lat = mensaje.geometry.location.lat;\n        const long = mensaje.geometry.location.lng;\n        const url = \"https://api.openweathermap.org/data/2.5/forecast?lat=\" + lat + \"&lon=\" + long + \"&appid=854c5489c0f85d6fd1fd9a30d77eee0a&lang=es\";\n        const response = await axios.get(url);\n        const lista_datos = response.data.list;\n        lista_datos.forEach((element)=>{\n            console.log(element.dt_txt);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100vw\",\n            height: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabecera__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mostrarBotonHome: true\n            }, void 0, false, {\n                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"seleccion\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"PARTE DE ARRIBA\"\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        onPlaceSelected: handlePlaceSelected\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"dias\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"icono\"\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"info\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"parrafo\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Precipitaciones\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 28\n                                    }, undefined),\n                                    \"Texto del primer p\\xe1rrafo.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                lineNumber: 39,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"parrafo\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Humedad\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 28\n                                    }, undefined),\n                                    \"Texto del segundo p\\xe1rrafo.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                lineNumber: 40,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"parrafo\",\n                                children: \"Texto del tercer p\\xe1rrafo.\"\n                            }, void 0, false, {\n                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                lineNumber: 41,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 38,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Pronostico;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pronostico);\nvar _c;\n$RefreshReg$(_c, \"Pronostico\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvbm9zdGljby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDTTtBQUNWO0FBQ1k7QUFDbEI7QUFDRTtBQUdoQyxNQUFNUyxhQUFhO0lBQ2YsTUFBTUMsUUFBUUMsbUJBQU9BLENBQUM7SUFDdEIsTUFBTUMsV0FBV0oscURBQVcsQ0FBQztJQUM3QixNQUFNTSxzQkFBc0IsT0FBT0M7UUFDaEMsTUFBTUMsUUFBT0MsS0FBS0MsU0FBUyxDQUFDSDtRQUM1QixNQUFNSSxVQUFVRixLQUFLRyxLQUFLLENBQUNKLE1BQU1LLFFBQVE7UUFDekMsTUFBTUMsTUFBSUgsUUFBUUksUUFBUSxDQUFDQyxRQUFRLENBQUNGLEdBQUc7UUFDdkMsTUFBTUcsT0FBS04sUUFBUUksUUFBUSxDQUFDQyxRQUFRLENBQUNFLEdBQUc7UUFDeEMsTUFBTUMsTUFBTSwwREFBMERMLE1BQU0sVUFBVUcsT0FBTztRQUM3RixNQUFNRyxXQUFXLE1BQU1sQixNQUFNRyxHQUFHLENBQUNjO1FBQ2pDLE1BQU1FLGNBQWFELFNBQVNFLElBQUksQ0FBQ0MsSUFBSTtRQUNyQ0YsWUFBWUcsT0FBTyxDQUFDQyxDQUFBQTtZQUNuQkMsUUFBUUMsR0FBRyxDQUFDRixRQUFRRyxNQUFNO1FBQzNCO0lBQ0g7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsT0FBTztZQUNSQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjs7MEJBQ0UsOERBQUNwQyw0REFBUUE7Z0JBQUNxQyxrQkFBa0I7Ozs7OzswQkFDNUIsOERBQUNKO2dCQUFJSyxXQUFVOztrQ0FDWCw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ3JDLDZEQUFTQTt3QkFBQ3NDLGlCQUFrQjlCOzs7Ozs7Ozs7Ozs7MEJBRWpDLDhEQUFDdUI7Z0JBQUlRLE9BQU07O2tDQUNuQiw4REFBQ1I7d0JBQUlRLE9BQU07Ozs7OztrQ0FDWCw4REFBQ1I7d0JBQUlRLE9BQU07OzBDQUNQLDhEQUFDQztnQ0FBRUQsT0FBTTs7a0RBQVUsOERBQUNFO2tEQUFPOzs7Ozs7b0NBQXdCOzs7Ozs7OzBDQUNuRCw4REFBQ0Q7Z0NBQUVELE9BQU07O2tEQUFVLDhEQUFDRTtrREFBTzs7Ozs7O29DQUFnQjs7Ozs7OzswQ0FDM0MsOERBQUNEO2dDQUFFRCxPQUFNOzBDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWYsOERBQUN4Qyx1REFBR0E7Ozs7Ozs7Ozs7O0FBSWhCO0tBdkNNSTtBQXlDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvbm9zdGljby5qcz9iMjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENhYmVjZXJhIGZyb20gJy4uL2NvbXBvbmVudHMvY2FiZWNlcmEnO1xuaW1wb3J0IFBpZSBmcm9tICcuLi9jb21wb25lbnRzL3BpZSc7XG5pbXBvcnQgU2VhcmNoQm94IGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoYm94JztcbmltcG9ydCB7c2VydmVyfSBmcm9tICcuL19hcHAnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuXG5jb25zdCBQcm9ub3N0aWNvID0gKCkgPT4ge1xuICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbiAgICBjb25zdCB1c2VybmFtZSA9IENvb2tpZXMuZ2V0KCd1c2VybmFtZScpO1xuICAgIGNvbnN0IGhhbmRsZVBsYWNlU2VsZWN0ZWQgPSBhc3luYyAocGxhY2UpID0+IHtcbiAgICAgICBjb25zdCBsdWdhcj0gSlNPTi5zdHJpbmdpZnkocGxhY2UpO1xuICAgICAgIGNvbnN0IG1lbnNhamUgPSBKU09OLnBhcnNlKGx1Z2FyLnRvU3RyaW5nKCkpO1xuICAgICAgIGNvbnN0IGxhdD1tZW5zYWplLmdlb21ldHJ5LmxvY2F0aW9uLmxhdDtcbiAgICAgICBjb25zdCBsb25nPW1lbnNhamUuZ2VvbWV0cnkubG9jYXRpb24ubG5nO1xuICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PScgKyBsYXQgKyAnJmxvbj0nICsgbG9uZyArICcmYXBwaWQ9ODU0YzU0ODljMGY4NWQ2ZmQxZmQ5YTMwZDc3ZWVlMGEmbGFuZz1lcyc7XG4gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgICAgICBjb25zdCBsaXN0YV9kYXRvcyA9cmVzcG9uc2UuZGF0YS5saXN0O1xuICAgICAgIGxpc3RhX2RhdG9zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuZHRfdHh0KTtcbiAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwdncnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICAgIH19PlxuICAgICAgICAgICAgPENhYmVjZXJhIG1vc3RyYXJCb3RvbkhvbWU9e3RydWV9Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWNjaW9uXCI+XG4gICAgICAgICAgICAgICAgPGgyPlBBUlRFIERFIEFSUklCQTwvaDI+XG4gICAgICAgICAgICAgICAgPFNlYXJjaEJveCBvblBsYWNlU2VsZWN0ZWQgPXtoYW5kbGVQbGFjZVNlbGVjdGVkfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJpY29ub1wiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgIDxwIGNsYXNzPVwicGFycmFmb1wiPjxzdHJvbmc+UHJlY2lwaXRhY2lvbmVzPC9zdHJvbmc+VGV4dG8gZGVsIHByaW1lciBww6FycmFmby48L3A+XG4gICAgICAgIDxwIGNsYXNzPVwicGFycmFmb1wiPjxzdHJvbmc+SHVtZWRhZDwvc3Ryb25nPlRleHRvIGRlbCBzZWd1bmRvIHDDoXJyYWZvLjwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJwYXJyYWZvXCI+VGV4dG8gZGVsIHRlcmNlciBww6FycmFmby48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuICAgICAgICAgICAgPFBpZS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICApOyBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb25vc3RpY287XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkNhYmVjZXJhIiwiUGllIiwiU2VhcmNoQm94Iiwic2VydmVyIiwiQ29va2llcyIsIlByb25vc3RpY28iLCJheGlvcyIsInJlcXVpcmUiLCJ1c2VybmFtZSIsImdldCIsImhhbmRsZVBsYWNlU2VsZWN0ZWQiLCJwbGFjZSIsImx1Z2FyIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lbnNhamUiLCJwYXJzZSIsInRvU3RyaW5nIiwibGF0IiwiZ2VvbWV0cnkiLCJsb2NhdGlvbiIsImxvbmciLCJsbmciLCJ1cmwiLCJyZXNwb25zZSIsImxpc3RhX2RhdG9zIiwiZGF0YSIsImxpc3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJkdF90eHQiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwibW9zdHJhckJvdG9uSG9tZSIsImNsYXNzTmFtZSIsImgyIiwib25QbGFjZVNlbGVjdGVkIiwiY2xhc3MiLCJwIiwic3Ryb25nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/pronostico.js\n"));

/***/ })

});