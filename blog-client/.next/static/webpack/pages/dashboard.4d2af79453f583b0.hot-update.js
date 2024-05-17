"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./pages/dashboard.tsx":
/*!*****************************!*\
  !*** ./pages/dashboard.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/esm/index.js\");\n/* harmony import */ var _styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Dashboard.module.css */ \"./styles/Dashboard.module.css\");\n/* harmony import */ var _styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Card */ \"./components/Card.tsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n// pages/dashboard.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (!token) {\n            router.push(\"/login\");\n        }\n    }, []);\n    const handlePost = async (e)=>{\n        e.preventDefault();\n        const token = localStorage.getItem(\"token\");\n        if (!token) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(\"Not Authorized!!\");\n            return;\n        }\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://localhost:3000/posts\", {\n                title,\n                content\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            fetchPosts();\n            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(\"Posted Successfully !!\");\n        } catch (e) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(\"Server Error !!\");\n        }\n    };\n    const fetchPosts = async ()=>{\n        const token = localStorage.getItem(\"token\");\n        if (token) {\n            const { userId } = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__.jwtDecode)(token);\n            const res = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:3000/posts?author=\".concat(userId));\n            let posts = res.data;\n            setPosts(posts);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPosts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\blog_platform\\\\blog-client\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n                onSubmit: (e)=>handlePost(e),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        required: true,\n                        className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                        value: title,\n                        onChange: (e)=>setTitle(e.target.value),\n                        placeholder: \"Title\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\blog_platform\\\\blog-client\\\\pages\\\\dashboard.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                        required: true,\n                        value: content,\n                        onChange: (e)=>setContent(e.target.value),\n                        placeholder: \"Content\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\blog_platform\\\\blog-client\\\\pages\\\\dashboard.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_4___default().flex),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                            type: \"submit\",\n                            children: \"Post\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Dev\\\\blog_platform\\\\blog-client\\\\pages\\\\dashboard.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\blog_platform\\\\blog-client\\\\pages\\\\dashboard.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Dev\\\\blog_platform\\\\blog-client\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_4___default().postList),\n                children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        post: post\n                    }, key, false, {\n                        fileName: \"C:\\\\Dev\\\\blog_platform\\\\blog-client\\\\pages\\\\dashboard.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\blog_platform\\\\blog-client\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Dev\\\\blog_platform\\\\blog-client\\\\pages\\\\dashboard.tsx\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Dashboard, \"c0ViWXX4qkrp+TvxSfvk8kZK37Q=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZW50IjpbIi8vIHBhZ2VzL2Rhc2hib2FyZC50c3hcclxuaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9EYXNoYm9hcmQubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IERlY29kZWRUb2tlbiB9IGZyb20gJ0AvdHlwZXMvQXV0aCc7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tICdAL3R5cGVzL1Bvc3QnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAL2NvbXBvbmVudHMvQ2FyZCc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8UG9zdFtdPihbXSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBvc3QgPSBhc3luYyAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIGlmKCF0b2tlbil7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiTm90IEF1dGhvcml6ZWQhIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bvc3RzJywgeyB0aXRsZSwgY29udGVudCB9LCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZmV0Y2hQb3N0cygpO1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUG9zdGVkIFN1Y2Nlc3NmdWxseSAhIVwiKTtcclxuXHJcbiAgICAgICAgfWNhdGNoKGU6YW55KXtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJTZXJ2ZXIgRXJyb3IgISFcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZldGNoUG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlcklkIH0gPSBqd3REZWNvZGU8RGVjb2RlZFRva2VuPih0b2tlbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bvc3RzP2F1dGhvcj0ke3VzZXJJZH1gKTtcclxuICAgICAgICAgICAgbGV0IHBvc3RzOiBQb3N0W10gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgc2V0UG9zdHMocG9zdHMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaFBvc3RzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoMT5EYXNoYm9hcmQ8L2gxPlxyXG5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVQb3N0KGUpfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCAgdHlwZT1cInRleHRcIiByZXF1aXJlZCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17ZSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiVGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSByZXF1aXJlZCB2YWx1ZT17Y29udGVudH0gb25DaGFuZ2U9e2UgPT4gc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiQ29udGVudFwiICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gdHlwZT0nc3VibWl0Jz5Qb3N0PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMucG9zdExpc3R9PlxyXG4gICAgICAgICAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBwb3N0PXtwb3N0fSBrZXk9e2tleX0gLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJqd3REZWNvZGUiLCJzdHlsZXMiLCJDYXJkIiwidG9hc3QiLCJEYXNoYm9hcmQiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJwb3N0cyIsInNldFBvc3RzIiwicm91dGVyIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCIsImhhbmRsZVBvc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJlcnJvciIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImZldGNoUG9zdHMiLCJzdWNjZXNzIiwidXNlcklkIiwicmVzIiwiZ2V0IiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicmVxdWlyZWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsImZsZXgiLCJidXR0b24iLCJ1bCIsInBvc3RMaXN0IiwibWFwIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.tsx\n"));

/***/ })

});