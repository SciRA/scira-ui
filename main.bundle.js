webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n}\n.page-component{\n    min-height: 100vh;\n}\n\n.pageContent {\n    display: block;\n    min-height: 100vh;\n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"pageContent\">\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* unused harmony export Hero */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.hero = {
            id: 1,
            name: 'Lala'
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    })
], AppComponent);

var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact_component__ = __webpack_require__("../../../../../src/app/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_paper_paper_component__ = __webpack_require__("../../../../../src/app/components/paper/paper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_search_search_component__ = __webpack_require__("../../../../../src/app/pages/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_search_serach_service_provider__ = __webpack_require__("../../../../../src/app/services/search/serach-service-provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_about_scira_about_scira_component__ = __webpack_require__("../../../../../src/app/pages/about-scira/about-scira.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_paper_page_paper_page_component__ = __webpack_require__("../../../../../src/app/pages/paper-page/paper-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_21__pages_about_scira_about_scira_component__["a" /* AboutSciraComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_19__pages_search_search_component__["a" /* SearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact_component__["a" /* ContactComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'paper/:id', component: __WEBPACK_IMPORTED_MODULE_22__pages_paper_page_paper_page_component__["a" /* PaperPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_14__pages_register_register_component__["a" /* RegisterComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_about_scira_about_scira_component__["a" /* AboutSciraComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_side_bar_side_bar_component__["a" /* SideBarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_paper_paper_component__["a" /* PaperComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_about_scira_about_scira_component__["a" /* AboutSciraComponent */],
            __WEBPACK_IMPORTED_MODULE_22__pages_paper_page_paper_page_component__["a" /* PaperPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_20__services_search_serach_service_provider__["a" /* SearchProvider */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n    \n    <div class=\"footer-copyright\">\n      <div class=\"container\">\n        © 2017 SciRA\n      </div>\n    </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper\">\n    <a routerLink=\"\" class=\"brand-logo\">SciRA</a>\n    <ul  class=\"right hide-on-med-and-down\">\n      <li>We make your research easier <a routerLink=\"\" class=\"secondary-content\"><i class=\"material-icons\">home</i></a></li>\n\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper\">\n    <a href=\"#!\" class=\"brand-logo\">\n      <i class=\"material-icons\">cloud</i>Logo</a>\n    <ul class=\"right hide-on-med-and-down\">\n      <li>\n        <a href=\"sass.html\">\n          <i class=\"material-icons\">search</i>\n        </a>\n      </li>\n      <li>\n        <a href=\"badges.html\">\n          <i class=\"material-icons\">view_module</i>\n        </a>\n      </li>\n      <li>\n        <a href=\"collapsible.html\">\n          <i class=\"material-icons\">refresh</i>\n        </a>\n      </li>\n      <li>\n        <a href=\"mobile.html\">\n          <i class=\"material-icons\">more_vert</i>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
        $('.button-collapse').sideNav({
            menuWidth: 300,
            edge: 'right',
            closeOnClick: true,
            draggable: true,
            onOpen: function (el) { },
            onClose: function (el) { },
        });
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nav-bar',
        template: __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavBarComponent);

//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/paper/paper.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\n    display: inline-block;\n    /* margin: 10px; */\n    overflow: visible !important;\n   }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/paper/paper.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col m5\">\n  <div class=\"hoverable  card small\">\n    <div class=\"card-image waves-effect waves-block waves-light\">\n      <img class=\"activator\" src=\"assets/images/paper.jpg\">\n    </div>\n    <div class=\" card-content\">\n      <span class=\"card-title activator grey-text text-darken-4 \">{{paper.title}}\n        <i class=\"material-icons right\">more_vert</i>\n      </span>\n\n    </div>\n    <div class=\"card-reveal\">\n      <span class=\"card-title grey-text text-darken-4 \">{{paper.title}}\n        <i class=\"material-icons right\">close</i>\n      </span>\n      <ul class=\"collapsible popout\" data-collapsible=\"accordion\">\n          <li>\n            <div class=\"collapsible-header\"><i class=\"material-icons\">filter_drama</i>Authors</div>\n            <div class=\"collapsible-body\"><span>{{paper.authors.toString()}}</span></div>\n          </li>\n          <li>\n            <div class=\"collapsible-header\"><i class=\"material-icons\">place</i>University</div>\n            <div class=\"collapsible-body\"><span>{{paper.university}}</span></div>\n          </li>\n          <li>\n            <div class=\"collapsible-header\"><i class=\"material-icons\">place</i>Paper domain</div>\n            <div class=\"collapsible-body\"><span>{{paper.domain}}</span></div>\n          </li>\n          <li>\n            <div class=\"collapsible-header\"><i class=\"material-icons\">place</i>ContentUrl</div>\n            <div class=\"collapsible-body\"><a href=\"http://{{paper.contentUrl}}\" target=\"_blank\">paper url</a></div>\n          </li>\n          <li>\n            <div class=\"collapsible-header\"><i class=\"material-icons\">place</i>Publication date</div>\n            <div class=\"collapsible-body\"><span>{{paper.publishDate}}</span></div>\n          </li>\n        \n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/paper/paper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_paper__ = __webpack_require__("../../../../../src/app/models/paper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaperComponent = (function () {
    function PaperComponent() {
        console.log('paper-constructor');
    }
    PaperComponent.prototype.ngOnInit = function () {
        console.log('on init');
    };
    return PaperComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_paper__["a" /* Paper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_paper__["a" /* Paper */]) === "function" && _a || Object)
], PaperComponent.prototype, "paper", void 0);
PaperComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-paper',
        template: __webpack_require__("../../../../../src/app/components/paper/paper.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/paper/paper.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PaperComponent);

var _a;
//# sourceMappingURL=paper.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul id=\"slide-out\" class=\"side-nav\">\n  <li><div class=\"user-view\">\n    <div class=\"background\">\n      <img src=\"assets/images/background.png\">\n    </div>\n    <a href=\"#!user\"><img class=\"circle\" src=\"assets/images/logo.png\"></a>\n    <a href=\"#!name\"><span class=\"white-text name\">{{userService.currentUser?.username}}</span></a>\n    <a href=\"#!email\"><span class=\"white-text email\">example@gmail.com</span></a>\n  </div></li>\n  <li><a href=\"#!\"><i class=\"material-icons\">cloud</i>Welcome to SciRA</a></li>\n  <!-- <li><a href=\"#!\">Second Link</a></li> -->\n  <li><div class=\"divider\"></div></li>\n  <li><a class=\"subheader\">Subheader</a></li>\n  <li><a class=\"waves-effect\" routerLink=\"/\">Home</a></li>\n  <li><a class=\"waves-effect\" routerLink=\"/search\">Search</a></li>\n  <li><a class=\"waves-effect\" routerLink=\"/contact\">Contact</a></li>\n  <li><a class=\"waves-effect\" (click)=\"userService.invalidate()\" >Logout</a></li>\n</ul>\n<a href=\"#\" data-activates=\"slide-out\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n"

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideBarComponent = (function () {
    function SideBarComponent(userService) {
        this.userService = userService;
    }
    SideBarComponent.prototype.ngOnInit = function () {
        // $(".button-collapse").sideNav();
        $('.button-collapse').sideNav({
            menuWidth: 300,
            edge: 'left',
            closeOnClick: true,
            draggable: true,
            onOpen: function (el) { },
            onClose: function (el) { },
        });
    };
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-side-bar',
        template: __webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], SideBarComponent);

var _a;
//# sourceMappingURL=side-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/models/paper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paper; });
var Paper = (function () {
    function Paper(id, title, authors, university, domain, publlishDate, contentUrl) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.university = university;
        this.publishDate = publlishDate;
        this.domain = domain;
        this.contentUrl = contentUrl;
    }
    return Paper;
}());

