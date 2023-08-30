"use strict";
(() => {
var exports = {};
exports.id = 469;
exports.ids = [469];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 7160:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 2336:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 7887:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 120:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 8231:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 982:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 9618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 8423:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 6897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'services',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3324)), "/Users/mahesh/Program/React/smart/smart/src/app/services/page.tsx"],
          
        }]
      },
        {
        
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3406)), "/Users/mahesh/Program/React/smart/smart/src/app/layout.tsx"],
'loading': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8924)), "/Users/mahesh/Program/React/smart/smart/src/app/loading.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["/Users/mahesh/Program/React/smart/smart/src/app/services/page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/services/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/services/page",
        pathname: "/services",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 3324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/app/components/services/Grades8to10.tsx

const Grades8to10 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "tab-pane fade show active",
        id: "v-pills-nextgen",
        role: "tabpanel",
        "aria-labelledby": "v-pills-nextgen-tab",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "d-md-flex",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "one-forth align-self-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/student8to10.png",
                        className: "img-fluid",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "one-half ml-md-5 align-self-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "accordion",
                        id: "accordionExample",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-header",
                                        id: "headingOne",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "mb-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "btn btn-link",
                                                type: "button",
                                                "data-toggle": "collapse",
                                                "data-target": "#collapseOne",
                                                "aria-expanded": "true",
                                                "aria-controls": "collapseOne",
                                                children: "PROFILE EVALUATION"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "collapseOne",
                                        className: "collapse show",
                                        "aria-labelledby": "headingOne",
                                        "data-parent": "#accordionExample",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "card-body",
                                            children: "Questions about streams only via Email"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-header",
                                        id: "headingTwo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "mb-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "btn btn-link collapsed",
                                                type: "button",
                                                "data-toggle": "collapse",
                                                "data-target": "#collapseTwo",
                                                "aria-expanded": "false",
                                                "aria-controls": "collapseTwo",
                                                children: "COUNSELLING SESSION"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "collapseTwo",
                                        className: "collapse",
                                        "aria-labelledby": "headingTwo",
                                        "data-parent": "#accordionExample",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "card-body",
                                            children: "Questions about streams"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-header",
                                        id: "headingThree",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "mb-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "btn btn-link collapsed",
                                                type: "button",
                                                "data-toggle": "collapse",
                                                "data-target": "#collapseThree",
                                                "aria-expanded": "false",
                                                "aria-controls": "collapseThree",
                                                children: "COUNSELLING PLUS CAREER ASSESMENT"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "collapseThree",
                                        className: "collapse",
                                        "aria-labelledby": "headingThree",
                                        "data-parent": "#accordionExample",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "card-body",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Questions on India and Abroad Colleges"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "College admissions and scholarships advice"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Understanding personality"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Report with three key careers indication"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-header",
                                        id: "headingThree",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "mb-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "btn btn-link collapsed",
                                                type: "button",
                                                "data-toggle": "collapse",
                                                "data-target": "#collapseFour",
                                                "aria-expanded": "false",
                                                "aria-controls": "collapseFour",
                                                children: "COUNSELLING PLUS CAREER ASSESMENT"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "collapseFour",
                                        className: "collapse",
                                        "aria-labelledby": "headingThree",
                                        "data-parent": "#accordionExample",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "card-body",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Questions on India and Abroad Colleges"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "College admissions and scholarships advice"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "14 page report with three key careers indication"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "5 -6 sessions a year"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Guidance on the admission test process"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Test, pattern syllabus and finalizing best strategy"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Short listing colleges: Aspiration, Best-fit and Safe fit"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "College List servicesFor atleast 2 Career options"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/app/components/services/Grades11To12.tsx

