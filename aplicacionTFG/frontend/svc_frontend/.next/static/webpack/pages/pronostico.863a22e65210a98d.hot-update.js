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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_cabecera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cabecera */ \"./src/components/cabecera.js\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var _components_searchbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/searchbox */ \"./src/components/searchbox.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_app */ \"./src/pages/_app.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _components_chartTemperatura__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/chartTemperatura */ \"./src/components/chartTemperatura.js\");\n/* harmony import */ var _components_chartNubes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/chartNubes */ \"./src/components/chartNubes.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Pronostico = ()=>{\n    _s();\n    const [labels, setLabels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handlePlaceSelected = async (place)=>{\n        const lugar = JSON.stringify(place);\n        const mensaje = JSON.parse(lugar.toString());\n        const lat = mensaje.geometry.location.lat;\n        const long = mensaje.geometry.location.lng;\n        try {\n            const datos = {\n                latitud: lat,\n                longitud: long\n            };\n            const response = await fetch(\"http://localhost:3000/obtenerpronostico\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(datos)\n            });\n            if (response.ok) {\n                const data = await response.json();\n                for(const dia in data.nubes){\n                    console.log(dia + \":\");\n                    console.log(\"  Horas: \" + data.nubes[dia].horas);\n                    console.log(\"  Valores: \" + data.nubes[dia].valores);\n                }\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100vw\",\n            height: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabecera__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mostrarBotonHome: true\n            }, void 0, false, {\n                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"seleccion\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"PARTE DE ARRIBA\"\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        onPlaceSelected: handlePlaceSelected\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"eltiempo\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"dias\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                class: \"icono\",\n                                src: \"http://openweathermap.org/img/w/01d.png\",\n                                alt: \"Icono del clima\"\n                            }, void 0, false, {\n                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"22 \\xbaC\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 16\n                                    }, undefined),\n                                    \" en \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Cartaya\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 42\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"info\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        class: \"parrafo\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Precipitaciones:\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 28\n                                            }, undefined),\n                                            \"valor3\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        class: \"parrafo\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Humedad:\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 28\n                                            }, undefined),\n                                            \"valor2\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        class: \"parrafo\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Viento:\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 28\n                                            }, undefined),\n                                            \"valor1.\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                lineNumber: 65,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"grafica\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chartNubes__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                            lineNumber: 73,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 72,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"selecciondias\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"infodias\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"dia1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"lunes\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"http://openweathermap.org/img/w/01n.png\",\n                                                alt: \"Icono del clima\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 79,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 11\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"dia2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"lunes\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"http://openweathermap.org/img/w/01n.png\",\n                                                alt: \"Icono del clima\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"dia3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"lunes\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"http://openweathermap.org/img/w/01n.png\",\n                                                alt: \"Icono del clima\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 89,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"dia4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"lunes\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"http://openweathermap.org/img/w/01n.png\",\n                                                alt: \"Icono del clima\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 94,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"dia5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"lunes\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"http://openweathermap.org/img/w/01n.png\",\n                                                alt: \"Icono del clima\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 99,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                            lineNumber: 76,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 75,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Pronostico, \"rl2dXANavIyHS9hBRNTobI5UkQg=\");\n_c = Pronostico;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pronostico);\nvar _c;\n$RefreshReg$(_c, \"Pronostico\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvbm9zdGljby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDTTtBQUNWO0FBQ1k7QUFDbEI7QUFDRTtBQUM2QjtBQUNaO0FBR2pELE1BQU1XLGFBQWE7O0lBQ2YsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkMsTUFBTWEsc0JBQXNCLE9BQU9DO1FBQy9CLE1BQU1DLFFBQU9DLEtBQUtDLFNBQVMsQ0FBQ0g7UUFDNUIsTUFBTUksVUFBVUYsS0FBS0csS0FBSyxDQUFDSixNQUFNSyxRQUFRO1FBQ3pDLE1BQU1DLE1BQUlILFFBQVFJLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDRixHQUFHO1FBQ3ZDLE1BQU1HLE9BQUtOLFFBQVFJLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDRSxHQUFHO1FBQ3hDLElBQUk7WUFDQSxNQUFNQyxRQUFRO2dCQUNaQyxTQUFTTjtnQkFDVE8sVUFBVUo7WUFDWjtZQUVKLE1BQU1LLFdBQVcsTUFBTUMsTUFBTSwyQ0FBMkM7Z0JBQ2hFQyxRQUFRO2dCQUNWQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1qQixLQUFLQyxTQUFTLENBQUNTO1lBQ3ZCO1lBRUEsSUFBSUcsU0FBU0ssRUFBRSxFQUFFO2dCQUNiLE1BQU1DLE9BQU8sTUFBTU4sU0FBU08sSUFBSTtnQkFDaEMsSUFBSyxNQUFNQyxPQUFPRixLQUFLRyxLQUFLLENBQUU7b0JBQzFCQyxRQUFRQyxHQUFHLENBQUNILE1BQU07b0JBQ2xCRSxRQUFRQyxHQUFHLENBQUMsY0FBY0wsS0FBS0csS0FBSyxDQUFDRCxJQUFJLENBQUNJLEtBQUs7b0JBQy9DRixRQUFRQyxHQUFHLENBQUMsZ0JBQWdCTCxLQUFLRyxLQUFLLENBQUNELElBQUksQ0FBQ0ssT0FBTztnQkFDdkQ7WUFDSjtRQUNKLEVBQ0MsT0FBTUMsT0FBTTtZQUNUSixRQUFRQyxHQUFHLENBQUNHO1FBQ2Y7SUFJVDtJQUNJLHFCQUNJLDhEQUFDQztRQUFJQyxPQUFPO1lBQ1JDLE9BQU87WUFDUEMsUUFBUTtRQUNWOzswQkFFRSw4REFBQzVDLDREQUFRQTtnQkFBQzZDLGtCQUFrQjs7Ozs7OzBCQUM1Qiw4REFBQ0o7Z0JBQUlLLFdBQVU7O2tDQUNYLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDN0MsNkRBQVNBO3dCQUFDOEMsaUJBQWtCdEM7Ozs7Ozs7Ozs7OzswQkFFakMsOERBQUMrQjtnQkFBSUssV0FBVTs7a0NBQ2YsOERBQUNMO3dCQUFJUSxPQUFNOzswQ0FDWCw4REFBQ0M7Z0NBQUlELE9BQU07Z0NBQVFFLEtBQU07Z0NBQTBDQyxLQUFJOzs7Ozs7MENBQ3ZFLDhEQUFDQzs7a0RBQUUsOERBQUNDO2tEQUFPOzs7Ozs7b0NBQWM7a0RBQUksOERBQUNBO2tEQUFPOzs7Ozs7Ozs7Ozs7MENBRTdDLDhEQUFDYjtnQ0FBSVEsT0FBTTs7a0RBQ1AsOERBQUNJO3dDQUFFSixPQUFNOzswREFBVSw4REFBQ0s7MERBQU87Ozs7Ozs0Q0FBeUI7Ozs7Ozs7a0RBQ3BELDhEQUFDRDt3Q0FBRUosT0FBTTs7MERBQVUsOERBQUNLOzBEQUFPOzs7Ozs7NENBQWlCOzs7Ozs7O2tEQUM1Qyw4REFBQ0Q7d0NBQUVKLE9BQU07OzBEQUFVLDhEQUFDSzswREFBTzs7Ozs7OzRDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJL0MsOERBQUNiO3dCQUFJUSxPQUFNO2tDQUNQLDRFQUFDM0MsOERBQVVBOzs7Ozs7Ozs7O2tDQUVmLDhEQUFDbUM7d0JBQUlRLE9BQU07a0NBQ1gsNEVBQUNSOzRCQUFJUSxPQUFNOzs4Q0FDUCw4REFBQ1I7b0NBQUlRLE9BQU07OENBQ1QsNEVBQUNJOzs0Q0FBRTswREFDTCw4REFBQ0g7Z0RBQUlDLEtBQU07Z0RBQTBDQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHekQsOERBQUNYO29DQUFJUSxPQUFNOzhDQUNYLDRFQUFDSTs7NENBQUU7MERBQ0gsOERBQUNIO2dEQUFJQyxLQUFNO2dEQUEwQ0MsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR3pELDhEQUFDWDtvQ0FBSVEsT0FBTTs4Q0FDWCw0RUFBQ0k7OzRDQUFFOzBEQUNILDhEQUFDSDtnREFBSUMsS0FBTTtnREFBMENDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUd6RCw4REFBQ1g7b0NBQUlRLE9BQU07OENBQ1gsNEVBQUNJOzs0Q0FBRTswREFDSCw4REFBQ0g7Z0RBQUlDLEtBQU07Z0RBQTBDQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHekQsOERBQUNYO29DQUFJUSxPQUFNOzhDQUNYLDRFQUFDSTs7NENBQUU7MERBQ0gsOERBQUNIO2dEQUFJQyxLQUFNO2dEQUEwQ0MsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRckQsOERBQUNuRCx1REFBR0E7Ozs7Ozs7Ozs7O0FBSWhCO0dBbkdNTTtLQUFBQTtBQXFHTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvbm9zdGljby5qcz9iMjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENhYmVjZXJhIGZyb20gJy4uL2NvbXBvbmVudHMvY2FiZWNlcmEnO1xuaW1wb3J0IFBpZSBmcm9tICcuLi9jb21wb25lbnRzL3BpZSc7XG5pbXBvcnQgU2VhcmNoQm94IGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoYm94JztcbmltcG9ydCB7c2VydmVyfSBmcm9tICcuL19hcHAnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBDaGFydFRlbXBlcmF0dXJhIGZyb20gJ0AvY29tcG9uZW50cy9jaGFydFRlbXBlcmF0dXJhJztcbmltcG9ydCBDaGFydE51YmVzIGZyb20gJ0AvY29tcG9uZW50cy9jaGFydE51YmVzJztcblxuXG5jb25zdCBQcm9ub3N0aWNvID0gKCkgPT4ge1xuICAgIGNvbnN0IFtsYWJlbHMsIHNldExhYmVsc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgaGFuZGxlUGxhY2VTZWxlY3RlZCA9IGFzeW5jIChwbGFjZSkgPT4ge1xuICAgICAgICBjb25zdCBsdWdhcj0gSlNPTi5zdHJpbmdpZnkocGxhY2UpO1xuICAgICAgICBjb25zdCBtZW5zYWplID0gSlNPTi5wYXJzZShsdWdhci50b1N0cmluZygpKTtcbiAgICAgICAgY29uc3QgbGF0PW1lbnNhamUuZ2VvbWV0cnkubG9jYXRpb24ubGF0O1xuICAgICAgICBjb25zdCBsb25nPW1lbnNhamUuZ2VvbWV0cnkubG9jYXRpb24ubG5nO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGF0b3MgPSB7XG4gICAgICAgICAgICAgIGxhdGl0dWQ6IGxhdCxcbiAgICAgICAgICAgICAgbG9uZ2l0dWQ6IGxvbmcsXG4gICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL29idGVuZXJwcm9ub3N0aWNvJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRvcylcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZGlhIGluIGRhdGEubnViZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGlhICsgXCI6XCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiAgSG9yYXM6IFwiICsgZGF0YS5udWJlc1tkaWFdLmhvcmFzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIgIFZhbG9yZXM6IFwiICsgZGF0YS5udWJlc1tkaWFdLnZhbG9yZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgfVxuICAgICAgICBcbiAgICBcblxufVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgXG4gICAgICAgICAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPENhYmVjZXJhIG1vc3RyYXJCb3RvbkhvbWU9e3RydWV9Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWNjaW9uXCI+XG4gICAgICAgICAgICAgICAgPGgyPlBBUlRFIERFIEFSUklCQTwvaDI+XG4gICAgICAgICAgICAgICAgPFNlYXJjaEJveCBvblBsYWNlU2VsZWN0ZWQgPXtoYW5kbGVQbGFjZVNlbGVjdGVkfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsdGllbXBvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhc1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImljb25vXCIgc3JjPXtgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8wMWQucG5nYH0gYWx0PVwiSWNvbm8gZGVsIGNsaW1hXCI+PC9pbWc+XG4gICAgICAgICAgICA8cD48c3Ryb25nPjIyIMK6Qzwvc3Ryb25nPiBlbiA8c3Ryb25nPkNhcnRheWE8L3N0cm9uZz48L3A+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICA8cCBjbGFzcz1cInBhcnJhZm9cIj48c3Ryb25nPlByZWNpcGl0YWNpb25lczo8L3N0cm9uZz52YWxvcjM8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwicGFycmFmb1wiPjxzdHJvbmc+SHVtZWRhZDo8L3N0cm9uZz52YWxvcjI8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwicGFycmFmb1wiPjxzdHJvbmc+VmllbnRvOjwvc3Ryb25nPnZhbG9yMS48L3A+XG4gICAgPC9kaXY+XG4gICAgXG48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JhZmljYVwiPlxuICAgICAgICA8Q2hhcnROdWJlcz48L0NoYXJ0TnViZXM+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNlbGVjY2lvbmRpYXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mb2RpYXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRpYTFcIj5cbiAgICAgICAgICA8cD5sdW5lc1xuICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvMDFuLnBuZ2B9IGFsdD1cIkljb25vIGRlbCBjbGltYVwiLz5cbiAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaWEyXCI+XG4gICAgICAgIDxwPmx1bmVzXG4gICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8wMW4ucG5nYH0gYWx0PVwiSWNvbm8gZGVsIGNsaW1hXCIvPlxuICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRpYTNcIj5cbiAgICAgICAgPHA+bHVuZXNcbiAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LzAxbi5wbmdgfSBhbHQ9XCJJY29ubyBkZWwgY2xpbWFcIi8+XG4gICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhNFwiPlxuICAgICAgICA8cD5sdW5lc1xuICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvMDFuLnBuZ2B9IGFsdD1cIkljb25vIGRlbCBjbGltYVwiLz5cbiAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaWE1XCI+XG4gICAgICAgIDxwPmx1bmVzXG4gICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8wMW4ucG5nYH0gYWx0PVwiSWNvbm8gZGVsIGNsaW1hXCIvPlxuICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8UGllLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICk7IFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvbm9zdGljbztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQ2FiZWNlcmEiLCJQaWUiLCJTZWFyY2hCb3giLCJzZXJ2ZXIiLCJDb29raWVzIiwiQ2hhcnRUZW1wZXJhdHVyYSIsIkNoYXJ0TnViZXMiLCJQcm9ub3N0aWNvIiwibGFiZWxzIiwic2V0TGFiZWxzIiwiaGFuZGxlUGxhY2VTZWxlY3RlZCIsInBsYWNlIiwibHVnYXIiLCJKU09OIiwic3RyaW5naWZ5IiwibWVuc2FqZSIsInBhcnNlIiwidG9TdHJpbmciLCJsYXQiLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwibG9uZyIsImxuZyIsImRhdG9zIiwibGF0aXR1ZCIsImxvbmdpdHVkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5Iiwib2siLCJkYXRhIiwianNvbiIsImRpYSIsIm51YmVzIiwiY29uc29sZSIsImxvZyIsImhvcmFzIiwidmFsb3JlcyIsImVycm9yIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIm1vc3RyYXJCb3RvbkhvbWUiLCJjbGFzc05hbWUiLCJoMiIsIm9uUGxhY2VTZWxlY3RlZCIsImNsYXNzIiwiaW1nIiwic3JjIiwiYWx0IiwicCIsInN0cm9uZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/pronostico.js\n"));

/***/ })

});