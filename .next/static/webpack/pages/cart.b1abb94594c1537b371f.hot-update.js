webpackHotUpdate_N_E("pages/cart",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loading */ "./node_modules/react-loading/dist/react-loading.js");
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_9__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\anton\\Desktop\\Next\\metaltec\\pages\\cart.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var Cart = function Cart(props, ctx) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
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
  }),
      state = _useState[0],
      setState = _useState[1];

  var getStorage = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var cartItems, dataStorage, sum;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return localStorage.getItem('products');

            case 2:
              cartItems = _context.sent;
              _context.next = 5;
              return JSON.parse(cartItems);

            case 5:
              dataStorage = _context.sent;

              if (!dataStorage) {
                _context.next = 13;
                break;
              }

              if (!(state.data.length != dataStorage.length)) {
                _context.next = 13;
                break;
              }

              sum = 0;
              _context.next = 11;
              return dataStorage.forEach(function (el) {
                sum += parseInt(el.price, 10) * el.amount;
              });

            case 11:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                data: dataStorage,
                sum: sum
              }));
              console.log(state);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getStorage() {
      return _ref.apply(this, arguments);
    };
  }();

  var updateState = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var cartItems, dataStorage, sum;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(state.delivery);
              _context2.next = 3;
              return localStorage.getItem('products');

            case 3:
              cartItems = _context2.sent;
              _context2.next = 6;
              return JSON.parse(cartItems);

            case 6:
              dataStorage = _context2.sent;
              sum = 0;
              _context2.next = 10;
              return dataStorage.forEach(function (el) {
                sum += parseInt(el.price, 10) * el.amount;
              });

            case 10:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                data: dataStorage,
                sum: sum
              }));

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function updateState() {
      return _ref2.apply(this, arguments);
    };
  }();

  var awake = function awake() {
    if (!state.awake) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.order-step-2').slideUp(0);
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.order-step-loading').hide();
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.address-form-container').slideUp(0);
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.order-step-3').slideUp(0);
      setState(_objectSpread(_objectSpread({}, state), {}, {
        awake: true
      }));
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getStorage();
    awake();
  });

  var deleteProduct = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return props.deleteProduct(id);

            case 2:
              getStorage();

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function deleteProduct(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var plus = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(index, id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return props.plus(index, id);

            case 2:
              updateState();

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function plus(_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var minus = /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(index, id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return props.minus(index, id);

            case 2:
              updateState();

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function minus(_x4, _x5) {
      return _ref5.apply(this, arguments);
    };
  }();

  var loginUser = /*#__PURE__*/function () {
    var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              console.log('User Signing In');
              _context8.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://localhost:1337/auth/local', {
                identifier: state.email,
                password: '123456'
              }).then( /*#__PURE__*/function () {
                var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(response) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          // Handle success.
                          console.log('Well done!');
                          console.log('User profile', response.data.user);
                          console.log('User token', response.data.jwt);
                          _context6.next = 5;
                          return localStorage.setItem("token", response.data.jwt);

                        case 5:
                          _context6.next = 7;
                          return localStorage.setItem("user", response.data.user.id);

                        case 7:
                          _context6.next = 9;
                          return createOrder();

                        case 9:
                          return _context6.abrupt("return", _context6.sent);

                        case 10:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function (_x6) {
                  return _ref7.apply(this, arguments);
                };
              }())["catch"]( /*#__PURE__*/function () {
                var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(error) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          console.log('An error occurred:', error.response);
                          _context7.next = 3;
                          return registerUser();

                        case 3:
                          return _context7.abrupt("return", _context7.sent);

                        case 4:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                return function (_x7) {
                  return _ref8.apply(this, arguments);
                };
              }());

            case 3:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function loginUser() {
      return _ref6.apply(this, arguments);
    };
  }();

  var registerUser = /*#__PURE__*/function () {
    var _ref9 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              console.log('User registration');
              _context10.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://localhost:1337/auth/local/register', {
                username: state.name,
                email: state.email,
                Phone: state.phone,
                password: '123456'
              }).then( /*#__PURE__*/function () {
                var _ref10 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(response) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          console.log('User profile', response.data.user);
                          console.log('User token', response.data.jwt);
                          localStorage.setItem("token", response.data.jwt);
                          localStorage.setItem("user", response.data.user.id);

                        case 4:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                }));

                return function (_x8) {
                  return _ref10.apply(this, arguments);
                };
              }())["catch"](function (error) {
                console.log('An error occurred:', error.response);
              });

            case 3:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function registerUser() {
      return _ref9.apply(this, arguments);
    };
  }();

  var stepik = /*#__PURE__*/function () {
    var _ref11 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
      var step, fullSum, sum, user, body;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              console.log(state);
              step = state.step + 1; // input checking

              if (!(step == 3)) {
                _context11.next = 23;
                break;
              }

              if (!(state.delivery > 0)) {
                _context11.next = 20;
                break;
              }

              if (!(state.city.length < 3)) {
                _context11.next = 8;
                break;
              }

              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.warning').fadeIn();
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('input[name="city"]').addClass('warning-input');
              return _context11.abrupt("return");

            case 8:
              if (!(state.state.length < 3)) {
                _context11.next = 12;
                break;
              }

              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.warning').fadeIn();
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('input[name="state"]').addClass('warning-input');
              return _context11.abrupt("return");

            case 12:
              if (!(state.zipcode.length < 3)) {
                _context11.next = 16;
                break;
              }

              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.warning').fadeIn();
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('input[name="zipcode"]').addClass('warning-input');
              return _context11.abrupt("return");

            case 16:
              if (!(state.address.length < 3)) {
                _context11.next = 20;
                break;
              }

              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.warning').fadeIn();
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('input[name="address"]').addClass('warning-input');
              return _context11.abrupt("return");

            case 20:
              fullSum = state.sum + state.delivery;
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.af-class-cart-page-control').slideUp(500);
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.continue-btn').text('Platit ' + fullSum + ' Kč');

            case 23:
              if (!(step == 4)) {
                _context11.next = 50;
                break;
              }

              if (!(state.delivery > 0)) {
                _context11.next = 37;
                break;
              }

              if (!(state.name.length < 3)) {
                _context11.next = 29;
                break;
              }

              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.warning').fadeIn();
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('input[name="name"]').addClass('warning-input');
              return _context11.abrupt("return");

            case 29:
              if (!(state.email.length < 3)) {
                _context11.next = 33;
                break;
              }

              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.warning').fadeIn();
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('input[name="email"]').addClass('warning-input');
              return _context11.abrupt("return");

            case 33:
              if (!(state.phone.length < 3)) {
                _context11.next = 37;
                break;
              }

              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.warning').fadeIn();
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('input[name="phone"]').addClass('warning-input');
              return _context11.abrupt("return");

            case 37:
              sum = state.sum + state.delivery;
              _context11.next = 40;
              return localStorage.getItem('user');

            case 40:
              user = _context11.sent;
              body = {
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
              _context11.next = 44;
              return Object(nookies__WEBPACK_IMPORTED_MODULE_7__["setCookie"])(ctx, 'sum', sum);

            case 44:
              localStorage.setItem("order", JSON.stringify(body));
              _context11.next = 47;
              return loginUser();

            case 47:
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.order-step-loading').show();
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.af-class-cart-page-btn-container').fadeOut(100);
              router.push('/checkout');

            case 50:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                step: step
              }));
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.order-step').slideUp(500);
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.order-step-' + step).slideDown(500);

            case 53:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function stepik() {
      return _ref11.apply(this, arguments);
    };
  }();

  var selectHandle = /*#__PURE__*/function () {
    var _ref12 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(e) {
      var value, doprava;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              value = jquery__WEBPACK_IMPORTED_MODULE_4___default()(e.target).val();
              doprava = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.af-class-doprava-select-html option:selected').text();
              value = parseInt(value, 10);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                delivery: value,
                doprava: doprava
              }));

              if (value > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_4___default()('.address-form-container').slideDown(500);
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_4___default()('.address-form-container').slideUp(500);
              }

            case 5:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function selectHandle(_x9) {
      return _ref12.apply(this, arguments);
    };
  }();

  var _onChange = function onChange(e) {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.warning').fadeOut();
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('input').removeClass('warning-input');
    setState(_objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.name, e.target.value)));
  };

  return __jsx("span", {
    className: "af-view",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "af-class-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "af-class-main-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "af-class-container w-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "af-class-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "af-class-block-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 15
    }
  }, __jsx("strong", {
    className: "af-class-bold-text-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 52
    }
  }, "Ko\u0161\xEDk"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 107
    }
  })), __jsx("div", {
    className: "af-class-cart-page-container w-clearfix",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "af-class-order-step-container w-clearfix",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "af-class-order-step",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "af-class-cart-items-container order-step-1 order-step",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 21
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 23
    }
  }, state.data.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 27
    }
  }, state.data.map(function (item, index) {
    return __jsx("div", {
      className: "af-class-dropdown-cart-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "af-class-amount-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 35
      }
    }, __jsx("div", {
      onClick: function onClick() {
        return plus(index, item.id);
      },
      className: "af-class-plus-amount",
      __self: _this,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 39
      }
    })), __jsx("div", {
      className: "af-class-amount",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "af-class-text-block-9",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 39
      }
    }, item.amount)), __jsx("div", {
      className: "af-class-minus-amount",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 37
      }
    }, __jsx("img", {
      onClick: function onClick() {
        return minus(index, item.id);
      },
      src: __webpack_require__(/*! ../images/minys.png */ "./images/minys.png"),
      loading: "lazy",
      alt: true,
      className: "af-class-image-10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 39
      }
    }))), __jsx("div", {
      className: "af-class-dropdown-cart-img",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 35
      }
    }, __jsx("img", {
      src: "http://localhost:1337".concat(item.image),
      loading: "lazy",
      alt: true,
      className: "af-class-image-7 cart-preview-img",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 79
      }
    })), __jsx("div", {
      className: "af-class-dropdown-cart-desc",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 35
      }
    }, __jsx("h1", {
      className: "af-class-dropdown-cart-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 37
      }
    }, item.name), __jsx("div", {
      className: "af-class-dropdown-cart-cost",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 37
      }
    }, item.price, " K\u010D")), __jsx("div", {
      onClick: function onClick() {
        return deleteProduct(item.id);
      },
      className: "af-class-dropdown-item-control",
      __self: _this,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 122
      }
    })));
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "prazdni-kosik",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 31
    }
  }, "Ko\u0161\xEDk pr\xE1zdn\xFD")))), __jsx("div", {
    className: "af-class-cart-page-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "af-class-cart-page-sum",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "af-class-sum-container af-class-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 25
    }
  }, __jsx("h5", {
    className: "af-class-sum-title af-class-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 27
    }
  }, "Sou\u010Det"), __jsx("h5", {
    className: "af-class-sum-title af-class-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 27
    }
  }, state.sum + state.delivery, " K\u010D")))), __jsx("div", {
    className: "af-class-order-step order-step-2 order-step",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "doprava-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 23
    }
  }, "Vyberte zp\u016Fsob doru\u010Den\xED"), __jsx("div", {
    className: "af-class-cart-page-doprava",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "af-class-doprava-select-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "af-class-doprava-select w-embed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 27
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 29
    }
  }, __jsx("select", {
    onChange: function onChange(e) {
      return selectHandle(e);
    },
    className: "af-class-doprava-select-html",
    size: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 31
    }
  }, __jsx("option", {
    className: "af-class-doprava-option",
    selected: true,
    value: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 33
    }
  }, "Osobn\xED odb\u011Br"), __jsx("option", {
    className: "af-class-doprava-option",
    value: 75,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 33
    }
  }, "\u010Cesk\xE1 po\u0161ta Bal\xEDk do ruky"), __jsx("option", {
    className: "af-class-doprava-option",
    value: 89,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 33
    }
  }, "PPL standardn\xED doru\u010Den\xED"))), __jsx("style", {
    dangerouslySetInnerHTML: {
      __html: "\n   .af-view .af-class-doprava-select-html{\n      border: none;\n      padding: 5px 5px 0px 5px;\n      border-radius: 5px;\n     }\n   .af-view .af-class-doprava-option{\n   \t\tborder-radius: 5px;\n      padding: 2px;\n   }\n   .af-view .af-class-doprava-option:hover{\n   \t\tbackground: #f4f4f4;\n   }\n   "
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "af-class-sum-sum",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 25
    }
  }, __jsx("h5", {
    className: "af-class-sum-sum-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 27
    }
  }, state.delivery), __jsx("h5", {
    className: "af-class-sum-title af-class-page af-class-doprava",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 27
    }
  }, " K\u010D"))), __jsx("div", {
    className: "address-form-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 31
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 33
    }
  }, "M\u011Bsto"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    onChange: function onChange(e) {
      return _onChange(e);
    },
    value: state.city,
    name: "city",
    type: "text",
    placeholder: "Praha",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 31
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 33
    }
  }, "PS\u010C"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    onChange: function onChange(e) {
      return _onChange(e);
    },
    value: state.zipcode,
    name: "zipcode",
    type: "text",
    placeholder: "150 00",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 33
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 31
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 33
    }
  }, "Okres"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    onChange: function onChange(e) {
      return _onChange(e);
    },
    value: state.state,
    name: "state",
    type: "text",
    placeholder: "Praha 5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 31
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 33
    }
  }, "Adresa, Apartment"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    onChange: function onChange(e) {
      return _onChange(e);
    },
    value: state.address,
    name: "address",
    type: "text",
    placeholder: "Adresa, Apartment",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 33
    }
  }))))), __jsx("div", {
    className: "warning",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 25
    }
  }, "T\u0159eba vyplnit v\u0161echna pole"))), __jsx("div", {
    className: "af-class-order-step order-step-3 order-step",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "auth-step-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formBasicEmail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 29
    }
  }, "Cel\xE9 jm\xE9no"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    onChange: function onChange(e) {
      return _onChange(e);
    },
    type: "text",
    name: "name",
    placeholder: "Zadejte sv\xE9 cel\xE9 jm\xE9no",
    value: state.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 29
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formBasicEmail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 29
    }
  }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    onChange: function onChange(e) {
      return _onChange(e);
    },
    type: "email",
    name: "email",
    placeholder: "Zadejte email",
    value: state.email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 29
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formBasicPassword",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 29
    }
  }, "Telefonn\xED \u010D\xEDslo"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    onChange: function onChange(e) {
      return _onChange(e);
    },
    value: state.phone,
    name: "phone",
    type: "phone",
    placeholder: "Zadejte telefonn\xED \u010D\xEDslo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 29
    }
  }))))), __jsx("div", {
    className: "order-step-loading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "loading-element",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 23
    }
  }, __jsx(react_loading__WEBPACK_IMPORTED_MODULE_9___default.a, {
    type: 'bubbles',
    color: "#ff373a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 56
    }
  }))), __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 21
    }
  }, state.data.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "af-class-cart-page-btn-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 27
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return stepik();
    },
    href: "#",
    className: "af-class-button-2 af-class-order-btn-1 w-button continue-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 29
    }
  }, "Pokra\u010Dovat"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 27
    }
  })))), __jsx("div", {
    className: "af-class-cart-script w-embed w-script",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 17
    }
  })))))));
};

