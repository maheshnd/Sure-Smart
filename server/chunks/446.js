exports.id = 446;
exports.ids = [446];
exports.modules = {

/***/ 746:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 3685:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7122));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7092))

/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 7092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Header: () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/app/components/BrandName.tsx


const BrandName = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        className: "navbar-brand",
        href: "/",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "branding",
                id: "sure",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "animated-content branding",
                    children: "Sure"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "branding",
                id: "smart",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "animated-content branding",
                    children: "Smart"
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/app/components/Header.tsx
/* __next_internal_client_entry_do_not_use__ Header auto */ 


const Header = ()=>{
    const handleOnClick = async ()=>{
        const ftcoNav = document.getElementById("ftco-nav");
        ftcoNav?.classList.remove("show");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light sleep awake scrolled",
        id: "ftco-navbar",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(BrandName, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-toggle": "collapse",
                    "data-target": "#ftco-nav",
                    "aria-controls": "ftco-nav",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "oi oi-menu"
                        }),
                        " Menu"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "collapse navbar-collapse",
                    id: "ftco-nav",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "navbar-nav ml-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item active nav-list-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/#introduction-section",
                                    className: "nav-link",
                                    onClick: handleOnClick,
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item nav-list-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/services",
                                    className: "nav-link",
                                    onClick: handleOnClick,
                                    children: "Services"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item nav-list-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    className: "nav-link",
                                    onClick: handleOnClick,
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item nav-list-item",
                                onClick: handleOnClick,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "nav-link",
                                    href: "/#importanceOfCounseling",
                                    children: "Importance of counseling"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item nav-list-item",
                                onClick: handleOnClick,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "nav-link",
                                    href: "/contact",
                                    children: "Contact Us"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item cta nav-list-item",
                                onClick: handleOnClick,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/studentInfo",
                                    className: "nav-link",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Get started"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 7122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhatsAppChat: () => (/* binding */ WhatsAppChat)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9817);
/* __next_internal_client_entry_do_not_use__ WhatsAppChat auto */ 

const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo.div`
  position: fixed;
  left: 10px;
  bottom: 50px;
  z-index: 1000;
`;
const bounceAnimation = styled_components__WEBPACK_IMPORTED_MODULE_1__/* .keyframes */ .F4`
  0%, 100% {
    transform: translateY(0);
    color: #28a745;
  }
  50% {
    transform: translateY(-15px);
    color: #339933;
  }
`;
const WhatsAppIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo.a`
  animation: ${bounceAnimation} 1s infinite;
  cursor: pointer;
  display: inline-block; /* Ensure the link takes up space */
`;
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo.i`
  font-size: 4rem;
`;
const WhatsAppChat = ()=>{
    const handleWhatsAppClick = ()=>{
        const phoneNumber = "7350837127";
        const message = encodeURIComponent("Hi, I would like to have a call for counseling.");
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        window.open(whatsappURL, "_blank");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WhatsAppIcon, {
            onClick: handleWhatsAppClick,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                className: "fab fa-whatsapp"
            })
        })
    });
};


/***/ }),

/***/ 3406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/app/styles/style.css
var style = __webpack_require__(9286);
// EXTERNAL MODULE: ./src/app/styles/flaticon.css
var flaticon = __webpack_require__(3932);
// EXTERNAL MODULE: ./src/app/styles/icomoon.css
var icomoon = __webpack_require__(1133);
// EXTERNAL MODULE: ./src/app/styles/aos.css
var aos = __webpack_require__(6214);
// EXTERNAL MODULE: ./src/app/styles/ionicons.min.css
var ionicons_min = __webpack_require__(2704);
// EXTERNAL MODULE: ./src/app/styles/magnific-popup.css
var magnific_popup = __webpack_require__(2860);
// EXTERNAL MODULE: ./src/app/styles/owl.theme.default.min.css
var owl_theme_default_min = __webpack_require__(905);
// EXTERNAL MODULE: ./src/app/styles/animate.css
var animate = __webpack_require__(4571);
// EXTERNAL MODULE: ./src/app/styles/open-iconic-bootstrap.min.css
var open_iconic_bootstrap_min = __webpack_require__(3023);
// EXTERNAL MODULE: ./src/app/styles/Font/FontAwesome/all.min.css
var all_min = __webpack_require__(1593);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/app/components/Header.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/mahesh/Program/React/smart/smart/src/app/components/Header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Header"];

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/app/components/BrandName.tsx


