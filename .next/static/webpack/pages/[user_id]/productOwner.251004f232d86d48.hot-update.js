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

/***/ "./pages/[user_id]/productOwner/index.tsx":
/*!************************************************!*\
  !*** ./pages/[user_id]/productOwner/index.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductOwnerPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Component_Other_ListProductOwner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Component/Other/ListProductOwner */ \"./Component/Other/ListProductOwner.tsx\");\n/* harmony import */ var _store_User_userThunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/User/userThunk */ \"./store/User/userThunk.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ProductOwnerPage() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const [accesstoken, setaccesstoken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const accessToken = localStorage.getItem(\"accesstoken\");\n        setaccesstoken(accessToken);\n        const userid = localStorage.getItem(\"id_user\");\n        dispatch((0,_store_User_userThunk__WEBPACK_IMPORTED_MODULE_5__.fetchProductsOfUser)({\n            accessToken,\n            userid\n        }));\n        dispatch((0,_store_User_userThunk__WEBPACK_IMPORTED_MODULE_5__.fetchUser)({\n            userid,\n            accessToken\n        }));\n    }, []);\n    // \n    const productsOwner = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user.products);\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Product Owner page\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\productOwner\\\\index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\productOwner\\\\index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\productOwner\\\\index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"List Products Owner:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\productOwner\\\\index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: productsOwner.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Component_Other_ListProductOwner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            data: product,\n                            user: user.user._id,\n                            accessToken: accesstoken\n                        }, product._id, false, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\productOwner\\\\index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\productOwner\\\\index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\productOwner\\\\index.tsx\",\n            lineNumber: 28,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(ProductOwnerPage, \"FTnS5/J+YvU8AZJLHZUTUq4khs4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = ProductOwnerPage;\nvar _c;\n$RefreshReg$(_c, \"ProductOwnerPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcl9pZF0vcHJvZHVjdE93bmVyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDSTtBQUUxQjtBQUc0QztBQUNNO0FBRWhFLFNBQVNTLG1CQUFtQjs7SUFDdkMsTUFBTUMsV0FBV1Asd0RBQVdBO0lBRTVCLE1BQU0sQ0FBQ1EsYUFBWUMsZUFBZSxHQUFDViwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzdDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVksY0FBa0JDLGFBQWFDLE9BQU8sQ0FBQztRQUM3Q0gsZUFBZUM7UUFDZixNQUFNRyxTQUFhRixhQUFhQyxPQUFPLENBQUM7UUFFeENMLFNBQVNILDBFQUFtQkEsQ0FBQztZQUFDTTtZQUFZRztRQUFNO1FBQ2hETixTQUFTRixnRUFBU0EsQ0FBQztZQUFDUTtZQUFPSDtRQUFXO0lBQ3hDLEdBQUcsRUFBRTtJQUNULEdBQUc7SUFDQyxNQUFNSSxnQkFBZ0JiLHdEQUFXQSxDQUFDLENBQUNjLFFBQW9CQSxNQUFNQyxJQUFJLENBQUNDLFFBQVE7SUFDMUUsTUFBTUQsT0FBV2Ysd0RBQVdBLENBQUMsQ0FBQ2MsUUFBa0JBLE1BQU1DLElBQUk7SUFFNUQscUJBQ0U7a0JBQ0EsNEVBQUNFOzs4QkFDRyw4REFBQ0E7OEJBQUk7Ozs7Ozs4QkFDTCw4REFBQ2hCLGtEQUFJQTtvQkFBQ2lCLE1BQU07OEJBQUs7Ozs7Ozs4QkFDakIsOERBQUNDOzs7Ozs4QkFDRCw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7OEJBQ0FSLGNBQWNTLEdBQUcsQ0FBQ0MsQ0FBQUEsd0JBQ2pCLDhEQUFDckIseUVBQWdCQTs0QkFBbUJzQixNQUFNRDs0QkFBU1IsTUFBTUEsS0FBS0EsSUFBSSxDQUFDVSxHQUFHOzRCQUFFaEIsYUFBYUY7MkJBQTlEZ0IsUUFBUUUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUMsQ0FBQztHQWhDdUJwQjs7UUFDSE4sb0RBQVdBO1FBWU5DLG9EQUFXQTtRQUNoQkEsb0RBQVdBOzs7S0FkUksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3VzZXJfaWRdL3Byb2R1Y3RPd25lci9pbmRleC50c3g/OWM4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9zdG9yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGlzdFByb2R1Y3QgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudC9PdGhlci9MaXN0UHJvZHVjdFwiO1xyXG5pbXBvcnQgTGlzdFByb2R1Y3RPd25lciBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50L090aGVyL0xpc3RQcm9kdWN0T3duZXJcIjtcclxuaW1wb3J0IHsgZmV0Y2hQcm9kdWN0c09mVXNlciwgZmV0Y2hVc2VyIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL1VzZXIvdXNlclRodW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0T3duZXJQYWdlKCkge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcclxuXHJcbiAgICBjb25zdCBbYWNjZXNzdG9rZW4sc2V0YWNjZXNzdG9rZW5dPXVzZVN0YXRlKHt9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7O1xyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbjphbnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc3Rva2VuXCIpO1xyXG4gICAgICBzZXRhY2Nlc3N0b2tlbihhY2Nlc3NUb2tlbilcclxuICAgICAgY29uc3QgdXNlcmlkOmFueSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRfdXNlclwiKTtcclxuXHJcbiAgICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHNPZlVzZXIoe2FjY2Vzc1Rva2VuLHVzZXJpZH0pKTtcclxuICAgICAgZGlzcGF0Y2goZmV0Y2hVc2VyKHt1c2VyaWQsYWNjZXNzVG9rZW59KSk7XHJcbiAgICB9LCBbXSk7XHJcbi8vIFxyXG4gICAgY29uc3QgcHJvZHVjdHNPd25lciA9IHVzZVNlbGVjdG9yKChzdGF0ZTpSb290U3RhdGUpID0+IHN0YXRlLnVzZXIucHJvZHVjdHMpO1xyXG4gICAgY29uc3QgdXNlcjphbnkgPSB1c2VTZWxlY3Rvcigoc3RhdGU6Um9vdFN0YXRlKT0+c3RhdGUudXNlcik7XHJcbiAgICBcclxuICByZXR1cm4gKCAgICAgXHJcbiAgICA8PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlByb2R1Y3QgT3duZXIgcGFnZTwvZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5Ib21lPC9MaW5rPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPGgxPkxpc3QgUHJvZHVjdHMgT3duZXI6PC9oMT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAge3Byb2R1Y3RzT3duZXIubWFwKHByb2R1Y3QgPT4gKFxyXG4gICAgICAgICAgPExpc3RQcm9kdWN0T3duZXIga2V5PXtwcm9kdWN0Ll9pZH0gZGF0YT17cHJvZHVjdH0gdXNlcj17dXNlci51c2VyLl9pZH0gYWNjZXNzVG9rZW49e2FjY2Vzc3Rva2VufS8+XHJcbiAgICAgICAgICAvLyAgIDxsaT5UYWc6IHtKU09OLnN0cmluZ2lmeSggcHJvZHVjdC50YWcgLCBudWxsLCAyKX08L2xpPiAqL31cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJMaW5rIiwiTGlzdFByb2R1Y3RPd25lciIsImZldGNoUHJvZHVjdHNPZlVzZXIiLCJmZXRjaFVzZXIiLCJQcm9kdWN0T3duZXJQYWdlIiwiZGlzcGF0Y2giLCJhY2Nlc3N0b2tlbiIsInNldGFjY2Vzc3Rva2VuIiwiYWNjZXNzVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlcmlkIiwicHJvZHVjdHNPd25lciIsInN0YXRlIiwidXNlciIsInByb2R1Y3RzIiwiZGl2IiwiaHJlZiIsImhyIiwiaDEiLCJ1bCIsIm1hcCIsInByb2R1Y3QiLCJkYXRhIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[user_id]/productOwner/index.tsx\n"));

/***/ })

});