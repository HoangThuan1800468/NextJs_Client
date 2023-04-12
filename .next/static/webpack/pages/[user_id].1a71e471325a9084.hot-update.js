"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[user_id]",{

/***/ "./pages/[user_id]/index.tsx":
/*!***********************************!*\
  !*** ./pages/[user_id]/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ \"./node_modules/yup/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _store_userSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/userSlice */ \"./store/userSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst schema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({\n    username: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(),\n    email: yup__WEBPACK_IMPORTED_MODULE_5__.string().required()\n});\nfunction UserPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { user_id  } = router.query;\n    const userid = user_id;\n    const [accesstoken, setaccesstoken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const a = localStorage.getItem(\"accesstoken\");\n        setaccesstoken(a);\n    }, []);\n    const accessToken = accesstoken;\n    // console.log({\n    //   \"userid\":user_id,\n    //   \"accesToken\":accessToken\n    // })\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user);\n    // console.log(user)\n    // \n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useFormik)({\n        initialValues: {\n            username: \"\",\n            email: \"\"\n        },\n        // Pass the Yup schema to validate the form\n        validationSchema: schema,\n        // Handle form submission\n        onSubmit: async (param)=>{\n            let { username , email  } = param;\n            console.log({\n                username,\n                email\n            });\n        }\n    });\n    // Destructure the formik object\n    const { errors , touched , values , handleChange , handleSubmit  } = formik;\n    function handleLogout() {\n        localStorage.clear();\n        console.log(\"logout roi ne\");\n        router.push(\"/\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"User page\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLogout,\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"User infor - \",\n                        user.loading && \"loading...\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>{\n                        const res = dispatch((0,_store_userSlice__WEBPACK_IMPORTED_MODULE_7__.fetchUser)({\n                            userid,\n                            accessToken\n                        }));\n                        console.log(\"res\", res);\n                        res.then((data)=>console.log(data)).catch((err)=>console.log(err));\n                    },\n                    children: \"Get User infor:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"User name:  \",\n                                user.users.username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"Emial: \",\n                                user.users.email\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Form user\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"Id user: \",\n                        user_id\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    method: \"POST\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label_text\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"username\",\n                                    children: \"User name: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"username\",\n                                    value: values.username,\n                                    onChange: handleChange,\n                                    id: \"username\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this),\n                                errors.username && touched.username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: errors.username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 53\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label_text\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    children: \"Email: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    name: \"email\",\n                                    value: values.email,\n                                    onChange: handleChange,\n                                    id: \"email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this),\n                                errors.email && touched.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: errors.email\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 47\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Update\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n            lineNumber: 66,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(UserPage, \"Cmt1FCcawecGuNvHONyiirsZ604=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        formik__WEBPACK_IMPORTED_MODULE_4__.useFormik\n    ];\n});\n_c = UserPage;\nvar _c;\n$RefreshReg$(_c, \"UserPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBWTs7Ozs7OzhDQUMzQiw4REFBQ0M7b0NBQ0NDLE1BQUs7b0NBQ0xDLE1BQUs7b0NBQ0xDLE9BQU83QixPQUFPMUIsUUFBUTtvQ0FDdEJ3RCxVQUFVN0I7b0NBQ1Y4QixJQUFHOzs7Ozs7Z0NBRUpqQyxPQUFPeEIsUUFBUSxJQUFJeUIsUUFBUXpCLFFBQVEsa0JBQUksOERBQUMwRDs4Q0FBTWxDLE9BQU94QixRQUFROzs7Ozs7Ozs7Ozs7c0NBR2hFLDhEQUFDZ0M7NEJBQUlpQixXQUFVOzs4Q0FDYiw4REFBQ0M7b0NBQU1DLFNBQVE7OENBQVM7Ozs7Ozs4Q0FDeEIsOERBQUNDO29DQUNDQyxNQUFLO29DQUNMQyxNQUFLO29DQUNMQyxPQUFPN0IsT0FBT3ZCLEtBQUs7b0NBQ25CcUQsVUFBVTdCO29DQUNWOEIsSUFBRzs7Ozs7O2dDQUVKakMsT0FBT3JCLEtBQUssSUFBSXNCLFFBQVF0QixLQUFLLGtCQUFJLDhEQUFDdUQ7OENBQU1sQyxPQUFPckIsS0FBSzs7Ozs7Ozs7Ozs7O3NDQUt2RCw4REFBQ2dDOzRCQUFPa0IsTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQyxDQUFDO0dBMUd1QmpEOztRQUVQVCxrREFBU0E7UUFnQlBMLG9EQUFXQTtRQUNmQyxvREFBV0E7UUFJVEUsNkNBQVNBOzs7S0F2QkZXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1t1c2VyX2lkXS9pbmRleC50c3g/MTQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdG9yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuaW1wb3J0IHsgYWRkVXNlckF1dGggfSBmcm9tIFwiLi4vLi4vc3RvcmUvYXV0aFNsaWNlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYWRkVXNlciwgZmV0Y2hVc2VyIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3VzZXJTbGljZVwiO1xyXG5cclxuY29uc3Qgc2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICB1c2VybmFtZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgZW1haWw6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpXHJcbn0pO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUGFnZSgpIHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyB1c2VyX2lkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgdXNlcmlkOmFueSA9IHVzZXJfaWQ7XHJcblxyXG4gIGNvbnN0IFthY2Nlc3N0b2tlbixzZXRhY2Nlc3N0b2tlbl09dXNlU3RhdGUoe30pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7O1xyXG4gICAgY29uc3QgYTphbnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc3Rva2VuXCIpO1xyXG4gICAgc2V0YWNjZXNzdG9rZW4oYSk7XHJcbiAgfSwgW10pXHJcbiAgY29uc3QgYWNjZXNzVG9rZW46YW55ID0gYWNjZXNzdG9rZW47XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHtcclxuICAvLyAgIFwidXNlcmlkXCI6dXNlcl9pZCxcclxuICAvLyAgIFwiYWNjZXNUb2tlblwiOmFjY2Vzc1Rva2VuXHJcbiAgLy8gfSlcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHVzZXIpXHJcblxyXG4gIC8vIFxyXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgIH0sXHJcblxyXG4gICAgLy8gUGFzcyB0aGUgWXVwIHNjaGVtYSB0byB2YWxpZGF0ZSB0aGUgZm9ybVxyXG4gICAgdmFsaWRhdGlvblNjaGVtYTogc2NoZW1hLFxyXG5cclxuICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cclxuICAgIG9uU3VibWl0OiBhc3luYyAoeyB1c2VybmFtZSwgZW1haWwgfSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh7dXNlcm5hbWUsZW1haWx9KVxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gRGVzdHJ1Y3R1cmUgdGhlIGZvcm1payBvYmplY3RcclxuICBjb25zdCB7IGVycm9ycywgdG91Y2hlZCwgdmFsdWVzLCBoYW5kbGVDaGFuZ2UsIGhhbmRsZVN1Ym1pdCB9ID0gZm9ybWlrO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlTG9nb3V0KCk6YW55e1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9nb3V0IHJvaSBuZVwiKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIilcclxuICAgICAgIH1cclxuICByZXR1cm4gKCAgICAgXHJcbiAgICA8PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlVzZXIgcGFnZTwvZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5Ib21lPC9MaW5rPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvYnV0dG9uPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgey8qID09PT09PSAqL31cclxuICAgICAgICA8aDE+VXNlciBpbmZvciAtIHt1c2VyLmxvYWRpbmcgJiYgXCJsb2FkaW5nLi4uXCJ9PC9oMT5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGRpc3BhdGNoKGZldGNoVXNlcih7dXNlcmlkLGFjY2Vzc1Rva2VufSkpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZXNcIiwgcmVzKTtcclxuICAgICAgICAgIHJlcy50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcclxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgR2V0IFVzZXIgaW5mb3I6XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGgxPlVzZXIgbmFtZTogIHt1c2VyLnVzZXJzLnVzZXJuYW1lfTwvaDE+IFxyXG4gICAgICAgIDxsaT5FbWlhbDoge3VzZXIudXNlcnMuZW1haWx9PC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgICB7LyogPT09PT09ICovfVxyXG4gICAgICAgIDxkaXY+Rm9ybSB1c2VyPC9kaXY+XHJcbiAgICAgICAgPGRpdj5JZCB1c2VyOiB7dXNlcl9pZH08L2Rpdj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsX3RleHRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiID5Vc2VyIG5hbWU6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Vycm9ycy51c2VybmFtZSAmJiB0b3VjaGVkLnVzZXJuYW1lICYmIDxzcGFuPntlcnJvcnMudXNlcm5hbWV9PC9zcGFuPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxfdGV4dFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgPkVtYWlsOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIHRvdWNoZWQuZW1haWwgJiYgPHNwYW4+e2Vycm9ycy5lbWFpbH08L3NwYW4+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBkYXRlPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICB7LyogPT09PT09PT09PT0gKi99XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiTGluayIsInVzZUZvcm1payIsIll1cCIsInVzZVJvdXRlciIsImZldGNoVXNlciIsInNjaGVtYSIsIm9iamVjdCIsInNoYXBlIiwidXNlcm5hbWUiLCJzdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwiVXNlclBhZ2UiLCJyb3V0ZXIiLCJ1c2VyX2lkIiwicXVlcnkiLCJ1c2VyaWQiLCJhY2Nlc3N0b2tlbiIsInNldGFjY2Vzc3Rva2VuIiwiYSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhY2Nlc3NUb2tlbiIsImRpc3BhdGNoIiwidXNlciIsInN0YXRlIiwiZm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInZhbGlkYXRpb25TY2hlbWEiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvcnMiLCJ0b3VjaGVkIiwidmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlTG9nb3V0IiwiY2xlYXIiLCJwdXNoIiwiZGl2IiwiaHJlZiIsImhyIiwiYnV0dG9uIiwib25DbGljayIsImgxIiwibG9hZGluZyIsInJlcyIsInRoZW4iLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJ1bCIsInVzZXJzIiwibGkiLCJmb3JtIiwibWV0aG9kIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJpZCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[user_id]/index.tsx\n"));

/***/ })

});