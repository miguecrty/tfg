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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_cabecera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cabecera */ \"./src/components/cabecera.js\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var _components_searchbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/searchbox */ \"./src/components/searchbox.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_app */ \"./src/pages/_app.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _components_chartTemperatura__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/chartTemperatura */ \"./src/components/chartTemperatura.js\");\n/* harmony import */ var _components_chartNubes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/chartNubes */ \"./src/components/chartNubes.js\");\n\n\n\n\n\n\n\n\n\n\nconst Pronostico = ()=>{\n    const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n    const username = js_cookie__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"username\");\n    const handlePlaceSelected = async (place)=>{\n        const lugar = JSON.stringify(place);\n        const mensaje = JSON.parse(lugar.toString());\n        const lat = mensaje.geometry.location.lat;\n        const long = mensaje.geometry.location.lng;\n        const url = \"https://api.openweathermap.org/data/2.5/forecast?lat=\" + lat + \"&lon=\" + long + \"&appid=854c5489c0f85d6fd1fd9a30d77eee0a&lang=es\";\n        const response = await axios.get(url);\n        const lista_datos = response.data.list;\n        const temperaturas = {};\n        const descripcion_tiempo = {};\n        lista_datos.forEach((element)=>{\n            temperaturas[element.dt_txt] = {\n                temp: element.main.temp,\n                temp_min: element.main.temp_min,\n                temp_max: element.main.temp_max\n            };\n            descripcion_tiempo[element.dt_txt] = {\n                description: element.weather.description,\n                icon: element.weather.icon\n            };\n        });\n        console.log(temperaturas);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100vw\",\n            height: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabecera__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mostrarBotonHome: true\n            }, void 0, false, {\n                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"seleccion\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"PARTE DE ARRIBA\"\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        onPlaceSelected: handlePlaceSelected\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"eltiempo\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"dias\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                class: \"icono\",\n                                src: \"http://openweathermap.org/img/w/01d.png\",\n                                alt: \"Icono del clima\"\n                            }, void 0, false, {\n                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"22 \\xbaC\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 16\n                                    }, undefined),\n                                    \" en \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Cartaya\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 42\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"info\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        class: \"parrafo\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Precipitaciones:\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 28\n                                            }, undefined),\n                                            \"valor3\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        class: \"parrafo\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Humedad:\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 28\n                                            }, undefined),\n                                            \"valor2\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        class: \"parrafo\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Viento:\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 28\n                                            }, undefined),\n                                            \"valor1.\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                lineNumber: 48,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"grafica\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chartNubes__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                            lineNumber: 56,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 55,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"selecciondias\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"infodias\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"dia1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"lunes\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"http://openweathermap.org/img/w/01n.png\",\n                                                alt: \"Icono del clima\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 11\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"dia2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"lunes\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"http://openweathermap.org/img/w/01n.png\",\n                                                alt: \"Icono del clima\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"dia3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"lunes\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"http://openweathermap.org/img/w/01n.png\",\n                                                alt: \"Icono del clima\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"dia4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"lunes\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"http://openweathermap.org/img/w/01n.png\",\n                                                alt: \"Icono del clima\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"dia5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"lunes\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"http://openweathermap.org/img/w/01n.png\",\n                                                alt: \"Icono del clima\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 82,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                            lineNumber: 59,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 58,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Pronostico;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pronostico);\nvar _c;\n$RefreshReg$(_c, \"Pronostico\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUd6RCw4REFBQ1g7b0NBQUlRLE9BQU07OENBQ1gsNEVBQUNJOzs0Q0FBRTswREFDSCw4REFBQ0g7Z0RBQUlDLEtBQU07Z0RBQTBDQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHekQsOERBQUNYO29DQUFJUSxPQUFNOzhDQUNYLDRFQUFDSTs7NENBQUU7MERBQ0gsOERBQUNIO2dEQUFJQyxLQUFNO2dEQUEwQ0MsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR3pELDhEQUFDWDtvQ0FBSVEsT0FBTTs4Q0FDWCw0RUFBQ0k7OzRDQUFFOzBEQUNILDhEQUFDSDtnREFBSUMsS0FBTTtnREFBMENDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUXJELDhEQUFDdEQsdURBQUdBOzs7Ozs7Ozs7OztBQUloQjtLQWxGTU07QUFvRk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb25vc3RpY28uanM/YjI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBDYWJlY2VyYSBmcm9tICcuLi9jb21wb25lbnRzL2NhYmVjZXJhJztcbmltcG9ydCBQaWUgZnJvbSAnLi4vY29tcG9uZW50cy9waWUnO1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaGJveCc7XG5pbXBvcnQge3NlcnZlcn0gZnJvbSAnLi9fYXBwJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgQ2hhcnRUZW1wZXJhdHVyYSBmcm9tICdAL2NvbXBvbmVudHMvY2hhcnRUZW1wZXJhdHVyYSc7XG5pbXBvcnQgQ2hhcnROdWJlcyBmcm9tICdAL2NvbXBvbmVudHMvY2hhcnROdWJlcyc7XG5cblxuY29uc3QgUHJvbm9zdGljbyA9ICgpID0+IHtcbiAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBDb29raWVzLmdldCgndXNlcm5hbWUnKTtcbiAgICBjb25zdCBoYW5kbGVQbGFjZVNlbGVjdGVkID0gYXN5bmMgKHBsYWNlKSA9PiB7XG4gICAgICAgY29uc3QgbHVnYXI9IEpTT04uc3RyaW5naWZ5KHBsYWNlKTtcbiAgICAgICBjb25zdCBtZW5zYWplID0gSlNPTi5wYXJzZShsdWdhci50b1N0cmluZygpKTtcbiAgICAgICBjb25zdCBsYXQ9bWVuc2FqZS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQ7XG4gICAgICAgY29uc3QgbG9uZz1tZW5zYWplLmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcbiAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0nICsgbGF0ICsgJyZsb249JyArIGxvbmcgKyAnJmFwcGlkPTg1NGM1NDg5YzBmODVkNmZkMWZkOWEzMGQ3N2VlZTBhJmxhbmc9ZXMnO1xuICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgICAgY29uc3QgbGlzdGFfZGF0b3MgPXJlc3BvbnNlLmRhdGEubGlzdDtcbiAgICAgICBjb25zdCB0ZW1wZXJhdHVyYXMgPSB7fVxuICAgICAgIGNvbnN0IGRlc2NyaXBjaW9uX3RpZW1wbyA9IHt9XG4gICAgICAgbGlzdGFfZGF0b3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgdGVtcGVyYXR1cmFzW2VsZW1lbnQuZHRfdHh0XT17dGVtcDplbGVtZW50Lm1haW4udGVtcCx0ZW1wX21pbjplbGVtZW50Lm1haW4udGVtcF9taW4sdGVtcF9tYXg6ZWxlbWVudC5tYWluLnRlbXBfbWF4fTsgXG4gICAgICAgIGRlc2NyaXBjaW9uX3RpZW1wb1tlbGVtZW50LmR0X3R4dF09e2Rlc2NyaXB0aW9uOmVsZW1lbnQud2VhdGhlci5kZXNjcmlwdGlvbixpY29uOmVsZW1lbnQud2VhdGhlci5pY29ufTsgXG4gICAgICAgfSk7XG4gICAgICAgY29uc29sZS5sb2codGVtcGVyYXR1cmFzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwdncnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICAgIH19PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8Q2FiZWNlcmEgbW9zdHJhckJvdG9uSG9tZT17dHJ1ZX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY2Npb25cIj5cbiAgICAgICAgICAgICAgICA8aDI+UEFSVEUgREUgQVJSSUJBPC9oMj5cbiAgICAgICAgICAgICAgICA8U2VhcmNoQm94IG9uUGxhY2VTZWxlY3RlZCA9e2hhbmRsZVBsYWNlU2VsZWN0ZWR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWx0aWVtcG9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaWFzXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaWNvbm9cIiBzcmM9e2BodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LzAxZC5wbmdgfSBhbHQ9XCJJY29ubyBkZWwgY2xpbWFcIj48L2ltZz5cbiAgICAgICAgICAgIDxwPjxzdHJvbmc+MjIgwrpDPC9zdHJvbmc+IGVuIDxzdHJvbmc+Q2FydGF5YTwvc3Ryb25nPjwvcD5cblxuICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgIDxwIGNsYXNzPVwicGFycmFmb1wiPjxzdHJvbmc+UHJlY2lwaXRhY2lvbmVzOjwvc3Ryb25nPnZhbG9yMzwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJwYXJyYWZvXCI+PHN0cm9uZz5IdW1lZGFkOjwvc3Ryb25nPnZhbG9yMjwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJwYXJyYWZvXCI+PHN0cm9uZz5WaWVudG86PC9zdHJvbmc+dmFsb3IxLjwvcD5cbiAgICA8L2Rpdj5cbiAgICBcbjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJncmFmaWNhXCI+XG4gICAgICAgIDxDaGFydE51YmVzPjwvQ2hhcnROdWJlcz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2VsZWNjaW9uZGlhc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvZGlhc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhMVwiPlxuICAgICAgICAgIDxwPmx1bmVzXG4gICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8wMW4ucG5nYH0gYWx0PVwiSWNvbm8gZGVsIGNsaW1hXCIvPlxuICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRpYTJcIj5cbiAgICAgICAgPHA+bHVuZXNcbiAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LzAxbi5wbmdgfSBhbHQ9XCJJY29ubyBkZWwgY2xpbWFcIi8+XG4gICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhM1wiPlxuICAgICAgICA8cD5sdW5lc1xuICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvMDFuLnBuZ2B9IGFsdD1cIkljb25vIGRlbCBjbGltYVwiLz5cbiAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaWE0XCI+XG4gICAgICAgIDxwPmx1bmVzXG4gICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8wMW4ucG5nYH0gYWx0PVwiSWNvbm8gZGVsIGNsaW1hXCIvPlxuICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRpYTVcIj5cbiAgICAgICAgPHA+bHVuZXNcbiAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LzAxbi5wbmdgfSBhbHQ9XCJJY29ubyBkZWwgY2xpbWFcIi8+XG4gICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxQaWUvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgKTsgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9ub3N0aWNvO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJDYWJlY2VyYSIsIlBpZSIsIlNlYXJjaEJveCIsInNlcnZlciIsIkNvb2tpZXMiLCJDaGFydFRlbXBlcmF0dXJhIiwiQ2hhcnROdWJlcyIsIlByb25vc3RpY28iLCJheGlvcyIsInJlcXVpcmUiLCJ1c2VybmFtZSIsImdldCIsImhhbmRsZVBsYWNlU2VsZWN0ZWQiLCJwbGFjZSIsImx1Z2FyIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lbnNhamUiLCJwYXJzZSIsInRvU3RyaW5nIiwibGF0IiwiZ2VvbWV0cnkiLCJsb2NhdGlvbiIsImxvbmciLCJsbmciLCJ1cmwiLCJyZXNwb25zZSIsImxpc3RhX2RhdG9zIiwiZGF0YSIsImxpc3QiLCJ0ZW1wZXJhdHVyYXMiLCJkZXNjcmlwY2lvbl90aWVtcG8iLCJmb3JFYWNoIiwiZWxlbWVudCIsImR0X3R4dCIsInRlbXAiLCJtYWluIiwidGVtcF9taW4iLCJ0ZW1wX21heCIsImRlc2NyaXB0aW9uIiwid2VhdGhlciIsImljb24iLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIm1vc3RyYXJCb3RvbkhvbWUiLCJjbGFzc05hbWUiLCJoMiIsIm9uUGxhY2VTZWxlY3RlZCIsImNsYXNzIiwiaW1nIiwic3JjIiwiYWx0IiwicCIsInN0cm9uZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/pronostico.js\n"));

/***/ })

});