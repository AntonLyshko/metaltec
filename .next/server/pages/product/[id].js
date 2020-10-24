module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/product/[id]": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/product/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/richText.js":
/*!********************************!*\
  !*** ./components/richText.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _textRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textRender */ "./components/textRender.js");
var _jsxFileName = "C:\\Users\\anton\\Desktop\\Next\\metaltec\\components\\richText.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const richText = props => {
  let data = props.data;
  const html = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => _textRender__WEBPACK_IMPORTED_MODULE_1__["default"].render(data || ''));
  return __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: html
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(richText));

/***/ }),

/***/ "./components/sliders/slider-product.js":
/*!**********************************************!*\
  !*** ./components/sliders/slider-product.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\anton\\Desktop\\Next\\metaltec\\components\\sliders\\slider-product.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Slick = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => {
  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-slick */ "react-slick", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-slick */ "react-slick")],
    modules: ["react-slick"]
  }
});

const SliderProduct = props => {
  const settings = {
    customPaging: function (i) {
      return __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }
      }, "\u0421\u0421\u044B\u043B\u043A\u0430");
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return __jsx("div", {
    className: "jsx-3467670182" + " " + "w-slider-mask",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3467670182",
    __self: undefined
  }, ".w-slide.jsx-3467670182{height:500px;}.w-slider-mask.jsx-3467670182{width:100%;}.product-slider-img.jsx-3467670182{height:500px;margin:0 auto;background:none;border-radius:10px;box-shadow:0 1px 4px 0 hsla(0,0.00%,0.00%,0.29);}.product-slider.jsx-3467670182{background:none !important;}.w-slider.jsx-3467670182{background:none !important;}.w-slide-product.jsx-3467670182{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYW50b25cXERlc2t0b3BcXE5leHRcXG1ldGFsdGVjXFxjb21wb25lbnRzXFxzbGlkZXJzXFxzbGlkZXItcHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2EsQUFHa0MsQUFHSixBQUdJLEFBT2MsQUFHQSxBQUdULFdBZnRCLEVBSEEsQUFNa0IsS0FhbEIsU0Fab0IsQUFNcEIsQUFHQSxnQkFSdUIsbUJBQ2dDLGdEQUN2RCIsImZpbGUiOiJDOlxcVXNlcnNcXGFudG9uXFxEZXNrdG9wXFxOZXh0XFxtZXRhbHRlY1xcY29tcG9uZW50c1xcc2xpZGVyc1xcc2xpZGVyLXByb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjsgXHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5cclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5cclxuY29uc3QgU2xpY2sgPSBkeW5hbWljKFxyXG4gICgpID0+IHtcclxuICAgIHJldHVybiBpbXBvcnQoXCJyZWFjdC1zbGlja1wiKTtcclxuICB9LFxyXG4gIHsgc3NyOiBmYWxzZSB9XHJcbik7XHJcblxyXG5cclxuY29uc3QgU2xpZGVyUHJvZHVjdCA9IChwcm9wcykgPT57XHJcblxyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgY3VzdG9tUGFnaW5nOiBmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICDQodCh0YvQu9C60LBcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgZG90c0NsYXNzOiBcInNsaWNrLWRvdHMgc2xpY2stdGh1bWJcIixcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgfTtcclxuICAgIFxyXG5yZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2xpZGVyLW1hc2tcIj5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtgIFxyXG4gICAgICAgICAgICAgICAgLnctc2xpZGV7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC53LXNsaWRlci1tYXNrIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHJvZHVjdC1zbGlkZXItaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIGhzbGEoMCwgMC4wMCUsIDAuMDAlLCAwLjI5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wcm9kdWN0LXNsaWRlcntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudy1zbGlkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnctc2xpZGUtcHJvZHVjdHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPFNsaWNrIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgIHtwcm9wcy5pbWcubWFwKChpdGVtKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS51cmwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctc2xpZGUtcHJvZHVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7aXRlbS51cmx9YH0gbG9hZGluZz1cImxhenlcIiBhbHQgY2xhc3NOYW1lPVwicHJvZHVjdC1zbGlkZXItaW1nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9TbGljaz5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJQcm9kdWN0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\anton\\\\Desktop\\\\Next\\\\metaltec\\\\components\\\\sliders\\\\slider-product.js */"), __jsx(Slick, _extends({}, settings, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), props.img.map(item => {
    console.log(item.url);
    return __jsx("div", {
      className: "jsx-3467670182" + " " + 'w-slide-product',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: `http://localhost:1337${item.url}`,
      loading: "lazy",
      alt: true,
      className: "jsx-3467670182" + " " + "product-slider-img",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SliderProduct);

/***/ }),

/***/ "./components/textRender.js":
/*!**********************************!*\
  !*** ./components/textRender.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! markdown-it */ "markdown-it");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_solarized_dark_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/solarized-dark.css */ "./node_modules/highlight.js/styles/solarized-dark.css");
