"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/menu",{

/***/ "./src/components/withAuth.js":
/*!************************************!*\
  !*** ./src/components/withAuth.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n// ConAuth.js\n\n\n\n\n// Función de autenticación\nconst withAuth = (Component)=>{\n    var _s = $RefreshSig$();\n    const Auth = (props)=>{\n        _s();\n        // Verificar el estado de autenticación del usuario aquí\n        const isAuthenticated = checkAuthentication();\n        // Redirigir al usuario a la página de inicio de sesión si no está autenticado\n        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n        if (!isAuthenticated) {\n            router.push(\"/\");\n            return null; // O algún indicador de carga, dependiendo de tu preferencia\n        }\n        // Si está autenticado, renderizar el componente deseado\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...props\n        }, void 0, false, {\n            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/components/withAuth.js\",\n            lineNumber: 20,\n            columnNumber: 16\n        }, undefined);\n    };\n    _s(Auth, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n        return [\n            next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n        ];\n    });\n    return Auth;\n};\n// Función para verificar la autenticación (puedes usar cookies aquí)\nconst checkAuthentication = ()=>{\n    // Lógica para verificar si el usuario está autenticado, por ejemplo, verificar las cookies\n    const username = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"username\"); // Debes definir esta función\n    return !!username; // Devolver verdadero si hay un nombre de usuario en las cookies\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (withAuth);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy93aXRoQXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGFBQWE7O0FBQ2E7QUFDYztBQUNSO0FBRWhDLDJCQUEyQjtBQUMzQixNQUFNRyxXQUFXLENBQUNDOztJQUNkLE1BQU1DLE9BQU8sQ0FBQ0M7O1FBQ1Ysd0RBQXdEO1FBQ3hELE1BQU1DLGtCQUFrQkM7UUFFeEIsOEVBQThFO1FBQzlFLE1BQU1DLFNBQVNSLHNEQUFTQTtRQUN4QixJQUFJLENBQUNNLGlCQUFpQjtZQUNsQkUsT0FBT0MsSUFBSSxDQUFDO1lBQ1osT0FBTyxNQUFNLDREQUE0RDtRQUM3RTtRQUVBLHdEQUF3RDtRQUN4RCxxQkFBTyw4REFBQ047WUFBVyxHQUFHRSxLQUFLOzs7Ozs7SUFDL0I7T0FiTUQ7O1lBS2FKLGtEQUFTQTs7O0lBVTVCLE9BQU9JO0FBQ1g7QUFFQSxxRUFBcUU7QUFDckUsTUFBTUcsc0JBQXNCO0lBQ3hCLDJGQUEyRjtJQUMzRixNQUFNRyxXQUFXVCxxREFBVyxDQUFDLGFBQWEsNkJBQTZCO0lBQ3ZFLE9BQU8sQ0FBQyxDQUFDUyxVQUFVLGdFQUFnRTtBQUN2RjtBQUVBLCtEQUFlUixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3dpdGhBdXRoLmpzPzU0NTgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29uQXV0aC5qc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbi8vIEZ1bmNpw7NuIGRlIGF1dGVudGljYWNpw7NuXG5jb25zdCB3aXRoQXV0aCA9IChDb21wb25lbnQpID0+IHtcbiAgICBjb25zdCBBdXRoID0gKHByb3BzKSA9PiB7XG4gICAgICAgIC8vIFZlcmlmaWNhciBlbCBlc3RhZG8gZGUgYXV0ZW50aWNhY2nDs24gZGVsIHVzdWFyaW8gYXF1w61cbiAgICAgICAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gY2hlY2tBdXRoZW50aWNhdGlvbigpO1xuXG4gICAgICAgIC8vIFJlZGlyaWdpciBhbCB1c3VhcmlvIGEgbGEgcMOhZ2luYSBkZSBpbmljaW8gZGUgc2VzacOzbiBzaSBubyBlc3TDoSBhdXRlbnRpY2Fkb1xuICAgICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICAgICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gTyBhbGfDum4gaW5kaWNhZG9yIGRlIGNhcmdhLCBkZXBlbmRpZW5kbyBkZSB0dSBwcmVmZXJlbmNpYVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2kgZXN0w6EgYXV0ZW50aWNhZG8sIHJlbmRlcml6YXIgZWwgY29tcG9uZW50ZSBkZXNlYWRvXG4gICAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz47XG4gICAgfTtcblxuICAgIHJldHVybiBBdXRoO1xufTtcblxuLy8gRnVuY2nDs24gcGFyYSB2ZXJpZmljYXIgbGEgYXV0ZW50aWNhY2nDs24gKHB1ZWRlcyB1c2FyIGNvb2tpZXMgYXF1w60pXG5jb25zdCBjaGVja0F1dGhlbnRpY2F0aW9uID0gKCkgPT4ge1xuICAgIC8vIEzDs2dpY2EgcGFyYSB2ZXJpZmljYXIgc2kgZWwgdXN1YXJpbyBlc3TDoSBhdXRlbnRpY2FkbywgcG9yIGVqZW1wbG8sIHZlcmlmaWNhciBsYXMgY29va2llc1xuICAgIGNvbnN0IHVzZXJuYW1lID0gQ29va2llcy5nZXQoJ3VzZXJuYW1lJyk7IC8vIERlYmVzIGRlZmluaXIgZXN0YSBmdW5jacOzblxuICAgIHJldHVybiAhIXVzZXJuYW1lOyAvLyBEZXZvbHZlciB2ZXJkYWRlcm8gc2kgaGF5IHVuIG5vbWJyZSBkZSB1c3VhcmlvIGVuIGxhcyBjb29raWVzXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIkNvb2tpZXMiLCJ3aXRoQXV0aCIsIkNvbXBvbmVudCIsIkF1dGgiLCJwcm9wcyIsImlzQXV0aGVudGljYXRlZCIsImNoZWNrQXV0aGVudGljYXRpb24iLCJyb3V0ZXIiLCJwdXNoIiwidXNlcm5hbWUiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/withAuth.js\n"));

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_cabecera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/cabecera */ \"./src/components/cabecera.js\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/withAuth */ \"./src/components/withAuth.js\");\n\n\n\n\n\n\n\nconst Menu = ()=>{\n    const handleItemClick = (url)=>{\n        router.push(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fondo\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Men\\xfa principal\"\n                        }, void 0, false, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 16,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"./images/logo.png\"\n                        }, void 0, false, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 17,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\"\n                        }, void 0, false, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 18,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"./styles/menu.css\"\n                        }, void 0, false, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 19,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabecera__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    mostrarBotonHome: false,\n                    mostrarUser: true\n                }, void 0, false, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"display-2 text-center mt-2\",\n                    children: \"Men\\xfa principal\"\n                }, void 0, false, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"containerP d-flex flex-wrap justify-content-around mt-4 mb-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white bg-opacity-50 card border-0 shadow\",\n                            onClick: ()=>handleItemClick(\"/monitorizar\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"title text-center mt-4\",\n                                    children: \"Lista de lugares\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"card-img\",\n                                    src: \"./images/lista.png\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white bg-opacity-50 card border-0 shadow\",\n                            onClick: ()=>handleItemClick(\"/pronostico\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"title text-center mt-4\",\n                                    children: \"Pron\\xf3stico\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"card-img\",\n                                    src: \"./images/pronostico.png\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 29,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white bg-opacity-50 card border-0 shadow\",\n                            onClick: ()=>handleItemClick(\"/micuenta\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"title text-center mt-4\",\n                                    children: \"Mi cuenta\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"card-img\",\n                                    src: \"./images/configuracion.png\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                            lineNumber: 33,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/migue/trabajoFinGrado/tfg/aplicacionTFG/frontend/svc_frontend/src/pages/menu.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ1Q7QUFDdUI7QUFDbkI7QUFDWDtBQUNnQjtBQUU3QyxNQUFNUyxPQUFPO0lBQ1QsTUFBTUMsa0JBQWtCLENBQUNDO1FBQ3JCQyxPQUFPQyxJQUFJLENBQUNGO0lBQ2hCO0lBQ0EscUJBQ0k7a0JBQ0EsNEVBQUNHO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDUixrREFBSUE7O3NDQUNELDhEQUFDUztzQ0FBTTs7Ozs7O3NDQUNQLDhEQUFDQzs0QkFBS0MsS0FBSTs0QkFBT0MsTUFBSzs7Ozs7O3NDQUN0Qiw4REFBQ0Y7NEJBQUtDLEtBQUk7NEJBQWFDLE1BQUs7Ozs7OztzQ0FDNUIsOERBQUNGOzRCQUFLQyxLQUFJOzRCQUFhQyxNQUFLOzs7Ozs7Ozs7Ozs7OEJBRWhDLDhEQUFDbkIsNERBQVFBO29CQUFDb0Isa0JBQWtCO29CQUFPQyxhQUFhOzs7Ozs7OEJBQ2hELDhEQUFDQztvQkFBR1AsV0FBVTs4QkFBNkI7Ozs7Ozs4QkFDM0MsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0Q7NEJBQUtDLFdBQVU7NEJBQStDUSxTQUFTLElBQU1iLGdCQUFnQjs7OENBQzlGLDhEQUFDWTtvQ0FBR1AsV0FBVTs4Q0FBeUI7Ozs7Ozs4Q0FDbkMsOERBQUNTO29DQUFJVCxXQUFVO29DQUFXVSxLQUFJO29DQUFxQkMsS0FBSTs7Ozs7Ozs7Ozs7O3NDQUczRCw4REFBQ1o7NEJBQUtDLFdBQVU7NEJBQThDUSxTQUFTLElBQU1iLGdCQUFnQjs7OENBQzdGLDhEQUFDWTtvQ0FBR1AsV0FBVTs4Q0FBeUI7Ozs7Ozs4Q0FDbkMsOERBQUNTO29DQUFJVCxXQUFVO29DQUFXVSxLQUFJO29DQUEwQkMsS0FBSTs7Ozs7Ozs7Ozs7O3NDQUVoRSw4REFBQ1o7NEJBQUtDLFdBQVU7NEJBQThDUSxTQUFTLElBQU1iLGdCQUFnQjs7OENBQzdGLDhEQUFDWTtvQ0FBR1AsV0FBVTs4Q0FBeUI7Ozs7Ozs4Q0FDbkMsOERBQUNTO29DQUFJVCxXQUFVO29DQUFXVSxLQUFJO29DQUE2QkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUd2RSw4REFBQ3pCLHVEQUFHQTs7Ozs7Ozs7Ozs7O0FBSWhCO0tBbENNUTtBQW9DTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbWVudS5qcz81ZWVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYWJlY2VyYSBmcm9tICdAL2NvbXBvbmVudHMvY2FiZWNlcmEnO1xuaW1wb3J0IFBpZSBmcm9tICcuLi9jb21wb25lbnRzL3BpZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB3aXRoQXV0aCBmcm9tICdAL2NvbXBvbmVudHMvd2l0aEF1dGgnO1xuXG5jb25zdCBNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUl0ZW1DbGljayA9ICh1cmwpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2godXJsKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb25kbyc+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TWVuw7ogcHJpbmNpcGFsPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi4vaW1hZ2VzL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuL3N0eWxlcy9tZW51LmNzc1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8Q2FiZWNlcmEgbW9zdHJhckJvdG9uSG9tZT17ZmFsc2V9IG1vc3RyYXJVc2VyPXt0cnVlfSAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS0yIHRleHQtY2VudGVyIG10LTInPk1lbsO6IHByaW5jaXBhbDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclAgZC1mbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIG10LTQgbWItNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJnLW9wYWNpdHktNTAgY2FyZCBib3JkZXItMCBzaGFkb3dcIiAgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKCcvbW9uaXRvcml6YXInKX0+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIHRleHQtY2VudGVyIG10LTRcIj5MaXN0YSBkZSBsdWdhcmVzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZ1wiIHNyYz1cIi4vaW1hZ2VzL2xpc3RhLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiYmctd2hpdGUgYmctb3BhY2l0eS01MCBjYXJkIGJvcmRlci0wIHNoYWRvd1wiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljaygnL3Byb25vc3RpY28nKX0+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIHRleHQtY2VudGVyIG10LTRcIj5Qcm9uw7NzdGljbzwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWdcIiBzcmM9XCIuL2ltYWdlcy9wcm9ub3N0aWNvLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiYmctd2hpdGUgYmctb3BhY2l0eS01MCBjYXJkIGJvcmRlci0wIHNoYWRvd1wiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljaygnL21pY3VlbnRhJyl9PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSB0ZXh0LWNlbnRlciBtdC00XCI+TWkgY3VlbnRhPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZ1wiIHNyYz1cIi4vaW1hZ2VzL2NvbmZpZ3VyYWNpb24ucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFBpZSAvPlxuICAgICAgICA8L2Rpdj4gICBcbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iXSwibmFtZXMiOlsiQ2FiZWNlcmEiLCJQaWUiLCJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiSGVhZCIsIndpdGhBdXRoIiwiTWVudSIsImhhbmRsZUl0ZW1DbGljayIsInVybCIsInJvdXRlciIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibW9zdHJhckJvdG9uSG9tZSIsIm1vc3RyYXJVc2VyIiwiaDEiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/menu.js\n"));

/***/ })

});