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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_Products_productThunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/Products/productThunk */ \"./store/Products/productThunk.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_User_userThunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/User/userThunk */ \"./store/User/userThunk.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ListProductOwner(props) {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const idProduct = props.data._id;\n    const accessToken = props.accessToken;\n    const userid = props.user;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        dispatch((0,_store_User_userThunk__WEBPACK_IMPORTED_MODULE_5__.fetchProductsOfUser)({\n            accessToken,\n            userid\n        }));\n    }, []);\n    function handleChangeStatus() {\n        const status = true;\n        const res = dispatch((0,_store_Products_productThunk__WEBPACK_IMPORTED_MODULE_3__.fetchUpdateStatusProduct)({\n            idProduct,\n            accessToken,\n            status\n        }));\n        console.log(res);\n    // window.alert(\"Cho vui thôi chứ cái này không có làm!!!\")\n    }\n    async function handleSetStateProduct() {\n        await dispatch((0,_store_Products_productThunk__WEBPACK_IMPORTED_MODULE_3__.fetchOneProduct)(idProduct));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleSetStateProduct,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\".concat(userid, \"/productOwner/\").concat(props.data._id),\n                        children: [\n                            \"Product Name: \",\n                            props.data.productname\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        \"Product Price: \",\n                        props.data.price,\n                        \" $\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        \"Product Sale: \",\n                        props.data.saleprice,\n                        \" $\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, this),\n                props.data.status ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Stop selling\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 32\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleChangeStatus,\n                    children: \"Sale now\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 62\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Edit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Delete\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, props.data._id, true, {\n            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\Component\\\\Other\\\\ListProductOwner.tsx\",\n            lineNumber: 29,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(ListProductOwner, \"rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = ListProductOwner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListProductOwner);\nvar _c;\n$RefreshReg$(_c, \"ListProductOwner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnQvT3RoZXIvTGlzdFByb2R1Y3RPd25lci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQzBCO0FBRXVDO0FBQzVEO0FBQytCO0FBRWpFLFNBQVNNLGlCQUFrQkMsS0FBUyxFQUFDOztJQUNqQyxNQUFNQyxXQUFXUCx3REFBV0E7SUFDNUIsTUFBTVEsWUFBZ0JGLE1BQU1HLElBQUksQ0FBQ0MsR0FBRztJQUNwQyxNQUFNQyxjQUFrQkwsTUFBTUssV0FBVztJQUN6QyxNQUFNQyxTQUFhTixNQUFNTyxJQUFJO0lBRTdCVixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RJLFNBQVNILDBFQUFtQkEsQ0FBQztZQUFDTztZQUFZQztRQUFNO0lBQ2xELEdBQUcsRUFBRTtJQUVMLFNBQVNFLHFCQUFvQjtRQUMzQixNQUFNQyxTQUFpQixJQUFJO1FBQzNCLE1BQU1DLE1BQVVULFNBQVNMLHNGQUF3QkEsQ0FBQztZQUFDTTtZQUFVRztZQUFZSTtRQUFNO1FBQy9FRSxRQUFRQyxHQUFHLENBQUNGO0lBQ1osMkRBQTJEO0lBQzdEO0lBQ0EsZUFBZUcsd0JBQXVCO1FBQ3BDLE1BQU1aLFNBQVNOLDZFQUFlQSxDQUFDTztJQUNqQztJQUNBLHFCQUNJO2tCQUNBLDRFQUFDWTs7OEJBQ0csOERBQUNDO29CQUFPQyxTQUFTSDs4QkFDakIsNEVBQUNwQixrREFBSUE7d0JBQUN3QixNQUFNLElBQTJCakIsT0FBdkJNLFFBQU8sa0JBQStCLE9BQWZOLE1BQU1HLElBQUksQ0FBQ0MsR0FBRzs7NEJBQUs7NEJBQ3pDSixNQUFNRyxJQUFJLENBQUNlLFdBQVc7Ozs7Ozs7Ozs7Ozs4QkFHdkMsOERBQUNDOzt3QkFBRzt3QkFBZ0JuQixNQUFNRyxJQUFJLENBQUNpQixLQUFLO3dCQUFDOzs7Ozs7OzhCQUNyQyw4REFBQ0Q7O3dCQUFHO3dCQUFlbkIsTUFBTUcsSUFBSSxDQUFDa0IsU0FBUzt3QkFBQzs7Ozs7OztnQkFDdkNyQixNQUFNRyxJQUFJLENBQUNNLE1BQU0saUJBQUMsOERBQUNNOzhCQUFPOzs7Ozt5Q0FBc0IsOERBQUNBO29CQUFPQyxTQUFTUjs4QkFBb0I7Ozs7O3dCQUFpQjs4QkFDdkcsOERBQUNPOzhCQUFPOzs7Ozs7OEJBQ1IsOERBQUNBOzhCQUFPOzs7Ozs7OEJBQ1IsOERBQUNPOzs7Ozs7V0FYSXRCLE1BQU1HLElBQUksQ0FBQ0MsR0FBRzs7Ozs7O0FBZS9CO0dBcENTTDs7UUFDWUwsb0RBQVdBOzs7S0FEdkJLO0FBcUNULCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50L090aGVyL0xpc3RQcm9kdWN0T3duZXIudHN4Pzc1NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdG9yZVwiO1xyXG5pbXBvcnQgeyBmZXRjaE9uZVByb2R1Y3QsIGZldGNoVXBkYXRlU3RhdHVzUHJvZHVjdCB9IGZyb20gXCIuLi8uLi9zdG9yZS9Qcm9kdWN0cy9wcm9kdWN0VGh1bmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZldGNoUHJvZHVjdHNPZlVzZXIgfSBmcm9tIFwiLi4vLi4vc3RvcmUvVXNlci91c2VyVGh1bmtcIjtcclxuXHJcbmZ1bmN0aW9uIExpc3RQcm9kdWN0T3duZXIgKHByb3BzOmFueSl7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xyXG4gICAgY29uc3QgaWRQcm9kdWN0OmFueSA9IHByb3BzLmRhdGEuX2lkO1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW46YW55ID0gcHJvcHMuYWNjZXNzVG9rZW47XHJcbiAgICBjb25zdCB1c2VyaWQ6YW55ID0gcHJvcHMudXNlcjtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geztcclxuICAgICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0c09mVXNlcih7YWNjZXNzVG9rZW4sdXNlcmlkfSkpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVN0YXR1cygpe1xyXG4gICAgICBjb25zdCBzdGF0dXM6Ym9vbGVhbiA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHJlczphbnkgPSBkaXNwYXRjaChmZXRjaFVwZGF0ZVN0YXR1c1Byb2R1Y3Qoe2lkUHJvZHVjdCxhY2Nlc3NUb2tlbixzdGF0dXN9KSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIC8vIHdpbmRvdy5hbGVydChcIkNobyB2dWkgdGjDtGkgY2jhu6kgY8OhaSBuw6B5IGtow7RuZyBjw7MgbMOgbSEhIVwiKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2V0U3RhdGVQcm9kdWN0KCl7XHJcbiAgICAgIGF3YWl0IGRpc3BhdGNoKGZldGNoT25lUHJvZHVjdChpZFByb2R1Y3QpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPHVsIGtleT17cHJvcHMuZGF0YS5faWR9ID5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZXRTdGF0ZVByb2R1Y3R9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgLyR7dXNlcmlkfS9wcm9kdWN0T3duZXIvJHtwcm9wcy5kYXRhLl9pZH1gfSA+XHJcbiAgICAgICAgICAgICAgUHJvZHVjdCBOYW1lOiB7cHJvcHMuZGF0YS5wcm9kdWN0bmFtZX1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGxpPlByb2R1Y3QgUHJpY2U6IHtwcm9wcy5kYXRhLnByaWNlfSAkPC9saT5cclxuICAgICAgICAgICAgPGxpPlByb2R1Y3QgU2FsZToge3Byb3BzLmRhdGEuc2FsZXByaWNlfSAkPC9saT5cclxuICAgICAgICAgICAge3Byb3BzLmRhdGEuc3RhdHVzPzxidXR0b24+U3RvcCBzZWxsaW5nPC9idXR0b24+OjxidXR0b24gb25DbGljaz17aGFuZGxlQ2hhbmdlU3RhdHVzfT5TYWxlIG5vdzwvYnV0dG9uPn1cclxuICAgICAgICAgICAgPGJ1dHRvbj5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMaXN0UHJvZHVjdE93bmVyOyJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRGlzcGF0Y2giLCJmZXRjaE9uZVByb2R1Y3QiLCJmZXRjaFVwZGF0ZVN0YXR1c1Byb2R1Y3QiLCJ1c2VFZmZlY3QiLCJmZXRjaFByb2R1Y3RzT2ZVc2VyIiwiTGlzdFByb2R1Y3RPd25lciIsInByb3BzIiwiZGlzcGF0Y2giLCJpZFByb2R1Y3QiLCJkYXRhIiwiX2lkIiwiYWNjZXNzVG9rZW4iLCJ1c2VyaWQiLCJ1c2VyIiwiaGFuZGxlQ2hhbmdlU3RhdHVzIiwic3RhdHVzIiwicmVzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVNldFN0YXRlUHJvZHVjdCIsInVsIiwiYnV0dG9uIiwib25DbGljayIsImhyZWYiLCJwcm9kdWN0bmFtZSIsImxpIiwicHJpY2UiLCJzYWxlcHJpY2UiLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Component/Other/ListProductOwner.tsx\n"));

/***/ })

});