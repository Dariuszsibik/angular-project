(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing-module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing-module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cars_cars_list_cars_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cars/cars-list/cars-list.component */ "./src/app/cars/cars-list/cars-list.component.ts");
/* harmony import */ var _core_module_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-module/login/login.component */ "./src/app/core-module/login/login.component.ts");
/* harmony import */ var _core_module_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core-module/dashboard/dashboard.component */ "./src/app/core-module/dashboard/dashboard.component.ts");
/* harmony import */ var _flights_flights_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flights/flights.component */ "./src/app/flights/flights.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var APP_ROUTERS = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: _core_module_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _core_module_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'cars', component: _cars_cars_list_cars_list_component__WEBPACK_IMPORTED_MODULE_2__["CarsListComponent"] },
    { path: 'flights', component: _flights_flights_component__WEBPACK_IMPORTED_MODULE_5__["FlightsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(APP_ROUTERS, { useHash: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content-wrapper {\n  background: #518bbf;\n  margin: 0 0 0 180px;\n  min-height: 100%;\n  padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDovUHJvamVrdHkvQW5ndWxhclByb2plY3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7Q0NESCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG4jY29udGVudC13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZDtcbiAgICBtYXJnaW46IDAgMCAwIDE4MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbn0iLCIjY29udGVudC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogIzUxOGJiZjtcbiAgbWFyZ2luOiAwIDAgMCAxODBweDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cars_cars_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cars/cars.module */ "./src/app/cars/cars.module.ts");
/* harmony import */ var _cars_cars_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cars/cars.service */ "./src/app/cars/cars.service.ts");
/* harmony import */ var _core_module_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core-module/core-module */ "./src/app/core-module/core-module.ts");
/* harmony import */ var _app_flights_flights_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/flights/flights.module */ "./src/app/flights/flights.module.ts");
/* harmony import */ var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared-module/shared-module */ "./src/app/shared-module/shared-module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing-module */ "./src/app/app-routing-module.ts");
/* harmony import */ var _cars_cars_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cars/cars-routing.module */ "./src/app/cars/cars-routing.module.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _core_module_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core-module/dashboard/dashboard.component */ "./src/app/core-module/dashboard/dashboard.component.ts");
/* harmony import */ var _core_module_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core-module/login/login.component */ "./src/app/core-module/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _core_module_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"],
                _core_module_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _cars_cars_module__WEBPACK_IMPORTED_MODULE_5__["CarsModule"],
                _core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _cars_cars_routing_module__WEBPACK_IMPORTED_MODULE_11__["CarsRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"],
                _app_flights_flights_module__WEBPACK_IMPORTED_MODULE_8__["FlightsModule"]
            ],
            providers: [_cars_cars_service__WEBPACK_IMPORTED_MODULE_6__["CarsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cars/car-details/car-details.component.html":
/*!*************************************************************!*\
  !*** ./src/app/cars/car-details/car-details.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cs-header>\r\n</cs-header>\r\n<cs-sidebar></cs-sidebar>\r\n<p levels>cars /{{ car.model }}</p>\r\n\r\n<div content>\r\n    <p>Car details</p>\r\n</div>\r\n\r\n\r\n<p class=\"data-header\">Edit {{ car.model }} </p>\r\n<div class=\"data-container\">\r\n        <form [formGroup]=\"carForm\">\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-sm-4\">\r\n                    <label>Model</label>\r\n                    <input formControlName=\"model\" type=\"text\" class=\"form-control\" placeholder=\"model\">\r\n                    <p *ngIf=\"!carForm.get('model').valid && carForm.get('model').dirty\" class=\"error\">This field is required!</p>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Type</label>\r\n                    <input formControlName=\"type\" type=\"text\" class=\"form-control\" placeholder=\"type\">\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Plate</label>\r\n                    <input formControlName=\"plate\" type=\"text\" class=\"form-control\" placeholder=\"plate\">\r\n                    <p *ngIf=\"!carForm.get('plate').valid && carForm.get('plate').dirty\" class=\"error\">This field is required and must contain 3-7 characters</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-sm-4\">\r\n                    <label>Delivery Date</label>\r\n                    <input formControlName=\"deliveryDate\" formControlName=\"model\" type=\"text\" class=\"form-control\" placeholder=\"Delivery Date\">\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Deadline</label>\r\n                    <input formControlName=\"deadline\" formControlName=\"model\" type=\"text\" class=\"form-control\" placeholder=\"Deadline\">\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Cost</label>\r\n                    <input formControlName=\"cost\" formControlName=\"model\" type=\"text\" class=\"form-control\" placeholder=\"cost\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-sm-4\">\r\n                    <label>Color</label>\r\n                    <input formControlName=\"color\" type=\"text\" class=\"form-control\" placeholder=\"Color\">\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Power</label>\r\n                    <input formControlName=\"power\" type=\"text\" class=\"form-control\" placeholder=\"Power\">\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                        <label>Is car fully damaged</label>\r\n                        <input formControlName=\"isFullyDamaged\" type=\"checkbox\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-sm-4\">\r\n                    <label>First Name</label>\r\n                    <input formControlName=\"clientFirstName\" type=\"text\" class=\"form-control\" placeholder=\"First Name\">\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Last Name</label>\r\n                    <input formControlName=\"clientSurname\" type=\"text\" class=\"form-control\" placeholder=\"Last Name\">\r\n                </div>\r\n                <div>\r\n                    <label>Year</label>\r\n                    <input formControlName=\"year\" type=\"text\" class=\"form-control\" placeholder=\"year\">\r\n    \r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <button [disabled]=\"carForm.invalid\" (click)=\"updateCar()\" type=\"submit\" class=\"btn btn-primary float-right\">Update car</button>\r\n                    <button (click)=\"carForm.reset()\" type=\"submit\" class=\"btn btn-default float-right\">Reset</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <!-- <pre> {{ carForm.value | json}} </pre> -->\r\n        <!-- <pre> Stan walidacji inputa model: {{ carForm.get('model').valid | json}} </pre>\r\n        <pre> Stan walidacji inputa plate: {{ carForm.get('plate').valid | json}} </pre> -->\r\n    </div>"

/***/ }),