/* harmony import */ var highlight_js_styles_solarized_dark_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_solarized_dark_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js */ "highlight.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! markdown-it-abbr */ "markdown-it-abbr");
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(markdown_it_abbr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! markdown-it-container */ "markdown-it-container");
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(markdown_it_container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! markdown-it-deflist */ "markdown-it-deflist");
/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(markdown_it_deflist__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! markdown-it-emoji */ "markdown-it-emoji");
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(markdown_it_emoji__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! markdown-it-footnote */ "markdown-it-footnote");
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(markdown_it_footnote__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! markdown-it-ins */ "markdown-it-ins");
/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(markdown_it_ins__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! markdown-it-mark */ "markdown-it-mark");
/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(markdown_it_mark__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! markdown-it-sub */ "markdown-it-sub");
/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(markdown_it_sub__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! markdown-it-sup */ "markdown-it-sup");
/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(markdown_it_sup__WEBPACK_IMPORTED_MODULE_11__);












const md = new markdown_it__WEBPACK_IMPORTED_MODULE_0___default.a({
  html: true,
  // Enable HTML tags in source
  xhtmlOut: false,
  breaks: false,
  langPrefix: 'language-',
  linkify: true,
  typographer: true,
  // Code from: https://github.com/markdown-it/markdown-it/blob/master/support/demo_template/index.js#L83
  highlight: (str, lang) => {
    if (lang && lang !== 'auto' && highlight_js__WEBPACK_IMPORTED_MODULE_2___default.a.getLanguage(lang)) {
      return '<pre class="hljs language-' + md.utils.escapeHtml(lang.toLowerCase()) + '"><code>' + highlight_js__WEBPACK_IMPORTED_MODULE_2___default.a.highlight(lang, str, true).value + '</code></pre>';
    }

    if (lang === 'auto') {
      const result = highlight_js__WEBPACK_IMPORTED_MODULE_2___default.a.highlightAuto(str);
      return '<pre class="hljs language-' + md.utils.escapeHtml(result.language) + '"><code>' + result.value + '</code></pre>';
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
}).use(markdown_it_abbr__WEBPACK_IMPORTED_MODULE_3___default.a).use(markdown_it_container__WEBPACK_IMPORTED_MODULE_4___default.a, 'warning').use(markdown_it_container__WEBPACK_IMPORTED_MODULE_4___default.a, 'tip').use(markdown_it_deflist__WEBPACK_IMPORTED_MODULE_5___default.a).use(markdown_it_emoji__WEBPACK_IMPORTED_MODULE_6___default.a).use(markdown_it_footnote__WEBPACK_IMPORTED_MODULE_7___default.a).use(markdown_it_ins__WEBPACK_IMPORTED_MODULE_8___default.a).use(markdown_it_mark__WEBPACK_IMPORTED_MODULE_9___default.a).use(markdown_it_sub__WEBPACK_IMPORTED_MODULE_10___default.a).use(markdown_it_sup__WEBPACK_IMPORTED_MODULE_11___default.a); // Code from: https://github.com/markdown-it/markdown-it-footnote/blob/master/index.js#L29

md.renderer.rules.footnote_ref = (tokens, idx, options, env, slf) => {
  const caption = slf.rules.footnote_caption(tokens, idx, options, env, slf);
  return '<sup class="footnote-ref"><span>' + caption + '</span></sup>';
};

md.renderer.rules.footnote_anchor = () => {
  /* ↩ with escape code to prevent display as Apple Emoji on iOS */
  return ' <span class="footnote-backref">\u21a9\uFE0E</span>';
};

/* harmony default export */ __webpack_exports__["default"] = (md);

/***/ }),

