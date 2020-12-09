function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modules/home/home.component */
    "./src/app/modules/home/home.component.ts");
    /* harmony import */


    var _modules_home_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modules/home/components/login/login.component */
    "./src/app/modules/home/components/login/login.component.ts");
    /* harmony import */


    var _modules_home_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modules/home/components/dashboard/dashboard.component */
    "./src/app/modules/home/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _modules_home_components_discover_discover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modules/home/components/discover/discover.component */
    "./src/app/modules/home/components/discover/discover.component.ts");
    /* harmony import */


    var _modules_home_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modules/home/components/home-page/home-page.component */
    "./src/app/modules/home/components/home-page/home-page.component.ts");
    /* harmony import */


    var _modules_home_components_genre_genre_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./modules/home/components/genre/genre.component */
    "./src/app/modules/home/components/genre/genre.component.ts");
    /* harmony import */


    var _modules_home_components_account_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./modules/home/components/account/account.component */
    "./src/app/modules/home/components/account/account.component.ts");
    /* harmony import */


    var _modules_home_components_manga_page_manga_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./modules/home/components/manga-page/manga-page.component */
    "./src/app/modules/home/components/manga-page/manga-page.component.ts");
    /* harmony import */


    var _modules_home_components_manga_viewer_manga_viewer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./modules/home/components/manga-viewer/manga-viewer.component */
    "./src/app/modules/home/components/manga-viewer/manga-viewer.component.ts");

    var routes = [{
      path: '',
      component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'login',
      component: _modules_home_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'dashboard',
      component: _modules_home_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
      children: [{
        path: 'discover',
        component: _modules_home_components_discover_discover_component__WEBPACK_IMPORTED_MODULE_5__["DiscoverComponent"]
      }, {
        path: 'home',
        component: _modules_home_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"]
      }, {
        path: 'genre',
        component: _modules_home_components_genre_genre_component__WEBPACK_IMPORTED_MODULE_7__["GenreComponent"]
      }, {
        path: 'account',
        component: _modules_home_components_account_account_component__WEBPACK_IMPORTED_MODULE_8__["AccountComponent"]
      }, {
        path: 'mangaView',
        component: _modules_home_components_manga_page_manga_page_component__WEBPACK_IMPORTED_MODULE_9__["MangaPageComponent"]
      }]
    }, {
      path: 'chapViewer',
      component: _modules_home_components_manga_viewer_manga_viewer_component__WEBPACK_IMPORTED_MODULE_10__["MangaViewerComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./store/actions/app.actions */
    "./src/app/store/actions/app.actions.ts");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../global */
    "./src/global.ts");
    /* harmony import */


    var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! js-cookie */
    "./node_modules/js-cookie/src/js.cookie.js");
    /* harmony import */


    var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(deviceService, store) {
        _classCallCheck(this, AppComponent);

        this.deviceService = deviceService;
        this.store = store;
        this.title = 'Manga Reader';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(_global__WEBPACK_IMPORTED_MODULE_2__["version"]);
          this.store.dispatch(Object(_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["userDetails"])({
            userDetails: {
              username: js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('username')
            }
          }));
          this.store.dispatch(Object(_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["checkMobile"])({
            isMobile: this.deviceService.isMobile()
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modules/home/home.component */
    "./src/app/modules/home/home.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _modules_home_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./modules/home/components/login/login.component */
    "./src/app/modules/home/components/login/login.component.ts");
    /* harmony import */


    var _modules_home_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./modules/home/components/dashboard/dashboard.component */
    "./src/app/modules/home/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/ngrx-store-devtools.js");
    /* harmony import */


    var _store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./store/reducers/app.reducers */
    "./src/app/store/reducers/app.reducers.ts");
    /* harmony import */


    var ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ng-recaptcha */
    "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
    /* harmony import */


    var _modules_home_components_discover_discover_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./modules/home/components/discover/discover.component */
    "./src/app/modules/home/components/discover/discover.component.ts");
    /* harmony import */


    var _modules_home_components_genre_genre_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./modules/home/components/genre/genre.component */
    "./src/app/modules/home/components/genre/genre.component.ts");
    /* harmony import */


    var _modules_home_components_account_account_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./modules/home/components/account/account.component */
    "./src/app/modules/home/components/account/account.component.ts");
    /* harmony import */


    var _modules_home_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./modules/home/components/home-page/home-page.component */
    "./src/app/modules/home/components/home-page/home-page.component.ts");
    /* harmony import */


    var _modules_home_components_manga_page_manga_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./modules/home/components/manga-page/manga-page.component */
    "./src/app/modules/home/components/manga-page/manga-page.component.ts");
    /* harmony import */


    var _modules_home_components_manga_viewer_manga_viewer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./modules/home/components/manga-viewer/manga-viewer.component */
    "./src/app/modules/home/components/manga-viewer/manga-viewer.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__["RECAPTCHA_V3_SITE_KEY"],
        useValue: '6LdJC_kZAAAAACIaPRtUIB0M8Vd6u459oZGf3csY'
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__["RecaptchaV3Module"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
      }), _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({
        reducer: _store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_11__["reducer"]
      }, {}), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _modules_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _modules_home_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _modules_home_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _modules_home_components_discover_discover_component__WEBPACK_IMPORTED_MODULE_13__["DiscoverComponent"], _modules_home_components_genre_genre_component__WEBPACK_IMPORTED_MODULE_14__["GenreComponent"], _modules_home_components_account_account_component__WEBPACK_IMPORTED_MODULE_15__["AccountComponent"], _modules_home_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_16__["HomePageComponent"], _modules_home_components_manga_page_manga_page_component__WEBPACK_IMPORTED_MODULE_17__["MangaPageComponent"], _modules_home_components_manga_viewer_manga_viewer_component__WEBPACK_IMPORTED_MODULE_18__["MangaViewerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__["RecaptchaV3Module"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _modules_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _modules_home_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _modules_home_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _modules_home_components_discover_discover_component__WEBPACK_IMPORTED_MODULE_13__["DiscoverComponent"], _modules_home_components_genre_genre_component__WEBPACK_IMPORTED_MODULE_14__["GenreComponent"], _modules_home_components_account_account_component__WEBPACK_IMPORTED_MODULE_15__["AccountComponent"], _modules_home_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_16__["HomePageComponent"], _modules_home_components_manga_page_manga_page_component__WEBPACK_IMPORTED_MODULE_17__["MangaPageComponent"], _modules_home_components_manga_viewer_manga_viewer_component__WEBPACK_IMPORTED_MODULE_18__["MangaViewerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__["RecaptchaV3Module"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
          }), _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({
            reducer: _store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_11__["reducer"]
          }, {}), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({
            maxAge: 25,
            logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
          })],
          providers: [{
            provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__["RECAPTCHA_V3_SITE_KEY"],
            useValue: '6LdJC_kZAAAAACIaPRtUIB0M8Vd6u459oZGf3csY'
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/components/account/account.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/home/components/account/account.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AccountComponent */

  /***/
  function srcAppModulesHomeComponentsAccountAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
      return AccountComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AccountComponent = /*#__PURE__*/function () {
      function AccountComponent() {
        _classCallCheck(this, AccountComponent);
      }

      _createClass(AccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccountComponent;
    }();

    AccountComponent.ɵfac = function AccountComponent_Factory(t) {
      return new (t || AccountComponent)();
    };

    AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountComponent,
      selectors: [["app-account"]],
      decls: 2,
      vars: 0,
      template: function AccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "account works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-account',
          templateUrl: './account.component.html',
          styleUrls: ['./account.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/components/dashboard/dashboard.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/home/components/dashboard/dashboard.component.ts ***!
    \**************************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppModulesHomeComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! js-cookie */
    "./node_modules/js-cookie/src/js.cookie.js");
    /* harmony import */


    var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../store/actions/app.actions */
    "./src/app/store/actions/app.actions.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(_router, store) {
        _classCallCheck(this, DashboardComponent);

        this._router = _router;
        this.store = store;
        this.isDiscover = false;
        this.isHome = false;
        this.isGenre = false;
        this.isAccount = false;
      }

      _createClass(DashboardComponent, [{
        key: "selectItem",
        value: function selectItem(index) {
          if (index === 0) {
            this.isDiscover = true;
            this.isHome = false;
            this.isGenre = false;
            this.isAccount = false;
          } else if (index === 1) {
            this.isDiscover = false;
            this.isHome = true;
            this.isGenre = false;
            this.isAccount = false;
          } else if (index === 2) {
            this.isDiscover = false;
            this.isHome = false;
            this.isGenre = true;
            this.isAccount = false;
          } else {
            this.isDiscover = false;
            this.isHome = false;
            this.isGenre = false;
            this.isAccount = true;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var username = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('username');

          if (username == '' || username == undefined) {
            // if(!currentState.loginBool){ 
            console.log('here');

            this._router.navigate(['login']); // }

          } else {
            this.store.dispatch(Object(_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__["checklogin"])({
              isLoggedIn: true
            }));
          }

          var currentUrl = window.location.href;

          if (currentUrl.indexOf('discover') !== -1) {
            this.selectItem(0);
          } else if (currentUrl.indexOf('home') !== -1) {
            this.selectItem(1);
          } else if (currentUrl.indexOf('genre') !== -1) {
            this.selectItem(2);
          } else if (currentUrl.indexOf('account') !== -1) {
            this.selectItem(3);
          } else if (currentUrl.indexOf('mangaView') !== -1 || currentUrl.indexOf('chapViewer') !== -1) {//skip
          } else {
            this._router.navigate(['/dashboard/discover']);

            this.selectItem(0);
          }
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 33,
      vars: 8,
      consts: [[1, "dashboard-outer-cont"], [1, "top-nav-dash"], [1, "search-btn-cont"], [1, "search-icon-cont"], [1, "search-border"], [1, "fas", "fa-search", 2, "cursor", "pointer"], [1, "search-text-cont"], ["placeholder", "Search", "type", "text", 1, "search-inp"], [1, "dash-body"], [1, "dash-body-wrapper"], [1, "bottom-nav-dash"], [1, "bottom-dash-cont"], [1, "nav-item-cont"], [1, "nav-border"], [1, "nav-icon-cont"], ["routerLink", "discover", "routerLinkActive", "active", 3, "click"], [1, "far", "fa-compass"], ["routerLink", "home", "routerLinkActive", "active", 3, "click"], [1, "fas", "fa-home"], ["routerLink", "genre", "routerLinkActive", "active", 3, "click"], [1, "fas", "fa-tag"], ["routerLink", "account", "routerLinkActive", "active", 3, "click"], [1, "fas", "fa-user-circle"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_16_listener() {
            return ctx.selectItem(0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_21_listener() {
            return ctx.selectItem(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_26_listener() {
            return ctx.selectItem(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_31_listener() {
            return ctx.selectItem(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected-nav", ctx.isDiscover);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected-nav", ctx.isHome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected-nav", ctx.isGenre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected-nav", ctx.isAccount);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
      styles: [".dashboard-outer-cont[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #363636;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n\r\n}\r\n\r\n.top-nav-dash[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 8%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n.selected-nav[_ngcontent-%COMP%]{\r\n    color: #ff5400 !important;\r\n}\r\n\r\n.search-btn-cont[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n    height: 80%;\r\n    display: flex;\r\n    background: linear-gradient(145deg, #3B3B3B, #2B2B2B);\r\n    border-radius: 20px;\r\n    \r\n\r\n\r\n}\r\n\r\n.search-border[_ngcontent-%COMP%]{\r\n    padding: 9px;\r\n    \r\n    \r\n    \r\n    \r\n}\r\n\r\n.search-icon-cont[_ngcontent-%COMP%]{\r\n    width: 10%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #b5a2a2;\r\n    \r\n\r\n}\r\n\r\n.search-text-cont[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    height: 100%;\r\n    color: #b5a2a2;\r\n\r\n}\r\n\r\n.dash-body[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 82%;\r\n    overflow: scroll;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n.test-div[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 30%;\r\n    \r\n    margin-bottom: 20px;\r\n}\r\n\r\n.bottom-nav-dash[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 10%;\r\n    border-top-left-radius: 15px;\r\n    border-top-right-radius: 15px;\r\n    display: flex;\r\n    align-items: flex-end;\r\n\r\n    background: linear-gradient(20deg, #3E3E3E, #282828);\r\n    \r\n    \r\n}\r\n\r\n.bottom-dash-cont[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 90%;\r\n    display: flex;\r\n    \r\n}\r\n\r\n.nav-item-cont[_ngcontent-%COMP%]{\r\n    \r\n    width: 25%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #b5a2a2;\r\n}\r\n\r\n.nav-border[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n    height: 70%;\r\n    \r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border-radius: 100%;\r\n\r\n    \r\n    \r\n    \r\n}\r\n\r\n.nav-icon-cont[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 60%;\r\n    display: flex;\r\n    \r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.nav-icon-cont[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\n.nav-icon-title-cont[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 20%;\r\n    font-size: 0.8rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.search-inp[_ngcontent-%COMP%]{\r\n    width: 98%;\r\n    height: 100%;\r\n    background: none;\r\n    border: none;\r\n    color: #b5a2a2;\r\n\r\n}\r\n\r\n.search-inp[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n}\r\n\r\n.dash-body-wrapper[_ngcontent-%COMP%]{\r\n    width: 96%;\r\n    height: 94%;\r\n    \r\n}\r\n\r\n@media screen and (max-width: 1028px) {\r\n    .search-icon-cont[_ngcontent-%COMP%]{\r\n        width: 30%;\r\n    }\r\n\r\n    .search-text-cont[_ngcontent-%COMP%]{\r\n        width: 70%;\r\n    }\r\n\r\n    .nav-border[_ngcontent-%COMP%]{\r\n        width: 45px;\r\n        height: 45px;\r\n    }\r\n\r\n    .dash-body-wrapper[_ngcontent-%COMP%]{\r\n        overflow: scroll;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUNBQXlDOztBQUU3Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IscURBQXFEO0lBQ3JELG1CQUFtQjtJQUNuQixnRkFBZ0Y7OztBQUdwRjs7QUFFQTtJQUNJLFlBQVk7SUFDWjsrREFDMkQ7SUFDM0QsMkRBQTJEO0lBQzNELHlCQUF5QjtJQUN6QiwwRUFBMEU7QUFDOUU7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCw4RUFBOEU7O0FBRWxGOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2Qjs7QUFHQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IscUJBQXFCOztJQUVyQixvREFBb0Q7SUFDcEQsd0JBQXdCO0lBQ3hCLDBFQUEwRTtBQUM5RTs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjs7SUFFbkIsMkRBQTJEO0lBQzNELHlCQUF5QjtJQUN6QiwrRUFBK0U7QUFDbkY7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYixxRkFBcUY7SUFDckYsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtb3V0ZXItY29udHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzM2MzYzNjtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuLnRvcC1uYXYtZGFzaHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXHJcbn1cclxuXHJcbi5zZWxlY3RlZC1uYXZ7XHJcbiAgICBjb2xvcjogI2ZmNTQwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLWJ0bi1jb250e1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMzQjNCM0IsICMyQjJCMkIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC8qIGJveC1zaGFkb3c6IGluc2V0IDBweCAzcHggMTdweCAjMjEyMTIxLCBpbnNldCAtNi4wMXB4IC02LjAxcHggMTdweCAjNDU0NTQ1OyAqL1xyXG5cclxuXHJcbn1cclxuXHJcbi5zZWFyY2gtYm9yZGVye1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgwLDAsMCwwLjIyKSwgcmdiYSgyNTUsMjU1LDI1NSwwLjI1KSk7XHJcbiAgICBib3gtc2hhZG93OiAtMnB4IC0ycHggMTBweCAjMTUxNTE1LCAycHggMnB4IDEwcHggIzRlNGU0ZTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMzRTNFM0UsICMyODI4MjgpOyAqL1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogMTAwJTsgKi9cclxuICAgIC8qIGJveC1zaGFkb3c6IDYuMDFweCA2LjAxcHggMTdweCAjMkIyQjJCLCAtNi4wMXB4IC02LjAxcHggMTdweCAjM0IzQjNCOyAqL1xyXG59XHJcblxyXG4uc2VhcmNoLWljb24tY29udHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICNiNWEyYTI7XHJcbiAgICAvKiB0ZXh0LXNoYWRvdzotMnB4IC0ycHggNHB4IHJnYigwIDAgMCksIDJweCAycHggNHB4IHJnYigxMTcgMTE3IDExNyAvIDg5JSk7ICovXHJcblxyXG59XHJcblxyXG4uc2VhcmNoLXRleHQtY29udHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjb2xvcjogI2I1YTJhMjtcclxuXHJcbn1cclxuXHJcbi5kYXNoLWJvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODIlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBibHVlOyAqL1xyXG59XHJcblxyXG4udGVzdC1kaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgLyogYmFja2dyb3VuZDogYmx1ZXZpb2xldDsgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG4uYm90dG9tLW5hdi1kYXNoe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIwZGVnLCAjM0UzRTNFLCAjMjgyODI4KTtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDE1JTsgKi9cclxuICAgIC8qIGJveC1zaGFkb3c6IC0xcHggLTlweCAxOXB4IDFweCAjMUExQTFBLCAtNi45MXB4IC02LjkxcHggNjBweCAjNEQ0RDREOyAqL1xyXG59XHJcblxyXG4uYm90dG9tLWRhc2gtY29udHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xyXG59XHJcblxyXG4ubmF2LWl0ZW0tY29udHtcclxuICAgIC8qIGJhY2tncm91bmQ6IGdyZWVuOyAqL1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICNiNWEyYTI7XHJcbn1cclxuXHJcbi5uYXYtYm9yZGVye1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgLyogYmFja2dyb3VuZDogd2hpdGU7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblxyXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgIzQwNDA0MCwgIzI2MjYyNik7ICovXHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMDAlOyAqL1xyXG4gICAgLyogYm94LXNoYWRvdzogaW5zZXQgMHB4IC0xcHggM3B4IDBweCAjMUExQTFBLCBpbnNldCAwcHggMHB4IDNweCAwcHggIzRENEQ0RDsgKi9cclxufVxyXG5cclxuLm5hdi1pY29uLWNvbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIHRleHQtc2hhZG93OiAtMnB4IC00cHggNHB4IHJnYig2IDYgNiAvIDcwJSksIDJweCAzcHggNnB4IHJnYigxMTcgMTE3IDExNyAvIDg5JSk7ICovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxufVxyXG5cclxuLm5hdi1pY29uLWNvbnQgPiBhe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5uYXYtaWNvbi10aXRsZS1jb250e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjYjVhMmEyO1xyXG5cclxufVxyXG5cclxuLnNlYXJjaC1pbnA6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZGFzaC1ib2R5LXdyYXBwZXJ7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgaGVpZ2h0OiA5NCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjhweCkge1xyXG4gICAgLnNlYXJjaC1pY29uLWNvbnR7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLXRleHQtY29udHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtYm9yZGVye1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGFzaC1ib2R5LXdyYXBwZXJ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIH1cclxuXHJcbn1cclxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/components/discover/discover.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/modules/home/components/discover/discover.component.ts ***!
    \************************************************************************/

  /*! exports provided: DiscoverComponent */

  /***/
  function srcAppModulesHomeComponentsDiscoverDiscoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiscoverComponent", function () {
      return DiscoverComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../global */
    "./src/global.ts");
    /* harmony import */


    var _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../store/actions/app.actions */
    "./src/app/store/actions/app.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["scrollCont"];

    function DiscoverComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DiscoverComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiscoverComponent_div_4_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var i_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.handleMangaClick(i_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(", i_r3.thumb, ");");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3.title);
      }
    }

    var DiscoverComponent = /*#__PURE__*/function () {
      function DiscoverComponent(_router, store) {
        _classCallCheck(this, DiscoverComponent);

        this._router = _router;
        this.store = store;
        this.src = '';
        this.dataArr = [];
        this.pageNo = 1;
        this.setSpinner = false;
      }

      _createClass(DiscoverComponent, [{
        key: "getState",
        value: function getState() {
          var state;
          this.store.select(function (state) {
            return state;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (s) {
            state = s;
          });
          return state.reducer;
        }
      }, {
        key: "getHotManga",
        value: function getHotManga(pageNo) {
          var _this = this;

          this.setSpinner = true;
          var data = {
            src: this.src,
            page: pageNo
          };
          console.log(pageNo);
          fetch(_global__WEBPACK_IMPORTED_MODULE_1__["scaperURL"] + "getMangaList", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(data)
          }).then(function (res) {
            return res.json();
          }).then(function (data) {
            _this.setSpinner = false;
            _this.dataArr = _this.dataArr.concat(data.LatestManga);

            _this.store.dispatch(Object(_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__["latestMangaList"])({
              latestList: _this.dataArr
            }));

            _this.pageNo += 1;

            _this.store.dispatch(Object(_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__["pageNoObject"])({
              pageNoObj: {
                discover: _this.pageNo
              }
            }));
          });
        }
      }, {
        key: "handleScroll",
        value: function handleScroll() {
          var element = this.scrollCont.nativeElement;

          if (Math.ceil(element.scrollHeight - element.scrollTop) === element.clientHeight) {
            this.getHotManga(this.pageNo);
          }
        }
      }, {
        key: "handleMangaClick",
        value: function handleMangaClick(link) {
          link = link.link;
          this.store.dispatch(Object(_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__["currentMangaLink"])({
            currentMangaLink: link
          }));
          this.store.dispatch(Object(_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__["refreshMangaPage"])({
            refreshMangaPage: true
          }));

          this._router.navigate(['dashboard/mangaView'], {
            queryParams: {
              link: link
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.src = "MGPK";
          console.log('Discover Mounted!');
          this.state = this.getState();

          if (Object.keys(this.state['latestObject']).length === 0) {
            console.log('getting list from api');
            this.getHotManga(this.pageNo);
          } else {
            console.log('getting data from nrgx');
            this.pageNo = this.state['pageNoObject']['discover'];
            this.dataArr = this.state['latestObject'];
          }
        }
      }]);

      return DiscoverComponent;
    }();

    DiscoverComponent.ɵfac = function DiscoverComponent_Factory(t) {
      return new (t || DiscoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
    };

    DiscoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DiscoverComponent,
      selectors: [["app-discover"]],
      viewQuery: function DiscoverComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollCont = _t.first);
        }
      },
      decls: 5,
      vars: 2,
      consts: [[1, "disc-wrapper"], ["class", "spinner-cont", 4, "ngIf"], [1, "grid-wrap", 2, "cursor", "pointer", 3, "scroll"], ["scrollCont", ""], ["class", "grid-item", 4, "ngFor", "ngForOf"], [1, "spinner-cont"], [1, "loader"], [1, "grid-item"], [1, "item-thumb", 3, "click"], [1, "title-background"]],
      template: function DiscoverComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiscoverComponent_div_1_Template, 3, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function DiscoverComponent_Template_div_scroll_2_listener() {
            return ctx.handleScroll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DiscoverComponent_div_4_Template, 5, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.setSpinner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataArr);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: [".disc-wrapper[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.grid-wrap[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-content: flex-start;\r\n    overflow: scroll;\r\n\r\n}\r\n\r\n.grid-item[_ngcontent-%COMP%]{\r\n    width: 25%;\r\n    height: 45vh;\r\n    display: flex;\r\n    margin-top: 10px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n.item-thumb[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    color:#050505;\r\n}\r\n\r\n.title-background[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    background: linear-gradient(0deg, rgb(0 0 0) 0%, rgb(255 255 255 / 0%) 100%, rgb(56 56 162) 100%, rgb(12 12 12 / 0%) 100%);\r\n    color: #ffffff;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: flex-end;\r\n    border-radius: 3%;\r\n}\r\n\r\n.item-thumb[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 80%;\r\n    background-size: cover;\r\n    border-radius: 3%;\r\n}\r\n\r\n.item-thumb[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\r\n    height: 88%;\r\n    width: 81%;\r\n    filter: brightness(80%);\r\n    pointer-events: none;\r\n    border-radius: 12px;\r\n}\r\n\r\n@media screen and (max-width: 1028px) {\r\n    .title-background[_ngcontent-%COMP%]{\r\n        font-size: 3vw;\r\n    }\r\n    .grid-wrap[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%]{\r\n        width: 33%;\r\n        height: 25vh;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\r\n        font-size: 1vh;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvZGlzY292ZXIvZGlzY292ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwwSEFBMEg7SUFDMUgsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFLQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvZGlzY292ZXIvZGlzY292ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNjLXdyYXBwZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmlkLXdyYXB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuXHJcbn1cclxuXHJcbi5ncmlkLWl0ZW17XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgaGVpZ2h0OiA0NXZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xyXG59XHJcbi5pdGVtLXRodW1ie1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgY29sb3I6IzA1MDUwNTtcclxufVxyXG5cclxuLnRpdGxlLWJhY2tncm91bmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2IoMCAwIDApIDAlLCByZ2IoMjU1IDI1NSAyNTUgLyAwJSkgMTAwJSwgcmdiKDU2IDU2IDE2MikgMTAwJSwgcmdiKDEyIDEyIDEyIC8gMCUpIDEwMCUpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMlO1xyXG59XHJcbi5pdGVtLXRodW1ie1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMlO1xyXG59XHJcblxyXG4uaXRlbS10aHVtYj5pbWd7XHJcbiAgICBoZWlnaHQ6IDg4JTtcclxuICAgIHdpZHRoOiA4MSU7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyOHB4KSB7XHJcbiAgICAudGl0bGUtYmFja2dyb3VuZHtcclxuICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgIH1cclxuICAgIC5ncmlkLXdyYXB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZ3JpZC1pdGVte1xyXG4gICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXZoO1xyXG4gICAgfVxyXG4gICAgLmdyaWQtaXRlbT5we1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXZoO1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiscoverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-discover',
          templateUrl: './discover.component.html',
          styleUrls: ['./discover.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      }, {
        scrollCont: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scrollCont']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/components/genre/genre.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/home/components/genre/genre.component.ts ***!
    \******************************************************************/

  /*! exports provided: GenreComponent */

  /***/
  function srcAppModulesHomeComponentsGenreGenreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenreComponent", function () {
      return GenreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GenreComponent = /*#__PURE__*/function () {
      function GenreComponent() {
        _classCallCheck(this, GenreComponent);
      }

      _createClass(GenreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GenreComponent;
    }();

    GenreComponent.ɵfac = function GenreComponent_Factory(t) {
      return new (t || GenreComponent)();
    };

    GenreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GenreComponent,
      selectors: [["app-genre"]],
      decls: 2,
      vars: 0,
      template: function GenreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "genre works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2dlbnJlL2dlbnJlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-genre',
          templateUrl: './genre.component.html',
          styleUrls: ['./genre.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/components/home-page/home-page.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/home/components/home-page/home-page.component.ts ***!
    \**************************************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppModulesHomeComponentsHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomePageComponent = /*#__PURE__*/function () {
      function HomePageComponent() {
        _classCallCheck(this, HomePageComponent);
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
      return new (t || HomePageComponent)();
    };

    HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["app-home-page"]],
      decls: 2,
      vars: 0,
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home-page works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-page',
          templateUrl: './home-page.component.html',
          styleUrls: ['./home-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/components/login/login.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/home/components/login/login.component.ts ***!
    \******************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppModulesHomeComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! js-cookie */
    "./node_modules/js-cookie/src/js.cookie.js");
    /* harmony import */


    var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../global */
    "./src/global.ts");
    /* harmony import */


    var _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../store/actions/app.actions */
    "./src/app/store/actions/app.actions.ts");
    /* harmony import */


    var md5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! md5 */
    "./node_modules/md5/md5.js");
    /* harmony import */


    var md5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-recaptcha */
    "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function LoginComponent_div_8_Template_div_keyup_enter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.handleSignIn(_r6.value, _r7.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 18, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_8_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.handleSignIn(_r6.value, _r7.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 24, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 26, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 28, 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_9_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.handleSignUp(_r11.value, _r12.value, _r13.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_span_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_span_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "mobileBox": a0
      };
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(recaptchaV3Service, _router, store) {
        _classCallCheck(this, LoginComponent);

        this.recaptchaV3Service = recaptchaV3Service;
        this._router = _router;
        this.store = store;
        this.checkMobile = false;
        this.signUpBool = false;
        this.errorString = '';
        this.showSpinner = false;
      }

      _createClass(LoginComponent, [{
        key: "getState",
        value: function getState(store) {
          var state;
          store.select(function (state) {
            return state;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (s) {
            state = s;
          });
          return state.reducer;
        }
      }, {
        key: "toggleSignUp",
        value: function toggleSignUp() {
          this.signUpBool = !this.signUpBool;
        }
      }, {
        key: "handleToken",
        value: function handleToken(token, uid, pass) {
          var _this2 = this;

          var data = {
            username: uid,
            password: md5__WEBPACK_IMPORTED_MODULE_5___default()(pass),
            token: token
          };
          fetch(_global__WEBPACK_IMPORTED_MODULE_3__["BeURL"] + "login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(data)
          }).then(function (data_res) {
            return data_res.json();
          }).then(function (data) {
            console.log(data);

            if (data.message === 'failed') {
              _this2.showSpinner = false;
              _this2.errorString = 'Wrong Password';
            } else {
              _this2.errorString = '';
              _this2.showSpinner = false; // REDIRECT

              if (_global__WEBPACK_IMPORTED_MODULE_3__["prodBool"]) {
                js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('username', uid, {
                  expires: 7,
                  domain: 'localhost'
                });
              } else {
                js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('username', uid, {
                  expires: 7,
                  domain: 'adithyaanil1999.github.io'
                });
              }

              _this2._router.navigate(['dashboard/discover']);
            }
          });
        }
      }, {
        key: "handleSignIn",
        value: function handleSignIn(uid, pass) {
          var _this3 = this;

          this.recaptchaV3Service.execute('submitLogin').subscribe(function (token) {
            if (uid === '' || pass === '') {
              _this3.errorString = 'Fields must not be empty';
            } else if (uid.length < 6) {
              _this3.errorString = 'Username is too short';
            } else if (uid.length >= 29) {
              _this3.errorString = 'Username is too long';
            } else if (pass.length < 8) {
              _this3.errorString = 'Password is too short';
            } else {
              _this3.showSpinner = true;
              _this3.errorString = '';

              _this3.handleToken(token, uid, pass);
            }
          });
        }
      }, {
        key: "handleSignUp",
        value: function handleSignUp(uid, pass, confPass) {
          var _this4 = this;

          if (pass != confPass) {
            this.errorString = 'Passwords do not match';
          } else if (uid.length < 6) {
            this.errorString = 'Username is too short';
          } else if (uid.length >= 29) {
            this.errorString = 'Username is too long';
          } else if (pass.length < 8) {
            this.errorString = 'Password is too short';
          } else {
            this.errorString = '';
            this.showSpinner = true;
            this.showSpinner = false;
            this.recaptchaV3Service.execute('submitSignUp').subscribe(function (token) {
              var data = {
                username: uid,
                password: md5__WEBPACK_IMPORTED_MODULE_5___default()(pass),
                token: token
              };
              console.log('signUp');
              fetch(_global__WEBPACK_IMPORTED_MODULE_3__["BeURL"] + "signUp", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(data)
              }).then(function (data_res) {
                return data_res.json();
              }).then(function (data) {
                console.log(data);

                if (data.message === 'failed') {
                  _this4.showSpinner = false;
                  _this4.errorString = 'User Name exist,Try again';
                } else {
                  _this4.errorString = '';
                  _this4.showSpinner = false; //Create user

                  if (_global__WEBPACK_IMPORTED_MODULE_3__["prodBool"]) {
                    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('username', uid, {
                      expires: 7,
                      domain: 'localhost'
                    });
                  } else {
                    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('username', uid, {
                      expires: 7,
                      domain: 'adithyaanil1999.github.io'
                    });
                  }

                  _this4._router.navigate(['dashboard/discover']);
                }
              });
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var currentState = this.getState(this.store);
          this.checkMobile = currentState.mobileBool;
          console.log("PROTECTED BY reCAPTCHAv3");
          var username = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('username');

          if (username == '' || username == undefined) {} else {
            this.store.dispatch(Object(_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_4__["checklogin"])({
              isLoggedIn: true
            }));

            this._router.navigate(['dashboard']);
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["ReCaptchaV3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 22,
      vars: 10,
      consts: [[1, "login-container", "animate__animated", "animate__fadeIn"], [1, "login-box"], ["class", "login-box-left", 4, "ngIf"], [1, "login-box-right", 3, "ngClass"], [1, "login-main"], [1, "login-header-cont"], ["class", "login-form-cont animate__animated animate__fadeIn", 3, "keyup.enter", 4, "ngIf"], ["class", "signup-form-cont animate__animated animate__fadeIn", 4, "ngIf"], [1, "signup-nav-cont"], [1, "spinner-cont-box"], ["class", "spinner-cont", 4, "ngIf"], [1, "signup-nav-cont-text"], [2, "height", "50%", "color", "red", 3, "innerHTML"], [3, "click"], [4, "ngIf"], [1, "login-box-left"], ["src", "https://i.ibb.co/L5X633x/742113.png", "alt", "742113"], [1, "login-form-cont", "animate__animated", "animate__fadeIn", 3, "keyup.enter"], ["placeholder", "Username", "type", "text", "id", "username", 1, "login-input"], ["username", ""], ["placeholder", "Password", "type", "password", "id", "password", 1, "login-input"], ["password", ""], [1, "login-btn", 3, "click"], [1, "signup-form-cont", "animate__animated", "animate__fadeIn"], ["placeholder", "Username", "type", "text", "id", "username-signUp", 1, "login-input"], ["usernameSignUp", ""], ["placeholder", "Password", "type", "password", "id", "password-signUp", 1, "login-input"], ["passwordSignUp", ""], ["placeholder", "Confirm Password", "type", "password", "id", "confirmPassword", 1, "login-input"], ["confirmPassword", ""], [1, "spinner-cont"], [1, "lds-roller"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Manga Reader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 7, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 9, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 10, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Click ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_17_listener() {
            return ctx.toggleSignUp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " to Sign ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_span_20_Template, 2, 0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_span_21_Template, 2, 0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.checkMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.checkMobile));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signUpBool);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpBool);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.errorString, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signUpBool);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpBool);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]],
      styles: [".login-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.login-box[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n    height: 97%;\r\n    display: flex;\r\n    \r\n}\r\n\r\n.login-box-left[_ngcontent-%COMP%]{\r\n    background: greenyellow;\r\n    width: 40%;\r\n    height: 100%;\r\n    border-top-left-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n}\r\n\r\n.login-box-left[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    border-top-left-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n}\r\n\r\n.login-box-right[_ngcontent-%COMP%]{\r\n    background: rgb(26, 26, 26);\r\n    width: 60%;\r\n    height: 100%;\r\n    border-top-right-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.login-main[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 70%;\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.login-header-cont[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 30%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #4effff;\r\n    font-size: 2rem;\r\n    font-family: 'Zilla Slab', serif;\r\n    font-weight: 200;\r\n}\r\n\r\n.mobileBox[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 20px;\r\n}\r\n\r\n.mobileBox[_ngcontent-%COMP%]    > .login-main[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    \r\n}\r\n\r\n.mobileBox[_ngcontent-%COMP%]    > .login-main[_ngcontent-%COMP%]    > .login-header-cont[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 30%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: rgb(5, 160, 160);\r\n    font-size: 1rem;\r\n    font-family: 'Zilla Slab', serif;\r\n    font-weight: 200;\r\n}\r\n\r\n.login-form-cont[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 50%;\r\n    \r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.login-input[_ngcontent-%COMP%]{\r\n    height: 10%;\r\n    padding: 10px;\r\n    width: 70%;\r\n    background: none;\r\n    border-radius: 8px;\r\n    margin-bottom: 15px;\r\n    border: none;\r\n    border-bottom: 2px solid #4effff;\r\n    color: #4effff;\r\n}\r\n\r\n.login-input[_ngcontent-%COMP%]::-moz-placeholder {\r\n    color:  #4effff;\r\n  }\r\n\r\n.login-input[_ngcontent-%COMP%]::placeholder {\r\n    color:  #4effff;\r\n  }\r\n\r\n.login-input[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n}\r\n\r\n.login-btn[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    border: none;\r\n    margin-top: 20px;\r\n    border-radius: 5px;\r\n    background: teal;\r\n    color: #000000;\r\n    cursor: pointer;\r\n}\r\n\r\n.login-btn[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n}\r\n\r\n.signup-nav-cont[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 20%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    color: #4effff;\r\n}\r\n\r\n.signup-nav-cont-text[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.signup-form-cont[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 50%;\r\n    \r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.spinner-cont-box[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 50%;\r\n}\r\n\r\n.spinner-cont[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.signup-nav-cont-text[_ngcontent-%COMP%]{\r\n    height: 50%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 80px;\r\n    height: 80px;\r\n    transform: scale(0.5);\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n            animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    transform-origin: 40px 40px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    content: \" \";\r\n    display: block;\r\n    position: absolute;\r\n    width: 7px;\r\n    height: 7px;\r\n    border-radius: 50%;\r\n    background: #4effff;\r\n    margin: -4px 0 0 -4px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n    -webkit-animation-delay: -0.036s;\r\n            animation-delay: -0.036s;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1):after {\r\n    top: 63px;\r\n    left: 63px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n    -webkit-animation-delay: -0.072s;\r\n            animation-delay: -0.072s;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after {\r\n    top: 68px;\r\n    left: 56px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n    -webkit-animation-delay: -0.108s;\r\n            animation-delay: -0.108s;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after {\r\n    top: 71px;\r\n    left: 48px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\r\n    -webkit-animation-delay: -0.144s;\r\n            animation-delay: -0.144s;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after {\r\n    top: 72px;\r\n    left: 40px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\r\n    -webkit-animation-delay: -0.18s;\r\n            animation-delay: -0.18s;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after {\r\n    top: 71px;\r\n    left: 32px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\r\n    -webkit-animation-delay: -0.216s;\r\n            animation-delay: -0.216s;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after {\r\n    top: 68px;\r\n    left: 24px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\r\n    -webkit-animation-delay: -0.252s;\r\n            animation-delay: -0.252s;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after {\r\n    top: 63px;\r\n    left: 17px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\r\n    -webkit-animation-delay: -0.288s;\r\n            animation-delay: -0.288s;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after {\r\n    top: 56px;\r\n    left: 12px;\r\n  }\r\n\r\n@-webkit-keyframes lds-roller {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n@keyframes lds-roller {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7RUFDakI7O0FBRkY7SUFDSSxlQUFlO0VBQ2pCOztBQUVGO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQSxZQUFZOztBQUNaO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7QUFDQTtJQUNFLHdFQUFnRTtZQUFoRSxnRUFBZ0U7SUFDaEUsMkJBQTJCO0VBQzdCOztBQUNBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtFQUN2Qjs7QUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7O0FBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztBQUNBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjs7QUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCOztBQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjs7QUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7O0FBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztBQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7QUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCOztBQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjs7QUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7O0FBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztBQUNBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjs7QUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0Y7O0FBUEE7SUFDRTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWJveHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IDk3JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB3aGl0ZTsgKi9cclxufVxyXG5cclxuLmxvZ2luLWJveC1sZWZ0e1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW55ZWxsb3c7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1ib3gtbGVmdCA+IGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1ib3gtcmlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjYsIDI2LCAyNik7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1tYWlue1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgLyogYmFja2dyb3VuZDogd2hlYXQ7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmxvZ2luLWhlYWRlci1jb250e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzRlZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnWmlsbGEgU2xhYicsIHNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLm1vYmlsZUJveHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm1vYmlsZUJveCA+IC5sb2dpbi1tYWluIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBcclxufVxyXG5cclxuLm1vYmlsZUJveCA+IC5sb2dpbi1tYWluID4gLmxvZ2luLWhlYWRlci1jb250e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDUsIDE2MCwgMTYwKTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnWmlsbGEgU2xhYicsIHNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0tY29udHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5sb2dpbi1pbnB1dHtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNGVmZmZmO1xyXG4gICAgY29sb3I6ICM0ZWZmZmY7XHJcbn1cclxuXHJcbi5sb2dpbi1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICAjNGVmZmZmO1xyXG4gIH1cclxuXHJcbi5sb2dpbi1pbnB1dDpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5sb2dpbi1idG57XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWJ0bjpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zaWdudXAtbmF2LWNvbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzRlZmZmZjtcclxufVxyXG5cclxuLnNpZ251cC1uYXYtY29udC10ZXh0PnA+YXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2lnbnVwLWZvcm0tY29udHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zcGlubmVyLWNvbnQtYm94e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufVxyXG5cclxuLnNwaW5uZXItY29udHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uc2lnbnVwLW5hdi1jb250LXRleHR7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8qIFNwaW5uZXIgKi9cclxuLmxkcy1yb2xsZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdiB7XHJcbiAgICBhbmltYXRpb246IGxkcy1yb2xsZXIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNDBweCA0MHB4O1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICM0ZWZmZmY7XHJcbiAgICBtYXJnaW46IC00cHggMCAwIC00cHg7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wMzZzO1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcclxuICAgIHRvcDogNjNweDtcclxuICAgIGxlZnQ6IDYzcHg7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wNzJzO1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpOmFmdGVyIHtcclxuICAgIHRvcDogNjhweDtcclxuICAgIGxlZnQ6IDU2cHg7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMDhzO1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpOmFmdGVyIHtcclxuICAgIHRvcDogNzFweDtcclxuICAgIGxlZnQ6IDQ4cHg7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNDRzO1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcclxuICAgIHRvcDogNzJweDtcclxuICAgIGxlZnQ6IDQwcHg7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xOHM7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xyXG4gICAgdG9wOiA3MXB4O1xyXG4gICAgbGVmdDogMzJweDtcclxuICB9XHJcbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjIxNnM7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xyXG4gICAgdG9wOiA2OHB4O1xyXG4gICAgbGVmdDogMjRweDtcclxuICB9XHJcbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI1MnM7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xyXG4gICAgdG9wOiA2M3B4O1xyXG4gICAgbGVmdDogMTdweDtcclxuICB9XHJcbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI4OHM7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXIge1xyXG4gICAgdG9wOiA1NnB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZHMtcm9sbGVyIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["ReCaptchaV3Service"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/components/manga-page/manga-page.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/home/components/manga-page/manga-page.component.ts ***!
    \****************************************************************************/

  /*! exports provided: MangaPageComponent */

  /***/
  function srcAppModulesHomeComponentsMangaPageMangaPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MangaPageComponent", function () {
      return MangaPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../global */
    "./src/global.ts");
    /* harmony import */


    var _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../store/actions/app.actions */
    "./src/app/store/actions/app.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MangaPageComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MangaPageComponent_div_2_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \xA0Bookmark this page ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MangaPageComponent_div_2_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \xA0Unbookmark this page ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MangaPageComponent_div_2_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Title:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.data.title);
      }
    }

    function MangaPageComponent_div_2_p_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Author:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.data.author);
      }
    }

    function MangaPageComponent_div_2_p_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.data.status);
      }
    }

    function MangaPageComponent_div_2_p_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Last Updated:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.data.lastUpdate);
      }
    }

    function MangaPageComponent_div_2_p_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Description:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.data.desc);
      }
    }

    function MangaPageComponent_div_2_a_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaPageComponent_div_2_a_19_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.handleLink(ctx_r14.data.chapterList[ctx_r14.lastIndex + 1].chapterLink, ctx_r14.data.chapterList[ctx_r14.lastIndex + 1].chapterTitle);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", null, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.data.chapterList[ctx_r9.lastIndex + 1].chapterTitle);
      }
    }

    function MangaPageComponent_div_2_a_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaPageComponent_div_2_a_31_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.handleLink(ctx_r17.data.chapterList[ctx_r17.lastIndex - 1].chapterLink, ctx_r17.data.chapterList[ctx_r17.lastIndex - 1].chapterTitle);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", null, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.data.chapterList[ctx_r11.lastIndex - 1].chapterTitle);
      }
    }

    function MangaPageComponent_div_2_a_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaPageComponent_div_2_a_32_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var i_r19 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.handleLink(i_r19.chapterLink, i_r19.chapterTitle);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", null, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r19 = ctx.$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("last-read-item", i_r19.chapterTitle === ctx_r12.lastRead);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r19.chapterTitle === ctx_r12.lastRead ? ctx_r12.getLastChapLink(i_r19.chapterLink, i_r19.chapterTitle) : null, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r19.chapterTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r19.chapDate);
      }
    }

    function MangaPageComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaPageComponent_div_2_Template_div_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.handleBookmark();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MangaPageComponent_div_2_span_9_Template, 2, 0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MangaPageComponent_div_2_span_10_Template, 2, 0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MangaPageComponent_div_2_p_11_Template, 6, 1, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MangaPageComponent_div_2_p_12_Template, 7, 1, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MangaPageComponent_div_2_p_13_Template, 7, 1, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MangaPageComponent_div_2_p_14_Template, 7, 1, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MangaPageComponent_div_2_p_15_Template, 7, 1, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MangaPageComponent_div_2_a_19_Template, 10, 1, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaPageComponent_div_2_Template_a_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.handleLastRead();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", null, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Continue Reading");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MangaPageComponent_div_2_a_31_Template, 10, 1, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MangaPageComponent_div_2_a_32_Template, 10, 5, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.data.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isBookmarked === undefined || ctx_r1.isBookmarked === "NO");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isBookmarked === "YES");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.data.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.data.author);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.data.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.data.lastUpdate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.data.desc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lastIndex !== ctx_r1.data.chapterList.length - 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.lastRead.toString() === "0" ? ctx_r1.getLastChapLink(ctx_r1.data.chapterList[ctx_r1.data.chapterList.length - 1].chapterLink, ctx_r1.data.chapterList[ctx_r1.data.chapterList.length - 1].chapterTitle) : null, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.lastRead.toString() === "0" ? "Start" : ctx_r1.lastRead);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lastIndex != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.data.chapterList);
      }
    }

    var MangaPageComponent = /*#__PURE__*/function () {
      function MangaPageComponent(store, route, router) {
        _classCallCheck(this, MangaPageComponent);

        this.store = store;
        this.route = route;
        this.router = router;
        this.setSpinner = false;
        this.substate = false;
        this.lastRead = '';
        this.lastChapLink = '';
        this.lastChapTitle = '';
        this.isBookmarked = '';
        this.lastIndex = 0;
      }

      _createClass(MangaPageComponent, [{
        key: "getLastChapLink",
        value: function getLastChapLink(link, title) {
          this.lastChapLink = link;
          this.lastChapTitle = title;
        }
      }, {
        key: "findIndexLast",
        value: function findIndexLast() {
          for (var i = 0; i < this.data.chapterList.length; i++) {
            if (this.data.chapterList[i].chapterTitle == this.lastRead) {
              this.lastIndex = i;
              break;
            }
          }
        }
      }, {
        key: "handleLink",
        value: function handleLink(link, title) {
          var _this5 = this;

          this.setSpinner = true;
          var data = {
            username: this.state['userDetailObject']['username'],
            src: this.getSourceFromUrl(),
            mangaTitle: this.data.title,
            chapTitle: title
          };
          fetch(_global__WEBPACK_IMPORTED_MODULE_1__["BeURL"] + "updateHistory", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(data)
          }).then(function (res) {
            return res.json();
          }).then(function (data) {
            if (data.message === "sucesss") {
              _this5.setSpinner = false;

              _this5.router.navigate(['chapViewer'], {
                queryParams: {
                  link: link
                }
              });
            } else {
              alert('Some error has occured');
              location.reload();
            }
          });
        }
      }, {
        key: "handleLastRead",
        value: function handleLastRead() {
          this.handleLink(this.lastChapLink, this.lastChapTitle);
        }
      }, {
        key: "highlightLastRead",
        value: function highlightLastRead() {
          var _this6 = this;

          this.setSpinner = true;
          var dataSent = {
            username: this.state['userDetailObject']['username'],
            src: this.getSourceFromUrl(),
            mangaTitle: this.data.title
          };
          fetch(_global__WEBPACK_IMPORTED_MODULE_1__["BeURL"] + "getLastReadChapter", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(dataSent)
          }).then(function (res) {
            return res.json();
          }).then(function (data) {
            _this6.setSpinner = false;
            _this6.lastRead = data.message;
            _this6.isBookmarked = data.messageBookmarked;

            _this6.findIndexLast();
          });
        }
      }, {
        key: "getState",
        value: function getState() {
          var state;
          this.store.select(function (state) {
            return state;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (s) {
            state = s;
          });
          return state.reducer;
        }
      }, {
        key: "getSourceFromUrl",
        value: function getSourceFromUrl() {
          //UPDATE THIS WITH SOURCES
          var currentUrl = window.location.href;

          if (currentUrl.indexOf('mangapark.net') !== -1) {
            return "MGPK";
          }
        }
      }, {
        key: "handleBookmark",
        value: function handleBookmark() {
          var _this7 = this;

          var data = {
            username: this.state['userDetailObject']['username'],
            src: this.getSourceFromUrl(),
            mangaTitle: this.data.title,
            chapTitle: this.lastChapTitle
          };
          console.log(data);
          this.setSpinner = true;
          fetch(_global__WEBPACK_IMPORTED_MODULE_1__["BeURL"] + "addBookmark", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(data)
          }).then(function (res) {
            return res.json();
          }).then(function (data) {
            if (data.message === "success") {
              _this7.setSpinner = false;

              if (_this7.isBookmarked === 'YES') {
                _this7.isBookmarked = 'NO';
              } else {
                _this7.isBookmarked = 'YES';
              }
            } else {
              alert('Some error has occured');
              location.reload();
            }
          });
        }
      }, {
        key: "getMangaDetails",
        value: function getMangaDetails(link) {
          var _this8 = this;

          fetch(_global__WEBPACK_IMPORTED_MODULE_1__["scaperURL"] + "getMangaInfo", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
              url: link
            })
          }).then(function (res) {
            return res.json();
          }).then(function (data) {
            _this8.data = data.mangaInfo;

            _this8.store.dispatch(Object(_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__["currentMangaDetails"])({
              mangaDetails: Object.assign({}, _this8.data)
            }));

            _this8.setSpinner = false;

            _this8.highlightLastRead();

            if (_this8.data.desc.indexOf(':') !== -1) {
              _this8.data.desc = _this8.data.desc.split(':')[1];
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.setSpinner = true;
          this.state = this.getState();

          if (this.state['refreshMangaPageBool'] === true) {
            this.store.dispatch(Object(_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__["refreshMangaPage"])({
              refreshMangaPage: false
            }));
            this.substate = true;
            this.sub = this.route.queryParams.subscribe(function (params) {
              _this9.getMangaDetails(params.link);
            });
          } else {
            if (this.state['mangaObject']) {
              var dataSent = {
                username: this.state['userDetailObject']['username'],
                src: this.getSourceFromUrl(),
                mangaTitle: this.state['mangaObject']['title']
              };
              fetch(_global__WEBPACK_IMPORTED_MODULE_1__["BeURL"] + "getLastReadChapter", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(dataSent)
              }).then(function (res) {
                return res.json();
              }).then(function (data) {
                _this9.highlightLastRead();
              });
              this.data = this.state['mangaObject'];
              this.setSpinner = false;
            } else {
              this.sub = this.route.queryParams.subscribe(function (params) {
                _this9.getMangaDetails(params.link);
              });
            }
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.substate) {
            this.sub.unsubscribe();
          }
        }
      }]);

      return MangaPageComponent;
    }();

    MangaPageComponent.ɵfac = function MangaPageComponent_Factory(t) {
      return new (t || MangaPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    MangaPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MangaPageComponent,
      selectors: [["app-manga-page"]],
      decls: 3,
      vars: 2,
      consts: [[1, "manga-view-wrap"], ["class", "spinner-cont", 4, "ngIf"], ["class", "manga-grid", 4, "ngIf"], [1, "spinner-cont"], [1, "loader"], [1, "manga-grid"], [1, "grid-left"], [1, "thumb-wrap"], ["alt", "thumbnail", 3, "src"], [1, "desc-wrap"], [1, "desc-flex-wrap"], [1, "bookmark-wrapper", 3, "click"], [1, "fas", "fa-bookmark"], [4, "ngIf"], ["class", "text-wrap", 4, "ngIf"], [1, "grid-right"], [1, "chap-list-wrap"], [1, "chap-inner-wrap"], ["style", "margin-bottom: 20px;", 3, "click", 4, "ngIf"], [2, "margin-bottom", "20px", 3, "click"], [1, "continue-button"], [1, "chap-item", "cont-item"], [1, "chap-item-left"], ["chapterTitle", ""], [1, "chap-item-right", "cont-title"], [1, "title-wrap"], [3, "click", 4, "ngFor", "ngForOf"], [1, "text-wrap"], [2, "text-decoration", "underline"], [1, "chap-item", "cont-item", "prev-button"], [1, "chap-item", "cont-item", "next-button"], [3, "click"], [1, "chap-item"], [1, "chap-item-right"]],
      template: function MangaPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MangaPageComponent_div_1_Template, 3, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MangaPageComponent_div_2_Template, 33, 13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.setSpinner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.setSpinner);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: [".manga-view-wrap[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    background: linear-gradient(145deg, #3C3C3C, #2A2A2A);\r\n    border-radius: 3%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 80%;\r\n\r\n}\r\n\r\n.bookmark-wrapper[_ngcontent-%COMP%]{\r\n    width: 97%;\r\n    margin-bottom: 15px;\r\n    margin-left: auto;\r\n    height: 62px;\r\n    background: #351d1d;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #ff8b8b;\r\n    border-radius: 20px;\r\n\r\n}\r\n\r\n.manga-grid[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: 30% 1fr;\r\n    grid-template-rows: 100%;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.grid-left[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n}\r\n\r\n.thumb-wrap[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n}\r\n\r\n.thumb-wrap[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 88%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 3%;\r\n\r\n}\r\n\r\n.thumb-wrap[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\r\n    width: 75%;\r\n    height: 88%;\r\n    border-radius: 20px;\r\n}\r\n\r\n.desc-wrap[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.desc-flex-wrap[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 95%;\r\n    overflow-y:scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.text-wrap[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    color:#b5a2a2;\r\n}\r\n\r\n.grid-right[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.chap-list-wrap[_ngcontent-%COMP%]{\r\n    width: 93%;\r\n    height: 96%;\r\n    background: linear-gradient(145deg, #3C3C3C, #2A2A2A);\r\n    border-radius: 3%;\r\n    \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color:#b5a2a2;\r\n}\r\n\r\n.chap-list-wrap[_ngcontent-%COMP%]{\r\n    width: 93%;\r\n    height: 96%;\r\n    display: flex;\r\n    flex-direction:column;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.chap-inner-wrap[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 90%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    overflow: scroll;\r\n}\r\n\r\n.chap-inner-wrap[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 10%;\r\n    cursor: pointer;\r\n}\r\n\r\n.chap-item[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-bottom: 5px;\r\n    border-radius: 20px;\r\n    display: flex;\r\n}\r\n\r\n.chap-item-left[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.chap-item-left[_ngcontent-%COMP%]{\r\n    margin-left: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.chap-item-right[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.last-read-item[_ngcontent-%COMP%]{\r\n    background: linear-gradient(145deg, #4c4c4c, #3E3E3E);\r\n}\r\n\r\n.continue-button[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.cont-item[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: #858f98;\r\n    color: #561212;\r\n}\r\n\r\n.title-wrap[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    margin-right: 20px;\r\n}\r\n\r\n.cont-title[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n.prev-button[_ngcontent-%COMP%]{\r\n    background: #8c84f5 !important;\r\n}\r\n\r\n.next-button[_ngcontent-%COMP%]{\r\n    background: coral !important;\r\n}\r\n\r\n@media screen and (max-width: 1028px) {\r\n    .manga-view-wrap[_ngcontent-%COMP%]{\r\n        background: none;\r\n        box-shadow: none;\r\n        width: 100%;\r\n    }\r\n    .chap-item-left[_ngcontent-%COMP%]{\r\n        margin-left: 20px;\r\n    }\r\n    .manga-grid[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-direction: column;\r\n        height: auto;\r\n    }\r\n    .desc-wrap[_ngcontent-%COMP%]{\r\n        margin-top: 20px;\r\n    }\r\n    .grid-right[_ngcontent-%COMP%]{\r\n        height: 100%;\r\n    }\r\n    .chap-list-wrap[_ngcontent-%COMP%]{\r\n        width: 82%; \r\n        height: 64vh;\r\n        margin-top: 20px; \r\n    }\r\n    .chap-inner-wrap[_ngcontent-%COMP%]{\r\n        width: 98%;\r\n    }\r\n    .chap-inner-wrap[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]{\r\n        font-size: 1.2vh !important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvbWFuZ2EtcGFnZS9tYW5nYS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFEQUFxRDtJQUNyRCxpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxxREFBcUQ7SUFDckQsaUJBQWlCO0lBQ2pCLGtGQUFrRjtJQUNsRixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7O0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsV0FBVztJQUNmO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL21hbmdhLXBhZ2UvbWFuZ2EtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hbmdhLXZpZXctd3JhcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgIzNDM0MzQywgIzJBMkEyQSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzJTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG5cclxufVxyXG5cclxuLmJvb2ttYXJrLXdyYXBwZXJ7XHJcbiAgICB3aWR0aDogOTclO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzM1MWQxZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmOGI4YjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG59XHJcblxyXG4ubWFuZ2EtZ3JpZHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmdyaWQtbGVmdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udGh1bWItd3JhcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG4udGh1bWItd3JhcCA+IGRpdntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDg4JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzJTtcclxuXHJcbn1cclxuXHJcbi50aHVtYi13cmFwID4gZGl2ID4gaW1ne1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogODglO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4uZGVzYy13cmFwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZXNjLWZsZXgtd3JhcHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbi50ZXh0LXdyYXB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgY29sb3I6I2I1YTJhMjtcclxufVxyXG5cclxuLmdyaWQtcmlnaHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2hhcC1saXN0LXdyYXB7XHJcbiAgICB3aWR0aDogOTMlO1xyXG4gICAgaGVpZ2h0OiA5NiU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjM0MzQzNDLCAjMkEyQTJBKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMlO1xyXG4gICAgLyogYm94LXNoYWRvdzogaW5zZXQgNXB4IDRweCAxN3B4ICMxRDFEMUQsIGluc2V0IC0xNC40MXB4IC0xNC40MXB4IDE3cHggIzQ5NDk0OTsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiNiNWEyYTI7XHJcbn1cclxuXHJcbi5jaGFwLWxpc3Qtd3JhcHtcclxuICAgIHdpZHRoOiA5MyU7XHJcbiAgICBoZWlnaHQ6IDk2JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jaGFwLWlubmVyLXdyYXB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLmNoYXAtaW5uZXItd3JhcCA+YXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jaGFwLWl0ZW17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jaGFwLWl0ZW0tbGVmdHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2hhcC1pdGVtLWxlZnR7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jaGFwLWl0ZW0tcmlnaHR7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sYXN0LXJlYWQtaXRlbXtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICM0YzRjNGMsICMzRTNFM0UpO1xyXG59XHJcblxyXG4uY29udGludWUtYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250LWl0ZW17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODU4Zjk4O1xyXG4gICAgY29sb3I6ICM1NjEyMTI7XHJcbn1cclxuXHJcbi50aXRsZS13cmFwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmNvbnQtdGl0bGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ucHJldi1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiAjOGM4NGY1ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5leHQtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogY29yYWwgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI4cHgpIHtcclxuICAgIC5tYW5nYS12aWV3LXdyYXB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNoYXAtaXRlbS1sZWZ0e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hbmdhLWdyaWR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5kZXNjLXdyYXB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgIC5ncmlkLXJpZ2h0e1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jaGFwLWxpc3Qtd3JhcHtcclxuICAgICAgICB3aWR0aDogODIlOyBcclxuICAgICAgICBoZWlnaHQ6IDY0dmg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDsgXHJcbiAgICB9XHJcbiAgICAuY2hhcC1pbm5lci13cmFwe1xyXG4gICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICB9XHJcbiAgICAuY2hhcC1pbm5lci13cmFwID5he1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ydmggIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MangaPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-manga-page',
          templateUrl: './manga-page.component.html',
          styleUrls: ['./manga-page.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/components/manga-viewer/manga-viewer.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/modules/home/components/manga-viewer/manga-viewer.component.ts ***!
    \********************************************************************************/

  /*! exports provided: MangaViewerComponent */

  /***/
  function srcAppModulesHomeComponentsMangaViewerMangaViewerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MangaViewerComponent", function () {
      return MangaViewerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../global */
    "./src/global.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

    function MangaViewerComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MangaViewerComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaViewerComponent_div_2_Template_i_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.handleBackBtn();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MangaViewerComponent_div_3_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
      }

      if (rf & 2) {
        var i_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", i_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function MangaViewerComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MangaViewerComponent_div_3_img_1_Template, 1, 1, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.data);
      }
    }

    var MangaViewerComponent = /*#__PURE__*/function () {
      function MangaViewerComponent(location, route, store) {
        _classCallCheck(this, MangaViewerComponent);

        this.location = location;
        this.route = route;
        this.store = store;
        this.isMobile = false;
        this.isSpinner = true;
      }

      _createClass(MangaViewerComponent, [{
        key: "getState",
        value: function getState() {
          var state;
          this.store.select(function (state) {
            return state;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (s) {
            state = s;
          });
          return state.reducer;
        }
      }, {
        key: "handleBackBtn",
        value: function handleBackBtn() {
          this.location.back();
        }
      }, {
        key: "getImages",
        value: function getImages(link) {
          var _this10 = this;

          link = link.substring(0, link.lastIndexOf('/'));
          fetch(_global__WEBPACK_IMPORTED_MODULE_2__["scaperURL"] + "getImageList", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
              url: link
            })
          }).then(function (res) {
            return res.json();
          }).then(function (data) {
            _this10.data = data.imageList;
            _this10.isSpinner = false;
          })["catch"](function (e) {
            console.log(e);

            _this10.location.back();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.isMobile = this.getState().mobileBool;
          this.sub = this.route.queryParams.subscribe(function (params) {
            _this11.getImages(params.link);
          });
        }
      }]);

      return MangaViewerComponent;
    }();

    MangaViewerComponent.ɵfac = function MangaViewerComponent_Factory(t) {
      return new (t || MangaViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
    };

    MangaViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MangaViewerComponent,
      selectors: [["app-manga-viewer"]],
      decls: 4,
      vars: 3,
      consts: [[1, "mobile-main"], ["class", "spinner-cont", 4, "ngIf"], ["class", "back-btn-cont", 4, "ngIf"], ["class", "image-wrapper", 4, "ngIf"], [1, "spinner-cont"], [1, "loader"], [1, "back-btn-cont"], [1, "fas", "fa-arrow-circle-left", 3, "click"], [1, "image-wrapper"], ["alt", "", 3, "src", 4, "ngFor", "ngForOf"], ["alt", "", 3, "src"]],
      template: function MangaViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MangaViewerComponent_div_1_Template, 3, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MangaViewerComponent_div_2_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MangaViewerComponent_div_3_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSpinner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSpinner);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".mobile-main[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: scroll;\r\n    \r\n}\r\n\r\n.back-btn-cont[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    color: #ffffff6b;\r\n    font-size: 3rem;\r\n    width: 10%;\r\n    height: 100%;\r\n    position: absolute;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.back-btn-cont[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]{\r\n    cursor: none;\r\n}\r\n\r\n.image-wrapper[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.image-wrapper[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    display: block;\r\n}\r\n\r\n@media screen and (max-width: 1028px) {\r\n    .image-wrapper[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvbWFuZ2Etdmlld2VyL21hbmdhLXZpZXdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL21hbmdhLXZpZXdlci9tYW5nYS12aWV3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2JpbGUtbWFpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIC8qIGJhY2tncm91bmQ6IGJsYWNrOyAqL1xyXG59XHJcblxyXG4uYmFjay1idG4tY29udHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjZiO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJhY2stYnRuLWNvbnQgPiBpe1xyXG4gICAgY3Vyc29yOiBub25lO1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5pbWFnZS13cmFwcGVyPmltZ3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI4cHgpIHtcclxuICAgIC5pbWFnZS13cmFwcGVyPmltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MangaViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-manga-viewer',
          templateUrl: './manga-viewer.component.html',
          styleUrls: ['./manga-viewer.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/home.component.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/home/home.component.ts ***!
    \************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppModulesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! js-cookie */
    "./node_modules/js-cookie/src/js.cookie.js");
    /* harmony import */


    var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../store/actions/app.actions */
    "./src/app/store/actions/app.actions.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(_router, store) {
        _classCallCheck(this, HomeComponent);

        this._router = _router;
        this.store = store;
      }

      _createClass(HomeComponent, [{
        key: "getState",
        value: function getState(store) {
          var state;
          store.select(function (state) {
            return state;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (s) {
            state = s;
          });
          return state.reducer;
        }
      }, {
        key: "handleScroll",
        value: function handleScroll(e) {
          console.log("move");
          e.preventDefault();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var username = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('username');

          if (username == '' || username == undefined) {
            this._router.navigate(['login']);
          } else {
            this.store.dispatch(Object(_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_3__["checklogin"])({
              isLoggedIn: true
            }));

            this._router.navigate(['dashboard']);
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["ng-component"]],
      decls: 1,
      vars: 0,
      consts: [[1, "main-container", 3, "touchmove"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchmove", function HomeComponent_Template_div_touchmove_0_listener($event) {
            return ctx.handleScroll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".main-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAgICBcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/actions/app.actions.ts":
  /*!**********************************************!*\
    !*** ./src/app/store/actions/app.actions.ts ***!
    \**********************************************/

  /*! exports provided: checklogin, checkMobile, currentMangaLink, currentMangaDetails, latestMangaList, userDetails, pageNoObject, refreshMangaPage */

  /***/
  function srcAppStoreActionsAppActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "checklogin", function () {
      return checklogin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "checkMobile", function () {
      return checkMobile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "currentMangaLink", function () {
      return currentMangaLink;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "currentMangaDetails", function () {
      return currentMangaDetails;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "latestMangaList", function () {
      return latestMangaList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userDetails", function () {
      return userDetails;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pageNoObject", function () {
      return pageNoObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "refreshMangaPage", function () {
      return refreshMangaPage;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

    var checklogin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[loginModule] checkLogin', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var checkMobile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[appModule] checkMobile', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var currentMangaLink = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[mangaModule] getLink', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var currentMangaDetails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[mangaModule] mangaDetails', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var latestMangaList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[mangaModule] mangaLatestList', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var userDetails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[mangaModule] userDetails', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var pageNoObject = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[mangaModule] pageNumbers', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var refreshMangaPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[mangaModule] refreshMangaPage', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/store/reducers/app.reducers.ts":
  /*!************************************************!*\
    !*** ./src/app/store/reducers/app.reducers.ts ***!
    \************************************************/

  /*! exports provided: userFeatureKey, reducer */

  /***/
  function srcAppStoreReducersAppReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userFeatureKey", function () {
      return userFeatureKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _actions_app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/app.actions */
    "./src/app/store/actions/app.actions.ts");

    var userFeatureKey = 'AppState';
    var initalState = {
      loginBool: false,
      mobileBool: false,
      refreshMangaPageBool: true,
      latestObject: {},
      userDetailObject: {}
    };
    var reducerFunc = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initalState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["checklogin"], function (state, _ref) {
      var isLoggedIn = _ref.isLoggedIn;
      return Object.assign(Object.assign({}, state), {
        loginBool: isLoggedIn
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["checkMobile"], function (state, _ref2) {
      var isMobile = _ref2.isMobile;
      return Object.assign(Object.assign({}, state), {
        mobileBool: isMobile
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["currentMangaLink"], function (state, _ref3) {
      var currentMangaLink = _ref3.currentMangaLink;
      return Object.assign(Object.assign({}, state), {
        currentMangaLink: currentMangaLink
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["currentMangaDetails"], function (state, _ref4) {
      var mangaDetails = _ref4.mangaDetails;
      return Object.assign(Object.assign({}, state), {
        mangaObject: mangaDetails
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["latestMangaList"], function (state, _ref5) {
      var latestList = _ref5.latestList;
      return Object.assign(Object.assign({}, state), {
        latestObject: latestList
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["refreshMangaPage"], function (state, _ref6) {
      var refreshMangaPage = _ref6.refreshMangaPage;
      return Object.assign(Object.assign({}, state), {
        refreshMangaPageBool: refreshMangaPage
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["userDetails"], function (state, _ref7) {
      var userDetails = _ref7.userDetails;
      return Object.assign(Object.assign({}, state), {
        userDetailObject: userDetails
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["pageNoObject"], function (state, _ref8) {
      var pageNoObj = _ref8.pageNoObj;
      return Object.assign(Object.assign({}, state), {
        pageNoObject: pageNoObj
      });
    }));

    function reducer(state, action) {
      return reducerFunc(state, action);
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/global.ts":
  /*!***********************!*\
    !*** ./src/global.ts ***!
    \***********************/

  /*! exports provided: BeURL, scaperURL, prodBool, version */

  /***/
  function srcGlobalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeURL", function () {
      return BeURL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaperURL", function () {
      return scaperURL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "prodBool", function () {
      return prodBool;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "version", function () {
      return version;
    }); // export const BeURL = 'http://localhost:3000/';


    var BeURL = 'https://manga-reader-be.herokuapp.com/';
    var scaperURL = 'https://manga-reader-express.herokuapp.com/';
    var prodBool = false; // export const prodBool = true;

    var version = "v0.101";
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Adithya\Documents\Dev\manga-reader-ang\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map