/***/ "./src/app/cars/car-details/car-details.component.less":
/*!*************************************************************!*\
  !*** ./src/app/cars/car-details/car-details.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cars-list,\n.data-container,\n.data-header {\n  margin-left: 200px;\n  padding-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycy9jYXItZGV0YWlscy9EOi9Qcm9qZWt0eS9Bbmd1bGFyUHJvamVjdC9zcmMvYXBwL2NhcnMvY2FyLWRldGFpbHMvY2FyLWRldGFpbHMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NhcnMvY2FyLWRldGFpbHMvY2FyLWRldGFpbHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdJLG1CQUFBO0VBQ0Esa0JBQUE7Q0NDSCIsImZpbGUiOiJzcmMvYXBwL2NhcnMvY2FyLWRldGFpbHMvY2FyLWRldGFpbHMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fycy1saXN0LFxuLmRhdGEtY29udGFpbmVyLFxuLmRhdGEtaGVhZGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59IiwiLmNhcnMtbGlzdCxcbi5kYXRhLWNvbnRhaW5lcixcbi5kYXRhLWhlYWRlciB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/cars/car-details/car-details.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/cars/car-details/car-details.component.ts ***!
  \***********************************************************/
/*! exports provided: CarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailsComponent", function() { return CarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cars.service */ "./src/app/cars/cars.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarDetailsComponent = /** @class */ (function () {
    function CarDetailsComponent(carsService, formBuilder, router, route) {
        this.carsService = carsService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
    }
    CarDetailsComponent.prototype.ngOnInit = function () {
        this.loadCar();
        this.carForm = this.buildCarForm();
    };
    CarDetailsComponent.prototype.buildCarForm = function () {
        return this.formBuilder.group({
            clientFirstName: this.car.clientFirstName,
            clientSurname: this.car.clientSurname,
            color: this.car.color,
            cost: this.car.cost,
            deadline: this.car.deadline,
            deliveryDate: this.car.deliveryDate,
            id: this.car.id,
            isFullyDamaged: this.car.isFullyDamaged,
            model: [this.car.model, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            plate: [this.car.plate, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(7)]],
            power: this.car.power,
            type: this.car.type,
            year: this.car.year,
            key: this.car.key
        });
    };
    CarDetailsComponent.prototype.updateCar = function () {
        var _this = this;
        this.carsService.updateCar(this.car.id, this.carForm.value).subscribe(function () {
            _this.router.navigate(['/cars']);
        });
    };
    CarDetailsComponent.prototype.loadCar = function () {
        this.car = this.route.snapshot.data['car'];
    };
    CarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-car-details',
            template: __webpack_require__(/*! ./car-details.component.html */ "./src/app/cars/car-details/car-details.component.html"),
            styles: [__webpack_require__(/*! ./car-details.component.less */ "./src/app/cars/car-details/car-details.component.less")]
        }),
        __metadata("design:paramtypes", [_cars_service__WEBPACK_IMPORTED_MODULE_1__["CarsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CarDetailsComponent);
    return CarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/cars/car-resolve.service.ts":
/*!*********************************************!*\
  !*** ./src/app/cars/car-resolve.service.ts ***!
  \*********************************************/
/*! exports provided: CarResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarResolve", function() { return CarResolve; });
/* harmony import */ var _cars_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cars.service */ "./src/app/cars/cars.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarResolve = /** @class */ (function () {
    function CarResolve(carsService) {
        this.carsService = carsService;
    }
    CarResolve.prototype.resolve = function (route) {
        return this.carsService.getCar(route.params['id']);
    };
    CarResolve = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_cars_service__WEBPACK_IMPORTED_MODULE_0__["CarsService"]])
    ], CarResolve);
    return CarResolve;
}());



/***/ }),

