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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_cabecera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cabecera */ \"./src/components/cabecera.js\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var _components_searchbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/searchbox */ \"./src/components/searchbox.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_app */ \"./src/pages/_app.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst SeleccionLugar = ()=>{\n    _s();\n    const [responseData, setResponseData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Estado para almacenar la respuesta\n    const [selectedPlace, setSelectedPlace] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const username = js_cookie__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"username\");\n    const handlePlaceSelected = (place)=>{\n        console.log(place);\n        setSelectedPlace(place);\n        // Enviar nombre_corto al servidor a través de WebSocket\n        const ws = new WebSocket(\"ws://\" + _app__WEBPACK_IMPORTED_MODULE_6__.server);\n        ws.onopen = ()=>{\n            // Enviar un mensaje al servidor con el nombre_corto seleccionado\n            ws.send(JSON.stringify(place));\n            ws.close(); // Cerrar la conexión después de enviar el mensaje\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100vw\",\n            height: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabecera__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mostrarBotonHome: true\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"P\\xe1gina de Saludo\"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Hola! Bienvenido a esta p\\xe1gina de saludo.\"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"SearchBox\"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onPlaceSelected: handlePlaceSelected\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/tiempo.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SeleccionLugar, \"hYC239XaRaTIWC7m9XSx19xLLdY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SeleccionLugar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SeleccionLugar);\nvar _c;\n$RefreshReg$(_c, \"SeleccionLugar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGllbXBvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDTTtBQUNWO0FBQ1k7QUFDbEI7QUFDRTtBQUdoQyxNQUFNUyxpQkFBaUI7O0lBQ25CLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDLE9BQU8scUNBQXFDO0lBQzdGLE1BQU0sQ0FBQ1csZUFBZUMsaUJBQWlCLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU1hLFNBQVNYLHNEQUFTQTtJQUN4QixNQUFNWSxXQUFXUCxxREFBVyxDQUFDO0lBRzdCLE1BQU1TLHNCQUFzQixDQUFDQztRQUN6QkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaTCxpQkFBaUJLO1FBQ2pCLHdEQUF3RDtRQUN4RCxNQUFNRyxLQUFLLElBQUlDLFVBQVUsVUFBUWYsd0NBQU1BO1FBQ3ZDYyxHQUFHRSxNQUFNLEdBQUc7WUFDUixpRUFBaUU7WUFDakVGLEdBQUdHLElBQUksQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDUjtZQUN2QkcsR0FBR00sS0FBSyxJQUFJLGtEQUFrRDtRQUNsRTtJQUVKO0lBR0EscUJBQ0ksOERBQUNDO1FBQUlDLE9BQU87WUFDUkMsT0FBTztZQUNQQyxRQUFRO1FBQ1Y7OzBCQUNFLDhEQUFDM0IsNERBQVFBO2dCQUFDNEIsa0JBQWtCOzs7Ozs7MEJBQzVCLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBRTs7Ozs7OzBCQUNILDhEQUFDRDswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDM0IsNkRBQVNBO2dCQUFDNkIsaUJBQWlCbEI7Ozs7OzswQkFDNUIsOERBQUNaLHVEQUFHQTs7Ozs7Ozs7Ozs7QUFJaEI7R0FuQ01JOztRQUdhTixrREFBU0E7OztLQUh0Qk07QUFxQ04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3RpZW1wby5qcz9iNmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENhYmVjZXJhIGZyb20gJy4uL2NvbXBvbmVudHMvY2FiZWNlcmEnO1xuaW1wb3J0IFBpZSBmcm9tICcuLi9jb21wb25lbnRzL3BpZSc7XG5pbXBvcnQgU2VhcmNoQm94IGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoYm94JztcbmltcG9ydCB7c2VydmVyfSBmcm9tICcuL19hcHAnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuXG5jb25zdCBTZWxlY2Npb25MdWdhciA9ICgpID0+IHtcbiAgICBjb25zdCBbcmVzcG9uc2VEYXRhLCBzZXRSZXNwb25zZURhdGFdID0gdXNlU3RhdGUobnVsbCk7IC8vIEVzdGFkbyBwYXJhIGFsbWFjZW5hciBsYSByZXNwdWVzdGFcbiAgICBjb25zdCBbc2VsZWN0ZWRQbGFjZSwgc2V0U2VsZWN0ZWRQbGFjZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB1c2VybmFtZSA9IENvb2tpZXMuZ2V0KCd1c2VybmFtZScpO1xuICAgIFxuXG4gICAgY29uc3QgaGFuZGxlUGxhY2VTZWxlY3RlZCA9IChwbGFjZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwbGFjZSk7XG4gICAgICAgIHNldFNlbGVjdGVkUGxhY2UocGxhY2UpO1xuICAgICAgICAvLyBFbnZpYXIgbm9tYnJlX2NvcnRvIGFsIHNlcnZpZG9yIGEgdHJhdsOpcyBkZSBXZWJTb2NrZXRcbiAgICAgICAgY29uc3Qgd3MgPSBuZXcgV2ViU29ja2V0KCd3czovLycrc2VydmVyKTtcbiAgICAgICAgd3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gRW52aWFyIHVuIG1lbnNhamUgYWwgc2Vydmlkb3IgY29uIGVsIG5vbWJyZV9jb3J0byBzZWxlY2Npb25hZG9cbiAgICAgICAgICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkocGxhY2UpKTtcbiAgICAgICAgICAgIHdzLmNsb3NlKCk7IC8vIENlcnJhciBsYSBjb25leGnDs24gZGVzcHXDqXMgZGUgZW52aWFyIGVsIG1lbnNhamVcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwdncnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICAgIH19PlxuICAgICAgICAgICAgPENhYmVjZXJhIG1vc3RyYXJCb3RvbkhvbWU9e3RydWV9Lz5cbiAgICAgICAgICAgIDxoMT5Qw6FnaW5hIGRlIFNhbHVkbzwvaDE+XG4gICAgICAgICAgICA8cD5Ib2xhISBCaWVudmVuaWRvIGEgZXN0YSBww6FnaW5hIGRlIHNhbHVkby48L3A+XG4gICAgICAgICAgICA8aDE+U2VhcmNoQm94PC9oMT5cbiAgICAgICAgICAgIDxTZWFyY2hCb3ggb25QbGFjZVNlbGVjdGVkPXtoYW5kbGVQbGFjZVNlbGVjdGVkfSAvPlxuICAgICAgICAgICAgPFBpZS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICApOyBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjY2lvbkx1Z2FyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJDYWJlY2VyYSIsIlBpZSIsIlNlYXJjaEJveCIsInNlcnZlciIsIkNvb2tpZXMiLCJTZWxlY2Npb25MdWdhciIsInJlc3BvbnNlRGF0YSIsInNldFJlc3BvbnNlRGF0YSIsInNlbGVjdGVkUGxhY2UiLCJzZXRTZWxlY3RlZFBsYWNlIiwicm91dGVyIiwidXNlcm5hbWUiLCJnZXQiLCJoYW5kbGVQbGFjZVNlbGVjdGVkIiwicGxhY2UiLCJjb25zb2xlIiwibG9nIiwid3MiLCJXZWJTb2NrZXQiLCJvbm9wZW4iLCJzZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsImNsb3NlIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIm1vc3RyYXJCb3RvbkhvbWUiLCJoMSIsInAiLCJvblBsYWNlU2VsZWN0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/tiempo.js\n"));

/***/ })

});