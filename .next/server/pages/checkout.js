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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/checkout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/checkout-form.js":
/*!*************************************!*\
  !*** ./components/checkout-form.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\anton\\Desktop\\Next\\metaltec\\components\\checkout-form.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CheckoutForm = (props, ctx) => {
  const {
    0: checkoutError,
    1: setCheckoutError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: checkoutSuccess,
    1: setCheckoutSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__["useStripe"])();
  const elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__["useElements"])();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__["CardElement"]);
    const {
      error,
      paymentMethod
    } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement
    });

    if (error) {
      setCheckoutError(error.message);
    } else {
      setCheckoutSuccess(true);
      Object(nookies__WEBPACK_IMPORTED_MODULE_1__["destroyCookie"])(null, "paymentIntentId");
      Object(nookies__WEBPACK_IMPORTED_MODULE_1__["destroyCookie"])(null, "sum");
      await createOrder();
    }
  };

  const createOrder = async () => {
    let rawOrder = await localStorage.getItem('order');
    let order = await JSON.parse(rawOrder);
    console.log(order);
    await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:1337/orders', order).then(response => {
      console.log('Order: ', response.data);
      sendCheck(response.data.id);
      localStorage.removeItem("products");
    }).catch(error => {
      console.log('An error occurred:', error.response);
    });
  };

  const sendCheck = id => {
    console.log('Sending order info: ' + id);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://localhost:5000/api/invoice/' + id);
  };

  const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
      base: {
        border: '1px solid #ddd',
        iconColor: '#ff1721',
        color: '#111',
        fontSize: '18px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
          color: '#ff1721'
        },
        '::placeholder': {
          color: '#111'
        }
      },
      invalid: {
        iconColor: '#ffc7ee',
        color: '#ffc7ee'
      }
    }
  };
  if (checkoutSuccess) return __jsx("div", {
    className: "payment-success",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("img", {
    width: "72",
    height: "72",
    src: __webpack_require__(/*! ../images/check.svg */ "./images/check.svg"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, "Platba byla \xFAsp\u011B\u0161n\xE1"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, "Kontrola a podrobnosti o n\xE1kupu byly zasl\xE1ny na po\u0161tu, kterou jste zadali"));
  return __jsx("form", {
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("h4", {
    className: "final-sum",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "Platit ", props.sum, " K\u010D"), __jsx("div", {
    className: "card-element-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__["CardElement"], {
    options: CARD_OPTIONS,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  })), __jsx("button", {
    type: "submit",
    className: "final-btn-container af-class-button-2 af-class-order-btn-1 w-button continue-btn final-btn",
    disabled: !stripe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, "Pay"), __jsx("div", {
    className: "error-container",
    style: {
      color: "red"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, checkoutError));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckoutForm);

/***/ }),

/***/ "./images/check.svg":
/*!**************************!*\
  !*** ./images/check.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIHZlcnNpb249IjEuMSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yNTYgMGMtMTQxLjE2NDA2MiAwLTI1NiAxMTQuODM1OTM4LTI1NiAyNTZzMTE0LjgzNTkzOCAyNTYgMjU2IDI1NiAyNTYtMTE0LjgzNTkzOCAyNTYtMjU2LTExNC44MzU5MzgtMjU2LTI1Ni0yNTZ6bTAgMCIgZmlsbD0iIzAwZmY4NSIgZGF0YS1vcmlnaW5hbD0iIzIxOTZmMyIgc3R5bGU9IiIgY2xhc3M9IiIvPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTM4NS43NSAyMDEuNzUtMTM4LjY2Nzk2OSAxMzguNjY0MDYyYy00LjE2MDE1NiA0LjE2MDE1Ny05LjYyMTA5MyA2LjI1MzkwNy0xNS4wODIwMzEgNi4yNTM5MDdzLTEwLjkyMTg3NS0yLjA5Mzc1LTE1LjA4MjAzMS02LjI1MzkwN2wtNjkuMzMyMDMxLTY5LjMzMjAzMWMtOC4zNDM3NS04LjMzOTg0My04LjM0Mzc1LTIxLjgyNDIxOSAwLTMwLjE2NDA2MiA4LjMzOTg0My04LjM0Mzc1IDIxLjgyMDMxMi04LjM0Mzc1IDMwLjE2NDA2MiAwbDU0LjI1IDU0LjI1IDEyMy41ODU5MzgtMTIzLjU4MjAzMWM4LjMzOTg0My04LjM0Mzc1IDIxLjgyMDMxMi04LjM0Mzc1IDMwLjE2NDA2MiAwIDguMzM5ODQ0IDguMzM5ODQzIDguMzM5ODQ0IDIxLjgyMDMxMiAwIDMwLjE2NDA2MnptMCAwIiBmaWxsPSIjZmFmYWZhIiBkYXRhLW9yaWdpbmFsPSIjZmFmYWZhIiBzdHlsZT0iIi8+PC9nPjwvc3ZnPgo="

/***/ }),

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stripe */ "stripe");
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_checkout_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/checkout-form */ "./components/checkout-form.js");
var _jsxFileName = "C:\\Users\\anton\\Desktop\\Next\\metaltec\\pages\\checkout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const getServerSideProps = async ctx => {
  const stripe = new stripe__WEBPACK_IMPORTED_MODULE_1___default.a('sk_test_51HfCQbKalev6rGvBBX6I9TSerXOC1w0RKBoeEwE1JEgtyb4KhIB3DiJ6F4o4ahgsI8SHEjXDARqSOXdqfQoNXzUa00j0b8kC5j');
  let paymentIntent;
  const {
    paymentIntentId,
    sum
  } = await Object(nookies__WEBPACK_IMPORTED_MODULE_4__["parseCookies"])(ctx);

  if (paymentIntentId) {
    paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    return {
      props: {
        paymentIntent
      }
    };
  }

  let sumCZK = sum * 100;
  paymentIntent = await stripe.paymentIntents.create({
    amount: sumCZK,
    currency: 'czk'
  });
  Object(nookies__WEBPACK_IMPORTED_MODULE_4__["setCookie"])(ctx, 'paymentIntentId', paymentIntent.id);
  return {
    props: {
      paymentIntent
    }
  };
};