/***/ "./src/app/cars/cars-list/cars-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/cars/cars-list/cars-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cs-header>\r\n</cs-header>\r\n<cs-sidebar></cs-sidebar>\r\n<div class=\"container cars-list\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <table *ngIf=\"cars && cars.length > 0; else noCarsInfo\" class=\"cs-table table table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>car</th>\r\n            <th>plate</th>\r\n            <th>delivery date</th>\r\n            <th>deadline</th>\r\n            <th>client</th>\r\n            <th>cost</th>\r\n            <th>action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let car of cars; let i = index\" (click)=\"goToCarDetails(car)\" class=\"row-car\">\r\n            <td csImportant [ngClass]=\"{'row-error': car.isFullyDamaged}\"> {{ car?.model | uppercase }} </td>\r\n            <td> {{ car?.plate }} </td>\r\n            <td> {{ car?.deliveryDate | date:'shortDate' }} </td>\r\n            <td> {{ car?.deadline | date:'shortDate'}} </td>\r\n            <td> {{ car?.clientFirstName }} {{ car?.clientSurname | surnameShortcut}} </td>\r\n            <td csImportant> {{ car?.cost | currency:'PLN ':true }} </td>\r\n            <td (click)=\"removeCar(car, $event)\"> ( X ) </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <ng-template #noCarsInfo>\r\n        <div class=\"no-cars-info\">\r\n          <p>Currently no cars in service</p>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <button (click)=\"showGross()\" class=\"btn btn-primary btn-sm float-right\">\r\n        SHOW GROSS\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <cs-total-cost #totalCostRef [totalCost]=\"totalCost\" (shownGross)=\"onShownGross($event)\"></cs-total-cost>\r\n\r\n  <div class=\"row\" *ngIf=\"grossCost\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"total-cost\">\r\n        <p class=\"text-right\">TOTAL GROSS COST: {{ grossCost }} PLN</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"data-container\">\r\n  <p class=\"data-header\">Add a new car</p>\r\n  <form [formGroup]=\"carForm\">\r\n    <div class=\"row form-group\">\r\n      <div class=\"col-sm-4\">\r\n        <label>Model</label>\r\n        <input formControlName=\"model\" type=\"text\" class=\"form-control\" placeholder=\"model\">\r\n        <p *ngIf=\"!carForm.get('model').valid && carForm.get('model').dirty\" class=\"error\">This field is required!</p>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <label>Type</label>\r\n        <input formControlName=\"type\" type=\"text\" class=\"form-control\" placeholder=\"type\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <label>Plate</label>\r\n        <input formControlName=\"plate\" type=\"text\" class=\"form-control\" placeholder=\"plate\">\r\n        <p *ngIf=\"!carForm.get('plate').valid && carForm.get('plate').dirty\" class=\"error\">This field is required and\r\n          must contain 3-7 characters</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group\">\r\n      <div class=\"col-sm-4\">\r\n        <label>Delivery Date</label>\r\n        <input formControlName=\"deliveryDate\" type=\"text\" class=\"form-control\" placeholder=\"Delivery Date\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <label>Deadline</label>\r\n        <input formControlName=\"deadline\" type=\"text\" class=\"form-control\" placeholder=\"Deadline\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <label>Cost</label>\r\n        <input formControlName=\"cost\" type=\"text\" class=\"form-control\" placeholder=\"cost\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group\">\r\n      <div class=\"col-sm-4\">\r\n        <label>Color</label>\r\n        <input formControlName=\"color\" type=\"text\" class=\"form-control\" placeholder=\"Color\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <label>Power</label>\r\n        <input formControlName=\"power\" type=\"text\" class=\"form-control\" placeholder=\"Power\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <label>Is car fully damaged</label>\r\n        <input formControlName=\"isFullyDamaged\" type=\"checkbox\" class=\"form-control\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group\">\r\n      <div class=\"col-sm-4\">\r\n        <label>First Name</label>\r\n        <input formControlName=\"clientFirstName\" type=\"text\" class=\"form-control\" placeholder=\"First Name\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <label>Last Name</label>\r\n        <input formControlName=\"clientSurname\" type=\"text\" class=\"form-control\" placeholder=\"Last Name\">\r\n      </div>\r\n      <div>\r\n        <label>Year</label>\r\n        <input formControlName=\"year\" type=\"text\" class=\"form-control\" placeholder=\"year\">\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <button [disabled]=\"carForm.invalid\" (click)=\"addCar()\" type=\"submit\" class=\"btn btn-primary float-right\">Add\r\n          car</button>\r\n        <button (click)=\"carForm.reset()\" type=\"submit\" class=\"btn btn-default float-right\">Reset</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <!-- <pre> {{ carForm.value | json}} </pre> -->\r\n  <!-- <pre> Stan walidacji inputa model: {{ carForm.get('model').valid | json}} </pre>\r\n    <pre> Stan walidacji inputa plate: {{ carForm.get('plate').valid | json}} </pre> -->\r\n</div>"

/***/ }),

