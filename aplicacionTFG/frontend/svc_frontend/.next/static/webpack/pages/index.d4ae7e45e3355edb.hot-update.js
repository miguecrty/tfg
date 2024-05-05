"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n\nvar _s = $RefreshSig$();\n\n\n // Importa la biblioteca para manejar cookies\n\nconst Home = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [exito, setExito] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fetchData = async (userData)=>{\n        try {\n            const response = await fetch(\"http://localhost:3000/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(userData)\n            });\n            if (response.status == 200) {\n                // Si las credenciales son correctas, muestra un mensaje y luego redirige a la página de menú\n                setExito(\"Credenciales correctas, redirigiendo a men\\xfa...\");\n                setTimeout(()=>{\n                    js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"isLoggedIn\", \"true\");\n                    router.push(\"/menu\");\n                }, 1000); // Espera 2 segundos antes de redirigir\n            } else {\n                const responseData = await response.json();\n                setError(responseData.error);\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const isLoggedIn = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"isLoggedIn\");\n        // Simular una carga durante 2 segundos\n        const timer = setTimeout(()=>{\n            if (isLoggedIn === \"true\") {\n                // Si el usuario está logueado, redirecciona a la página de menú\n                router.push(\"/menu\");\n            } else {\n                // Si el usuario no está logueado, se ha completado la carga\n                setIsLoading(false);\n                router.push(\"/\");\n            }\n        }, 500);\n        return ()=>clearTimeout(timer); // Limpia el temporizador al desmontar el componente\n    }, []);\n    const handleLogin = ()=>{\n        const userData = {\n            username: username,\n            password: password\n        };\n        fetchData(userData);\n    };\n    if (isLoading) {\n        // Si isLoading es true, la página está cargando\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"cargando\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/cargando.gif\",\n                alt: \"Cargando\"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 73,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n            lineNumber: 72,\n            columnNumber: 13\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"login-form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Iniciar Sesi\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Usuario\",\n                        value: username,\n                        onChange: (e)=>setUsername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Contrase\\xf1a\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogin,\n                        children: \"Iniciar Sesi\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"error-message\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 85,\n                        columnNumber: 27\n                    }, undefined),\n                    exito && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"exito-message\",\n                        children: exito\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 86,\n                        columnNumber: 27\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Home, \"fUdi8kB2vLx2JnJcbnB88dHBbe4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7IC8vIEltcG9ydGEgbGEgYmlibGlvdGVjYSBwYXJhIG1hbmVqYXIgY29va2llc1xuaW1wb3J0IFBpZSBmcm9tICcuLi9jb21wb25lbnRzL3BpZSc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtleGl0byxzZXRFeGl0b10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVzZXJEYXRhKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW4nLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSlcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAvLyBTaSBsYXMgY3JlZGVuY2lhbGVzIHNvbiBjb3JyZWN0YXMsIG11ZXN0cmEgdW4gbWVuc2FqZSB5IGx1ZWdvIHJlZGlyaWdlIGEgbGEgcMOhZ2luYSBkZSBtZW7DulxuICAgICAgICAgICAgICAgIHNldEV4aXRvKCdDcmVkZW5jaWFsZXMgY29ycmVjdGFzLCByZWRpcmlnaWVuZG8gYSBtZW7Dui4uLicpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldCgnaXNMb2dnZWRJbicsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbWVudScpO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApOyAvLyBFc3BlcmEgMiBzZWd1bmRvcyBhbnRlcyBkZSByZWRpcmlnaXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHNldEVycm9yKHJlc3BvbnNlRGF0YS5lcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpc0xvZ2dlZEluID0gQ29va2llcy5nZXQoJ2lzTG9nZ2VkSW4nKTtcblxuICAgICAgICAvLyBTaW11bGFyIHVuYSBjYXJnYSBkdXJhbnRlIDIgc2VndW5kb3NcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0xvZ2dlZEluID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAvLyBTaSBlbCB1c3VhcmlvIGVzdMOhIGxvZ3VlYWRvLCByZWRpcmVjY2lvbmEgYSBsYSBww6FnaW5hIGRlIG1lbsO6XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9tZW51Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFNpIGVsIHVzdWFyaW8gbm8gZXN0w6EgbG9ndWVhZG8sIHNlIGhhIGNvbXBsZXRhZG8gbGEgY2FyZ2FcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7IC8vIExpbXBpYSBlbCB0ZW1wb3JpemFkb3IgYWwgZGVzbW9udGFyIGVsIGNvbXBvbmVudGVcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9ICgpID0+IHtcbiBcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaERhdGEodXNlckRhdGEpO1xuIFxuICAgIH07XG5cbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgIC8vIFNpIGlzTG9hZGluZyBlcyB0cnVlLCBsYSBww6FnaW5hIGVzdMOhIGNhcmdhbmRvXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmdhbmRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jYXJnYW5kby5naWZcIiBhbHQ9XCJDYXJnYW5kb1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGgxPkluaWNpYXIgU2VzacOzbjwvaDE+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc3VhcmlvXCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJDb250cmFzZcOxYVwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+SW5pY2lhciBTZXNpw7NuPC9idXR0b24+XG4gICAgICAgICAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiPntlcnJvcn08L2Rpdj59XG4gICAgICAgICAgICAgICAge2V4aXRvICYmIDxkaXYgY2xhc3NOYW1lPVwiZXhpdG8tbWVzc2FnZVwiPntleGl0b308L2Rpdj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxQaWUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJDb29raWVzIiwiUGllIiwiSG9tZSIsInJvdXRlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImV4aXRvIiwic2V0RXhpdG8iLCJmZXRjaERhdGEiLCJ1c2VyRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJzZXRUaW1lb3V0Iiwic2V0IiwicHVzaCIsInJlc3BvbnNlRGF0YSIsImpzb24iLCJjb25zb2xlIiwiaXNMb2dnZWRJbiIsImdldCIsInRpbWVyIiwiY2xlYXJUaW1lb3V0IiwiaGFuZGxlTG9naW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});