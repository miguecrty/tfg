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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_cabecera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cabecera */ \"./src/components/cabecera.js\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var _components_searchbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/searchbox */ \"./src/components/searchbox.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_app */ \"./src/pages/_app.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _components_chartTemperatura__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/chartTemperatura */ \"./src/components/chartTemperatura.js\");\n/* harmony import */ var _components_chartNubes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/chartNubes */ \"./src/components/chartNubes.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Pronostico = ()=>{\n    _s();\n    const [diasSemana, setDiasSemana] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handlePlaceSelected = async (place)=>{\n        const lugar = JSON.stringify(place);\n        const mensaje = JSON.parse(lugar.toString());\n        const lat = mensaje.geometry.location.lat;\n        const long = mensaje.geometry.location.lng;\n        try {\n            const datos = {\n                latitud: lat,\n                longitud: long\n            };\n            const response = await fetch(\"http://localhost:3000/obtenerpronostico\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(datos)\n            });\n            if (response.ok) {\n                const data = await response.json();\n                let dias_semana = [];\n                for(const dia in data.nubes){\n                    console.log(dia + \":\");\n                    console.log(\"  Horas: \" + data.nubes[dia].horas);\n                    console.log(\"  Valores: \" + data.nubes[dia].valores);\n                    dias_semana.push(dia);\n                }\n                setDiasSemana(dias_semana);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100vw\",\n            height: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabecera__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mostrarBotonHome: true\n            }, void 0, false, {\n                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"seleccion\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"PARTE DE ARRIBA\"\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        onPlaceSelected: handlePlaceSelected\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"eltiempo\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"dias\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                class: \"icono\",\n                                src: \"http://openweathermap.org/img/w/01d.png\",\n                                alt: \"Icono del clima\"\n                            }, void 0, false, {\n                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"22 \\xbaC\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 16\n                                    }, undefined),\n                                    \" en \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Cartaya\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 42\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"info\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        class: \"parrafo\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Precipitaciones:\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 28\n                                            }, undefined),\n                                            \"valor3\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        class: \"parrafo\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Humedad:\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 28\n                                            }, undefined),\n                                            \"valor2\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        class: \"parrafo\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Viento:\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 28\n                                            }, undefined),\n                                            \"valor1.\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                lineNumber: 68,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"grafica\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chartNubes__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                            lineNumber: 76,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 75,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"selecciondias\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"infodias\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"dia1\",\n                                    children: diasSemana && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            diasSemana[0],\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"http://openweathermap.org/img/w/01n.png\",\n                                                alt: \"Icono del clima\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 83,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 11\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"dia2\",\n                                    children: diasSemana && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            diasSemana[0],\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"http://openweathermap.org/img/w/01n.png\",\n                                                alt: \"Icono del clima\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 11\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"dia3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"lunes\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"http://openweathermap.org/img/w/01n.png\",\n                                                alt: \"Icono del clima\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 96,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"dia4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"lunes\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"http://openweathermap.org/img/w/01n.png\",\n                                                alt: \"Icono del clima\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"dia5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"lunes\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"http://openweathermap.org/img/w/01n.png\",\n                                                alt: \"Icono del clima\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                                lineNumber: 106,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                            lineNumber: 79,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                        lineNumber: 78,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n                lineNumber: 114,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/pronostico.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Pronostico, \"IckiE47u6MMxqhMWoSWORdxwsk4=\");\n_c = Pronostico;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pronostico);\nvar _c;\n$RefreshReg$(_c, \"Pronostico\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OzhDQUl6RCw4REFBQ1g7b0NBQUlRLE9BQU07OENBQ1YzQyw0QkFDQyw4REFBQytDOzs0Q0FBRy9DLFVBQVUsQ0FBQyxFQUFFOzBEQUNuQiw4REFBQzRDO2dEQUFJQyxLQUFNO2dEQUEwQ0MsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSXpELDhEQUFDWDtvQ0FBSVEsT0FBTTs4Q0FDWCw0RUFBQ0k7OzRDQUFFOzBEQUNILDhEQUFDSDtnREFBSUMsS0FBTTtnREFBMENDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUd6RCw4REFBQ1g7b0NBQUlRLE9BQU07OENBQ1gsNEVBQUNJOzs0Q0FBRTswREFDSCw4REFBQ0g7Z0RBQUlDLEtBQU07Z0RBQTBDQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHekQsOERBQUNYO29DQUFJUSxPQUFNOzhDQUNYLDRFQUFDSTs7NENBQUU7MERBQ0gsOERBQUNIO2dEQUFJQyxLQUFNO2dEQUEwQ0MsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRckQsOERBQUNyRCx1REFBR0E7Ozs7Ozs7Ozs7O0FBSWhCO0dBMUdNTTtLQUFBQTtBQTRHTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvbm9zdGljby5qcz9iMjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENhYmVjZXJhIGZyb20gJy4uL2NvbXBvbmVudHMvY2FiZWNlcmEnO1xuaW1wb3J0IFBpZSBmcm9tICcuLi9jb21wb25lbnRzL3BpZSc7XG5pbXBvcnQgU2VhcmNoQm94IGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoYm94JztcbmltcG9ydCB7c2VydmVyfSBmcm9tICcuL19hcHAnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBDaGFydFRlbXBlcmF0dXJhIGZyb20gJ0AvY29tcG9uZW50cy9jaGFydFRlbXBlcmF0dXJhJztcbmltcG9ydCBDaGFydE51YmVzIGZyb20gJ0AvY29tcG9uZW50cy9jaGFydE51YmVzJztcblxuXG5jb25zdCBQcm9ub3N0aWNvID0gKCkgPT4ge1xuICAgIGNvbnN0IFtkaWFzU2VtYW5hLCBzZXREaWFzU2VtYW5hXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBoYW5kbGVQbGFjZVNlbGVjdGVkID0gYXN5bmMgKHBsYWNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGx1Z2FyPSBKU09OLnN0cmluZ2lmeShwbGFjZSk7XG4gICAgICAgIGNvbnN0IG1lbnNhamUgPSBKU09OLnBhcnNlKGx1Z2FyLnRvU3RyaW5nKCkpO1xuICAgICAgICBjb25zdCBsYXQ9bWVuc2FqZS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQ7XG4gICAgICAgIGNvbnN0IGxvbmc9bWVuc2FqZS5nZW9tZXRyeS5sb2NhdGlvbi5sbmc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRvcyA9IHtcbiAgICAgICAgICAgICAgbGF0aXR1ZDogbGF0LFxuICAgICAgICAgICAgICBsb25naXR1ZDogbG9uZyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvb2J0ZW5lcnByb25vc3RpY28nLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdG9zKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgbGV0IGRpYXNfc2VtYW5hID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBkaWEgaW4gZGF0YS5udWJlcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkaWEgKyBcIjpcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiICBIb3JhczogXCIgKyBkYXRhLm51YmVzW2RpYV0uaG9yYXMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiAgVmFsb3JlczogXCIgKyBkYXRhLm51YmVzW2RpYV0udmFsb3Jlcyk7XG4gICAgICAgICAgICAgICAgICAgIGRpYXNfc2VtYW5hLnB1c2goZGlhKTtcbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgc2V0RGlhc1NlbWFuYShkaWFzX3NlbWFuYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgIH1cbiAgICAgICAgXG4gICAgXG5cbn1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IFxuICAgICAgICAgICAgd2lkdGg6ICcxMDB2dycsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxDYWJlY2VyYSBtb3N0cmFyQm90b25Ib21lPXt0cnVlfS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjY2lvblwiPlxuICAgICAgICAgICAgICAgIDxoMj5QQVJURSBERSBBUlJJQkE8L2gyPlxuICAgICAgICAgICAgICAgIDxTZWFyY2hCb3ggb25QbGFjZVNlbGVjdGVkID17aGFuZGxlUGxhY2VTZWxlY3RlZH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbHRpZW1wb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpYXNcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpY29ub1wiIHNyYz17YGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvMDFkLnBuZ2B9IGFsdD1cIkljb25vIGRlbCBjbGltYVwiPjwvaW1nPlxuICAgICAgICAgICAgPHA+PHN0cm9uZz4yMiDCukM8L3N0cm9uZz4gZW4gPHN0cm9uZz5DYXJ0YXlhPC9zdHJvbmc+PC9wPlxuXG4gICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgPHAgY2xhc3M9XCJwYXJyYWZvXCI+PHN0cm9uZz5QcmVjaXBpdGFjaW9uZXM6PC9zdHJvbmc+dmFsb3IzPC9wPlxuICAgICAgICA8cCBjbGFzcz1cInBhcnJhZm9cIj48c3Ryb25nPkh1bWVkYWQ6PC9zdHJvbmc+dmFsb3IyPC9wPlxuICAgICAgICA8cCBjbGFzcz1cInBhcnJhZm9cIj48c3Ryb25nPlZpZW50bzo8L3N0cm9uZz52YWxvcjEuPC9wPlxuICAgIDwvZGl2PlxuICAgIFxuPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdyYWZpY2FcIj5cbiAgICAgICAgPENoYXJ0TnViZXM+PC9DaGFydE51YmVzPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY2Npb25kaWFzXCI+XG4gICAgPGRpdiBjbGFzcz1cImluZm9kaWFzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaWExXCI+XG4gICAgICAgIHtkaWFzU2VtYW5hICYmICBcbiAgICAgICAgICA8cD57ZGlhc1NlbWFuYVswXX1cbiAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LzAxbi5wbmdgfSBhbHQ9XCJJY29ubyBkZWwgY2xpbWFcIi8+XG4gICAgICAgIDwvcD5cbiAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRpYTJcIj5cbiAgICAgICAge2RpYXNTZW1hbmEgJiYgIFxuICAgICAgICAgIDxwPntkaWFzU2VtYW5hWzBdfVxuICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvMDFuLnBuZ2B9IGFsdD1cIkljb25vIGRlbCBjbGltYVwiLz5cbiAgICAgICAgPC9wPlxuICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRpYTNcIj5cbiAgICAgICAgPHA+bHVuZXNcbiAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LzAxbi5wbmdgfSBhbHQ9XCJJY29ubyBkZWwgY2xpbWFcIi8+XG4gICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhNFwiPlxuICAgICAgICA8cD5sdW5lc1xuICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvMDFuLnBuZ2B9IGFsdD1cIkljb25vIGRlbCBjbGltYVwiLz5cbiAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaWE1XCI+XG4gICAgICAgIDxwPmx1bmVzXG4gICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8wMW4ucG5nYH0gYWx0PVwiSWNvbm8gZGVsIGNsaW1hXCIvPlxuICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8UGllLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICk7IFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvbm9zdGljbztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQ2FiZWNlcmEiLCJQaWUiLCJTZWFyY2hCb3giLCJzZXJ2ZXIiLCJDb29raWVzIiwiQ2hhcnRUZW1wZXJhdHVyYSIsIkNoYXJ0TnViZXMiLCJQcm9ub3N0aWNvIiwiZGlhc1NlbWFuYSIsInNldERpYXNTZW1hbmEiLCJoYW5kbGVQbGFjZVNlbGVjdGVkIiwicGxhY2UiLCJsdWdhciIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZW5zYWplIiwicGFyc2UiLCJ0b1N0cmluZyIsImxhdCIsImdlb21ldHJ5IiwibG9jYXRpb24iLCJsb25nIiwibG5nIiwiZGF0b3MiLCJsYXRpdHVkIiwibG9uZ2l0dWQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJvayIsImRhdGEiLCJqc29uIiwiZGlhc19zZW1hbmEiLCJkaWEiLCJudWJlcyIsImNvbnNvbGUiLCJsb2ciLCJob3JhcyIsInZhbG9yZXMiLCJwdXNoIiwiZXJyb3IiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwibW9zdHJhckJvdG9uSG9tZSIsImNsYXNzTmFtZSIsImgyIiwib25QbGFjZVNlbGVjdGVkIiwiY2xhc3MiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwic3Ryb25nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/pronostico.js\n"));

/***/ })

});