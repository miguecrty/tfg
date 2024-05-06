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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_cabecera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cabecera */ \"./src/components/cabecera.js\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var _components_searchbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/searchbox */ \"./src/components/searchbox.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_app */ \"./src/pages/_app.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Hola = ()=>{\n    _s();\n    const [responseData, setResponseData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Estado para almacenar la respuesta\n    const [selectedPlace, setSelectedPlace] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const location = [\n        51.505,\n        -0.09\n    ]; // Coordenadas de ejemplo\n    const zoom = 13;\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"http://\" + _app__WEBPACK_IMPORTED_MODULE_6__.server + \"/api/tabla\");\n            if (response.ok) {\n                const data = await response.json();\n                setResponseData(data); // Almacena la respuesta en el estado\n            } else {\n                throw new Error(\"Error al realizar la petici\\xf3n\");\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handlePlaceSelected = (place)=>{\n        setSelectedPlace(place);\n        // Enviar nombre_corto al servidor a través de WebSocket\n        const ws = new WebSocket(\"ws://\" + _app__WEBPACK_IMPORTED_MODULE_6__.server);\n        ws.onopen = ()=>{\n            console.log(place);\n            // Enviar un mensaje al servidor con el nombre_corto seleccionado\n            ws.send(place.place.address_components[0]);\n            ws.close(); // Cerrar la conexión después de enviar el mensaje\n        };\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData(); // Llama a la función fetchData cuando se monta el componente\n        // Establecer una conexión WebSocket\n        const ws = new WebSocket(\"ws://\" + _app__WEBPACK_IMPORTED_MODULE_6__.server);\n        ws.onmessage = ()=>{\n            // Si se recibe un mensaje del servidor, actualizar los datos\n            fetchData();\n        };\n        return ()=>{\n            // Cerrar la conexión WebSocket cuando el componente se desmonte\n            ws.close();\n        };\n    }, []); // El segundo argumento de useEffect vacío asegura que se ejecute solo una vez al montar el componente\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100vw\",\n            height: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabecera__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mostrarBotonHome: true\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"P\\xe1gina de Saludo\"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Hola! Bienvenido a esta p\\xe1gina de saludo.\"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"SearchBox\"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onPlaceSelected: handlePlaceSelected\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined),\n            selectedPlace && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Selected Place: \",\n                    selectedPlace\n                ]\n            }, void 0, true, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 70,\n                columnNumber: 31\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Hola, \"aF5mKmm0S23hGhMmJeUes4TdUh4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Hola;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hola);\nvar _c;\n$RefreshReg$(_c, \"Hola\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGllbXBvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDWDtBQUNNO0FBQ1Y7QUFDWTtBQUNsQjtBQUc5QixNQUFNUSxPQUFPOztJQUNULE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDLE9BQU8scUNBQXFDO0lBQzdGLE1BQU0sQ0FBQ1UsZUFBZUMsaUJBQWlCLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU1ZLFNBQVNWLHNEQUFTQTtJQUN4QixNQUFNVyxXQUFXO1FBQUM7UUFBUSxDQUFDO0tBQUssRUFBRSx5QkFBeUI7SUFDM0QsTUFBTUMsT0FBTztJQUdiLE1BQU1DLFlBQVk7UUFDZCxJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLFlBQVVYLHdDQUFNQSxHQUFDO1lBQzlDLElBQUlVLFNBQVNFLEVBQUUsRUFBRTtnQkFDYixNQUFNQyxPQUFPLE1BQU1ILFNBQVNJLElBQUk7Z0JBQ2hDWCxnQkFBZ0JVLE9BQU8scUNBQXFDO1lBQ2hFLE9BQU87Z0JBQ0gsTUFBTSxJQUFJRSxNQUFNO1lBQ3BCO1FBQ0osRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQ0E7UUFDbEI7SUFDSjtJQUNBLE1BQU1FLHNCQUFzQixDQUFDQztRQUN6QmQsaUJBQWlCYztRQUNqQix3REFBd0Q7UUFDeEQsTUFBTUMsS0FBSyxJQUFJQyxVQUFVLFVBQVFyQix3Q0FBTUE7UUFDdkNvQixHQUFHRSxNQUFNLEdBQUc7WUFDUkwsUUFBUU0sR0FBRyxDQUFDSjtZQUNaLGlFQUFpRTtZQUNqRUMsR0FBR0ksSUFBSSxDQUFDTCxNQUFNQSxLQUFLLENBQUNNLGtCQUFrQixDQUFDLEVBQUU7WUFDekNMLEdBQUdNLEtBQUssSUFBSSxrREFBa0Q7UUFDbEU7SUFFSjtJQUVBL0IsZ0RBQVNBLENBQUM7UUFDTmMsYUFBYSw2REFBNkQ7UUFFMUUsb0NBQW9DO1FBQ3BDLE1BQU1XLEtBQUssSUFBSUMsVUFBVSxVQUFRckIsd0NBQU1BO1FBQ3ZDb0IsR0FBR08sU0FBUyxHQUFHO1lBQ1gsNkRBQTZEO1lBQzdEbEI7UUFDSjtRQUVBLE9BQU87WUFDSCxnRUFBZ0U7WUFDaEVXLEdBQUdNLEtBQUs7UUFDWjtJQUNKLEdBQUcsRUFBRSxHQUFHLHNHQUFzRztJQUU5RyxxQkFDSSw4REFBQ0U7UUFBSUMsT0FBTztZQUNSQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjs7MEJBQ0UsOERBQUNsQyw0REFBUUE7Z0JBQUNtQyxrQkFBa0I7Ozs7OzswQkFDNUIsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNEOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNsQyw2REFBU0E7Z0JBQUNvQyxpQkFBaUJqQjs7Ozs7O1lBRTNCZCwrQkFBaUIsOERBQUM4Qjs7b0JBQUU7b0JBQWlCOUI7Ozs7Ozs7MEJBQ3RDLDhEQUFDTix1REFBR0E7Ozs7Ozs7Ozs7O0FBR2hCO0dBakVNRzs7UUFHYUwsa0RBQVNBOzs7S0FIdEJLO0FBbUVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90aWVtcG8uanM/YjZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBDYWJlY2VyYSBmcm9tICcuLi9jb21wb25lbnRzL2NhYmVjZXJhJztcbmltcG9ydCBQaWUgZnJvbSAnLi4vY29tcG9uZW50cy9waWUnO1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaGJveCc7XG5pbXBvcnQge3NlcnZlcn0gZnJvbSAnLi9fYXBwJztcblxuXG5jb25zdCBIb2xhID0gKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNwb25zZURhdGEsIHNldFJlc3BvbnNlRGF0YV0gPSB1c2VTdGF0ZShudWxsKTsgLy8gRXN0YWRvIHBhcmEgYWxtYWNlbmFyIGxhIHJlc3B1ZXN0YVxuICAgIGNvbnN0IFtzZWxlY3RlZFBsYWNlLCBzZXRTZWxlY3RlZFBsYWNlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gWzUxLjUwNSwgLTAuMDldOyAvLyBDb29yZGVuYWRhcyBkZSBlamVtcGxvXG4gICAgY29uc3Qgem9vbSA9IDEzO1xuXG5cbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vJytzZXJ2ZXIrJy9hcGkvdGFibGEnKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2VEYXRhKGRhdGEpOyAvLyBBbG1hY2VuYSBsYSByZXNwdWVzdGEgZW4gZWwgZXN0YWRvXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgYWwgcmVhbGl6YXIgbGEgcGV0aWNpw7NuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUGxhY2VTZWxlY3RlZCA9IChwbGFjZSkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZFBsYWNlKHBsYWNlKTtcbiAgICAgICAgLy8gRW52aWFyIG5vbWJyZV9jb3J0byBhbCBzZXJ2aWRvciBhIHRyYXbDqXMgZGUgV2ViU29ja2V0XG4gICAgICAgIGNvbnN0IHdzID0gbmV3IFdlYlNvY2tldCgnd3M6Ly8nK3NlcnZlcik7XG4gICAgICAgIHdzLm9ub3BlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYWNlKTtcbiAgICAgICAgICAgIC8vIEVudmlhciB1biBtZW5zYWplIGFsIHNlcnZpZG9yIGNvbiBlbCBub21icmVfY29ydG8gc2VsZWNjaW9uYWRvXG4gICAgICAgICAgICB3cy5zZW5kKHBsYWNlLnBsYWNlLmFkZHJlc3NfY29tcG9uZW50c1swXSk7XG4gICAgICAgICAgICB3cy5jbG9zZSgpOyAvLyBDZXJyYXIgbGEgY29uZXhpw7NuIGRlc3B1w6lzIGRlIGVudmlhciBlbCBtZW5zYWplXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaERhdGEoKTsgLy8gTGxhbWEgYSBsYSBmdW5jacOzbiBmZXRjaERhdGEgY3VhbmRvIHNlIG1vbnRhIGVsIGNvbXBvbmVudGVcblxuICAgICAgICAvLyBFc3RhYmxlY2VyIHVuYSBjb25leGnDs24gV2ViU29ja2V0XG4gICAgICAgIGNvbnN0IHdzID0gbmV3IFdlYlNvY2tldCgnd3M6Ly8nK3NlcnZlcik7XG4gICAgICAgIHdzLm9ubWVzc2FnZSA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIFNpIHNlIHJlY2liZSB1biBtZW5zYWplIGRlbCBzZXJ2aWRvciwgYWN0dWFsaXphciBsb3MgZGF0b3NcbiAgICAgICAgICAgIGZldGNoRGF0YSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAvLyBDZXJyYXIgbGEgY29uZXhpw7NuIFdlYlNvY2tldCBjdWFuZG8gZWwgY29tcG9uZW50ZSBzZSBkZXNtb250ZVxuICAgICAgICAgICAgd3MuY2xvc2UoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7IC8vIEVsIHNlZ3VuZG8gYXJndW1lbnRvIGRlIHVzZUVmZmVjdCB2YWPDrW8gYXNlZ3VyYSBxdWUgc2UgZWplY3V0ZSBzb2xvIHVuYSB2ZXogYWwgbW9udGFyIGVsIGNvbXBvbmVudGVcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgXG4gICAgICAgICAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxDYWJlY2VyYSBtb3N0cmFyQm90b25Ib21lPXt0cnVlfS8+XG4gICAgICAgICAgICA8aDE+UMOhZ2luYSBkZSBTYWx1ZG88L2gxPlxuICAgICAgICAgICAgPHA+SG9sYSEgQmllbnZlbmlkbyBhIGVzdGEgcMOhZ2luYSBkZSBzYWx1ZG8uPC9wPlxuICAgICAgICAgICAgPGgxPlNlYXJjaEJveDwvaDE+XG4gICAgICAgICAgICA8U2VhcmNoQm94IG9uUGxhY2VTZWxlY3RlZD17aGFuZGxlUGxhY2VTZWxlY3RlZH0gLz5cbiAgICAgICAgICAgIHsvKiBNdWVzdHJhIHNlbGVjdGVkUGxhY2UgZW4gdHUgYXBsaWNhY2nDs24gc2kgbG8gZGVzZWFzICovfVxuICAgICAgICAgICAge3NlbGVjdGVkUGxhY2UgJiYgPHA+U2VsZWN0ZWQgUGxhY2U6IHtzZWxlY3RlZFBsYWNlfTwvcD59XG4gICAgICAgICAgICA8UGllLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbGE7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkNhYmVjZXJhIiwiUGllIiwiU2VhcmNoQm94Iiwic2VydmVyIiwiSG9sYSIsInJlc3BvbnNlRGF0YSIsInNldFJlc3BvbnNlRGF0YSIsInNlbGVjdGVkUGxhY2UiLCJzZXRTZWxlY3RlZFBsYWNlIiwicm91dGVyIiwibG9jYXRpb24iLCJ6b29tIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiZGF0YSIsImpzb24iLCJFcnJvciIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVBsYWNlU2VsZWN0ZWQiLCJwbGFjZSIsIndzIiwiV2ViU29ja2V0Iiwib25vcGVuIiwibG9nIiwic2VuZCIsImFkZHJlc3NfY29tcG9uZW50cyIsImNsb3NlIiwib25tZXNzYWdlIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIm1vc3RyYXJCb3RvbkhvbWUiLCJoMSIsInAiLCJvblBsYWNlU2VsZWN0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/tiempo.js\n"));

/***/ })

});