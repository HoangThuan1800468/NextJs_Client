"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[user_id]/productOwner",{

/***/ "./Component/Other/ListProductOwner.tsx":
/*!**********************************************!*\
  !*** ./Component/Other/ListProductOwner.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_Products_productThunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/Products/productThunk */ \"./store/Products/productThunk.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ListProductOwner(props) {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const idProduct = props.data._id;\n    const accessToken = props.accessToken;\n    const user = props.user;\n    function handleChangeStatus() {\n        const res = dispatch((0,_store_Products_productThunk__WEBPACK_IMPORTED_MODULE_3__.fetchUpdateStatusProduct)({\n            idProduct\n        }));\n    // window.alert(\"Cho vui thôi chứ cái này không có làm!!!\")\n    }\n    async function handleSetStateProduct() {\n        await dispatch((0,_store_Products_productThunk__WEBPACK_IMPORTED_MODULE_3__.fetchOneProduct)(idProduct));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleSetStateProduct,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\".concat(user, \"/productOwner/\").concat(props.data._id),\n                        children: [\n                            \"Product Name: \",\n                            props.data.productname\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        \"Product Price: \",\n                        props.data.price,\n                        \" $\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        \"Product Sale: \",\n                        props.data.saleprice,\n                        \" $\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, this),\n                props.data.status ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Stop selling\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 32\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleChangeStatus,\n                    children: \"Sale now\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 62\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Edit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Delete\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, props.data._id, true, {\n            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(ListProductOwner, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = ListProductOwner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListProductOwner);\nvar _c;\n$RefreshReg$(_c, \"ListProductOwner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnQvT3RoZXIvTGlzdFByb2R1Y3RPd25lci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZCO0FBQzBCO0FBRXVDO0FBRTlGLFNBQVNJLGlCQUFrQkMsS0FBUyxFQUFDOztJQUNqQyxNQUFNQyxXQUFXTCx3REFBV0E7SUFDNUIsTUFBTU0sWUFBZ0JGLE1BQU1HLElBQUksQ0FBQ0MsR0FBRztJQUNwQyxNQUFNQyxjQUFrQkwsTUFBTUssV0FBVztJQUN6QyxNQUFNQyxPQUFXTixNQUFNTSxJQUFJO0lBRTNCLFNBQVNDLHFCQUFvQjtRQUMzQixNQUFNQyxNQUFVUCxTQUFTSCxzRkFBd0JBLENBQUM7WUFBQ0k7UUFBVTtJQUM3RCwyREFBMkQ7SUFDN0Q7SUFDQSxlQUFlTyx3QkFBdUI7UUFDcEMsTUFBTVIsU0FBU0osNkVBQWVBLENBQUNLO0lBQ2pDO0lBQ0EscUJBQ0k7a0JBQ0EsNEVBQUNROzs4QkFDRyw4REFBQ0M7b0JBQU9DLFNBQVNIOzhCQUNqQiw0RUFBQ2Qsa0RBQUlBO3dCQUFDa0IsTUFBTSxJQUF5QmIsT0FBckJNLE1BQUssa0JBQStCLE9BQWZOLE1BQU1HLElBQUksQ0FBQ0MsR0FBRzs7NEJBQUs7NEJBQ3ZDSixNQUFNRyxJQUFJLENBQUNXLFdBQVc7Ozs7Ozs7Ozs7Ozs4QkFHdkMsOERBQUNDOzt3QkFBRzt3QkFBZ0JmLE1BQU1HLElBQUksQ0FBQ2EsS0FBSzt3QkFBQzs7Ozs7Ozs4QkFDckMsOERBQUNEOzt3QkFBRzt3QkFBZWYsTUFBTUcsSUFBSSxDQUFDYyxTQUFTO3dCQUFDOzs7Ozs7O2dCQUN2Q2pCLE1BQU1HLElBQUksQ0FBQ2UsTUFBTSxpQkFBQyw4REFBQ1A7OEJBQU87Ozs7O3lDQUFzQiw4REFBQ0E7b0JBQU9DLFNBQVNMOzhCQUFvQjs7Ozs7d0JBQWlCOzhCQUN2Ryw4REFBQ0k7OEJBQU87Ozs7Ozs4QkFDUiw4REFBQ0E7OEJBQU87Ozs7Ozs4QkFDUiw4REFBQ1E7Ozs7OztXQVhJbkIsTUFBTUcsSUFBSSxDQUFDQyxHQUFHOzs7Ozs7QUFlL0I7R0E5QlNMOztRQUNZSCxvREFBV0E7OztLQUR2Qkc7QUErQlQsK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnQvT3RoZXIvTGlzdFByb2R1Y3RPd25lci50c3g/NzU1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBBcHBEaXNwYXRjaCwgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3N0b3JlXCI7XHJcbmltcG9ydCB7IGZldGNoT25lUHJvZHVjdCwgZmV0Y2hVcGRhdGVTdGF0dXNQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL3N0b3JlL1Byb2R1Y3RzL3Byb2R1Y3RUaHVua1wiO1xyXG5cclxuZnVuY3Rpb24gTGlzdFByb2R1Y3RPd25lciAocHJvcHM6YW55KXtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XHJcbiAgICBjb25zdCBpZFByb2R1Y3Q6YW55ID0gcHJvcHMuZGF0YS5faWQ7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbjphbnkgPSBwcm9wcy5hY2Nlc3NUb2tlbjtcclxuICAgIGNvbnN0IHVzZXI6YW55ID0gcHJvcHMudXNlcjtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VTdGF0dXMoKXtcclxuICAgICAgY29uc3QgcmVzOmFueSA9IGRpc3BhdGNoKGZldGNoVXBkYXRlU3RhdHVzUHJvZHVjdCh7aWRQcm9kdWN0LH0pKVxyXG4gICAgICAvLyB3aW5kb3cuYWxlcnQoXCJDaG8gdnVpIHRow7RpIGNo4bupIGPDoWkgbsOgeSBraMO0bmcgY8OzIGzDoG0hISFcIilcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVNldFN0YXRlUHJvZHVjdCgpe1xyXG4gICAgICBhd2FpdCBkaXNwYXRjaChmZXRjaE9uZVByb2R1Y3QoaWRQcm9kdWN0KSlcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDx1bCBrZXk9e3Byb3BzLmRhdGEuX2lkfSA+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2V0U3RhdGVQcm9kdWN0fT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3VzZXJ9L3Byb2R1Y3RPd25lci8ke3Byb3BzLmRhdGEuX2lkfWB9ID5cclxuICAgICAgICAgICAgICBQcm9kdWN0IE5hbWU6IHtwcm9wcy5kYXRhLnByb2R1Y3RuYW1lfVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8bGk+UHJvZHVjdCBQcmljZToge3Byb3BzLmRhdGEucHJpY2V9ICQ8L2xpPlxyXG4gICAgICAgICAgICA8bGk+UHJvZHVjdCBTYWxlOiB7cHJvcHMuZGF0YS5zYWxlcHJpY2V9ICQ8L2xpPlxyXG4gICAgICAgICAgICB7cHJvcHMuZGF0YS5zdGF0dXM/PGJ1dHRvbj5TdG9wIHNlbGxpbmc8L2J1dHRvbj46PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDaGFuZ2VTdGF0dXN9PlNhbGUgbm93PC9idXR0b24+fVxyXG4gICAgICAgICAgICA8YnV0dG9uPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbj5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExpc3RQcm9kdWN0T3duZXI7Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VEaXNwYXRjaCIsImZldGNoT25lUHJvZHVjdCIsImZldGNoVXBkYXRlU3RhdHVzUHJvZHVjdCIsIkxpc3RQcm9kdWN0T3duZXIiLCJwcm9wcyIsImRpc3BhdGNoIiwiaWRQcm9kdWN0IiwiZGF0YSIsIl9pZCIsImFjY2Vzc1Rva2VuIiwidXNlciIsImhhbmRsZUNoYW5nZVN0YXR1cyIsInJlcyIsImhhbmRsZVNldFN0YXRlUHJvZHVjdCIsInVsIiwiYnV0dG9uIiwib25DbGljayIsImhyZWYiLCJwcm9kdWN0bmFtZSIsImxpIiwicHJpY2UiLCJzYWxlcHJpY2UiLCJzdGF0dXMiLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Component/Other/ListProductOwner.tsx\n"));

/***/ })

});