/***/ "./src/app/cars/cars-list/cars-list.component.less":
/*!*********************************************************!*\
  !*** ./src/app/cars/cars-list/cars-list.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".total-cost,\n.no-cars-info {\n  text-align: center;\n  font-size: 18px;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #1a3162;\n  padding: 20px;\n  background: #ffffff;\n}\n.row-car {\n  cursor: pointer;\n}\n.cars-list,\n.data-container,\n.data-header {\n  margin-left: 200px;\n  padding-top: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycy9jYXJzLWxpc3QvRDovUHJvamVrdHkvQW5ndWxhclByb2plY3Qvc3JjL2FwcC9jYXJzL2NhcnMtbGlzdC9jYXJzLWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NhcnMvY2Fycy1saXN0L2NhcnMtbGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7RUFFSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7Q0NBSDtBREdEO0VBQ0ksZ0JBQUE7Q0NESDtBRElEOzs7RUFHSSxtQkFBQTtFQUNBLGtCQUFBO0NDRkgiLCJmaWxlIjoic3JjL2FwcC9jYXJzL2NhcnMtbGlzdC9jYXJzLWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcyc7XG4udG90YWwtY29zdCxcbi5uby1jYXJzLWluZm8ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiBAYmx1ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IEB3aGl0ZTtcbn1cblxuLnJvdy1jYXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcnMtbGlzdCxcbi5kYXRhLWNvbnRhaW5lcixcbi5kYXRhLWhlYWRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufSIsIi50b3RhbC1jb3N0LFxuLm5vLWNhcnMtaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzFhMzE2MjtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi5yb3ctY2FyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcnMtbGlzdCxcbi5kYXRhLWNvbnRhaW5lcixcbi5kYXRhLWhlYWRlciB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/cars/cars-list/cars-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/cars/cars-list/cars-list.component.ts ***!
  \*******************************************************/
/*! exports provided: CarsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsListComponent", function() { return CarsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _total_cost_total_cost_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../total-cost/total-cost.component */ "./src/app/cars/total-cost/total-cost.component.ts");
/* harmony import */ var _cars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cars.service */ "./src/app/cars/cars.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs-compat/add/operator/map */ "./node_modules/rxjs-compat/add/operator/map.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CarsListComponent = /** @class */ (function () {
    function CarsListComponent(carsService, formBuilder, router) {
        this.carsService = carsService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    CarsListComponent.prototype.ngOnInit = function () {
        this.loadCars();
        this.carForm = this.buildCarForm();
    };
    CarsListComponent.prototype.buildCarForm = function () {
        return this.formBuilder.group({
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            type: '',
            plate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(7)]],
            deliveryDate: '',
            deadline: '',
            cost: '',
            color: '',
            power: '',
            clientFirstName: '',
            clientSurname: '',
            isFullyDamaged: '',
            year: ''
        });
    };
    CarsListComponent.prototype.loadCars = function () {
        var _this = this;
        this.carsService.getCars().subscribe(function (cars) {
            _this.cars = cars;
            _this.countTotalCost();
        });
    };
    CarsListComponent.prototype.addCar = function () {
        this.carsService.addCar(this.carForm.value);
    };
    CarsListComponent.prototype.goToCarDetails = function (car) {
        this.router.navigate(['/cars', car.key]);
    };
    CarsListComponent.prototype.removeCar = function (car, event) {
        var _this = this;
        event.stopPropagation();
        this.carsService.removeCar(car.id).subscribe(function () {
            _this.loadCars();
        });
    };
    CarsListComponent.prototype.ngAfterViewInit = function () {
    };
    CarsListComponent.prototype.showGross = function () {
        this.totalCostRef.showGross();
    };
    CarsListComponent.prototype.countTotalCost = function () {
        this.totalCost = this.cars
            .map(function (car) { return car.cost; })
            .reduce(function (prev, next) { return prev + next; });
    };
    CarsListComponent.prototype.onShownGross = function (grossCost) {
        this.grossCost = grossCost;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("totalCostRef"),
        __metadata("design:type", _total_cost_total_cost_component__WEBPACK_IMPORTED_MODULE_1__["TotalCostComponent"])
    ], CarsListComponent.prototype, "totalCostRef", void 0);
    CarsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-cars-list',
            template: __webpack_require__(/*! ./cars-list.component.html */ "./src/app/cars/cars-list/cars-list.component.html"),
            styles: [__webpack_require__(/*! ./cars-list.component.less */ "./src/app/cars/cars-list/cars-list.component.less")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_cars_service__WEBPACK_IMPORTED_MODULE_2__["CarsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CarsListComponent);
    return CarsListComponent;
}());



/***/ }),

/***/ "./src/app/cars/cars-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/cars/cars-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CarsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsRoutingModule", function() { return CarsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _car_details_car_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car-details/car-details.component */ "./src/app/cars/car-details/car-details.component.ts");
/* harmony import */ var _car_resolve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car-resolve.service */ "./src/app/cars/car-resolve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CARS_ROUTERS = [
    {
        path: 'cars/:id',
        component: _car_details_car_details_component__WEBPACK_IMPORTED_MODULE_2__["CarDetailsComponent"],
        resolve: { car: _car_resolve_service__WEBPACK_IMPORTED_MODULE_3__["CarResolve"] }
    }
];
var CarsRoutingModule = /** @class */ (function () {
    function CarsRoutingModule() {
    }
    CarsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(CARS_ROUTERS)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], CarsRoutingModule);
    return CarsRoutingModule;
}());



/***/ }),

/***/ "./src/app/cars/cars.module.ts":
/*!*************************************!*\
  !*** ./src/app/cars/cars.module.ts ***!
  \*************************************/