/***/ "./node_modules/highlight.js/styles/solarized-dark.css":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/styles/solarized-dark.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_sliders_slider_product_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/sliders/slider-product.js */ "./components/sliders/slider-product.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_richText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/richText */ "./components/richText.js");
/* harmony import */ var react_numeric_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-numeric-input */ "react-numeric-input");
/* harmony import */ var react_numeric_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_numeric_input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loading */ "react-loading");
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\anton\\Desktop\\Next\\metaltec\\pages\\product\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/* harmony default export */ __webpack_exports__["default"] = (() => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    data: null,
    amount: 1
  });

  const getData = async id => {
    let res = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('http://localhost:1337/products?slug=' + id);
    setState(_objectSpread(_objectSpread({}, state), {}, {
      data: res.data[0]
    }));
  };

  if (router.query.id && !state.data) {
    getData(router.query.id);
  }

  const addToCart = id => {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.af-class-btn').toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.cart-btn-text-1').fadeToggle(0);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.cart-btn-text-2').fadeToggle(0);
    let amount = state.amount;
    let products = [];
    let unic = true;

    if (localStorage.getItem('products')) {
      products = JSON.parse(localStorage.getItem('products'));
      console.log(products);
    }

    if (products.length) {
      products.forEach(el => {
        console.log(products);

        if (el.id == id) {
          el.amount += amount;
          unic = false;
        }
      });
    }

    if (unic) products.push({
      'id': id,
      'amount': amount,
      'name': state.data.Name,
      'image': state.data.Images[0].url,
      'price': state.data.Price
    });
    localStorage.setItem('products', JSON.stringify(products));
  };

  const amountChange = num => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      amount: num
    }));
  };

  if (state.data) {
    console.log(state.data);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: "af-class-section",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "af-class-wrap",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "af-class-_6-col",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx("div", {
      "data-animation": "slide",
      className: "af-class-slider-2 af-class-ecommerce w-slider product-slider",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, __jsx(_components_sliders_slider_product_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      img: state.data.Images,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }))), __jsx("div", {
      className: "af-class-_6-col af-class-_6-col-last",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "af-class-products1-content-wrap",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "af-class-products1-desc-wrap",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }, __jsx("h3", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 19
      }
    }, state.data.Name, __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 40
      }
    })), __jsx("p", {
      className: "af-class-text-16 af-class-text-16-60",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 19
      }
    }, state.data.Features)), __jsx("div", {
      className: "af-class-products1-price-wrap",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, __jsx("h2", {
      className: "af-class-products1-price-headline",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 19
      }
    }, state.amount * state.data.Price, " K\u010D", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 105
      }
    })), __jsx(react_numeric_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onChange: num => amountChange(num),
      className: "numeric-input",
      min: 1,
      max: 10,
      value: state.amount,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 19
      }
    })), __jsx("div", {
      onClick: () => addToCart(state.data.slug),
      className: "af-class-products1-actions-wrap",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "#",
      className: "af-class-btn w-button",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "cart-btn-text-1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }
    }, "P\u0159idat do ko\u0161\xEDku"), __jsx("div", {
      className: "cart-btn-text-2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }
    }, "Odebrat z ko\u0161\xEDku"))), __jsx("div", {
      className: "af-class-products1-details-wrap",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "af-class-text-14 af-class-text-14-60",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 19
      }
    }, __jsx(_components_richText__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: state.data.Description,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }))))))));
  } else {
    return __jsx("div", {
      className: "loading-screen",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }
    }, " ", __jsx("div", {
      className: "loading-element",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 47
      }
    }, __jsx(react_loading__WEBPACK_IMPORTED_MODULE_7___default.a, {
      type: 'bubbles',
      color: "#ff373a",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 80
      }
    })));
  }
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "highlight.js":
/*!*******************************!*\
  !*** external "highlight.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "markdown-it":
/*!******************************!*\
  !*** external "markdown-it" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdown-it");

/***/ }),

