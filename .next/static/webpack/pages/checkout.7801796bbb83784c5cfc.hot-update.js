webpackHotUpdate_N_E("pages/checkout",{

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_checkout_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/checkout-form */ "./components/checkout-form.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\anton\\Desktop\\Next\\metaltec\\pages\\checkout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var CheckoutPage = function CheckoutPage(ctx) {
  var stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__["loadStripe"])("pk_test_51HfCQbKalev6rGvBMHNaOtgfWfMUKJzkhs7TfmcQ5fjp5XyoeG2z97erNGBrtWPLnv3QmN1ImHhkNzX0fgX9lLKQ00ogCnUjLE");

  var _parseCookies = Object(nookies__WEBPACK_IMPORTED_MODULE_3__["parseCookies"])(ctx),
      sum = _parseCookies.sum;

  return __jsx("div", {
    className: "checkout-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__["Elements"], {
    stripe: stripePromise,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(_components_checkout_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sum: sum,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })));
};

_c = CheckoutPage;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (CheckoutPage);

var _c;

$RefreshReg$(_c, "CheckoutPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hlY2tvdXQuanMiXSwibmFtZXMiOlsiQ2hlY2tvdXRQYWdlIiwiY3R4Iiwic3RyaXBlUHJvbWlzZSIsImxvYWRTdHJpcGUiLCJwYXJzZUNvb2tpZXMiLCJzdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBaUNBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEdBQUQsRUFBUztBQUMxQixNQUFNQyxhQUFhLEdBQUdDLG9FQUFVLENBQUMsNkdBQUQsQ0FBaEM7O0FBRDBCLHNCQUVWQyw0REFBWSxDQUFDSCxHQUFELENBRkY7QUFBQSxNQUVsQkksR0FGa0IsaUJBRWxCQSxHQUZrQjs7QUFHMUIsU0FDSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdFQUFEO0FBQVUsVUFBTSxFQUFFSCxhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpRUFBRDtBQUFjLE9BQUcsRUFBRUcsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0FESjtBQVFILENBWEQ7O0tBQU1MLFk7O0FBYVNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0Ljc4MDE3OTZiYmI4Mzc4NGM1Y2ZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xyXG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XHJcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XHJcbmltcG9ydCB7IHBhcnNlQ29va2llcywgc2V0Q29va2llIH0gZnJvbSAnbm9va2llcydcclxuaW1wb3J0IENoZWNrb3V0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGVja291dC1mb3JtXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKCdza190ZXN0XzUxSGZDUWJLYWxldjZyR3ZCQlg2STlUU2VyWE9DMXcwUktCb2VFd0UxSkVndHliNEtoSUIzRGlKNkY0bzRhaGdzSThTSEVqWERBUnFTT1hkcWZRb05YelVhMDBqMGI4a0M1aicpO1xyXG4gICAgbGV0IHBheW1lbnRJbnRlbnQ7XHJcbiAgICBjb25zdCB7IHBheW1lbnRJbnRlbnRJZCwgc3VtIH0gPSBhd2FpdCBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHJcbiAgICBpZiAocGF5bWVudEludGVudElkKSB7XHJcbiAgICAgICAgcGF5bWVudEludGVudCA9IGF3YWl0IHN0cmlwZS5wYXltZW50SW50ZW50cy5yZXRyaWV2ZShwYXltZW50SW50ZW50SWQpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICBwYXltZW50SW50ZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgc3VtQ1pLID0gc3VtICogMTAwO1xyXG4gICAgcGF5bWVudEludGVudCA9IGF3YWl0IHN0cmlwZS5wYXltZW50SW50ZW50cy5jcmVhdGUoe1xyXG4gICAgICAgIGFtb3VudDogc3VtQ1pLLFxyXG4gICAgICAgIGN1cnJlbmN5OiAnY3prJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0Q29va2llKGN0eCwgJ3BheW1lbnRJbnRlbnRJZCcsIHBheW1lbnRJbnRlbnQuaWQpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcGF5bWVudEludGVudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IENoZWNrb3V0UGFnZSA9IChjdHgpID0+IHtcclxuICAgIGNvbnN0IHN0cmlwZVByb21pc2UgPSBsb2FkU3RyaXBlKFwicGtfdGVzdF81MUhmQ1FiS2FsZXY2ckd2Qk1ITmFPdGdmV2ZNVUtKemtoczdUZm1jUTVmanA1WHlvZUcyejk3ZXJOR0JydFdQTG52M1FtTjFJbUhoa056WDBmZ1g5bExLUTAwb2dDblVqTEVcIik7XHJcbiAgICBjb25zdCB7IHN1bSB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGVja291dC1wYWdlJz5cclxuICAgICAgICAgICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlUHJvbWlzZX0+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tvdXRGb3JtIHN1bT17c3VtfSAvPlxyXG4gICAgICAgICAgICA8L0VsZW1lbnRzPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=