const CheckoutPage = ctx => {
  const stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__["loadStripe"])("pk_test_51HfCQbKalev6rGvBMHNaOtgfWfMUKJzkhs7TfmcQ5fjp5XyoeG2z97erNGBrtWPLnv3QmN1ImHhkNzX0fgX9lLKQ00ogCnUjLE");
  const {
    sum
  } = Object(nookies__WEBPACK_IMPORTED_MODULE_4__["parseCookies"])(ctx);
  return __jsx("div", {
    className: "checkout-page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__["Elements"], {
    stripe: stripePromise,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(_components_checkout_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sum: sum,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckoutPage);

/***/ }),

/***/ "@stripe/react-stripe-js":
/*!******************************************!*\
  !*** external "@stripe/react-stripe-js" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stripe");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGVja291dC1mb3JtLmpzIiwid2VicGFjazovLy8uL2ltYWdlcy9jaGVjay5zdmciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2hlY2tvdXQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3RyaXBlL3N0cmlwZS1qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyaXBlXCIiXSwibmFtZXMiOlsiQ2hlY2tvdXRGb3JtIiwicHJvcHMiLCJjdHgiLCJjaGVja291dEVycm9yIiwic2V0Q2hlY2tvdXRFcnJvciIsInVzZVN0YXRlIiwiY2hlY2tvdXRTdWNjZXNzIiwic2V0Q2hlY2tvdXRTdWNjZXNzIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYXJkRWxlbWVudCIsImdldEVsZW1lbnQiLCJDYXJkRWxlbWVudCIsImVycm9yIiwicGF5bWVudE1ldGhvZCIsImNyZWF0ZVBheW1lbnRNZXRob2QiLCJ0eXBlIiwiY2FyZCIsIm1lc3NhZ2UiLCJkZXN0cm95Q29va2llIiwiY3JlYXRlT3JkZXIiLCJyYXdPcmRlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvcmRlciIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwic2VuZENoZWNrIiwiaWQiLCJyZW1vdmVJdGVtIiwiY2F0Y2giLCJnZXQiLCJDQVJEX09QVElPTlMiLCJpY29uU3R5bGUiLCJzdHlsZSIsImJhc2UiLCJib3JkZXIiLCJpY29uQ29sb3IiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFNtb290aGluZyIsImludmFsaWQiLCJyZXF1aXJlIiwic3VtIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiU3RyaXBlIiwicGF5bWVudEludGVudCIsInBheW1lbnRJbnRlbnRJZCIsInBhcnNlQ29va2llcyIsInBheW1lbnRJbnRlbnRzIiwicmV0cmlldmUiLCJzdW1DWksiLCJjcmVhdGUiLCJhbW91bnQiLCJjdXJyZW5jeSIsInNldENvb2tpZSIsIkNoZWNrb3V0UGFnZSIsInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEs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QTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBYyxPQUFHLEVBQUVkLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBREo7QUFRSCxDQVhEOztBQWFlYSwyRUFBZixFOzs7Ozs7Ozs7OztBQ25EQSxvRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQyIsImZpbGUiOiJwYWdlcy9jaGVja291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY2hlY2tvdXQuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzLCBkZXN0cm95Q29va2llIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHsgQ2FyZEVsZW1lbnQsIHVzZVN0cmlwZSwgdXNlRWxlbWVudHMgfSBmcm9tICdAc3RyaXBlL3JlYWN0LXN0cmlwZS1qcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IENoZWNrb3V0Rm9ybSA9IChwcm9wcywgY3R4KSA9PiB7XHJcbiAgICBjb25zdCBbY2hlY2tvdXRFcnJvciwgc2V0Q2hlY2tvdXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2NoZWNrb3V0U3VjY2Vzcywgc2V0Q2hlY2tvdXRTdWNjZXNzXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoIXN0cmlwZSB8fCAhZWxlbWVudHMpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KTtcclxuICAgICAgICBjb25zdCB7IGVycm9yLCBwYXltZW50TWV0aG9kIH0gPSBhd2FpdCBzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdjYXJkJyxcclxuICAgICAgICAgICAgY2FyZDogY2FyZEVsZW1lbnQsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRDaGVja291dEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENoZWNrb3V0U3VjY2Vzcyh0cnVlKTtcclxuICAgICAgICAgICAgZGVzdHJveUNvb2tpZShudWxsLCBcInBheW1lbnRJbnRlbnRJZFwiKTtcclxuICAgICAgICAgICAgZGVzdHJveUNvb2tpZShudWxsLCBcInN1bVwiKTtcclxuICAgICAgICAgICAgYXdhaXQgY3JlYXRlT3JkZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBjcmVhdGVPcmRlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgcmF3T3JkZXIgPSBhd2FpdCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3JkZXInKTtcclxuICAgICAgICBsZXQgb3JkZXIgPSBhd2FpdCBKU09OLnBhcnNlKHJhd09yZGVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhvcmRlcilcclxuICAgICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgICAgICAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDoxMzM3L29yZGVycycsIG9yZGVyKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnT3JkZXI6ICcsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2VuZENoZWNrKHJlc3BvbnNlLmRhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJwcm9kdWN0c1wiKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VuZENoZWNrID0gKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcgb3JkZXIgaW5mbzogJyArIGlkKVxyXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9pbnZvaWNlLycgKyBpZCk7XHJcbiAgICAgfVxyXG5cclxuICAgIGNvbnN0IENBUkRfT1BUSU9OUyA9IHtcclxuICAgICAgICBpY29uU3R5bGU6ICdzb2xpZCcsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgYmFzZToge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnLFxyXG4gICAgICAgICAgICAgICAgaWNvbkNvbG9yOiAnI2ZmMTcyMScsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMxMTEnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgICAgICAgICAgICAgIGZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXHJcbiAgICAgICAgICAgICAgICAnOi13ZWJraXQtYXV0b2ZpbGwnOiB7IGNvbG9yOiAnI2ZmMTcyMScgfSxcclxuICAgICAgICAgICAgICAgICc6OnBsYWNlaG9sZGVyJzogeyBjb2xvcjogJyMxMTEnIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGludmFsaWQ6IHtcclxuICAgICAgICAgICAgICAgIGljb25Db2xvcjogJyNmZmM3ZWUnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmZjN2VlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoY2hlY2tvdXRTdWNjZXNzKSByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXltZW50LXN1Y2Nlc3MnPlxyXG4gICAgICAgICAgICA8aW1nIHdpZHRoPSc3MicgaGVpZ2h0PSc3Micgc3JjPXtyZXF1aXJlKFwiLi4vaW1hZ2VzL2NoZWNrLnN2Z1wiKX0gLz5cclxuICAgICAgICAgICAgPGgzPlBsYXRiYSBieWxhIMO6c3DEm8WhbsOhPC9oMz5cclxuICAgICAgICAgICAgPHA+S29udHJvbGEgYSBwb2Ryb2Jub3N0aSBvIG7DoWt1cHUgYnlseSB6YXNsw6FueSBuYSBwb8WhdHUsIGt0ZXJvdSBqc3RlIHphZGFsaTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuKSA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nZmluYWwtc3VtJz5QbGF0aXQge3Byb3BzLnN1bX0gS8SNPC9oND5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtZWxlbWVudC1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPENhcmRFbGVtZW50IG9wdGlvbnM9e0NBUkRfT1BUSU9OU30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT0nZmluYWwtYnRuLWNvbnRhaW5lciBhZi1jbGFzcy1idXR0b24tMiBhZi1jbGFzcy1vcmRlci1idG4tMSB3LWJ1dHRvbiBjb250aW51ZS1idG4gZmluYWwtYnRuJyBkaXNhYmxlZD17IXN0cmlwZX0+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBQYXlcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlcnJvci1jb250YWluZXInIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PntjaGVja291dEVycm9yfTwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRGb3JtIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWo4K0NqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdlRzFzYm5NNmMzWm5hbk05SW1oMGRIQTZMeTl6ZG1kcWN5NWpiMjB2YzNabmFuTWlJSFpsY25OcGIyNDlJakV1TVNJZ2QybGtkR2c5SWpVeE1pSWdhR1ZwWjJoMFBTSTFNVElpSUhnOUlqQWlJSGs5SWpBaUlIWnBaWGRDYjNnOUlqQWdNQ0ExTVRJZ05URXlJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQTFNVElnTlRFeUlpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJaUJqYkdGemN6MGlJajQ4Wno0OGNHRjBhQ0I0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJR1E5SW0weU5UWWdNR010TVRReExqRTJOREEyTWlBd0xUSTFOaUF4TVRRdU9ETTFPVE00TFRJMU5pQXlOVFp6TVRFMExqZ3pOVGt6T0NBeU5UWWdNalUySURJMU5pQXlOVFl0TVRFMExqZ3pOVGt6T0NBeU5UWXRNalUyTFRFeE5DNDRNelU1TXpndE1qVTJMVEkxTmkweU5UWjZiVEFnTUNJZ1ptbHNiRDBpSXpBd1ptWTROU0lnWkdGMFlTMXZjbWxuYVc1aGJEMGlJekl4T1RabU15SWdjM1I1YkdVOUlpSWdZMnhoYzNNOUlpSXZQanh3WVhSb0lIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ1pEMGliVE00TlM0M05TQXlNREV1TnpVdE1UTTRMalkyTnprMk9TQXhNemd1TmpZME1EWXlZeTAwTGpFMk1ERTFOaUEwTGpFMk1ERTFOeTA1TGpZeU1UQTVNeUEyTGpJMU16a3dOeTB4TlM0d09ESXdNekVnTmk0eU5UTTVNRGR6TFRFd0xqa3lNVGczTlMweUxqQTVNemMxTFRFMUxqQTRNakF6TVMwMkxqSTFNemt3TjJ3dE5qa3VNek15TURNeExUWTVMak16TWpBek1XTXRPQzR6TkRNM05TMDRMak16T1RnME15MDRMak0wTXpjMUxUSXhMamd5TkRJeE9TQXdMVE13TGpFMk5EQTJNaUE0TGpNek9UZzBNeTA0TGpNME16YzFJREl4TGpneU1ETXhNaTA0TGpNME16YzFJRE13TGpFMk5EQTJNaUF3YkRVMExqSTFJRFUwTGpJMUlERXlNeTQxT0RVNU16Z3RNVEl6TGpVNE1qQXpNV000TGpNek9UZzBNeTA0TGpNME16YzFJREl4TGpneU1ETXhNaTA0TGpNME16YzFJRE13TGpFMk5EQTJNaUF3SURndU16TTVPRFEwSURndU16TTVPRFF6SURndU16TTVPRFEwSURJeExqZ3lNRE14TWlBd0lETXdMakUyTkRBMk1ucHRNQ0F3SWlCbWFXeHNQU0lqWm1GbVlXWmhJaUJrWVhSaExXOXlhV2RwYm1Gc1BTSWpabUZtWVdaaElpQnpkSGxzWlQwaUlpOCtQQzluUGp3dmMzWm5QZ289XCIiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xyXG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XHJcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XHJcbmltcG9ydCB7IHBhcnNlQ29va2llcywgc2V0Q29va2llIH0gZnJvbSAnbm9va2llcydcclxuaW1wb3J0IENoZWNrb3V0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGVja291dC1mb3JtXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKCdza190ZXN0XzUxSGZDUWJLYWxldjZyR3ZCQlg2STlUU2VyWE9DMXcwUktCb2VFd0UxSkVndHliNEtoSUIzRGlKNkY0bzRhaGdzSThTSEVqWERBUnFTT1hkcWZRb05YelVhMDBqMGI4a0M1aicpO1xyXG4gICAgbGV0IHBheW1lbnRJbnRlbnQ7XHJcbiAgICBjb25zdCB7IHBheW1lbnRJbnRlbnRJZCwgc3VtIH0gPSBhd2FpdCBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHJcbiAgICBpZiAocGF5bWVudEludGVudElkKSB7XHJcbiAgICAgICAgcGF5bWVudEludGVudCA9IGF3YWl0IHN0cmlwZS5wYXltZW50SW50ZW50cy5yZXRyaWV2ZShwYXltZW50SW50ZW50SWQpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICBwYXltZW50SW50ZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgc3VtQ1pLID0gc3VtICogMTAwO1xyXG4gICAgcGF5bWVudEludGVudCA9IGF3YWl0IHN0cmlwZS5wYXltZW50SW50ZW50cy5jcmVhdGUoe1xyXG4gICAgICAgIGFtb3VudDogc3VtQ1pLLFxyXG4gICAgICAgIGN1cnJlbmN5OiAnY3prJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0Q29va2llKGN0eCwgJ3BheW1lbnRJbnRlbnRJZCcsIHBheW1lbnRJbnRlbnQuaWQpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcGF5bWVudEludGVudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IENoZWNrb3V0UGFnZSA9IChjdHgpID0+IHtcclxuICAgIGNvbnN0IHN0cmlwZVByb21pc2UgPSBsb2FkU3RyaXBlKFwicGtfdGVzdF81MUhmQ1FiS2FsZXY2ckd2Qk1ITmFPdGdmV2ZNVUtKemtoczdUZm1jUTVmanA1WHlvZUcyejk3ZXJOR0JydFdQTG52M1FtTjFJbUhoa056WDBmZ1g5bExLUTAwb2dDblVqTEVcIik7XHJcbiAgICBjb25zdCB7IHN1bSB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGVja291dC1wYWdlJz5cclxuICAgICAgICAgICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlUHJvbWlzZX0+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tvdXRGb3JtIHN1bT17c3VtfSAvPlxyXG4gICAgICAgICAgICA8L0VsZW1lbnRzPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRQYWdlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHJpcGUvc3RyaXBlLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyaXBlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=