//# sourceMappingURL=paper.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/pages/about-scira/about-scira.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/about-scira/about-scira.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <app-header></app-header>\n  <app-side-bar></app-side-bar>\n</header>\n<!-- HEADER END -->\n\n<div class=\"page-content\">\n  <div class=\"row\">\n      <h1 class=\"center-align\">About SciRA</h1>\n      <div class=\"center-align\">\n        <p class=\"flow-text\">\n          {{about}}\n        </p>\n      </div>\n  </div>\n</div>\n\n<footer class=\"page-footer\">\n  <app-footer></app-footer>\n</footer>\n<!-- FOOTER END -->\n"

/***/ }),

/***/ "../../../../../src/app/pages/about-scira/about-scira.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutSciraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutSciraComponent = (function () {
    function AboutSciraComponent() {
        this.about = "When writing academic papers, searching for related literature and managing documents/references can be a burden. \n  We are developing a smart platform able to provide an innovative visual experience regarding the \n  references between papers, their genealogy, and various information about (co-)authors.\n  Additionally, the system will offer multple data/knowledge visualization solutions and filtering\n  techniques using several refinements (puplication year, subject, keywords, language).";
    }
    AboutSciraComponent.prototype.ngOnInit = function () {
    };
    return AboutSciraComponent;
}());
AboutSciraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about-scira',
        template: __webpack_require__("../../../../../src/app/pages/about-scira/about-scira.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/about-scira/about-scira.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutSciraComponent);

//# sourceMappingURL=about-scira.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <app-header></app-header>\n  <app-side-bar></app-side-bar>\n</header>\n<!-- HEADER END -->\n<div class=\"page-content\">\n\n  <div class=\"container\">\n    <ul class=\"collection\">\n      <li class=\"collection-item avatar\">\n        <img src=\"assets/images/stefan.jpg\" alt=\"\" class=\"circle\">\n        <span class=\"title\">Cernescu Stefan</span>\n        <p> Email: stefan.cernescu94@gmail.com <br>\n          Phone number: 075*******\n        </p>\n        <a href=\"https://github.com/stefan2212\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\n      </li>\n      <li class=\"collection-item avatar\">\n        <img src=\"assets/images/groza.jpg\" alt=\"\" class=\"circle\">\n        <span class=\"title\">Groza Vasile</span>\n        <p>Email: vasilegroza3@gmail.com <br>\n          Phone number: 075*******\n        </p>\n        <a href=\"https://github.com/utilizatorvalid\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\n      </li>\n      <li class=\"collection-item avatar\">\n        <img src=\"assets/images/gabor.jpg\" alt=\"\" class=\"circle\">\n        <span class=\"title\">Gabor Silviu</span>\n        <p>Email: <br>\n          Phone Number:\n        </p>\n        <a href=\"https://github.com/silviugabor\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\n      </li>\n      <li class=\"collection-item avatar\">\n        <i class=\"material-icons circle red\">play_arrow</i>\n        <span class=\"title\">Coman Alexandru</span>\n        <p>Email: <br>\n          Phone Number:\n        </p>\n        <a href=\"https://github.com/alexcoman\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<footer class=\"page-footer\">\n  <app-footer></app-footer>\n</footer>\n<!-- FOOTER END -->\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/pages/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-box{\n    min-height:100vh;\n    background-color:#00bcd4;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box valign-wrapper row\">\n  <div class=\"col s10 pull-s1 m6 pull-m3 l4 pull-l4 z-depth-4 card-panel\">\n    <form id=\"loginForm\" class=\"login-form\">\n\n      <div class=\"row\">\n        <div class=\"input-field col s12 center\">\n          <img width=\"64\" height=\"64\" src=\"assets/images/logo.png\" alt=\"\" class=\"circle responsive-img valign profile-image-login\">\n          <p class=\"center login-form-text\">Log into the SciRA</p>\n        </div>\n      </div>\n\n      <div class=\"row margin\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">perm_identity</i>\n          <label class=\"center-align\" for=\"userTB\">Username</label>\n          <input id=\"userTB\" name=\"userTB\" type=\"text\" [(ngModel)]=\"model.username\">\n        </div>\n      </div>\n\n      <div class=\"row margin\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">lock</i>\n          <label class=\"center-align\" for=\"passTB\">Password</label>\n          <input id=\"passTB\" name=\"passTB\" type=\"password\" [(ngModel)]=\"model.password\">\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field  col s12\">\n          <a id=\"submitBtn\" class=\"btn waves-effect waves-light col s12 red darken-2\" (click)=\"doLogin()\">Login</a>\n        </div>\n        <div class=\"input-field col s12\">\n          <p class=\"margin center medium-small sign-up\">Don't have an account?\n            <a href=\"/register\">Register</a>\n          </p>\n        </div>\n      </div>\n\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(userService) {
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('login-component init');
        this.model = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
    };
    LoginComponent.prototype.doLogin = function () {
        console.log('login', this.model);
        this.userService.authenticate(this.model);
    };
    LoginComponent.prototype.doLogout = function () {
        this.userService.invalidate();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
        template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Styles of the 404 page of my website. */\n\n#error-page {\n    background: #081421;\n    color: #d3d7de;\n    font-family: \"Courier new\";\n    font-size: 18px;\n    line-height: 1.5em;\n    cursor: default;\n    min-height:100vh;\n  }\n  \n  .code-area {\n    position: absolute;\n    width: 320px;\n    min-width: 320px;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n  }\n  \n  .code-area>span {\n    display: block;\n  }\n  \n  @media screen and (max-width: 320px) {\n    .code-area {\n      font-size: 5vw;\n      min-width: auto;\n      width: 95%;\n      margin: auto;\n      padding: 5px;\n      padding-left: 10px;\n      line-height: 6.5vw;\n    }\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"error-page\">\n  \n    <div class=\"code-area\">\n      <span style=\"color: #777;font-style:italic;\">\n        // 404 page not found.\n      </span>\n      <span>\n        <span style=\"color:#d65562;\">\n          if\n        </span>\n        (\n        <span style=\"color:#4ca8ef;\">!</span>\n        <span style=\"font-style: italic;color:#bdbdbd;\">found</span>) {{'{'}}\n      </span>\n      <span>\n        <span style=\"padding-left: 15px;color:#2796ec\">\n          <i style=\"width: 10px;display:inline-block\"></i>throw\n        </span>\n        <span>\n          (\n          <span style=\"color: #a6a61f\">\"(╯°□°)╯︵ ┻━┻\"</span>);\n        </span>\n        <span style=\"display:block\">{{'}'}}</span>\n      </span>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/paper-page/paper-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/paper-page/paper-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-paper [paper]=\"paper\"></app-paper>\n"

/***/ }),