/*! exports provided: CarsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsModule", function() { return CarsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cars_list_cars_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cars-list/cars-list.component */ "./src/app/cars/cars-list/cars-list.component.ts");
/* harmony import */ var _total_cost_total_cost_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./total-cost/total-cost.component */ "./src/app/cars/total-cost/total-cost.component.ts");
/* harmony import */ var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared-module/shared-module */ "./src/app/shared-module/shared-module.ts");
/* harmony import */ var _car_details_car_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./car-details/car-details.component */ "./src/app/cars/car-details/car-details.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _car_resolve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./car-resolve.service */ "./src/app/cars/car-resolve.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_module_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core-module/core-module */ "./src/app/core-module/core-module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CarsModule = /** @class */ (function () {
    function CarsModule() {
    }
    CarsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _core_module_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"]
            ],
            exports: [_cars_list_cars_list_component__WEBPACK_IMPORTED_MODULE_2__["CarsListComponent"]],
            providers: [_car_resolve_service__WEBPACK_IMPORTED_MODULE_7__["CarResolve"]],
            declarations: [_cars_list_cars_list_component__WEBPACK_IMPORTED_MODULE_2__["CarsListComponent"], _total_cost_total_cost_component__WEBPACK_IMPORTED_MODULE_3__["TotalCostComponent"], _car_details_car_details_component__WEBPACK_IMPORTED_MODULE_5__["CarDetailsComponent"]]
        })
    ], CarsModule);
    return CarsModule;
}());



/***/ }),

/***/ "./src/app/cars/cars.service.ts":
/*!**************************************!*\
  !*** ./src/app/cars/cars.service.ts ***!
  \**************************************/
/*! exports provided: CarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsService", function() { return CarsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs-compat/add/operator/map */ "./node_modules/rxjs-compat/add/operator/map.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CarsService = /** @class */ (function () {
    function CarsService(db, http) {
        this.db = db;
        this.http = http;
        this.apiUrl = "/cars";
    }
    CarsService.prototype.getCars = function () {
        var _this = this;
        return this.db.list(this.apiUrl).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.map(function (car) { return _this.assignKey(car); }); }));
    };
    CarsService.prototype.getCar = function (key) {
        return this.http.get("https://angular-project-1880d.firebaseio.com/cars/" + key + "/.json")
            .map(function (res) { return res.json(); });
        // return this.db.object<Car>(`${this.apiUrl}/${key}`).snapshotChanges()
        //   .pipe(map(car => this.assignKey(car)));
    };
    CarsService.prototype.updateCar = function (id, data) {
        return this.http.put("https://angular-project-1880d.firebaseio.com/" + id, data)
            .map(function (res) { return res.json(); });
    };
    CarsService.prototype.addCar = function (car) {
        return this.db.list(this.apiUrl).push(car);
    };
    CarsService.prototype.removeCar = function (id) {
        return this.http.delete("https://angular-project-1880d.firebaseio.com/" + id)
            .map(function (res) { return res.json(); });
    };
    CarsService.prototype.assignKey = function (car) {
        return __assign({}, car.payload.val(), { key: car.key });
    };
    CarsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CarsService);
    return CarsService;
}());



/***/ }),

/***/ "./src/app/cars/total-cost/total-cost.component.html":
/*!***********************************************************!*\
  !*** ./src/app/cars/total-cost/total-cost.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"total-cost\">\n            <p class=\"text-right\">TOTAL COST: {{ totalCost }} PLN</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cars/total-cost/total-cost.component.less":
/*!***********************************************************!*\
  !*** ./src/app/cars/total-cost/total-cost.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnMvdG90YWwtY29zdC90b3RhbC1jb3N0LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/cars/total-cost/total-cost.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/cars/total-cost/total-cost.component.ts ***!
  \*********************************************************/
/*! exports provided: TotalCostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalCostComponent", function() { return TotalCostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { EventEmitter } from 'events';
var TotalCostComponent = /** @class */ (function () {
    function TotalCostComponent() {
        this.shownGross = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.VAT = 1.23;
    }
    TotalCostComponent.prototype.showGross = function () {
        this.shownGross.emit(this.totalCost * this.VAT);
    };
    TotalCostComponent.prototype.ngOnInit = function () { };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TotalCostComponent.prototype, "totalCost", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TotalCostComponent.prototype, "shownGross", void 0);
    TotalCostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-total-cost',
            template: __webpack_require__(/*! ./total-cost.component.html */ "./src/app/cars/total-cost/total-cost.component.html"),
            styles: [__webpack_require__(/*! ./total-cost.component.less */ "./src/app/cars/total-cost/total-cost.component.less")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], TotalCostComponent);
    return TotalCostComponent;
}());



/***/ }),

