(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-relatorios-relatorios-module"], {
    /***/
    "A/no":
    /*!*********************************************************!*\
      !*** ./src/app/modules/relatorios/relatorios.module.ts ***!
      \*********************************************************/

    /*! exports provided: RelatoriosModule */

    /***/
    function ANo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelatoriosModule", function () {
        return RelatoriosModule;
      });
      /* harmony import */


      var _metronic_core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../_metronic/core/core.module */
      "zfYk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _relatorios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./relatorios.component */
      "MuiM");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./relatorios-routing.module */
      "DSsN");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-inline-svg */
      "e8Ap");
      /* harmony import */


      var src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_metronic/shared/crud-table */
      "Br0f");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _relatorio_semanal_relatorio_semanal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./relatorio-semanal/relatorio-semanal.component */
      "oIpe");
      /* harmony import */


      var _relatorio_evolucao_relatorio_evolucao_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./relatorio-evolucao/relatorio-evolucao.component */
      "ZDKQ");
      /* harmony import */


      var _relatorio_concluido_relatorio_concluido_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./relatorio-concluido/relatorio-concluido.component */
      "vGFm");
      /* harmony import */


      var ngx_export_as__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-export-as */
      "i4u0");
      /* harmony import */


      var src_app_metronic_shared_inputs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/_metronic/shared/inputs */
      "7vmz");

      var RelatoriosModule = function RelatoriosModule() {
        _classCallCheck(this, RelatoriosModule);
      };

      RelatoriosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: RelatoriosModule
      });
      RelatoriosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function RelatoriosModule_Factory(t) {
          return new (t || RelatoriosModule)();
        },
        imports: [[_metronic_core_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_metronic_shared_inputs__WEBPACK_IMPORTED_MODULE_14__["InputsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_6__["RelatoriosRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"], src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_8__["CRUDTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"], ngx_export_as__WEBPACK_IMPORTED_MODULE_13__["ExportAsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTypeaheadModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RelatoriosModule, {
          declarations: [_relatorios_component__WEBPACK_IMPORTED_MODULE_3__["RelatoriosComponent"], _relatorio_semanal_relatorio_semanal_component__WEBPACK_IMPORTED_MODULE_10__["RelatorioSemanalComponent"], _relatorio_evolucao_relatorio_evolucao_component__WEBPACK_IMPORTED_MODULE_11__["RelatorioEvolucaoComponent"], _relatorio_concluido_relatorio_concluido_component__WEBPACK_IMPORTED_MODULE_12__["RelatorioConcluidoComponent"]],
          imports: [_metronic_core_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_metronic_shared_inputs__WEBPACK_IMPORTED_MODULE_14__["InputsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_6__["RelatoriosRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"], src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_8__["CRUDTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"], ngx_export_as__WEBPACK_IMPORTED_MODULE_13__["ExportAsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTypeaheadModule"]],
          exports: [_relatorios_component__WEBPACK_IMPORTED_MODULE_3__["RelatoriosComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RelatoriosModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: [_relatorios_component__WEBPACK_IMPORTED_MODULE_3__["RelatoriosComponent"]],
            declarations: [_relatorios_component__WEBPACK_IMPORTED_MODULE_3__["RelatoriosComponent"], _relatorio_semanal_relatorio_semanal_component__WEBPACK_IMPORTED_MODULE_10__["RelatorioSemanalComponent"], _relatorio_evolucao_relatorio_evolucao_component__WEBPACK_IMPORTED_MODULE_11__["RelatorioEvolucaoComponent"], _relatorio_concluido_relatorio_concluido_component__WEBPACK_IMPORTED_MODULE_12__["RelatorioConcluidoComponent"]],
            imports: [_metronic_core_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_metronic_shared_inputs__WEBPACK_IMPORTED_MODULE_14__["InputsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_6__["RelatoriosRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"], src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_8__["CRUDTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"], ngx_export_as__WEBPACK_IMPORTED_MODULE_13__["ExportAsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTypeaheadModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "DSsN":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/relatorios/relatorios-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: RelatoriosRoutingModule */

    /***/
    function DSsN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelatoriosRoutingModule", function () {
        return RelatoriosRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _relatorios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./relatorios.component */
      "MuiM");

      var routes = [{
        path: '',
        component: _relatorios_component__WEBPACK_IMPORTED_MODULE_2__["RelatoriosComponent"]
      }, {
        path: '',
        redirectTo: 'contratos',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: 'contratos',
        pathMatch: 'full'
      }];

      var RelatoriosRoutingModule = function RelatoriosRoutingModule() {
        _classCallCheck(this, RelatoriosRoutingModule);
      };

      RelatoriosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RelatoriosRoutingModule
      });
      RelatoriosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function RelatoriosRoutingModule_Factory(t) {
          return new (t || RelatoriosRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RelatoriosRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatoriosRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "KY19":
    /*!*********************************************!*\
      !*** ./src/app/services/reports.service.ts ***!
      \*********************************************/

    /*! exports provided: ReportsService */

    /***/
    function KY19(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsService", function () {
        return ReportsService;
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

      var ReportsService = /*#__PURE__*/function (_metronic_shared_crud) {
        _inherits(ReportsService, _metronic_shared_crud);

        var _super = _createSuper(ReportsService);

        function ReportsService(http) {
          var _this;

          _classCallCheck(this, ReportsService);

          _this = _super.call(this, http);
          _this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          _this.API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/reports");
          return _this;
        }

        _createClass(ReportsService, [{
          key: "getReport",
          value: function getReport(_ref) {
            var _this2 = this;

            var report = _ref.report,
                params = _ref.params;
            params.page = '0';
            params.size = '9999';
            this.loading.next(false);
            return this.http.get("".concat(this.API_URL, "/").concat(report), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response['data'];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              return _this2.loading.next(false);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (sb) {
              return sb.unsubscribe();
            });
          }
        }]);

        return ReportsService;
      }(_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["TableService"]);

      ReportsService.ɵfac = function ReportsService_Factory(t) {
        return new (t || ReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ReportsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ReportsService,
        factory: ReportsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsService, [{
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
    "MuiM":
    /*!************************************************************!*\
      !*** ./src/app/modules/relatorios/relatorios.component.ts ***!
      \************************************************************/

    /*! exports provided: RelatoriosComponent */

    /***/
    function MuiM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelatoriosComponent", function () {
        return RelatoriosComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _relatorio_semanal_relatorio_semanal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./relatorio-semanal/relatorio-semanal.component */
      "oIpe");
      /* harmony import */


      var _relatorio_evolucao_relatorio_evolucao_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./relatorio-evolucao/relatorio-evolucao.component */
      "ZDKQ");
      /* harmony import */


      var _relatorio_concluido_relatorio_concluido_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./relatorio-concluido/relatorio-concluido.component */
      "vGFm");
      /* harmony import */


      var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-export-as */
      "i4u0");
      /* harmony import */


      var src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/reports.service */
      "KY19");
      /* harmony import */


      var src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/grupos.service */
      "dtOv");
      /* harmony import */


      var src_app_services_pacientes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/pacientes.service */
      "Av/U");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _metronic_shared_inputs_date_period_Input_date_period_Input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../_metronic/shared/inputs/date-period-Input/date-period-Input.component */
      "C6v+");

      var _c0 = ["showReport"];

      function RelatoriosComponent_ng_container_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Per\xEDodo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "date-period-input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputMaxDate", ctx_r0.maxDate)("fcInitialDate", "initialDate")("fcFinalDate", "finalDate")("formGroupBase", ctx_r0.reportForm);
        }
      }

      function RelatoriosComponent_option_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var grupo_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", grupo_r4.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", grupo_r4.name, " ");
        }
      }

      function RelatoriosComponent_ng_container_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Situa\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Selecione");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Todos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ativo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancelado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Conclu\xEDdo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      var RelatoriosComponent = /*#__PURE__*/function () {
        function RelatoriosComponent(fb, exportAsService, reportsService, grupoService, pacienteService, resolver) {
          var _this3 = this;

          _classCallCheck(this, RelatoriosComponent);

          this.fb = fb;
          this.exportAsService = exportAsService;
          this.reportsService = reportsService;
          this.grupoService = grupoService;
          this.pacienteService = pacienteService;
          this.resolver = resolver;
          this.model = {
            id: undefined,
            report: "periodic-reports",
            status: "ACTIVE",
            groupId: "",
            initialDate: "",
            finalDate: "",
            patientId: ""
          };
          this.config = {
            type: 'pdf',
            elementIdOrContent: 'tablerelatorio',
            options: {
              jsPDF: {
                orientation: 'landscape',
                margins: {
                  top: '20',
                  left: '20',
                  right: '20'
                }
              }
            }
          };
          this.maxDate = new Date();
          this.isDisabled = true;
          this.isShowReport = false;

          this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (val) {
              return _this3.pacienteService.findByDescriptionPaciente(val);
            }));
          };
        }

        _createClass(RelatoriosComponent, [{
          key: "generateReport",
          value: function generateReport() {
            this.generateRelatorio = this.reportForm.value.report;
            this.isShowReport = true;
            this.container.clear();
            var childComponent;

            if (this.generateRelatorio == 'periodic-reports') {
              childComponent = this.resolver.resolveComponentFactory(_relatorio_semanal_relatorio_semanal_component__WEBPACK_IMPORTED_MODULE_3__["RelatorioSemanalComponent"]);
            }

            if (this.generateRelatorio == 'full-report') {
              childComponent = this.resolver.resolveComponentFactory(_relatorio_evolucao_relatorio_evolucao_component__WEBPACK_IMPORTED_MODULE_4__["RelatorioEvolucaoComponent"]);
            }

            if (this.generateRelatorio == 'completed-report') {
              childComponent = this.resolver.resolveComponentFactory(_relatorio_concluido_relatorio_concluido_component__WEBPACK_IMPORTED_MODULE_5__["RelatorioConcluidoComponent"]);
            }

            this.componentRef = this.container.createComponent(childComponent);
            this.componentRef.instance.form = {
              finalDate: this.reportForm.value.finalDate,
              initialDate: this.reportForm.value.initialDate,
              groupId: this.reportForm.value.groupId,
              report: this.reportForm.value.report,
              status: this.reportForm.value.status,
              patientId: this.reportForm.value.patientId.id
            };
            this.componentRef.instance.output.subscribe(function (event) {
              return console.log(event);
            });
          }
        }, {
          key: "destroyReport",
          value: function destroyReport() {
            this.container.clear();
            this.isShowReport = false;
          }
        }, {
          key: "exportAs",
          value: function exportAs(type, opt) {
            this.config.type = type;

            if (opt) {
              this.config.options.jsPDF.orientation = opt;
            }

            this.exportAsService.save(this.config, "rel-".concat(this.model.report, "-").concat(new Date().toLocaleString().replace(/[^a-z0-9]/gi, ''))).subscribe(function () {});
          }
        }, {
          key: "pdfCallbackFn",
          value: function pdfCallbackFn(pdf) {
            var noOfPages = pdf.internal.getNumberOfPages();

            for (var i = 1; i <= noOfPages; i++) {
              pdf.setPage(i);
              pdf.text("Afina-se p\xE1gina ".concat(i, " de ").concat(noOfPages), pdf.internal.pageSize.getWidth() - 40, pdf.internal.pageSize.getHeight() - 2);
            }
          }
        }, {
          key: "loadForm",
          value: function loadForm() {
            var _this4 = this;

            this.reportForm = this.fb.group({
              report: [this.model.report, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
              status: [this.model.status, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
              groupId: [this.model.groupId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
              initialDate: [this.model.initialDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
              finalDate: [this.model.finalDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
              patientId: [this.model.patientId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]
            });
            this.reportForm.controls['report'].valueChanges.subscribe(function (value) {
              if (value == 'periodic-reports') {
                _this4.reportForm.get('initialDate').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);

                _this4.reportForm.get('finalDate').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);

                _this4.reportForm.get('status').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
              } else if (value == 'completed-report') {
                _this4.reportForm.get('status').clearValidators();

                _this4.reportForm.get('initialDate').clearValidators();

                _this4.reportForm.get('finalDate').clearValidators();
              } else {
                _this4.reportForm.get('status').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);

                _this4.reportForm.get('initialDate').clearValidators();

                _this4.reportForm.get('finalDate').clearValidators();
              }

              _this4.grupoService.items$.subscribe(function (val) {
                var _a;

                _this4.reportForm.patchValue({
                  groupId: (_a = val[0]) === null || _a === void 0 ? void 0 : _a.id,
                  initialDate: '',
                  finalDate: '',
                  status: 'ACTIVE'
                });
              });

              _this4.isDisabled = _this4.reportForm.invalid;
              ;
            });
            this.reportForm.controls['status'].valueChanges.subscribe(function (value) {
              _this4.reportForm.updateValueAndValidity();

              _this4.isDisabled = _this4.reportForm.invalid;
            });
            this.reportForm.controls['groupId'].valueChanges.subscribe(function (value) {
              _this4.reportForm.updateValueAndValidity();

              _this4.isDisabled = _this4.reportForm.invalid;
            });
            this.reportForm.controls['initialDate'].valueChanges.subscribe(function (value) {
              _this4.reportForm.updateValueAndValidity();

              _this4.isDisabled = _this4.reportForm.invalid;
            });
            this.reportForm.controls['finalDate'].valueChanges.subscribe(function (value) {
              _this4.reportForm.updateValueAndValidity();

              _this4.isDisabled = _this4.reportForm.invalid;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.grupoService.fetch();
            this.listGrupos$ = this.grupoService.findParams({
              params: {
                page: '0',
                size: '9999'
              }
            });
            this.loadForm();
            this.grupoService.items$.subscribe(function (val) {
              var _a;

              _this5.reportForm.patchValue({
                groupId: (_a = val[0]) === null || _a === void 0 ? void 0 : _a.id,
                initialDate: '',
                finalDate: '',
                status: 'ACTIVE'
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            (_a = this.componentRef) === null || _a === void 0 ? void 0 : _a.destroy();
          }
        }, {
          key: "resultFormatBandListValue",
          value: function resultFormatBandListValue(value) {
            return "".concat(value === null || value === void 0 ? void 0 : value.name, " - ").concat((value === null || value === void 0 ? void 0 : value.phone) || '*');
          }
        }, {
          key: "inputFormatBandListValue",
          value: function inputFormatBandListValue(value) {
            if (value) {
              return "".concat(value === null || value === void 0 ? void 0 : value.name, " - ").concat((value === null || value === void 0 ? void 0 : value.phone) || '*');
            } else {
              return '';
            }
          }
        }]);

        return RelatoriosComponent;
      }();

      RelatoriosComponent.ɵfac = function RelatoriosComponent_Factory(t) {
        return new (t || RelatoriosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_7__["ReportsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_8__["GruposService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pacientes_service__WEBPACK_IMPORTED_MODULE_9__["PacientesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
      };

      RelatoriosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RelatoriosComponent,
        selectors: [["app-relatorios"]],
        viewQuery: function RelatoriosComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
          }
        },
        decls: 84,
        vars: 20,
        consts: [[1, "card", "card-custom", "gutter-b"], [1, "card-body"], [1, "row", "justify-content-center", "py-6", "px-4", "py-lg-6", "px-lg-5"], [1, "col-xl-12"], [1, "d-flex", "justify-content-between", "border-bottom", "pb-5"], [1, "mr-2"], [1, "btn", "btn-light-primary", "font-weight-bold", "text-uppercase", "px-9", "py-4", 3, "hidden", "click"], [1, "btn", "btn-success", "font-weight-bold", "text-uppercase", "px-9", "py-4", 3, "hidden", "disabled", "click"], ["ngbDropdown", "", 3, "hidden"], ["id", "dropdownExport", "ngbDropdownToggle", "", 1, "btn", "btn-success", "font-weight-bold", "text-uppercase", "px-9", "py-4"], [1, "ki", "ki-arrow-down", "pl-2", 2, "font-size", ".8em"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownExport", 1, "px-9", "py-4", "font-weight-bold"], [1, "dropdown-item", 3, "click"], ["id", "kt_form", 1, "form", 3, "formGroup"], [1, "pb-5"], [3, "hidden"], [1, "form-group", "m-0"], [1, "row", "pt-6"], [1, "col-lg-4"], [1, "option"], [1, "option-control"], [1, "radio"], ["type", "radio", "value", "periodic-reports", "formControlName", "report"], [1, "option-label", 2, "cursor", "pointer"], [1, "option-head"], [1, "option-title"], [1, "option-body"], ["type", "radio", "value", "full-report", "formControlName", "report"], ["type", "radio", "value", "completed-report", "formControlName", "report"], [1, "separator", "separator-dashed", "my-8"], [1, "h5"], [1, "fa", "fa-filter", 2, "color", "black", "font-weight", "600"], [1, "row"], [4, "ngIf"], [1, "form-text", "text-muted"], ["name", "groupId", "autocomplete", "off", "formControlName", "groupId", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Pesquisar", "formControlName", "patientId", 1, "form-control", 3, "ngbTypeahead", "resultFormatter", "inputFormatter"], ["showReport", ""], [3, "inputMaxDate", "fcInitialDate", "fcFinalDate", "formGroupBase"], [3, "value"], ["name", "status", "placeholder", "Selecione", "autocomplete", "off", "formControlName", "status", 1, "form-control"], ["value", "", "disabled", "", "selected", ""], ["value", "ALL"], ["value", "ACTIVE"], ["value", "CANCELED"], ["value", "COMPLETED"]],
        template: function RelatoriosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RelatoriosComponent_Template_div_click_6_listener() {
              return ctx.destroyReport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Voltar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RelatoriosComponent_Template_button_click_9_listener() {
              return ctx.generateReport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Gerar Relat\xF3rio ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Exportar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RelatoriosComponent_Template_button_click_16_listener() {
              return ctx.exportAs("pdf", "landscape");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "PDF");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RelatoriosComponent_Template_button_click_18_listener() {
              return ctx.exportAs("png");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Imagem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Peri\xF3dico ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Relat\xF3rio peri\xF3dico dos lan\xE7amentos realizados. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Evolu\xE7\xE3o total ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Relat\xF3rio com valores percentuaias de lan\xE7ametos e evolu\xE7\xE3o dos pacientes no programa. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Conclu\xEDdos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Relat\xF3rio com valores totais e percentuaias de lan\xE7amentos e resultado alcan\xE7ado pelos pacientes. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Filtros ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, RelatoriosComponent_ng_container_68_Template, 6, 4, "ng-container", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Grupo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "select", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, RelatoriosComponent_option_74_Template, 2, 2, "option", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, RelatoriosComponent_ng_container_76_Template, 16, 0, "ng-container", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Paciente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "template", null, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isShowReport);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isShowReport)("disabled", ctx.isDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isShowReport);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reportForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isShowReport);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reportForm.value.report == "periodic-reports");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 18, ctx.listGrupos$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reportForm.value.report == "periodic-reports" || ctx.reportForm.value.report == "full-report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("col-lg-12", ctx.reportForm.value.report == "periodic-reports")("col-lg-8", ctx.reportForm.value.report == "completed-report")("col-lg-4", ctx.reportForm.value.report == "full-report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTypeahead", ctx.search)("resultFormatter", ctx.resultFormatBandListValue)("inputFormatter", ctx.inputFormatBandListValue);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownMenu"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTypeahead"], _metronic_shared_inputs_date_period_Input_date_period_Input_component__WEBPACK_IMPORTED_MODULE_12__["DatePeriodInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]],
        styles: [".wizard.wizard-3[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n.wizard.wizard-3[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex-grow: 1;\n  margin-right: 1rem;\n}\n.wizard.wizard-3[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.wizard.wizard-3[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  color: #B5B5C3;\n  padding: 2rem 0.5rem;\n}\n.wizard.wizard-3[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  flex-wrap: wrap;\n}\n.wizard.wizard-3[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-right: 0.5rem;\n}\n.wizard.wizard-3[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 100%;\n  background-color: #EBEDF3;\n  position: relative;\n}\n.wizard.wizard-3[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-bar[_ngcontent-%COMP%]:after {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  width: 0;\n  background-color: transparent;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-3[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%] {\n  color: #6993FF;\n}\n.wizard.wizard-3[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-bar[_ngcontent-%COMP%]:after {\n  width: 100%;\n  background-color: #6993FF;\n}\n@media (max-width: 991.98px) {\n  .wizard.wizard-3[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .wizard.wizard-3[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    position: relative;\n    width: 100%;\n  }\n  .wizard.wizard-3[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    flex: 0 0 100%;\n    padding: 1rem 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXHBhZ2VzXFx3aXphcmRcXHdpemFyZC0zLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxccmVsYXRvcmlvcy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXGNvbXBvbmVudHNcXF92YXJpYWJsZXMuYm9vdHN0cmFwLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzYXNzXFxjb21wb25lbnRzXFxfdmFyaWFibGVzLmRlbW8uc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUU7RUFDQyxhQUFBO0VBQ0EscUJBQUE7QUNaSDtBRGVHO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDYko7QURlSTtFQUNDLGVBQUE7QUNiTDtBRGdCSTtFQUNDLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjRWRpQjtFRmVqQixvQkFBQTtBQ2RMO0FEZ0JLO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ2ROO0FEZ0JNO0VBQ0MsZUFBQTtFQUNBLG9CQUFBO0FDZFA7QURrQks7RUFDQyxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCRW5DZ0I7RUZvQ2hCLGtCQUFBO0FDaEJOO0FEa0JNO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EseUdFNlg2QztBRDdZcEQ7QURzQks7RUFDQyxjR2pFbUI7QUY2Q3pCO0FEdUJPO0VBQ0MsV0FBQTtFQUNBLHlCR3RFaUI7QUZpRHpCO0FHbUJJO0VKaUJEO0lBQ0Msc0JBQUE7SUFDQSx1QkFBQTtFQ2hDRjtFRGtDRTtJQUNDLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUNoQ0g7RURrQ0c7SUFDQywyQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VDaENKO0FBQ0YiLCJmaWxlIjoicmVsYXRvcmlvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXHJcbi8vIFdpemFyZCAzXHJcbi8vIFBhZ2VzIFNBU1MgZmlsZXMgYXJlIGNvbXBpbGVkIGludG8gc2VwYXJhdGUgY3NzIGZpbGVzXHJcbi8vXHJcblxyXG4vLyBJbml0aWFsaXphdGlvbiBvZiBnbG9iYWwgdmFyaWFibGVzLCBtaXhpbnMgYW5kIGZ1bmN0aW9uc1xyXG5AaW1wb3J0IFwiLi4vLi4vaW5pdFwiO1xyXG5cclxuLy8gQmFzZVxyXG4ud2l6YXJkLndpemFyZC0zIHtcclxuXHQvLyBOYXZcclxuXHQud2l6YXJkLW5hdiB7XHJcblx0XHQvLyBTdGVwc1xyXG5cdFx0LndpemFyZC1zdGVwcyB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcblx0XHRcdC8vIFN0ZXBcclxuXHRcdFx0LndpemFyZC1zdGVwIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0XHRcdGZsZXgtZ3JvdzogMTtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDFyZW07XHJcblxyXG5cdFx0XHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQud2l6YXJkLWxhYmVsIHtcclxuXHRcdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRcdGNvbG9yOiAkdGV4dC1tdXRlZDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDJyZW0gMC41cmVtO1xyXG5cclxuXHRcdFx0XHRcdC53aXphcmQtdGl0bGUge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEuMXJlbTtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG5cdFx0XHRcdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDJyZW07XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQud2l6YXJkLWJhciB7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogNHB4O1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGdyYXktMjAwO1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdFx0XHRcdFx0XHQmOmFmdGVyIHtcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0cHg7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDA7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogJHRyYW5zaXRpb24tbGluaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JltkYXRhLXdpemFyZC1zdGF0ZT1cImN1cnJlbnRcIl0ge1xyXG5cdFx0XHRcdFx0LndpemFyZC1sYWJlbCB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAkcHJpbWFyeTtcclxuXHJcblx0XHRcdFx0XHRcdC53aXphcmQtYmFyIHtcclxuXHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyBwb3J0cmFpdCB0YWJsZXQgYW5kIG1vYmlsZSBtb2RlXHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xyXG5cdC53aXphcmQud2l6YXJkLTMge1xyXG5cdFx0Ly8gTmF2XHJcblx0XHQud2l6YXJkLW5hdiB7XHJcblx0XHRcdC53aXphcmQtc3RlcHMge1xyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG5cdFx0XHRcdC53aXphcmQtc3RlcCB7XHJcblx0XHRcdFx0XHRmbGV4OiAwIDAgMTAwJTtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cclxuXHRcdFx0XHRcdC53aXphcmQtbGFiZWwge1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdFx0XHRcdGZsZXg6IDAgMCAxMDAlO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxcmVtIDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIi53aXphcmQud2l6YXJkLTMgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi53aXphcmQud2l6YXJkLTMgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi53aXphcmQud2l6YXJkLTMgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi53aXphcmQud2l6YXJkLTMgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1sYWJlbCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAjQjVCNUMzO1xuICBwYWRkaW5nOiAycmVtIDAuNXJlbTtcbn1cbi53aXphcmQud2l6YXJkLTMgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1sYWJlbCAud2l6YXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLndpemFyZC53aXphcmQtMyAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWxhYmVsIC53aXphcmQtdGl0bGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4ud2l6YXJkLndpemFyZC0zIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIC53aXphcmQtbGFiZWwgLndpemFyZC1iYXIge1xuICBoZWlnaHQ6IDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkVERjM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi53aXphcmQud2l6YXJkLTMgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1sYWJlbCAud2l6YXJkLWJhcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xufVxuLndpemFyZC53aXphcmQtMyAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcFtkYXRhLXdpemFyZC1zdGF0ZT1jdXJyZW50XSAud2l6YXJkLWxhYmVsIHtcbiAgY29sb3I6ICM2OTkzRkY7XG59XG4ud2l6YXJkLndpemFyZC0zIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwW2RhdGEtd2l6YXJkLXN0YXRlPWN1cnJlbnRdIC53aXphcmQtbGFiZWwgLndpemFyZC1iYXI6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5OTNGRjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC53aXphcmQud2l6YXJkLTMgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuICAud2l6YXJkLndpemFyZC0zIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLndpemFyZC53aXphcmQtMyAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWxhYmVsIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICB9XG59IiwiLy9cclxuLy8gR2xvYmFsIHZhcmlhYmxlcyBmb3IgQm9vdHN0cmFwIGN1c3RvbWl6YXRpb24uXHJcbi8vIFRvIG92ZXJyaWRlIGFueSBCb290c3RyYXAgdmFyaWFibGUgc2FmZWx5IHlvdSBjYW4gdXNlIF92YXJpYWJsZXMuZGVtby5zY3NzXHJcbi8vXHJcblxyXG4vL1xyXG4vLyBDb2xvciBzeXN0ZW1cclxuLy9cclxuXHJcbi8vIEJsYWNrIGNvbG9yXHJcbiRibGFjazogICAgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCMwMDAwMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBXaGl0ZSBjb2xvclxyXG4kd2hpdGU6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjZmZmZmZmICFkZWZhdWx0O1xyXG5cclxuLy8gR3JheSBjb2xvcnNcclxuJGdyYXktMTAwOiBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0I0YzRjZGOSAhZGVmYXVsdDtcclxuJGdyYXktMjAwOiBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0I0VCRURGMyAhZGVmYXVsdDtcclxuJGdyYXktMzAwOiBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0I0U0RTZFRiAhZGVmYXVsdDtcclxuJGdyYXktNDAwOiBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0I0QxRDNFMCAhZGVmYXVsdDtcclxuJGdyYXktNTAwOiBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0I0I1QjVDMyAhZGVmYXVsdDtcclxuJGdyYXktNjAwOiBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IzdFODI5OSAhZGVmYXVsdDtcclxuJGdyYXktNzAwOiBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IzVFNjI3OCAhZGVmYXVsdDtcclxuJGdyYXktODAwOiBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IzNGNDI1NCAhZGVmYXVsdDtcclxuJGdyYXktOTAwOiBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IzE4MUMzMiAhZGVmYXVsdDtcclxuXHJcbi8vIERhcmsgY29sb3JzXHJcbiRkYXJrOiAgICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZ3JheS05MDAgIWRlZmF1bHQ7XHJcbiRkYXJrLTc1OiAgICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZ3JheS04MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZGFyay02NTogICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktNzAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGRhcmstNTA6ICAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCRncmF5LTYwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRkYXJrLTI1OiAgICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZ3JheS00MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gVGV4dCBtdXRlZFxyXG4kdGV4dC1tdXRlZDogICAgICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQkZ3JheS01MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gR3JheSBjb2xvcnMgbGlzdFxyXG4kZ3JheXM6IChcclxuICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcclxuICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcclxuICAgIFwiMzAwXCI6ICRncmF5LTMwMCxcclxuICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcclxuICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcclxuICAgIFwiNjAwXCI6ICRncmF5LTYwMCxcclxuXHRcIjcwMFwiOiAkZ3JheS03MDAsXHJcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXHJcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcclxuKSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBCb290c3RyYXAgc3RhbmRhcmQgJiBleHRlbmRlZCBjb2xvcnNcclxuLy8gRGFyayBjb2xvcnNcclxuJGRhcms6ICAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCRkYXJrICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJGRhcmstaG92ZXI6ICAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRkYXJrZW4oJGRhcmssIDMlKSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRkYXJrLWxpZ2h0OiAgICAgICAgICBcdFx0XHRcdFx0XHRcdCAgICAkZ3JheS00MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZGFyay1pbnZlcnNlOiAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gUHJpbWFyeSBjb2xvcnNcclxuJHByaW1hcnk6ICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCMzNjk5RkYgIWRlZmF1bHQ7IC8vIEJvb3RzdHJhcCB2YXJpYWJsZVxyXG4kcHJpbWFyeS1ob3ZlcjogICAgXHRcdFx0XHRcdFx0XHRcdFx0IzE4N0RFNCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRwcmltYXJ5LWxpZ2h0OiAgICBcdFx0XHRcdFx0XHRcdFx0XHQjRTFGMEZGICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHByaW1hcnktaW52ZXJzZTogIFx0XHRcdFx0XHRcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gU2Vjb25kYXJ5IGNvbG9yc1xyXG4kc2Vjb25kYXJ5OiAgICAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktMzAwICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJHNlY29uZGFyeS1ob3ZlcjogIFx0XHRcdFx0XHRcdFx0XHRcdGRhcmtlbigkZ3JheS0zMDAsIDQlKSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRzZWNvbmRhcnktbGlnaHQ6ICBcdFx0XHRcdFx0XHRcdFx0XHQkZ3JheS0yMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kc2Vjb25kYXJ5LWludmVyc2U6XHRcdFx0XHRcdFx0XHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gU3VjY2VzcyBjb2xvcnNcclxuJHN1Y2Nlc3M6ICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCMxQkM1QkQgIWRlZmF1bHQ7IC8vIEJvb3RzdHJhcCB2YXJpYWJsZVxyXG4kc3VjY2Vzcy1ob3ZlcjogICAgXHRcdFx0XHRcdFx0XHRcdFx0IzBCQjdBRiAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRzdWNjZXNzLWxpZ2h0OiAgICBcdFx0XHRcdFx0XHRcdFx0XHQjQzlGN0Y1ICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHN1Y2Nlc3MtaW52ZXJzZTogIFx0XHRcdFx0XHRcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBJbmNvIGNvbG9yc1xyXG4kaW5mbzogICAgICAgICBcdFx0IFx0XHRcdFx0XHRcdFx0XHQjODk1MEZDICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJGluZm8taG92ZXI6ICAgXHRcdCBcdFx0XHRcdFx0XHRcdFx0IzczMzdFRSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRpbmZvLWxpZ2h0OiAgIFx0XHQgXHRcdFx0XHRcdFx0XHRcdCNFRUU1RkYgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kaW5mby1pbnZlcnNlOiBcdFx0IFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gV2FybmluZyBjb2xvcnNcclxuJHdhcm5pbmc6ICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNGRkE4MDAgIWRlZmF1bHQ7IC8vIEJvb3RzdHJhcCB2YXJpYWJsZVxyXG4kd2FybmluZy1ob3ZlcjogICAgXHRcdFx0XHRcdFx0XHRcdFx0I0VFOUQwMSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR3YXJuaW5nLWxpZ2h0OiAgICBcdFx0XHRcdFx0XHRcdFx0XHQjRkZGNERFICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHdhcm5pbmctaW52ZXJzZTogIFx0XHRcdFx0XHRcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBEYW5nZXIgY29sb3JzXHJcbiRkYW5nZXI6ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjRjY0RTYwICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJGRhbmdlci1ob3ZlcjogICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNFRTJENDEgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZGFuZ2VyLWxpZ2h0OiAgICAgXHRcdFx0XHRcdFx0XHRcdFx0I0ZGRTJFNSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRkYW5nZXItaW52ZXJzZTogICBcdFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gTGlnaHQgY29sb3JzXHJcbiRsaWdodDogICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZ3JheS0xMDAgIWRlZmF1bHQ7IC8vIEJvb3RzdHJhcCB2YXJpYWJsZVxyXG4kbGlnaHQtaG92ZXI6ICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdCRncmF5LTMwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRsaWdodC1saWdodDogICAgICAgICBcdFx0XHRcdFx0XHRcdFx0JGdyYXktMTAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGxpZ2h0LWludmVyc2U6ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0JGdyYXktNjAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFdoaXRlIGNvbG9yc1xyXG4kd2hpdGU6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEJvb3RzdHJhcCB2YXJpYWJsZVxyXG4kd2hpdGUtaG92ZXI6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCRncmF5LTEwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR3aGl0ZS1saWdodDogICAgXHRcdFx0XHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR3aGl0ZS1pbnZlcnNlOiAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZGFyay03NSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBCb290c3RyYXAgdGhlbWUgY29sb3JzXHJcbiR0aGVtZS1jb2xvcnM6IChcclxuXHRcIndoaXRlXCI6ICAgICAgJHdoaXRlLCAgLy8gY3VzdG9tIGNvbG9yIHR5cGVcclxuXHRcInByaW1hcnlcIjogICAgJHByaW1hcnksXHJcbiAgICBcInNlY29uZGFyeVwiOiAgJHNlY29uZGFyeSxcclxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcclxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcclxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcclxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxyXG4gICAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcclxuICAgIFwiZGFya1wiOiAgICAgICAkZGFya1xyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gRXh0ZW5kZWQgaG92ZXIgY29sb3JzIGZvciBCb290c3RyYXAgdGhlbWUgY29sb3JzXHJcbiR0aGVtZS1ob3Zlci1jb2xvcnM6IChcclxuXHRcIndoaXRlXCI6ICAgICAgJHdoaXRlLWhvdmVyLCAgIC8vIGN1c3RvbSBjb2xvciB0eXBlXHJcblx0XCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LWhvdmVyLFxyXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnktaG92ZXIsXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MtaG92ZXIsXHJcbiAgICBcImluZm9cIjogICAgICAgJGluZm8taG92ZXIsXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmctaG92ZXIsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlci1ob3ZlcixcclxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQtaG92ZXIsXHJcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmstaG92ZXJcclxuKSAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gRXh0ZW5kZWQgaW52ZXJzZSBjb2xvcnMgZm9yIEJvb3RzdHJhcCB0aGVtZSBjb2xvcnNcclxuJHRoZW1lLWludmVyc2UtY29sb3JzOiAoXHJcblx0XCJ3aGl0ZVwiOiAgICAgICR3aGl0ZS1pbnZlcnNlLFxyXG5cdFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeS1pbnZlcnNlLFxyXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnktaW52ZXJzZSxcclxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2Vzcy1pbnZlcnNlLFxyXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLWludmVyc2UsXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmctaW52ZXJzZSxcclxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLWludmVyc2UsXHJcbiAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LWludmVyc2UsXHJcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmstaW52ZXJzZVxyXG4pICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBFeHRlbmRlZCBvdXRsaW5lIGNvbG9ycyBmb3IgQm9vdHN0cmFwIHRoZW1lIGNvbG9yc1xyXG4kdGhlbWUtb3V0bGluZS1pbnZlcnNlLWNvbG9yczogKFxyXG5cdFwid2hpdGVcIjogICAgICAkd2hpdGUsXHJcblx0XCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxyXG4gICAgXCJzZWNvbmRhcnlcIjogICRkYXJrLTc1LFxyXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxyXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxyXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxyXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXHJcbiAgICBcImxpZ2h0XCI6ICAgICAgJGRhcmstNzUsXHJcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmtcclxuKSAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gRXh0ZW5kZWQgbGlnaHQgY29sb3JzIGZvciBCb290c3RyYXAgdGhlbWUgY29sb3JzXHJcbiR0aGVtZS1saWdodC1jb2xvcnM6IChcclxuICAgIFwid2hpdGVcIjogICAgICAkd2hpdGUtbGlnaHQsXHJcblx0XCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LWxpZ2h0LFxyXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnktbGlnaHQsXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MtbGlnaHQsXHJcbiAgICBcImluZm9cIjogICAgICAgJGluZm8tbGlnaHQsXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmctbGlnaHQsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlci1saWdodCxcclxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQtbGlnaHQsXHJcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmstbGlnaHRcclxuKSAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gRXh0ZW5kZWQgc2hhZG93IGNvbG9ycyBmb3IgQm9vdHN0cmFwIHRoZW1lIGNvbG9yc1xyXG4kdGhlbWUtc2hhZG93LWNvbG9yczogKFxyXG4gICAgXCJ3aGl0ZVwiOiAgICAgICRkYXJrLFxyXG5cdFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcclxuICAgIFwic2Vjb25kYXJ5XCI6ICAkZGFyayxcclxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcclxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcclxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcclxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxyXG4gICAgXCJsaWdodFwiOiAgICAgICRkYXJrLFxyXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXHJcbikgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIEV4dGVuZGVkIHRoZW1lIHRleHQgY29sb3JzXHJcbiR0aGVtZS10ZXh0LWNvbG9yczogKFxyXG4gICAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSxcclxuXHRcInByaW1hcnlcIjogICAgJHByaW1hcnksXHJcbiAgICBcInNlY29uZGFyeVwiOiAgJGRhcmssXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXHJcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcclxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXHJcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmssXHJcbiAgICBcImRhcmstNzVcIjogICAgJGRhcmstNzUsXHJcbiAgICBcImRhcmstNjVcIjogICAgJGRhcmstNjUsXHJcbiAgICBcImRhcmstNTBcIjogICAgJGRhcmstNTAsXHJcbiAgICBcImRhcmstMjVcIjogICAgJGRhcmstMjUsXHJcbiAgICBcIm11dGVkXCI6ICAgICAgJHRleHQtbXV0ZWRcclxuKSAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gU29jaWFsIE5ldHdvcmsgQ29sb3JzIFVzZWQgV2l0aCBCb29zdHJhcCBCdXR0b25zKHNlZTogaHR0cHM6Ly9wcmltYXJ5Y29sb3JzLm5ldC8pXHJcbiRzb2NpYWwtY29sb3JzOiAoXHJcblx0ZmFjZWJvb2s6IChcclxuXHRcdGJhc2U6ICMzYjU5OTgsXHJcblx0XHRpbnZlcnNlOiAjZmZmZmZmLFxyXG4gICAgICAgIGxpZ2h0OiByZ2JhKCMzYjU5OTgsIDAuMSksXHJcbiAgICAgICAgaG92ZXI6IGRhcmtlbigjM2I1OTk4LCA3LjUlKVxyXG5cdCksXHJcblx0Z29vZ2xlOiAoXHJcblx0XHRiYXNlOiAjZGQ0YjM5LFxyXG5cdFx0aW52ZXJzZTogI2ZmZmZmZixcclxuICAgICAgICBsaWdodDogcmdiYSgjZGQ0YjM5LCAwLjEpLFxyXG4gICAgICAgIGhvdmVyOiBkYXJrZW4oI2RkNGIzOSwgNy41JSlcclxuXHQpLFxyXG5cdHR3aXR0ZXI6IChcclxuXHRcdGJhc2U6ICMxZGExZjIsXHJcblx0XHRpbnZlcnNlOiAjZmZmZmZmLFxyXG4gICAgICAgIGxpZ2h0OiByZ2JhKCMxZGExZjIsIDAuMSksXHJcbiAgICAgICAgaG92ZXI6IGRhcmtlbigjMWRhMWYyLCA3LjUlKVxyXG5cdCksXHJcblx0aW5zdGFncmFtOiAoXHJcblx0XHRiYXNlOiAjZTEzMDZjLFxyXG5cdFx0aW52ZXJzZTogI2ZmZmZmZixcclxuICAgICAgICBsaWdodDogcmdiYSgjZTEzMDZjLCAwLjEpLFxyXG4gICAgICAgIGhvdmVyOiBkYXJrZW4oI2UxMzA2YywgNy41JSlcclxuXHQpLFxyXG5cdHlvdXR1YmU6IChcclxuXHRcdGJhc2U6ICNmZjAwMDAsXHJcblx0XHRpbnZlcnNlOiAjZmZmZmZmLFxyXG4gICAgICAgIGxpZ2h0OiByZ2JhKCNmZjAwMDAsIDAuMSksXHJcbiAgICAgICAgaG92ZXI6IGRhcmtlbigjZmYwMDAwLCA3LjUlKVxyXG5cdCksXHJcbiAgICBsaW5rZWRpbjogKFxyXG4gICAgICAgIGJhc2U6ICMwMDc3YjUsXHJcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZixcclxuICAgICAgICBsaWdodDogcmdiYSgjMDA3N2I1LCAwLjEpLFxyXG4gICAgICAgIGhvdmVyOiBkYXJrZW4oIzAwNzdiNSwgNy41JSlcclxuICAgICksXHJcbiAgICBza3lwZTogKFxyXG4gICAgICAgIGJhc2U6ICMwMGFmZjAsXHJcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZixcclxuICAgICAgICBsaWdodDogcmdiYSgjMDBhZmYwLCAwLjEpLFxyXG4gICAgICAgIGhvdmVyOiBkYXJrZW4oIzAwYWZmMCwgNy41JSlcclxuICAgIClcclxuKSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBFeHRlbmRlZCBjdXN0b20gc3BhY2luZyBmb3IgQm9vdHN0cmFwXHJcbi8vXHJcbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2VcclxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxyXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxyXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG4kc3BhY2VyczogKFxyXG4gICAgMDogMCxcclxuICAgIDE6ICgkc3BhY2VyICogLjI1KSwgIFx0Ly8gMy41cHhcclxuICAgIDI6ICgkc3BhY2VyICogLjUpLCAgIFx0Ly8gN3B4O1xyXG5cdDM6ICgkc3BhY2VyICogLjc1KSwgIFx0Ly8gMTAuNXB4XHJcblx0NDogKCRzcGFjZXIgKiAxKSwgICAgXHQvLyAxNHB4XHJcblx0NTogKCRzcGFjZXIgKiAxLjI1KSwgXHQvLyAxNy41cHhcclxuXHQ2OiAoJHNwYWNlciAqIDEuNSksICBcdC8vIDIxcHhcclxuXHQ3OiAoJHNwYWNlciAqIDEuNzUpLCBcdC8vIDI0LjVweFxyXG5cdDg6ICgkc3BhY2VyICogMiksICAgIFx0Ly8gMjhweFxyXG5cdDk6ICgkc3BhY2VyICogMi4yNSksIFx0Ly8gMzEuNXB4XHJcblx0MTA6ICgkc3BhY2VyICogMi41KSwgXHQvLyAzNXB4XHJcblx0MTE6ICgkc3BhY2VyICogMi43NSksXHQvLyAzOC41cHhcclxuXHQxMjogKCRzcGFjZXIgKiAzKSwgICBcdC8vIDQycHhcclxuXHQxMzogKCRzcGFjZXIgKiAzLjI1KSxcdC8vIDQ1LjVweFxyXG5cdDE0OiAoJHNwYWNlciAqIDMuNSksIFx0Ly8gNDlweFxyXG5cdDE1OiAoJHNwYWNlciAqIDMuNzUpLCBcdC8vIDUyLjVweFxyXG5cdDE2OiAoJHNwYWNlciAqIDQpLCBcdFx0Ly8gNTVweFxyXG5cdDE3OiAoJHNwYWNlciAqIDQuMjUpLCBcdC8vIDU4LjVweFxyXG5cdDE4OiAoJHNwYWNlciAqIDQuNSksIFx0Ly8gNjJweFxyXG5cdDE5OiAoJHNwYWNlciAqIDQuNzUpLCBcdC8vIDY1LjVweFxyXG5cdDIwOiAoJHNwYWNlciAqIDUpLCBcdFx0Ly8gNjlweFxyXG5cdDIxOiAoJHNwYWNlciAqIDUuMjUpLFx0Ly8gNzMuNXB4XHJcblx0MjI6ICgkc3BhY2VyICogNS41KSwgXHQvLyA3N3B4XHJcblx0MjM6ICgkc3BhY2VyICogNS43NSksIFx0Ly8gODAuNXB4XHJcblx0MjQ6ICgkc3BhY2VyICogNiksIFx0XHQvLyA4NHB4XHJcblx0MjU6ICgkc3BhY2VyICogNi4yNSksIFx0Ly8gODcuNXB4XHJcblx0MjY6ICgkc3BhY2VyICogNi41KSwgXHQvLyA5MXB4XHJcblx0Mjc6ICgkc3BhY2VyICogNi43NSksIFx0Ly8gOTQuNXB4XHJcblx0Mjg6ICgkc3BhY2VyICogNyksIFx0XHQvLyA5OXB4XHJcblx0Mjk6ICgkc3BhY2VyICogNy4yNSksICAgLy8gMTAyLjVweFxyXG5cdDMwOiAoJHNwYWNlciAqIDcuNSksIFx0Ly8gMTA2cHhcclxuXHQzMTogKCRzcGFjZXIgKiA3Ljc1KSwgXHQvLyAxMDkuNXB4XHJcblx0MzI6ICgkc3BhY2VyICogOCksIFx0XHQvLyAxMTNweFxyXG5cdDMzOiAoJHNwYWNlciAqIDguMjUpLCBcdC8vIDExNi41cHhcclxuXHQzNDogKCRzcGFjZXIgKiA4LjUpLCBcdC8vIDEyMHB4XHJcblx0MzU6ICgkc3BhY2VyICogOC43NSksIFx0Ly8gMTIzLjVweFxyXG5cdDM2OiAoJHNwYWNlciAqIDkpLCBcdFx0Ly8gMTI3cHhcclxuXHQzNzogKCRzcGFjZXIgKiA5LjI1KSwgICAgLy8gMTMwLjVweFxyXG5cdDQ4OiAoJHNwYWNlciAqIDkuNSksIFx0Ly8gMTM0cHhcclxuXHQzOTogKCRzcGFjZXIgKiA5Ljc1KSwgXHQvLyAxMzcuNXB4XHJcbiAgICA0MDogKCRzcGFjZXIgKiAxMCksIFx0Ly8gMTQwcHhcclxuKTtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuLy9cclxuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxyXG4kbGluZS1oZWlnaHQteGw6XHRcdFx0XHRcdFx0XHRcdFx0MS44ICFkZWZhdWx0O1xyXG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQxLjUgIWRlZmF1bHQ7XHJcbiRsaW5lLWhlaWdodC1zbTogICAgICAgICAgICAgIFx0XHRcdFx0XHRcdDEuMzUgIWRlZmF1bHQ7XHJcblxyXG4kY29tcG9uZW50LWxpZ2h0LXN0eWxlLW9wYWNpdHk6ICAgICAgICAgICAgICAgICBcdDAuMSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcclxuXHJcbi8vIEJveCBzaGFkb3dcclxuJGJveC1zaGFkb3cteHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMC4yNXJlbSAwLjVyZW0gMCByZ2JhKCRibGFjaywgMC4wNSk7XHJcbiRib3gtc2hhZG93LXNtOiAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdDAgLjFyZW0gMXJlbSAwLjI1cmVtIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xyXG4kYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQwIC41cmVtIDEuNXJlbSAwLjVyZW0gcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xyXG4kYm94LXNoYWRvdy1sZzogICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQwIDFyZW0gMnJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyBCb3JkZXIgUmFkaXVlc1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICBcdFx0XHRcdFx0XHQuMjhyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdC40MnJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgXHRcdFx0XHRcdFx0Ljg1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy14bDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBCb3JkZXIgc2V0dGluZ3NcclxuJGJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuJGJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcclxuXHJcbi8vIEhvdmVyIGJhY2tncm91bmQgY29sb3JcclxuJGhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBBY3RpdmViYWNrZ3JvdW5kIGNvbG9yXHJcbiRhY3RpdmUtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrZW4oJGdyYXktMTAwLCAxJSkgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gT3B0aW9uc1xyXG4vL1xyXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXHJcbiRlbmFibGUtcm91bmRlZDogXHRcdFx0XHRcdFx0XHRcdFx0dHJ1ZSAhZGVmYXVsdDtcclxuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHR0cnVlICFkZWZhdWx0O1xyXG5cclxuLy8gR3JpZCBicmVha3BvaW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gIHhzOiAwLFxyXG4gIHNtOiA1NzZweCxcclxuICBtZDogNzY4cHgsXHJcbiAgbGc6IDk5MnB4LFxyXG4gIHhsOiAxMjAwcHgsXHJcbiAgeHhsOiAxNDAwcHggLy8gY3VzdG9tIGJyZWFrcG9pbnRcclxuKSAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBHcmlkIGNvbnRhaW5lcnNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXHJcbiAgc206IDU0MHB4LFxyXG4gIG1kOiA3MjBweCxcclxuICBsZzogOTYwcHgsXHJcbiAgeGw6IDExNDBweCxcclxuICB4eGw6IDEzNDBweFxyXG4pICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIEdyaWQgY29sdW1uc1xyXG4vL1xyXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cclxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0MTIgIWRlZmF1bHQ7XHJcbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgIFx0XHRcdFx0XHRcdDI1cHggIWRlZmF1bHQ7XHJcbiRncmlkLWRpdmlkZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuXHJcbi8vIEJvZHlcclxuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxyXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0O1xyXG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7XHJcblxyXG4vLyBUeXBvZ3JhcGh5XHJcbi8vXHJcbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG5cclxuLy8gRm9udCBmYW1pbHlcclxuJGZvbnQtZmFtaWx5LWJhc2U6ICAgICAgICAgICAgXHRcdFx0XHRcdFx0UG9wcGlucywgSGVsdmV0aWNhLCBcInNhbnMtc2VyaWZcIiAhZGVmYXVsdDtcclxuXHJcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIFx0XHRcdFx0XHRcdDFyZW0gIWRlZmF1bHQ7IC8vIEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxM3B4YFxyXG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgIFx0IFx0XHRcdFx0XHQkZm9udC1zaXplLWJhc2UgKiAxLjA4ICFkZWZhdWx0OyAgIC8vIDE0LjA0cHhcclxuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS1iYXNlICogLjkyNSAhZGVmYXVsdDsgICAvLyAxMi4wMjVweFxyXG4kZm9udC1zaXplLXhzOiAgICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQkZm9udC1zaXplLWJhc2UgKiAuOCAhZGVmYXVsdDsgICAgIC8vIDEwLjRweFxyXG5cclxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7ICAgICAgLy8gMjZweFxyXG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS43NSAhZGVmYXVsdDsgICAvLyAyMi43NXB4XHJcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7ICAgIC8vIDE5LjVweFxyXG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4zNSAhZGVmYXVsdDsgICAvLyAxNy41NXB4XHJcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAgIC8vIDE2LjI1cHhcclxuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMTc1ICFkZWZhdWx0OyAgLy8gMTUuMjc1cHhcclxuXHJcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MDAgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjIgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG5cclxuJGRpc3BsYXkxLXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUuNXJlbSAhZGVmYXVsdDsgIC8vIDcxLjVweFxyXG4kZGlzcGxheTItc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNC41cmVtICFkZWZhdWx0OyAgLy8gNTguNXB4XHJcbiRkaXNwbGF5My1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLjVyZW0gIWRlZmF1bHQ7ICAvLyA0NS41cHhcclxuJGRpc3BsYXk0LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIuNXJlbSAhZGVmYXVsdDsgIC8vIDMyLjVweFxyXG4kZGlzcGxheTUtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMi4yNXJlbSAhZGVmYXVsdDsgLy8gMjkuNXB4XHJcblxyXG4vLyBGb250IFNpemVzXHJcbiRmb250LXNpemVzOiAoXHJcbiAgICBmb250LXNpemUtaDE6ICRoMS1mb250LXNpemUsXHJcbiAgICBmb250LXNpemUtaDI6ICRoMi1mb250LXNpemUsXHJcbiAgICBmb250LXNpemUtaDM6ICRoMy1mb250LXNpemUsXHJcbiAgICBmb250LXNpemUtaDQ6ICRoNC1mb250LXNpemUsXHJcbiAgICBmb250LXNpemUtaDU6ICRoNS1mb250LXNpemUsXHJcbiAgICBmb250LXNpemUtaDY6ICRoNi1mb250LXNpemUsXHJcbiAgICBkaXNwbGF5MTogJGRpc3BsYXkxLXNpemUsXHJcbiAgICBkaXNwbGF5MjogJGRpc3BsYXkyLXNpemUsXHJcbiAgICBkaXNwbGF5MzogJGRpc3BsYXkzLXNpemUsXHJcbiAgICBkaXNwbGF5NDogJGRpc3BsYXk0LXNpemUsXHJcbiAgICBkaXNwbGF5NTogJGRpc3BsYXk1LXNpemVcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRkaXNwbGF5MS13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XHJcbiRkaXNwbGF5Mi13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XHJcbiRkaXNwbGF5My13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XHJcbiRkaXNwbGF5NC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XHJcbiRkaXNwbGF5LWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVhZGluZ3MtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XHJcblxyXG4kbGVhZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcclxuJGxlYWQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcclxuJHNtYWxsLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDgwJSAhZGVmYXVsdDtcclxuXHJcbi8vIEZvbnQgV2VpZ2h0XHJcbiRmb250LXdlaWdodC1saWdodGVyOiAgICAgICAgIFx0XHRcdFx0XHRcdGxpZ2h0ZXIgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1saWdodDogICAgICAgICAgIFx0XHRcdFx0XHRcdDMwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogICAgICAgICAgXHRcdFx0XHRcdFx0NDAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICBcdFx0XHRcdFx0XHQ1MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ib2xkZXI6ICAgICAgICAgIFx0XHRcdFx0XHRcdDYwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWJvbGRlc3Q6ICAgICAgICAgIFx0XHRcdFx0XHRcdDcwMCAhZGVmYXVsdDtcclxuXHJcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gVHJhbnNpdGlvblxyXG4kdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdGFsbCAwLjE1cyBlYXNlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHRyYW5zaXRpb24tbGluazogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDAuMTVzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UsIGJveC1zaGFkb3cgMC4xNXMgZWFzZSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR0cmFuc2l0aW9uLWlucHV0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciAwLjE1cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2UgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuXHJcbi8vIExpbmtzXHJcbi8vXHJcbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cclxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkcHJpbWFyeSwgMTUlKSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZSAhZGVmYXVsdDtcclxuLy8gRGFya2VuIHBlcmNlbnRhZ2UgZm9yIGxpbmtzIHdpdGggYC50ZXh0LSpgIGNsYXNzIChlLmcuIGAudGV4dC1zdWNjZXNzYClcclxuJGVtcGhhc2l6ZWQtbGluay1ob3Zlci1kYXJrZW4tcGVyY2VudGFnZTogICAgICAgICAgIDE1JSAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBCdXR0b25zICsgRm9ybXNcclxuLy9cclxuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuNjVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJ0bi1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkY29tcG9uZW50LWFjdGl2ZS1iZywgLjI1KSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICAgLjU1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICRsaW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjgyNXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuNDJyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgJGxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gQnV0dG9uc1xyXG4vL1xyXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cclxuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgXHRcdFx0XHRcdFx0LjYgIWRlZmF1bHQ7XHJcbiRidG4tdHJhbnNpdGlvbjogICAgICAgICAgICAgIFx0XHRcdFx0XHRcdGNvbG9yIC4zcyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuM3MgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjNzIGVhc2UtaW4tb3V0ICFkZWZhdWx0Oy8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kYnRuLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbiRidG4tYWN0aXZlLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kYnRuLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICBcdFx0XHRcdFx0XHRub3JtYWwgIWRlZmF1bHQ7XHJcbiRidG4tc2Vjb25kYXJ5LWNvbG9yOlx0XHRcdFx0XHRcdFx0XHQkZGFyay03NSAhZGVmYXVsdDtcclxuJGJ0bi1zZWNvbmRhcnktaG92ZXItYmctY29sb3I6XHRcdFx0XHRcdFx0JGdyYXktMTAwICFkZWZhdWx0O1xyXG4kYnRuLWljb24tc2l6ZS14czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjRweCAhZGVmYXVsdDsgLy9jdXN0b20gcGFyYW1ldGVyXHJcblxyXG4vLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXHJcbiRidG4tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICAgXHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogICAgICAgICAgICAgICBcdFx0XHQkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuJGlucHV0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOlx0XHRcdFx0XHRcdFx0XHQkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuJGlucHV0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6XHRcdFx0XHRcdFx0XHRsaWdodGVuKCRwcmltYXJ5LCAxMCUpO1xyXG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggKiAyICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJGlucHV0LWRpc2FibGVkLWJnOiAgICAgICAgICAgICAgICAgICAgIFx0XHRcdCRncmF5LTEwMCAhZGVmYXVsdDtcclxuJGlucHV0LXJlYWRvbmx5LWJnOiAgICAgICAgICAgICAgICAgICAgIFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRpbnB1dC1ncm91cC1pY29uLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgIFx0XHQkZGFyay03NSAhZGVmYXVsdDtcclxuJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgIFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xyXG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAgICAgICAgXHRcdFx0JGdyYXktMTAwICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgIFx0XHRcdCRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAgICAgXHRcdFx0JGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICBcdFx0XHQkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1zb2xpZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0xMDA7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kaW5wdXQtc29saWQtYmctZm9jdXM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwOyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGlucHV0LXNvbGlkLXBsYWNlaG9sZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kaW5wdXQtc29saWQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQkZGFyay03NTsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm94LXNoYWRvdzogICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm94LXNoYWRvdzogICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcblxyXG4vLyBGb3Jtc1xyXG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAgICAgICAgICAgMS43NXJlbSAhZGVmYXVsdDtcclxuJGZvcm0tbGFiZWwtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZm9ybS1sYWJlbC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgNDAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuOXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRmb3JtLWZlZWRiYWNrLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICA0MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZm9ybS10ZXh0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC45cmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGZvcm0tdGV4dC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRmb3JtLXZhbGlkYXRpb24taW5wdXQtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICBmYWxzZTsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gVGFibGVcclxuJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdFx0dHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgICAgXHRcdFx0XHRcdCRncmF5LTIwMCAhZGVmYXVsdDtcclxuJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgICBcdFx0XHRcdFx0JGdyYXktMzAwICFkZWZhdWx0O1xyXG4kdGFibGUtYWN0aXZlLWJnOiAgICAgICAgICAgICAgIFx0XHRcdFx0XHQkdGFibGUtaG92ZXItYmcgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgIFx0XHRcdFx0XHQkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiR0YWJsZS1oZWFkLWJnOiAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdCRncmF5LTEwMCAhZGVmYXVsdDtcclxuJHRhYmxlLWhlYWQtY29sb3I6ICAgICAgICAgICAgICBcdFx0XHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7XHJcbiR0YWJsZS1oZWFkLWZvbnQtc2l6ZTogICAgICAgICAgICAgXHRcdFx0XHRcdDFyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kdGFibGUtaGVhZC1mb250LXdlaWdodDogICAgICAgICAgIFx0XHRcdFx0XHQ2MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuJHRhYmxlLWRhcmstY29sb3I6ICAgICAgICAgICAgXHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0O1xyXG4kdGFibGUtZGFyay1iZzogICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQkZGFyayAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstYWNjZW50LWJnOiAgICAgICAgXHRcdFx0XHRcdFx0cmdiYSgkd2hpdGUsIC4wNSkgIWRlZmF1bHQ7XHJcbiR0YWJsZS1kYXJrLWhvdmVyLWNvbG9yOiAgICAgIFx0XHRcdFx0XHRcdCR0YWJsZS1kYXJrLWNvbG9yICFkZWZhdWx0O1xyXG4kdGFibGUtZGFyay1ob3Zlci1iZzogICAgICAgIFx0XHRcdFx0XHRcdHJnYmEoJHdoaXRlLCAuMDc1KSAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAgICAgXHRcdFx0XHRcdFx0bGlnaHRlbigkdGFibGUtZGFyay1iZywgNy41JSkgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtaGVhZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHRhYmxlLWNvbXBhY3QtaGVhZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgIDAuOXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR0YWJsZS1jb21wYWN0LWhlYWQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR0YWJsZS1jb21wYWN0LWhlYWQtdGV4dC10cmFuc2Zvcm06ICAgICAgICAgICAgICAgICB1cHBlcmNhc2UgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kdGFibGUtY29tcGFjdC1oZWFkLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgNjAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHRhYmxlLWNvbXBhY3QtaGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgIDYwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR0YWJsZS1jb21wYWN0LWhlYWQtbGV0dGVyLXNwYWNpbmc6ICAgICAgICAgICAgICAgICAwLjFyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gQ2FyZFxyXG4kY2FyZC1ib3gtc2hhZG93OiBcdFx0XHRcdFx0XHRcdFx0XHQwcHggMHB4IDMwcHggMHB4IHJnYmEoODIsNjMsMTA1LDAuMDUpICFkZWZhdWx0OyAvLyBjYXJkIGN1c3RvbSBzaGFkb3dcclxuJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgXHRcdFx0XHQkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0O1xyXG4kY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDJyZW0gIWRlZmF1bHQ7XHJcbiRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdDIuMjVyZW0gIWRlZmF1bHQ7XHJcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgIFx0XHRcdFx0JGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4kY2FyZC1oZWFkZXItc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC41cmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGNhcmQtaGVhZGVyLWhlaWdodDogXHRcdFx0XHRcdFx0XHRcdDcwcHggIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kY2FyZC1zdGlja3ktaGVhZGVyLWJnOiAgIFx0XHRcdFx0XHRcdCAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kY2FyZC1zdGlja3ktaGVhZGVyLWhlaWdodDogXHRcdFx0XHRcdFx0NzBweCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRjYXJkLXN0aWNreS16aW5kZXg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDEgICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGNhcmQtc3RpY2t5LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBweCAxcHggMTVweCAxcHggcmdiYSg2OSwgNjUsIDc4LCAwLjEpICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIExpc3QgZ3JvdXBcclxuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgXHRcdFx0XHQkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgIFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIE1vZGFsc1xyXG5cclxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAgICAgICAgICAgICAgXHRcdFx0XHRcdDEuNzVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBNYXJnaW4gYmV0d2VlbiBlbGVtZW50cyBpbiBmb290ZXIsIG11c3QgYmUgbG93ZXIgdGhhbiBvciBlcXVhbCB0byAyICogJG1vZGFsLWlubmVyLXBhZGRpbmdcclxuJG1vZGFsLWZvb3Rlci1tYXJnaW4tYmV0d2VlbjogICAgICAgXHRcdFx0XHQuNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC1kaWFsb2ctbWFyZ2luOiAgICAgICAgICAgICAgIFx0XHRcdFx0LjVyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgIFx0XHRcdFx0MS43NXJlbSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC1jb250ZW50LWNvbG9yOiAgICAgICAgICAgICAgIFx0XHRcdFx0bnVsbCAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgXHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogICAgICAgIFx0XHRcdFx0cmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAgICAgICAgXHRcdFx0XHQwICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICBcdFx0XHRcdCRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1pbm5lci1ib3JkZXItcmFkaXVzOiBcdFx0XHRcdCRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdzogICAgICAgXHRcdFx0XHQgICAgMCAuMjVyZW0gLjVyZW0gcmdiYSgkYmxhY2ssIC4wNSkgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6ICAgICAgIFx0XHRcdFx0MCAuMjVyZW0gLjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogICBcdFx0XHRcdFx0MCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcclxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAgICBcdFx0IFx0XHRcdCRibGFjayAhZGVmYXVsdDtcclxuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAgICAgXHRcdFx0XHQuMiAhZGVmYXVsdDtcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgXHRcdFx0XHQkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogICAgICAgICBcdFx0XHQgXHQkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogICAgICAgICBcdFx0XHRcdDFweCAhZGVmYXVsdDtcclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgXHRcdFx0XHQxcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAgIFx0XHRcdFx0MS41cmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgICBcdFx0XHRcdDEuNzVyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogICAgICAgICAgICAgIFx0XHRcdFx0JG1vZGFsLWhlYWRlci1wYWRkaW5nLXkgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7IC8vIEtlZXAgdGhpcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcclxuXHJcbiRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgXHRcdCBcdFx0XHQxMTQwcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0ODAwcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0NTAwcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0MzAwcHggIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gUGFnaW5hdGlvblxyXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICBcdFx0XHRcdCRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICBcdFx0XHRcdCRncmF5LTMwMCAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICBcdCBcdFx0XHRcdCRncmF5LTIwMCAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgXHRcdFx0XHQkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogIFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIERyb3Bkb3duc1xyXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXHJcbiRkcm9wZG93bi1ib3gtc2hhZG93Olx0XHRcdFx0XHRcdFx0XHQwcHggMHB4IDUwcHggMHB4IHJnYmEoODIsNjMsMTA1LCAwLjE1KSAhZGVmYXVsdDtcclxuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgXHRcdFx0XHQ5NiAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1tZW51LXdpZHRoczogKFxyXG5cdHNtOiAxNzVweCxcclxuXHRtZDogMjUwcHgsXHJcblx0bGc6IDM1MHB4LFxyXG5cdHhsOiA0MDBweCxcclxuXHR4eGw6IDYwMHB4XHJcbik7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuXHJcbi8vIFBvcG92ZXJzXHJcbiRwb3BvdmVyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgIFx0XHRcdFx0MC45cmVtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICBcdFx0XHRcdDI3NnB4ICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICBcdFx0XHRcdDFweCAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgXHRcdFx0XHQjZmZmZmZmICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICBcdFx0XHRcdCRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICBcdFx0XHRcdDBweCAwcHggMjBweCAwcHggcmdiYSgwLDAsMCwwLjE1KSAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLWJnOiAgICAgICAgICAgICAgICAgXHRcdFx0XHQjZmZmZmZmICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICBcdFx0XHRcdCRkYXJrICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItZm9udC13ZWlnaHQ6ICAgICAgICAgICBcdFx0XHRcdDUwMCAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kcG9wb3Zlci1oZWFkZXItZm9udC1zaXplOiAgICAgICAgICAgICBcdFx0XHRcdDFyZW0gIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgXHRcdFx0XHQxcmVtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICBcdFx0XHRcdDEuMjVyZW0gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuJHBvcG92ZXItYm9keS1jb2xvcjogICAgICAgICAgICAgICAgXHRcdFx0XHQkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBUb29sdGlwc1xyXG4kdG9vbHRpcC1mb250LXNpemU6ICAgICAgICAgICAgICAgICBcdFx0XHRcdDAuOXJlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgXHRcdFx0XHQyMDBweCAhZGVmYXVsdDtcclxuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQkZGFyay03NSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQjZmZmZmZmICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICBcdFx0XHRcdDNweCAhZGVmYXVsdDtcclxuJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgXHRcdFx0XHQxICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICBcdFx0XHRcdCRwb3BvdmVyLWJveC1zaGFkb3cgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICBcdFx0XHRcdC43NXJlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgXHRcdFx0XHQxcmVtICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBDdXN0b20gVG9hc3RzXHJcbiR0b2FzdC16aW5kZXg6XHRcdFx0XHRcdFx0XHRcdFx0XHQkemluZGV4LWRyb3Bkb3duICsgMTAwICFkZWZhdWx0O1xyXG4kdG9hc3Qtc3BhY2luZzpcdFx0XHRcdFx0XHRcdFx0XHRcdDJyZW0gICFkZWZhdWx0O1xyXG4kdG9hc3Qtd2lkdGg6IFx0XHRcdFx0XHRcdFx0XHRcdFx0MzUwcHggIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3gtc2hhZG93Olx0XHRcdFx0XHRcdFx0XHRcdCRkcm9wZG93bi1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4kdG9hc3QtaGVhZGVyLWNvbG9yOiBcdFx0XHRcdFx0XHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7XHJcbiR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogXHRcdFx0XHRcdCNmZmYgIWRlZmF1bHQ7XHJcbiR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOlx0XHRcdFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIFByb2dyZXNzIGJhcnNcclxuJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1oZWlnaHQteHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjVyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kcHJvZ3Jlc3MtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC43NXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRwcm9ncmVzcy1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgICAgICAgICAgICAgICAgICAxcyBsaW5lYXIgaW5maW5pdGUgIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCAuNnMgZWFzZSAhZGVmYXVsdDtcclxuXHJcbi8vIEJhZGdlc1xyXG4kYmFkZ2UtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICBcdFx0XHRcdC41ZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0Ljc1ZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0ODUlICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIENvZGVcclxuJGNvZGUtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRjb2RlLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjE1cmVtIDAuNXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG5cclxuLy8gTW9kYWxzXHJcbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxyXG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICAgICAgICAgICAgICAgICAgMS43NXJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLXRpdGxlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRkYXJrICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJG1vZGFsLXRpdGxlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRtb2RhbC10aXRsZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjNyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kbW9kYWwtdGl0bGUtc21hbGwtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kbW9kYWwtdGl0bGUtc21hbGwtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgNDAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJG1vZGFsLXRpdGxlLXNtYWxsLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgIDAuOXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRtb2RhbC10aXRsZS1jbG9zZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJG1vZGFsLXRpdGxlLWNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJG1vZGFsLXRpdGxlLWNsb3NlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbiRtb2RhbC1jb250ZW50LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiAgICAgICAgICAgICAgICAgICAgICAgMCAuMjVyZW0gLjVyZW0gcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogICAgICAgICAgICAgICAgICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcclxuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC41ICFkZWZhdWx0O1xyXG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLXhsOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcclxuJG1vZGFsLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDgwMHB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtbWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBQYWdpbmF0aW9uXHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1saW5lLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4yNSAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1mb2N1cy1vdXRsaW5lOiAgICAgICAgICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBBbGVydHNcclxuLy9cclxuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXHJcbiRhbGVydC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICBcdFx0XHRcdFx0JGNhcmQtYm94LXNoYWRvdyAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG5cclxuLy8gTmF2c1xyXG5cclxuJG5hdi1saW5rLXB4OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuNXJlbTtcclxuJG5hdi1saW5rLXB5OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNzVyZW07XHJcbiRuYXYtYnRuLXB4OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcmVtO1xyXG4kbmF2LXNlY3Rpb24tcHk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC41cmVtO1xyXG4kbmF2LWVsZW0tc3BhY2U6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4yNXJlbTtcclxuXHJcbiRuYXYtbGluay1iZy1ob3ZlcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0xMDA7XHJcbiRuYXYtbGluay1iZy1hY3RpdmU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDA7XHJcblxyXG4kbmF2LWhlYWRlci1weTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMXJlbTtcclxuJG5hdi1mb290ZXItcHk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFyZW07XHJcblxyXG4kbmF2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMXJlbTtcclxuJG5hdi1pY29uLXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW07XHJcbiRuYXYtaWNvbi13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAycmVtO1xyXG4iLCIvL1xyXG4vLyBPdmVycmlkZSBnbG9iYWwgdmFyaWFibGVzXHJcbi8vXHJcblxyXG4vLyBUaGVtZSBjb2xvcnNcclxuJHByaW1hcnk6ICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCM2OTkzRkY7XHJcbiRwcmltYXJ5LWhvdmVyOiAgICBcdFx0XHRcdFx0XHRcdFx0XHQjNEE3REZGO1xyXG4kcHJpbWFyeS1saWdodDogICAgXHRcdFx0XHRcdFx0XHRcdFx0I0UxRTlGRjtcclxuJHByaW1hcnktaW52ZXJzZTogIFx0XHRcdFx0XHRcdFx0XHRcdCNGRkZGRkY7XHJcbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatoriosComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-relatorios",
            templateUrl: "./relatorios.component.html",
            styleUrls: ["./relatorios.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsService"]
          }, {
            type: src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_7__["ReportsService"]
          }, {
            type: src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_8__["GruposService"]
          }, {
            type: src_app_services_pacientes_service__WEBPACK_IMPORTED_MODULE_9__["PacientesService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }];
        }, {
          container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["showReport", {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "ZDKQ":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/relatorios/relatorio-evolucao/relatorio-evolucao.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: RelatorioEvolucaoComponent */

    /***/
    function ZDKQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelatorioEvolucaoComponent", function () {
        return RelatorioEvolucaoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/reports.service */
      "KY19");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _metronic_core_pipes_mask_percentage_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../_metronic/core/pipes/mask-percentage.pipe */
      "Qg6f");
      /* harmony import */


      var _metronic_core_pipes_mask_weight_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../_metronic/core/pipes/mask-weight.pipe */
      "TV8r");

      function RelatorioEvolucaoComponent_tr_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "maskPercentage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "maskPercentage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "maskWeight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "maskWeight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "maskPercentage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var report_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r1.groupName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r1.patientName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r1.programName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getStatus(report_r1.status));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, report_r1.postingPercentage));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, report_r1.balancePercentage));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 14, report_r1.evolutionPeriod));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 16, report_r1.goal));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 18, report_r1.goalPercentage));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r1.notesTotal);
        }
      }

      var RelatorioEvolucaoComponent = /*#__PURE__*/function () {
        function RelatorioEvolucaoComponent(reportsService) {
          _classCallCheck(this, RelatorioEvolucaoComponent);

          this.reportsService = reportsService;
          this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(RelatorioEvolucaoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var report = 'total-evolution';
            var params = Object.assign({}, this.form);

            if (params['status'] == "ALL") {
              delete params["status"];
            }

            if (!params['patientId']) {
              delete params['patientId'];
            }

            delete params["report"];
            delete params["initialDate"];
            delete params["finalDate"];
            this.service$ = this.reportsService.getReport({
              report: report,
              params: params
            });
          }
        }, {
          key: "getStatus",
          value: function getStatus(value) {
            switch (value) {
              case "ACTIVE":
                console.log(value);
                return 'Ativo';

              case "COMPLETED":
                console.log(value);
                return 'Concluído';

              case "CANCELED":
                console.log(value);
                return 'Cancelado';

              default:
                console.log(value);
                return '';
            }
          }
        }]);

        return RelatorioEvolucaoComponent;
      }();

      RelatorioEvolucaoComponent.ɵfac = function RelatorioEvolucaoComponent_Factory(t) {
        return new (t || RelatorioEvolucaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReportsService"]));
      };

      RelatorioEvolucaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RelatorioEvolucaoComponent,
        selectors: [["app-relatorio-evolucao"]],
        inputs: {
          form: "form"
        },
        outputs: {
          output: "output"
        },
        decls: 29,
        vars: 3,
        consts: [["id", "tablerelatorio", 1, "table"], [1, "bg-default"], ["colspan", "10"], [4, "ngFor", "ngForOf"]],
        template: function RelatorioEvolucaoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Relat\xF3rio de Evolu\xE7\xE3o Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Grupo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Paciente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Programa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Situa\xE7\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "% Postagens");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "% Balan\xE7a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Evolu\xE7\xE3o Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Objetivo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "% Objetivo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Observa\xE7\xF5es");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RelatorioEvolucaoComponent_tr_27_Template, 26, 20, "tr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 1, ctx.service$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _metronic_core_pipes_mask_percentage_pipe__WEBPACK_IMPORTED_MODULE_3__["MaskPercentagePipe"], _metronic_core_pipes_mask_weight_pipe__WEBPACK_IMPORTED_MODULE_4__["MaskWeightPipe"]],
        styles: ["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  text-align: center;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  border-bottom: 0px solid #dee2e6;\n}\n\n.bg-default[_ngcontent-%COMP%] {\n  background-color: #d1e9f9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVsYXRvcmlvLWV2b2x1Y2FvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJyZWxhdG9yaW8tZXZvbHVjYW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCwgdGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRhYmxlIHRoZWFkIHRoIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLmJnLWRlZmF1bHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZTlmOTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatorioEvolucaoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-relatorio-evolucao',
            templateUrl: './relatorio-evolucao.component.html',
            styleUrls: ['./relatorio-evolucao.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReportsService"]
          }];
        }, {
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          output: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "oIpe":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/relatorios/relatorio-semanal/relatorio-semanal.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: RelatorioSemanalComponent */

    /***/
    function oIpe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelatorioSemanalComponent", function () {
        return RelatorioSemanalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/reports.service */
      "KY19");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _metronic_core_pipes_mask_percentage_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../_metronic/core/pipes/mask-percentage.pipe */
      "Qg6f");
      /* harmony import */


      var _metronic_core_pipes_mask_weight_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../_metronic/core/pipes/mask-weight.pipe */
      "TV8r");

      function RelatorioSemanalComponent_tr_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "maskPercentage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "maskPercentage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "maskWeight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "maskWeight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var report_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((report_r3 == null ? null : report_r3.groupName) || "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((report_r3 == null ? null : report_r3.patientName) || "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((report_r3 == null ? null : report_r3.programName) || "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((report_r3 == null ? null : report_r3.breakfastTotal) || "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((report_r3 == null ? null : report_r3.morningSnackTotal) || "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((report_r3 == null ? null : report_r3.lunchTotal) || "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((report_r3 == null ? null : report_r3.afternoonSnackTotal) || "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((report_r3 == null ? null : report_r3.dinnerTotal) || "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((report_r3 == null ? null : report_r3.hiitTotal) || "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 15, report_r3 == null ? null : report_r3.postingPercentage));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r3 == null ? null : report_r3.balanceTotal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 17, report_r3 == null ? null : report_r3.balancePercentage));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 19, report_r3 == null ? null : report_r3.evolutionPeriod));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 21, report_r3 == null ? null : report_r3.goal));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((report_r3 == null ? null : report_r3.notesTotal) || "0");
        }
      }

      function RelatorioSemanalComponent_ng_template_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Carregando resultado do relat\xF3rio...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var RelatorioSemanalComponent = /*#__PURE__*/function () {
        function RelatorioSemanalComponent(reportsService) {
          _classCallCheck(this, RelatorioSemanalComponent);

          this.reportsService = reportsService;
          this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(RelatorioSemanalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var report = 'periodic';
            var params = Object.assign({}, this.form);

            if (params['status'] == "ALL") {
              delete params["status"];
            }

            if (!params['patientId']) {
              delete params['patientId'];
            }

            delete params["report"];
            this.service$ = this.reportsService.getReport({
              report: report,
              params: params
            });
          }
        }]);

        return RelatorioSemanalComponent;
      }();

      RelatorioSemanalComponent.ɵfac = function RelatorioSemanalComponent_Factory(t) {
        return new (t || RelatorioSemanalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"]));
      };

      RelatorioSemanalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RelatorioSemanalComponent,
        selectors: [["app-relatorio-semanal"]],
        inputs: {
          form: "form"
        },
        outputs: {
          output: "output"
        },
        decls: 46,
        vars: 12,
        consts: [["id", "tablerelatorio", 1, "table"], [1, "bg-default"], ["colspan", "15"], [4, "ngFor", "ngForOf"], ["loading", ""]],
        template: function RelatorioSemanalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Relat\xF3rio Peri\xF3dico ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Grupo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Paciente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Programa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "LM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "LT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "J");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "% Postagens");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Balan\xE7a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "% Balan\xE7a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Evolu\xE7\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Objetivo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Observa\xE7\xF5es");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RelatorioSemanalComponent_tr_42_Template, 35, 23, "tr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RelatorioSemanalComponent_ng_template_44_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, ctx.form.initialDate, "dd/MM/yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 7, ctx.form.finalDate, "dd/MM/yyyy"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 10, ctx.service$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _metronic_core_pipes_mask_percentage_pipe__WEBPACK_IMPORTED_MODULE_4__["MaskPercentagePipe"], _metronic_core_pipes_mask_weight_pipe__WEBPACK_IMPORTED_MODULE_5__["MaskWeightPipe"]],
        styles: ["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  text-align: center;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  border-bottom: 0px solid #dee2e6;\n}\n\n.bg-default[_ngcontent-%COMP%] {\n  background-color: #d1e9f9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVsYXRvcmlvLXNlbWFuYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6InJlbGF0b3Jpby1zZW1hbmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgsIHRkIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWJsZSB0aGVhZCB0aCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi5iZy1kZWZhdWx0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWU5Zjk7XHJcbn0iXX0= */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          }))])])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatorioSemanalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-relatorio-semanal',
            templateUrl: './relatorio-semanal.component.html',
            styleUrls: ['./relatorio-semanal.component.scss'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 0
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 1
            }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 0
            }))])])]
          }]
        }], function () {
          return [{
            type: src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"]
          }];
        }, {
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          output: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "vGFm":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/relatorios/relatorio-concluido/relatorio-concluido.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: RelatorioConcluidoComponent */

    /***/
    function vGFm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelatorioConcluidoComponent", function () {
        return RelatorioConcluidoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/reports.service */
      "KY19");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _metronic_core_pipes_mask_percentage_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../_metronic/core/pipes/mask-percentage.pipe */
      "Qg6f");
      /* harmony import */


      var _metronic_core_pipes_mask_weight_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../_metronic/core/pipes/mask-weight.pipe */
      "TV8r");

      function RelatorioConcluidoComponent_tr_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "maskPercentage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "maskPercentage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "maskWeight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "maskWeight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var report_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r1.patientName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r1.programName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 16, report_r1.startDate, "dd/MM/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 19, report_r1.dateConclusion, "dd/MM/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r1.breakfastTotal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r1.morningSnackTotal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r1.lunchTotal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r1.afternoonSnackTotal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r1.dinnerTotal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r1.hiitTotal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 22, report_r1.postingPercentage));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r1.balanceTotal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 24, report_r1.balancePercentage));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 26, report_r1.evolutionPeriod));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 28, report_r1.goal));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r1.notesTotal);
        }
      }

      var RelatorioConcluidoComponent = /*#__PURE__*/function () {
        function RelatorioConcluidoComponent(reportsService) {
          _classCallCheck(this, RelatorioConcluidoComponent);

          this.reportsService = reportsService;
          this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(RelatorioConcluidoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var report = 'periodic';
            var params = Object.assign({}, this.form);
            params['status'] = 'COMPLETED';

            if (!params['patientId']) {
              delete params['patientId'];
            }

            delete params["report"];
            delete params["initialDate"];
            delete params["finalDate"];
            this.service$ = this.reportsService.getReport({
              report: report,
              params: params
            });
          }
        }]);

        return RelatorioConcluidoComponent;
      }();

      RelatorioConcluidoComponent.ɵfac = function RelatorioConcluidoComponent_Factory(t) {
        return new (t || RelatorioConcluidoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReportsService"]));
      };

      RelatorioConcluidoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RelatorioConcluidoComponent,
        selectors: [["app-relatorio-concluido"]],
        inputs: {
          form: "form"
        },
        outputs: {
          output: "output"
        },
        decls: 41,
        vars: 3,
        consts: [["id", "tablerelatorio", 1, "table"], [1, "bg-default"], ["colspan", "18"], [4, "ngFor", "ngForOf"]],
        template: function RelatorioConcluidoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Relat\xF3rio de Contratos Conclu\xEDdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Paciente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Programa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "In\xEDcio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Conclus\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "LM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "LT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "J");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "% Postagens");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Balan\xE7a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "% Balan\xE7a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Evolu\xE7\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Objetivo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Observa\xE7\xF5es");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, RelatorioConcluidoComponent_tr_39_Template, 39, 30, "tr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 1, ctx.service$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _metronic_core_pipes_mask_percentage_pipe__WEBPACK_IMPORTED_MODULE_3__["MaskPercentagePipe"], _metronic_core_pipes_mask_weight_pipe__WEBPACK_IMPORTED_MODULE_4__["MaskWeightPipe"]],
        styles: ["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  text-align: center;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  border-bottom: 0px solid #dee2e6;\n}\n\n.bg-default[_ngcontent-%COMP%] {\n  background-color: #d1e9f9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVsYXRvcmlvLWNvbmNsdWlkby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoicmVsYXRvcmlvLWNvbmNsdWlkby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoLCB0ZCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGFibGUgdGhlYWQgdGgge1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4uYmctZGVmYXVsdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFlOWY5O1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatorioConcluidoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-relatorio-concluido',
            templateUrl: './relatorio-concluido.component.html',
            styleUrls: ['./relatorio-concluido.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReportsService"]
          }];
        }, {
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          output: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-relatorios-relatorios-module-es5.js.map