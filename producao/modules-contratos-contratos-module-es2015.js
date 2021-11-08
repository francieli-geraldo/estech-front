(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-contratos-contratos-module"],{

/***/ "Av/U":
/*!***********************************************!*\
  !*** ./src/app/services/pacientes.service.ts ***!
  \***********************************************/
/*! exports provided: PacientesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacientesService", function() { return PacientesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_metronic/shared/crud-table */ "Br0f");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");







class PacientesService extends _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["TableService"] {
    constructor(http) {
        super(http);
        this.API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/patients`;
    }
    // READ
    find(params) {
        return this.http.get(this.API_URL, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ data, meta }) => {
            var _a;
            return {
                items: data || [],
                total: ((_a = meta === null || meta === void 0 ? void 0 : meta.page) === null || _a === void 0 ? void 0 : _a.elements) || 0
            };
        }));
    }
    findByDescriptionPaciente(search) {
        return this.http.get(`${this.API_URL}/summaries?search=${search}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ data }) => {
            return data || [];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return [];
        }));
    }
    getById(id) {
        return this.http.get(`${this.API_URL}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ data }) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        }));
    }
    deleteItems(ids = []) {
        const tasks$ = [];
        ids.forEach(id => {
            tasks$.push(this.delete(id));
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(tasks$);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
PacientesService.ɵfac = function PacientesService_Factory(t) { return new (t || PacientesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PacientesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PacientesService, factory: PacientesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PacientesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }] }]; }, null); })();


/***/ }),

/***/ "dtOv":
/*!********************************************!*\
  !*** ./src/app/services/grupos.service.ts ***!
  \********************************************/
/*! exports provided: GruposService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposService", function() { return GruposService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_metronic/shared/crud-table */ "Br0f");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");







class GruposService extends _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["TableService"] {
    constructor(http) {
        super(http);
        this.API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/groups`;
    }
    find(params) {
        return this.http.get(this.API_URL, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ data, meta }) => {
            var _a;
            return {
                items: data || [],
                total: ((_a = meta === null || meta === void 0 ? void 0 : meta.page) === null || _a === void 0 ? void 0 : _a.elements) || 0
            };
        }));
    }
    deleteItems(ids = []) {
        const tasks$ = [];
        ids.forEach(id => {
            tasks$.push(this.delete(id));
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(tasks$);
    }
    cancelContrato(id) {
        return this.http.get(this.API_URL).pipe();
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
GruposService.ɵfac = function GruposService_Factory(t) { return new (t || GruposService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GruposService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GruposService, factory: GruposService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GruposService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-contratos-contratos-module-es2015.js.map