/***/ "../../../../../src/app/pages/paper-page/paper-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_abstract_search__ = __webpack_require__("../../../../../src/app/services/search/abstract-search.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaperPageComponent = (function () {
    function PaperPageComponent(searchService, route) {
        this.searchService = searchService;
        this.route = route;
    }
    PaperPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.searchService.getPaperByID(id).subscribe(function (paper) { return _this.paper = paper; });
    };
    return PaperPageComponent;
}());
PaperPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-paper-page',
        template: __webpack_require__("../../../../../src/app/pages/paper-page/paper-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/paper-page/paper-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_abstract_search__["a" /* AbstractSearch */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_abstract_search__["a" /* AbstractSearch */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PaperPageComponent);

var _a, _b;
//# sourceMappingURL=paper-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register-box{\n    min-height:100vh;\n    background-color:#00bcd4;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"register-box valign-wrapper row\">\n  <div class=\"col s10 pull-s1 m6 pull-m3 l4 pull-l4 z-depth-4 card-panel\">\n    <form id=\"loginForm\" class=\"login-form\">\n\n      <div class=\"row\">\n        <div class=\"input-field col s12 center\">\n          <img width=\"64\" height=\"64\" src=\"assets/images/logo.png\" alt=\"\" class=\"circle responsive-img valign profile-image-login\">\n          <p class=\"center login-form-text\">Register into the SciRA</p>\n        </div>\n      </div>\n\n\n      <div class=\"row margin\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">mailk</i>\n          <label class=\"center-align\" for=\"pass_sec\">Your email</label>\n          <input id=\"pass_sec\" name=\"pass_sec\" type=\"email\" [(ngModel)]=\"model.email\">\n        </div>\n      </div>\n\n      <div class=\"row margin\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">perm_identity</i>\n          <label class=\"center-align\" for=\"userTB\">Please chose a username</label>\n          <input id=\"userTB\" name=\"userTB\" type=\"text\" [(ngModel)]=\"model.username\">\n        </div>\n      </div>\n\n\n      <div class=\"row margin\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">lock</i>\n          <label class=\"center-align\" for=\"pass\">Set your password</label>\n          <input id=\"pass_firs\" name=\"pass\" type=\"password\" [(ngModel)]=\"model.password\">\n        </div>\n      </div>\n\n\n      <div class=\"row\">\n        <div class=\"input-field  col s12\">\n          <a id=\"submitBtn\" class=\"btn waves-effect waves-light col s12 red darken-2\" (click)=\"doRegister()\">Register</a>\n        </div>\n      </div>\n\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(userService) {
        this.userService = userService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */]();
    };
    RegisterComponent.prototype.doRegister = function () {
        console.log('register:', this.model);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/pages/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], RegisterComponent);