_s(Cart, "SJcoibL3mM/3qp6wQbENuex4Uu4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"]];
});

_c = Cart;
/* harmony default export */ __webpack_exports__["default"] = (Cart);

var _c;

$RefreshReg$(_c, "Cart");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcyJdLCJuYW1lcyI6WyJDYXJ0IiwicHJvcHMiLCJjdHgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzdW0iLCJkZWxpdmVyeSIsImF3YWtlIiwic3RlcCIsImFkZHJlc3MiLCJzdGF0ZSIsInppcGNvZGUiLCJjaXR5IiwibmFtZSIsInBob25lIiwiZW1haWwiLCJkb3ByYXZhIiwic2V0U3RhdGUiLCJnZXRTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNhcnRJdGVtcyIsIkpTT04iLCJwYXJzZSIsImRhdGFTdG9yYWdlIiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsIiwicGFyc2VJbnQiLCJwcmljZSIsImFtb3VudCIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVTdGF0ZSIsIiQiLCJzbGlkZVVwIiwiaGlkZSIsInVzZUVmZmVjdCIsImRlbGV0ZVByb2R1Y3QiLCJpZCIsInBsdXMiLCJpbmRleCIsIm1pbnVzIiwibG9naW5Vc2VyIiwiYXhpb3MiLCJwb3N0IiwiaWRlbnRpZmllciIsInBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwidXNlciIsImp3dCIsInNldEl0ZW0iLCJjcmVhdGVPcmRlciIsImVycm9yIiwicmVnaXN0ZXJVc2VyIiwidXNlcm5hbWUiLCJQaG9uZSIsInN0ZXBpayIsImZhZGVJbiIsImFkZENsYXNzIiwiZnVsbFN1bSIsInRleHQiLCJib2R5Iiwic2V0Q29va2llIiwic3RyaW5naWZ5Iiwic2hvdyIsImZhZGVPdXQiLCJwdXNoIiwic2xpZGVEb3duIiwic2VsZWN0SGFuZGxlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwidmFsIiwib25DaGFuZ2UiLCJyZW1vdmVDbGFzcyIsIm1hcCIsIml0ZW0iLCJyZXF1aXJlIiwiaW1hZ2UiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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QUssQ0FBQ04sSUFBTixDQUFXcUIsTUFBWCxHQUNDLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUssYUFBUyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFdBQU8sRUFBRTtBQUFBLGFBQU1pQyxNQUFNLEVBQVo7QUFBQSxLQUFaO0FBQTRCLFFBQUksRUFBQyxHQUFqQztBQUFxQyxhQUFTLEVBQUMsOERBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsQ0FGRixDQURELEdBV0csTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWk4sQ0FwSUYsQ0FERixDQURGLEVBMEpFO0FBQUssYUFBUyxFQUFDLHVDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExSkYsQ0FGRixDQURGLENBREYsQ0FERixDQURGLENBRkY7QUE0S0QsQ0FsWUQ7O0dBQU01RCxJO1VBQ1dJLHFEOzs7S0FEWEosSTtBQW9ZU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC5iMWFiYjk0NTk0YzE1MzdiMzcxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgc2V0Q29va2llIH0gZnJvbSAnbm9va2llcydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0TG9hZGluZyBmcm9tICdyZWFjdC1sb2FkaW5nJztcblxuY29uc3QgQ2FydCA9IChwcm9wcywgY3R4KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIGRhdGE6IFtdLFxuICAgIHN1bTogMCxcbiAgICBkZWxpdmVyeTogMCxcbiAgICBhd2FrZTogZmFsc2UsXG4gICAgc3RlcDogMSxcbiAgICBhZGRyZXNzOiAnJyxcbiAgICBzdGF0ZTogJycsXG4gICAgemlwY29kZTogJycsXG4gICAgY2l0eTogJycsXG4gICAgbmFtZTogJycsXG4gICAgcGhvbmU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBkb3ByYXZhOiAnT3NvYm7DrSBvZGLEm3InXG4gIH0pO1xuXG4gIGNvbnN0IGdldFN0b3JhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGNhcnRJdGVtcyA9IGF3YWl0IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9kdWN0cycpO1xuICAgIGxldCBkYXRhU3RvcmFnZSA9IGF3YWl0IEpTT04ucGFyc2UoY2FydEl0ZW1zKTtcbiAgICBpZiAoZGF0YVN0b3JhZ2UpIHtcbiAgICAgIGlmIChzdGF0ZS5kYXRhLmxlbmd0aCAhPSBkYXRhU3RvcmFnZS5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGF3YWl0IGRhdGFTdG9yYWdlLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgIHN1bSArPSBwYXJzZUludChlbC5wcmljZSwgMTApICogZWwuYW1vdW50O1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgZGF0YTogZGF0YVN0b3JhZ2UsIHN1bTogc3VtIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVN0YXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0YXRlLmRlbGl2ZXJ5KVxuICAgIGxldCBjYXJ0SXRlbXMgPSBhd2FpdCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZHVjdHMnKTtcbiAgICBsZXQgZGF0YVN0b3JhZ2UgPSBhd2FpdCBKU09OLnBhcnNlKGNhcnRJdGVtcyk7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgYXdhaXQgZGF0YVN0b3JhZ2UuZm9yRWFjaChlbCA9PiB7XG4gICAgICBzdW0gKz0gcGFyc2VJbnQoZWwucHJpY2UsIDEwKSAqIGVsLmFtb3VudDtcbiAgICB9KTtcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBkYXRhOiBkYXRhU3RvcmFnZSwgc3VtOiBzdW0gfSlcbiAgfVxuXG5cblxuICBjb25zdCBhd2FrZSA9ICgpID0+IHtcbiAgICBpZiAoIXN0YXRlLmF3YWtlKSB7XG4gICAgICAkKCcub3JkZXItc3RlcC0yJykuc2xpZGVVcCgwKTtcbiAgICAgICQoJy5vcmRlci1zdGVwLWxvYWRpbmcnKS5oaWRlKCk7XG4gICAgICAkKCcuYWRkcmVzcy1mb3JtLWNvbnRhaW5lcicpLnNsaWRlVXAoMCk7XG4gICAgICAkKCcub3JkZXItc3RlcC0zJykuc2xpZGVVcCgwKTtcbiAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGF3YWtlOiB0cnVlIH0pXG4gICAgfVxuICB9XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFN0b3JhZ2UoKTtcbiAgICBhd2FrZSgpO1xuICB9KTtcblxuICBjb25zdCBkZWxldGVQcm9kdWN0ID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgYXdhaXQgcHJvcHMuZGVsZXRlUHJvZHVjdChpZCk7XG4gICAgZ2V0U3RvcmFnZSgpO1xuICB9XG5cbiAgY29uc3QgcGx1cyA9IGFzeW5jIChpbmRleCwgaWQpID0+IHtcbiAgICBhd2FpdCBwcm9wcy5wbHVzKGluZGV4LCBpZCk7XG4gICAgdXBkYXRlU3RhdGUoKTtcbiAgfVxuXG5cblxuXG4gIGNvbnN0IG1pbnVzID0gYXN5bmMgKGluZGV4LCBpZCkgPT4ge1xuICAgIGF3YWl0IHByb3BzLm1pbnVzKGluZGV4LCBpZCk7XG4gICAgdXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnVXNlciBTaWduaW5nIEluJylcbiAgICBhd2FpdCBheGlvc1xuICAgICAgLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hdXRoL2xvY2FsJywge1xuICAgICAgICBpZGVudGlmaWVyOiBzdGF0ZS5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6ICcxMjM0NTYnLFxuICAgICAgfSlcbiAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyBIYW5kbGUgc3VjY2Vzcy5cbiAgICAgICAgY29uc29sZS5sb2coJ1dlbGwgZG9uZSEnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgcHJvZmlsZScsIHJlc3BvbnNlLmRhdGEudXNlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIHRva2VuJywgcmVzcG9uc2UuZGF0YS5qd3QpO1xuICAgICAgICBhd2FpdCBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlc3BvbnNlLmRhdGEuand0KVxuICAgICAgICBhd2FpdCBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgcmVzcG9uc2UuZGF0YS51c2VyLmlkKVxuICAgICAgICByZXR1cm4gYXdhaXQgY3JlYXRlT3JkZXIoKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChhc3luYyAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlZ2lzdGVyVXNlcigpO1xuICAgICAgfSk7XG4gIH1cblxuICBjb25zdCByZWdpc3RlclVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1VzZXIgcmVnaXN0cmF0aW9uJylcbiAgICBhd2FpdCBheGlvc1xuICAgICAgLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hdXRoL2xvY2FsL3JlZ2lzdGVyJywge1xuICAgICAgICB1c2VybmFtZTogc3RhdGUubmFtZSxcbiAgICAgICAgZW1haWw6IHN0YXRlLmVtYWlsLFxuICAgICAgICBQaG9uZTogc3RhdGUucGhvbmUsXG4gICAgICAgIHBhc3N3b3JkOiAnMTIzNDU2JyxcbiAgICAgIH0pXG4gICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgcHJvZmlsZScsIHJlc3BvbnNlLmRhdGEudXNlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIHRva2VuJywgcmVzcG9uc2UuZGF0YS5qd3QpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlc3BvbnNlLmRhdGEuand0KVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgcmVzcG9uc2UuZGF0YS51c2VyLmlkKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5yZXNwb25zZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHN0ZXBpayA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICBsZXQgc3RlcCA9IHN0YXRlLnN0ZXAgKyAxO1xuICAgIC8vIGlucHV0IGNoZWNraW5nXG4gICAgaWYgKHN0ZXAgPT0gMykge1xuICAgICAgaWYgKHN0YXRlLmRlbGl2ZXJ5ID4gMCkge1xuICAgICAgICBpZiAoc3RhdGUuY2l0eS5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgJCgnLndhcm5pbmcnKS5mYWRlSW4oKTtcbiAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiY2l0eVwiXScpLmFkZENsYXNzKCd3YXJuaW5nLWlucHV0Jyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5zdGF0ZS5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgJCgnLndhcm5pbmcnKS5mYWRlSW4oKTtcbiAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwic3RhdGVcIl0nKS5hZGRDbGFzcygnd2FybmluZy1pbnB1dCcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuemlwY29kZS5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgJCgnLndhcm5pbmcnKS5mYWRlSW4oKTtcbiAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiemlwY29kZVwiXScpLmFkZENsYXNzKCd3YXJuaW5nLWlucHV0Jyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5hZGRyZXNzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAkKCcud2FybmluZycpLmZhZGVJbigpO1xuICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJhZGRyZXNzXCJdJykuYWRkQ2xhc3MoJ3dhcm5pbmctaW5wdXQnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBmdWxsU3VtID0gc3RhdGUuc3VtICsgc3RhdGUuZGVsaXZlcnk7XG4gICAgICAkKCcuYWYtY2xhc3MtY2FydC1wYWdlLWNvbnRyb2wnKS5zbGlkZVVwKDUwMCk7XG4gICAgICAkKCcuY29udGludWUtYnRuJykudGV4dCgnUGxhdGl0ICcgKyBmdWxsU3VtICsgJyBLxI0nKVxuICAgIH1cbiAgICBpZiAoc3RlcCA9PSA0KSB7XG4gICAgICBpZiAoc3RhdGUuZGVsaXZlcnkgPiAwKSB7XG4gICAgICAgIGlmIChzdGF0ZS5uYW1lLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAkKCcud2FybmluZycpLmZhZGVJbigpO1xuICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJuYW1lXCJdJykuYWRkQ2xhc3MoJ3dhcm5pbmctaW5wdXQnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLmVtYWlsLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAkKCcud2FybmluZycpLmZhZGVJbigpO1xuICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJlbWFpbFwiXScpLmFkZENsYXNzKCd3YXJuaW5nLWlucHV0Jyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5waG9uZS5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgJCgnLndhcm5pbmcnKS5mYWRlSW4oKTtcbiAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwicGhvbmVcIl0nKS5hZGRDbGFzcygnd2FybmluZy1pbnB1dCcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IHN1bSA9IHN0YXRlLnN1bSArIHN0YXRlLmRlbGl2ZXJ5O1xuICAgICAgbGV0IHVzZXIgPSBhd2FpdCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xuICAgICAgbGV0IGJvZHkgPSB7XG4gICAgICAgICdDaXR5Jzogc3RhdGUuY2l0eSxcbiAgICAgICAgJ1N0YXRlJzogc3RhdGUuc3RhdGUsXG4gICAgICAgICdBZGRyZXNzJzogc3RhdGUuYWRkcmVzcyxcbiAgICAgICAgJ1ppcENvZGUnOiBzdGF0ZS56aXBjb2RlLFxuICAgICAgICAnT3JkZXInOiBzdGF0ZS5kYXRhLFxuICAgICAgICAnRGVsaXZlcnknOiBzdGF0ZS5kb3ByYXZhLFxuICAgICAgICAnRGVsaXZlcnlQcmljZSc6IHN0YXRlLmRlbGl2ZXJ5LFxuICAgICAgICAnU3VtJzogc3RhdGUuc3VtLFxuICAgICAgICAnVXNlcic6IHVzZXJcbiAgICAgIH07XG4gICAgICBhd2FpdCBzZXRDb29raWUoY3R4LCAnc3VtJywgc3VtKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwib3JkZXJcIiwgSlNPTi5zdHJpbmdpZnkoYm9keSkpXG4gICAgICBhd2FpdCBsb2dpblVzZXIoKTtcbiAgICAgICQoJy5vcmRlci1zdGVwLWxvYWRpbmcnKS5zaG93KCk7XG4gICAgICAkKCcuYWYtY2xhc3MtY2FydC1wYWdlLWJ0bi1jb250YWluZXInKS5mYWRlT3V0KDEwMCk7XG4gICAgICByb3V0ZXIucHVzaCgnL2NoZWNrb3V0Jyk7XG4gICAgfVxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIHN0ZXA6IHN0ZXAgfSlcbiAgICAkKCcub3JkZXItc3RlcCcpLnNsaWRlVXAoNTAwKTtcbiAgICAkKCcub3JkZXItc3RlcC0nICsgc3RlcCkuc2xpZGVEb3duKDUwMCk7XG4gIH1cblxuICBjb25zdCBzZWxlY3RIYW5kbGUgPSBhc3luYyAoZSkgPT4ge1xuICAgIGxldCB2YWx1ZSA9ICQoZS50YXJnZXQpLnZhbCgpO1xuICAgIGxldCBkb3ByYXZhID0gJCgnLmFmLWNsYXNzLWRvcHJhdmEtc2VsZWN0LWh0bWwgb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpO1xuICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBkZWxpdmVyeTogdmFsdWUsIGRvcHJhdmE6IGRvcHJhdmEgfSlcbiAgICBpZiAodmFsdWUgPiAwKSB7XG4gICAgICAkKCcuYWRkcmVzcy1mb3JtLWNvbnRhaW5lcicpLnNsaWRlRG93big1MDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuYWRkcmVzcy1mb3JtLWNvbnRhaW5lcicpLnNsaWRlVXAoNTAwKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgJCgnLndhcm5pbmcnKS5mYWRlT3V0KCk7XG4gICAgJCgnaW5wdXQnKS5yZW1vdmVDbGFzcygnd2FybmluZy1pbnB1dCcpO1xuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiAoXG5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJhZi12aWV3XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1tYWluLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLWNvbnRhaW5lciB3LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1ibG9ja1wiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWYtY2xhc3MtYmxvY2stdGl0bGVcIj48c3Ryb25nIGNsYXNzTmFtZT1cImFmLWNsYXNzLWJvbGQtdGV4dC0zXCI+S2/FocOtazwvc3Ryb25nPjxiciAvPjwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWYtY2xhc3MtY2FydC1wYWdlLWNvbnRhaW5lciB3LWNsZWFyZml4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1vcmRlci1zdGVwLWNvbnRhaW5lciB3LWNsZWFyZml4XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLW9yZGVyLXN0ZXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1jYXJ0LWl0ZW1zLWNvbnRhaW5lciBvcmRlci1zdGVwLTEgb3JkZXItc3RlcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5kYXRhLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLWRyb3Bkb3duLWNhcnQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWYtY2xhc3MtYW1vdW50LWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcGx1cyhpbmRleCwgaXRlbS5pZCl9IGNsYXNzTmFtZT1cImFmLWNsYXNzLXBsdXMtYW1vdW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vaW1hZ2VzL3BsdXMucG5nXCIpfSBsb2FkaW5nPVwibGF6eVwiIGFsdCBjbGFzc05hbWU9XCJhZi1jbGFzcy1pbWFnZS05XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1hbW91bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy10ZXh0LWJsb2NrLTlcIj57aXRlbS5hbW91bnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWYtY2xhc3MtbWludXMtYW1vdW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgb25DbGljaz17KCkgPT4gbWludXMoaW5kZXgsIGl0ZW0uaWQpfSBzcmM9e3JlcXVpcmUoXCIuLi9pbWFnZXMvbWlueXMucG5nXCIpfSBsb2FkaW5nPVwibGF6eVwiIGFsdCBjbGFzc05hbWU9XCJhZi1jbGFzcy1pbWFnZS0xMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLWRyb3Bkb3duLWNhcnQtaW1nXCI+PGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcke2l0ZW0uaW1hZ2V9YH0gbG9hZGluZz1cImxhenlcIiBhbHQgY2xhc3NOYW1lPVwiYWYtY2xhc3MtaW1hZ2UtNyBjYXJ0LXByZXZpZXctaW1nXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLWRyb3Bkb3duLWNhcnQtZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFmLWNsYXNzLWRyb3Bkb3duLWNhcnQtdGl0bGVcIj57aXRlbS5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLWRyb3Bkb3duLWNhcnQtY29zdFwiPntpdGVtLnByaWNlfSBLxI08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGRlbGV0ZVByb2R1Y3QoaXRlbS5pZCl9IGNsYXNzTmFtZT1cImFmLWNsYXNzLWRyb3Bkb3duLWl0ZW0tY29udHJvbFwiPjxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vaW1hZ2VzL2Nyb3NzLnBuZ1wiKX0gbG9hZGluZz1cImxhenlcIiBhbHQgY2xhc3NOYW1lPVwiYWYtY2xhc3MtaW1hZ2UtOFwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByYXpkbmkta29zaWsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLb8Whw61rIHByw6F6ZG7DvVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLWNhcnQtcGFnZS1jb250cm9sXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLWNhcnQtcGFnZS1zdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWYtY2xhc3Mtc3VtLWNvbnRhaW5lciBhZi1jbGFzcy1wYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJhZi1jbGFzcy1zdW0tdGl0bGUgYWYtY2xhc3MtcGFnZVwiPlNvdcSNZXQ8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiYWYtY2xhc3Mtc3VtLXRpdGxlIGFmLWNsYXNzLXBhZ2VcIj57c3RhdGUuc3VtICsgc3RhdGUuZGVsaXZlcnl9IEvEjTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLW9yZGVyLXN0ZXAgb3JkZXItc3RlcC0yIG9yZGVyLXN0ZXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9wcmF2YS10aXRsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICBWeWJlcnRlIHpwxa9zb2IgZG9ydcSNZW7DrVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmLWNsYXNzLWNhcnQtcGFnZS1kb3ByYXZhXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWYtY2xhc3MtZG9wcmF2YS1zZWxlY3QtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1kb3ByYXZhLXNlbGVjdCB3LWVtYmVkXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBzZWxlY3RIYW5kbGUoZSl9IGNsYXNzTmFtZT1cImFmLWNsYXNzLWRvcHJhdmEtc2VsZWN0LWh0bWxcIiBzaXplPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJhZi1jbGFzcy1kb3ByYXZhLW9wdGlvblwiIHNlbGVjdGVkIHZhbHVlPXswfT5Pc29ibsOtIG9kYsSbcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzTmFtZT1cImFmLWNsYXNzLWRvcHJhdmEtb3B0aW9uXCIgdmFsdWU9ezc1fT7EjGVza8OhIHBvxaF0YSBCYWzDrWsgZG8gcnVreTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzTmFtZT1cImFmLWNsYXNzLWRvcHJhdmEtb3B0aW9uXCIgdmFsdWU9ezg5fT5QUEwgc3RhbmRhcmRuw60gZG9ydcSNZW7DrTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IFwiXFxuICAgLmFmLXZpZXcgLmFmLWNsYXNzLWRvcHJhdmEtc2VsZWN0LWh0bWx7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHBhZGRpbmc6IDVweCA1cHggMHB4IDVweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICB9XFxuICAgLmFmLXZpZXcgLmFmLWNsYXNzLWRvcHJhdmEtb3B0aW9ue1xcbiAgIFxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICBwYWRkaW5nOiAycHg7XFxuICAgfVxcbiAgIC5hZi12aWV3IC5hZi1jbGFzcy1kb3ByYXZhLW9wdGlvbjpob3ZlcntcXG4gICBcXHRcXHRiYWNrZ3JvdW5kOiAjZjRmNGY0O1xcbiAgIH1cXG4gICBcIiB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWYtY2xhc3Mtc3VtLXN1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiYWYtY2xhc3Mtc3VtLXN1bS1jb250ZW50XCI+e3N0YXRlLmRlbGl2ZXJ5fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJhZi1jbGFzcy1zdW0tdGl0bGUgYWYtY2xhc3MtcGFnZSBhZi1jbGFzcy1kb3ByYXZhXCI+IEvEjTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWRkcmVzcy1mb3JtLWNvbnRhaW5lcic+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk3Em3N0bzwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlKX0gdmFsdWU9e3N0YXRlLmNpdHl9IG5hbWU9J2NpdHknIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQcmFoYVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBTxIw8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9IHZhbHVlPXtzdGF0ZS56aXBjb2RlfSBuYW1lPSd6aXBjb2RlJyB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiMTUwIDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Pa3JlczwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlKX0gdmFsdWU9e3N0YXRlLnN0YXRlfSBuYW1lPSdzdGF0ZScgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlByYWhhIDVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5BZHJlc2EsIEFwYXJ0bWVudDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlKX0gdmFsdWU9e3N0YXRlLmFkZHJlc3N9IG5hbWU9J2FkZHJlc3MnIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBZHJlc2EsIEFwYXJ0bWVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dhcm5pbmcnPlTFmWViYSB2eXBsbml0IHbFoWVjaG5hIHBvbGU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1vcmRlci1zdGVwIG9yZGVyLXN0ZXAtMyBvcmRlci1zdGVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F1dGgtc3RlcC1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY0VtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+Q2Vsw6kgam3DqW5vPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9IHR5cGU9XCJ0ZXh0XCIgbmFtZT0nbmFtZScgcGxhY2Vob2xkZXI9XCJaYWRlanRlIHN2w6kgY2Vsw6kgam3DqW5vXCIgdmFsdWU9e3N0YXRlLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUJhc2ljRW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfSB0eXBlPVwiZW1haWxcIiBuYW1lPSdlbWFpbCcgcGxhY2Vob2xkZXI9XCJaYWRlanRlIGVtYWlsXCIgdmFsdWU9e3N0YXRlLmVtYWlsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY1Bhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VGVsZWZvbm7DrSDEjcOtc2xvPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9IHZhbHVlPXtzdGF0ZS5waG9uZX0gbmFtZT0ncGhvbmUnIHR5cGU9XCJwaG9uZVwiIHBsYWNlaG9sZGVyPVwiWmFkZWp0ZSB0ZWxlZm9ubsOtIMSNw61zbG9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3JkZXItc3RlcC1sb2FkaW5nJz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1lbGVtZW50Jz48UmVhY3RMb2FkaW5nIHR5cGU9eydidWJibGVzJ30gY29sb3I9XCIjZmYzNzNhXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuZGF0YS5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1jYXJ0LXBhZ2UtYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHN0ZXBpaygpfSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImFmLWNsYXNzLWJ1dHRvbi0yIGFmLWNsYXNzLW9yZGVyLWJ0bi0xIHctYnV0dG9uIGNvbnRpbnVlLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9rcmHEjW92YXRcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZi1jbGFzcy1jYXJ0LXNjcmlwdCB3LWVtYmVkIHctc2NyaXB0XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L3NwYW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydCJdLCJzb3VyY2VSb290IjoiIn0=