const BrandName = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        className: "navbar-brand",
        href: "/",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "branding",
                id: "sure",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "animated-content branding",
                    children: "Sure"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "branding",
                id: "smart",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "animated-content branding",
                    children: "Smart"
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/app/components/Footer.tsx



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "ftco-footer ftco-bg-dark ftco-section",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row mb-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "ftco-footer-widget mb-4 bg-primary p-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "ftco-heading-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(BrandName, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."'
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "ftco-footer-widget mb-4 ml-md-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "ftco-heading-2",
                                        children: "Fallow US"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "ftco-footer-social list-unstyled mb-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "ftco-animate",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "https://twitter.com",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon-twitter"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "ftco-animate",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "https://www.facebook.com/",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon-facebook"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "ftco-animate",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "https://www.instagram.com/",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon-instagram"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "ftco-footer-widget mb-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "ftco-heading-2",
                                        children: "Links"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "list-unstyled",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#introduction-section",
                                                    className: "py-2 d-block",
                                                    children: "Home"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/services",
                                                    className: "py-2 d-block",
                                                    children: "Services"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/about",
                                                    className: "py-2 d-block",
                                                    children: "About"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#importanceOfCounseling",
                                                    className: "py-2 d-block",
                                                    children: "Importance of counseling"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/contact",
                                                    className: "py-2 d-block",
                                                    children: "Contact Us"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "ftco-footer-widget mb-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "ftco-heading-2",
                                        children: "Office"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "block-23 mb-3",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "icon icon-map-marker"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text",
                                                            children: "205 B Wing St.Testing , Test test, Test, India"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "tel:+919822380862",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon icon-phone"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text",
                                                                children: "+91 9822380862"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "mailto:ssuresmart@gmail.com?subject=Seeking%20Consultation%20Advice",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon icon-envelope"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text",
                                                                children: "ssuresmart@gmail.com"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-12 text-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "Copyright \xa9",
                                new Date().getFullYear(),
                                " All rights reserved by",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    target: "_blank",
                                    children: "Sure Smart"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/app/components/WhatsAppChat.tsx

const WhatsAppChat_proxy = (0,module_proxy.createProxy)(String.raw`/Users/mahesh/Program/React/smart/smart/src/app/components/WhatsAppChat.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: WhatsAppChat_esModule, $$typeof: WhatsAppChat_$$typeof } = WhatsAppChat_proxy;
const WhatsAppChat_default_ = WhatsAppChat_proxy.default;

const WhatsAppChat_e0 = WhatsAppChat_proxy["WhatsAppChat"];

;// CONCATENATED MODULE: ./src/app/layout.tsx














const metadata = {
    title: "Sure Smart Career Counseling",
    description: "Sure Smart career counseling "
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("head", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    href: "https://fonts.googleapis.com/css?family=Work+Sans:300,400,,500,600,700",
                    rel: "stylesheet"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(e0, {}),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(WhatsAppChat_e0, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "/js/jquery-3.3.1.js"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "/js/bootstrap-4.1.3.js"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 8924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const LoadingPage = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "ftco-loader",
        className: "show fullscreen",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            className: "circular",
            width: "48px",
            height: "48px",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    className: "path-bg",
                    cx: "24",
                    cy: "24",
                    r: "22",
                    fill: "none",
                    strokeWidth: "4",
                    stroke: "#eeeeee"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    className: "path",
                    cx: "24",
                    cy: "24",
                    r: "22",
                    fill: "none",
                    strokeWidth: "4",
                    strokeMiterlimit: "10",
                    stroke: "#F96D00"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingPage);


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 1593:
/***/ (() => {



/***/ }),

/***/ 4571:
/***/ (() => {



/***/ }),

/***/ 6214:
/***/ (() => {



/***/ }),

/***/ 3932:
/***/ (() => {



/***/ }),

/***/ 1133:
/***/ (() => {



/***/ }),

/***/ 2704:
/***/ (() => {



/***/ }),

/***/ 2860:
/***/ (() => {



/***/ }),

/***/ 3023:
/***/ (() => {



/***/ }),

/***/ 905:
/***/ (() => {



/***/ }),

/***/ 9286:
/***/ (() => {



/***/ })

};
;