/***/ "./src/app/core-module/core-module.ts":
/*!********************************************!*\
  !*** ./src/app/core-module/core-module.ts ***!
  \********************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/core-module/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared-module/shared-module */ "./src/app/shared-module/shared-module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"],],
            declarations: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"],],
            imports: [
                _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core-module/dashboard/dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/core-module/dashboard/dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cs-header>\r\n</cs-header>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n       <div class=\"img\" [routerLink]=\"['/cars']\">\r\n            <div class=\"img-text text-center\">Car Service</div>\r\n            <img src=\"/angular-project/assets/images/car_service.jpg\" alt=\"car service\" class=\"img-thumbnail img-fluid rounded \">\r\n        </div>\r\n    </div>\r\n    <div class=\"col\">\r\n        <div class=\"img\" [routerLink]=\"['/flights']\">\r\n                <div class=\"img-text text-center\">Flights</div>\r\n            <img src=\"/angular-project/assets/images/flights.jpg\" alt=\" flights\" class=\"img-thumbnail img-fluid rounded \">\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/core-module/dashboard/dashboard.component.less":
/*!****************************************************************!*\
  !*** ./src/app/core-module/dashboard/dashboard.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img {\n  margin: 40px;\n  margin-top: 120px;\n  background: black;\n}\n.img .img-thumbnail {\n  width: 450px;\n  height: 200px;\n  cursor: pointer;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: opacity 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  opacity: 0.7;\n  transition: all 0.25s ease-in-out;\n}\n.img .img-thumbnail:hover {\n  border: 1px solid black;\n  opacity: 0.4;\n  transition: all 0.25s ease-in-out;\n}\n.img-text {\n  font-size: 25px;\n  font-weight: bold;\n  background: whitesmoke;\n  border: 1px solid black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS1tb2R1bGUvZGFzaGJvYXJkL0Q6L1Byb2pla3R5L0FuZ3VsYXJQcm9qZWN0L3NyYy9hcHAvY29yZS1tb2R1bGUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29yZS1tb2R1bGUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0NDQ0g7QURKRDtFQU9RLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxpRUFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7Q0NBUDtBRElEO0VBQ0ksd0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7Q0NGSDtBREtEO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7Q0NISCIsImZpbGUiOiJzcmMvYXBwL2NvcmUtbW9kdWxlL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nIHtcbiAgICBtYXJnaW46IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG5cblxuICAgIC5pbWctdGh1bWJuYWlsIHtcbiAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMsIDAuNTE1LCAwLjk1NSk7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMsIDAuNTE1LCAwLjk1NSk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xuICAgIH1cbn1cblxuLmltZyAuaW1nLXRodW1ibmFpbDpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgb3BhY2l0eTogLjQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pbWctdGV4dCB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbn0iLCIuaW1nIHtcbiAgbWFyZ2luOiA0MHB4O1xuICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG4uaW1nIC5pbWctdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMsIDAuNTE1LCAwLjk1NSk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMsIDAuNTE1LCAwLjk1NSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG4uaW1nIC5pbWctdGh1bWJuYWlsOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIG9wYWNpdHk6IDAuNDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xufVxuLmltZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/core-module/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core-module/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/core-module/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.less */ "./src/app/core-module/dashboard/dashboard.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/core-module/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/core-module/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/core-module/login/login.component.less":
/*!********************************************************!*\
  !*** ./src/app/core-module/login/login.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUtbW9kdWxlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/core-module/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/core-module/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/core-module/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/core-module/login/login.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core-module/sidebar/sidebar.component.html":
/*!************************************************************!*\
  !*** ./src/app/core-module/sidebar/sidebar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\r\n  <!-- <img class=\"logo\" src=\"../../../assets/logo.png\" alt=\"logo\"> -->\r\n  <img class=\"logo\" src=\"/angular-project/assets/logo.png\" alt=\"logo\">\r\n  <nav>\r\n    <ul>\r\n      <li [routerLink]=\"['/cars']\" [routerLinkActive]=\"'active'\">cars</li>\r\n      <li [routerLink]=\"['/cars']\" [routerLinkActive]=\"'active'\">add cars</li>\r\n      <li [routerLink]=\"['/flights']\" [routerLinkActive]=\"'active'\">flights</li>\r\n      <li>items 3</li>\r\n    </ul>\r\n  </nav>\r\n</div>"

/***/ }),

/***/ "./src/app/core-module/sidebar/sidebar.component.less":
/*!************************************************************!*\
  !*** ./src/app/core-module/sidebar/sidebar.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  width: 180px;\n  background: #1a3162;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n}\n.logo {\n  margin: 30px auto;\n  width: 120px;\n  display: block;\n}\nul {\n  list-style: none;\n  padding-left: 0;\n}\nul li {\n  text-transform: uppercase;\n  font-weight: 700;\n  cursor: pointer;\n  color: #ffffff;\n  padding: 10px;\n  border-bottom: 1px solid #ffffff;\n}\nul li:hover {\n  background: #10447d;\n  transition: linear 300ms;\n}\nul li.active {\n  background: #295089;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS1tb2R1bGUvc2lkZWJhci9EOi9Qcm9qZWt0eS9Bbmd1bGFyUHJvamVjdC9zcmMvYXBwL2NvcmUtbW9kdWxlL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29yZS1tb2R1bGUvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtDQ0RIO0FESUQ7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0NDRkg7QURLRDtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7Q0NISDtBRENEO0VBS1EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtDQ0hQO0FEUEQ7RUFhUSxvQkFBQTtFQUNBLHlCQUFBO0NDSFA7QURYRDtFQWtCUSxvQkFBQTtDQ0pQIiwiZmlsZSI6InNyYy9hcHAvY29yZS1tb2R1bGUvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbi5zaWRlYmFyIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgYmFja2dyb3VuZDogQGJsdWU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG59XG5cbi5sb2dvIHtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMDtcblxuICAgIGxpIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogQHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgQHdoaXRlO1xuICAgIH1cbiAgICBsaTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxMDQ0N2Q7XG4gICAgICAgIHRyYW5zaXRpb246IGxpbmVhciAzMDBtcztcbiAgICB9XG5cbiAgICBsaS5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiBAY3lhbjtcbiAgICB9XG5cblxufSIsIi5zaWRlYmFyIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBiYWNrZ3JvdW5kOiAjMWEzMTYyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuLmxvZ28ge1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgd2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxudWwgbGkge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcbn1cbnVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzEwNDQ3ZDtcbiAgdHJhbnNpdGlvbjogbGluZWFyIDMwMG1zO1xufVxudWwgbGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzI5NTA4OTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core-module/sidebar/sidebar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core-module/sidebar/sidebar.component.ts ***!
  \**********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/core-module/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.less */ "./src/app/core-module/sidebar/sidebar.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/flights/flight-card/flight-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/flights/flight-card/flight-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-container\">\r\n  <div class=\"shadow card-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <p class=\"origin\">{{ flight.origin }} </p>\r\n        <p class=\"destination\">{{ flight.destination }}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <p class=\"time\">{{ flight.departureTime }} - {{ flight.returnTime }}</p>\r\n      </div>\r\n    </div>\r\n      <mat-icon>airplanemode_active</mat-icon>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/flights/flight-card/flight-card.component.less":
