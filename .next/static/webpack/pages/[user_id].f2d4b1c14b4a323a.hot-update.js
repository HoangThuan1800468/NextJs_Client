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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ \"./node_modules/yup/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _store_userSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/userSlice */ \"./store/userSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst schema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({\n    username: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(),\n    email: yup__WEBPACK_IMPORTED_MODULE_5__.string().required()\n});\nfunction UserPage() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { user_id  } = router.query;\n    const [accesstoken, setaccesstoken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const a = localStorage.getItem(\"accesstoken\");\n        setaccesstoken(a);\n        console.log({\n            \"userid\": user_id,\n            \"accesToken\": accesstoken\n        });\n    }, []);\n    const userid = user_id;\n    const accessToken = accesstoken;\n    console.log({\n        \"userid\": user_id,\n        \"accesToken\": accesstoken\n    });\n    console.log(user);\n    // \n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useFormik)({\n        initialValues: {\n            username: \"\",\n            email: \"\"\n        },\n        // Pass the Yup schema to validate the form\n        validationSchema: schema,\n        // Handle form submission\n        onSubmit: async (param)=>{\n            let { username , email  } = param;\n            console.log({\n                username,\n                email\n            });\n        }\n    });\n    // Destructure the formik object\n    const { errors , touched , values , handleChange , handleSubmit  } = formik;\n    function handleLogout() {\n        localStorage.clear();\n        console.log(\"logout roi ne\");\n        router.push(\"/\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"User page\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLogout,\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"User infor - \",\n                        user.loading && \"loading...\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>{\n                        const res = dispatch((0,_store_userSlice__WEBPACK_IMPORTED_MODULE_7__.fetchUser)({\n                            userid,\n                            accessToken\n                        }));\n                        console.log(\"res\", res);\n                        res.then((data)=>console.log(data)).catch((err)=>console.log(err));\n                    },\n                    children: \"Get User infor:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: user.user\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Form user\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"Id user: \",\n                        user_id\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    method: \"POST\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label_text\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"username\",\n                                    children: \"User name: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"username\",\n                                    value: values.username,\n                                    onChange: handleChange,\n                                    id: \"username\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this),\n                                errors.username && touched.username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: errors.username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 53\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label_text\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    children: \"Email: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    name: \"email\",\n                                    value: values.email,\n                                    onChange: handleChange,\n                                    id: \"email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, this),\n                                errors.email && touched.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: errors.email\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 47\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Update\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lyhoa\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\Nextjs\\\\pages\\\\[user_id]\\\\index.tsx\",\n            lineNumber: 72,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(UserPage, \"9Dy49nkBkRxEg0udri9n1ytl3XU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        formik__WEBPACK_IMPORTED_MODULE_4__.useFormik\n    ];\n});\n_c = UserPage;\nvar _c;\n$RefreshReg$(_c, \"UserPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TEMsT0FBTzNCLE9BQU8xQixRQUFRO29DQUN0QnNELFVBQVUzQjtvQ0FDVjRCLElBQUc7Ozs7OztnQ0FFSi9CLE9BQU94QixRQUFRLElBQUl5QixRQUFRekIsUUFBUSxrQkFBSSw4REFBQ3dEOzhDQUFNaEMsT0FBT3hCLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHaEUsOERBQUNnQzs0QkFBSWUsV0FBVTs7OENBQ2IsOERBQUNDO29DQUFNQyxTQUFROzhDQUFTOzs7Ozs7OENBQ3hCLDhEQUFDQztvQ0FDQ0MsTUFBSztvQ0FDTEMsTUFBSztvQ0FDTEMsT0FBTzNCLE9BQU92QixLQUFLO29DQUNuQm1ELFVBQVUzQjtvQ0FDVjRCLElBQUc7Ozs7OztnQ0FFSi9CLE9BQU9yQixLQUFLLElBQUlzQixRQUFRdEIsS0FBSyxrQkFBSSw4REFBQ3FEOzhDQUFNaEMsT0FBT3JCLEtBQUs7Ozs7Ozs7Ozs7OztzQ0FLdkQsOERBQUNnQzs0QkFBT2dCLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEMsQ0FBQztHQTdHdUIvQzs7UUFDTGQsb0RBQVdBO1FBQ2ZDLG9EQUFXQTtRQUVUSSxrREFBU0E7UUF5QlRGLDZDQUFTQTs7O0tBN0JGVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bdXNlcl9pZF0vaW5kZXgudHN4PzE0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEFwcERpc3BhdGNoLCBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcbmltcG9ydCB7IGFkZFVzZXJBdXRoIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2F1dGhTbGljZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCByb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGZldGNoVXNlciB9IGZyb20gXCIuLi8uLi9zdG9yZS91c2VyU2xpY2VcIjtcclxuXHJcbmNvbnN0IHNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgdXNlcm5hbWU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gIGVtYWlsOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoKVxyXG59KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclBhZ2UoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHVzZXJfaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3QgW2FjY2Vzc3Rva2VuLHNldGFjY2Vzc3Rva2VuXT11c2VTdGF0ZSh7fSk7XHJcblxyXG4gXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7O1xyXG4gICAgY29uc3QgYTphbnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc3Rva2VuXCIpO1xyXG4gICAgc2V0YWNjZXNzdG9rZW4oYSk7XHJcbiAgICBjb25zb2xlLmxvZyh7XHJcbiAgICAgIFwidXNlcmlkXCI6dXNlcl9pZCxcclxuICAgICAgXCJhY2Nlc1Rva2VuXCI6YWNjZXNzdG9rZW5cclxuICAgIH0pXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgdXNlcmlkOmFueSA9IHVzZXJfaWQ7XHJcbiAgY29uc3QgYWNjZXNzVG9rZW46YW55ID0gYWNjZXNzdG9rZW47XHJcblxyXG4gIGNvbnNvbGUubG9nKHtcclxuICAgIFwidXNlcmlkXCI6dXNlcl9pZCxcclxuICAgIFwiYWNjZXNUb2tlblwiOmFjY2Vzc3Rva2VuXHJcbiAgfSlcclxuXHJcbiAgY29uc29sZS5sb2codXNlcilcclxuICAvLyBcclxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFBhc3MgdGhlIFl1cCBzY2hlbWEgdG8gdmFsaWRhdGUgdGhlIGZvcm1cclxuICAgIHZhbGlkYXRpb25TY2hlbWE6IHNjaGVtYSxcclxuXHJcbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXHJcbiAgICBvblN1Ym1pdDogYXN5bmMgKHsgdXNlcm5hbWUsIGVtYWlsIH0pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coe3VzZXJuYW1lLGVtYWlsfSlcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIERlc3RydWN0dXJlIHRoZSBmb3JtaWsgb2JqZWN0XHJcbiAgY29uc3QgeyBlcnJvcnMsIHRvdWNoZWQsIHZhbHVlcywgaGFuZGxlQ2hhbmdlLCBoYW5kbGVTdWJtaXQgfSA9IGZvcm1paztcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUxvZ291dCgpOmFueXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ291dCByb2kgbmVcIik7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICAgICB9XHJcbiAgcmV0dXJuICggICAgIFxyXG4gICAgPD5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5Vc2VyIHBhZ2U8L2Rpdj5cclxuICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+SG9tZTwvTGluaz5cclxuICAgICAgICA8aHIvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj5cclxuICAgICAgICA8aHIvPlxyXG4gICAgICAgIHsvKiA9PT09PT0gKi99XHJcbiAgICAgICAgPGgxPlVzZXIgaW5mb3IgLSB7dXNlci5sb2FkaW5nICYmIFwibG9hZGluZy4uLlwifTwvaDE+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBkaXNwYXRjaChmZXRjaFVzZXIoe3VzZXJpZCxhY2Nlc3NUb2tlbn0pKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzXCIsIHJlcyk7XHJcbiAgICAgICAgICByZXMudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSkpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBHZXQgVXNlciBpbmZvcjpcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDx1bD5cclxuICAgICAge3VzZXIudXNlcn1cclxuICAgICAgPC91bD5cclxuICAgICAgICB7LyogPT09PT09ICovfVxyXG4gICAgICAgIDxkaXY+Rm9ybSB1c2VyPC9kaXY+XHJcbiAgICAgICAgPGRpdj5JZCB1c2VyOiB7dXNlcl9pZH08L2Rpdj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsX3RleHRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiID5Vc2VyIG5hbWU6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Vycm9ycy51c2VybmFtZSAmJiB0b3VjaGVkLnVzZXJuYW1lICYmIDxzcGFuPntlcnJvcnMudXNlcm5hbWV9PC9zcGFuPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxfdGV4dFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgPkVtYWlsOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIHRvdWNoZWQuZW1haWwgJiYgPHNwYW4+e2Vycm9ycy5lbWFpbH08L3NwYW4+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBkYXRlPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICB7LyogPT09PT09PT09PT0gKi99XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiTGluayIsInVzZUZvcm1payIsIll1cCIsInVzZVJvdXRlciIsImZldGNoVXNlciIsInNjaGVtYSIsIm9iamVjdCIsInNoYXBlIiwidXNlcm5hbWUiLCJzdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwiVXNlclBhZ2UiLCJkaXNwYXRjaCIsInVzZXIiLCJzdGF0ZSIsInJvdXRlciIsInVzZXJfaWQiLCJxdWVyeSIsImFjY2Vzc3Rva2VuIiwic2V0YWNjZXNzdG9rZW4iLCJhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyaWQiLCJhY2Nlc3NUb2tlbiIsImZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJ2YWxpZGF0aW9uU2NoZW1hIiwib25TdWJtaXQiLCJlcnJvcnMiLCJ0b3VjaGVkIiwidmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlTG9nb3V0IiwiY2xlYXIiLCJwdXNoIiwiZGl2IiwiaHJlZiIsImhyIiwiYnV0dG9uIiwib25DbGljayIsImgxIiwibG9hZGluZyIsInJlcyIsInRoZW4iLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJ1bCIsImZvcm0iLCJtZXRob2QiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsImlkIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[user_id]/index.tsx\n"));

/***/ })

});