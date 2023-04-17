"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/Products/productService.ts":
/*!******************************************!*\
  !*** ./store/Products/productService.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllProduct\": function() { return /* binding */ getAllProduct; },\n/* harmony export */   \"getOneProduct\": function() { return /* binding */ getOneProduct; },\n/* harmony export */   \"updateStatusProduct\": function() { return /* binding */ updateStatusProduct; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n// get all product\nconst getAllProduct = async ()=>{\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"http://localhost:5000/product/getAllProducts\");\n    return res.data;\n};\n// get one product\nconst getOneProduct = async (idProduct)=>{\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"http://localhost:5000/product/getOneProduct/\".concat(idProduct));\n    return res.data;\n};\n// update status product \nconst updateStatusProduct = async (idProduct, accessToken, status)=>{\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"http://localhost:5000/product/updateProduct/\".concat(idProduct), {\n        \"accessToken\": accessToken,\n        \"idProduct\": idProduct,\n        \"status\": status\n    }, {\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    return res;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9Qcm9kdWN0cy9wcm9kdWN0U2VydmljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlCO0FBRXpCLGtCQUFrQjtBQUNYLE1BQU1DLGdCQUFnQixVQUFVO0lBQ25DLE1BQU1DLE1BQU0sTUFBTUYsaURBQVMsQ0FBQztJQUM1QixPQUFPRSxJQUFJRSxJQUFJO0FBQ2pCLEVBQUM7QUFDSCxrQkFBa0I7QUFDWCxNQUFNQyxnQkFBZ0IsT0FBT0MsWUFBbUI7SUFDbkQsTUFBTUosTUFBTSxNQUFNRixpREFBUyxDQUFDLCtDQUF5RCxPQUFWTTtJQUMzRSxPQUFPSixJQUFJRSxJQUFJO0FBQ2pCLEVBQUM7QUFDSCx5QkFBeUI7QUFDbEIsTUFBTUcsc0JBQXFCLE9BQU9ELFdBQWlCRSxhQUFtQkMsU0FBbUI7SUFDOUYsTUFBTVAsTUFBTSxNQUFNRixpREFBUyxDQUFDLCtDQUF5RCxPQUFWTSxZQUMzRTtRQUNFLGVBQWNFO1FBQ2QsYUFBWUY7UUFDWixVQUFTRztJQUNYLEdBQ0E7UUFDRUUsU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtJQUNGO0lBQ0EsT0FBT1Q7QUFDVCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL1Byb2R1Y3RzL3Byb2R1Y3RTZXJ2aWNlLnRzPzM3MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuLy8gZ2V0IGFsbCBwcm9kdWN0XHJcbmV4cG9ydCBjb25zdCBnZXRBbGxQcm9kdWN0ID0gYXN5bmMgKCk9PntcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9wcm9kdWN0L2dldEFsbFByb2R1Y3RzXCIpO1xyXG4gICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gIH1cclxuLy8gZ2V0IG9uZSBwcm9kdWN0XHJcbmV4cG9ydCBjb25zdCBnZXRPbmVQcm9kdWN0ID0gYXN5bmMgKGlkUHJvZHVjdDpzdHJpbmcpPT57XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9wcm9kdWN0L2dldE9uZVByb2R1Y3QvJHtpZFByb2R1Y3R9YCk7XHJcbiAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgfVxyXG4vLyB1cGRhdGUgc3RhdHVzIHByb2R1Y3QgXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTdGF0dXNQcm9kdWN0ID1hc3luYyAoaWRQcm9kdWN0OnN0cmluZyxhY2Nlc3NUb2tlbjpzdHJpbmcsc3RhdHVzOmJvb2xlYW4pID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9wcm9kdWN0L3VwZGF0ZVByb2R1Y3QvJHtpZFByb2R1Y3R9YCxcclxuICB7XHJcbiAgICBcImFjY2Vzc1Rva2VuXCI6YWNjZXNzVG9rZW4sXHJcbiAgICBcImlkUHJvZHVjdFwiOmlkUHJvZHVjdCxcclxuICAgIFwic3RhdHVzXCI6c3RhdHVzXHJcbiAgfSxcclxuICB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICB9KVxyXG4gIHJldHVybiByZXM7XHJcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJnZXRBbGxQcm9kdWN0IiwicmVzIiwiZ2V0IiwiZGF0YSIsImdldE9uZVByb2R1Y3QiLCJpZFByb2R1Y3QiLCJ1cGRhdGVTdGF0dXNQcm9kdWN0IiwiYWNjZXNzVG9rZW4iLCJzdGF0dXMiLCJwdXQiLCJoZWFkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/Products/productService.ts\n"));

/***/ })

});