/***/ "markdown-it-abbr":
/*!***********************************!*\
  !*** external "markdown-it-abbr" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdown-it-abbr");

/***/ }),

/***/ "markdown-it-container":
/*!****************************************!*\
  !*** external "markdown-it-container" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdown-it-container");

/***/ }),

/***/ "markdown-it-deflist":
/*!**************************************!*\
  !*** external "markdown-it-deflist" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdown-it-deflist");

/***/ }),

/***/ "markdown-it-emoji":
/*!************************************!*\
  !*** external "markdown-it-emoji" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdown-it-emoji");

/***/ }),

/***/ "markdown-it-footnote":
/*!***************************************!*\
  !*** external "markdown-it-footnote" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdown-it-footnote");

/***/ }),

/***/ "markdown-it-ins":
/*!**********************************!*\
  !*** external "markdown-it-ins" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdown-it-ins");

/***/ }),

/***/ "markdown-it-mark":
/*!***********************************!*\
  !*** external "markdown-it-mark" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdown-it-mark");

/***/ }),

/***/ "markdown-it-sub":
/*!**********************************!*\
  !*** external "markdown-it-sub" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdown-it-sub");

/***/ }),

/***/ "markdown-it-sup":
/*!**********************************!*\
  !*** external "markdown-it-sup" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdown-it-sup");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-loading":
/*!********************************!*\
  !*** external "react-loading" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loading");

/***/ }),

