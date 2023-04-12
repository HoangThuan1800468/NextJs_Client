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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ \"./node_modules/yup/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _store_userSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/userSlice */ \"./store/userSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst schema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({\n    username: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(),\n    email: yup__WEBPACK_IMPORTED_MODULE_5__.string().required()\n});\nfunction UserPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { user_id  } = router.query;\n    const userid = user_id;\n    const [accesstoken, setaccesstoken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const a = localStorage.getItem(\"accesstoken\");\n        setaccesstoken(a);\n    }, [\n        user_id\n    ]);\n    const accessToken = accesstoken;\n    // console.log({\n    //   \"userid\":user_id,\n    //   \"accesToken\":accessToken\n    // })\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user);\n    // console.log(user)\n    // \n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useFormik)({\n        initialValues: {\n            username: \"\",\n            email: \"\"\n        },\n        // Pass the Yup schema to validate the form\n        validationSchema: schema,\n        // Handle form submission\n        onSubmit: async (param)=>{\n            let { username , email  } = param;\n            console.log({\n                username,\n                email\n            });\n        }\n    });\n    // Destructure the formik object\n    const { errors , touched , values , handleChange , handleSubmit  } = formik;\n    function handleLogout() {\n        localStorage.clear();\n        dispatch((0,_store_userSlice__WEBPACK_IMPORTED_MODULE_7__.removeUser)());\n        console.log(\"logout roi ne\");\n        router.push(\"/\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"User page\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLogout,\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"User infor - \",\n                        user.loading && \"loading...\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>{\n                        try {\n                            const res = dispatch((0,_store_userSlice__WEBPACK_IMPORTED_MODULE_7__.fetchUser)({\n                                userid,\n                                accessToken\n                            }));\n                        } catch (e) {\n                            window.alert([\n                                \"You ned relogin!\"\n                            ]);\n                            router.push(\"/login\");\n                        }\n                    },\n                    children: \"Get User infor:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"User name:  \",\n                                user.users.username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"Email: \",\n                                user.users.email\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"transactionHistory:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                    children: JSON.stringify(user.users.transactionHistory, null, 2)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Form user\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"Id user: \",\n                        user_id\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    method: \"POST\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label_text\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"username\",\n                                    children: \"User name: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"username\",\n                                    value: values.username,\n                                    onChange: handleChange,\n                                    id: \"username\",\n                                    placeholder: user.users.username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, this),\n                                errors.username && touched.username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: errors.username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 53\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label_text\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    children: \"Email: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    name: \"email\",\n                                    value: values.email,\n                                    onChange: handleChange,\n                                    id: \"email\",\n                                    placeholder: user.users.email\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, this),\n                                errors.email && touched.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: errors.email\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 47\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Update\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 130,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n            lineNumber: 69,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(UserPage, \"Cmt1FCcawecGuNvHONyiirsZ604=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        formik__WEBPACK_IMPORTED_MODULE_4__.useFormik\n    ];\n});\n_c = UserPage;\nvar _c;\n$RefreshReg$(_c, \"UserPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dCQUFJO3dCQUFVMUI7Ozs7Ozs7OEJBQ2YsOERBQUMyQztvQkFBSzVCLFVBQVVPO29CQUFjc0IsUUFBTzs7c0NBQ25DLDhEQUFDbEI7NEJBQUltQixXQUFVOzs4Q0FDYiw4REFBQ0M7b0NBQU1DLFNBQVE7OENBQVk7Ozs7Ozs4Q0FDM0IsOERBQUNDO29DQUNDQyxNQUFLO29DQUNMQyxNQUFLO29DQUNMQyxPQUFPL0IsT0FBTzFCLFFBQVE7b0NBQ3RCMEQsVUFBVS9CO29DQUNWZ0MsSUFBRztvQ0FDSEMsYUFBYTVDLEtBQUsyQixLQUFLLENBQUMzQyxRQUFROzs7Ozs7Z0NBRWpDd0IsT0FBT3hCLFFBQVEsSUFBSXlCLFFBQVF6QixRQUFRLGtCQUFJLDhEQUFDNkQ7OENBQU1yQyxPQUFPeEIsUUFBUTs7Ozs7Ozs7Ozs7O3NDQUdoRSw4REFBQ2dDOzRCQUFJbUIsV0FBVTs7OENBQ2IsOERBQUNDO29DQUFNQyxTQUFROzhDQUFTOzs7Ozs7OENBQ3hCLDhEQUFDQztvQ0FDQ0MsTUFBSztvQ0FDTEMsTUFBSztvQ0FDTEMsT0FBTy9CLE9BQU92QixLQUFLO29DQUNuQnVELFVBQVUvQjtvQ0FDVmdDLElBQUc7b0NBQ0hDLGFBQWE1QyxLQUFLMkIsS0FBSyxDQUFDeEMsS0FBSzs7Ozs7O2dDQUU5QnFCLE9BQU9yQixLQUFLLElBQUlzQixRQUFRdEIsS0FBSyxrQkFBSSw4REFBQzBEOzhDQUFNckMsT0FBT3JCLEtBQUs7Ozs7Ozs7Ozs7OztzQ0FLdkQsOERBQUNnQzs0QkFBT29CLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEMsQ0FBQztHQXJIdUJuRDs7UUFHUFYsa0RBQVNBO1FBZ0JQTCxvREFBV0E7UUFDZkMsb0RBQVdBO1FBS1RFLDZDQUFTQTs7O0tBekJGWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bdXNlcl9pZF0vaW5kZXgudHN4PzE0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEFwcERpc3BhdGNoLCBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcbmltcG9ydCB7IGFkZFVzZXJBdXRoIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2F1dGhTbGljZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCByb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGFkZFVzZXIsIGZldGNoVXNlciwgcmVtb3ZlVXNlciB9IGZyb20gXCIuLi8uLi9zdG9yZS91c2VyU2xpY2VcIjtcclxuXHJcbmNvbnN0IHNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgdXNlcm5hbWU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gIGVtYWlsOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoKVxyXG59KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclBhZ2UoKSB7XHJcbiBcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyB1c2VyX2lkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgdXNlcmlkOmFueSA9IHVzZXJfaWQ7XHJcblxyXG4gIGNvbnN0IFthY2Nlc3N0b2tlbixzZXRhY2Nlc3N0b2tlbl09dXNlU3RhdGUoe30pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBhOmFueSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzdG9rZW5cIik7XHJcbiAgICBzZXRhY2Nlc3N0b2tlbihhKTtcclxuICB9LCBbdXNlcl9pZF0pXHJcbiAgY29uc3QgYWNjZXNzVG9rZW46YW55ID0gYWNjZXNzdG9rZW47XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHtcclxuICAvLyAgIFwidXNlcmlkXCI6dXNlcl9pZCxcclxuICAvLyAgIFwiYWNjZXNUb2tlblwiOmFjY2Vzc1Rva2VuXHJcbiAgLy8gfSlcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIFxyXG4gIC8vIGNvbnNvbGUubG9nKHVzZXIpXHJcblxyXG4gIC8vIFxyXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgIH0sXHJcblxyXG4gICAgLy8gUGFzcyB0aGUgWXVwIHNjaGVtYSB0byB2YWxpZGF0ZSB0aGUgZm9ybVxyXG4gICAgdmFsaWRhdGlvblNjaGVtYTogc2NoZW1hLFxyXG5cclxuICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cclxuICAgIG9uU3VibWl0OiBhc3luYyAoeyB1c2VybmFtZSwgZW1haWwgfSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh7dXNlcm5hbWUsZW1haWx9KVxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gRGVzdHJ1Y3R1cmUgdGhlIGZvcm1payBvYmplY3RcclxuICBjb25zdCB7IGVycm9ycywgdG91Y2hlZCwgdmFsdWVzLCBoYW5kbGVDaGFuZ2UsIGhhbmRsZVN1Ym1pdCB9ID0gZm9ybWlrO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlTG9nb3V0KCk6YW55e1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgIGRpc3BhdGNoKHJlbW92ZVVzZXIoKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dvdXQgcm9pIG5lXCIpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgICAgfVxyXG4gIHJldHVybiAoICAgICBcclxuICAgIDw+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+VXNlciBwYWdlPC9kaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PkhvbWU8L0xpbms+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICB7LyogPT09PT09ICovfVxyXG4gICAgICAgIDxoMT5Vc2VyIGluZm9yIC0ge3VzZXIubG9hZGluZyAmJiBcImxvYWRpbmcuLi5cIn08L2gxPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBkaXNwYXRjaChmZXRjaFVzZXIoe3VzZXJpZCxhY2Nlc3NUb2tlbn0pKTtcclxuICAgICAgICAgIH1jYXRjaHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFtcIllvdSBuZWQgcmVsb2dpbiFcIl0pO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgR2V0IFVzZXIgaW5mb3I6XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGgxPlVzZXIgbmFtZTogIHt1c2VyLnVzZXJzLnVzZXJuYW1lfTwvaDE+IFxyXG4gICAgICAgIDxsaT5FbWFpbDoge3VzZXIudXNlcnMuZW1haWx9PC9saT5cclxuICAgICAgICA8bGk+dHJhbnNhY3Rpb25IaXN0b3J5OlxyXG4gICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KCB1c2VyLnVzZXJzLnRyYW5zYWN0aW9uSGlzdG9yeSAsIG51bGwsIDIpfTwvcHJlPlxyXG4gICAgICAgIDwvbGk+XHJcblxyXG4gICAgICA8L3VsPlxyXG4gICAgICAgIHsvKiA9PT09PT0gKi99XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8ZGl2PkZvcm0gdXNlcjwvZGl2PlxyXG4gICAgICAgIDxkaXY+SWQgdXNlcjoge3VzZXJfaWR9PC9kaXY+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbF90ZXh0XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIiA+VXNlciBuYW1lOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3VzZXIudXNlcnMudXNlcm5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtlcnJvcnMudXNlcm5hbWUgJiYgdG91Y2hlZC51c2VybmFtZSAmJiA8c3Bhbj57ZXJyb3JzLnVzZXJuYW1lfTwvc3Bhbj59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsX3RleHRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiID5FbWFpbDogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dXNlci51c2Vycy5lbWFpbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsICYmIDxzcGFuPntlcnJvcnMuZW1haWx9PC9zcGFuPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlVwZGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgey8qID09PT09PT09PT09ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkxpbmsiLCJ1c2VGb3JtaWsiLCJZdXAiLCJ1c2VSb3V0ZXIiLCJmZXRjaFVzZXIiLCJyZW1vdmVVc2VyIiwic2NoZW1hIiwib2JqZWN0Iiwic2hhcGUiLCJ1c2VybmFtZSIsInN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJVc2VyUGFnZSIsInJvdXRlciIsInVzZXJfaWQiLCJxdWVyeSIsInVzZXJpZCIsImFjY2Vzc3Rva2VuIiwic2V0YWNjZXNzdG9rZW4iLCJhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFjY2Vzc1Rva2VuIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RhdGUiLCJmb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwidmFsaWRhdGlvblNjaGVtYSIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsInRvdWNoZWQiLCJ2YWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVMb2dvdXQiLCJjbGVhciIsInB1c2giLCJkaXYiLCJocmVmIiwiaHIiLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiLCJsb2FkaW5nIiwicmVzIiwid2luZG93IiwiYWxlcnQiLCJ1bCIsInVzZXJzIiwibGkiLCJwcmUiLCJKU09OIiwic3RyaW5naWZ5IiwidHJhbnNhY3Rpb25IaXN0b3J5IiwiZm9ybSIsIm1ldGhvZCIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiaWQiLCJwbGFjZWhvbGRlciIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[user_id]/index.tsx\n"));

/***/ })

});