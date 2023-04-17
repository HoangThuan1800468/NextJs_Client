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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_Products_productThunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/Products/productThunk */ \"./store/Products/productThunk.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ListProductOwner(props) {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const idProduct = props.data._id;\n    const user = props.user;\n    const accessToken = props.accesstoken;\n    const [statusProduct, setstatusProduct] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setstatusProduct(props.data.status);\n    }, []);\n    async function handleChangeStatusTrue() {\n        const status = true;\n        const res = await dispatch((0,_store_Products_productThunk__WEBPACK_IMPORTED_MODULE_3__.fetchUpdateStatusProduct)({\n            idProduct,\n            accessToken,\n            status\n        }));\n        setstatusProduct(true);\n    }\n    async function handleChangeStatusFalse() {\n        const status = false;\n        const res = await dispatch((0,_store_Products_productThunk__WEBPACK_IMPORTED_MODULE_3__.fetchUpdateStatusProduct)({\n            idProduct,\n            accessToken,\n            status\n        }));\n        setstatusProduct(false);\n    }\n    async function handleDeleteProduct() {\n        window.alert([\n            \"DELETE\"\n        ]);\n    }\n    function handleSetStateProduct() {\n        dispatch((0,_store_Products_productThunk__WEBPACK_IMPORTED_MODULE_3__.fetchOneProduct)(idProduct));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleSetStateProduct,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\".concat(user, \"/productOwner/\").concat(props.data._id),\n                        children: [\n                            \"Product Name: \",\n                            props.data.productname\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        \"Product Price: \",\n                        props.data.price,\n                        \" $\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        \"Product Sale: \",\n                        props.data.saleprice,\n                        \" $\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, this),\n                statusProduct ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleChangeStatusFalse,\n                    children: \"Stop sale\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 15\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleChangeStatusTrue,\n                    children: \"Sale now\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 15\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Edit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleDeleteProduct,\n                    children: \"Delete\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, props.data._id, true, {\n            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(ListProductOwner, \"iWszsMqG7o2FcGsdbmKkXksqjJ8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = ListProductOwner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListProductOwner);\nvar _c;\n$RefreshReg$(_c, \"ListProductOwner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnQvT3RoZXIvTGlzdFByb2R1Y3RPd25lci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkI7QUFDMEI7QUFFdUM7QUFDbEQ7QUFFNUMsU0FBU00saUJBQWtCQyxLQUFTLEVBQUM7O0lBQ2pDLE1BQU1DLFdBQVdQLHdEQUFXQTtJQUM1QixNQUFNUSxZQUFnQkYsTUFBTUcsSUFBSSxDQUFDQyxHQUFHO0lBQ3BDLE1BQU1DLE9BQVdMLE1BQU1LLElBQUk7SUFDM0IsTUFBTUMsY0FBa0JOLE1BQU1PLFdBQVc7SUFFekMsTUFBTSxDQUFDQyxlQUFjQyxpQkFBaUIsR0FBQ1gsK0NBQVFBLENBQUMsQ0FBQztJQUVqREQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkWSxpQkFBaUJULE1BQU1HLElBQUksQ0FBQ08sTUFBTTtJQUNwQyxHQUFHLEVBQUU7SUFFTCxlQUFlQyx5QkFBd0I7UUFDckMsTUFBTUQsU0FBaUIsSUFBSTtRQUMzQixNQUFNRSxNQUFVLE1BQU1YLFNBQVNMLHNGQUF3QkEsQ0FBQztZQUFDTTtZQUFVSTtZQUFZSTtRQUFNO1FBQ3JGRCxpQkFBaUIsSUFBSTtJQUN2QjtJQUNBLGVBQWVJLDBCQUF5QjtRQUN0QyxNQUFNSCxTQUFpQixLQUFLO1FBQzVCLE1BQU1FLE1BQVUsTUFBTVgsU0FBU0wsc0ZBQXdCQSxDQUFDO1lBQUNNO1lBQVVJO1lBQVlJO1FBQU07UUFDckZELGlCQUFpQixLQUFLO0lBQ3hCO0lBQ0EsZUFBZUssc0JBQXFCO1FBQ2xDQyxPQUFPQyxLQUFLLENBQUM7WUFBRTtTQUFRO0lBQ3pCO0lBQ0EsU0FBU0Msd0JBQXVCO1FBQzlCaEIsU0FBU04sNkVBQWVBLENBQUNPO0lBQzNCO0lBQ0EscUJBQ0k7a0JBQ0EsNEVBQUNnQjs7OEJBQ0csOERBQUNDO29CQUFPQyxTQUFTSDs4QkFDakIsNEVBQUN4QixrREFBSUE7d0JBQUM0QixNQUFNLElBQXlCckIsT0FBckJLLE1BQUssa0JBQStCLE9BQWZMLE1BQU1HLElBQUksQ0FBQ0MsR0FBRzs7NEJBQUs7NEJBQ3ZDSixNQUFNRyxJQUFJLENBQUNtQixXQUFXOzs7Ozs7Ozs7Ozs7OEJBR3ZDLDhEQUFDQzs7d0JBQUc7d0JBQWdCdkIsTUFBTUcsSUFBSSxDQUFDcUIsS0FBSzt3QkFBQzs7Ozs7Ozs4QkFDckMsOERBQUNEOzt3QkFBRzt3QkFBZXZCLE1BQU1HLElBQUksQ0FBQ3NCLFNBQVM7d0JBQUM7Ozs7Ozs7Z0JBRXRDakIsOEJBQ0EsOERBQUNXO29CQUFPQyxTQUFTUDs4QkFBeUI7Ozs7O3lDQUUxQyw4REFBQ007b0JBQU9DLFNBQVNUOzhCQUF3Qjs7Ozs7d0JBQWlCOzhCQUU1RCw4REFBQ1E7OEJBQU87Ozs7Ozs4QkFDUiw4REFBQ0E7b0JBQU9DLFNBQVNOOzhCQUFxQjs7Ozs7OzhCQUN0Qyw4REFBQ1k7Ozs7OztXQWhCSTFCLE1BQU1HLElBQUksQ0FBQ0MsR0FBRzs7Ozs7O0FBb0IvQjtHQWxEU0w7O1FBQ1lMLG9EQUFXQTs7O0tBRHZCSztBQW1EVCwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudC9PdGhlci9MaXN0UHJvZHVjdE93bmVyLnRzeD83NTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEFwcERpc3BhdGNoLCBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IHsgZmV0Y2hPbmVQcm9kdWN0LCBmZXRjaFVwZGF0ZVN0YXR1c1Byb2R1Y3QgfSBmcm9tIFwiLi4vLi4vc3RvcmUvUHJvZHVjdHMvcHJvZHVjdFRodW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIExpc3RQcm9kdWN0T3duZXIgKHByb3BzOmFueSl7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xyXG4gICAgY29uc3QgaWRQcm9kdWN0OmFueSA9IHByb3BzLmRhdGEuX2lkO1xyXG4gICAgY29uc3QgdXNlcjphbnkgPSBwcm9wcy51c2VyO1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW46YW55ID0gcHJvcHMuYWNjZXNzdG9rZW47XHJcblxyXG4gICAgY29uc3QgW3N0YXR1c1Byb2R1Y3Qsc2V0c3RhdHVzUHJvZHVjdF09dXNlU3RhdGUoe30pO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geztcclxuICAgICAgc2V0c3RhdHVzUHJvZHVjdChwcm9wcy5kYXRhLnN0YXR1cyk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlU3RhdHVzVHJ1ZSgpe1xyXG4gICAgICBjb25zdCBzdGF0dXM6Ym9vbGVhbiA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHJlczphbnkgPSBhd2FpdCBkaXNwYXRjaChmZXRjaFVwZGF0ZVN0YXR1c1Byb2R1Y3Qoe2lkUHJvZHVjdCxhY2Nlc3NUb2tlbixzdGF0dXN9KSk7XHJcbiAgICAgIHNldHN0YXR1c1Byb2R1Y3QodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VTdGF0dXNGYWxzZSgpe1xyXG4gICAgICBjb25zdCBzdGF0dXM6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICBjb25zdCByZXM6YW55ID0gYXdhaXQgZGlzcGF0Y2goZmV0Y2hVcGRhdGVTdGF0dXNQcm9kdWN0KHtpZFByb2R1Y3QsYWNjZXNzVG9rZW4sc3RhdHVzfSkpO1xyXG4gICAgICBzZXRzdGF0dXNQcm9kdWN0KGZhbHNlKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZVByb2R1Y3QoKXtcclxuICAgICAgd2luZG93LmFsZXJ0KFtgREVMRVRFYF0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2V0U3RhdGVQcm9kdWN0KCl7XHJcbiAgICAgIGRpc3BhdGNoKGZldGNoT25lUHJvZHVjdChpZFByb2R1Y3QpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPHVsIGtleT17cHJvcHMuZGF0YS5faWR9ID5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZXRTdGF0ZVByb2R1Y3R9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgLyR7dXNlcn0vcHJvZHVjdE93bmVyLyR7cHJvcHMuZGF0YS5faWR9YH0gPlxyXG4gICAgICAgICAgICAgIFByb2R1Y3QgTmFtZToge3Byb3BzLmRhdGEucHJvZHVjdG5hbWV9XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxsaT5Qcm9kdWN0IFByaWNlOiB7cHJvcHMuZGF0YS5wcmljZX0gJDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5Qcm9kdWN0IFNhbGU6IHtwcm9wcy5kYXRhLnNhbGVwcmljZX0gJDwvbGk+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzdGF0dXNQcm9kdWN0P1xyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2hhbmdlU3RhdHVzRmFsc2V9PlN0b3Agc2FsZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNoYW5nZVN0YXR1c1RydWV9PlNhbGUgbm93PC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGJ1dHRvbj5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlUHJvZHVjdH0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMaXN0UHJvZHVjdE93bmVyOyJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRGlzcGF0Y2giLCJmZXRjaE9uZVByb2R1Y3QiLCJmZXRjaFVwZGF0ZVN0YXR1c1Byb2R1Y3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpc3RQcm9kdWN0T3duZXIiLCJwcm9wcyIsImRpc3BhdGNoIiwiaWRQcm9kdWN0IiwiZGF0YSIsIl9pZCIsInVzZXIiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc3Rva2VuIiwic3RhdHVzUHJvZHVjdCIsInNldHN0YXR1c1Byb2R1Y3QiLCJzdGF0dXMiLCJoYW5kbGVDaGFuZ2VTdGF0dXNUcnVlIiwicmVzIiwiaGFuZGxlQ2hhbmdlU3RhdHVzRmFsc2UiLCJoYW5kbGVEZWxldGVQcm9kdWN0Iiwid2luZG93IiwiYWxlcnQiLCJoYW5kbGVTZXRTdGF0ZVByb2R1Y3QiLCJ1bCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJocmVmIiwicHJvZHVjdG5hbWUiLCJsaSIsInByaWNlIiwic2FsZXByaWNlIiwiaHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Component/Other/ListProductOwner.tsx\n"));

/***/ })

});