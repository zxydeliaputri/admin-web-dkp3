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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Tambah; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/auth-helpers-nextjs */ \"./node_modules/@supabase/auth-helpers-nextjs/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-draft-wysiwyg/dist/react-draft-wysiwyg.css */ \"./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css\");\n/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! draftjs-to-html */ \"./node_modules/draftjs-to-html/lib/draftjs-to-html.js\");\n/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! draft-js */ \"./node_modules/draft-js/lib/Draft.js\");\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_react-draft-wysiwyg_dist_react-draft-wysiwyg_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-draft-wysiwyg */ \"./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js\", 23)).then(function(mod) {\n        return mod.Editor;\n    });\n}, {\n    loadableGenerated: {\n        modules: [\n            \"berita\\\\[id].js -> \" + \"react-draft-wysiwyg\"\n        ]\n    },\n    ssr: false\n});\n_c = Editor;\nvar __N_SSP = true;\nfunction Tambah() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), judul = ref[0], setJudul = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), isi = ref1[0], setIsi = ref1[1];\n    var router = next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter;\n    var id = router.query.id;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {});\n    var getData = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(function() {\n            var ref, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__.supabaseClient.from(\"Berita\").select().eq(\"id\", id)\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var judulStateChange = function(event) {\n        setJudul(event.target.value);\n    };\n    var isiStateChange = function(event) {\n        setIsi(event);\n    };\n    var onSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(function(event) {\n            var deskripsi, ref, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        event.preventDefault();\n                        deskripsi = draftjs_to_html__WEBPACK_IMPORTED_MODULE_7___default()((0,draft_js__WEBPACK_IMPORTED_MODULE_8__.convertToRaw)(isi.getCurrentContent()));\n                        return [\n                            4,\n                            _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__.supabaseClient.from(\"Produk\").insert([\n                                {\n                                    nama: nama,\n                                    deskripsi: deskripsi\n                                }\n                            ])\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function onSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-md-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: [\n                                        \"Berita - Tambah\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/berita\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"btn btn-danger ms-2\",\n                                                children: \"Kembali\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                                                lineNumber: 56,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: onSubmit,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            onChange: judulStateChange,\n                                            placeholder: \"Tulis Judul Berita...\",\n                                            className: \"form-control form-control-lg mb-3\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                                            lineNumber: 60,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Editor, {\n                                            editorState: isi,\n                                            onEditorStateChange: isiStateChange,\n                                            wrapperClassName: \"wrapper-class\",\n                                            editorClassName: \"editor-class\",\n                                            toolbarClassName: \"toolbar-class\",\n                                            editorStyle: {\n                                                border: \"2px solid #eaeaea\",\n                                                marginBottom: \"20px\",\n                                                height: \"200px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"btn btn-success\",\n                                            children: \"Simpan\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\admin-web-dkp3\\\\pages\\\\berita\\\\[id].js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Tambah, \"+LEyGcWQNptLZsq+7PrDWMz5Y4M=\");\n_c1 = Tambah;\nvar _c, _c1;\n$RefreshReg$(_c, \"Editor\");\n$RefreshReg$(_c1, \"Tambah\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzBDLElBQUksRUFBQyxTQUFTO3NEQUNsQiw0RUFBQ0MsR0FBQztnREFBQ0gsU0FBUyxFQUFDLHFCQUFxQjswREFBQyxTQUFPOzs7OztvREFBSTs7Ozs7Z0RBQ3pDOzs7Ozs7d0NBQ0o7OENBQ0wsOERBQUNJLE1BQUk7b0NBQUNaLFFBQVEsRUFBRUEsUUFBUTs7c0RBQ3RCLDhEQUFDYSxPQUFLOzRDQUFDQyxJQUFJLEVBQUMsTUFBTTs0Q0FBQ0MsUUFBUSxFQUFFcEIsZ0JBQWdCOzRDQUFFcUIsV0FBVyxFQUFDLHVCQUF1Qjs0Q0FBQ1IsU0FBUyxFQUFDLG1DQUFtQzs7Ozs7Z0RBQUc7c0RBTW5JLDhEQUFDL0IsTUFBTTs0Q0FDTHdDLFdBQVcsRUFBRWpDLEdBQUc7NENBQ2hCa0MsbUJBQW1CLEVBQUVuQixjQUFjOzRDQUNuQ29CLGdCQUFnQixFQUFDLGVBQWU7NENBQ2hDQyxlQUFlLEVBQUMsY0FBYzs0Q0FDOUJDLGdCQUFnQixFQUFDLGVBQWU7NENBQ2hDQyxXQUFXLEVBQUU7Z0RBQ1hDLE1BQU0sRUFBRSxtQkFBbUI7Z0RBQzNCQyxZQUFZLEVBQUUsTUFBTTtnREFDcEJDLE1BQU0sRUFBRSxPQUFPOzZDQUNoQjs7Ozs7Z0RBQ0Q7c0RBQ0YsOERBQUNDLFFBQU07NENBQUNaLElBQUksRUFBQyxRQUFROzRDQUFDTixTQUFTLEVBQUMsaUJBQWlCO3NEQUFDLFFBRWxEOzs7OztnREFBUzs7Ozs7O3dDQUNKOzs7Ozs7Z0NBQ0g7Ozs7OzRCQUNGOzs7Ozt3QkFDRjs7Ozs7b0JBQ0U7O29CQUNULENBQ0g7QUFDSixDQUFDO0dBM0V1QjNCLE1BQU07QUFBTkEsTUFBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9iZXJpdGEvW2lkXS5qcz85MGE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN1cGFiYXNlQ2xpZW50LCB3aXRoUGFnZUF1dGggfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtaGVscGVycy1uZXh0anNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IFwicmVhY3QtZHJhZnQtd3lzaXd5Zy9kaXN0L3JlYWN0LWRyYWZ0LXd5c2l3eWcuY3NzXCI7XHJcbmltcG9ydCBkcmFmdFRvSHRtbCBmcm9tIFwiZHJhZnRqcy10by1odG1sXCI7XHJcbmltcG9ydCB7IGNvbnZlcnRGcm9tUmF3LCBjb252ZXJ0VG9SYXcgfSBmcm9tIFwiZHJhZnQtanNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBFZGl0b3IgPSBkeW5hbWljKCgpID0+IGltcG9ydChcInJlYWN0LWRyYWZ0LXd5c2l3eWdcIikudGhlbigobW9kKSA9PiBtb2QuRWRpdG9yKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFtYmFoKCkge1xyXG4gIGNvbnN0IFtqdWR1bCwgc2V0SnVkdWxdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaXNpLCBzZXRJc2ldID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXJcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQ2xpZW50XHJcbiAgICAgICAgLmZyb20oXCJCZXJpdGFcIilcclxuICAgICAgICAuc2VsZWN0KClcclxuICAgICAgICAuZXEoJ2lkJywgaWQpXHJcbiAgfVxyXG5cclxuICBjb25zdCBqdWR1bFN0YXRlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRKdWR1bChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzaVN0YXRlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRJc2koZXZlbnQpO1xyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGtpdGEgbWFzdWtpbiBrZSBzdXBhYmFzZVxyXG4gICAgbGV0IGRlc2tyaXBzaSA9IGRyYWZ0VG9IdG1sKGNvbnZlcnRUb1Jhdyhpc2kuZ2V0Q3VycmVudENvbnRlbnQoKSkpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VDbGllbnQuZnJvbShcIlByb2R1a1wiKS5pbnNlcnQoW3sgbmFtYTogbmFtYSwgZGVza3JpcHNpOiBkZXNrcmlwc2kgfV0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2IC8+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIEJlcml0YSAtIFRhbWJhaFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9iZXJpdGFcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgbXMtMlwiPktlbWJhbGk8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2p1ZHVsU3RhdGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiVHVsaXMgSnVkdWwgQmVyaXRhLi4uXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZyBtYi0zXCIgLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2ZvdG9TdGF0ZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICBlZGl0b3JTdGF0ZT17aXNpfVxyXG4gICAgICAgICAgICAgICAgICBvbkVkaXRvclN0YXRlQ2hhbmdlPXtpc2lTdGF0ZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cIndyYXBwZXItY2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICBlZGl0b3JDbGFzc05hbWU9XCJlZGl0b3ItY2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICB0b29sYmFyQ2xhc3NOYW1lPVwidG9vbGJhci1jbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgIGVkaXRvclN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjZWFlYWVhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgU2ltcGFuXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3aXRoUGFnZUF1dGgoeyByZWRpcmVjdFRvOiBcIi9zaWduaW5cIiB9KTsiXSwibmFtZXMiOlsic3VwYWJhc2VDbGllbnQiLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOYXYiLCJkeW5hbWljIiwiZHJhZnRUb0h0bWwiLCJjb252ZXJ0RnJvbVJhdyIsImNvbnZlcnRUb1JhdyIsInVzZVJvdXRlciIsIkVkaXRvciIsInRoZW4iLCJtb2QiLCJzc3IiLCJUYW1iYWgiLCJqdWR1bCIsInNldEp1ZHVsIiwiaXNpIiwic2V0SXNpIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImdldERhdGEiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJqdWR1bFN0YXRlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlzaVN0YXRlQ2hhbmdlIiwib25TdWJtaXQiLCJkZXNrcmlwc2kiLCJwcmV2ZW50RGVmYXVsdCIsImdldEN1cnJlbnRDb250ZW50IiwiaW5zZXJ0IiwibmFtYSIsInNlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImhyZWYiLCJhIiwiZm9ybSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJlZGl0b3JTdGF0ZSIsIm9uRWRpdG9yU3RhdGVDaGFuZ2UiLCJ3cmFwcGVyQ2xhc3NOYW1lIiwiZWRpdG9yQ2xhc3NOYW1lIiwidG9vbGJhckNsYXNzTmFtZSIsImVkaXRvclN0eWxlIiwiYm9yZGVyIiwibWFyZ2luQm90dG9tIiwiaGVpZ2h0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/berita/[id].js\n"));

/***/ })

});