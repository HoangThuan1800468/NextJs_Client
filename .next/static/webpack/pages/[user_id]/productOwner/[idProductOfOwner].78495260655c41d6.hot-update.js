"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[user_id]/productOwner/[idProductOfOwner]",{

/***/ "./pages/[user_id]/productOwner/[idProductOfOwner].tsx":
/*!*************************************************************!*\
  !*** ./pages/[user_id]/productOwner/[idProductOfOwner].tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_Products_productThunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/Products/productThunk */ \"./store/Products/productThunk.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction InforProductOwner(props) {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // \n    const { idProductOfOwner  } = router.query;\n    const IDProduct = idProductOfOwner;\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        dispatch((0,_store_Products_productThunk__WEBPACK_IMPORTED_MODULE_4__.fetchOneProduct)(IDProduct));\n    }, [\n        IDProduct\n    ]);\n    const dataProduct = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.product.product);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Infor product of owner\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\productOwner\\\\[idProductOfOwner].tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\productOwner\\\\[idProductOfOwner].tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\productOwner\\\\[idProductOfOwner].tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Product Name: \",\n                            dataProduct.productname\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\productOwner\\\\[idProductOfOwner].tsx\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Product ID: \",\n                            dataProduct._id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\productOwner\\\\[idProductOfOwner].tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Product Image: \",\n                            dataProduct.image\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\productOwner\\\\[idProductOfOwner].tsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            \"Product price: \",\n                            dataProduct.price,\n                            \"$\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\productOwner\\\\[idProductOfOwner].tsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            \"Product sale: \",\n                            dataProduct.saleprice,\n                            \"$\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\productOwner\\\\[idProductOfOwner].tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, this),\n                    dataProduct.status ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Saling\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\productOwner\\\\[idProductOfOwner].tsx\",\n                        lineNumber: 31,\n                        columnNumber: 33\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Stop sale\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\productOwner\\\\[idProductOfOwner].tsx\",\n                        lineNumber: 31,\n                        columnNumber: 57\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\productOwner\\\\[idProductOfOwner].tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(InforProductOwner, \"qCWNM6qAaJ5hLOBt2PsA60uLZoc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = InforProductOwner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InforProductOwner);\nvar _c;\n$RefreshReg$(_c, \"InforProductOwner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcl9pZF0vcHJvZHVjdE93bmVyL1tpZFByb2R1Y3RPZk93bmVyXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUMwQjtBQUVmO0FBQytCO0FBQ3JDO0FBRWxDLFNBQVNNLGtCQUFtQkMsS0FBUyxFQUFDOztJQUNsQyxNQUFNQyxXQUFXUCx3REFBV0E7SUFDNUIsTUFBTVEsU0FBU04sc0RBQVNBO0lBRXhCLEdBQUc7SUFDSCxNQUFNLEVBQUVPLGlCQUFnQixFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDekMsTUFBTUMsWUFBZ0JGO0lBRXRCTCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pHLFNBQVNKLDZFQUFlQSxDQUFDUTtJQUMzQixHQUFHO1FBQUNBO0tBQVU7SUFDaEIsTUFBTUMsY0FBa0JYLHdEQUFXQSxDQUFDLENBQUNZLFFBQWtCQSxNQUFNQyxPQUFPLENBQUNBLE9BQU87SUFDNUUscUJBQ0k7OzBCQUNBLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDaEIsa0RBQUlBO2dCQUFDaUIsTUFBTTswQkFBSzs7Ozs7OzBCQUNqQiw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDQzs7a0NBQ0csOERBQUNIOzs0QkFBRzs0QkFBZUgsWUFBWU8sV0FBVzs7Ozs7OztrQ0FDMUMsOERBQUNDOzs0QkFBRzs0QkFBYVIsWUFBWVMsR0FBRzs7Ozs7OztrQ0FDaEMsOERBQUNEOzs0QkFBRzs0QkFBZ0JSLFlBQVlVLEtBQUs7Ozs7Ozs7a0NBQ3JDLDhEQUFDQzs7NEJBQUc7NEJBQWdCWCxZQUFZWSxLQUFLOzRCQUFDOzs7Ozs7O2tDQUN0Qyw4REFBQ0Q7OzRCQUFHOzRCQUFlWCxZQUFZYSxTQUFTOzRCQUFDOzs7Ozs7O29CQUN4Q2IsWUFBWWMsTUFBTSxpQkFBQyw4REFBQ0M7a0NBQU87Ozs7OzZDQUFnQiw4REFBQ0E7a0NBQU87Ozs7OzRCQUFrQjs7Ozs7Ozs7O0FBSWxGO0dBM0JTdEI7O1FBQ1lMLG9EQUFXQTtRQUNiRSxrREFBU0E7UUFTQUQsb0RBQVdBOzs7S0FYOUJJO0FBNEJULCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3VzZXJfaWRdL3Byb2R1Y3RPd25lci9baWRQcm9kdWN0T2ZPd25lcl0udHN4P2Q0ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9zdG9yZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZmV0Y2hPbmVQcm9kdWN0IH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL1Byb2R1Y3RzL3Byb2R1Y3RUaHVua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEluZm9yUHJvZHVjdE93bmVyIChwcm9wczphbnkpe1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgXHJcbiAgICAvLyBcclxuICAgIGNvbnN0IHsgaWRQcm9kdWN0T2ZPd25lciB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgSURQcm9kdWN0OmFueSA9IGlkUHJvZHVjdE9mT3duZXI7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7O1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoT25lUHJvZHVjdChJRFByb2R1Y3QpKVxyXG4gICAgICB9LCBbSURQcm9kdWN0XSk7XHJcbiAgICBjb25zdCBkYXRhUHJvZHVjdDphbnkgPSB1c2VTZWxlY3Rvcigoc3RhdGU6Um9vdFN0YXRlKT0+c3RhdGUucHJvZHVjdC5wcm9kdWN0KTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxoMT5JbmZvciBwcm9kdWN0IG9mIG93bmVyPC9oMT5cclxuICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+SG9tZTwvTGluaz5cclxuICAgICAgICA8aHIvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5Qcm9kdWN0IE5hbWU6IHtkYXRhUHJvZHVjdC5wcm9kdWN0bmFtZX08L2gxPlxyXG4gICAgICAgICAgICA8aDI+UHJvZHVjdCBJRDoge2RhdGFQcm9kdWN0Ll9pZH08L2gyPlxyXG4gICAgICAgICAgICA8aDI+UHJvZHVjdCBJbWFnZToge2RhdGFQcm9kdWN0LmltYWdlfTwvaDI+XHJcbiAgICAgICAgICAgIDxoMz5Qcm9kdWN0IHByaWNlOiB7ZGF0YVByb2R1Y3QucHJpY2V9JDwvaDM+XHJcbiAgICAgICAgICAgIDxoMz5Qcm9kdWN0IHNhbGU6IHtkYXRhUHJvZHVjdC5zYWxlcHJpY2V9JDwvaDM+XHJcbiAgICAgICAgICAgIHtkYXRhUHJvZHVjdC5zdGF0dXM/PGJ1dHRvbj5TYWxpbmc8L2J1dHRvbj46PGJ1dHRvbj5TdG9wIHNhbGU8L2J1dHRvbj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZm9yUHJvZHVjdE93bmVyOyJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZVJvdXRlciIsImZldGNoT25lUHJvZHVjdCIsInVzZUVmZmVjdCIsIkluZm9yUHJvZHVjdE93bmVyIiwicHJvcHMiLCJkaXNwYXRjaCIsInJvdXRlciIsImlkUHJvZHVjdE9mT3duZXIiLCJxdWVyeSIsIklEUHJvZHVjdCIsImRhdGFQcm9kdWN0Iiwic3RhdGUiLCJwcm9kdWN0IiwiaDEiLCJocmVmIiwiaHIiLCJkaXYiLCJwcm9kdWN0bmFtZSIsImgyIiwiX2lkIiwiaW1hZ2UiLCJoMyIsInByaWNlIiwic2FsZXByaWNlIiwic3RhdHVzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[user_id]/productOwner/[idProductOfOwner].tsx\n"));

/***/ })

});