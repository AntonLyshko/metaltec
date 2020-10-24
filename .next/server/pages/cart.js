module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/cart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images/cross.png":
/*!**************************!*\
  !*** ./images/cross.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFwSURBVHgB3drRacNAEEXRm1SiElKCSkgp6UCvpJSQElJCOnGk4JcEY8sraXdn8IUBg0cwB/xl9MRf4zwv58/v83yRs5GVO6d5Thczka/VO4crX2bEXEN4xmXhbWUhC2YNscxiuAuJxtxD/ELGgsUoTAlimcEPiHyYUoQuHxR5MLsRTsRjDiOciMNUQzjRH1Md4UQ/TDOEE+0xzRFOtMN0QzhRH9Md4UQ9TBjCieOYcIQT+zFpEE5sx6RDOFGOSYtwouzA1AgnHgDhxAMgnHgAhBNBiGfqdmq027WJ7T+tiWTtQaTDHEGkwdRAhGNKESLn/2Y/bUE4kQyzB+FEEswRhBPBmBoIJ4IwNRFOdMa0QDjRCdMS4URjTA+EE40wPRFOVMZEIJyohIlEOHEQkwHhxE5MJoQTGzED+RBOlN02LsslLwyIuMT9+4refBDxiQLISG6EE7fvHNaWRL7EjTuf/i0N87yeP3/O80HOBq7c+Q0BbFrig7eaOQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/minys.png":
/*!**************************!*\
  !*** ./images/minys.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACWSURBVHgB7dXdCcIwFAXgqxPoBGaEjuAojuYoblI30A00kQQk+lxK831wSH9eyiG9iQAAAAAAAAAAYAN23f0h51LXkdxzbnX9kXIeOa9BM+dM/4qZV/rBS5fzsa9raSoFKedULloxz6A59g/KNlr7Vl/sV/o2xdjllIMntTL647q8OMd486aMkmsYKQAAAAAAAAAAW/MG124KYhtqIooAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/plus.png":
/*!*************************!*\
  !*** ./images/plus.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFVSURBVHgB7dzRTcNAEADRhQqgAq4EOkhKoZSUQilQid0BdBC8JIeC48mn7yLPk1Yy+AM0cexId0qEulemeQ39yRjDNMfz5HGJjSvxP0qdr2meoqHHaGsfy1dHRnmLhlqHKTfObfqK6ZZhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYcDD7Oe6NLrWKuAuTsu0Sz6m+Yx1jOe/Ny6dLHFaTD9udIaAbShDp//w2nF+1XtMliqhMs1LHtQw36Hqef6LvIx6v9RXeytdmm/52trkg6fUGPPHdZ7Yx3r3m1308bjOW8l7dHRLOQS/godoyE++wDDAMMAwwDDAMMAwwDDAMMAwwDDAMMAwwDDAMMAwwDDAMMAwwDDAMMAwwDDAMMAwoHWYW0uiY2xYbmlb2sU1hPt1rr5DJo/95qEL7uq6Bz8Epy1CtPbi+AAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading */ "react-loading");
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\anton\\Desktop\\Next\\metaltec\\pages\\cart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Cart = (props, ctx) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    data: [],
    sum: 0,
    delivery: 0,
    awake: false,
    step: 1,
    address: '',
    state: '',
    zipcode: '',
    city: '',
    name: '',
    phone: '',
    email: '',
    doprava: 'Osobní odběr'
  });

  const getStorage = async () => {
    let cartItems = await localStorage.getItem('products');
    let dataStorage = await JSON.parse(cartItems);

    if (dataStorage) {
      if (state.data.length != dataStorage.length) {
        let sum = 0;
        await dataStorage.forEach(el => {
          sum += parseInt(el.price, 10) * el.amount;
        });
        setState(_objectSpread(_objectSpread({}, state), {}, {
          data: dataStorage,
          sum: sum
        }));
        console.log(state);
      }
    }
  };

  const updateState = async () => {
    console.log(state.delivery);
    let cartItems = await localStorage.getItem('products');
    let dataStorage = await JSON.parse(cartItems);
    let sum = 0;
    await dataStorage.forEach(el => {
      sum += parseInt(el.price, 10) * el.amount;
    });
    setState(_objectSpread(_objectSpread({}, state), {}, {
      data: dataStorage,
      sum: sum
    }));
  };

  const awake = () => {
    if (!state.awake) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.order-step-2').slideUp(0);
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.order-step-loading').hide();
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.address-form-container').slideUp(0);
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.order-step-3').slideUp(0);
      setState(_objectSpread(_objectSpread({}, state), {}, {
        awake: true
      }));
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getStorage();
    awake();
  });

  const deleteProduct = async id => {
    await props.deleteProduct(id);
    getStorage();
  };

  const plus = async (index, id) => {
    await props.plus(index, id);
    updateState();
  };

  const minus = async (index, id) => {
    await props.minus(index, id);
    updateState();
  };

  const loginUser = async () => {
    console.log('User Signing In');
    await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:1337/auth/local', {
      identifier: state.email,
      password: '123456'
    }).then(async response => {
      // Handle success.
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      await localStorage.setItem("token", response.data.jwt);
      await localStorage.setItem("user", response.data.user.id);
      return await createOrder();
    }).catch(async error => {
      console.log('An error occurred:', error.response);
      return await registerUser();
    });
  };

  const registerUser = async () => {
    console.log('User registration');
    await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:1337/auth/local/register', {
      username: state.name,
      email: state.email,
      Phone: state.phone,
      password: '123456'
    }).then(async response => {
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      localStorage.setItem("token", response.data.jwt);
      localStorage.setItem("user", response.data.user.id);
    }).catch(error => {
      console.log('An error occurred:', error.response);
    });
  };

  const stepik = async () => {
    console.log(state);
    let step = state.step + 1; // input checking

    if (step == 3) {
      if (state.delivery > 0) {
        if (state.city.length < 3) {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('.warning').fadeIn();
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('input[name="city"]').addClass('warning-input');
          return;
        }

        if (state.state.length < 3) {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('.warning').fadeIn();
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('input[name="state"]').addClass('warning-input');
          return;
        }

        if (state.zipcode.length < 3) {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('.warning').fadeIn();
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('input[name="zipcode"]').addClass('warning-input');
          return;
        }

        if (state.address.length < 3) {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('.warning').fadeIn();
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('input[name="address"]').addClass('warning-input');
          return;
        }
      }

      let fullSum = state.sum + state.delivery;
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.af-class-cart-page-control').slideUp(500);
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.continue-btn').text('Platit ' + fullSum + ' Kč');
    }

    if (step == 4) {
      if (state.delivery > 0) {
        if (state.name.length < 3) {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('.warning').fadeIn();
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('input[name="name"]').addClass('warning-input');
          return;
        }

        if (state.email.length < 3) {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('.warning').fadeIn();
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('input[name="email"]').addClass('warning-input');
          return;
        }

        if (state.phone.length < 3) {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('.warning').fadeIn();
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('input[name="phone"]').addClass('warning-input');
          return;
        }
      }

      let sum = state.sum + state.delivery;
      let user = await localStorage.getItem('user');
      let body = {
        'City': state.city,
        'State': state.state,
        'Address': state.address,
        'ZipCode': state.zipcode,
        'Order': state.data,
        'Delivery': state.doprava,
        'DeliveryPrice': state.delivery,
        'Sum': state.sum,
        'User': user
      };
      await Object(nookies__WEBPACK_IMPORTED_MODULE_4__["setCookie"])(ctx, 'sum', sum);
      localStorage.setItem("order", JSON.stringify(body));
      await loginUser();
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.order-step-loading').show();
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.af-class-cart-page-btn-container').fadeOut(100);
      router.push('/checkout');
    }

    setState(_objectSpread(_objectSpread({}, state), {}, {
      step: step
    }));
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.order-step').slideUp(500);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.order-step-' + step).slideDown(500);
  };

  const selectHandle = async e => {
    let value = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).val();
    let doprava = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.af-class-doprava-select-html option:selected').text();
    value = parseInt(value, 10);
    setState(_objectSpread(_objectSpread({}, state), {}, {
      delivery: value,
      doprava: doprava
    }));

    if (value > 0) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.address-form-container').slideDown(500);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.address-form-container').slideUp(500);
    }
  };

  const onChange = e => {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.warning').fadeOut();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('input').removeClass('warning-input');
    setState(_objectSpread(_objectSpread({}, state), {}, {
      [e.target.name]: e.target.value
    }));
  };

  return __jsx("span", {
    className: "af-view",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "af-class-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "af-class-main-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "af-class-container w-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "af-class-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "af-class-block-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 15
    }
  }, __jsx("strong", {
    className: "af-class-bold-text-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 52
    }
  }, "Ko\u0161\xEDk"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 107
    }
  })), __jsx("div", {
    className: "af-class-cart-page-container w-clearfix",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "af-class-order-step-container w-clearfix",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "af-class-order-step",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "af-class-cart-items-container order-step-1 order-step",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 21
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 23
    }
  }, state.data.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 27
    }
  }, state.data.map((item, index) => {
    return __jsx("div", {
      className: "af-class-dropdown-cart-item",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "af-class-amount-control",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 35
      }
    }, __jsx("div", {
      onClick: () => plus(index, item.id),
      className: "af-class-plus-amount",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../images/plus.png */ "./images/plus.png"),
      loading: "lazy",
      alt: true,
      className: "af-class-image-9",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 39
      }
    })), __jsx("div", {
      className: "af-class-amount",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "af-class-text-block-9",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 39
      }
    }, item.amount)), __jsx("div", {
      className: "af-class-minus-amount",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 37
      }
    }, __jsx("img", {
      onClick: () => minus(index, item.id),
      src: __webpack_require__(/*! ../images/minys.png */ "./images/minys.png"),
      loading: "lazy",
      alt: true,
      className: "af-class-image-10",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 39
      }
    }))), __jsx("div", {
      className: "af-class-dropdown-cart-img",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 35
      }
    }, __jsx("img", {
      src: `http://localhost:1337${item.image}`,
      loading: "lazy",
      alt: true,
      className: "af-class-image-7 cart-preview-img",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 79
      }
    })), __jsx("div", {
      className: "af-class-dropdown-cart-desc",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 35
      }
    }, __jsx("h1", {
      className: "af-class-dropdown-cart-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 37
      }
    }, item.name), __jsx("div", {
      className: "af-class-dropdown-cart-cost",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 37
      }
    }, item.price, " K\u010D")), __jsx("div", {
      onClick: () => deleteProduct(item.id),
      className: "af-class-dropdown-item-control",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 35
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../images/cross.png */ "./images/cross.png"),
      loading: "lazy",
      alt: true,
      className: "af-class-image-8",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 122
      }
    })));
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "prazdni-kosik",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 31
    }
  }, "Ko\u0161\xEDk pr\xE1zdn\xFD")))), __jsx("div", {
    className: "af-class-cart-page-control",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "af-class-cart-page-sum",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "af-class-sum-container af-class-page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 25
    }
  }, __jsx("h5", {
    className: "af-class-sum-title af-class-page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 27
    }
  }, "Sou\u010Det"), __jsx("h5", {
    className: "af-class-sum-title af-class-page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 27
    }
  }, state.sum + state.delivery, " K\u010D")))), __jsx("div", {
    className: "af-class-order-step order-step-2 order-step",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "doprava-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 23
    }
  }, "Vyberte zp\u016Fsob doru\u010Den\xED"), __jsx("div", {
    className: "af-class-cart-page-doprava",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "af-class-doprava-select-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "af-class-doprava-select w-embed",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 27
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 29
    }
  }, __jsx("select", {
    onChange: e => selectHandle(e),
    className: "af-class-doprava-select-html",
    size: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 31
    }
  }, __jsx("option", {
    className: "af-class-doprava-option",
    selected: true,
    value: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 33
    }
  }, "Osobn\xED odb\u011Br"), __jsx("option", {
    className: "af-class-doprava-option",
    value: 75,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 33
    }
  }, "\u010Cesk\xE1 po\u0161ta Bal\xEDk do ruky"), __jsx("option", {
    className: "af-class-doprava-option",
    value: 89,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 33
    }
  }, "PPL standardn\xED doru\u010Den\xED"))), __jsx("style", {
    dangerouslySetInnerHTML: {
      __html: "\n   .af-view .af-class-doprava-select-html{\n      border: none;\n      padding: 5px 5px 0px 5px;\n      border-radius: 5px;\n     }\n   .af-view .af-class-doprava-option{\n   \t\tborder-radius: 5px;\n      padding: 2px;\n   }\n   .af-view .af-class-doprava-option:hover{\n   \t\tbackground: #f4f4f4;\n   }\n   "
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "af-class-sum-sum",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 25
    }
  }, __jsx("h5", {
    className: "af-class-sum-sum-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 27
    }
  }, state.delivery), __jsx("h5", {
    className: "af-class-sum-title af-class-page af-class-doprava",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 27
    }
  }, " K\u010D"))), __jsx("div", {
    className: "address-form-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 31
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 33
    }
  }, "M\u011Bsto"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    onChange: e => onChange(e),
    value: state.city,
    name: "city",
    type: "text",
    placeholder: "Praha",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 31
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 33
    }
  }, "PS\u010C"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    onChange: e => onChange(e),
    value: state.zipcode,
    name: "zipcode",
    type: "text",
    placeholder: "150 00",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 33
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 31
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 33
    }
  }, "Okres"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    onChange: e => onChange(e),
    value: state.state,
    name: "state",
    type: "text",
    placeholder: "Praha 5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 31
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 33
    }
  }, "Adresa, Apartment"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    onChange: e => onChange(e),
    value: state.address,
    name: "address",
    type: "text",
    placeholder: "Adresa, Apartment",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 33
    }
  }))))), __jsx("div", {
    className: "warning",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 25
    }
  }, "T\u0159eba vyplnit v\u0161echna pole"))), __jsx("div", {
    className: "af-class-order-step order-step-3 order-step",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "auth-step-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "formBasicEmail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 29
    }
  }, "Cel\xE9 jm\xE9no"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    onChange: e => onChange(e),
    type: "text",
    name: "name",
    placeholder: "Zadejte sv\xE9 cel\xE9 jm\xE9no",
    value: state.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 29
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "formBasicEmail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 29
    }
  }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    onChange: e => onChange(e),
    type: "email",
    name: "email",
    placeholder: "Zadejte email",
    value: state.email,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 29
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "formBasicPassword",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 29
    }
  }, "Telefonn\xED \u010D\xEDslo"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    onChange: e => onChange(e),
    value: state.phone,
    name: "phone",
    type: "phone",
    placeholder: "Zadejte telefonn\xED \u010D\xEDslo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 29
    }
  }))))), __jsx("div", {
    className: "order-step-loading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "loading-element",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 23
    }
  }, __jsx(react_loading__WEBPACK_IMPORTED_MODULE_6___default.a, {
    type: 'bubbles',
    color: "#ff373a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 56
    }
  }))), __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 21
    }
  }, state.data.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "af-class-cart-page-btn-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 27
    }
  }, __jsx("a", {
    onClick: () => stepik(),
    href: "#",
    className: "af-class-button-2 af-class-order-btn-1 w-button continue-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 29
    }
  }, "Pokra\u010Dovat"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 27
    }
  })))), __jsx("div", {
    className: "af-class-cart-script w-embed w-script",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 17
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-loading":
/*!********************************!*\
  !*** external "react-loading" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loading");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Nyb3NzLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvbWlueXMucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wbHVzLnBuZyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jYXJ0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sb2FkaW5nXCIiXSwibmFtZXMiOlsiQ2FydCIsInByb3BzIiwiY3R4Iiwicm91dGVyIiwidXNlUm91dGVyIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwiZGF0YSIsInN1bSIsImRlbGl2ZXJ5IiwiYXdha2UiLCJzdGVwIiwiYWRkcmVzcyIsInppcGNvZGUiLCJjaXR5IiwibmFtZSIsInBob25lIiwiZW1haWwiLCJkb3ByYXZhIiwiZ2V0U3RvcmFnZSIsImNhcnRJdGVtcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkYXRhU3RvcmFnZSIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCIsImZvckVhY2giLCJlbCIsInBhcnNlSW50IiwicHJpY2UiLCJhbW91bnQiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlU3RhdGUiLCIkIiwic2xpZGVVcCIsImhpZGUiLCJ1c2VFZmZlY3QiLCJkZWxldGVQcm9kdWN0IiwiaWQiLCJwbHVzIiwiaW5kZXgiLCJtaW51cyIsImxvZ2luVXNlciIsImF4aW9zIiwicG9zdCIsImlkZW50aWZpZXIiLCJwYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsInVzZXIiLCJqd3QiLCJzZXRJdGVtIiwiY3JlYXRlT3JkZXIiLCJjYXRjaCIsImVycm9yIiwicmVnaXN0ZXJVc2VyIiwidXNlcm5hbWUiLCJQaG9uZSIsInN0ZXBpayIsImZhZGVJbiIsImFkZENsYXNzIiwiZnVsbFN1bSIsInRleHQiLCJib2R5Iiwic2V0Q29va2llIiwic3RyaW5naWZ5Iiwic2hvdyIsImZhZGVPdXQiLCJwdXNoIiwic2xpZGVEb3duIiwic2VsZWN0SGFuZGxlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwidmFsIiwib25DaGFuZ2UiLCJyZW1vdmVDbGFzcyIsIm1hcCIsIml0ZW0iLCJyZXF1aXJlIiwiaW1hZ2UiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSxpQ0FBaUMsb29COzs7Ozs7Ozs7OztBQ0FqQyxpQ0FB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LEtBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQyxNQUFDLG9EQUFEO0FBQWMsUUFBSSxFQUFFLFNBQXBCO0FBQStCLFNBQUssRUFBQyxTQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWpDLENBREYsQ0FqSUYsRUFvSUUsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0daLEtBQUssQ0FBQ0csSUFBTixDQUFXbUIsTUFBWCxHQUNDLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUssYUFBUyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFdBQU8sRUFBRSxNQUFNa0MsTUFBTSxFQUF4QjtBQUE0QixRQUFJLEVBQUMsR0FBakM7QUFBcUMsYUFBUyxFQUFDLDhEQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLENBRkYsQ0FERCxHQVdHLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpOLENBcElGLENBREYsQ0FERixFQTBKRTtBQUFLLGFBQVMsRUFBQyx1Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUpGLENBRkYsQ0FERixDQURGLENBREYsQ0FERixDQUZGO0FBNEtELENBbFlEOztBQW9ZZTdELG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDNVlBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InBhZ2VzL2NhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NhcnQuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUZ3U1VSQlZIZ0IzZHJSYWNOQUVFWFJtMVNpRWxLQ1NrZ3A2VUN2cEpTUUVsSkNPbkdrNEpjRVk4c3JhWGRuOElVQmcwY3dCL3hsOU1SZjR6d3Y1OC92ODN5UnM1R1ZPNmQ1VGhjemthL1ZPNGNyWDJiRVhFTjR4bVhoYldVaEMyWU5zY3hpdUF1Snh0eEQvRUxHZ3NVb1RBbGltY0VQaUh5WVVvUXVIeFI1TUxzUlRzUmpEaU9jaU1OVVF6alJIMU1kNFVRL1RET0VFKzB4elJGT3RNTjBRemhSSDlNZDRVUTlUQmpDaWVPWWNJUVQrekZwRUU1c3g2UkRPRkdPU1l0d291ekExQWduSGdEaHhBTWduSGdBaEJOQmlHZnFkbXEwMjdXSjdUK3RpV1R0UWFUREhFR2t3ZFJBaEdOS0VTTG4vMlkvYlVFNGtReXpCK0ZFRXN3UmhCUEJtQm9JSjRJd05SRk9kTWEwUURqUkNkTVM0VVJqVEErRUU0MHdQUkZPVk1aRUlKeW9oSWxFT0hFUWt3SGh4RTVNSm9RVEd6RUQrUkJPbE4wMkxzc2xMd3lJdU1UOSs0cmVmQkR4aVFMSVNHNkVFN2Z2SE5hV1JMN0VqVHVmL2kwTjg3eWVQMy9PODBIT0JxN2MrUTBCYkZyaWc3ZWFPUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRVlBQUFCR0NBWUFBQUJ4THVLRUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFDV1NVUkJWSGdCN2RYZENjSXdGQVhncXhQb0JHYUVqdUFvanVZb2JsSTMwQTAwa1FRaytseEs4MzF3U0g5ZXlpRzlpUUFBQUFBQUFBQUFZQU4yM2YwaDUxTFhrZHh6Ym5YOWtYSWVPYTlCTStkTS80cVpWL3JCUzVmenNhOXJhU29GS2VkVUxsb3h6NkE1OWcvS05scjdWbC9zVi9vMnhkamxsSU1udFRMNjQ3cThPTWQ0ODZhTWttc1lLUUFBQUFBQUFBQUFXL01HMTI0S1lodHFJb29BQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRVlBQUFCR0NBWUFBQUJ4THVLRUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFGVlNVUkJWSGdCN2R6UlRjTkFFQURSaFFxZ0FxNEVPa2hLb1pTVVFpbFFpZDBCZEJDOEpJZUM0OG1uN3lMUGsxWXkrQU0wY2V4SWQwcUV1bGVtZVEzOXlSakROTWZ6NUhHSmpTdnhQMHFkcjJtZW9xSEhhR3NmeTFkSFJubUxobHFIS1RmT2JmcUs2WlpoZ0dHQVlZQmhnR0dBWVlCaGdHR0FZWUJoZ0dHQVlZQmhnR0dBWVlCaGdHR0FZWUJoZ0dHQVlZQmhnR0dBWWNERDdPZTZOTHJXS3VBdVRzdTBTejZtK1l4MWpPZS9OeTZkTEhGYVREOXVkSWFBYlNoRHAvL3cybkYrMVh0TWxpcWhNczFMSHRRdzM2SHFlZjZMdkl4NnY5UlhleXRkbW0vNTJ0cmtnNmZVR1BQSGRaN1l4M3IzbTEzMDhiak9XOGw3ZEhSTE9RUy9nb2RveUUrK3dEREFNTUF3d0REQU1NQXd3RERBTU1Bd3dEREFNTUF3d0REQU1NQXd3RERBTU1Bd3dEREFNTUF3d0REQU1NQXdvSFdZVzB1aVkyeFlibWxiMnNVMWhQdDFycjVESm8vOTVxRUw3dXE2Qno4RXB5MUN0UGJpK0FBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IHNldENvb2tpZSB9IGZyb20gJ25vb2tpZXMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBSZWFjdExvYWRpbmcgZnJvbSAncmVhY3QtbG9hZGluZyc7XG5cbmNvbnN0IENhcnQgPSAocHJvcHMsIGN0eCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBkYXRhOiBbXSxcbiAgICBzdW06IDAsXG4gICAgZGVsaXZlcnk6IDAsXG4gICAgYXdha2U6IGZhbHNlLFxuICAgIHN0ZXA6IDEsXG4gICAgYWRkcmVzczogJycsXG4gICAgc3RhdGU6ICcnLFxuICAgIHppcGNvZGU6ICcnLFxuICAgIGNpdHk6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIHBob25lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgZG9wcmF2YTogJ09zb2Juw60gb2RixJtyJ1xuICB9KTtcblxuICBjb25zdCBnZXRTdG9yYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCBjYXJ0SXRlbXMgPSBhd2FpdCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZHVjdHMnKTtcbiAgICBsZXQgZGF0YVN0b3JhZ2UgPSBhd2FpdCBKU09OLnBhcnNlKGNhcnRJdGVtcyk7XG4gICAgaWYgKGRhdGFTdG9yYWdlKSB7XG4gICAgICBpZiAoc3RhdGUuZGF0YS5sZW5ndGggIT0gZGF0YVN0b3JhZ2UubGVuZ3RoKSB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBhd2FpdCBkYXRhU3RvcmFnZS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICBzdW0gKz0gcGFyc2VJbnQoZWwucHJpY2UsIDEwKSAqIGVsLmFtb3VudDtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGRhdGE6IGRhdGFTdG9yYWdlLCBzdW06IHN1bSB9KVxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCB1cGRhdGVTdGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZS5kZWxpdmVyeSlcbiAgICBsZXQgY2FydEl0ZW1zID0gYXdhaXQgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2R1Y3RzJyk7XG4gICAgbGV0IGRhdGFTdG9yYWdlID0gYXdhaXQgSlNPTi5wYXJzZShjYXJ0SXRlbXMpO1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGF3YWl0IGRhdGFTdG9yYWdlLmZvckVhY2goZWwgPT4ge1xuICAgICAgc3VtICs9IHBhcnNlSW50KGVsLnByaWNlLCAxMCkgKiBlbC5hbW91bnQ7XG4gICAgfSk7XG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgZGF0YTogZGF0YVN0b3JhZ2UsIHN1bTogc3VtIH0pXG4gIH1cblxuXG5cbiAgY29uc3QgYXdha2UgPSAoKSA9PiB7XG4gICAgaWYgKCFzdGF0ZS5hd2FrZSkge1xuICAgICAgJCgnLm9yZGVyLXN0ZXAtMicpLnNsaWRlVXAoMCk7XG4gICAgICAkKCcub3JkZXItc3RlcC1sb2FkaW5nJykuaGlkZSgpO1xuICAgICAgJCgnLmFkZHJlc3MtZm9ybS1jb250YWluZXInKS5zbGlkZVVwKDApO1xuICAgICAgJCgnLm9yZGVyLXN0ZXAtMycpLnNsaWRlVXAoMCk7XG4gICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBhd2FrZTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRTdG9yYWdlKCk7XG4gICAgYXdha2UoKTtcbiAgfSk7XG5cbiAgY29uc3QgZGVsZXRlUHJvZHVjdCA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGF3YWl0IHByb3BzLmRlbGV0ZVByb2R1Y3QoaWQpO1xuICAgIGdldFN0b3JhZ2UoKTtcbiAgfVxuXG4gIGNvbnN0IHBsdXMgPSBhc3luYyAoaW5kZXgsIGlkKSA9PiB7XG4gICAgYXdhaXQgcHJvcHMucGx1cyhpbmRleCwgaWQpO1xuICAgIHVwZGF0ZVN0YXRlKCk7XG4gIH1cblxuXG5cblxuICBjb25zdCBtaW51cyA9IGFzeW5jIChpbmRleCwgaWQpID0+IHtcbiAgICBhd2FpdCBwcm9wcy5taW51cyhpbmRleCwgaWQpO1xuICAgIHVwZGF0ZVN0YXRlKCk7XG4gIH1cblxuICBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1VzZXIgU2lnbmluZyBJbicpXG4gICAgYXdhaXQgYXhpb3NcbiAgICAgIC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjEzMzcvYXV0aC9sb2NhbCcsIHtcbiAgICAgICAgaWRlbnRpZmllcjogc3RhdGUuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiAnMTIzNDU2JyxcbiAgICAgIH0pXG4gICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gSGFuZGxlIHN1Y2Nlc3MuXG4gICAgICAgIGNvbnNvbGUubG9nKCdXZWxsIGRvbmUhJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIHByb2ZpbGUnLCByZXNwb25zZS5kYXRhLnVzZXIpO1xuICAgICAgICBjb25zb2xlLmxvZygnVXNlciB0b2tlbicsIHJlc3BvbnNlLmRhdGEuand0KTtcbiAgICAgICAgYXdhaXQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCByZXNwb25zZS5kYXRhLmp3dClcbiAgICAgICAgYXdhaXQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIHJlc3BvbnNlLmRhdGEudXNlci5pZClcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNyZWF0ZU9yZGVyKClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYXN5bmMgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5yZXNwb25zZSk7XG4gICAgICAgIHJldHVybiBhd2FpdCByZWdpc3RlclVzZXIoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdVc2VyIHJlZ2lzdHJhdGlvbicpXG4gICAgYXdhaXQgYXhpb3NcbiAgICAgIC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjEzMzcvYXV0aC9sb2NhbC9yZWdpc3RlcicsIHtcbiAgICAgICAgdXNlcm5hbWU6IHN0YXRlLm5hbWUsXG4gICAgICAgIGVtYWlsOiBzdGF0ZS5lbWFpbCxcbiAgICAgICAgUGhvbmU6IHN0YXRlLnBob25lLFxuICAgICAgICBwYXNzd29yZDogJzEyMzQ1NicsXG4gICAgICB9KVxuICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIHByb2ZpbGUnLCByZXNwb25zZS5kYXRhLnVzZXIpO1xuICAgICAgICBjb25zb2xlLmxvZygnVXNlciB0b2tlbicsIHJlc3BvbnNlLmRhdGEuand0KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCByZXNwb25zZS5kYXRhLmp3dClcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIHJlc3BvbnNlLmRhdGEudXNlci5pZClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IucmVzcG9uc2UpO1xuICAgICAgfSk7XG4gIH1cblxuICBjb25zdCBzdGVwaWsgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coc3RhdGUpXG4gICAgbGV0IHN0ZXAgPSBzdGF0ZS5zdGVwICsgMTtcbiAgICAvLyBpbnB1dCBjaGVja2luZ1xuICAgIGlmIChzdGVwID09IDMpIHtcbiAgICAgIGlmIChzdGF0ZS5kZWxpdmVyeSA+IDApIHtcbiAgICAgICAgaWYgKHN0YXRlLmNpdHkubGVuZ3RoIDwgMykge1xuICAgICAgICAgICQoJy53YXJuaW5nJykuZmFkZUluKCk7XG4gICAgICAgICAgJCgnaW5wdXRbbmFtZT1cImNpdHlcIl0nKS5hZGRDbGFzcygnd2FybmluZy1pbnB1dCcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuc3RhdGUubGVuZ3RoIDwgMykge1xuICAgICAgICAgICQoJy53YXJuaW5nJykuZmFkZUluKCk7XG4gICAgICAgICAgJCgnaW5wdXRbbmFtZT1cInN0YXRlXCJdJykuYWRkQ2xhc3MoJ3dhcm5pbmctaW5wdXQnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLnppcGNvZGUubGVuZ3RoIDwgMykge1xuICAgICAgICAgICQoJy53YXJuaW5nJykuZmFkZUluKCk7XG4gICAgICAgICAgJCgnaW5wdXRbbmFtZT1cInppcGNvZGVcIl0nKS5hZGRDbGFzcygnd2FybmluZy1pbnB1dCcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuYWRkcmVzcy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgJCgnLndhcm5pbmcnKS5mYWRlSW4oKTtcbiAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiYWRkcmVzc1wiXScpLmFkZENsYXNzKCd3YXJuaW5nLWlucHV0Jyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgZnVsbFN1bSA9IHN0YXRlLnN1bSArIHN0YXRlLmRlbGl2ZXJ5O1xuICAgICAgJCgnLmFmLWNsYXNzLWNhcnQtcGFnZS1jb250cm9sJykuc2xpZGVVcCg1MDApO1xuICAgICAgJCgnLmNvbnRpbnVlLWJ0bicpLnRleHQoJ1BsYXRpdCAnICsgZnVsbFN1bSArICcgS8SNJylcbiAgICB9XG4gICAgaWYgKHN0ZXAgPT0gNCkge1xuICAgICAgaWYgKHN0YXRlLmRlbGl2ZXJ5ID4gMCkge1xuICAgICAgICBpZiAoc3RhdGUubmFtZS5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgJCgnLndhcm5pbmcnKS5mYWRlSW4oKTtcbiAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwibmFtZVwiXScpLmFkZENsYXNzKCd3YXJuaW5nLWlucHV0Jyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5lbWFpbC5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgJCgnLndhcm5pbmcnKS5mYWRlSW4oKTtcbiAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiZW1haWxcIl0nKS5hZGRDbGFzcygnd2FybmluZy1pbnB1dCcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUucGhvbmUubGVuZ3RoIDwgMykge1xuICAgICAgICAgICQoJy53YXJuaW5nJykuZmFkZUluKCk7XG4gICAgICAgICAgJCgnaW5wdXRbbmFtZT1cInBob25lXCJdJykuYWRkQ2xhc3MoJ3dhcm5pbmctaW5wdXQnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBzdW0gPSBzdGF0ZS5zdW0gKyBzdGF0ZS5kZWxpdmVyeTtcbiAgICAgIGxldCB1c2VyID0gYXdhaXQgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcbiAgICAgIGxldCBib2R5ID0ge1xuICAgICAgICAnQ2l0eSc6IHN0YXRlLmNpdHksXG4gICAgICAgICdTdGF0ZSc6IHN0YXRlLnN0YXRlLFxuICAgICAgICAnQWRkcmVzcyc6IHN0YXRlLmFkZHJlc3MsXG4gICAgICAgICdaaXBDb2RlJzogc3RhdGUuemlwY29kZSxcbiAgICAgICAgJ09yZGVyJzogc3RhdGUuZGF0YSxcbiAgICAgICAgJ0RlbGl2ZXJ5Jzogc3RhdGUuZG9wcmF2YSxcbiAgICAgICAgJ0RlbGl2ZXJ5UHJpY2UnOiBzdGF0ZS5kZWxpdmVyeSxcbiAgICAgICAgJ1N1bSc6IHN0YXRlLnN1bSxcbiAgICAgICAgJ1VzZXInOiB1c2VyXG4gICAgICB9O1xuICAgICAgYXdhaXQgc2V0Q29va2llKGN0eCwgJ3N1bScsIHN1bSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm9yZGVyXCIsIEpTT04uc3RyaW5naWZ5KGJvZHkpKVxuICAgICAgYXdhaXQgbG9naW5Vc2VyKCk7XG4gICAgICAkKCcub3JkZXItc3RlcC1sb2FkaW5nJykuc2hvdygpO1xuICAgICAgJCgnLmFmLWNsYXNzLWNhcnQtcGFnZS1idG4tY29udGFpbmVyJykuZmFkZU91dCgxMDApO1xuICAgICAgcm91dGVyLnB1c2goJy9jaGVja291dCcpO1xuICAgIH1cbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBzdGVwOiBzdGVwIH0pXG4gICAgJCgnLm9yZGVyLXN0ZXAnKS5zbGlkZVVwKDUwMCk7XG4gICAgJCgnLm9yZGVyLXN0ZXAtJyArIHN0ZXApLnNsaWRlRG93big1MDApO1xuICB9XG5cbiAgY29uc3Qgc2VsZWN0SGFuZGxlID0gYXN5bmMgKGUpID0+IHtcbiAgICBsZXQgdmFsdWUgPSAkKGUudGFyZ2V0KS52YWwoKTtcbiAgICBsZXQgZG9wcmF2YSA9ICQoJy5hZi1jbGFzcy1kb3ByYXZhLXNlbGVjdC1odG1sIG9wdGlvbjpzZWxlY3RlZCcpLnRleHQoKTtcbiAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgZGVsaXZlcnk6IHZhbHVlLCBkb3ByYXZhOiBkb3ByYXZhIH0pXG4gICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgJCgnLmFkZHJlc3MtZm9ybS1jb250YWluZXInKS5zbGlkZURvd24oNTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLmFkZHJlc3MtZm9ybS1jb250YWluZXInKS5zbGlkZVVwKDUwMCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICQoJy53YXJuaW5nJykuZmFkZU91dCgpO1xuICAgICQoJ2lucHV0JykucmVtb3ZlQ2xhc3MoJ3dhcm5pbmctaW5wdXQnKTtcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gIH1cblxuICByZXR1cm4gKFxuXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiYWYtdmlld1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWYtY2xhc3MtbWFpbi13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1jb250YWluZXIgdy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWYtY2xhc3MtYmxvY2tcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFmLWNsYXNzLWJsb2NrLXRpdGxlXCI+PHN0cm9uZyBjbGFzc05hbWU9XCJhZi1jbGFzcy1ib2xkLXRleHQtM1wiPktvxaHDrWs8L3N0cm9uZz48YnIgLz48L2gxPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLWNhcnQtcGFnZS1jb250YWluZXIgdy1jbGVhcmZpeFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWYtY2xhc3Mtb3JkZXItc3RlcC1jb250YWluZXIgdy1jbGVhcmZpeFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1vcmRlci1zdGVwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWYtY2xhc3MtY2FydC1pdGVtcy1jb250YWluZXIgb3JkZXItc3RlcC0xIG9yZGVyLXN0ZXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuZGF0YS5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1kcm9wZG93bi1jYXJ0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLWFtb3VudC1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHBsdXMoaW5kZXgsIGl0ZW0uaWQpfSBjbGFzc05hbWU9XCJhZi1jbGFzcy1wbHVzLWFtb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uL2ltYWdlcy9wbHVzLnBuZ1wiKX0gbG9hZGluZz1cImxhenlcIiBhbHQgY2xhc3NOYW1lPVwiYWYtY2xhc3MtaW1hZ2UtOVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWYtY2xhc3MtYW1vdW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWYtY2xhc3MtdGV4dC1ibG9jay05XCI+e2l0ZW0uYW1vdW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLW1pbnVzLWFtb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9eygpID0+IG1pbnVzKGluZGV4LCBpdGVtLmlkKX0gc3JjPXtyZXF1aXJlKFwiLi4vaW1hZ2VzL21pbnlzLnBuZ1wiKX0gbG9hZGluZz1cImxhenlcIiBhbHQgY2xhc3NOYW1lPVwiYWYtY2xhc3MtaW1hZ2UtMTBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1kcm9wZG93bi1jYXJ0LWltZ1wiPjxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3JHtpdGVtLmltYWdlfWB9IGxvYWRpbmc9XCJsYXp5XCIgYWx0IGNsYXNzTmFtZT1cImFmLWNsYXNzLWltYWdlLTcgY2FydC1wcmV2aWV3LWltZ1wiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1kcm9wZG93bi1jYXJ0LWRlc2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhZi1jbGFzcy1kcm9wZG93bi1jYXJ0LXRpdGxlXCI+e2l0ZW0ubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1kcm9wZG93bi1jYXJ0LWNvc3RcIj57aXRlbS5wcmljZX0gS8SNPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBkZWxldGVQcm9kdWN0KGl0ZW0uaWQpfSBjbGFzc05hbWU9XCJhZi1jbGFzcy1kcm9wZG93bi1pdGVtLWNvbnRyb2xcIj48aW1nIHNyYz17cmVxdWlyZShcIi4uL2ltYWdlcy9jcm9zcy5wbmdcIil9IGxvYWRpbmc9XCJsYXp5XCIgYWx0IGNsYXNzTmFtZT1cImFmLWNsYXNzLWltYWdlLThcIiAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmF6ZG5pLWtvc2lrJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2/FocOtayBwcsOhemRuw71cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1jYXJ0LXBhZ2UtY29udHJvbFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1jYXJ0LXBhZ2Utc3VtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLXN1bS1jb250YWluZXIgYWYtY2xhc3MtcGFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiYWYtY2xhc3Mtc3VtLXRpdGxlIGFmLWNsYXNzLXBhZ2VcIj5Tb3XEjWV0PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImFmLWNsYXNzLXN1bS10aXRsZSBhZi1jbGFzcy1wYWdlXCI+e3N0YXRlLnN1bSArIHN0YXRlLmRlbGl2ZXJ5fSBLxI08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1vcmRlci1zdGVwIG9yZGVyLXN0ZXAtMiBvcmRlci1zdGVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RvcHJhdmEtdGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgVnliZXJ0ZSB6cMWvc29iIGRvcnXEjWVuw61cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1jYXJ0LXBhZ2UtZG9wcmF2YVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLWRvcHJhdmEtc2VsZWN0LWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWYtY2xhc3MtZG9wcmF2YS1zZWxlY3Qgdy1lbWJlZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gc2VsZWN0SGFuZGxlKGUpfSBjbGFzc05hbWU9XCJhZi1jbGFzcy1kb3ByYXZhLXNlbGVjdC1odG1sXCIgc2l6ZT17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gY2xhc3NOYW1lPVwiYWYtY2xhc3MtZG9wcmF2YS1vcHRpb25cIiBzZWxlY3RlZCB2YWx1ZT17MH0+T3NvYm7DrSBvZGLEm3I8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJhZi1jbGFzcy1kb3ByYXZhLW9wdGlvblwiIHZhbHVlPXs3NX0+xIxlc2vDoSBwb8WhdGEgQmFsw61rIGRvIHJ1a3k8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJhZi1jbGFzcy1kb3ByYXZhLW9wdGlvblwiIHZhbHVlPXs4OX0+UFBMIHN0YW5kYXJkbsOtIGRvcnXEjWVuw608L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBcIlxcbiAgIC5hZi12aWV3IC5hZi1jbGFzcy1kb3ByYXZhLXNlbGVjdC1odG1se1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBwYWRkaW5nOiA1cHggNXB4IDBweCA1cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgfVxcbiAgIC5hZi12aWV3IC5hZi1jbGFzcy1kb3ByYXZhLW9wdGlvbntcXG4gICBcXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgcGFkZGluZzogMnB4O1xcbiAgIH1cXG4gICAuYWYtdmlldyAuYWYtY2xhc3MtZG9wcmF2YS1vcHRpb246aG92ZXJ7XFxuICAgXFx0XFx0YmFja2dyb3VuZDogI2Y0ZjRmNDtcXG4gICB9XFxuICAgXCIgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLXN1bS1zdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImFmLWNsYXNzLXN1bS1zdW0tY29udGVudFwiPntzdGF0ZS5kZWxpdmVyeX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiYWYtY2xhc3Mtc3VtLXRpdGxlIGFmLWNsYXNzLXBhZ2UgYWYtY2xhc3MtZG9wcmF2YVwiPiBLxI08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FkZHJlc3MtZm9ybS1jb250YWluZXInPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5NxJtzdG88L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9IHZhbHVlPXtzdGF0ZS5jaXR5fSBuYW1lPSdjaXR5JyB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUHJhaGFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QU8SMPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfSB2YWx1ZT17c3RhdGUuemlwY29kZX0gbmFtZT0nemlwY29kZScgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIjE1MCAwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+T2tyZXM8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9IHZhbHVlPXtzdGF0ZS5zdGF0ZX0gbmFtZT0nc3RhdGUnIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQcmFoYSA1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+QWRyZXNhLCBBcGFydG1lbnQ8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9IHZhbHVlPXtzdGF0ZS5hZGRyZXNzfSBuYW1lPSdhZGRyZXNzJyB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRyZXNhLCBBcGFydG1lbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3YXJuaW5nJz5UxZllYmEgdnlwbG5pdCB2xaFlY2huYSBwb2xlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWYtY2xhc3Mtb3JkZXItc3RlcCBvcmRlci1zdGVwLTMgb3JkZXItc3RlcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhdXRoLXN0ZXAtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNFbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkNlbMOpIGptw6lubzwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfSB0eXBlPVwidGV4dFwiIG5hbWU9J25hbWUnIHBsYWNlaG9sZGVyPVwiWmFkZWp0ZSBzdsOpIGNlbMOpIGptw6lub1wiIHZhbHVlPXtzdGF0ZS5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY0VtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RW1haWw8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlKX0gdHlwZT1cImVtYWlsXCIgbmFtZT0nZW1haWwnIHBsYWNlaG9sZGVyPVwiWmFkZWp0ZSBlbWFpbFwiIHZhbHVlPXtzdGF0ZS5lbWFpbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNQYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlRlbGVmb25uw60gxI3DrXNsbzwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfSB2YWx1ZT17c3RhdGUucGhvbmV9IG5hbWU9J3Bob25lJyB0eXBlPVwicGhvbmVcIiBwbGFjZWhvbGRlcj1cIlphZGVqdGUgdGVsZWZvbm7DrSDEjcOtc2xvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J29yZGVyLXN0ZXAtbG9hZGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctZWxlbWVudCc+PFJlYWN0TG9hZGluZyB0eXBlPXsnYnViYmxlcyd9IGNvbG9yPVwiI2ZmMzczYVwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmRhdGEubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWYtY2xhc3MtY2FydC1wYWdlLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzdGVwaWsoKX0gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJhZi1jbGFzcy1idXR0b24tMiBhZi1jbGFzcy1vcmRlci1idG4tMSB3LWJ1dHRvbiBjb250aW51ZS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBva3JhxI1vdmF0XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWYtY2xhc3MtY2FydC1zY3JpcHQgdy1lbWJlZCB3LXNjcmlwdFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9zcGFuPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGluZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9