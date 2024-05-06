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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n\nvar _s = $RefreshSig$();\n\n\n // Importa la biblioteca para manejar cookies\n\nconst Home = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [exito, setExito] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const ws = new WebSocket(\"ws://localhost:3000\");\n    ws.onmessage = (event)=>{\n        alert(\"Mensaje recibido desde el servidor:\", event.data);\n    // Aquí puedes manejar el mensaje recibido según tus necesidades\n    };\n    const fetchData = async (userData)=>{\n        try {\n            const response = await fetch(\"http://localhost:3000/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(userData)\n            });\n            if (response.status == 200) {\n                // Si las credenciales son correctas, muestra un mensaje y luego redirige a la página de menú\n                setTimeout(()=>{\n                    setIsLoading(true);\n                }, 1100);\n                setExito(\"Credenciales correctas, redirigiendo a men\\xfa...\");\n                setTimeout(()=>{\n                    js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"isLoggedIn\", \"true\");\n                    js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"username\", userData.username);\n                    router.push(\"/menu\");\n                }, 1500);\n            // Espera 2 segundos antes de redirigir\n            } else {\n                const responseData = await response.json();\n                setError(responseData.error);\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const isLoggedIn = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"isLoggedIn\");\n        // Simular una carga durante 2 segundos\n        const timer = setTimeout(()=>{\n            if (isLoggedIn === \"true\") {\n                // Si el usuario está logueado, redirecciona a la página de menú\n                router.push(\"/menu\");\n            } else {\n                // Si el usuario no está logueado, se ha completado la carga\n                setIsLoading(false);\n                router.push(\"/\");\n            }\n        }, 300);\n        return ()=>clearTimeout(timer); // Limpia el temporizador al desmontar el componente\n    }, []);\n    const handleLogin = ()=>{\n        const userData = {\n            username: username,\n            password: password\n        };\n        fetchData(userData);\n    };\n    const handleRegistro = ()=>{\n        // Si el usuario no está logueado, se ha completado la carga\n        setIsLoading(false);\n        router.push(\"/registro\");\n    };\n    if (isLoading) {\n        // Si isLoading es true, la página está cargando\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"cargando\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/cargando.gif\",\n                alt: \"Cargando\"\n            }, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 91,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n            lineNumber: 90,\n            columnNumber: 13\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"login-form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Iniciar Sesi\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 99,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Usuario\",\n                        value: username,\n                        onChange: (e)=>setUsername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Contrase\\xf1a\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogin,\n                        children: \"Iniciar Sesi\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleRegistro,\n                        children: \"Registrarse\"\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"error-message\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 104,\n                        columnNumber: 27\n                    }, undefined),\n                    exito && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"exito-message\",\n                        children: exito\n                    }, void 0, false, {\n                        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 105,\n                        columnNumber: 27\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/salas/Descargas/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/index.js\",\n        lineNumber: 97,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Home, \"fUdi8kB2vLx2JnJcbnB88dHBbe4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSjtBQUNSLENBQUMsNkNBQTZDO0FBQzFDO0FBRXBDLE1BQU1LLE9BQU87O0lBQ1QsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNTLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNlLE9BQU1DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRWxDLE1BQU1pQixLQUFLLElBQUlDLFVBQVU7SUFDekJELEdBQUdFLFNBQVMsR0FBRyxDQUFDQztRQUNmQyxNQUFNLHVDQUF1Q0QsTUFBTUUsSUFBSTtJQUN0RCxnRUFBZ0U7SUFDbEU7SUFFQSxNQUFNQyxZQUFZLE9BQU9DO1FBQ3JCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sK0JBQStCO2dCQUN4REMsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNQO1lBQ3pCO1lBRUEsSUFBSUMsU0FBU08sTUFBTSxJQUFJLEtBQUs7Z0JBQ3hCLDZGQUE2RjtnQkFDN0ZDLFdBQVc7b0JBQ1hyQixhQUFhO2dCQUNiLEdBQUU7Z0JBQ0ZJLFNBQVM7Z0JBQ1RpQixXQUFXO29CQUNQOUIscURBQVcsQ0FBQyxjQUFjO29CQUMxQkEscURBQVcsQ0FBQyxZQUFZcUIsU0FBU2pCLFFBQVE7b0JBQ3pDRCxPQUFPNkIsSUFBSSxDQUFDO2dCQUNoQixHQUFHO1lBQ0YsdUNBQXVDO1lBQ2hDLE9BQU87Z0JBQ2YsTUFBTUMsZUFBZSxNQUFNWCxTQUFTWSxJQUFJO2dCQUN4Q3ZCLFNBQVNzQixhQUFhdkIsS0FBSztZQUMvQjtRQUNKLEVBQUUsT0FBT0EsT0FBTztZQUNaeUIsUUFBUXpCLEtBQUssQ0FBQ0E7UUFDbEI7SUFDSjtJQUdBWixnREFBU0EsQ0FBQztRQUNOLE1BQU1zQyxhQUFhcEMscURBQVcsQ0FBQztRQUUvQix1Q0FBdUM7UUFDdkMsTUFBTXNDLFFBQVFSLFdBQVc7WUFDckIsSUFBSU0sZUFBZSxRQUFRO2dCQUN2QixnRUFBZ0U7Z0JBQ2hFakMsT0FBTzZCLElBQUksQ0FBQztZQUNoQixPQUFPO2dCQUNILDREQUE0RDtnQkFDNUR2QixhQUFhO2dCQUNiTixPQUFPNkIsSUFBSSxDQUFDO1lBQ2hCO1FBQ0osR0FBRztRQUVILE9BQU8sSUFBTU8sYUFBYUQsUUFBUSxvREFBb0Q7SUFDMUYsR0FBRyxFQUFFO0lBRUwsTUFBTUUsY0FBYztRQUNoQixNQUFNbkIsV0FBVztZQUNiakIsVUFBVUE7WUFDVkUsVUFBVUE7UUFDZDtRQUVBYyxVQUFVQztJQUVkO0lBQ0EsTUFBTW9CLGlCQUFpQjtRQUVuQiw0REFBNEQ7UUFDNURoQyxhQUFhO1FBQ2JOLE9BQU82QixJQUFJLENBQUM7SUFFaEI7SUFFQSxJQUFJeEIsV0FBVztRQUNYLGdEQUFnRDtRQUNoRCxxQkFDSSw4REFBQ2tDO1lBQUlDLFdBQVU7c0JBQ1AsNEVBQUNDO2dCQUFJQyxLQUFJO2dCQUF1QkMsS0FBSTs7Ozs7Ozs7Ozs7SUFHcEQ7SUFFQSxxQkFDSSw4REFBQ0o7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0k7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9DLGFBQVk7d0JBQVVDLE9BQU8vQzt3QkFBVWdELFVBQVUsQ0FBQ0MsSUFBTWhELFlBQVlnRCxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FDckcsOERBQUNIO3dCQUFNQyxNQUFLO3dCQUFXQyxhQUFZO3dCQUFhQyxPQUFPN0M7d0JBQVU4QyxVQUFVLENBQUNDLElBQU05QyxZQUFZOEMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBQzVHLDhEQUFDSTt3QkFBT0MsU0FBU2hCO2tDQUFhOzs7Ozs7a0NBQzlCLDhEQUFDZTt3QkFBT0MsU0FBU2Y7a0NBQWdCOzs7Ozs7b0JBQ2hDL0IsdUJBQVMsOERBQUNnQzt3QkFBSUMsV0FBVTtrQ0FBaUJqQzs7Ozs7O29CQUN6Q0UsdUJBQVMsOERBQUM4Qjt3QkFBSUMsV0FBVTtrQ0FBaUIvQjs7Ozs7Ozs7Ozs7OzBCQUU5Qyw4REFBQ1gsdURBQUdBOzs7Ozs7Ozs7OztBQUdoQjtHQXhHTUM7O1FBQ2FILGtEQUFTQTs7O0tBRHRCRztBQTBHTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJzsgLy8gSW1wb3J0YSBsYSBiaWJsaW90ZWNhIHBhcmEgbWFuZWphciBjb29raWVzXG5pbXBvcnQgUGllIGZyb20gJy4uL2NvbXBvbmVudHMvcGllJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2V4aXRvLHNldEV4aXRvXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IHdzID0gbmV3IFdlYlNvY2tldCgnd3M6Ly9sb2NhbGhvc3Q6MzAwMCcpO1xuICAgIHdzLm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgICBhbGVydCgnTWVuc2FqZSByZWNpYmlkbyBkZXNkZSBlbCBzZXJ2aWRvcjonLCBldmVudC5kYXRhKTtcbiAgICAgIC8vIEFxdcOtIHB1ZWRlcyBtYW5lamFyIGVsIG1lbnNhamUgcmVjaWJpZG8gc2Vnw7puIHR1cyBuZWNlc2lkYWRlc1xuICAgIH07XG5cbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXNlckRhdGEpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpbicsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKVxuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgIC8vIFNpIGxhcyBjcmVkZW5jaWFsZXMgc29uIGNvcnJlY3RhcywgbXVlc3RyYSB1biBtZW5zYWplIHkgbHVlZ28gcmVkaXJpZ2UgYSBsYSBww6FnaW5hIGRlIG1lbsO6XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sMTEwMCk7XG4gICAgICAgICAgICAgICAgc2V0RXhpdG8oJ0NyZWRlbmNpYWxlcyBjb3JyZWN0YXMsIHJlZGlyaWdpZW5kbyBhIG1lbsO6Li4uJyk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KCdpc0xvZ2dlZEluJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoJ3VzZXJuYW1lJywgdXNlckRhdGEudXNlcm5hbWUpOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbWVudScpO1xuICAgICAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICAgICAgICAgICAvLyBFc3BlcmEgMiBzZWd1bmRvcyBhbnRlcyBkZSByZWRpcmlnaXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHNldEVycm9yKHJlc3BvbnNlRGF0YS5lcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpc0xvZ2dlZEluID0gQ29va2llcy5nZXQoJ2lzTG9nZ2VkSW4nKTtcblxuICAgICAgICAvLyBTaW11bGFyIHVuYSBjYXJnYSBkdXJhbnRlIDIgc2VndW5kb3NcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0xvZ2dlZEluID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAvLyBTaSBlbCB1c3VhcmlvIGVzdMOhIGxvZ3VlYWRvLCByZWRpcmVjY2lvbmEgYSBsYSBww6FnaW5hIGRlIG1lbsO6XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9tZW51Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFNpIGVsIHVzdWFyaW8gbm8gZXN0w6EgbG9ndWVhZG8sIHNlIGhhIGNvbXBsZXRhZG8gbGEgY2FyZ2FcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDMwMCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7IC8vIExpbXBpYSBlbCB0ZW1wb3JpemFkb3IgYWwgZGVzbW9udGFyIGVsIGNvbXBvbmVudGVcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGZldGNoRGF0YSh1c2VyRGF0YSk7XG4gXG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVSZWdpc3RybyA9ICgpID0+IHtcbiBcbiAgICAgICAgLy8gU2kgZWwgdXN1YXJpbyBubyBlc3TDoSBsb2d1ZWFkbywgc2UgaGEgY29tcGxldGFkbyBsYSBjYXJnYVxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICByb3V0ZXIucHVzaCgnL3JlZ2lzdHJvJyk7XG4gXG4gICAgfTtcblxuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgLy8gU2kgaXNMb2FkaW5nIGVzIHRydWUsIGxhIHDDoWdpbmEgZXN0w6EgY2FyZ2FuZG9cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZ2FuZG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NhcmdhbmRvLmdpZlwiIGFsdD1cIkNhcmdhbmRvXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8aDE+SW5pY2lhciBTZXNpw7NuPC9oMT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlVzdWFyaW9cIiB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkNvbnRyYXNlw7FhXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5JbmljaWFyIFNlc2nDs248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlZ2lzdHJvfT5SZWdpc3RyYXJzZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIj57ZXJyb3J9PC9kaXY+fVxuICAgICAgICAgICAgICAgIHtleGl0byAmJiA8ZGl2IGNsYXNzTmFtZT1cImV4aXRvLW1lc3NhZ2VcIj57ZXhpdG99PC9kaXY+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8UGllIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQ29va2llcyIsIlBpZSIsIkhvbWUiLCJyb3V0ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJleGl0byIsInNldEV4aXRvIiwid3MiLCJXZWJTb2NrZXQiLCJvbm1lc3NhZ2UiLCJldmVudCIsImFsZXJ0IiwiZGF0YSIsImZldGNoRGF0YSIsInVzZXJEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsInNldFRpbWVvdXQiLCJzZXQiLCJwdXNoIiwicmVzcG9uc2VEYXRhIiwianNvbiIsImNvbnNvbGUiLCJpc0xvZ2dlZEluIiwiZ2V0IiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVMb2dpbiIsImhhbmRsZVJlZ2lzdHJvIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});