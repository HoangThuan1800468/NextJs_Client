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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ \"./node_modules/yup/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _store_userSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/userSlice */ \"./store/userSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst schema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({\n    username: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(),\n    email: yup__WEBPACK_IMPORTED_MODULE_5__.string().required()\n});\nfunction UserPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { user_id  } = router.query;\n    const userid = user_id;\n    const [accesstoken, setaccesstoken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const a = localStorage.getItem(\"accesstoken\");\n        setaccesstoken(a);\n    }, []);\n    const accessToken = accesstoken;\n    // console.log({\n    //   \"userid\":user_id,\n    //   \"accesToken\":accessToken\n    // })\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user.users);\n    // console.log(user)\n    // \n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useFormik)({\n        initialValues: {\n            username: \"\",\n            email: \"\"\n        },\n        // Pass the Yup schema to validate the form\n        validationSchema: schema,\n        // Handle form submission\n        onSubmit: async (param)=>{\n            let { username , email  } = param;\n            console.log({\n                username,\n                email\n            });\n        }\n    });\n    // Destructure the formik object\n    const { errors , touched , values , handleChange , handleSubmit  } = formik;\n    function handleLogout() {\n        localStorage.clear();\n        console.log(\"logout roi ne\");\n        router.push(\"/\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"User page\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLogout,\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"User infor - \",\n                        user && \"loading...\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>{\n                        const res = dispatch((0,_store_userSlice__WEBPACK_IMPORTED_MODULE_7__.fetchUser)({\n                            userid,\n                            accessToken\n                        }));\n                        console.log(\"res\", res);\n                        res.then((data)=>console.log(data)).catch((err)=>console.log(err));\n                    },\n                    children: \"Get User infor:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: user.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: user.username\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 9\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Form user\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"Id user: \",\n                        user_id\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    method: \"POST\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label_text\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"username\",\n                                    children: \"User name: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"username\",\n                                    value: values.username,\n                                    onChange: handleChange,\n                                    id: \"username\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this),\n                                errors.username && touched.username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: errors.username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 53\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label_text\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    children: \"Email: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    name: \"email\",\n                                    value: values.email,\n                                    onChange: handleChange,\n                                    id: \"email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, this),\n                                errors.email && touched.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: errors.email\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 47\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Update\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n            lineNumber: 66,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(UserPage, \"Cmt1FCcawecGuNvHONyiirsZ604=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        formik__WEBPACK_IMPORTED_MODULE_4__.useFormik\n    ];\n});\n_c = UserPage;\nvar _c;\n$RefreshReg$(_c, \"UserPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TEMsT0FBTzNCLE9BQU8zQixRQUFRO29DQUN0QnVELFVBQVUzQjtvQ0FDVjRCLElBQUc7Ozs7OztnQ0FFSi9CLE9BQU96QixRQUFRLElBQUkwQixRQUFRMUIsUUFBUSxrQkFBSSw4REFBQ3lEOzhDQUFNaEMsT0FBT3pCLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHaEUsOERBQUNpQzs0QkFBSWUsV0FBVTs7OENBQ2IsOERBQUNDO29DQUFNQyxTQUFROzhDQUFTOzs7Ozs7OENBQ3hCLDhEQUFDQztvQ0FDQ0MsTUFBSztvQ0FDTEMsTUFBSztvQ0FDTEMsT0FBTzNCLE9BQU94QixLQUFLO29DQUNuQm9ELFVBQVUzQjtvQ0FDVjRCLElBQUc7Ozs7OztnQ0FFSi9CLE9BQU90QixLQUFLLElBQUl1QixRQUFRdkIsS0FBSyxrQkFBSSw4REFBQ3NEOzhDQUFNaEMsT0FBT3RCLEtBQUs7Ozs7Ozs7Ozs7OztzQ0FLdkQsOERBQUNpQzs0QkFBT2dCLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEMsQ0FBQztHQXpHdUJoRDs7UUFFUFQsa0RBQVNBO1FBZ0JQTCxvREFBV0E7UUFDZkMsb0RBQVdBO1FBSVRFLDZDQUFTQTs7O0tBdkJGVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bdXNlcl9pZF0vaW5kZXgudHN4PzE0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEFwcERpc3BhdGNoLCBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcbmltcG9ydCB7IGFkZFVzZXJBdXRoIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2F1dGhTbGljZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCByb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGZldGNoVXNlciB9IGZyb20gXCIuLi8uLi9zdG9yZS91c2VyU2xpY2VcIjtcclxuXHJcbmNvbnN0IHNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgdXNlcm5hbWU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gIGVtYWlsOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoKVxyXG59KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclBhZ2UoKSB7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgdXNlcl9pZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHVzZXJpZDphbnkgPSB1c2VyX2lkO1xyXG5cclxuICBjb25zdCBbYWNjZXNzdG9rZW4sc2V0YWNjZXNzdG9rZW5dPXVzZVN0YXRlKHt9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4geztcclxuICAgIGNvbnN0IGE6YW55ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3N0b2tlblwiKTtcclxuICAgIHNldGFjY2Vzc3Rva2VuKGEpO1xyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuOmFueSA9IGFjY2Vzc3Rva2VuO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyh7XHJcbiAgLy8gICBcInVzZXJpZFwiOnVzZXJfaWQsXHJcbiAgLy8gICBcImFjY2VzVG9rZW5cIjphY2Nlc3NUb2tlblxyXG4gIC8vIH0pXHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS51c2VyLnVzZXJzKTtcclxuICAvLyBjb25zb2xlLmxvZyh1c2VyKVxyXG5cclxuICAvLyBcclxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFBhc3MgdGhlIFl1cCBzY2hlbWEgdG8gdmFsaWRhdGUgdGhlIGZvcm1cclxuICAgIHZhbGlkYXRpb25TY2hlbWE6IHNjaGVtYSxcclxuXHJcbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXHJcbiAgICBvblN1Ym1pdDogYXN5bmMgKHsgdXNlcm5hbWUsIGVtYWlsIH0pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coe3VzZXJuYW1lLGVtYWlsfSlcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIERlc3RydWN0dXJlIHRoZSBmb3JtaWsgb2JqZWN0XHJcbiAgY29uc3QgeyBlcnJvcnMsIHRvdWNoZWQsIHZhbHVlcywgaGFuZGxlQ2hhbmdlLCBoYW5kbGVTdWJtaXQgfSA9IGZvcm1paztcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUxvZ291dCgpOmFueXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ291dCByb2kgbmVcIik7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICAgICB9XHJcbiAgcmV0dXJuICggICAgIFxyXG4gICAgPD5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5Vc2VyIHBhZ2U8L2Rpdj5cclxuICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+SG9tZTwvTGluaz5cclxuICAgICAgICA8aHIvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj5cclxuICAgICAgICA8aHIvPlxyXG4gICAgICAgIHsvKiA9PT09PT0gKi99XHJcbiAgICAgICAgPGgxPlVzZXIgaW5mb3IgLSB7dXNlciAmJiBcImxvYWRpbmcuLi5cIn08L2gxPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gZGlzcGF0Y2goZmV0Y2hVc2VyKHt1c2VyaWQsYWNjZXNzVG9rZW59KSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc1wiLCByZXMpO1xyXG4gICAgICAgICAgcmVzLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgR2V0IFVzZXIgaW5mb3I6XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8dWw+XHJcbiAgICAgIHt1c2VyLm1hcCh1c2VyID0+IChcclxuICAgICAgICA8dWw+e3VzZXIudXNlcm5hbWV9PC91bD5cclxuICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgICAgey8qID09PT09PSAqL31cclxuICAgICAgICA8ZGl2PkZvcm0gdXNlcjwvZGl2PlxyXG4gICAgICAgIDxkaXY+SWQgdXNlcjoge3VzZXJfaWR9PC9kaXY+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbF90ZXh0XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIiA+VXNlciBuYW1lOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtlcnJvcnMudXNlcm5hbWUgJiYgdG91Y2hlZC51c2VybmFtZSAmJiA8c3Bhbj57ZXJyb3JzLnVzZXJuYW1lfTwvc3Bhbj59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsX3RleHRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiID5FbWFpbDogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsICYmIDxzcGFuPntlcnJvcnMuZW1haWx9PC9zcGFuPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlVwZGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgey8qID09PT09PT09PT09ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkxpbmsiLCJ1c2VGb3JtaWsiLCJZdXAiLCJ1c2VSb3V0ZXIiLCJmZXRjaFVzZXIiLCJzY2hlbWEiLCJvYmplY3QiLCJzaGFwZSIsInVzZXJuYW1lIiwic3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsIlVzZXJQYWdlIiwicm91dGVyIiwidXNlcl9pZCIsInF1ZXJ5IiwidXNlcmlkIiwiYWNjZXNzdG9rZW4iLCJzZXRhY2Nlc3N0b2tlbiIsImEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWNjZXNzVG9rZW4iLCJkaXNwYXRjaCIsInVzZXIiLCJzdGF0ZSIsInVzZXJzIiwiZm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInZhbGlkYXRpb25TY2hlbWEiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvcnMiLCJ0b3VjaGVkIiwidmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlTG9nb3V0IiwiY2xlYXIiLCJwdXNoIiwiZGl2IiwiaHJlZiIsImhyIiwiYnV0dG9uIiwib25DbGljayIsImgxIiwicmVzIiwidGhlbiIsImRhdGEiLCJjYXRjaCIsImVyciIsInVsIiwibWFwIiwiZm9ybSIsIm1ldGhvZCIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiaWQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[user_id]/index.tsx\n"));

/***/ })

});