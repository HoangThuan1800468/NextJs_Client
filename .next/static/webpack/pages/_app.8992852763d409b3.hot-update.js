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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProduct\": function() { return /* binding */ addProduct; },\n/* harmony export */   \"productSlice\": function() { return /* binding */ productSlice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _productThunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productThunk */ \"./store/Products/productThunk.ts\");\n\n\nconst initialState = {\n    products: [],\n    loading: false,\n    product: {},\n    order: {}\n};\nconst productSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"products\",\n    initialState,\n    reducers: {\n        addProduct: (state, action)=>{\n            state.products.push(action.payload);\n        },\n        updateProduct: (state, action)=>{\n            const newProduct = action.payload;\n            const productIndex = state.products.findIndex((product)=>product.id === newProduct.id);\n            if (productIndex >= 0) {\n                state.products[productIndex] = newProduct;\n            }\n        }\n    },\n    extraReducers: (builder)=>{\n        // get all product\n        builder.addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchProduct.pending, (state)=>{\n            state.loading = true;\n        }).addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchProduct.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.products = payload;\n        });\n        // search product\n        builder.addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchSearchProduct.pending, (state)=>{\n            state.loading = true;\n        }).addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchSearchProduct.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.products = payload;\n        });\n        // search tag product\n        builder.addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchSearchTagProduct.pending, (state)=>{\n            state.loading = true;\n        }).addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchSearchTagProduct.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.products = payload;\n        });\n        // get one product\n        builder.addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchOneProduct.pending, (state)=>{\n            state.loading = true;\n        }).addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchOneProduct.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.product = payload;\n        });\n        // update status product\n        builder.addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchUpdateStatusProduct.pending, (state)=>{\n            state.loading = true;\n        }).addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchUpdateStatusProduct.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.product = payload;\n        });\n        // update infor product\n        builder.addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchUpdateInforProduct.pending, (state)=>{\n            state.loading = true;\n        }).addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchUpdateInforProduct.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.product = payload;\n        });\n        // Create new product\n        builder.addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchCreateNewProduct.pending, (state)=>{\n            state.loading = true;\n        }).addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchCreateNewProduct.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.product = payload;\n        });\n        // Create new order\n        builder.addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchCreateOrder.pending, (state)=>{\n            state.loading = true;\n        }).addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchCreateOrder.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.order = payload.data;\n        });\n        // Handle order\n        builder.addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchHandleOrder.pending, (state)=>{\n            state.loading = true;\n        }).addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchHandleOrder.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.order = payload.data;\n        });\n        // Handle order\n        builder.addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchDeleteOrder.pending, (state)=>{\n            state.loading = true;\n        }).addCase(_productThunk__WEBPACK_IMPORTED_MODULE_0__.fetchDeleteOrder.fulfilled, (state)=>{\n            state.loading = false;\n            state.order = {};\n        });\n    }\n});\n// Action creators are generated for each case reducer function\nconst { reducer , actions  } = productSlice;\nconst { addProduct  } = actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO1lBQ3JCTyxNQUFNTCxLQUFLLEdBQUcsQ0FBQztRQUNqQjtJQUNKO0FBQ0YsR0FBRTtBQUVGLCtEQUErRDtBQUMvRCxNQUFNLEVBQUNvQixRQUFPLEVBQUNDLFFBQU8sRUFBQyxHQUFHcEI7QUFDbkIsTUFBTSxFQUFDRyxXQUFVLEVBQUMsR0FBR2lCLFFBQVE7QUFDcEMsK0RBQWVELE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvUHJvZHVjdHMvcHJvZHVjdFNsaWNlLnRzP2NkNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBmZXRjaENyZWF0ZU5ld1Byb2R1Y3QsIGZldGNoQ3JlYXRlT3JkZXIsIGZldGNoRGVsZXRlT3JkZXIsIGZldGNoSGFuZGxlT3JkZXIsIGZldGNoT25lUHJvZHVjdCwgZmV0Y2hQcm9kdWN0LCBmZXRjaFNlYXJjaFByb2R1Y3QsIGZldGNoU2VhcmNoVGFnUHJvZHVjdCwgZmV0Y2hVcGRhdGVJbmZvclByb2R1Y3QsIGZldGNoVXBkYXRlU3RhdHVzUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdFRodW5rJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdFN0YXRlIHtcclxuICBwcm9kdWN0czpBcnJheTxhbnk+LFxyXG4gIGxvYWRpbmc6Ym9vbGVhbixcclxuICBwcm9kdWN0Ont9LFxyXG4gIG9yZGVyOnt9XHJcbn1cclxuXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgcHJvZHVjdHM6W10sXHJcbiAgbG9hZGluZzpmYWxzZSxcclxuICBwcm9kdWN0Ont9LFxyXG4gIG9yZGVyOnt9XHJcbn1hcyBQcm9kdWN0U3RhdGU7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAncHJvZHVjdHMnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgYWRkUHJvZHVjdDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUucHJvZHVjdHMucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlUHJvZHVjdDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgbmV3UHJvZHVjdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICBjb25zdCBwcm9kdWN0SW5kZXggPSBzdGF0ZS5wcm9kdWN0cy5maW5kSW5kZXgocHJvZHVjdCA9PnByb2R1Y3QuaWQgPT09IG5ld1Byb2R1Y3QuaWQpO1xyXG4gICAgICBpZihwcm9kdWN0SW5kZXggPj0gMCl7XHJcbiAgICAgICAgc3RhdGUucHJvZHVjdHNbcHJvZHVjdEluZGV4XSA9IG5ld1Byb2R1Y3Q7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT57XHJcbiAgICAvLyBnZXQgYWxsIHByb2R1Y3RcclxuICAgIGJ1aWxkZXJcclxuICAgICAgLmFkZENhc2UoZmV0Y2hQcm9kdWN0LnBlbmRpbmcsKHN0YXRlKT0+e1xyXG4gICAgICAgIHN0YXRlLmxvYWRpbmc9dHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgLmFkZENhc2UoZmV0Y2hQcm9kdWN0LmZ1bGZpbGxlZCwoc3RhdGUse3BheWxvYWR9KSA9PiB7XHJcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLnByb2R1Y3RzID0gcGF5bG9hZDtcclxuICAgICAgfSk7XHJcbiAgICAvLyBzZWFyY2ggcHJvZHVjdFxyXG4gICAgYnVpbGRlclxyXG4gICAgICAuYWRkQ2FzZShmZXRjaFNlYXJjaFByb2R1Y3QucGVuZGluZywoc3RhdGUpPT57XHJcbiAgICAgICAgc3RhdGUubG9hZGluZz10cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICAuYWRkQ2FzZShmZXRjaFNlYXJjaFByb2R1Y3QuZnVsZmlsbGVkLChzdGF0ZSx7cGF5bG9hZH0pID0+IHtcclxuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUucHJvZHVjdHMgPSBwYXlsb2FkO1xyXG4gICAgICB9KTtcclxuICAgIC8vIHNlYXJjaCB0YWcgcHJvZHVjdFxyXG4gICAgYnVpbGRlclxyXG4gICAgICAuYWRkQ2FzZShmZXRjaFNlYXJjaFRhZ1Byb2R1Y3QucGVuZGluZywoc3RhdGUpPT57XHJcbiAgICAgICAgc3RhdGUubG9hZGluZz10cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICAuYWRkQ2FzZShmZXRjaFNlYXJjaFRhZ1Byb2R1Y3QuZnVsZmlsbGVkLChzdGF0ZSx7cGF5bG9hZH0pID0+IHtcclxuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUucHJvZHVjdHMgPSBwYXlsb2FkO1xyXG4gICAgICB9KTtcclxuICAgIC8vIGdldCBvbmUgcHJvZHVjdFxyXG4gICAgYnVpbGRlclxyXG4gICAgICAuYWRkQ2FzZShmZXRjaE9uZVByb2R1Y3QucGVuZGluZywoc3RhdGUpPT57XHJcbiAgICAgICAgc3RhdGUubG9hZGluZz10cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICAuYWRkQ2FzZShmZXRjaE9uZVByb2R1Y3QuZnVsZmlsbGVkLChzdGF0ZSx7cGF5bG9hZH0pID0+IHtcclxuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUucHJvZHVjdCA9IHBheWxvYWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gdXBkYXRlIHN0YXR1cyBwcm9kdWN0XHJcbiAgICBidWlsZGVyXHJcbiAgICAgIC5hZGRDYXNlKGZldGNoVXBkYXRlU3RhdHVzUHJvZHVjdC5wZW5kaW5nLChzdGF0ZSk9PntcclxuICAgICAgICBzdGF0ZS5sb2FkaW5nPXRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRDYXNlKGZldGNoVXBkYXRlU3RhdHVzUHJvZHVjdC5mdWxmaWxsZWQsKHN0YXRlLHtwYXlsb2FkfSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5wcm9kdWN0ID0gcGF5bG9hZDtcclxuICAgICAgfSk7XHJcbiAgICAvLyB1cGRhdGUgaW5mb3IgcHJvZHVjdFxyXG4gICAgYnVpbGRlclxyXG4gICAgICAuYWRkQ2FzZShmZXRjaFVwZGF0ZUluZm9yUHJvZHVjdC5wZW5kaW5nLChzdGF0ZSk9PntcclxuICAgICAgICBzdGF0ZS5sb2FkaW5nPXRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRDYXNlKGZldGNoVXBkYXRlSW5mb3JQcm9kdWN0LmZ1bGZpbGxlZCwoc3RhdGUse3BheWxvYWR9KSA9PiB7XHJcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLnByb2R1Y3QgPSBwYXlsb2FkO1xyXG4gICAgICB9KTtcclxuICAgIC8vIENyZWF0ZSBuZXcgcHJvZHVjdFxyXG4gICAgYnVpbGRlclxyXG4gICAgICAuYWRkQ2FzZShmZXRjaENyZWF0ZU5ld1Byb2R1Y3QucGVuZGluZywoc3RhdGUpPT57XHJcbiAgICAgICAgc3RhdGUubG9hZGluZz10cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICAuYWRkQ2FzZShmZXRjaENyZWF0ZU5ld1Byb2R1Y3QuZnVsZmlsbGVkLChzdGF0ZSx7cGF5bG9hZH0pID0+IHtcclxuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUucHJvZHVjdCA9IHBheWxvYWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gQ3JlYXRlIG5ldyBvcmRlclxyXG4gICAgYnVpbGRlclxyXG4gICAgICAuYWRkQ2FzZShmZXRjaENyZWF0ZU9yZGVyLnBlbmRpbmcsKHN0YXRlKT0+e1xyXG4gICAgICAgIHN0YXRlLmxvYWRpbmc9dHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgLmFkZENhc2UoZmV0Y2hDcmVhdGVPcmRlci5mdWxmaWxsZWQsKHN0YXRlLHtwYXlsb2FkfSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5vcmRlciA9IHBheWxvYWQuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICAvLyBIYW5kbGUgb3JkZXJcclxuICAgIGJ1aWxkZXJcclxuICAgICAgLmFkZENhc2UoZmV0Y2hIYW5kbGVPcmRlci5wZW5kaW5nLChzdGF0ZSk9PntcclxuICAgICAgICBzdGF0ZS5sb2FkaW5nPXRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRDYXNlKGZldGNoSGFuZGxlT3JkZXIuZnVsZmlsbGVkLChzdGF0ZSx7cGF5bG9hZH0pID0+IHtcclxuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUub3JkZXIgPSBwYXlsb2FkLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gSGFuZGxlIG9yZGVyXHJcbiAgICBidWlsZGVyXHJcbiAgICAgIC5hZGRDYXNlKGZldGNoRGVsZXRlT3JkZXIucGVuZGluZywoc3RhdGUpPT57XHJcbiAgICAgICAgc3RhdGUubG9hZGluZz10cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICAuYWRkQ2FzZShmZXRjaERlbGV0ZU9yZGVyLmZ1bGZpbGxlZCwoc3RhdGUpID0+IHtcclxuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUub3JkZXIgPSB7fTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59KVxyXG5cclxuLy8gQWN0aW9uIGNyZWF0b3JzIGFyZSBnZW5lcmF0ZWQgZm9yIGVhY2ggY2FzZSByZWR1Y2VyIGZ1bmN0aW9uXHJcbmNvbnN0IHtyZWR1Y2VyLGFjdGlvbnN9ID0gcHJvZHVjdFNsaWNlO1xyXG5leHBvcnQgY29uc3Qge2FkZFByb2R1Y3R9ID0gYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiZmV0Y2hDcmVhdGVOZXdQcm9kdWN0IiwiZmV0Y2hDcmVhdGVPcmRlciIsImZldGNoRGVsZXRlT3JkZXIiLCJmZXRjaEhhbmRsZU9yZGVyIiwiZmV0Y2hPbmVQcm9kdWN0IiwiZmV0Y2hQcm9kdWN0IiwiZmV0Y2hTZWFyY2hQcm9kdWN0IiwiZmV0Y2hTZWFyY2hUYWdQcm9kdWN0IiwiZmV0Y2hVcGRhdGVJbmZvclByb2R1Y3QiLCJmZXRjaFVwZGF0ZVN0YXR1c1Byb2R1Y3QiLCJpbml0aWFsU3RhdGUiLCJwcm9kdWN0cyIsImxvYWRpbmciLCJwcm9kdWN0Iiwib3JkZXIiLCJwcm9kdWN0U2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRQcm9kdWN0Iiwic3RhdGUiLCJhY3Rpb24iLCJwdXNoIiwicGF5bG9hZCIsInVwZGF0ZVByb2R1Y3QiLCJuZXdQcm9kdWN0IiwicHJvZHVjdEluZGV4IiwiZmluZEluZGV4IiwiaWQiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwiZGF0YSIsInJlZHVjZXIiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/Products/productSlice.ts\n"));

/***/ })

});