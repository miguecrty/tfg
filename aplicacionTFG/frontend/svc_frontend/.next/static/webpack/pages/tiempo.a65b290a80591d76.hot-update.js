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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_cabecera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cabecera */ \"./src/components/cabecera.js\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var _components_searchbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/searchbox */ \"./src/components/searchbox.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_app */ \"./src/pages/_app.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Hola = ()=>{\n    _s();\n    const [responseData, setResponseData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Estado para almacenar la respuesta\n    const [selectedPlace, setSelectedPlace] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const location = [\n        51.505,\n        -0.09\n    ]; // Coordenadas de ejemplo\n    const zoom = 13;\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"http://\" + _app__WEBPACK_IMPORTED_MODULE_6__.server + \"/api/tabla\");\n            if (response.ok) {\n                const data = await response.json();\n                setResponseData(data); // Almacena la respuesta en el estado\n            } else {\n                throw new Error(\"Error al realizar la petici\\xf3n\");\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handlePlaceSelected = (place)=>{\n        setSelectedPlace(place);\n        // Enviar nombre_corto al servidor a través de WebSocket\n        const ws = new WebSocket(\"ws://\" + _app__WEBPACK_IMPORTED_MODULE_6__.server);\n        ws.onopen = ()=>{\n            // Enviar un mensaje al servidor con el nombre_corto seleccionado\n            ws.send(JSON.stringify({\n                nombre_corto\n            }));\n            ws.close(); // Cerrar la conexión después de enviar el mensaje\n        };\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData(); // Llama a la función fetchData cuando se monta el componente\n        // Establecer una conexión WebSocket\n        const ws = new WebSocket(\"ws://\" + _app__WEBPACK_IMPORTED_MODULE_6__.server);\n        ws.onmessage = ()=>{\n            // Si se recibe un mensaje del servidor, actualizar los datos\n            fetchData();\n        };\n        return ()=>{\n            // Cerrar la conexión WebSocket cuando el componente se desmonte\n            ws.close();\n        };\n    }, []); // El segundo argumento de useEffect vacío asegura que se ejecute solo una vez al montar el componente\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100vw\",\n            height: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabecera__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mostrarBotonHome: true\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"P\\xe1gina de Saludo\"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Hola! Bienvenido a esta p\\xe1gina de saludo.\"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"SearchBox\"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onPlaceSelected: handlePlaceSelected\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined),\n            selectedPlace && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Selected Place: \",\n                    selectedPlace\n                ]\n            }, void 0, true, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 69,\n                columnNumber: 31\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Hola, \"aF5mKmm0S23hGhMmJeUes4TdUh4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Hola;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hola);\nvar _c;\n$RefreshReg$(_c, \"Hola\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGllbXBvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDWDtBQUNNO0FBQ1Y7QUFDWTtBQUNsQjtBQUc5QixNQUFNUSxPQUFPOztJQUNULE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDLE9BQU8scUNBQXFDO0lBQzdGLE1BQU0sQ0FBQ1UsZUFBZUMsaUJBQWlCLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU1ZLFNBQVNWLHNEQUFTQTtJQUN4QixNQUFNVyxXQUFXO1FBQUM7UUFBUSxDQUFDO0tBQUssRUFBRSx5QkFBeUI7SUFDM0QsTUFBTUMsT0FBTztJQUdiLE1BQU1DLFlBQVk7UUFDZCxJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLFlBQVVYLHdDQUFNQSxHQUFDO1lBQzlDLElBQUlVLFNBQVNFLEVBQUUsRUFBRTtnQkFDYixNQUFNQyxPQUFPLE1BQU1ILFNBQVNJLElBQUk7Z0JBQ2hDWCxnQkFBZ0JVLE9BQU8scUNBQXFDO1lBQ2hFLE9BQU87Z0JBQ0gsTUFBTSxJQUFJRSxNQUFNO1lBQ3BCO1FBQ0osRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQ0E7UUFDbEI7SUFDSjtJQUNBLE1BQU1FLHNCQUFzQixDQUFDQztRQUN6QmQsaUJBQWlCYztRQUNqQix3REFBd0Q7UUFDeEQsTUFBTUMsS0FBSyxJQUFJQyxVQUFVLFVBQVFyQix3Q0FBTUE7UUFDdkNvQixHQUFHRSxNQUFNLEdBQUc7WUFDUixpRUFBaUU7WUFDakVGLEdBQUdHLElBQUksQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQztZQUFhO1lBQ3RDTixHQUFHTyxLQUFLLElBQUksa0RBQWtEO1FBQ2xFO0lBRUo7SUFFQWhDLGdEQUFTQSxDQUFDO1FBQ05jLGFBQWEsNkRBQTZEO1FBRTFFLG9DQUFvQztRQUNwQyxNQUFNVyxLQUFLLElBQUlDLFVBQVUsVUFBUXJCLHdDQUFNQTtRQUN2Q29CLEdBQUdRLFNBQVMsR0FBRztZQUNYLDZEQUE2RDtZQUM3RG5CO1FBQ0o7UUFFQSxPQUFPO1lBQ0gsZ0VBQWdFO1lBQ2hFVyxHQUFHTyxLQUFLO1FBQ1o7SUFDSixHQUFHLEVBQUUsR0FBRyxzR0FBc0c7SUFFOUcscUJBQ0ksOERBQUNFO1FBQUlDLE9BQU87WUFDUkMsT0FBTztZQUNQQyxRQUFRO1FBQ1Y7OzBCQUNFLDhEQUFDbkMsNERBQVFBO2dCQUFDb0Msa0JBQWtCOzs7Ozs7MEJBQzVCLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBRTs7Ozs7OzBCQUNILDhEQUFDRDswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDbkMsNkRBQVNBO2dCQUFDcUMsaUJBQWlCbEI7Ozs7OztZQUUzQmQsK0JBQWlCLDhEQUFDK0I7O29CQUFFO29CQUFpQi9COzs7Ozs7OzBCQUN0Qyw4REFBQ04sdURBQUdBOzs7Ozs7Ozs7OztBQUdoQjtHQWhFTUc7O1FBR2FMLGtEQUFTQTs7O0tBSHRCSztBQWtFTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdGllbXBvLmpzP2I2ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgQ2FiZWNlcmEgZnJvbSAnLi4vY29tcG9uZW50cy9jYWJlY2VyYSc7XG5pbXBvcnQgUGllIGZyb20gJy4uL2NvbXBvbmVudHMvcGllJztcbmltcG9ydCBTZWFyY2hCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hib3gnO1xuaW1wb3J0IHtzZXJ2ZXJ9IGZyb20gJy4vX2FwcCc7XG5cblxuY29uc3QgSG9sYSA9ICgpID0+IHtcbiAgICBjb25zdCBbcmVzcG9uc2VEYXRhLCBzZXRSZXNwb25zZURhdGFdID0gdXNlU3RhdGUobnVsbCk7IC8vIEVzdGFkbyBwYXJhIGFsbWFjZW5hciBsYSByZXNwdWVzdGFcbiAgICBjb25zdCBbc2VsZWN0ZWRQbGFjZSwgc2V0U2VsZWN0ZWRQbGFjZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IFs1MS41MDUsIC0wLjA5XTsgLy8gQ29vcmRlbmFkYXMgZGUgZWplbXBsb1xuICAgIGNvbnN0IHpvb20gPSAxMztcblxuXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLycrc2VydmVyKycvYXBpL3RhYmxhJyk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlRGF0YShkYXRhKTsgLy8gQWxtYWNlbmEgbGEgcmVzcHVlc3RhIGVuIGVsIGVzdGFkb1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGFsIHJlYWxpemFyIGxhIHBldGljacOzbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVBsYWNlU2VsZWN0ZWQgPSAocGxhY2UpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRQbGFjZShwbGFjZSk7XG4gICAgICAgIC8vIEVudmlhciBub21icmVfY29ydG8gYWwgc2Vydmlkb3IgYSB0cmF2w6lzIGRlIFdlYlNvY2tldFxuICAgICAgICBjb25zdCB3cyA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vJytzZXJ2ZXIpO1xuICAgICAgICB3cy5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBFbnZpYXIgdW4gbWVuc2FqZSBhbCBzZXJ2aWRvciBjb24gZWwgbm9tYnJlX2NvcnRvIHNlbGVjY2lvbmFkb1xuICAgICAgICAgICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeSh7IG5vbWJyZV9jb3J0byB9KSk7XG4gICAgICAgICAgICB3cy5jbG9zZSgpOyAvLyBDZXJyYXIgbGEgY29uZXhpw7NuIGRlc3B1w6lzIGRlIGVudmlhciBlbCBtZW5zYWplXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaERhdGEoKTsgLy8gTGxhbWEgYSBsYSBmdW5jacOzbiBmZXRjaERhdGEgY3VhbmRvIHNlIG1vbnRhIGVsIGNvbXBvbmVudGVcblxuICAgICAgICAvLyBFc3RhYmxlY2VyIHVuYSBjb25leGnDs24gV2ViU29ja2V0XG4gICAgICAgIGNvbnN0IHdzID0gbmV3IFdlYlNvY2tldCgnd3M6Ly8nK3NlcnZlcik7XG4gICAgICAgIHdzLm9ubWVzc2FnZSA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIFNpIHNlIHJlY2liZSB1biBtZW5zYWplIGRlbCBzZXJ2aWRvciwgYWN0dWFsaXphciBsb3MgZGF0b3NcbiAgICAgICAgICAgIGZldGNoRGF0YSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAvLyBDZXJyYXIgbGEgY29uZXhpw7NuIFdlYlNvY2tldCBjdWFuZG8gZWwgY29tcG9uZW50ZSBzZSBkZXNtb250ZVxuICAgICAgICAgICAgd3MuY2xvc2UoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7IC8vIEVsIHNlZ3VuZG8gYXJndW1lbnRvIGRlIHVzZUVmZmVjdCB2YWPDrW8gYXNlZ3VyYSBxdWUgc2UgZWplY3V0ZSBzb2xvIHVuYSB2ZXogYWwgbW9udGFyIGVsIGNvbXBvbmVudGVcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgXG4gICAgICAgICAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxDYWJlY2VyYSBtb3N0cmFyQm90b25Ib21lPXt0cnVlfS8+XG4gICAgICAgICAgICA8aDE+UMOhZ2luYSBkZSBTYWx1ZG88L2gxPlxuICAgICAgICAgICAgPHA+SG9sYSEgQmllbnZlbmlkbyBhIGVzdGEgcMOhZ2luYSBkZSBzYWx1ZG8uPC9wPlxuICAgICAgICAgICAgPGgxPlNlYXJjaEJveDwvaDE+XG4gICAgICAgICAgICA8U2VhcmNoQm94IG9uUGxhY2VTZWxlY3RlZD17aGFuZGxlUGxhY2VTZWxlY3RlZH0gLz5cbiAgICAgICAgICAgIHsvKiBNdWVzdHJhIHNlbGVjdGVkUGxhY2UgZW4gdHUgYXBsaWNhY2nDs24gc2kgbG8gZGVzZWFzICovfVxuICAgICAgICAgICAge3NlbGVjdGVkUGxhY2UgJiYgPHA+U2VsZWN0ZWQgUGxhY2U6IHtzZWxlY3RlZFBsYWNlfTwvcD59XG4gICAgICAgICAgICA8UGllLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbGE7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkNhYmVjZXJhIiwiUGllIiwiU2VhcmNoQm94Iiwic2VydmVyIiwiSG9sYSIsInJlc3BvbnNlRGF0YSIsInNldFJlc3BvbnNlRGF0YSIsInNlbGVjdGVkUGxhY2UiLCJzZXRTZWxlY3RlZFBsYWNlIiwicm91dGVyIiwibG9jYXRpb24iLCJ6b29tIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiZGF0YSIsImpzb24iLCJFcnJvciIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVBsYWNlU2VsZWN0ZWQiLCJwbGFjZSIsIndzIiwiV2ViU29ja2V0Iiwib25vcGVuIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJub21icmVfY29ydG8iLCJjbG9zZSIsIm9ubWVzc2FnZSIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJtb3N0cmFyQm90b25Ib21lIiwiaDEiLCJwIiwib25QbGFjZVNlbGVjdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/tiempo.js\n"));

/***/ })

});