"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/berita",{

/***/ "./pages/berita/index.js":
/*!*******************************!*\
  !*** ./pages/berita/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-helpers-nextjs */ \"./node_modules/@supabase/auth-helpers-nextjs/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    var _this = this;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), items = ref[0], setItems = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getData();\n    }, []);\n    var getData = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function() {\n            var ref, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2__.supabaseClient.from(\"Produk\").select()\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        setItems(data);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"Produk\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        href: \"/informasi/tambah\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"btn btn-success\",\n                                            children: \"Tambah\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"table-responsive\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                    className: \"table\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        children: \"FOTO\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                                        lineNumber: 37,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        children: \"NAMA PRODUK\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                                        lineNumber: 38,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        children: \"TANGGAL\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                                        lineNumber: 39,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        children: \"UBAH\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                                        lineNumber: 40,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                            children: items.map(function(item, i) {\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            children: item.foto != \"-\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                                src: item.foto,\n                                                                width: 100,\n                                                                height: 100,\n                                                                layout: \"responsive\",\n                                                                alt: \"foto\",\n                                                                priority: true\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                                                lineNumber: 49,\n                                                                columnNumber: 57\n                                                            }, _this) : \"gaada fotonya\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                                            lineNumber: 47,\n                                                            columnNumber: 49\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            children: item.nama\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                                            lineNumber: 59,\n                                                            columnNumber: 49\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            children: item.created_at\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                                            lineNumber: 60,\n                                                            columnNumber: 49\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                                href: \"/informasi/tambah\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                    className: \"btn btn-success\",\n                                                                    children: \"Tambah\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                                                    lineNumber: 63,\n                                                                    columnNumber: 57\n                                                                }, _this)\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                                                lineNumber: 62,\n                                                                columnNumber: 53\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                                            lineNumber: 61,\n                                                            columnNumber: 49\n                                                        }, _this)\n                                                    ]\n                                                }, i, true, {\n                                                    fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 45\n                                                }, _this);\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7eURBb0JMLENBQ1I7NENBQ0wsQ0FBQyxDQUFDOzs7OztnREFDRTs7Ozs7O3dDQUNKOzs7OztvQ0FDTjs7Ozs7OzRCQUNKOzs7Ozt3QkFDSjs7Ozs7b0JBQ0o7O29CQUNQLENBQ047QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jlcml0YS9pbmRleC5qcz9hOTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHN1cGFiYXNlQ2xpZW50LCB3aXRoUGFnZUF1dGggfSBmcm9tICdAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLW5leHRqcydcclxuaW1wb3J0IE5hdiBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdidcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUNsaWVudFxyXG4gICAgICAgICAgICAuZnJvbSgnUHJvZHVrJylcclxuICAgICAgICAgICAgLnNlbGVjdCgpXHJcbiAgICAgICAgc2V0SXRlbXMoZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOYXYgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTEyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2luZm9ybWFzaS90YW1iYWhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2J0biBidG4tc3VjY2Vzcyc+VGFtYmFoPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFibGUtcmVzcG9uc2l2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Rk9UTzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TkFNQSBQUk9EVUs8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRBTkdHQUw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlVCQUg8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5mb3RvICE9IFwiLVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5mb3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZm90b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogXCJnYWFkYSBmb3RvbnlhXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5uYW1hfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5jcmVhdGVkX2F0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5mb3JtYXNpL3RhbWJhaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nYnRuIGJ0bi1zdWNjZXNzJz5UYW1iYWg8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd2l0aFBhZ2VBdXRoKHsgcmVkaXJlY3RUbzogJy9zaWduaW4nIH0pIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdXBhYmFzZUNsaWVudCIsIk5hdiIsIkltYWdlIiwiTGluayIsIml0ZW1zIiwic2V0SXRlbXMiLCJnZXREYXRhIiwiZGF0YSIsImVycm9yIiwiZnJvbSIsInNlbGVjdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaHJlZiIsImEiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwiaXRlbSIsImkiLCJ0ZCIsImZvdG8iLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImxheW91dCIsImFsdCIsInByaW9yaXR5IiwibmFtYSIsImNyZWF0ZWRfYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/berita/index.js\n"));

/***/ })

});