const Grades11To12 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "tab-pane fade",
        id: "v-pills-performance",
        role: "tabpanel",
        "aria-labelledby": "v-pills-performance-tab",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "d-md-flex",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "one-forth order-last align-self-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/student11to12.png",
                        className: "img-fluid",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "one-half order-first mr-md-5 align-self-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "accordion",
                        id: "accordionExample",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-header",
                                        id: "headingOne",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "mb-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "btn btn-link",
                                                type: "button",
                                                "data-toggle": "collapse",
                                                "data-target": "#collapseOne1112",
                                                "aria-expanded": "true",
                                                "aria-controls": "collapseOne1112",
                                                children: "INTERNATIONAL COMPLETE PACKAGE"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "collapseOne1112",
                                        className: "collapse show",
                                        "aria-labelledby": "headingOne",
                                        "data-parent": "#accordionExample",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "card-body",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Questions on India and Abroad Colleges"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "College admissions and scholarships advice"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Understanding personality"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "14 page report with three key careers indication"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "5 -6 sessions a year"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Guidance on the admission test process"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Test ,pattern syllabus and finalizing best strategy"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Short listing colleges :Aspiration, Best -fit and Safe fit"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "College List servicesFor atleast 2 Career options"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Pre Application services"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Guidance on critical documents like Cvs/Portfolio/LOR etc"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Providing training on how to write strong SOP's /Essay and CV"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Scholarships ,options available for arranging funds"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Guidance on Visa Application ,documents and finances , mock interviews"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-header",
                                        id: "headingTwo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "mb-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "btn btn-link collapsed",
                                                type: "button",
                                                "data-toggle": "collapse",
                                                "data-target": "#collapseTwo1112",
                                                "aria-expanded": "false",
                                                "aria-controls": "collapseTwo",
                                                children: "ONLINE PYSCHOMETRIC TEST"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "collapseTwo1112",
                                        className: "collapse",
                                        "aria-labelledby": "headingTwo",
                                        "data-parent": "#accordionExample",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "card-body",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Detailed online report provided for each test"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Ideal Career Test"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Stream Selector Test"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Personality Type , Multiple Intelligence and Learning Styles Test"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Engineering Branch Selector Test"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Humanities Career Selector"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Commerce Career Selector"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "One online session to explain the report"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-header",
                                        id: "headingThree",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "mb-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "btn btn-link collapsed",
                                                type: "button",
                                                "data-toggle": "collapse",
                                                "data-target": "#collapseThree1112",
                                                "aria-expanded": "false",
                                                "aria-controls": "collapseThree",
                                                children: "COUNSELLING SESSION"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "collapseThree1112",
                                        className: "collapse",
                                        "aria-labelledby": "headingThree",
                                        "data-parent": "#accordionExample",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "card-body",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "list-group",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "list-group-item",
                                                    children: "Questions about streams"
                                                })
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-header",
                                        id: "headingThree",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "mb-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "btn btn-link collapsed",
                                                type: "button",
                                                "data-toggle": "collapse",
                                                "data-target": "#collapseFour1112",
                                                "aria-expanded": "false",
                                                "aria-controls": "collapseFour1112",
                                                children: "COUNSELLING PLUS CAREER ASSESMENT"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "collapseFour1112",
                                        className: "collapse",
                                        "aria-labelledby": "headingThree",
                                        "data-parent": "#accordionExample",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "card-body",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Questions on India and Abroad Colleges"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "College admissions and scholarships advice"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Understanding personality"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-group-item",
                                                        children: "Report with three key careers indication"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/app/components/services/SubjectSelector.tsx

