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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ \"./node_modules/yup/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _store_userSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/userSlice */ \"./store/userSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst schema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({\n    username: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(),\n    email: yup__WEBPACK_IMPORTED_MODULE_5__.string().required()\n});\nfunction UserPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { user_id  } = router.query;\n    const userid = user_id;\n    const [accesstoken, setaccesstoken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const a = localStorage.getItem(\"accesstoken\");\n        setaccesstoken(a);\n    }, []);\n    const accessToken = accesstoken;\n    // console.log({\n    //   \"userid\":user_id,\n    //   \"accesToken\":accessToken\n    // })\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user);\n    // console.log(user)\n    // \n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useFormik)({\n        initialValues: {\n            username: \"\",\n            email: \"\"\n        },\n        // Pass the Yup schema to validate the form\n        validationSchema: schema,\n        // Handle form submission\n        onSubmit: async (param)=>{\n            let { username , email  } = param;\n            console.log({\n                username,\n                email\n            });\n        }\n    });\n    // Destructure the formik object\n    const { errors , touched , values , handleChange , handleSubmit  } = formik;\n    function handleLogout() {\n        localStorage.clear();\n        console.log(\"logout roi ne\");\n        router.push(\"/\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"User page\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLogout,\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"User infor - \",\n                        user.loading && \"loading...\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>{\n                        const res = dispatch((0,_store_userSlice__WEBPACK_IMPORTED_MODULE_7__.fetchUser)({\n                            userid,\n                            accessToken\n                        }));\n                        console.log(\"res\", res);\n                        res.then((data)=>console.log(data)).catch((err)=>console.log(err));\n                    },\n                    children: \"Get User infor:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"User name:  \",\n                                user.users.username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"Email: \",\n                                user.users.email\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"transactionHistory:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                    children: JSON.stringify(user.users.transactionHistory, null, 2)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Form user\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"Id user: \",\n                        user_id\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    method: \"POST\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label_text\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"username\",\n                                    children: \"User name: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"username\",\n                                    value: values.username,\n                                    onChange: handleChange,\n                                    id: \"username\",\n                                    placeholder: user.users.username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, this),\n                                errors.username && touched.username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: errors.username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 53\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label_text\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    children: \"Email: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    name: \"email\",\n                                    value: values.email,\n                                    onChange: handleChange,\n                                    id: \"email\",\n                                    placeholder: user.users.email\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                }, this),\n                                errors.email && touched.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: errors.email\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 47\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Update\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n            lineNumber: 66,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(UserPage, \"Cmt1FCcawecGuNvHONyiirsZ604=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        formik__WEBPACK_IMPORTED_MODULE_4__.useFormik\n    ];\n});\n_c = UserPage;\nvar _c;\n$RefreshReg$(_c, \"UserPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0wsOERBQUNBOzt3QkFBSTt3QkFBVTFCOzs7Ozs7OzhCQUNmLDhEQUFDNkM7b0JBQUs5QixVQUFVTztvQkFBY3dCLFFBQU87O3NDQUNuQyw4REFBQ3BCOzRCQUFJcUIsV0FBVTs7OENBQ2IsOERBQUNDO29DQUFNQyxTQUFROzhDQUFZOzs7Ozs7OENBQzNCLDhEQUFDQztvQ0FDQ0MsTUFBSztvQ0FDTEMsTUFBSztvQ0FDTEMsT0FBT2pDLE9BQU8xQixRQUFRO29DQUN0QjRELFVBQVVqQztvQ0FDVmtDLElBQUc7b0NBQ0hDLGFBQWE5QyxLQUFLNkIsS0FBSyxDQUFDN0MsUUFBUTs7Ozs7O2dDQUVqQ3dCLE9BQU94QixRQUFRLElBQUl5QixRQUFRekIsUUFBUSxrQkFBSSw4REFBQytEOzhDQUFNdkMsT0FBT3hCLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHaEUsOERBQUNnQzs0QkFBSXFCLFdBQVU7OzhDQUNiLDhEQUFDQztvQ0FBTUMsU0FBUTs4Q0FBUzs7Ozs7OzhDQUN4Qiw4REFBQ0M7b0NBQ0NDLE1BQUs7b0NBQ0xDLE1BQUs7b0NBQ0xDLE9BQU9qQyxPQUFPdkIsS0FBSztvQ0FDbkJ5RCxVQUFVakM7b0NBQ1ZrQyxJQUFHO29DQUNIQyxhQUFhOUMsS0FBSzZCLEtBQUssQ0FBQzFDLEtBQUs7Ozs7OztnQ0FFOUJxQixPQUFPckIsS0FBSyxJQUFJc0IsUUFBUXRCLEtBQUssa0JBQUksOERBQUM0RDs4Q0FBTXZDLE9BQU9yQixLQUFLOzs7Ozs7Ozs7Ozs7c0NBS3ZELDhEQUFDZ0M7NEJBQU9zQixNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhDLENBQUM7R0FqSHVCckQ7O1FBRVBULGtEQUFTQTtRQWdCUEwsb0RBQVdBO1FBQ2ZDLG9EQUFXQTtRQUlURSw2Q0FBU0E7OztLQXZCRlciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3VzZXJfaWRdL2luZGV4LnRzeD8xNDkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBBcHBEaXNwYXRjaCwgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3N0b3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xyXG5pbXBvcnQgeyBhZGRVc2VyQXV0aCB9IGZyb20gXCIuLi8uLi9zdG9yZS9hdXRoU2xpY2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgcm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBhZGRVc2VyLCBmZXRjaFVzZXIgfSBmcm9tIFwiLi4vLi4vc3RvcmUvdXNlclNsaWNlXCI7XHJcblxyXG5jb25zdCBzY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gIHVzZXJuYW1lOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICBlbWFpbDogWXVwLnN0cmluZygpLnJlcXVpcmVkKClcclxufSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJQYWdlKCkge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHVzZXJfaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB1c2VyaWQ6YW55ID0gdXNlcl9pZDtcclxuXHJcbiAgY29uc3QgW2FjY2Vzc3Rva2VuLHNldGFjY2Vzc3Rva2VuXT11c2VTdGF0ZSh7fSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGE6YW55ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3N0b2tlblwiKTtcclxuICAgIHNldGFjY2Vzc3Rva2VuKGEpO1xyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuOmFueSA9IGFjY2Vzc3Rva2VuO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyh7XHJcbiAgLy8gICBcInVzZXJpZFwiOnVzZXJfaWQsXHJcbiAgLy8gICBcImFjY2VzVG9rZW5cIjphY2Nlc3NUb2tlblxyXG4gIC8vIH0pXHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAvLyBjb25zb2xlLmxvZyh1c2VyKVxyXG5cclxuICAvLyBcclxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFBhc3MgdGhlIFl1cCBzY2hlbWEgdG8gdmFsaWRhdGUgdGhlIGZvcm1cclxuICAgIHZhbGlkYXRpb25TY2hlbWE6IHNjaGVtYSxcclxuXHJcbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXHJcbiAgICBvblN1Ym1pdDogYXN5bmMgKHsgdXNlcm5hbWUsIGVtYWlsIH0pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coe3VzZXJuYW1lLGVtYWlsfSlcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIERlc3RydWN0dXJlIHRoZSBmb3JtaWsgb2JqZWN0XHJcbiAgY29uc3QgeyBlcnJvcnMsIHRvdWNoZWQsIHZhbHVlcywgaGFuZGxlQ2hhbmdlLCBoYW5kbGVTdWJtaXQgfSA9IGZvcm1paztcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUxvZ291dCgpOmFueXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ291dCByb2kgbmVcIik7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICAgICB9XHJcbiAgcmV0dXJuICggICAgIFxyXG4gICAgPD5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5Vc2VyIHBhZ2U8L2Rpdj5cclxuICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+SG9tZTwvTGluaz5cclxuICAgICAgICA8aHIvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj5cclxuICAgICAgICA8aHIvPlxyXG4gICAgICAgIHsvKiA9PT09PT0gKi99XHJcbiAgICAgICAgPGgxPlVzZXIgaW5mb3IgLSB7dXNlci5sb2FkaW5nICYmIFwibG9hZGluZy4uLlwifTwvaDE+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBkaXNwYXRjaChmZXRjaFVzZXIoe3VzZXJpZCxhY2Nlc3NUb2tlbn0pKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzXCIsIHJlcyk7XHJcbiAgICAgICAgICByZXMudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSkpXHJcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIEdldCBVc2VyIGluZm9yOlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxoMT5Vc2VyIG5hbWU6ICB7dXNlci51c2Vycy51c2VybmFtZX08L2gxPiBcclxuICAgICAgICA8bGk+RW1haWw6IHt1c2VyLnVzZXJzLmVtYWlsfTwvbGk+XHJcbiAgICAgICAgPGxpPnRyYW5zYWN0aW9uSGlzdG9yeTpcclxuICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeSggdXNlci51c2Vycy50cmFuc2FjdGlvbkhpc3RvcnkgLCBudWxsLCAyKX08L3ByZT5cclxuICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgPC91bD5cclxuICAgICAgICB7LyogPT09PT09ICovfVxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPGRpdj5Gb3JtIHVzZXI8L2Rpdj5cclxuICAgICAgICA8ZGl2PklkIHVzZXI6IHt1c2VyX2lkfTwvZGl2PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxfdGV4dFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCIgPlVzZXIgbmFtZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy51c2VybmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt1c2VyLnVzZXJzLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7ZXJyb3JzLnVzZXJuYW1lICYmIHRvdWNoZWQudXNlcm5hbWUgJiYgPHNwYW4+e2Vycm9ycy51c2VybmFtZX08L3NwYW4+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbF90ZXh0XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiA+RW1haWw6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3VzZXIudXNlcnMuZW1haWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbCAmJiA8c3Bhbj57ZXJyb3JzLmVtYWlsfTwvc3Bhbj59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5VcGRhdGU8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIHsvKiA9PT09PT09PT09PSAqL31cclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJMaW5rIiwidXNlRm9ybWlrIiwiWXVwIiwidXNlUm91dGVyIiwiZmV0Y2hVc2VyIiwic2NoZW1hIiwib2JqZWN0Iiwic2hhcGUiLCJ1c2VybmFtZSIsInN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJVc2VyUGFnZSIsInJvdXRlciIsInVzZXJfaWQiLCJxdWVyeSIsInVzZXJpZCIsImFjY2Vzc3Rva2VuIiwic2V0YWNjZXNzdG9rZW4iLCJhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFjY2Vzc1Rva2VuIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RhdGUiLCJmb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwidmFsaWRhdGlvblNjaGVtYSIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsInRvdWNoZWQiLCJ2YWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVMb2dvdXQiLCJjbGVhciIsInB1c2giLCJkaXYiLCJocmVmIiwiaHIiLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiLCJsb2FkaW5nIiwicmVzIiwidGhlbiIsImRhdGEiLCJjYXRjaCIsImVyciIsInVsIiwidXNlcnMiLCJsaSIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0cmFuc2FjdGlvbkhpc3RvcnkiLCJmb3JtIiwibWV0aG9kIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJpZCIsInBsYWNlaG9sZGVyIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[user_id]/index.tsx\n"));

/***/ })

});