/*!****************************************************************!*\
  !*** ./src/app/flights/flight-card/flight-card.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvZmxpZ2h0LWNhcmQvZmxpZ2h0LWNhcmQuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/flights/flight-card/flight-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/flights/flight-card/flight-card.component.ts ***!
  \**************************************************************/
/*! exports provided: FlightCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightCardComponent", function() { return FlightCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlightCardComponent = /** @class */ (function () {
    function FlightCardComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FlightCardComponent.prototype, "flight", void 0);
    FlightCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-flight-card',
            template: __webpack_require__(/*! ./flight-card.component.html */ "./src/app/flights/flight-card/flight-card.component.html"),
            styles: [__webpack_require__(/*! ./flight-card.component.less */ "./src/app/flights/flight-card/flight-card.component.less")]
        })
    ], FlightCardComponent);
    return FlightCardComponent;
}());



/***/ }),

/***/ "./src/app/flights/flights.component.html":
/*!************************************************!*\
  !*** ./src/app/flights/flights.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cs-header>\r\n</cs-header>\r\n\r\n<div class=\"row flight-container\">\r\n  <div class=\"col-sm-4\" *ngFor=\"let flight of flights$ | async\">\r\n    <cs-flight-card [flight]=\"flight\"></cs-flight-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/flights/flights.component.less":
/*!************************************************!*\
  !*** ./src/app/flights/flights.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvZmxpZ2h0cy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/flights/flights.component.ts":
/*!**********************************************!*\
  !*** ./src/app/flights/flights.component.ts ***!
  \**********************************************/
/*! exports provided: FlightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightsComponent", function() { return FlightsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _flights_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flights.service */ "./src/app/flights/flights.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlightsComponent = /** @class */ (function () {
    function FlightsComponent(flightsService) {
        this.flightsService = flightsService;
        this.flights$ = this.flightsService.getFlights();
    }
    FlightsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-flights',
            template: __webpack_require__(/*! ./flights.component.html */ "./src/app/flights/flights.component.html"),
            styles: [__webpack_require__(/*! ./flights.component.less */ "./src/app/flights/flights.component.less")]
        }),
        __metadata("design:paramtypes", [_flights_service__WEBPACK_IMPORTED_MODULE_1__["FlightsService"]])
    ], FlightsComponent);
    return FlightsComponent;
}());



/***/ }),

/***/ "./src/app/flights/flights.module.ts":
/*!*******************************************!*\
  !*** ./src/app/flights/flights.module.ts ***!
  \*******************************************/
/*! exports provided: FlightsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightsModule", function() { return FlightsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _flight_card_flight_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flight-card/flight-card.component */ "./src/app/flights/flight-card/flight-card.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _flights_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flights.component */ "./src/app/flights/flights.component.ts");
/* harmony import */ var _core_module_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core-module/core-module */ "./src/app/core-module/core-module.ts");
/* harmony import */ var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared-module/shared-module */ "./src/app/shared-module/shared-module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FlightsModule = /** @class */ (function () {
    function FlightsModule() {
    }
    FlightsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_flights_component__WEBPACK_IMPORTED_MODULE_4__["FlightsComponent"], _flight_card_flight_card_component__WEBPACK_IMPORTED_MODULE_2__["FlightCardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]
            ],
            exports: [_flights_component__WEBPACK_IMPORTED_MODULE_4__["FlightsComponent"], _flight_card_flight_card_component__WEBPACK_IMPORTED_MODULE_2__["FlightCardComponent"]]
        })
    ], FlightsModule);
    return FlightsModule;
}());



/***/ }),

/***/ "./src/app/flights/flights.service.ts":
/*!********************************************!*\
  !*** ./src/app/flights/flights.service.ts ***!
  \********************************************/