var _a;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-content {}\n\n.filter-container {\n  /* background-color: gray; */\n  min-height: 100vh;\n  position: relative;\n}\n\n.paper-container {\n  /* background-color: yellowgreen; */\n  background-image: url('https://scira.github.io/scira-ui/assets/images/notebook-background.jpg');\n  background-size: cover;\n  min-height: 100vh;\n}\n\n.filter-trigger-btn {\n  position: relative;\n  top: 5px;\n  left: -10px;\n  float: left;\n}\n\n.hide {\n  display: none\n}\n\n.filter-comands {\n  position: absolute;\n  margin-top: 25px;\n  left: 0;\n  right: 0;\n}\n\ndiv.search-box {\n  position: relative;\n}\n\ndiv.search {\n  position: absolute;\n  margin: 0 25px;\n  padding: 1px 0 0 0;\n  z-index: 2;\n  left: 0;\n  right: 0;\n}\n\ndiv.search-wrapper {\n  margin: 12px 10%;\n  transition: margin .25s ease;\n  border-radius: 10px;\n}\ndiv.search-wrapper.focused {\n  margin: 12px 5%;\n}\n\n\ndiv.search .search-wrapper input#search {\n  display: block;\n  font-size: 16px;\n  font-weight: 300;\n  width: 100%;\n  /* heisght: 45px; */\n  margin: 0;\n  box-sizing: border-box;\n  padding: 0 45px 0 15px;\n  border: 0;\n}\n\ndiv.search .search-wrapper input#search:focus {\n  outline: none;\n  box-shadow: none;\n}\n\ndiv.search .search-wrapper i.material-icons {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <app-header></app-header>\n  <app-side-bar></app-side-bar>\n</header>\n<!-- HEADER END -->\n\n<div class=\"page-content\">\n  <div class=\" row\">\n\n    <div class=\"{{filter_container_size}}\">\n      <div id=\"filter-container\" class=\"filter-container\">\n        <ul>\n          <li>\n            <div id=\"domain_filter\" class=\"chips chips-autocomplete\"></div>\n          </li>\n        </ul>\n        <div class=\" center-align filter-comands\">\n          <a class=\"btn-floating disabled\">\n            <i class=\"material-icons\">add</i>\n          </a>\n          <a class=\"waves-effect waves-light btn\">Apply</a>\n        </div>\n        <div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"paper-container {{paper_container_size}}\">\n\n      <a class=\" filter-trigger-btn  btn-floating btn-small waves-effect waves-light red tooltipped\" data-position=\"top\" data-delay=\"50\"\n        data-tooltip=\"Toggle Filters\" (click)=\"toggleFilters()\">\n        <i class=\"material-icons\">{{filter_arrow_type}}</i>\n      </a>\n      <!-- Teal page content  -->\n      <div class=\"row\">\n        <div class=\"search-box\">\n          <div class=\" search\">\n            <div class=\"search-wrapper card\">\n              <input id=\"search\" (focus)=\"onFocus()\" (focusout)=\"onFocusOut()\" placeholder=\"What do you wish to find?\">\n              <i class=\"material-icons\">search</i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n\n        <div class=\"col s12 cards-container\">\n          <div *ngFor=\"let paper of papers\">\n            <app-paper [paper]=\"paper\">\n              loading paper\n            </app-paper>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<footer class=\"page-footer\">\n  <app-footer></app-footer>\n</footer>\n<!-- FOOTER END -->\n"