const SubjectSelector = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "tab-pane fade",
        id: "v-pills-effect",
        role: "tabpanel",
        "aria-labelledby": "v-pills-effect-tab",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "d-md-flex",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "one-forth align-self-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/subjectselector.png",
                        className: "img-fluid",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "one-half ml-md-5 align-self-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "card-header",
                                    id: "headingOne",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "mb-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "btn btn-link",
                                            type: "button",
                                            "data-toggle": "collapse",
                                            "data-target": "#collapseOneSubject",
                                            "aria-expanded": "true",
                                            "aria-controls": "collapseOneSubject",
                                            children: "Know Yourself"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "collapseOneSubject",
                                    className: "collapse show",
                                    "aria-labelledby": "headingOne",
                                    "data-parent": "#accordionExample",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-body",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "list-group",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "list-group-item",
                                                children: "Explore your interests, strengths, and passions."
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "card-header",
                                    id: "headingTwo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "mb-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "btn btn-link collapsed",
                                            type: "button",
                                            "data-toggle": "collapse",
                                            "data-target": "#collapseTwoSubject",
                                            "aria-expanded": "false",
                                            "aria-controls": "collapseTwo",
                                            children: "Discover Careers"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "collapseTwoSubject",
                                    className: "collapse",
                                    "aria-labelledby": "headingTwo",
                                    "data-parent": "#accordionExample",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-body",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "list-group",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "list-group-item",
                                                children: "Research various careers linked to different subjects."
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "card-header",
                                    id: "headingTwo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "mb-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "btn btn-link collapsed",
                                            type: "button",
                                            "data-toggle": "collapse",
                                            "data-target": "#collapseThirdSubject",
                                            "aria-expanded": "false",
                                            "aria-controls": "collapseTwo",
                                            children: "Talk to Pros"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "collapseThirdSubject",
                                    className: "collapse",
                                    "aria-labelledby": "headingTwo",
                                    "data-parent": "#accordionExample",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-body",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "list-group",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "list-group-item",
                                                children: "Interact with professionals to learn about real-world jobs."
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "card-header",
                                    id: "headingTwo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "mb-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "btn btn-link collapsed",
                                            type: "button",
                                            "data-toggle": "collapse",
                                            "data-target": "#collapseFourSubject",
                                            "aria-expanded": "false",
                                            "aria-controls": "collapseTwo",
                                            children: "Recognize Skills"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "collapseFourSubject",
                                    className: "collapse",
                                    "aria-labelledby": "headingTwo",
                                    "data-parent": "#accordionExample",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-body",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "list-group",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "list-group-item",
                                                children: "Identify your skills and how they align with subjects."
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "card-header",
                                    id: "headingTwo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "mb-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "btn btn-link collapsed",
                                            type: "button",
                                            "data-toggle": "collapse",
                                            "data-target": "#collapseFiveSubject",
                                            "aria-expanded": "false",
                                            "aria-controls": "collapseTwo",
                                            children: "Dream Big"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "collapseFiveSubject",
                                    className: "collapse",
                                    "aria-labelledby": "headingTwo",
                                    "data-parent": "#accordionExample",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-body",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "list-group",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "list-group-item",
                                                children: "Consider your long-term goals and the subjects they involve."
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/app/components/services/CollegeApplication.tsx