/*! exports provided: FlightsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightsService", function() { return FlightsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlightsService = /** @class */ (function () {
    function FlightsService(db) {
        this.db = db;
        this.API_URL = '/flights';
    }
    FlightsService.prototype.getFlights = function () {
        var _this = this;
        return this.db.list(this.API_URL).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.map(function (flight) { return _this.assignKey(flight); }); }));
    };
    FlightsService.prototype.assignKey = function (flight) {
        return __assign({}, flight.payload.val(), { key: flight.key });
    };
    FlightsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], FlightsService);
    return FlightsService;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MATERIAL_MODULES = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            exports: MATERIAL_MODULES.slice()
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared-module/directives/important.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared-module/directives/important.directive.ts ***!
  \*****************************************************************/
/*! exports provided: ImportantDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportantDirective", function() { return ImportantDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImportantDirective = /** @class */ (function () {
    function ImportantDirective(el) {
        this.el = el;
        el.nativeElement.style.fontWeight = 700;
        el.nativeElement.style.color = "#295089";
    }
    ImportantDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[csImportant]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ImportantDirective);
    return ImportantDirective;
}());



/***/ }),

/***/ "./src/app/shared-module/header/header.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared-module/header/header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <div class=\"container\">\r\n        <mat-icon class=\"logout-icon float-right\">power_settings_new</mat-icon>\r\n        <mat-icon class=\"home-icon float-right\" routerLink=\"/dashboard\">home</mat-icon>\r\n        <span class=\"user-login float-right\">Hello, John</span>\r\n    </div>\r\n</mat-toolbar>\r\n<div class=\"container\">\r\n        <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/shared-module/header/header.component.less":
/*!************************************************************!*\
  !*** ./src/app/shared-module/header/header.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background: #ffffff;\n  padding: 15px;\n  margin-bottom: 15px;\n}\n.header .levels {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a3162;\n  text-transform: uppercase;\n}\n.logout-icon {\n  font-size: 35px;\n  cursor: pointer;\n  padding: 4px;\n}\n.home-icon {\n  font-size: 35px;\n  color: white;\n  cursor: pointer;\n  padding: 4px;\n  margin-right: 15px;\n}\n.user-login {\n  font-size: 15px;\n  padding: 4px;\n  padding-right: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLW1vZHVsZS9oZWFkZXIvRDovUHJvamVrdHkvQW5ndWxhclByb2plY3Qvc3JjL2FwcC9zaGFyZWQtbW9kdWxlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3NoYXJlZC1tb2R1bGUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0NDREg7QURGRDtFQU1RLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7Q0NEUDtBREtEO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7Q0NISDtBRE1EO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7Q0NKSDtBRE9EO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7Q0NMSCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1tb2R1bGUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBAd2hpdGU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgLmxldmVscyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6IEBibHVlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbn1cblxuLmxvZ291dC1pY29uIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDRweDtcbn1cblxuLmhvbWUtaWNvbiB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnVzZXItbG9naW4ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuIiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uaGVhZGVyIC5sZXZlbHMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMWEzMTYyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmxvZ291dC1pY29uIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDRweDtcbn1cbi5ob21lLWljb24ge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi51c2VyLWxvZ2luIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared-module/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared-module/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared-module/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.less */ "./src/app/shared-module/header/header.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared-module/pipes/surname-shortcut.pipe.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared-module/pipes/surname-shortcut.pipe.ts ***!
  \**************************************************************/
/*! exports provided: SurnameShortcutPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurnameShortcutPipe", function() { return SurnameShortcutPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SurnameShortcutPipe = /** @class */ (function () {
    function SurnameShortcutPipe() {
    }
    SurnameShortcutPipe.prototype.transform = function (value) {
        if (!value) {
            return '';
        }
        return value.charAt(0) + '.';
    };
    SurnameShortcutPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'surnameShortcut'
        })
    ], SurnameShortcutPipe);
    return SurnameShortcutPipe;
}());



/***/ }),

/***/ "./src/app/shared-module/shared-module.ts":
/*!************************************************!*\
  !*** ./src/app/shared-module/shared-module.ts ***!
  \************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared-module/header/header.component.ts");
/* harmony import */ var _pipes_surname_shortcut_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/surname-shortcut.pipe */ "./src/app/shared-module/pipes/surname-shortcut.pipe.ts");
/* harmony import */ var _directives_important_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/important.directive */ "./src/app/shared-module/directives/important.directive.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _pipes_surname_shortcut_pipe__WEBPACK_IMPORTED_MODULE_3__["SurnameShortcutPipe"], _directives_important_directive__WEBPACK_IMPORTED_MODULE_4__["ImportantDirective"]],
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _pipes_surname_shortcut_pipe__WEBPACK_IMPORTED_MODULE_3__["SurnameShortcutPipe"], _directives_important_directive__WEBPACK_IMPORTED_MODULE_4__["ImportantDirective"]],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBWKQFyAWcX8-n6yC68TYx-JEoDwwUnh6c',
        authDomain: 'angular-project-1880d.firebaseapp.com',
        databaseURL: 'https://angular-project-1880d.firebaseio.com',
        projectId: 'angular-project-1880d',
        storageBucket: 'angular-project-1880d.appspot.com',
        messagingSenderId: '422831307765'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projekty\AngularProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map