"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/berita/[id]",{

/***/ "./pages/berita/[id].js":
/*!******************************!*\
  !*** ./pages/berita/[id].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Tambah; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/auth-helpers-nextjs */ \"./node_modules/@supabase/auth-helpers-nextjs/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-draft-wysiwyg/dist/react-draft-wysiwyg.css */ \"./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css\");\n/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! draftjs-to-html */ \"./node_modules/draftjs-to-html/lib/draftjs-to-html.js\");\n/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! draft-js */ \"./node_modules/draft-js/lib/Draft.js\");\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_react-draft-wysiwyg_dist_react-draft-wysiwyg_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-draft-wysiwyg */ \"./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js\", 23)).then(function(mod) {\n        return mod.Editor;\n    });\n}, {\n    loadableGenerated: {\n        modules: [\n            \"berita\\\\[id].js -> \" + \"react-draft-wysiwyg\"\n        ]\n    },\n    ssr: false\n});\n_c = Editor;\nvar __N_SSP = true;\nfunction Tambah() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), judul = ref[0], setJudul = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), isi = ref1[0], setIsi = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {});\n    var getData = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(function() {\n            var ref, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__.supabaseClient.from(\"Berita\").select().eq(\"id\", id)\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var judulStateChange = function(event) {\n        setJudul(event.target.value);\n    };\n    var isiStateChange = function(event) {\n        setIsi(event);\n    };\n    var onSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(function(event) {\n            var deskripsi, ref, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        event.preventDefault();\n                        deskripsi = draftjs_to_html__WEBPACK_IMPORTED_MODULE_7___default()((0,draft_js__WEBPACK_IMPORTED_MODULE_8__.convertToRaw)(isi.getCurrentContent()));\n                        return [\n                            4,\n                            _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__.supabaseClient.from(\"Produk\").insert([\n                                {\n                                    nama: nama,\n                                    deskripsi: deskripsi\n                                }\n                            ])\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function onSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-md-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: [\n                                        \"Berita - Tambah\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/berita\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"btn btn-danger ms-2\",\n                                                children: \"Kembali\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                                                lineNumber: 53,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: onSubmit,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            onChange: judulStateChange,\n                                            placeholder: \"Tulis Judul Berita...\",\n                                            className: \"form-control form-control-lg mb-3\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Editor, {\n                                            editorState: isi,\n                                            onEditorStateChange: isiStateChange,\n                                            wrapperClassName: \"wrapper-class\",\n                                            editorClassName: \"editor-class\",\n                                            toolbarClassName: \"toolbar-class\",\n                                            editorStyle: {\n                                                border: \"2px solid #eaeaea\",\n                                                marginBottom: \"20px\",\n                                                height: \"200px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"btn btn-success\",\n                                            children: \"Simpan\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Tambah, \"+LEyGcWQNptLZsq+7PrDWMz5Y4M=\");\n_c1 = Tambah;\nvar _c, _c1;\n$RefreshReg$(_c, \"Editor\");\n$RefreshReg$(_c1, \"Tambah\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztnREFDekM7Ozs7Ozt3Q0FDSjs4Q0FDTCw4REFBQ0ksTUFBSTtvQ0FBQ1osUUFBUSxFQUFFQSxRQUFROztzREFDdEIsOERBQUNhLE9BQUs7NENBQUNDLElBQUksRUFBQyxNQUFNOzRDQUFDQyxRQUFRLEVBQUVwQixnQkFBZ0I7NENBQUVxQixXQUFXLEVBQUMsdUJBQXVCOzRDQUFDUixTQUFTLEVBQUMsbUNBQW1DOzs7OztnREFBRztzREFNbkksOERBQUM3QixNQUFNOzRDQUNMc0MsV0FBVyxFQUFFL0IsR0FBRzs0Q0FDaEJnQyxtQkFBbUIsRUFBRW5CLGNBQWM7NENBQ25Db0IsZ0JBQWdCLEVBQUMsZUFBZTs0Q0FDaENDLGVBQWUsRUFBQyxjQUFjOzRDQUM5QkMsZ0JBQWdCLEVBQUMsZUFBZTs0Q0FDaENDLFdBQVcsRUFBRTtnREFDWEMsTUFBTSxFQUFFLG1CQUFtQjtnREFDM0JDLFlBQVksRUFBRSxNQUFNO2dEQUNwQkMsTUFBTSxFQUFFLE9BQU87NkNBQ2hCOzs7OztnREFDRDtzREFDRiw4REFBQ0MsUUFBTTs0Q0FBQ1osSUFBSSxFQUFDLFFBQVE7NENBQUNOLFNBQVMsRUFBQyxpQkFBaUI7c0RBQUMsUUFFbEQ7Ozs7O2dEQUFTOzs7Ozs7d0NBQ0o7Ozs7OztnQ0FDSDs7Ozs7NEJBQ0Y7Ozs7O3dCQUNGOzs7OztvQkFDRTs7b0JBQ1QsQ0FDSDtBQUNKLENBQUM7R0F6RXVCekIsTUFBTTtBQUFOQSxNQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jlcml0YS9baWRdLmpzPzkwYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3VwYWJhc2VDbGllbnQsIHdpdGhQYWdlQXV0aCB9IGZyb20gXCJAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLW5leHRqc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1kcmFmdC13eXNpd3lnL2Rpc3QvcmVhY3QtZHJhZnQtd3lzaXd5Zy5jc3NcIjtcclxuaW1wb3J0IGRyYWZ0VG9IdG1sIGZyb20gXCJkcmFmdGpzLXRvLWh0bWxcIjtcclxuaW1wb3J0IHsgY29udmVydEZyb21SYXcsIGNvbnZlcnRUb1JhdyB9IGZyb20gXCJkcmFmdC1qc1wiO1xyXG5cclxuY29uc3QgRWRpdG9yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1kcmFmdC13eXNpd3lnXCIpLnRoZW4oKG1vZCkgPT4gbW9kLkVkaXRvciksIHsgc3NyOiBmYWxzZSB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhbWJhaCgpIHtcclxuICBjb25zdCBbanVkdWwsIHNldEp1ZHVsXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2lzaSwgc2V0SXNpXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUNsaWVudFxyXG4gICAgICAgIC5mcm9tKFwiQmVyaXRhXCIpXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcbiAgICAgICAgLmVxKCdpZCcsIGlkKVxyXG4gIH1cclxuXHJcbiAgY29uc3QganVkdWxTdGF0ZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0SnVkdWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc2lTdGF0ZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0SXNpKGV2ZW50KTtcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBraXRhIG1hc3VraW4ga2Ugc3VwYWJhc2VcclxuICAgIGxldCBkZXNrcmlwc2kgPSBkcmFmdFRvSHRtbChjb252ZXJ0VG9SYXcoaXNpLmdldEN1cnJlbnRDb250ZW50KCkpKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQ2xpZW50LmZyb20oXCJQcm9kdWtcIikuaW5zZXJ0KFt7IG5hbWE6IG5hbWEsIGRlc2tyaXBzaTogZGVza3JpcHNpIH1dKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdiAvPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICBCZXJpdGEgLSBUYW1iYWhcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmVyaXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIG1zLTJcIj5LZW1iYWxpPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtqdWR1bFN0YXRlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIlR1bGlzIEp1ZHVsIEJlcml0YS4uLlwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGcgbWItM1wiIC8+XHJcbiAgICAgICAgICAgICAgICB7LyogPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3RvU3RhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgZWRpdG9yU3RhdGU9e2lzaX1cclxuICAgICAgICAgICAgICAgICAgb25FZGl0b3JTdGF0ZUNoYW5nZT17aXNpU3RhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJ3cmFwcGVyLWNsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgZWRpdG9yQ2xhc3NOYW1lPVwiZWRpdG9yLWNsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgdG9vbGJhckNsYXNzTmFtZT1cInRvb2xiYXItY2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICBlZGl0b3JTdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgI2VhZWFlYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFNpbXBhblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd2l0aFBhZ2VBdXRoKHsgcmVkaXJlY3RUbzogXCIvc2lnbmluXCIgfSk7Il0sIm5hbWVzIjpbInN1cGFiYXNlQ2xpZW50IiwiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2IiwiZHluYW1pYyIsImRyYWZ0VG9IdG1sIiwiY29udmVydEZyb21SYXciLCJjb252ZXJ0VG9SYXciLCJFZGl0b3IiLCJ0aGVuIiwibW9kIiwic3NyIiwiVGFtYmFoIiwianVkdWwiLCJzZXRKdWR1bCIsImlzaSIsInNldElzaSIsImdldERhdGEiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJpZCIsImp1ZHVsU3RhdGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaXNpU3RhdGVDaGFuZ2UiLCJvblN1Ym1pdCIsImRlc2tyaXBzaSIsInByZXZlbnREZWZhdWx0IiwiZ2V0Q3VycmVudENvbnRlbnQiLCJpbnNlcnQiLCJuYW1hIiwic2VjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwiaHJlZiIsImEiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImVkaXRvclN0YXRlIiwib25FZGl0b3JTdGF0ZUNoYW5nZSIsIndyYXBwZXJDbGFzc05hbWUiLCJlZGl0b3JDbGFzc05hbWUiLCJ0b29sYmFyQ2xhc3NOYW1lIiwiZWRpdG9yU3R5bGUiLCJib3JkZXIiLCJtYXJnaW5Cb3R0b20iLCJoZWlnaHQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/berita/[id].js\n"));

/***/ })

});