const CollegeApplication = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "tab-pane fade",
        id: "college-application",
        role: "tabpanel",
        "aria-labelledby": "v-pills-effect-tab",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "d-md-flex",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "one-forth align-self-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/college.png",
                        className: "img-fluid",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "one-half ml-md-5 align-self-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "card-header",
                                    id: "headingOne",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "mb-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "btn btn-link",
                                            type: "button",
                                            "data-toggle": "collapse",
                                            "data-target": "#collapseOneCollege",
                                            "aria-expanded": "true",
                                            "aria-controls": "collapseOneCollege",
                                            children: "Step-by-Step Support"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "collapseOneCollege",
                                    className: "collapse show",
                                    "aria-labelledby": "headingOne",
                                    "data-parent": "#accordionExample",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-body",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "list-group",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "list-group-item",
                                                children: "Get guidance on tackling each application hurdle, one at a time."
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "card-header",
                                    id: "headingTwo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "mb-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "btn btn-link collapsed",
                                            type: "button",
                                            "data-toggle": "collapse",
                                            "data-target": "#collapseTwoSubjectCollege",
                                            "aria-expanded": "false",
                                            "aria-controls": "collapseTwo",
                                            children: "Expert Help"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "collapseTwoSubjectCollege",
                                    className: "collapse",
                                    "aria-labelledby": "headingTwo",
                                    "data-parent": "#accordionExample",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-body",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "list-group",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "list-group-item",
                                                children: "Reach out for assistance from experienced counselors and mentors."
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "card-header",
                                    id: "headingTwo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "mb-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "btn btn-link collapsed",
                                            type: "button",
                                            "data-toggle": "collapse",
                                            "data-target": "#collapseThirdCollege",
                                            "aria-expanded": "false",
                                            "aria-controls": "collapseTwo",
                                            children: "Break It Down"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "collapseThirdCollege",
                                    className: "collapse",
                                    "aria-labelledby": "headingTwo",
                                    "data-parent": "#accordionExample",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-body",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "list-group",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "list-group-item",
                                                children: "We'll help you break the application process into manageable tasks."
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "card-header",
                                    id: "headingTwo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "mb-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "btn btn-link collapsed",
                                            type: "button",
                                            "data-toggle": "collapse",
                                            "data-target": "#collapseFourCollege",
                                            "aria-expanded": "false",
                                            "aria-controls": "collapseTwo",
                                            children: "Resource Hub"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "collapseFourSubject",
                                    className: "collapse",
                                    "aria-labelledby": "headingTwo",
                                    "data-parent": "#accordionExample",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-body",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "list-group",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "list-group-item",
                                                children: "Access a variety of templates, guides, and university materials."
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "card-header",
                                    id: "headingTwo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "mb-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "btn btn-link collapsed",
                                            type: "button",
                                            "data-toggle": "collapse",
                                            "data-target": "#collapseFiveCollege",
                                            "aria-expanded": "false",
                                            "aria-controls": "collapseTwo",
                                            children: "Showcase Your Best"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "collapseFiveCollege",
                                    className: "collapse",
                                    "aria-labelledby": "headingTwo",
                                    "data-parent": "#accordionExample",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-body",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "list-group",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "list-group-item",
                                                children: "Highlight your strengths, achievements, and passions effectively."
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "card-header",
                                    id: "headingTwo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "mb-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "btn btn-link collapsed",
                                            type: "button",
                                            "data-toggle": "collapse",
                                            "data-target": "#collapseSixCollege",
                                            "aria-expanded": "false",
                                            "aria-controls": "collapseTwo",
                                            children: "Personalized Essays"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "collapseSixCollege",
                                    className: "collapse",
                                    "aria-labelledby": "headingTwo",
                                    "data-parent": "#accordionExample",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-body",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "list-group",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "list-group-item",
                                                children: "Craft compelling essays that reflect your uniqueness and ambitions."
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "card-header",
                                    id: "headingTwo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "mb-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "btn btn-link collapsed",
                                            type: "button",
                                            "data-toggle": "collapse",
                                            "data-target": "#collapseSevenCollege",
                                            "aria-expanded": "false",
                                            "aria-controls": "collapseTwo",
                                            children: "Polish Your Work"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "collapseSevenCollege",
                                    className: "collapse",
                                    "aria-labelledby": "headingTwo",
                                    "data-parent": "#accordionExample",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-body",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "list-group",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "list-group-item",
                                                children: "Benefit from detailed proofreading to ensure error-free applications."
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/app/services/page.tsx





const metadata = {
    title: "Services - Sure Smart",
    description: "Career Counseling Services"
};
const ServicesPage = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "ftco-section bg-light",
        id: "services_section",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-7 text-center heading-section ftco-animate",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "mb-4",
                            children: "Explore Our Services"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-12 nav-link-wrap mb-5 pb-md-5 pb-sm-1 ftco-animate",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "nav ftco-animate nav-pills justify-content-center text-center",
                                id: "v-pills-tab",
                                role: "tablist",
                                "aria-orientation": "vertical",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link active",
                                        id: "v-pills-nextgen-tab",
                                        "data-toggle": "pill",
                                        href: "#v-pills-nextgen",
                                        role: "tab",
                                        "aria-controls": "v-pills-nextgen",
                                        "aria-selected": "true",
                                        children: "GRADES 08th TO 10th"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        id: "v-pills-performance-tab",
                                        "data-toggle": "pill",
                                        href: "#v-pills-performance",
                                        role: "tab",
                                        "aria-controls": "v-pills-performance",
                                        "aria-selected": "false",
                                        children: "GRADES 11th TO 12th"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        id: "v-pills-effect-tab",
                                        "data-toggle": "pill",
                                        href: "#v-pills-effect",
                                        role: "tab",
                                        "aria-controls": "v-pills-effect",
                                        "aria-selected": "false",
                                        children: "Subject Selector"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        id: "v-pills-effect-tab",
                                        "data-toggle": "pill",
                                        href: "#college-application",
                                        role: "tab",
                                        "aria-controls": "v-pills-effect",
                                        "aria-selected": "false",
                                        children: "College Application"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-12 align-items-center ftco-animate",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "tab-content ftco-animate",
                                id: "v-pills-tabContent",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Grades8to10, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Grades11To12, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SubjectSelector, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CollegeApplication, {})
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const page = (ServicesPage);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,289,446], () => (__webpack_exec__(6897)));
module.exports = __webpack_exports__;

})();