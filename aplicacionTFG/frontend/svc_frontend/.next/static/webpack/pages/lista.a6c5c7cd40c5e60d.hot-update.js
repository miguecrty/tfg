"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/lista",{

/***/ "./src/components/chartTemperatura.js":
/*!********************************************!*\
  !*** ./src/components/chartTemperatura.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst ChartTemperatura = (param)=>{\n    let { data, labels } = param;\n    _s();\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const chartInstance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (chartRef && chartRef.current) {\n            if (chartInstance.current) {\n                chartInstance.current.destroy();\n            }\n            // Selecciona un subconjunto equidistante de los datos y etiquetas\n            const step = Math.ceil(data.length / 4); // Divide los datos en 4 partes\n            const selectedData = data.filter((_, index)=>index % step === 0);\n            const selectedLabels = labels.filter((_, index)=>index % step === 0);\n            const ctx = chartRef.current.getContext(\"2d\");\n            chartInstance.current = new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx, {\n                type: \"line\",\n                data: {\n                    labels: selectedLabels,\n                    datasets: [\n                        {\n                            label: \"Datos\",\n                            data: data,\n                            backgroundColor: \"rgba(75, 192, 192, 0.2)\",\n                            borderColor: \"rgba(75, 192, 192, 1)\",\n                            borderWidth: 1\n                        }\n                    ]\n                },\n                options: {\n                    scales: {\n                        y: {\n                            beginAtZero: true\n                        }\n                    }\n                }\n            });\n        }\n    }, [\n        data,\n        labels\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: chartRef\n    }, void 0, false, {\n        fileName: \"/home/salas/Escritorio/tfg/aplicacionTFG/frontend/svc_frontend/src/components/chartTemperatura.js\",\n        lineNumber: 42,\n        columnNumber: 10\n    }, undefined);\n};\n_s(ChartTemperatura, \"u5+iHnwD4hjVcMuzTE/TbI78erc=\");\n_c = ChartTemperatura;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartTemperatura);\nvar _c;\n$RefreshReg$(_c, \"ChartTemperatura\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jaGFydFRlbXBlcmF0dXJhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBDO0FBQ1I7QUFFbEMsTUFBTUcsbUJBQW1CO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUU7O0lBQ3hDLE1BQU1DLFdBQVdMLDZDQUFNQSxDQUFDO0lBQ3hCLE1BQU1NLGdCQUFnQk4sNkNBQU1BLENBQUM7SUFFN0JELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU0sWUFBWUEsU0FBU0UsT0FBTyxFQUFFO1lBQ2hDLElBQUlELGNBQWNDLE9BQU8sRUFBRTtnQkFDekJELGNBQWNDLE9BQU8sQ0FBQ0MsT0FBTztZQUMvQjtZQUNBLGtFQUFrRTtZQUNsRSxNQUFNQyxPQUFPQyxLQUFLQyxJQUFJLENBQUNSLEtBQUtTLE1BQU0sR0FBRyxJQUFJLCtCQUErQjtZQUN4RSxNQUFNQyxlQUFlVixLQUFLVyxNQUFNLENBQUMsQ0FBQ0MsR0FBR0MsUUFBVUEsUUFBUVAsU0FBUztZQUNoRSxNQUFNUSxpQkFBaUJiLE9BQU9VLE1BQU0sQ0FBQyxDQUFDQyxHQUFHQyxRQUFVQSxRQUFRUCxTQUFTO1lBRXBFLE1BQU1TLE1BQU1iLFNBQVNFLE9BQU8sQ0FBQ1ksVUFBVSxDQUFDO1lBQ3hDYixjQUFjQyxPQUFPLEdBQUcsSUFBSU4scURBQUtBLENBQUNpQixLQUFLO2dCQUNyQ0UsTUFBTTtnQkFDTmpCLE1BQU07b0JBQ0pDLFFBQVFhO29CQUNSSSxVQUFVO3dCQUFDOzRCQUNUQyxPQUFPOzRCQUNQbkIsTUFBTUE7NEJBQ05vQixpQkFBaUI7NEJBQ2pCQyxhQUFhOzRCQUNiQyxhQUFhO3dCQUNmO3FCQUFFO2dCQUNKO2dCQUNBQyxTQUFTO29CQUNQQyxRQUFRO3dCQUNOQyxHQUFHOzRCQUNEQyxhQUFhO3dCQUNmO29CQUNGO2dCQUNGO1lBQ0Y7UUFDRjtJQUNGLEdBQUc7UUFBQzFCO1FBQU1DO0tBQU87SUFFakIscUJBQU8sOERBQUMwQjtRQUFPQyxLQUFLMUI7Ozs7OztBQUN0QjtHQXZDTUg7S0FBQUE7QUF5Q04sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jaGFydFRlbXBlcmF0dXJhLmpzPzVkZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvYXV0byc7XG5cbmNvbnN0IENoYXJ0VGVtcGVyYXR1cmEgPSAoeyBkYXRhLCBsYWJlbHMgfSkgPT4ge1xuICBjb25zdCBjaGFydFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgY2hhcnRJbnN0YW5jZSA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjaGFydFJlZiAmJiBjaGFydFJlZi5jdXJyZW50KSB7XG4gICAgICBpZiAoY2hhcnRJbnN0YW5jZS5jdXJyZW50KSB7XG4gICAgICAgIGNoYXJ0SW5zdGFuY2UuY3VycmVudC5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgICAvLyBTZWxlY2Npb25hIHVuIHN1YmNvbmp1bnRvIGVxdWlkaXN0YW50ZSBkZSBsb3MgZGF0b3MgeSBldGlxdWV0YXNcbiAgICAgIGNvbnN0IHN0ZXAgPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyA0KTsgLy8gRGl2aWRlIGxvcyBkYXRvcyBlbiA0IHBhcnRlc1xuICAgICAgY29uc3Qgc2VsZWN0ZWREYXRhID0gZGF0YS5maWx0ZXIoKF8sIGluZGV4KSA9PiBpbmRleCAlIHN0ZXAgPT09IDApO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRMYWJlbHMgPSBsYWJlbHMuZmlsdGVyKChfLCBpbmRleCkgPT4gaW5kZXggJSBzdGVwID09PSAwKTtcblxuICAgICAgY29uc3QgY3R4ID0gY2hhcnRSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY2hhcnRJbnN0YW5jZS5jdXJyZW50ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBsYWJlbHM6IHNlbGVjdGVkTGFiZWxzLFxuICAgICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgbGFiZWw6ICdEYXRvcycsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3NSwgMTkyLCAxOTIsIDAuMiknLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDFcbiAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtkYXRhLCBsYWJlbHNdKTtcblxuICByZXR1cm4gPGNhbnZhcyByZWY9e2NoYXJ0UmVmfT48L2NhbnZhcz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFydFRlbXBlcmF0dXJhO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIkNoYXJ0IiwiQ2hhcnRUZW1wZXJhdHVyYSIsImRhdGEiLCJsYWJlbHMiLCJjaGFydFJlZiIsImNoYXJ0SW5zdGFuY2UiLCJjdXJyZW50IiwiZGVzdHJveSIsInN0ZXAiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsInNlbGVjdGVkRGF0YSIsImZpbHRlciIsIl8iLCJpbmRleCIsInNlbGVjdGVkTGFiZWxzIiwiY3R4IiwiZ2V0Q29udGV4dCIsInR5cGUiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsIm9wdGlvbnMiLCJzY2FsZXMiLCJ5IiwiYmVnaW5BdFplcm8iLCJjYW52YXMiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/chartTemperatura.js\n"));

/***/ })

});