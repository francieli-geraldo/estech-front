(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-contratos-contratos-module"], {
    /***/
    "Av/U":
    /*!***********************************************!*\
      !*** ./src/app/services/pacientes.service.ts ***!
      \***********************************************/

    /*! exports provided: PacientesService */

    /***/
    function AvU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PacientesService", function () {
        return PacientesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_metronic/shared/crud-table */
      "Br0f");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var PacientesService = /*#__PURE__*/function (_metronic_shared_crud) {
        _inherits(PacientesService, _metronic_shared_crud);

        var _super = _createSuper(PacientesService);

        function PacientesService(http) {
          var _this;

          _classCallCheck(this, PacientesService);

          _this = _super.call(this, http);
          _this.API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/patients");
          return _this;
        } // READ


        _createClass(PacientesService, [{
          key: "find",
          value: function find(params) {
            return this.http.get(this.API_URL, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
              var data = _ref.data,
                  meta = _ref.meta;

              var _a;

              return {
                items: data || [],
                total: ((_a = meta === null || meta === void 0 ? void 0 : meta.page) === null || _a === void 0 ? void 0 : _a.elements) || 0
              };
            }));
          }
        }, {
          key: "findByDescriptionPaciente",
          value: function findByDescriptionPaciente(search) {
            return this.http.get("".concat(this.API_URL, "/summaries?search=").concat(search)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref2) {
              var data = _ref2.data;
              return data || [];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              return [];
            }));
          }
        }, {
          key: "getById",
          value: function getById(id) {
            return this.http.get("".concat(this.API_URL, "/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref3) {
              var data = _ref3.data;
              return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
            }));
          }
        }, {
          key: "deleteItems",
          value: function deleteItems() {
            var _this2 = this;

            var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var tasks$ = [];
            ids.forEach(function (id) {
              tasks$.push(_this2["delete"](id));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(tasks$);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (sb) {
              return sb.unsubscribe();
            });
          }
        }]);

        return PacientesService;
      }(_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["TableService"]);

      PacientesService.ɵfac = function PacientesService_Factory(t) {
        return new (t || PacientesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      PacientesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PacientesService,
        factory: PacientesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PacientesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "dtOv":
    /*!********************************************!*\
      !*** ./src/app/services/grupos.service.ts ***!
      \********************************************/

    /*! exports provided: GruposService */

    /***/
    function dtOv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GruposService", function () {
        return GruposService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_metronic/shared/crud-table */
      "Br0f");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var GruposService = /*#__PURE__*/function (_metronic_shared_crud2) {
        _inherits(GruposService, _metronic_shared_crud2);

        var _super2 = _createSuper(GruposService);

        function GruposService(http) {
          var _this3;

          _classCallCheck(this, GruposService);

          _this3 = _super2.call(this, http);
          _this3.API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/groups");
          return _this3;
        }

        _createClass(GruposService, [{
          key: "find",
          value: function find(params) {
            return this.http.get(this.API_URL, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref4) {
              var data = _ref4.data,
                  meta = _ref4.meta;

              var _a;

              return {
                items: data || [],
                total: ((_a = meta === null || meta === void 0 ? void 0 : meta.page) === null || _a === void 0 ? void 0 : _a.elements) || 0
              };
            }));
          }
        }, {
          key: "deleteItems",
          value: function deleteItems() {
            var _this4 = this;

            var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var tasks$ = [];
            ids.forEach(function (id) {
              tasks$.push(_this4["delete"](id));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(tasks$);
          }
        }, {
          key: "cancelContrato",
          value: function cancelContrato(id) {
            return this.http.get(this.API_URL).pipe();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (sb) {
              return sb.unsubscribe();
            });
          }
        }]);

        return GruposService;
      }(_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["TableService"]);

      GruposService.ɵfac = function GruposService_Factory(t) {
        return new (t || GruposService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      GruposService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GruposService,
        factory: GruposService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GruposService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-contratos-contratos-module-es5.js.map