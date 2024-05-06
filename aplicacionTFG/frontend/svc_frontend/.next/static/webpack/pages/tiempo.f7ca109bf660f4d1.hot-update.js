"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tiempo",{

/***/ "./src/pages/tiempo.js":
/*!*****************************!*\
  !*** ./src/pages/tiempo.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_cabecera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cabecera */ \"./src/components/cabecera.js\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var _components_searchbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/searchbox */ \"./src/components/searchbox.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_app */ \"./src/pages/_app.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Hola = ()=>{\n    _s();\n    const [responseData, setResponseData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Estado para almacenar la respuesta\n    const [selectedPlace, setSelectedPlace] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const location = [\n        51.505,\n        -0.09\n    ]; // Coordenadas de ejemplo\n    const zoom = 13;\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"http://\" + _app__WEBPACK_IMPORTED_MODULE_6__.server + \"/api/tabla\");\n            if (response.ok) {\n                const data = await response.json();\n                setResponseData(data); // Almacena la respuesta en el estado\n            } else {\n                throw new Error(\"Error al realizar la petici\\xf3n\");\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handlePlaceSelected = (place)=>{\n        console.log(place.address_components[0]);\n        setSelectedPlace(place);\n        // Enviar nombre_corto al servidor a través de WebSocket\n        const ws = new WebSocket(\"ws://\" + _app__WEBPACK_IMPORTED_MODULE_6__.server);\n        ws.onopen = ()=>{\n            // Enviar un mensaje al servidor con el nombre_corto seleccionado\n            ws.send(JSON.stringify(place.address_components[0]));\n            ws.close(); // Cerrar la conexión después de enviar el mensaje\n        };\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData(); // Llama a la función fetchData cuando se monta el componente\n        // Establecer una conexión WebSocket\n        const ws = new WebSocket(\"ws://\" + _app__WEBPACK_IMPORTED_MODULE_6__.server);\n        ws.onmessage = ()=>{\n            // Si se recibe un mensaje del servidor, actualizar los datos\n            fetchData();\n        };\n        return ()=>{\n            // Cerrar la conexión WebSocket cuando el componente se desmonte\n            ws.close();\n        };\n    }, []); // El segundo argumento de useEffect vacío asegura que se ejecute solo una vez al montar el componente\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100vw\",\n            height: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabecera__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mostrarBotonHome: true\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"P\\xe1gina de Saludo\"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Hola! Bienvenido a esta p\\xe1gina de saludo.\"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"SearchBox\"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onPlaceSelected: handlePlaceSelected\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined),\n            selectedPlace && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Selected Place: \"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 70,\n                columnNumber: 31\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Hola, \"aF5mKmm0S23hGhMmJeUes4TdUh4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Hola;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hola);\nvar _c;\n$RefreshReg$(_c, \"Hola\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGllbXBvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDWDtBQUNNO0FBQ1Y7QUFDWTtBQUNsQjtBQUc5QixNQUFNUSxPQUFPOztJQUNULE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDLE9BQU8scUNBQXFDO0lBQzdGLE1BQU0sQ0FBQ1UsZUFBZUMsaUJBQWlCLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU1ZLFNBQVNWLHNEQUFTQTtJQUN4QixNQUFNVyxXQUFXO1FBQUM7UUFBUSxDQUFDO0tBQUssRUFBRSx5QkFBeUI7SUFDM0QsTUFBTUMsT0FBTztJQUdiLE1BQU1DLFlBQVk7UUFDZCxJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLFlBQVVYLHdDQUFNQSxHQUFDO1lBQzlDLElBQUlVLFNBQVNFLEVBQUUsRUFBRTtnQkFDYixNQUFNQyxPQUFPLE1BQU1ILFNBQVNJLElBQUk7Z0JBQ2hDWCxnQkFBZ0JVLE9BQU8scUNBQXFDO1lBQ2hFLE9BQU87Z0JBQ0gsTUFBTSxJQUFJRSxNQUFNO1lBQ3BCO1FBQ0osRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQ0E7UUFDbEI7SUFDSjtJQUNBLE1BQU1FLHNCQUFzQixDQUFDQztRQUN6QkYsUUFBUUcsR0FBRyxDQUFDRCxNQUFNRSxrQkFBa0IsQ0FBQyxFQUFFO1FBQ3ZDaEIsaUJBQWlCYztRQUNqQix3REFBd0Q7UUFDeEQsTUFBTUcsS0FBSyxJQUFJQyxVQUFVLFVBQVF2Qix3Q0FBTUE7UUFDdkNzQixHQUFHRSxNQUFNLEdBQUc7WUFDUixpRUFBaUU7WUFDakVGLEdBQUdHLElBQUksQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDUixNQUFNRSxrQkFBa0IsQ0FBQyxFQUFFO1lBQ2xEQyxHQUFHTSxLQUFLLElBQUksa0RBQWtEO1FBQ2xFO0lBRUo7SUFFQWpDLGdEQUFTQSxDQUFDO1FBQ05jLGFBQWEsNkRBQTZEO1FBRTFFLG9DQUFvQztRQUNwQyxNQUFNYSxLQUFLLElBQUlDLFVBQVUsVUFBUXZCLHdDQUFNQTtRQUN2Q3NCLEdBQUdPLFNBQVMsR0FBRztZQUNYLDZEQUE2RDtZQUM3RHBCO1FBQ0o7UUFFQSxPQUFPO1lBQ0gsZ0VBQWdFO1lBQ2hFYSxHQUFHTSxLQUFLO1FBQ1o7SUFDSixHQUFHLEVBQUUsR0FBRyxzR0FBc0c7SUFFOUcscUJBQ0ksOERBQUNFO1FBQUlDLE9BQU87WUFDUkMsT0FBTztZQUNQQyxRQUFRO1FBQ1Y7OzBCQUNFLDhEQUFDcEMsNERBQVFBO2dCQUFDcUMsa0JBQWtCOzs7Ozs7MEJBQzVCLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBRTs7Ozs7OzBCQUNILDhEQUFDRDswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDcEMsNkRBQVNBO2dCQUFDc0MsaUJBQWlCbkI7Ozs7OztZQUUzQmQsK0JBQWlCLDhEQUFDZ0M7MEJBQUU7Ozs7OzswQkFDckIsOERBQUN0Qyx1REFBR0E7Ozs7Ozs7Ozs7O0FBR2hCO0dBakVNRzs7UUFHYUwsa0RBQVNBOzs7S0FIdEJLO0FBbUVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90aWVtcG8uanM/YjZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBDYWJlY2VyYSBmcm9tICcuLi9jb21wb25lbnRzL2NhYmVjZXJhJztcbmltcG9ydCBQaWUgZnJvbSAnLi4vY29tcG9uZW50cy9waWUnO1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaGJveCc7XG5pbXBvcnQge3NlcnZlcn0gZnJvbSAnLi9fYXBwJztcblxuXG5jb25zdCBIb2xhID0gKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNwb25zZURhdGEsIHNldFJlc3BvbnNlRGF0YV0gPSB1c2VTdGF0ZShudWxsKTsgLy8gRXN0YWRvIHBhcmEgYWxtYWNlbmFyIGxhIHJlc3B1ZXN0YVxuICAgIGNvbnN0IFtzZWxlY3RlZFBsYWNlLCBzZXRTZWxlY3RlZFBsYWNlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gWzUxLjUwNSwgLTAuMDldOyAvLyBDb29yZGVuYWRhcyBkZSBlamVtcGxvXG4gICAgY29uc3Qgem9vbSA9IDEzO1xuXG5cbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vJytzZXJ2ZXIrJy9hcGkvdGFibGEnKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2VEYXRhKGRhdGEpOyAvLyBBbG1hY2VuYSBsYSByZXNwdWVzdGEgZW4gZWwgZXN0YWRvXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgYWwgcmVhbGl6YXIgbGEgcGV0aWNpw7NuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUGxhY2VTZWxlY3RlZCA9IChwbGFjZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwbGFjZS5hZGRyZXNzX2NvbXBvbmVudHNbMF0pO1xuICAgICAgICBzZXRTZWxlY3RlZFBsYWNlKHBsYWNlKTtcbiAgICAgICAgLy8gRW52aWFyIG5vbWJyZV9jb3J0byBhbCBzZXJ2aWRvciBhIHRyYXbDqXMgZGUgV2ViU29ja2V0XG4gICAgICAgIGNvbnN0IHdzID0gbmV3IFdlYlNvY2tldCgnd3M6Ly8nK3NlcnZlcik7XG4gICAgICAgIHdzLm9ub3BlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIEVudmlhciB1biBtZW5zYWplIGFsIHNlcnZpZG9yIGNvbiBlbCBub21icmVfY29ydG8gc2VsZWNjaW9uYWRvXG4gICAgICAgICAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KHBsYWNlLmFkZHJlc3NfY29tcG9uZW50c1swXSkpO1xuICAgICAgICAgICAgd3MuY2xvc2UoKTsgLy8gQ2VycmFyIGxhIGNvbmV4acOzbiBkZXNwdcOpcyBkZSBlbnZpYXIgZWwgbWVuc2FqZVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hEYXRhKCk7IC8vIExsYW1hIGEgbGEgZnVuY2nDs24gZmV0Y2hEYXRhIGN1YW5kbyBzZSBtb250YSBlbCBjb21wb25lbnRlXG5cbiAgICAgICAgLy8gRXN0YWJsZWNlciB1bmEgY29uZXhpw7NuIFdlYlNvY2tldFxuICAgICAgICBjb25zdCB3cyA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vJytzZXJ2ZXIpO1xuICAgICAgICB3cy5vbm1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBTaSBzZSByZWNpYmUgdW4gbWVuc2FqZSBkZWwgc2Vydmlkb3IsIGFjdHVhbGl6YXIgbG9zIGRhdG9zXG4gICAgICAgICAgICBmZXRjaERhdGEoKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgLy8gQ2VycmFyIGxhIGNvbmV4acOzbiBXZWJTb2NrZXQgY3VhbmRvIGVsIGNvbXBvbmVudGUgc2UgZGVzbW9udGVcbiAgICAgICAgICAgIHdzLmNsb3NlKCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pOyAvLyBFbCBzZWd1bmRvIGFyZ3VtZW50byBkZSB1c2VFZmZlY3QgdmFjw61vIGFzZWd1cmEgcXVlIHNlIGVqZWN1dGUgc29sbyB1bmEgdmV6IGFsIG1vbnRhciBlbCBjb21wb25lbnRlXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IFxuICAgICAgICAgICAgd2lkdGg6ICcxMDB2dycsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8Q2FiZWNlcmEgbW9zdHJhckJvdG9uSG9tZT17dHJ1ZX0vPlxuICAgICAgICAgICAgPGgxPlDDoWdpbmEgZGUgU2FsdWRvPC9oMT5cbiAgICAgICAgICAgIDxwPkhvbGEhIEJpZW52ZW5pZG8gYSBlc3RhIHDDoWdpbmEgZGUgc2FsdWRvLjwvcD5cbiAgICAgICAgICAgIDxoMT5TZWFyY2hCb3g8L2gxPlxuICAgICAgICAgICAgPFNlYXJjaEJveCBvblBsYWNlU2VsZWN0ZWQ9e2hhbmRsZVBsYWNlU2VsZWN0ZWR9IC8+XG4gICAgICAgICAgICB7LyogTXVlc3RyYSBzZWxlY3RlZFBsYWNlIGVuIHR1IGFwbGljYWNpw7NuIHNpIGxvIGRlc2VhcyAqL31cbiAgICAgICAgICAgIHtzZWxlY3RlZFBsYWNlICYmIDxwPlNlbGVjdGVkIFBsYWNlOiA8L3A+fVxuICAgICAgICAgICAgPFBpZS8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb2xhO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJDYWJlY2VyYSIsIlBpZSIsIlNlYXJjaEJveCIsInNlcnZlciIsIkhvbGEiLCJyZXNwb25zZURhdGEiLCJzZXRSZXNwb25zZURhdGEiLCJzZWxlY3RlZFBsYWNlIiwic2V0U2VsZWN0ZWRQbGFjZSIsInJvdXRlciIsImxvY2F0aW9uIiwiem9vbSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsImRhdGEiLCJqc29uIiwiRXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVQbGFjZVNlbGVjdGVkIiwicGxhY2UiLCJsb2ciLCJhZGRyZXNzX2NvbXBvbmVudHMiLCJ3cyIsIldlYlNvY2tldCIsIm9ub3BlbiIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xvc2UiLCJvbm1lc3NhZ2UiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwibW9zdHJhckJvdG9uSG9tZSIsImgxIiwicCIsIm9uUGxhY2VTZWxlY3RlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/tiempo.js\n"));

/***/ })

});