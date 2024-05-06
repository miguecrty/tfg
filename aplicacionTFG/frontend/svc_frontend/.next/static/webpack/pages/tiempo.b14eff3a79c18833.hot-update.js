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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_cabecera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cabecera */ \"./src/components/cabecera.js\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var _components_searchbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/searchbox */ \"./src/components/searchbox.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_app */ \"./src/pages/_app.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Hola = ()=>{\n    _s();\n    const [responseData, setResponseData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Estado para almacenar la respuesta\n    const [selectedPlace, setSelectedPlace] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const location = [\n        51.505,\n        -0.09\n    ]; // Coordenadas de ejemplo\n    const zoom = 13;\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"http://\" + _app__WEBPACK_IMPORTED_MODULE_6__.server + \"/api/tabla\");\n            if (response.ok) {\n                const data = await response.json();\n                setResponseData(data); // Almacena la respuesta en el estado\n            } else {\n                throw new Error(\"Error al realizar la petici\\xf3n\");\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handlePlaceSelected = (place)=>{\n        console.log(place);\n        setSelectedPlace(place);\n        // Enviar nombre_corto al servidor a través de WebSocket\n        const ws = new WebSocket(\"ws://\" + _app__WEBPACK_IMPORTED_MODULE_6__.server);\n        ws.onopen = ()=>{\n            // Enviar un mensaje al servidor con el nombre_corto seleccionado\n            ws.send(JSON.stringify(place.address_components[0]));\n            ws.close(); // Cerrar la conexión después de enviar el mensaje\n        };\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData(); // Llama a la función fetchData cuando se monta el componente\n        // Establecer una conexión WebSocket\n        const ws = new WebSocket(\"ws://\" + _app__WEBPACK_IMPORTED_MODULE_6__.server);\n        ws.onmessage = ()=>{\n            // Si se recibe un mensaje del servidor, actualizar los datos\n            fetchData();\n        };\n        return ()=>{\n            // Cerrar la conexión WebSocket cuando el componente se desmonte\n            ws.close();\n        };\n    }, []); // El segundo argumento de useEffect vacío asegura que se ejecute solo una vez al montar el componente\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100vw\",\n            height: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabecera__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mostrarBotonHome: true\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"P\\xe1gina de Saludo\"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Hola! Bienvenido a esta p\\xe1gina de saludo.\"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"SearchBox\"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onPlaceSelected: handlePlaceSelected\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined),\n            selectedPlace && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Selected Place: \"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 70,\n                columnNumber: 31\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Hola, \"aF5mKmm0S23hGhMmJeUes4TdUh4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Hola;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hola);\nvar _c;\n$RefreshReg$(_c, \"Hola\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGllbXBvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDWDtBQUNNO0FBQ1Y7QUFDWTtBQUNsQjtBQUc5QixNQUFNUSxPQUFPOztJQUNULE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDLE9BQU8scUNBQXFDO0lBQzdGLE1BQU0sQ0FBQ1UsZUFBZUMsaUJBQWlCLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU1ZLFNBQVNWLHNEQUFTQTtJQUN4QixNQUFNVyxXQUFXO1FBQUM7UUFBUSxDQUFDO0tBQUssRUFBRSx5QkFBeUI7SUFDM0QsTUFBTUMsT0FBTztJQUdiLE1BQU1DLFlBQVk7UUFDZCxJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLFlBQVVYLHdDQUFNQSxHQUFDO1lBQzlDLElBQUlVLFNBQVNFLEVBQUUsRUFBRTtnQkFDYixNQUFNQyxPQUFPLE1BQU1ILFNBQVNJLElBQUk7Z0JBQ2hDWCxnQkFBZ0JVLE9BQU8scUNBQXFDO1lBQ2hFLE9BQU87Z0JBQ0gsTUFBTSxJQUFJRSxNQUFNO1lBQ3BCO1FBQ0osRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQ0E7UUFDbEI7SUFDSjtJQUNBLE1BQU1FLHNCQUFzQixDQUFDQztRQUN6QkYsUUFBUUcsR0FBRyxDQUFDRDtRQUNaZCxpQkFBaUJjO1FBQ2pCLHdEQUF3RDtRQUN4RCxNQUFNRSxLQUFLLElBQUlDLFVBQVUsVUFBUXRCLHdDQUFNQTtRQUN2Q3FCLEdBQUdFLE1BQU0sR0FBRztZQUNSLGlFQUFpRTtZQUNqRUYsR0FBR0csSUFBSSxDQUFDQyxLQUFLQyxTQUFTLENBQUNQLE1BQU1RLGtCQUFrQixDQUFDLEVBQUU7WUFDbEROLEdBQUdPLEtBQUssSUFBSSxrREFBa0Q7UUFDbEU7SUFFSjtJQUVBakMsZ0RBQVNBLENBQUM7UUFDTmMsYUFBYSw2REFBNkQ7UUFFMUUsb0NBQW9DO1FBQ3BDLE1BQU1ZLEtBQUssSUFBSUMsVUFBVSxVQUFRdEIsd0NBQU1BO1FBQ3ZDcUIsR0FBR1EsU0FBUyxHQUFHO1lBQ1gsNkRBQTZEO1lBQzdEcEI7UUFDSjtRQUVBLE9BQU87WUFDSCxnRUFBZ0U7WUFDaEVZLEdBQUdPLEtBQUs7UUFDWjtJQUNKLEdBQUcsRUFBRSxHQUFHLHNHQUFzRztJQUU5RyxxQkFDSSw4REFBQ0U7UUFBSUMsT0FBTztZQUNSQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjs7MEJBQ0UsOERBQUNwQyw0REFBUUE7Z0JBQUNxQyxrQkFBa0I7Ozs7OzswQkFDNUIsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNEOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNwQyw2REFBU0E7Z0JBQUNzQyxpQkFBaUJuQjs7Ozs7O1lBRTNCZCwrQkFBaUIsOERBQUNnQzswQkFBRTs7Ozs7OzBCQUNyQiw4REFBQ3RDLHVEQUFHQTs7Ozs7Ozs7Ozs7QUFHaEI7R0FqRU1HOztRQUdhTCxrREFBU0E7OztLQUh0Qks7QUFtRU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3RpZW1wby5qcz9iNmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENhYmVjZXJhIGZyb20gJy4uL2NvbXBvbmVudHMvY2FiZWNlcmEnO1xuaW1wb3J0IFBpZSBmcm9tICcuLi9jb21wb25lbnRzL3BpZSc7XG5pbXBvcnQgU2VhcmNoQm94IGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoYm94JztcbmltcG9ydCB7c2VydmVyfSBmcm9tICcuL19hcHAnO1xuXG5cbmNvbnN0IEhvbGEgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Jlc3BvbnNlRGF0YSwgc2V0UmVzcG9uc2VEYXRhXSA9IHVzZVN0YXRlKG51bGwpOyAvLyBFc3RhZG8gcGFyYSBhbG1hY2VuYXIgbGEgcmVzcHVlc3RhXG4gICAgY29uc3QgW3NlbGVjdGVkUGxhY2UsIHNldFNlbGVjdGVkUGxhY2VdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBbNTEuNTA1LCAtMC4wOV07IC8vIENvb3JkZW5hZGFzIGRlIGVqZW1wbG9cbiAgICBjb25zdCB6b29tID0gMTM7XG5cblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8nK3NlcnZlcisnL2FwaS90YWJsYScpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZURhdGEoZGF0YSk7IC8vIEFsbWFjZW5hIGxhIHJlc3B1ZXN0YSBlbiBlbCBlc3RhZG9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBhbCByZWFsaXphciBsYSBwZXRpY2nDs24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVQbGFjZVNlbGVjdGVkID0gKHBsYWNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYWNlKTtcbiAgICAgICAgc2V0U2VsZWN0ZWRQbGFjZShwbGFjZSk7XG4gICAgICAgIC8vIEVudmlhciBub21icmVfY29ydG8gYWwgc2Vydmlkb3IgYSB0cmF2w6lzIGRlIFdlYlNvY2tldFxuICAgICAgICBjb25zdCB3cyA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vJytzZXJ2ZXIpO1xuICAgICAgICB3cy5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBFbnZpYXIgdW4gbWVuc2FqZSBhbCBzZXJ2aWRvciBjb24gZWwgbm9tYnJlX2NvcnRvIHNlbGVjY2lvbmFkb1xuICAgICAgICAgICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeShwbGFjZS5hZGRyZXNzX2NvbXBvbmVudHNbMF0pKTtcbiAgICAgICAgICAgIHdzLmNsb3NlKCk7IC8vIENlcnJhciBsYSBjb25leGnDs24gZGVzcHXDqXMgZGUgZW52aWFyIGVsIG1lbnNhamVcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoRGF0YSgpOyAvLyBMbGFtYSBhIGxhIGZ1bmNpw7NuIGZldGNoRGF0YSBjdWFuZG8gc2UgbW9udGEgZWwgY29tcG9uZW50ZVxuXG4gICAgICAgIC8vIEVzdGFibGVjZXIgdW5hIGNvbmV4acOzbiBXZWJTb2NrZXRcbiAgICAgICAgY29uc3Qgd3MgPSBuZXcgV2ViU29ja2V0KCd3czovLycrc2VydmVyKTtcbiAgICAgICAgd3Mub25tZXNzYWdlID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gU2kgc2UgcmVjaWJlIHVuIG1lbnNhamUgZGVsIHNlcnZpZG9yLCBhY3R1YWxpemFyIGxvcyBkYXRvc1xuICAgICAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIC8vIENlcnJhciBsYSBjb25leGnDs24gV2ViU29ja2V0IGN1YW5kbyBlbCBjb21wb25lbnRlIHNlIGRlc21vbnRlXG4gICAgICAgICAgICB3cy5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTsgLy8gRWwgc2VndW5kbyBhcmd1bWVudG8gZGUgdXNlRWZmZWN0IHZhY8OtbyBhc2VndXJhIHF1ZSBzZSBlamVjdXRlIHNvbG8gdW5hIHZleiBhbCBtb250YXIgZWwgY29tcG9uZW50ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwdncnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICAgIH19PlxuICAgICAgICAgICAgPENhYmVjZXJhIG1vc3RyYXJCb3RvbkhvbWU9e3RydWV9Lz5cbiAgICAgICAgICAgIDxoMT5Qw6FnaW5hIGRlIFNhbHVkbzwvaDE+XG4gICAgICAgICAgICA8cD5Ib2xhISBCaWVudmVuaWRvIGEgZXN0YSBww6FnaW5hIGRlIHNhbHVkby48L3A+XG4gICAgICAgICAgICA8aDE+U2VhcmNoQm94PC9oMT5cbiAgICAgICAgICAgIDxTZWFyY2hCb3ggb25QbGFjZVNlbGVjdGVkPXtoYW5kbGVQbGFjZVNlbGVjdGVkfSAvPlxuICAgICAgICAgICAgey8qIE11ZXN0cmEgc2VsZWN0ZWRQbGFjZSBlbiB0dSBhcGxpY2FjacOzbiBzaSBsbyBkZXNlYXMgKi99XG4gICAgICAgICAgICB7c2VsZWN0ZWRQbGFjZSAmJiA8cD5TZWxlY3RlZCBQbGFjZTogPC9wPn1cbiAgICAgICAgICAgIDxQaWUvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9sYTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQ2FiZWNlcmEiLCJQaWUiLCJTZWFyY2hCb3giLCJzZXJ2ZXIiLCJIb2xhIiwicmVzcG9uc2VEYXRhIiwic2V0UmVzcG9uc2VEYXRhIiwic2VsZWN0ZWRQbGFjZSIsInNldFNlbGVjdGVkUGxhY2UiLCJyb3V0ZXIiLCJsb2NhdGlvbiIsInpvb20iLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJkYXRhIiwianNvbiIsIkVycm9yIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlUGxhY2VTZWxlY3RlZCIsInBsYWNlIiwibG9nIiwid3MiLCJXZWJTb2NrZXQiLCJvbm9wZW4iLCJzZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsImFkZHJlc3NfY29tcG9uZW50cyIsImNsb3NlIiwib25tZXNzYWdlIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIm1vc3RyYXJCb3RvbkhvbWUiLCJoMSIsInAiLCJvblBsYWNlU2VsZWN0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/tiempo.js\n"));

/***/ })

});