/***/ }),

/***/ "../../../../../src/app/pages/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_abstract_search__ = __webpack_require__("../../../../../src/app/services/search/abstract-search.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    function SearchComponent(searchService) {
        this.searchService = searchService;
        this.filter_visibility = true;
        this.paper_container_size = 'col s9';
        this.filter_container_size = 'col s3';
        this.filter_arrow_type = 'arrow_back';
        this.position = 'above';
        this.domains = {
            'Machine Learning': null,
            'Computer Science': null,
            'Security': null,
            'Artifical Inteligence': null
        };
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this);
        console.log(this.searchService.search());
        this.searchService.getPages().subscribe(function (papers) { return _this.papers = papers; });
        console.log(JSON.parse(JSON.stringify(this.papers[0])));
        this.initFilters();
    };
    SearchComponent.prototype.initFilters = function () {
        var _this = this;
        $(document).ready(function () {
            $('#domain_filter.chips-autocomplete').material_chip({
                data: [],
                placeholder: 'Enter a domain',
                autocompleteOptions: {
                    data: _this.domains,
                    limit: Infinity,
                    minLength: 1
                }
            });
        });
    };
    SearchComponent.prototype.toggleFilters = function () {
        if (this.filter_visibility) {
            this.filter_arrow_type = 'arrow_forward';
            this.paper_container_size = 'col s12';
            this.filter_container_size = 'col s0';
            document.getElementById('filter-container').classList.add('hide');
        }
        else {
            this.filter_arrow_type = 'arrow_back';
            this.paper_container_size = 'col s9';
            this.filter_container_size = 'col s3';
            document.getElementById('filter-container').classList.remove('hide');
        }
        this.filter_visibility = !this.filter_visibility;
    };
    SearchComponent.prototype.onFocus = function () {
        var element = $('div.search-wrapper');
        element.addClass('focused');
    };
    SearchComponent.prototype.onFocusOut = function () {
        var element = $('div.search-wrapper');
        element.removeClass('focused');
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/pages/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_abstract_search__["a" /* AbstractSearch */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_abstract_search__["a" /* AbstractSearch */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService() {
        this.isLoggedIn = false;
        if (localStorage.getItem('currentUser')) {
            this.isLoggedIn = true;
        }
    }
    AuthService.prototype.login = function (user) {
        console.log('USER just logged in', user.username);
        localStorage.setItem('currentUser', user.username);
        this.isLoggedIn = true;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(true);
        // return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    };
    AuthService.prototype.logout = function (user) {
        console.log('USER just logged out', user.username);
        localStorage.removeItem('currentUser');
        this.isLoggedIn = false;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        console.log('Data service connected..');
    }
    DataService.prototype.getPosts = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(function (res) { return res.json(); });
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/search/abstract-search.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractSearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AbstractSearch = (function () {
    function AbstractSearch() {
    }
    return AbstractSearch;
}());
AbstractSearch = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], AbstractSearch);

//# sourceMappingURL=abstract-search.js.map

/***/ }),

