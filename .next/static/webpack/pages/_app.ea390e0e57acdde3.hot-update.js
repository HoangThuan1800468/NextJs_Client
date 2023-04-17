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

/***/ "./store/Products/productSlice.ts":
/*!****************************************!*\
  !*** ./store/Products/productSlice.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProduct\": function() { return /* binding */ addProduct; },\n/* harmony export */   \"productSlice\": function() { return /* binding */ productSlice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _productThunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productThunk */ \"./store/Products/productThunk.ts\");\n\n\nconst initialState = {\n    products: [],\n    loading: false,\n    product: {}\n};\nconst productSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"products\",\n    initialState,\n    reducers: {\n        addProduct: (state, action)=>{\n            state.products.push(action.payload);\n        },\n        updateProduct: (state, action)=>{\n            const newProduct = action.payload;\n            const productIndex = state.products.findIndex((product)=>product.id === newProduct.id);\n            if (productIndex >= 0) {\n                state.products[productIndex] = newProduct;\n            }\n        }\n    },\n    extraReducers: (builder)=>{\n        // get all product\n        builder.addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchProduct.pending, (state)=>{\n            state.loading = true;\n        }).addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchProduct.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.products = payload;\n        });\n        // get one product\n        builder.addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchOneProduct.pending, (state)=>{\n            state.loading = true;\n        }).addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchOneProduct.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.product = payload;\n        });\n        // update status product\n        builder.addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchUpdateStatusProduct.pending, (state)=>{\n            state.loading = true;\n        }).addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchUpdateStatusProduct.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.product = payload;\n        });\n    }\n});\n// Action creators are generated for each case reducer function\nconst { reducer , actions  } = productSlice;\nconst { addProduct  } = actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9Qcm9kdWN0cy9wcm9kdWN0U2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QztBQUMyQztBQVN6RixNQUFNSSxlQUFlO0lBQ25CQyxVQUFTLEVBQUU7SUFDWEMsU0FBUSxLQUFLO0lBQ2JDLFNBQVEsQ0FBQztBQUNYO0FBR08sTUFBTUMsZUFBZVIsNkRBQVdBLENBQUM7SUFDdENTLE1BQU07SUFDTkw7SUFDQU0sVUFBVTtRQUNSQyxZQUFZLENBQUNDLE9BQU9DLFNBQVc7WUFDN0JELE1BQU1QLFFBQVEsQ0FBQ1MsSUFBSSxDQUFDRCxPQUFPRSxPQUFPO1FBQ3BDO1FBQ0FDLGVBQWUsQ0FBQ0osT0FBT0MsU0FBVztZQUNoQyxNQUFNSSxhQUFhSixPQUFPRSxPQUFPO1lBQ2pDLE1BQU1HLGVBQWVOLE1BQU1QLFFBQVEsQ0FBQ2MsU0FBUyxDQUFDWixDQUFBQSxVQUFVQSxRQUFRYSxFQUFFLEtBQUtILFdBQVdHLEVBQUU7WUFDcEYsSUFBR0YsZ0JBQWdCLEdBQUU7Z0JBQ25CTixNQUFNUCxRQUFRLENBQUNhLGFBQWEsR0FBR0Q7WUFDakMsQ0FBQztRQUNIO0lBQ0Y7SUFDQUksZUFBZSxDQUFDQyxVQUFXO1FBQ3pCLGtCQUFrQjtRQUNsQkEsUUFDR0MsT0FBTyxDQUFDckIsK0RBQW9CLEVBQUMsQ0FBQ1UsUUFBUTtZQUNyQ0EsTUFBTU4sT0FBTyxHQUFDLElBQUk7UUFDcEIsR0FDQ2lCLE9BQU8sQ0FBQ3JCLGlFQUFzQixFQUFDLENBQUNVLGVBQW9CO2dCQUFkLEVBQUNHLFFBQU8sRUFBQztZQUM5Q0gsTUFBTU4sT0FBTyxHQUFHLEtBQUs7WUFDckJNLE1BQU1QLFFBQVEsR0FBR1U7UUFDbkI7UUFDRixrQkFBa0I7UUFDbEJPLFFBQ0dDLE9BQU8sQ0FBQ3RCLGtFQUF1QixFQUFDLENBQUNXLFFBQVE7WUFDeENBLE1BQU1OLE9BQU8sR0FBQyxJQUFJO1FBQ3BCLEdBQ0NpQixPQUFPLENBQUN0QixvRUFBeUIsRUFBQyxDQUFDVyxlQUFvQjtnQkFBZCxFQUFDRyxRQUFPLEVBQUM7WUFDakRILE1BQU1OLE9BQU8sR0FBRyxLQUFLO1lBQ3JCTSxNQUFNTCxPQUFPLEdBQUdRO1FBQ2xCO1FBQ0Ysd0JBQXdCO1FBQ3hCTyxRQUNHQyxPQUFPLENBQUNwQiwyRUFBZ0MsRUFBQyxDQUFDUyxRQUFRO1lBQ2pEQSxNQUFNTixPQUFPLEdBQUMsSUFBSTtRQUNwQixHQUNDaUIsT0FBTyxDQUFDcEIsNkVBQWtDLEVBQUMsQ0FBQ1MsZUFBb0I7Z0JBQWQsRUFBQ0csUUFBTyxFQUFDO1lBQzFESCxNQUFNTixPQUFPLEdBQUcsS0FBSztZQUNyQk0sTUFBTUwsT0FBTyxHQUFHUTtRQUNsQjtJQUNKO0FBQ0YsR0FBRTtBQUVGLCtEQUErRDtBQUMvRCxNQUFNLEVBQUNXLFFBQU8sRUFBQ0MsUUFBTyxFQUFDLEdBQUduQjtBQUNuQixNQUFNLEVBQUNHLFdBQVUsRUFBQyxHQUFHZ0IsUUFBUTtBQUNwQywrREFBZUQsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9Qcm9kdWN0cy9wcm9kdWN0U2xpY2UudHM/Y2Q3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IGZldGNoT25lUHJvZHVjdCwgZmV0Y2hQcm9kdWN0LCBmZXRjaFVwZGF0ZVN0YXR1c1Byb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3RUaHVuayc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RTdGF0ZSB7XHJcbiAgcHJvZHVjdHM6QXJyYXk8YW55PixcclxuICBsb2FkaW5nOmJvb2xlYW4sXHJcbiAgcHJvZHVjdDp7fVxyXG59XHJcblxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHByb2R1Y3RzOltdLFxyXG4gIGxvYWRpbmc6ZmFsc2UsXHJcbiAgcHJvZHVjdDp7fVxyXG59YXMgUHJvZHVjdFN0YXRlO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ3Byb2R1Y3RzJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGFkZFByb2R1Y3Q6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnByb2R1Y3RzLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVByb2R1Y3Q6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgY29uc3QgcHJvZHVjdEluZGV4ID0gc3RhdGUucHJvZHVjdHMuZmluZEluZGV4KHByb2R1Y3QgPT5wcm9kdWN0LmlkID09PSBuZXdQcm9kdWN0LmlkKTtcclxuICAgICAgaWYocHJvZHVjdEluZGV4ID49IDApe1xyXG4gICAgICAgIHN0YXRlLnByb2R1Y3RzW3Byb2R1Y3RJbmRleF0gPSBuZXdQcm9kdWN0O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+e1xyXG4gICAgLy8gZ2V0IGFsbCBwcm9kdWN0XHJcbiAgICBidWlsZGVyXHJcbiAgICAgIC5hZGRDYXNlKGZldGNoUHJvZHVjdC5wZW5kaW5nLChzdGF0ZSk9PntcclxuICAgICAgICBzdGF0ZS5sb2FkaW5nPXRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRDYXNlKGZldGNoUHJvZHVjdC5mdWxmaWxsZWQsKHN0YXRlLHtwYXlsb2FkfSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5wcm9kdWN0cyA9IHBheWxvYWQ7XHJcbiAgICAgIH0pXHJcbiAgICAvLyBnZXQgb25lIHByb2R1Y3RcclxuICAgIGJ1aWxkZXJcclxuICAgICAgLmFkZENhc2UoZmV0Y2hPbmVQcm9kdWN0LnBlbmRpbmcsKHN0YXRlKT0+e1xyXG4gICAgICAgIHN0YXRlLmxvYWRpbmc9dHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgLmFkZENhc2UoZmV0Y2hPbmVQcm9kdWN0LmZ1bGZpbGxlZCwoc3RhdGUse3BheWxvYWR9KSA9PiB7XHJcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLnByb2R1Y3QgPSBwYXlsb2FkO1xyXG4gICAgICB9KTtcclxuICAgIC8vIHVwZGF0ZSBzdGF0dXMgcHJvZHVjdFxyXG4gICAgYnVpbGRlclxyXG4gICAgICAuYWRkQ2FzZShmZXRjaFVwZGF0ZVN0YXR1c1Byb2R1Y3QucGVuZGluZywoc3RhdGUpPT57XHJcbiAgICAgICAgc3RhdGUubG9hZGluZz10cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICAuYWRkQ2FzZShmZXRjaFVwZGF0ZVN0YXR1c1Byb2R1Y3QuZnVsZmlsbGVkLChzdGF0ZSx7cGF5bG9hZH0pID0+IHtcclxuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUucHJvZHVjdCA9IHBheWxvYWQ7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG59KVxyXG5cclxuLy8gQWN0aW9uIGNyZWF0b3JzIGFyZSBnZW5lcmF0ZWQgZm9yIGVhY2ggY2FzZSByZWR1Y2VyIGZ1bmN0aW9uXHJcbmNvbnN0IHtyZWR1Y2VyLGFjdGlvbnN9ID0gcHJvZHVjdFNsaWNlO1xyXG5leHBvcnQgY29uc3Qge2FkZFByb2R1Y3R9ID0gYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiZmV0Y2hPbmVQcm9kdWN0IiwiZmV0Y2hQcm9kdWN0IiwiZmV0Y2hVcGRhdGVTdGF0dXNQcm9kdWN0IiwiaW5pdGlhbFN0YXRlIiwicHJvZHVjdHMiLCJsb2FkaW5nIiwicHJvZHVjdCIsInByb2R1Y3RTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZFByb2R1Y3QiLCJzdGF0ZSIsImFjdGlvbiIsInB1c2giLCJwYXlsb2FkIiwidXBkYXRlUHJvZHVjdCIsIm5ld1Byb2R1Y3QiLCJwcm9kdWN0SW5kZXgiLCJmaW5kSW5kZXgiLCJpZCIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJyZWR1Y2VyIiwiYWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/Products/productSlice.ts\n"));

/***/ })

});