/***/ "react-numeric-input":
/*!**************************************!*\
  !*** external "react-numeric-input" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-numeric-input");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yaWNoVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NsaWRlcnMvc2xpZGVyLXByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXh0UmVuZGVyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Byb2R1Y3QvLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlnaGxpZ2h0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya2Rvd24taXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZG93bi1pdC1hYmJyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya2Rvd24taXQtY29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya2Rvd24taXQtZGVmbGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hcmtkb3duLWl0LWVtb2ppXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya2Rvd24taXQtZm9vdG5vdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZG93bi1pdC1pbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZG93bi1pdC1tYXJrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya2Rvd24taXQtc3ViXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya2Rvd24taXQtc3VwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvYWRpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1udW1lcmljLWlucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsicmljaFRleHQiLCJwcm9wcyIsImRhdGEiLCJodG1sIiwidXNlTWVtbyIsInRleHRSZW5kZXIiLCJyZW5kZXIiLCJfX2h0bWwiLCJtZW1vIiwiU2xpY2siLCJkeW5hbWljIiwic3NyIiwiU2xpZGVyUHJvZHVjdCIsInNldHRpbmdzIiwiY3VzdG9tUGFnaW5nIiwiaSIsImRvdHMiLCJkb3RzQ2xhc3MiLCJpbmZpbml0ZSIsImFycm93cyIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJpbWciLCJtYXAiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsInVybCIsIm1kIiwiTWFya2Rvd24iLCJ4aHRtbE91dCIsImJyZWFrcyIsImxhbmdQcmVmaXgiLCJsaW5raWZ5IiwidHlwb2dyYXBoZXIiLCJoaWdobGlnaHQiLCJzdHIiLCJsYW5nIiwiaGxqcyIsImdldExhbmd1YWdlIiwidXRpbHMiLCJlc2NhcGVIdG1sIiwidG9Mb3dlckNhc2UiLCJ2YWx1ZSIsInJlc3VsdCIsImhpZ2hsaWdodEF1dG8iLCJsYW5ndWFnZSIsInVzZSIsImFiYnIiLCJjb250YWluZXIiLCJkZWZsaXN0IiwiZW1vamkiLCJmb290bm90ZSIsImlucyIsIm1hcmsiLCJzdWIiLCJzdXAiLCJyZW5kZXJlciIsInJ1bGVzIiwiZm9vdG5vdGVfcmVmIiwidG9rZW5zIiwiaWR4Iiwib3B0aW9ucyIsImVudiIsInNsZiIsImNhcHRpb24iLCJmb290bm90ZV9jYXB0aW9uIiwiZm9vdG5vdGVfYW5jaG9yIiwicm91dGVyIiwidXNlUm91dGVyIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwiYW1vdW50IiwiZ2V0RGF0YSIsImlkIiwicmVzIiwiYXhpb3MiLCJnZXQiLCJxdWVyeSIsImFkZFRvQ2FydCIsIiQiLCJ0b2dnbGVDbGFzcyIsImZhZGVUb2dnbGUiLCJwcm9kdWN0cyIsInVuaWMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsIiwicHVzaCIsIk5hbWUiLCJJbWFnZXMiLCJQcmljZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhbW91bnRDaGFuZ2UiLCJudW0iLCJGZWF0dXJlcyIsInNsdWciLCJEZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLGNBQWM7UUFDZCxJQUFJO1FBQ0o7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUlDLEtBQUQsSUFBVztB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Q0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3QvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL3Byb2R1Y3QvW2lkXVwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wcm9kdWN0L1tpZF0uanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHRleHRSZW5kZXIgZnJvbSAnLi90ZXh0UmVuZGVyJ1xyXG5cclxuY29uc3QgcmljaFRleHQgPSAocHJvcHMpID0+IHtcclxuICAgIGxldCBkYXRhID0gcHJvcHMuZGF0YTtcclxuICAgIGNvbnN0IGh0bWwgPSB1c2VNZW1vKCgpID0+IHRleHRSZW5kZXIucmVuZGVyKGRhdGEgfHwgJycpKTtcclxuICAgIHJldHVybiA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8ocmljaFRleHQpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiOyBcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XHJcblxyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcblxyXG5jb25zdCBTbGljayA9IGR5bmFtaWMoXHJcbiAgKCkgPT4ge1xyXG4gICAgcmV0dXJuIGltcG9ydChcInJlYWN0LXNsaWNrXCIpO1xyXG4gIH0sXHJcbiAgeyBzc3I6IGZhbHNlIH1cclxuKTtcclxuXHJcblxyXG5jb25zdCBTbGlkZXJQcm9kdWN0ID0gKHByb3BzKSA9PntcclxuXHJcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgICAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uKGkpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgINCh0KHRi9C70LrQsFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBkb3RzQ2xhc3M6IFwic2xpY2stZG90cyBzbGljay10aHVtYlwiLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICB9O1xyXG4gICAgXHJcbnJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zbGlkZXItbWFza1wiPlxyXG4gICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge2AgXHJcbiAgICAgICAgICAgICAgICAudy1zbGlkZXtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnctc2xpZGVyLW1hc2sge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wcm9kdWN0LXNsaWRlci1pbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgaHNsYSgwLCAwLjAwJSwgMC4wMCUsIDAuMjkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByb2R1Y3Qtc2xpZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC53LXNsaWRlcntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudy1zbGlkZS1wcm9kdWN0e1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8U2xpY2sgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAge3Byb3BzLmltZy5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLnVybClcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1zbGlkZS1wcm9kdWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3JHtpdGVtLnVybH1gfSBsb2FkaW5nPVwibGF6eVwiIGFsdCBjbGFzc05hbWU9XCJwcm9kdWN0LXNsaWRlci1pbWdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L1NsaWNrPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlclByb2R1Y3Q7XHJcbiIsIlxyXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAnbWFya2Rvd24taXQnO1xyXG5pbXBvcnQgJ2hpZ2hsaWdodC5qcy9zdHlsZXMvc29sYXJpemVkLWRhcmsuY3NzJztcclxuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzJztcclxuaW1wb3J0IGFiYnIgZnJvbSAnbWFya2Rvd24taXQtYWJicic7XHJcbmltcG9ydCBjb250YWluZXIgZnJvbSAnbWFya2Rvd24taXQtY29udGFpbmVyJztcclxuaW1wb3J0IGRlZmxpc3QgZnJvbSAnbWFya2Rvd24taXQtZGVmbGlzdCc7XHJcbmltcG9ydCBlbW9qaSBmcm9tICdtYXJrZG93bi1pdC1lbW9qaSc7XHJcbmltcG9ydCBmb290bm90ZSBmcm9tICdtYXJrZG93bi1pdC1mb290bm90ZSc7XHJcbmltcG9ydCBpbnMgZnJvbSAnbWFya2Rvd24taXQtaW5zJztcclxuaW1wb3J0IG1hcmsgZnJvbSAnbWFya2Rvd24taXQtbWFyayc7XHJcbmltcG9ydCBzdWIgZnJvbSAnbWFya2Rvd24taXQtc3ViJztcclxuaW1wb3J0IHN1cCBmcm9tICdtYXJrZG93bi1pdC1zdXAnO1xyXG5cclxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd24oe1xyXG4gIGh0bWw6IHRydWUsIC8vIEVuYWJsZSBIVE1MIHRhZ3MgaW4gc291cmNlXHJcbiAgeGh0bWxPdXQ6IGZhbHNlLFxyXG4gIGJyZWFrczogZmFsc2UsXHJcbiAgbGFuZ1ByZWZpeDogJ2xhbmd1YWdlLScsXHJcbiAgbGlua2lmeTogdHJ1ZSxcclxuICB0eXBvZ3JhcGhlcjogdHJ1ZSxcclxuICAvLyBDb2RlIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdC9ibG9iL21hc3Rlci9zdXBwb3J0L2RlbW9fdGVtcGxhdGUvaW5kZXguanMjTDgzXHJcbiAgaGlnaGxpZ2h0OiAoc3RyLCBsYW5nKSA9PiB7XHJcbiAgICBpZiAobGFuZyAmJiBsYW5nICE9PSAnYXV0bycgJiYgaGxqcy5nZXRMYW5ndWFnZShsYW5nKSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICc8cHJlIGNsYXNzPVwiaGxqcyBsYW5ndWFnZS0nICtcclxuICAgICAgICBtZC51dGlscy5lc2NhcGVIdG1sKGxhbmcudG9Mb3dlckNhc2UoKSkgK1xyXG4gICAgICAgICdcIj48Y29kZT4nICtcclxuICAgICAgICBobGpzLmhpZ2hsaWdodChsYW5nLCBzdHIsIHRydWUpLnZhbHVlICtcclxuICAgICAgICAnPC9jb2RlPjwvcHJlPidcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGFuZyA9PT0gJ2F1dG8nKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGhsanMuaGlnaGxpZ2h0QXV0byhzdHIpO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAnPHByZSBjbGFzcz1cImhsanMgbGFuZ3VhZ2UtJyArXHJcbiAgICAgICAgbWQudXRpbHMuZXNjYXBlSHRtbChyZXN1bHQubGFuZ3VhZ2UpICtcclxuICAgICAgICAnXCI+PGNvZGU+JyArXHJcbiAgICAgICAgcmVzdWx0LnZhbHVlICtcclxuICAgICAgICAnPC9jb2RlPjwvcHJlPidcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJzxwcmUgY2xhc3M9XCJobGpzXCI+PGNvZGU+JyArIG1kLnV0aWxzLmVzY2FwZUh0bWwoc3RyKSArICc8L2NvZGU+PC9wcmU+JztcclxuICB9LFxyXG59KVxyXG4gIC51c2UoYWJicilcclxuICAudXNlKGNvbnRhaW5lciwgJ3dhcm5pbmcnKVxyXG4gIC51c2UoY29udGFpbmVyLCAndGlwJylcclxuICAudXNlKGRlZmxpc3QpXHJcbiAgLnVzZShlbW9qaSlcclxuICAudXNlKGZvb3Rub3RlKVxyXG4gIC51c2UoaW5zKVxyXG4gIC51c2UobWFyaylcclxuICAudXNlKHN1YilcclxuICAudXNlKHN1cCk7XHJcblxyXG4vLyBDb2RlIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdC1mb290bm90ZS9ibG9iL21hc3Rlci9pbmRleC5qcyNMMjlcclxubWQucmVuZGVyZXIucnVsZXMuZm9vdG5vdGVfcmVmID0gKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHNsZikgPT4ge1xyXG4gIGNvbnN0IGNhcHRpb24gPSBzbGYucnVsZXMuZm9vdG5vdGVfY2FwdGlvbih0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzbGYpO1xyXG5cclxuICByZXR1cm4gJzxzdXAgY2xhc3M9XCJmb290bm90ZS1yZWZcIj48c3Bhbj4nICsgY2FwdGlvbiArICc8L3NwYW4+PC9zdXA+JztcclxufTtcclxuXHJcbm1kLnJlbmRlcmVyLnJ1bGVzLmZvb3Rub3RlX2FuY2hvciA9ICgpID0+IHtcclxuICAvKiDihqkgd2l0aCBlc2NhcGUgY29kZSB0byBwcmV2ZW50IGRpc3BsYXkgYXMgQXBwbGUgRW1vamkgb24gaU9TICovXHJcbiAgcmV0dXJuICcgPHNwYW4gY2xhc3M9XCJmb290bm90ZS1iYWNrcmVmXCI+XFx1MjFhOVxcdUZFMEU8L3NwYW4+JztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1kOyIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNsaWRlclByb2R1Y3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zbGlkZXJzL3NsaWRlci1wcm9kdWN0LmpzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmljaFRleHQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yaWNoVGV4dCdcclxuaW1wb3J0IE51bWVyaWNJbnB1dCBmcm9tICdyZWFjdC1udW1lcmljLWlucHV0JztcclxuaW1wb3J0IFJlYWN0TG9hZGluZyBmcm9tICdyZWFjdC1sb2FkaW5nJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICBhbW91bnQ6IDFcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDoxMzM3L3Byb2R1Y3RzP3NsdWc9JyArIGlkKTtcclxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGRhdGE6IHJlcy5kYXRhWzBdIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKHJvdXRlci5xdWVyeS5pZCAmJiAhc3RhdGUuZGF0YSkge1xyXG4gICAgZ2V0RGF0YShyb3V0ZXIucXVlcnkuaWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkVG9DYXJ0ID0gKGlkKSA9PiB7XHJcbiAgICAkKCcuYWYtY2xhc3MtYnRuJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLmNhcnQtYnRuLXRleHQtMScpLmZhZGVUb2dnbGUoMCk7XHJcbiAgICAkKCcuY2FydC1idG4tdGV4dC0yJykuZmFkZVRvZ2dsZSgwKTtcclxuICAgIGxldCBhbW91bnQgPSBzdGF0ZS5hbW91bnQ7XHJcbiAgICBsZXQgcHJvZHVjdHMgPSBbXTtcclxuICAgIGxldCB1bmljID0gdHJ1ZTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZHVjdHMnKSkge1xyXG4gICAgICBwcm9kdWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2R1Y3RzJykpO1xyXG4gICAgICBjb25zb2xlLmxvZyhwcm9kdWN0cylcclxuICAgIH1cclxuICAgIGlmIChwcm9kdWN0cy5sZW5ndGgpIHtcclxuICAgICAgcHJvZHVjdHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG4gICAgICAgIGlmIChlbC5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgZWwuYW1vdW50ICs9IGFtb3VudDtcclxuICAgICAgICAgIHVuaWMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZiAodW5pYykgcHJvZHVjdHMucHVzaCh7ICdpZCc6IGlkLCAnYW1vdW50JzogYW1vdW50LCAnbmFtZSc6IHN0YXRlLmRhdGEuTmFtZSwgJ2ltYWdlJzogc3RhdGUuZGF0YS5JbWFnZXNbMF0udXJsLCAncHJpY2UnOiBzdGF0ZS5kYXRhLlByaWNlIH0pO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2R1Y3RzJywgSlNPTi5zdHJpbmdpZnkocHJvZHVjdHMpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFtb3VudENoYW5nZSA9IChudW0pID0+IHtcclxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGFtb3VudDogbnVtIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIGlmIChzdGF0ZS5kYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0ZS5kYXRhKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLXNlY3Rpb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWYtY2xhc3Mtd3JhcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLV82LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1hbmltYXRpb249XCJzbGlkZVwiIGNsYXNzTmFtZT1cImFmLWNsYXNzLXNsaWRlci0yIGFmLWNsYXNzLWVjb21tZXJjZSB3LXNsaWRlciBwcm9kdWN0LXNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPFNsaWRlclByb2R1Y3QgaW1nPXtzdGF0ZS5kYXRhLkltYWdlc30gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWYtY2xhc3MtXzYtY29sIGFmLWNsYXNzLV82LWNvbC1sYXN0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1wcm9kdWN0czEtY29udGVudC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLXByb2R1Y3RzMS1kZXNjLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPntzdGF0ZS5kYXRhLk5hbWV9PGJyIC8+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWYtY2xhc3MtdGV4dC0xNiBhZi1jbGFzcy10ZXh0LTE2LTYwXCI+e3N0YXRlLmRhdGEuRmVhdHVyZXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLXByb2R1Y3RzMS1wcmljZS13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhZi1jbGFzcy1wcm9kdWN0czEtcHJpY2UtaGVhZGxpbmVcIj57c3RhdGUuYW1vdW50ICogc3RhdGUuZGF0YS5QcmljZX0gS8SNPGJyIC8+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgPE51bWVyaWNJbnB1dCBvbkNoYW5nZT17KG51bSkgPT4gYW1vdW50Q2hhbmdlKG51bSl9IGNsYXNzTmFtZT0nbnVtZXJpYy1pbnB1dCcgbWluPXsxfSBtYXg9ezEwfSB2YWx1ZT17c3RhdGUuYW1vdW50fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGFkZFRvQ2FydChzdGF0ZS5kYXRhLnNsdWcpfSBjbGFzc05hbWU9XCJhZi1jbGFzcy1wcm9kdWN0czEtYWN0aW9ucy13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYWYtY2xhc3MtYnRuIHctYnV0dG9uXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJ0bi10ZXh0LTEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUMWZaWRhdCBkbyBrb8Whw61rdVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJ0bi10ZXh0LTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgT2RlYnJhdCB6IGtvxaHDrWt1XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1wcm9kdWN0czEtZGV0YWlscy13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFmLWNsYXNzLXRleHQtMTQgYWYtY2xhc3MtdGV4dC0xNC02MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dCBkYXRhPXtzdGF0ZS5kYXRhLkRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1zY3JlZW5cIiA+IDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLWVsZW1lbnQnPjxSZWFjdExvYWRpbmcgdHlwZT17J2J1YmJsZXMnfSBjb2xvcj1cIiNmZjM3M2FcIiAvPjwvZGl2PjwvZGl2PilcclxuXHJcbiAgfVxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpZ2hsaWdodC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya2Rvd24taXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya2Rvd24taXQtYWJiclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrZG93bi1pdC1jb250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya2Rvd24taXQtZGVmbGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrZG93bi1pdC1lbW9qaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrZG93bi1pdC1mb290bm90ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrZG93bi1pdC1pbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya2Rvd24taXQtbWFya1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrZG93bi1pdC1zdWJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya2Rvd24taXQtc3VwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW51bWVyaWMtaW5wdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9