/***/ "../../../../../src/app/services/search/mock-search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockSearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_paper__ = __webpack_require__("../../../../../src/app/models/paper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MockSearchService = (function () {
    function MockSearchService() {
        this.papers = [
            new __WEBPACK_IMPORTED_MODULE_1__models_paper__["a" /* Paper */](22, 'MachineLearning for Malware Detection', ['Liviu Ciortuz', 'Tom Michael'], 'Alexandru Ioan Cuza', 'Machine Learning', new Date('02-02-1999'), 'www.machinelearning.com')
        ];
    }
    MockSearchService.prototype.getPages = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(this.papers);
    };
    MockSearchService.prototype.search = function () {
        return 'din mockuletz';
    };
    MockSearchService.prototype.getPaperByID = function (id) {
        console.log('Search for paper with id', id);
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_1__models_paper__["a" /* Paper */](22, 'MachineLearning for Malware Detection', ['Liviu Ciortuz', 'Tom Michael'], 'Alexandru Ioan Cuza', 'Machine Learning', new Date('02-02-1999'), 'www.machinelearning.com'));
    };
    return MockSearchService;
}());
MockSearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MockSearchService);

//# sourceMappingURL=mock-search.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/search/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchService = (function () {
    function SearchService() {
    }
    SearchService.prototype.getPaperByID = function (id) {
        throw new Error('Method not implemented.');
    };
    SearchService.prototype.getPages = function () {
        throw new Error('Method not implemented.');
    };
    SearchService.prototype.search = function () {
        return 'search normal';
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SearchService);

//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/search/serach-service-provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export searchServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_search__ = __webpack_require__("../../../../../src/app/services/search/abstract-search.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_search_service__ = __webpack_require__("../../../../../src/app/services/search/mock-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_service__ = __webpack_require__("../../../../../src/app/services/search/search.service.ts");




function searchServiceFactory() {
    console.log(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].type);
    return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].type === 'DEV' ? new __WEBPACK_IMPORTED_MODULE_2__mock_search_service__["a" /* MockSearchService */]() : new __WEBPACK_IMPORTED_MODULE_3__search_service__["a" /* SearchService */]();
}
var SearchProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_0__abstract_search__["a" /* AbstractSearch */],
    useFactory: searchServiceFactory,
    deps: []
};
//# sourceMappingURL=serach-service-provider.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(authService, router) {
        this.authService = authService;
        this.router = router;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */];
    }
    UserService.prototype.create = function (user) {
        console.log(__WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */]);
    };
    UserService.prototype.authenticate = function (user) {
        var _this = this;
        this.authService.login(user).subscribe(function () {
            if (_this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/';
                _this.currentUser = user;
                // Redirect the user
                _this.router.navigate([redirect]);
            }
        });
    };
    UserService.prototype.invalidate = function () {
        this.authService.logout(this.currentUser);
        this.router.navigate(['login']);
        this.currentUser = null;
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    type: 'DEV'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map