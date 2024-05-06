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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ws: function() { return /* binding */ ws; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n\nvar _s = $RefreshSig$();\n\n\n // Importa la biblioteca para manejar cookies\n\nconst ws = new WebSocket(\"ws://\" + server);\nconst Home = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [exito, setExito] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    ws.onmessage = (event)=>{\n        console.log(event.data);\n    };\n    const fetchData = async (userData)=>{\n        try {\n            const response = await fetch(\"http://localhost:3000/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(userData)\n            });\n            if (response.status == 200) {\n                // Si las credenciales son correctas, muestra un mensaje y luego redirige a la página de menú\n                setTimeout(()=>{\n                    setIsLoading(true);\n                }, 1100);\n                setExito(\"Credenciales correctas, redirigiendo a men\\xfa...\");\n                setTimeout(()=>{\n                    js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"isLoggedIn\", \"true\");\n                    js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"username\", userData.username);\n                    router.push(\"/menu\");\n                }, 1500);\n            // Espera 2 segundos antes de redirigir\n            } else {\n                const responseData = await response.json();\n                setError(responseData.error);\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const isLoggedIn = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"isLoggedIn\");\n        // Simular una carga durante 2 segundos\n        const timer = setTimeout(()=>{\n            if (isLoggedIn === \"true\") {\n                // Si el usuario está logueado, redirecciona a la página de menú\n                router.push(\"/menu\");\n            } else {\n                // Si el usuario no está logueado, se ha completado la carga\n                setIsLoading(false);\n                router.push(\"/\");\n            }\n        }, 300);\n        return ()=>clearTimeout(timer); // Limpia el temporizador al desmontar el componente\n    }, []);\n    const handleLogin = ()=>{\n        const userData = {\n            username: username,\n            password: password\n        };\n        fetchData(userData);\n    };\n    const handleRegistro = ()=>{\n        // Si el usuario no está logueado, se ha completado la carga\n        setIsLoading(false);\n        router.push(\"/registro\");\n    };\n    if (isLoading) {\n        // Si isLoading es true, la página está cargando\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"cargando\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/cargando.gif\",\n                alt: \"Cargando\"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 91,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n            lineNumber: 90,\n            columnNumber: 13\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"login-form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Iniciar Sesi\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 99,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Usuario\",\n                        value: username,\n                        onChange: (e)=>setUsername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Contrase\\xf1a\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogin,\n                        children: \"Iniciar Sesi\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleRegistro,\n                        children: \"Registrarse\"\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"error-message\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 104,\n                        columnNumber: 27\n                    }, undefined),\n                    exito && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"exito-message\",\n                        children: exito\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 105,\n                        columnNumber: 27\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n        lineNumber: 97,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Home, \"fUdi8kB2vLx2JnJcbnB88dHBbe4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVk0QyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FDNUcsOERBQUNJO3dCQUFPQyxTQUFTaEI7a0NBQWE7Ozs7OztrQ0FDOUIsOERBQUNlO3dCQUFPQyxTQUFTZjtrQ0FBZ0I7Ozs7OztvQkFDaEM3Qix1QkFBUyw4REFBQzhCO3dCQUFJQyxXQUFVO2tDQUFpQi9COzs7Ozs7b0JBQ3pDRSx1QkFBUyw4REFBQzRCO3dCQUFJQyxXQUFVO2tDQUFpQjdCOzs7Ozs7Ozs7Ozs7MEJBRTlDLDhEQUFDZCx1REFBR0E7Ozs7Ozs7Ozs7O0FBR2hCO0dBdkdNSTs7UUFFYU4sa0RBQVNBOzs7S0FGdEJNO0FBeUdOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnOyAvLyBJbXBvcnRhIGxhIGJpYmxpb3RlY2EgcGFyYSBtYW5lamFyIGNvb2tpZXNcbmltcG9ydCBQaWUgZnJvbSAnLi4vY29tcG9uZW50cy9waWUnO1xuXG5leHBvcnQgY29uc3Qgd3MgPSBuZXcgV2ViU29ja2V0KCd3czovLycrc2VydmVyKTtcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtleGl0byxzZXRFeGl0b10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICB3cy5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgY29uc29sZS5sb2coZXZlbnQuZGF0YSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1c2VyRGF0YSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpXG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgLy8gU2kgbGFzIGNyZWRlbmNpYWxlcyBzb24gY29ycmVjdGFzLCBtdWVzdHJhIHVuIG1lbnNhamUgeSBsdWVnbyByZWRpcmlnZSBhIGxhIHDDoWdpbmEgZGUgbWVuw7pcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwxMTAwKTtcbiAgICAgICAgICAgICAgICBzZXRFeGl0bygnQ3JlZGVuY2lhbGVzIGNvcnJlY3RhcywgcmVkaXJpZ2llbmRvIGEgbWVuw7ouLi4nKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoJ2lzTG9nZ2VkSW4nLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldCgndXNlcm5hbWUnLCB1c2VyRGF0YS51c2VybmFtZSk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9tZW51Jyk7XG4gICAgICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgICAgICAgIC8vIEVzcGVyYSAyIHNlZ3VuZG9zIGFudGVzIGRlIHJlZGlyaWdpclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IocmVzcG9uc2VEYXRhLmVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTG9nZ2VkSW4gPSBDb29raWVzLmdldCgnaXNMb2dnZWRJbicpO1xuXG4gICAgICAgIC8vIFNpbXVsYXIgdW5hIGNhcmdhIGR1cmFudGUgMiBzZWd1bmRvc1xuICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTG9nZ2VkSW4gPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgIC8vIFNpIGVsIHVzdWFyaW8gZXN0w6EgbG9ndWVhZG8sIHJlZGlyZWNjaW9uYSBhIGxhIHDDoWdpbmEgZGUgbWVuw7pcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL21lbnUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gU2kgZWwgdXN1YXJpbyBubyBlc3TDoSBsb2d1ZWFkbywgc2UgaGEgY29tcGxldGFkbyBsYSBjYXJnYVxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMzAwKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTsgLy8gTGltcGlhIGVsIHRlbXBvcml6YWRvciBhbCBkZXNtb250YXIgZWwgY29tcG9uZW50ZVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUxvZ2luID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgZmV0Y2hEYXRhKHVzZXJEYXRhKTtcbiBcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVJlZ2lzdHJvID0gKCkgPT4ge1xuIFxuICAgICAgICAvLyBTaSBlbCB1c3VhcmlvIG5vIGVzdMOhIGxvZ3VlYWRvLCBzZSBoYSBjb21wbGV0YWRvIGxhIGNhcmdhXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvcmVnaXN0cm8nKTtcbiBcbiAgICB9O1xuXG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAvLyBTaSBpc0xvYWRpbmcgZXMgdHJ1ZSwgbGEgcMOhZ2luYSBlc3TDoSBjYXJnYW5kb1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJnYW5kb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2FyZ2FuZG8uZ2lmXCIgYWx0PVwiQ2FyZ2FuZG9cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxoMT5JbmljaWFyIFNlc2nDs248L2gxPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVXN1YXJpb1wiIHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiQ29udHJhc2XDsWFcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9naW59PkluaWNpYXIgU2VzacOzbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUmVnaXN0cm99PlJlZ2lzdHJhcnNlPC9idXR0b24+XG4gICAgICAgICAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiPntlcnJvcn08L2Rpdj59XG4gICAgICAgICAgICAgICAge2V4aXRvICYmIDxkaXYgY2xhc3NOYW1lPVwiZXhpdG8tbWVzc2FnZVwiPntleGl0b308L2Rpdj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxQaWUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJDb29raWVzIiwiUGllIiwid3MiLCJXZWJTb2NrZXQiLCJzZXJ2ZXIiLCJIb21lIiwicm91dGVyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZXhpdG8iLCJzZXRFeGl0byIsIm9ubWVzc2FnZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJmZXRjaERhdGEiLCJ1c2VyRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJzZXRUaW1lb3V0Iiwic2V0IiwicHVzaCIsInJlc3BvbnNlRGF0YSIsImpzb24iLCJpc0xvZ2dlZEluIiwiZ2V0IiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVMb2dpbiIsImhhbmRsZVJlZ2lzdHJvIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});