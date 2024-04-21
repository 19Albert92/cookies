"use strict";
(self["webpackChunkcookies"] = self["webpackChunkcookies"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);





function AppComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 52)(4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 55)(9, "div", 56)(10, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_41_Template_button_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.scrollTo(_r3, product_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", product_r4.price, " ", ctx_r1.currency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.count);
  }
}
const _c0 = function (a0) {
  return {
    "is-error": a0
  };
};
class AppComponent {
  constructor(fb, http) {
    this.fb = fb;
    this.http = http;
    this.currency = '$';
    this.form = this.fb.group({
      product: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
    });
    this.getCookies();
  }
  getCookies() {
    this.http.get('https://testologia.ru/cookies').subscribe(data => this.productsList = data);
  }
  scrollTo(target, product) {
    target.scrollIntoView({
      behavior: 'smooth'
    });
    if (product) {
      this.form.patchValue({
        product: `${product.title} (${product.price} ${this.currency})`
      });
    }
  }
  changeCurrency() {
    let newCurrency = '$';
    let coefficient = 1;
    if (this.currency === '$') {
      newCurrency = '₽';
      coefficient = 90;
    } else if (this.currency === '₽') {
      newCurrency = 'BYN';
      coefficient = 3;
    } else if (this.currency === 'BYN') {
      newCurrency = '€';
      coefficient = 0.9;
    } else if (this.currency === '€') {
      newCurrency = '¥';
      coefficient = 6.9;
    }
    this.currency = newCurrency;
    this.productsList.forEach(item => {
      item.price = +(item.basePrice * coefficient).toFixed();
    });
  }
  confirmOrder() {
    if (this.form.valid) {
      this.http.post('https://testologia.ru/cookies-order', this.form.value).subscribe({
        next: response => {
          alert(response.message);
          this.form.reset();
        },
        error: response => {
          alert(response.message);
        }
      });
    }
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 83,
    vars: 16,
    consts: [[1, "main"], ["title", "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u0430\u043B\u044E\u0442\u0443", "id", "change-currency", 1, "currency", 3, "click"], [1, "header"], [1, "container"], [1, "logo"], ["src", "./assets/images/logo.png", "alt", "Logo"], [1, "menu"], [1, "menu-list"], [1, "menu-item"], [3, "click"], [1, "main-content"], ["src", "./assets/images/line1.png", "alt", "line", 1, "line", "bg-line1"], [1, "main-info"], [1, "main-title"], [1, "main-desc"], [1, "main-action"], ["id", "main-action-button", 1, "btn", "is-main"], [1, "main-image"], ["src", "./assets/images/cookie.png", "alt", "Cookie"], ["id", "products", 1, "products"], ["products", ""], ["src", "./assets/images/line2.png", "alt", "line", 1, "line", "bg-line2"], [1, "common-title"], [1, "products-items"], ["class", "products-item", 4, "ngFor", "ngForOf"], ["id", "love", 1, "love"], ["love", ""], [1, "love-items"], [1, "love-item", "love-item-left"], [1, "love-item-title"], [1, "love-item-desc"], [1, "love-item", "love-item-right"], ["src", "./assets/images/love-section-image.png", "alt", "love image"], ["id", "order", 1, "order"], ["order", ""], ["src", "./assets/images/line3.png", "alt", "line", 1, "line", "bg-line3"], ["src", "./assets/images/breadcrumbs.png", "alt", "Breadcrumbs", 1, "order-bg-image"], [1, "order-block"], [1, "order-form"], [1, "order-form-title"], [1, "order-form-inputs", 3, "formGroup"], ["type", "text", "placeholder", "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0435\u0447\u0435\u043D\u044C\u0435", "formControlName", "product", "readonly", ""], ["type", "text", "placeholder", "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F", "formControlName", "name"], ["type", "text", "placeholder", "\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D", "formControlName", "phone"], [1, "btn", "is-violet", 3, "disabled", "click"], [1, "order-image"], ["src", "./assets/images/order-image.png", "alt", "cookies"], [1, "footer"], ["src", "./assets/images/logo.png", "alt", "logo"], [1, "products-item"], [1, "products-item-image"], ["alt", "product-image", 3, "src"], [1, "products-item-detail"], [1, "products-item-title"], [1, "products-item-desc"], [1, "products-item-extra"], [1, "products-item-info"], [1, "products-item-price"], [1, "products-item-weight"], [1, "btn", "is-violet", 3, "click"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_1_listener() {
          return ctx.changeCurrency();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 2)(4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 6)(8, "ul", 7)(9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollTo(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8)(13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollTo(_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041E \u043D\u0430\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8)(16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollTo(_r3));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 10)(19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041C\u0430\u0433\u0438\u044F \u0432\u043A\u0443\u0441\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u0432 \u043A\u0430\u0436\u0434\u043E\u0439 \u043A\u0440\u043E\u0448\u043A\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u041D\u0430\u0448\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u044B \u0432\u0434\u044B\u0445\u0430\u044E\u0442 \u0436\u0438\u0437\u043D\u044C \u0432 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u0438\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442\u043E\u0432: \u0430\u0440\u043E\u043C\u0430\u0442\u043D\u043E\u0435 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0435 \u043C\u0430\u0441\u043B\u043E, \u0441\u0432\u0435\u0436\u0438\u0435 \u0441\u043B\u0438\u0432\u043A\u0438, \u0447\u0438\u0441\u0442\u044B\u0439 \u043C\u0451\u0434 \u0438 \u043E\u0442\u0431\u043E\u0440\u043D\u0430\u044F \u043C\u0443\u043A\u0430. \u041C\u044B \u0442\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0442\u0431\u0438\u0440\u0430\u0435\u043C \u043A\u0430\u0436\u0434\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043F\u0440\u0435\u043C\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0435\u0447\u0435\u043D\u044C\u044F, \u0441\u0442\u0440\u0435\u043C\u044F\u0441\u044C \u043F\u043E\u0434\u0430\u0440\u0438\u0442\u044C \u0432\u0430\u043C \u0438\u0441\u0442\u0438\u043D\u043D\u043E\u0435 \u043A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u043E\u0435 \u043D\u0430\u0441\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15)(29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 19, 20)(35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22)(38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0435\u0447\u0435\u043D\u044C\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AppComponent_div_41_Template, 16, 6, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 25, 26)(44, "div", 3)(45, "div", 22)(46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u041F\u0435\u043A\u0430\u0440\u043D\u044F \u0441 \u043B\u044E\u0431\u043E\u0432\u044C\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27)(49, "div", 28)(50, "div", 29)(51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u041F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043E \u0441 \u0437\u0430\u0431\u043E\u0442\u043E\u0439, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0434\u043E\u0432\u0430\u0442\u044C \u0432\u0430\u0441 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30)(54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \u041C\u044B \u0441 \u0433\u043E\u0440\u0434\u043E\u0441\u0442\u044C\u044E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u043D\u0430\u0448\u0435 \u043F\u0435\u0447\u0435\u043D\u044C\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043C\u044B \u0432\u044B\u043F\u0435\u043A\u0430\u0435\u043C \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u0441 1995 \u0433\u043E\u0434\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0443\u0447\u0448\u0438\u0435 \u0438\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442\u044B. \u041F\u043E\u0433\u0440\u0443\u0437\u0438\u0442\u0435\u0441\u044C \u0432 \u043C\u0438\u0440 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u043D\u044B\u0445 \u043B\u0430\u043A\u043E\u043C\u0441\u0442\u0432, \u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0441 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C \u043F\u0435\u0440\u0435\u0434\u043E\u0432\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439, \u0438 \u043D\u0430\u0441\u043B\u0430\u0434\u0438\u0442\u0435\u0441\u044C \u0438\u0445 \u043D\u0435\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u043C\u044B\u043C \u0432\u043A\u0443\u0441\u043E\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "section", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 3)(62, "div", 22)(63, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0435\u0447\u0435\u043D\u044C\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 37)(67, "div", 38)(68, "div", 39)(69, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0434\u043B\u044F \u0441\u0435\u0431\u044F \u0432\u043E\u043B\u0448\u0435\u0431\u0441\u0442\u0432\u043E \u0432\u043A\u0443\u0441\u0430 \u0441 \u043D\u0430\u0448\u0438\u043C \u043F\u0440\u0435\u043C\u0438\u0430\u043B\u044C\u043D\u044B\u043C \u043F\u0435\u0447\u0435\u043D\u044C\u0435\u043C! \u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441 \u0438 \u043E\u043A\u0443\u043D\u0438\u0442\u0435\u0441\u044C \u0432 \u043C\u0438\u0440 \u0441\u043B\u0430\u0434\u043A\u0438\u0445 \u043D\u0430\u0441\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0439.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 41)(73, "input", 42)(74, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_75_listener() {
          return ctx.confirmOrder();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "footer", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u00AB\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ((tmp_3_0 = ctx.form.get("product")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.form.get("product")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.form.get("product")) == null ? null : tmp_3_0.touched))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ((tmp_4_0 = ctx.form.get("name")) == null ? null : tmp_4_0.invalid) && (((tmp_4_0 = ctx.form.get("name")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.form.get("name")) == null ? null : tmp_4_0.touched))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ((tmp_5_0 = ctx.form.get("phone")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.form.get("phone")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.form.get("phone")) == null ? null : tmp_5_0.touched))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: [".main[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.currency[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 50px;\n  bottom: 50px;\n  border: 1px solid white;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all .4s ease;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  -webkit-user-select: none;\n          user-select: none;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(0.9);\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);\n  }\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);\n  }\n  100% {\n    transform: scale(0.9);\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.0);\n  }\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1300px;\n  margin: auto;\n}\n.header[_ngcontent-%COMP%] {\n  padding: 40px 0;\n}\n.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n}\n.menu[_ngcontent-%COMP%] {\n  margin-left: 250px;\n}\n.menu-list[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  gap: 50px;\n}\n.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  font-size: 16px;\n  line-height: 130%;\n  border-bottom: 1px solid transparent;\n  padding: 5px;\n}\n.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid white;\n}\n.main-content[_ngcontent-%COMP%] {\n  padding-top: 161px;\n  padding-bottom: 200px;\n}\n.main-title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 90px;\n}\n.main-desc[_ngcontent-%COMP%] {\n  max-width: 700px;\n  font-size: 18px;\n  line-height: 130%;\n  margin-bottom: 40px;\n}\n.main-image[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: -1;\n}\n.products[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  position: relative;\n}\n.common-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 60px;\n  line-height: 100%;\n  text-align: center;\n}\n.products-items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 90px 24px;\n  margin-top: 110px;\n}\n.products-item[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #5D3427;\n}\n.products-item-image[_ngcontent-%COMP%] {\n  height: 202px;\n  text-align: center;\n}\n.products-item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  top: -70px;\n  max-width: 100%;\n  height: 272px;\n}\n.products-item-detail[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.products-item-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.products-item-desc[_ngcontent-%COMP%] {\n  line-height: 120%;\n  font-size: 14px;\n  height: 110px;\n}\n.products-item-extra[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.products-item-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.products-item-price[_ngcontent-%COMP%] {\n  font-family: 'Steppe-ExtraBold', sans-serif;\n  font-size: 24px;\n  color: #5243F4;\n}\n.products-item-weight[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.love[_ngcontent-%COMP%] {\n  padding-bottom: 147px;\n}\n.love-items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 20px;\n  margin-top: 40px;\n}\n.love-item-left[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n  background-color: white;\n  color: #5D3427;\n  padding: 0 80px;\n}\n.love-item-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.love-item-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 130%;\n}\n.love-item-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.order[_ngcontent-%COMP%] {\n  margin-bottom: 102px;\n  position: relative;\n}\n.order-bg-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: calc(100% - 810px);\n  z-index: -1;\n}\n.order-block[_ngcontent-%COMP%] {\n  margin-top: 103px;\n  background-color: rgb(255 255 255 / 30%);\n  -webkit-backdrop-filter: blur(30px);\n          backdrop-filter: blur(30px);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.order-form[_ngcontent-%COMP%] {\n  margin-left: 200px;\n  max-width: 387px;\n  padding: 40px 0 44px;\n}\n.order-form-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  color: white;\n  font-size: 18px;\n  line-height: 130%;\n}\n.order-form-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.order-form-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 24px 22px;\n  background-color: transparent;\n  border: 1px solid white;\n  border-radius: 60px;\n  color: white;\n  outline: none;\n  transition: all .4s ease;\n}\n.order-form-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.40);\n}\n.order-form-inputs[_ngcontent-%COMP%]   input.is-error[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.order-image[_ngcontent-%COMP%] {\n  position: relative;\n  right: 0;\n  top: -58px;\n  margin-right: 20px;\n  margin-left: 109px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 126px 0 50px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 14px;\n}\n.footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 130%;\n}\n\n.line[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n}\n.bg-line1[_ngcontent-%COMP%] {\n  top: 0;\n  left: calc(100% - 960px);\n}\n.bg-line2[_ngcontent-%COMP%] {\n  top: -40px;\n  left: 0;\n}\n.bg-line3[_ngcontent-%COMP%] {\n  top: -920px;\n  left: 0;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLDRDQUE0QztFQUM5QztFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLDZDQUE2QztFQUMvQztFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLDRDQUE0QztFQUM5QztBQUNGO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07RUFDTixXQUFXO0FBQ2I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsMkNBQTJDO0VBQzNDLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04seUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxNQUFNO0VBQ04sd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsT0FBTztBQUNUO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsT0FBTztBQUNUIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY3VycmVuY3kge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiA1MHB4O1xuICBib3R0b206IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wKTtcbiAgfVxufVxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTMwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uaGVhZGVyIHtcbiAgcGFkZGluZzogNDBweCAwO1xufVxuLmhlYWRlciAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2dvIGltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4ubWVudSB7XG4gIG1hcmdpbi1sZWZ0OiAyNTBweDtcbn1cbi5tZW51LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBnYXA6IDUwcHg7XG59XG4ubWVudS1pdGVtIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTMwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiA1cHg7XG59XG4ubWVudS1pdGVtIGE6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG59XG4ubWFpbi1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDE2MXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG59XG4ubWFpbi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogOTBweDtcbn1cbi5tYWluLWRlc2Mge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLm1haW4taW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuLnByb2R1Y3RzIHtcbiAgcGFkZGluZzogMTAwcHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbW1vbi10aXRsZSBoMiB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9kdWN0cy1pdGVtcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtZ2FwOiA5MHB4IDI0cHg7XG4gIG1hcmdpbi10b3A6IDExMHB4O1xufVxuLnByb2R1Y3RzLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICM1RDM0Mjc7XG59XG4ucHJvZHVjdHMtaXRlbS1pbWFnZSB7XG4gIGhlaWdodDogMjAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9kdWN0cy1pdGVtLWltYWdlIGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNzBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI3MnB4O1xufVxuLnByb2R1Y3RzLWl0ZW0tZGV0YWlsIHtcbiAgcGFkZGluZzogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuLnByb2R1Y3RzLWl0ZW0tdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucHJvZHVjdHMtaXRlbS1kZXNjIHtcbiAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAxMTBweDtcbn1cbi5wcm9kdWN0cy1pdGVtLWV4dHJhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnByb2R1Y3RzLWl0ZW0taW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cbi5wcm9kdWN0cy1pdGVtLXByaWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTdGVwcGUtRXh0cmFCb2xkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzUyNDNGNDtcbn1cbi5wcm9kdWN0cy1pdGVtLXdlaWdodCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmxvdmUge1xuICBwYWRkaW5nLWJvdHRvbTogMTQ3cHg7XG59XG4ubG92ZS1pdGVtcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtZ2FwOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmxvdmUtaXRlbS1sZWZ0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzVEMzQyNztcbiAgcGFkZGluZzogMCA4MHB4O1xufVxuLmxvdmUtaXRlbS10aXRsZSBoMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5sb3ZlLWl0ZW0tZGVzYyBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMTMwJTtcbn1cbi5sb3ZlLWl0ZW0tcmlnaHQgaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5vcmRlciB7XG4gIG1hcmdpbi1ib3R0b206IDEwMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ub3JkZXItYmctaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IGNhbGMoMTAwJSAtIDgxMHB4KTtcbiAgei1pbmRleDogLTE7XG59XG4ub3JkZXItYmxvY2sge1xuICBtYXJnaW4tdG9wOiAxMDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMwcHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ub3JkZXItZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgbWF4LXdpZHRoOiAzODdweDtcbiAgcGFkZGluZzogNDBweCAwIDQ0cHg7XG59XG4ub3JkZXItZm9ybS10aXRsZSBoMyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMTMwJTtcbn1cbi5vcmRlci1mb3JtLWlucHV0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cbi5vcmRlci1mb3JtLWlucHV0cyBpbnB1dCB7XG4gIHBhZGRpbmc6IDI0cHggMjJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcbn1cbi5vcmRlci1mb3JtLWlucHV0cyBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQwKTtcbn1cbi5vcmRlci1mb3JtLWlucHV0cyBpbnB1dC5pcy1lcnJvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbi5vcmRlci1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTU4cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwOXB4O1xufVxuXG4uZm9vdGVyIHtcbiAgcGFkZGluZzogMTI2cHggMCA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE0cHg7XG59XG4uZm9vdGVyIHNwYW4ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xufVxuXG4ubGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59XG4uYmctbGluZTEge1xuICB0b3A6IDA7XG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDk2MHB4KTtcbn1cbi5iZy1saW5lMiB7XG4gIHRvcDogLTQwcHg7XG4gIGxlZnQ6IDA7XG59XG4uYmctbGluZTMge1xuICB0b3A6IC05MjBweDtcbiAgbGVmdDogMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);





class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule]
  });
})();

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map