(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-contratos-contratos-module~modules-pacientes-pacientes-module"], {
    /***/
    "3IVP":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/contratos/components/cancel-contrato-modal/cancel-contrato-modal.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: CancelContratoModalComponent */

    /***/
    function IVP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CancelContratoModalComponent", function () {
        return CancelContratoModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_metronic/core */
      "WsYS");
      /* harmony import */


      var _assets_js_layout_extended_messages_notify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../assets/js/layout/extended/messages/notify */
      "4pWf");
      /* harmony import */


      var src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/contratos.service */
      "qPuc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function CancelContratoModalComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function CancelContratoModalComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contrato est\xE1 sendo cancelado...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function CancelContratoModalComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tem certeza de que deseja ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " este contrato permanentemente?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function CancelContratoModalComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Data de cancelamento ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CancelContratoModalComponent_ng_container_7_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.cancellationDate = $event;
          })("ngModelChange", function CancelContratoModalComponent_ng_container_7_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Motivo do cancelamento ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CancelContratoModalComponent_ng_container_7_Template_textarea_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.reasonCancellation = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 3, ctx_r3.currentDate, "yyyy-MM-dd"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.cancellationDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.reasonCancellation);
        }
      }

      function CancelContratoModalComponent_ng_container_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CancelContratoModalComponent_ng_container_13_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.showFieldObservacao();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sim ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function CancelContratoModalComponent_ng_container_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CancelContratoModalComponent_ng_container_14_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Salvar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.isDisabled);
        }
      }

      var CancelContratoModalComponent = /*#__PURE__*/function () {
        function CancelContratoModalComponent(service, modal) {
          _classCallCheck(this, CancelContratoModalComponent);

          this.service = service;
          this.modal = modal;
          this.isLoading = false;
          this.isEditable = false;
          this.isDisabled = true;
          this.reasonCancellation = '';
          this.subscriptions = [];
          this.currentDate = new Date();
        }

        _createClass(CancelContratoModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showFieldObservacao",
          value: function showFieldObservacao() {
            this.isEditable = true;
          }
        }, {
          key: "cancel",
          value: function cancel() {
            var _this = this;

            this.isLoading = true;
            this.register.reasonCancellation = this.reasonCancellation;
            this.register.cancellationDate = this.cancellationDate;
            this.register.status = 'CANCELED';
            this.register.groupId = this.register.group.id;
            this.register.programId = this.register.program.id;
            var sb = this.service.updateStatusContrato(this.id, this.register).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              new _assets_js_layout_extended_messages_notify__WEBPACK_IMPORTED_MODULE_5__["Notify"]({
                message: 'Contrato cancelado com sucesso!',
                type: 'success'
              }).show();

              _this.modal.close();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              _this.modal.dismiss(err);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              _this.isLoading = false;
            })).subscribe();
            this.subscriptions.push(sb);
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            this.isDisabled = !((event === null || event === void 0 ? void 0 : event.length) > 0);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (sb) {
              return sb.unsubscribe();
            });
          }
        }]);

        return CancelContratoModalComponent;
      }();

      CancelContratoModalComponent.ɵfac = function CancelContratoModalComponent_Factory(t) {
        return new (t || CancelContratoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_6__["ContratosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
      };

      CancelContratoModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CancelContratoModalComponent,
        selectors: [["app-cancel-contrato-modal"]],
        inputs: {
          id: "id",
          nomeCliente: "nomeCliente",
          register: "register"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
          useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomAdapter"]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"],
          useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomDateParserFormatter"]
        }])],
        decls: 15,
        vars: 7,
        consts: [[4, "ngIf"], [1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"], [1, "mt-4"], ["type", "date", "name", "startDate", "placeholder", "dd/mm/yyyy", 1, "form-control", "form-control-lg", "form-control-solid", 3, "max", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Motivo do cancelamento", "autocomplete", "off", 1, "form-control", "form-control-lg", "form-control-solid", "mt-5", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "disabled", "click"]],
        template: function CancelContratoModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CancelContratoModalComponent_ng_container_0_Template, 3, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CancelContratoModalComponent_ng_container_5_Template, 3, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CancelContratoModalComponent_ng_container_6_Template, 6, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CancelContratoModalComponent_ng_container_7_Template, 9, 6, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CancelContratoModalComponent_Template_button_click_10_listener() {
              return ctx.modal.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " N\xE3o ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CancelContratoModalComponent_ng_container_13_Template, 3, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CancelContratoModalComponent_ng_container_14_Template, 3, 1, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cancelar contrato | ", ctx.nomeCliente, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditable);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5jZWwtY29udHJhdG8tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CancelContratoModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cancel-contrato-modal',
            templateUrl: './cancel-contrato-modal.component.html',
            styleUrls: ['./cancel-contrato-modal.component.scss'],
            providers: [{
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
              useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomAdapter"]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"],
              useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomDateParserFormatter"]
            }]
          }]
        }], function () {
          return [{
            type: src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_6__["ContratosService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nomeCliente: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          register: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "4pWf":
    /*!**********************************************************!*\
      !*** ./src/assets/js/layout/extended/messages/notify.js ***!
      \**********************************************************/

    /*! exports provided: Notify */

    /***/
    function pWf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Notify", function () {
        return Notify;
      });

      var Notify = /*#__PURE__*/function () {
        function Notify(opt) {
          _classCallCheck(this, Notify);

          var self = this;
          this._maskElement = null;
          this._boxElement = null;
          this._titleElement = null;
          this._closeElement = null;
          this._messages = null;
          this._contentElement = null;
          this._yesElement = null;
          this._noElement = null;
          var value_m = 10;

          if (value_m != 0 && value_m != null) {
            opt.timeout = value_m;
          } else {
            opt.timeout = 0;
          }

          this.opt = opt || {};
          this.title = opt.title || 'Mensagem';
          this.message = opt.message;
          this.time = Date.now();
          this.type = opt.type || 'info';
          this.timeout = 10 || false;
          this._progressBarInterval = null;
          this._timeoutInterval = null;

          this._errorHandler();

          this._initializers();
        }

        _createClass(Notify, [{
          key: "_initializers",
          value: function _initializers() {
            this._timeOutInit();

            this._initialize();
          }
        }, {
          key: "_errorHandler",
          value: function _errorHandler() {
            if (!this.message) {
              throw 'The "message" property is mandatory';
            }

            switch (this.type) {
              case 'success':
              case 'danger':
              case 'warning':
              case 'info':
                break;

              default:
                throw 'Unknown type: "' + this.type + '"; Set as: success, danger, warning or info';
            }
          }
        }, {
          key: "_timeOutInit",
          value: function _timeOutInit() {
            if (this.timeout && Number.isInteger(parseInt(this.timeout)) && this.timeout != 0) {
              var self = this;
              var length = 1000;
              this._progressBarInterval = setInterval(function () {
                self.typeElement.style.width = --length / 10 + '%';
              }, this.timeout);
              this._timeoutInterval = setTimeout(function () {
                self.hide();
              }, this.timeout * 1000);
            }
          }
        }, {
          key: "_saveMessage",
          value: function _saveMessage() {
            this._readMessages();

            var message = {
              title: this.title,
              message: this.message,
              text: this.text,
              time: this.time,
              type: this.type
            };

            this._messages.push(message);

            this._writeMessages();
          }
        }, {
          key: "_writeMessages",
          value: function _writeMessages() {
            localStorage.setItem('messages', JSON.stringify(this._messages));
          }
        }, {
          key: "_readMessages",
          value: function _readMessages() {
            var messages = localStorage.getItem('messages');
            this._messages = JSON.parse(messages);

            if (!this._messages) {
              this._messages = [];
            }
          }
        }, {
          key: "_initialize",
          value: function _initialize() {
            this._createBox();

            this._createContent();

            this._createTypeElement();
          }
        }, {
          key: "_createBox",
          value: function _createBox() {
            this._boxElement = document.createElement('div');
            this._boxElement.className = 'alert alert-' + this.type;
            this._boxElement.style.position = 'absolute';
            this._boxElement.style.bottom = '10px';
            this._boxElement.style.right = '10px';
            this._boxElement.style.maxHeight = '50%';
            this._boxElement.style.maxWidth = '50%';
            this._boxElement.style.minWidth = '300px';
            this._boxElement.style.zIndex = '90001';
            this._boxElement.style.borderWidth = '3px';
            this._boxElement.style.borderRadius = '10px 7px';
            var self = this;

            this._boxElement.addEventListener('click', function () {
              self.hide();
            });
          }
        }, {
          key: "_createTypeElement",
          value: function _createTypeElement() {
            var typeHeader = document.createElement('div');
            typeHeader.className = 'row m-0 w-100';
            typeHeader.style.height = '5px';
            this.typeElement = document.createElement('div');
            this.typeElement.className = "bg-white rounded-bottom rounded-top";
            this.typeElement.style.height = '100%';
            this.typeElement.style.width = '100%';
            typeHeader.append(this.typeElement);

            this._boxElement.append(typeHeader);
          }
        }, {
          key: "_createContent",
          value: function _createContent() {
            var contentContainer = document.createElement('div');
            contentContainer.className = 'mb-3 row m-0 w-100';
            this._contentElement = document.createElement('div');
            this._contentElement.className = 'col pl-1';
            this._contentElement.innerHTML = this.message;
            contentContainer.append(this._contentElement);

            this._boxElement.append(contentContainer);
          }
        }, {
          key: "show",
          value: function show() {
            var body = document.getElementsByTagName('body')[0];
            body.append(this._boxElement);
            if (this._maskElement) this._maskElement.getElementsByTagName("button")[0].focus(); // this._saveMessage();
          }
        }, {
          key: "hide",
          value: function hide() {
            clearInterval(this._progressBarInterval);
            clearInterval(this._timeoutInterval);
            var parent = this._boxElement.parentElement;
            parent.removeChild(this._boxElement);
          }
        }]);

        return Notify;
      }();
      /***/

    },

    /***/
    "Bv1/":
    /*!*******************************************************!*\
      !*** ./src/app/modules/contratos/contratos.module.ts ***!
      \*******************************************************/

    /*! exports provided: ContratosModule */

    /***/
    function Bv1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContratosModule", function () {
        return ContratosModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-inline-svg */
      "e8Ap");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../_metronic/shared/crud-table */
      "Br0f");
      /* harmony import */


      var _contratos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./contratos.component */
      "r5Qa");
      /* harmony import */


      var _components_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/form-contrato-modal/form-contrato-modal.component */
      "gH8f");
      /* harmony import */


      var _components_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/delete-contrato-modal/delete-contrato-modal.component */
      "hhUZ");
      /* harmony import */


      var _components_cancel_contrato_modal_cancel_contrato_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/cancel-contrato-modal/cancel-contrato-modal.component */
      "3IVP");
      /* harmony import */


      var _contratos_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./contratos-routing.module */
      "S7kg");
      /* harmony import */


      var _components_list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/list-contratos/list-contratos.component */
      "oits");
      /* harmony import */


      var _components_reactivate_contrato_modal_reactivate_contrato_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/reactivate-contrato-modal/reactivate-contrato-modal.component */
      "bzxI");
      /* harmony import */


      var _components_conclued_contrato_modal_conclued_contrato_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/conclued-contrato-modal/conclued-contrato-modal.component */
      "vCGz");

      var ContratosModule = function ContratosModule() {
        _classCallCheck(this, ContratosModule);
      };

      ContratosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ContratosModule
      });
      ContratosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function ContratosModule_Factory(t) {
          return new (t || ContratosModule)();
        },
        imports: [[_metronic_core_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _contratos_routing_module__WEBPACK_IMPORTED_MODULE_12__["ContratosRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGModule"], _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_7__["CRUDTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeaheadModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContratosModule, {
          declarations: [_contratos_component__WEBPACK_IMPORTED_MODULE_8__["ContratosComponent"], _components_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_9__["FormContratoModalComponent"], _components_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteContratoModalComponent"], _components_cancel_contrato_modal_cancel_contrato_modal_component__WEBPACK_IMPORTED_MODULE_11__["CancelContratoModalComponent"], _components_conclued_contrato_modal_conclued_contrato_modal_component__WEBPACK_IMPORTED_MODULE_15__["ConcluedContratoModalComponent"], _components_reactivate_contrato_modal_reactivate_contrato_modal_component__WEBPACK_IMPORTED_MODULE_14__["ReactivateContratoModalComponent"], _components_list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_13__["ListContratosComponent"]],
          imports: [_metronic_core_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _contratos_routing_module__WEBPACK_IMPORTED_MODULE_12__["ContratosRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGModule"], _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_7__["CRUDTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeaheadModule"]],
          exports: [_contratos_component__WEBPACK_IMPORTED_MODULE_8__["ContratosComponent"], _components_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_9__["FormContratoModalComponent"], _components_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteContratoModalComponent"], _components_cancel_contrato_modal_cancel_contrato_modal_component__WEBPACK_IMPORTED_MODULE_11__["CancelContratoModalComponent"], _components_conclued_contrato_modal_conclued_contrato_modal_component__WEBPACK_IMPORTED_MODULE_15__["ConcluedContratoModalComponent"], _components_reactivate_contrato_modal_reactivate_contrato_modal_component__WEBPACK_IMPORTED_MODULE_14__["ReactivateContratoModalComponent"], _components_list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_13__["ListContratosComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContratosModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: [_contratos_component__WEBPACK_IMPORTED_MODULE_8__["ContratosComponent"], _components_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_9__["FormContratoModalComponent"], _components_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteContratoModalComponent"], _components_cancel_contrato_modal_cancel_contrato_modal_component__WEBPACK_IMPORTED_MODULE_11__["CancelContratoModalComponent"], _components_conclued_contrato_modal_conclued_contrato_modal_component__WEBPACK_IMPORTED_MODULE_15__["ConcluedContratoModalComponent"], _components_reactivate_contrato_modal_reactivate_contrato_modal_component__WEBPACK_IMPORTED_MODULE_14__["ReactivateContratoModalComponent"], _components_list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_13__["ListContratosComponent"]],
            declarations: [_contratos_component__WEBPACK_IMPORTED_MODULE_8__["ContratosComponent"], _components_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_9__["FormContratoModalComponent"], _components_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteContratoModalComponent"], _components_cancel_contrato_modal_cancel_contrato_modal_component__WEBPACK_IMPORTED_MODULE_11__["CancelContratoModalComponent"], _components_conclued_contrato_modal_conclued_contrato_modal_component__WEBPACK_IMPORTED_MODULE_15__["ConcluedContratoModalComponent"], _components_reactivate_contrato_modal_reactivate_contrato_modal_component__WEBPACK_IMPORTED_MODULE_14__["ReactivateContratoModalComponent"], _components_list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_13__["ListContratosComponent"]],
            imports: [_metronic_core_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _contratos_routing_module__WEBPACK_IMPORTED_MODULE_12__["ContratosRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGModule"], _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_7__["CRUDTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeaheadModule"]],
            entryComponents: [_components_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_9__["FormContratoModalComponent"], _components_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteContratoModalComponent"], _components_cancel_contrato_modal_cancel_contrato_modal_component__WEBPACK_IMPORTED_MODULE_11__["CancelContratoModalComponent"], _components_conclued_contrato_modal_conclued_contrato_modal_component__WEBPACK_IMPORTED_MODULE_15__["ConcluedContratoModalComponent"], _components_reactivate_contrato_modal_reactivate_contrato_modal_component__WEBPACK_IMPORTED_MODULE_14__["ReactivateContratoModalComponent"], _components_list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_13__["ListContratosComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "S7kg":
    /*!***************************************************************!*\
      !*** ./src/app/modules/contratos/contratos-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ContratosRoutingModule */

    /***/
    function S7kg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContratosRoutingModule", function () {
        return ContratosRoutingModule;
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


      var _contratos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contratos.component */
      "r5Qa");

      var routes = [{
        path: '',
        component: _contratos_component__WEBPACK_IMPORTED_MODULE_2__["ContratosComponent"]
      }, {
        path: ':new_register',
        component: _contratos_component__WEBPACK_IMPORTED_MODULE_2__["ContratosComponent"]
      }, // {
      //   path: 'edit',
      //   component: EditPacienteComponent
      // },
      // {
      //   path: 'edit/:id',
      //   component: EditPacienteComponent
      // },
      {
        path: '',
        redirectTo: 'contratos',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: 'contratos',
        pathMatch: 'full'
      }];

      var ContratosRoutingModule = function ContratosRoutingModule() {
        _classCallCheck(this, ContratosRoutingModule);
      };

      ContratosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ContratosRoutingModule
      });
      ContratosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ContratosRoutingModule_Factory(t) {
          return new (t || ContratosRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContratosRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContratosRoutingModule, [{
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
    "Zd6I":
    /*!***********************************************!*\
      !*** ./src/app/services/programas.service.ts ***!
      \***********************************************/

    /*! exports provided: ProgramasService */

    /***/
    function Zd6I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgramasService", function () {
        return ProgramasService;
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


      var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_metronic/shared/crud-table */
      "Br0f");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ProgramasService = /*#__PURE__*/function (_metronic_shared_crud) {
        _inherits(ProgramasService, _metronic_shared_crud);

        var _super = _createSuper(ProgramasService);

        function ProgramasService(http) {
          var _this2;

          _classCallCheck(this, ProgramasService);

          _this2 = _super.call(this, http);
          _this2.API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/programs");
          return _this2;
        } // READ


        _createClass(ProgramasService, [{
          key: "find",
          value: function find(params) {
            return this.http.get(this.API_URL, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref) {
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
          key: "deleteItems",
          value: function deleteItems() {
            var _this3 = this;

            var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var tasks$ = [];
            ids.forEach(function (id) {
              tasks$.push(_this3["delete"](id));
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

        return ProgramasService;
      }(_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__["TableService"]);

      ProgramasService.ɵfac = function ProgramasService_Factory(t) {
        return new (t || ProgramasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ProgramasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProgramasService,
        factory: ProgramasService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgramasService, [{
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
    "bzxI":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/contratos/components/reactivate-contrato-modal/reactivate-contrato-modal.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: ReactivateContratoModalComponent */

    /***/
    function bzxI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReactivateContratoModalComponent", function () {
        return ReactivateContratoModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_metronic/core */
      "WsYS");
      /* harmony import */


      var _assets_js_layout_extended_messages_notify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../assets/js/layout/extended/messages/notify */
      "4pWf");
      /* harmony import */


      var src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/contratos.service */
      "qPuc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ReactivateContratoModalComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nova data de conclus\xE3o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReactivateContratoModalComponent_ng_container_9_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.newHiringDate = $event;
          })("ngModelChange", function ReactivateContratoModalComponent_ng_container_9_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, ctx_r0.currentDate, "yyyy-MM-dd"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newHiringDate);
        }
      }

      function ReactivateContratoModalComponent_ng_container_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReactivateContratoModalComponent_ng_container_15_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.showFieldObservacao();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sim ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ReactivateContratoModalComponent_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReactivateContratoModalComponent_ng_container_16_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.reactivate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sim ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ReactivateContratoModalComponent_ng_container_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReactivateContratoModalComponent_ng_container_17_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.reactivate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Salvar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.isDisabled && ctx_r3.register.status == "COMPLETED");
        }
      }

      var ReactivateContratoModalComponent = /*#__PURE__*/function () {
        function ReactivateContratoModalComponent(service, modal) {
          _classCallCheck(this, ReactivateContratoModalComponent);

          this.service = service;
          this.modal = modal;
          this.subscriptions = [];
          this.isEditable = false;
          this.isDisabled = true;
          this.currentDate = new Date();
        }

        _createClass(ReactivateContratoModalComponent, [{
          key: "showFieldObservacao",
          value: function showFieldObservacao() {
            this.isEditable = true;
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            this.isDisabled = !((event === null || event === void 0 ? void 0 : event.length) > 0);
          }
        }, {
          key: "reactivate",
          value: function reactivate() {
            var _this4 = this;

            this.register.status = 'ACTIVE';
            this.register.groupId = this.register.group.id;
            this.register.programId = this.register.program.id;
            delete this.register.cancellationDate;
            delete this.register.reasonCancellation;
            delete this.register.dateConclusion;

            if (this.register.status == 'COMPLETED') {
              this.register.hiringDate = this.newHiringDate;
            }

            var sb = this.service.updateStatusContrato(this.id, this.register).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              new _assets_js_layout_extended_messages_notify__WEBPACK_IMPORTED_MODULE_5__["Notify"]({
                message: 'Contrato reativado com sucesso!',
                type: 'success'
              }).show();

              _this4.modal.close();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              _this4.modal.dismiss(err);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
            })).subscribe();
            this.subscriptions.push(sb);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (sb) {
              return sb.unsubscribe();
            });
          }
        }]);

        return ReactivateContratoModalComponent;
      }();

      ReactivateContratoModalComponent.ɵfac = function ReactivateContratoModalComponent_Factory(t) {
        return new (t || ReactivateContratoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_6__["ContratosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
      };

      ReactivateContratoModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReactivateContratoModalComponent,
        selectors: [["app-reactivate-contrato-modal"]],
        inputs: {
          id: "id",
          nomeCliente: "nomeCliente",
          register: "register"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
          useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomAdapter"]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"],
          useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomDateParserFormatter"]
        }])],
        decls: 18,
        vars: 5,
        consts: [[1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], [1, "mt-4"], ["type", "date", "name", "startDate", "placeholder", "dd/mm/yyyy", 1, "form-control", "form-control-lg", "form-control-solid", 3, "min", "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "disabled", "click"]],
        template: function ReactivateContratoModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tem certeza de que deseja ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "reativar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " este contrato?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ReactivateContratoModalComponent_ng_container_9_Template, 6, 5, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReactivateContratoModalComponent_Template_button_click_12_listener() {
              return ctx.modal.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " N\xE3o ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ReactivateContratoModalComponent_ng_container_15_Template, 3, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ReactivateContratoModalComponent_ng_container_16_Template, 3, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ReactivateContratoModalComponent_ng_container_17_Template, 3, 1, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Reativar contrato | ", ctx.nomeCliente, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditable && ctx.register.status == "COMPLETED");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditable && ctx.register.status == "COMPLETED");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.status == "CANCELED");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditable && ctx.register.status == "COMPLETED");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWFjdGl2YXRlLWNvbnRyYXRvLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReactivateContratoModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-reactivate-contrato-modal',
            templateUrl: './reactivate-contrato-modal.component.html',
            styleUrls: ['./reactivate-contrato-modal.component.scss'],
            providers: [{
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
              useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomAdapter"]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"],
              useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomDateParserFormatter"]
            }]
          }]
        }], function () {
          return [{
            type: src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_6__["ContratosService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nomeCliente: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          register: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "gH8f":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/contratos/components/form-contrato-modal/form-contrato-modal.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: FormContratoModalComponent */

    /***/
    function gH8f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormContratoModalComponent", function () {
        return FormContratoModalComponent;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_metronic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_metronic/core */
      "WsYS");
      /* harmony import */


      var _assets_js_layout_extended_messages_notify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../assets/js/layout/extended/messages/notify */
      "4pWf");
      /* harmony import */


      var src_app_services_pacientes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/pacientes.service */
      "Av/U");
      /* harmony import */


      var src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/contratos.service */
      "qPuc");
      /* harmony import */


      var src_app_services_programas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/programas.service */
      "Zd6I");
      /* harmony import */


      var src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/grupos.service */
      "dtOv");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function FormContratoModalComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Alterar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function FormContratoModalComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cadastrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function FormContratoModalComponent_ng_container_3_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Visualizar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function FormContratoModalComponent_ng_container_3_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("'", ctx_r7.register.id, "'");
        }
      }

      function FormContratoModalComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormContratoModalComponent_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormContratoModalComponent_ng_container_3_ng_container_2_Template, 2, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormContratoModalComponent_ng_container_3_ng_container_3_Template, 2, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " contrato ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormContratoModalComponent_ng_container_3_ng_container_5_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.register.id && ctx_r0.register.status == "ACTIVE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.register.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.register.status == "COMPLETED" || ctx_r0.register.status == "CANCELED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.register.id);
        }
      }

      function FormContratoModalComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function FormContratoModalComponent_ng_container_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Paciente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (ctx_r8.register == null ? null : ctx_r8.register.patient == null ? null : ctx_r8.register.patient.name) || "*", " - ", (ctx_r8.register == null ? null : ctx_r8.register.patient == null ? null : ctx_r8.register.patient.phone) || "*", " ");
        }
      }

      function FormContratoModalComponent_ng_container_7_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Paciente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormContratoModalComponent_ng_container_7_div_2_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.pacienteIdContrato = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTypeahead", ctx_r9.search)("resultFormatter", ctx_r9.resultFormatBandListValue)("inputFormatter", ctx_r9.inputFormatBandListValue)("ngModel", ctx_r9.pacienteIdContrato);
        }
      }

      function FormContratoModalComponent_ng_container_7_option_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var register_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", register_r15.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", register_r15.name, " ");
        }
      }

      function FormContratoModalComponent_ng_container_7_option_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var register_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", register_r16.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", register_r16.name, " ");
        }
      }

      function FormContratoModalComponent_ng_container_7_ng_container_51_div_3_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Conclu\xEDdo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function FormContratoModalComponent_ng_container_7_ng_container_51_div_3_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancelado ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function FormContratoModalComponent_ng_container_7_ng_container_51_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormContratoModalComponent_ng_container_7_ng_container_51_div_3_ng_container_5_Template, 2, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormContratoModalComponent_ng_container_7_ng_container_51_div_3_ng_container_6_Template, 2, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.register.status == "COMPLETED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.register.status == "CANCELED");
        }
      }

      function FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Data de conclus\xE3o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx_r23.register.dateConclusion, "dd/MM/yyyy"), " ");
        }
      }

      function FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_4_div_1_Template, 7, 4, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r18.id);
        }
      }

      function FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Data de cancelamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx_r24.register.cancellationDate, "dd/MM/yyyy"), " ");
        }
      }

      function FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_5_div_1_Template, 7, 4, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r19.id);
        }
      }

      function FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Motivo do cancelamento ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r25.register.reasonCancellation || "*", " ");
        }
      }

      function FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_6_div_1_Template, 6, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r20.id);
        }
      }

      function FormContratoModalComponent_ng_container_7_ng_container_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormContratoModalComponent_ng_container_7_ng_container_51_div_3_Template, 7, 2, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_4_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_5_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_6_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r12.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.register.status == "COMPLETED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.register.status == "CANCELED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.register.status == "CANCELED");
        }
      }

      function FormContratoModalComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormContratoModalComponent_ng_container_7_div_1_Template, 6, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormContratoModalComponent_ng_container_7_div_2_Template, 6, 4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Data de in\xEDcio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Data de conclus\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Programa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Selecione");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FormContratoModalComponent_ng_container_7_option_23_Template, 2, 2, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Grupo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Selecione");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, FormContratoModalComponent_ng_container_7_option_31_Template, 2, 2, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Peso In\xEDcial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function FormContratoModalComponent_ng_container_7_Template_input_blur_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.changeWeight($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Meta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function FormContratoModalComponent_ng_container_7_Template_input_blur_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.changeWeight($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Objetivo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Observa\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "textarea", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, FormContratoModalComponent_ng_container_7_ng_container_51_Template, 7, 4, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r2.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.formContrato);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 19, ctx_r2.listProgramas$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 21, ctx_r2.listGrupos$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.isControlInvalid("startingWeight"))("is-valid", ctx_r2.isControlValid("startingWeight"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.isControlInvalid("goal"))("is-valid", ctx_r2.isControlValid("goal"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r2.sumObjetivo());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.isControlInvalid("notes"))("is-valid", ctx_r2.isControlValid("notes"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.register.status == "COMPLETED" || ctx_r2.register.status == "CANCELED");
        }
      }

      function FormContratoModalComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormContratoModalComponent_ng_container_9_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Salvar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.formContrato.invalid);
        }
      }

      var EMPTY_CONTRATO = {
        id: undefined,
        programId: 0,
        groupId: 0,
        patientId: 0,
        startingWeight: 0,
        goal: 0,
        hiringDate: "",
        startDate: "",
        notes: "",
        status: "ACTIVE"
      };

      var FormContratoModalComponent = /*#__PURE__*/function () {
        function FormContratoModalComponent(pacienteService, registersService, programasService, gruposService, fb, modal) {
          var _this5 = this;

          _classCallCheck(this, FormContratoModalComponent);

          this.pacienteService = pacienteService;
          this.registersService = registersService;
          this.programasService = programasService;
          this.gruposService = gruposService;
          this.fb = fb;
          this.modal = modal;
          this.subscriptions = [];

          this.formatMatches = function (value) {
            return value.name || '';
          };

          this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (val) {
              return _this5.pacienteService.findByDescriptionPaciente(val);
            }));
          };
        }

        _createClass(FormContratoModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pacienteIdContrato = 0;
            this.listProgramas$ = this.programasService.findParams({
              params: {
                page: '0',
                size: '9999'
              }
            });
            this.listGrupos$ = this.gruposService.findParams({
              params: {
                page: '0',
                size: '9999'
              }
            });
            this.minDate = this.minDatepicker(new Date());
            this.isLoading$ = this.registersService.isLoading$;
            this.loadRegister();
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
        }, {
          key: "loadRegister",
          value: function loadRegister() {
            if (!this.id) {
              this.register = Object.assign({}, EMPTY_CONTRATO);
            }

            this.loadForm();
          }
        }, {
          key: "loadForm",
          value: function loadForm() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;

            this.pacienteIdContrato = ((_b = (_a = this.register) === null || _a === void 0 ? void 0 : _a.program) === null || _b === void 0 ? void 0 : _b.id) || this.register.programId;
            this.formContrato = this.fb.group({
              patientId: [{
                value: ((_d = (_c = this.register) === null || _c === void 0 ? void 0 : _c.patient) === null || _d === void 0 ? void 0 : _d.id) || this.register.patientId,
                disabled: this.register.status != "ACTIVE"
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])],
              programId: [{
                value: ((_f = (_e = this.register) === null || _e === void 0 ? void 0 : _e.program) === null || _f === void 0 ? void 0 : _f.id) || this.register.programId,
                disabled: this.register.status != "ACTIVE"
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])],
              groupId: [{
                value: ((_h = (_g = this.register) === null || _g === void 0 ? void 0 : _g.group) === null || _h === void 0 ? void 0 : _h.id) || this.register.groupId,
                disabled: this.register.status != "ACTIVE"
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])],
              status: [{
                value: this.register.status,
                disabled: this.register.status != "ACTIVE"
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])],
              startingWeight: [{
                value: this.setValueAroud(this.register.startingWeight),
                disabled: this.register.status != "ACTIVE"
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])],
              goal: [{
                value: this.setValueAroud(this.register.goal),
                disabled: this.register.status != "ACTIVE"
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])],
              hiringDate: [{
                value: this.register.hiringDate,
                disabled: this.register.status != "ACTIVE"
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])],
              startDate: [{
                value: this.register.startDate,
                disabled: this.register.status != "ACTIVE"
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])],
              dateConclusion: [{
                value: this.register.dateConclusion,
                disabled: this.register.status != "ACTIVE"
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])],
              cancellationDate: [{
                value: this.register.cancellationDate,
                disabled: this.register.status != "ACTIVE"
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])],
              reasonCancellation: [{
                value: this.register.reasonCancellation,
                disabled: this.register.status != "ACTIVE"
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])],
              notes: [{
                value: this.register.notes,
                disabled: this.register.status != "ACTIVE"
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])],
              objetivo: [{
                value: ((this.register.goal || 0) - (((_j = this.register) === null || _j === void 0 ? void 0 : _j.startingWeight) || 0)).toFixed(3),
                disabled: this.register.status != "ACTIVE"
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])]
            });
          }
        }, {
          key: "setValueAroud",
          value: function setValueAroud(value) {
            return value !== '' && !!value ? parseFloat(value).toFixed(3) : 0.000;
          }
        }, {
          key: "save",
          value: function save() {
            this.prepareRegister();

            if (this.id) {
              this.edit();
            } else {
              this.create();
            }
          }
        }, {
          key: "edit",
          value: function edit() {
            var _this6 = this;

            var sbUpdate = this.registersService.update(this.register).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
              if (!!!res) {
                new _assets_js_layout_extended_messages_notify__WEBPACK_IMPORTED_MODULE_6__["Notify"]({
                  message: 'Contrato atualizado com sucesso!',
                  type: 'success'
                }).show();

                _this6.modal.close();
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (errorMessage) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this6.register);
            })).subscribe(function (res) {
              return _this6.register = res;
            });
            console.log(sbUpdate);
            this.subscriptions.push(sbUpdate);
          }
        }, {
          key: "create",
          value: function create() {
            var _this7 = this;

            var sbCreate = this.registersService.create(this.register).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
              if (!!!res) {
                new _assets_js_layout_extended_messages_notify__WEBPACK_IMPORTED_MODULE_6__["Notify"]({
                  message: 'Contrato criado com sucesso!',
                  type: 'success'
                }).show();

                _this7.modal.close();
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (errorMessage) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this7.register);
            })).subscribe(function (res) {
              return _this7.register = res;
            });
            this.subscriptions.push(sbCreate);
          }
        }, {
          key: "prepareRegister",
          value: function prepareRegister() {
            var _a;

            var formData = this.formContrato.value;
            this.register.patientId = Number(((_a = this.pacienteIdContrato) === null || _a === void 0 ? void 0 : _a.id) || this.pacienteIdContrato);
            this.register.programId = Number(formData.programId);
            this.register.groupId = Number(formData.groupId);
            this.register.startDate = formData.startDate;
            this.register.startingWeight = formData.startingWeight;
            this.register.goal = formData.goal;
            this.register.hiringDate = formData.hiringDate;
            this.register.notes = formData.notes;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (sb) {
              return sb.unsubscribe();
            });
          } // helpers for View

        }, {
          key: "isControlValid",
          value: function isControlValid(controlName) {
            var control = this.formContrato.controls[controlName];
            return control.valid && (control.dirty || control.touched);
          }
        }, {
          key: "isControlInvalid",
          value: function isControlInvalid(controlName) {
            var control = this.formContrato.controls[controlName];
            return control.invalid && (control.dirty || control.touched);
          }
        }, {
          key: "controlHasError",
          value: function controlHasError(validation, controlName) {
            var control = this.formContrato.controls[controlName];
            return control.hasError(validation) && (control.dirty || control.touched);
          }
        }, {
          key: "isControlTouched",
          value: function isControlTouched(controlName) {
            var control = this.formContrato.controls[controlName];
            return control.dirty || control.touched;
          }
        }, {
          key: "sumObjetivo",
          value: function sumObjetivo() {
            var formData = this.formContrato.value;
            return (((formData === null || formData === void 0 ? void 0 : formData.goal) || 0) - ((formData === null || formData === void 0 ? void 0 : formData.startingWeight) || 0)).toFixed(3);
          }
        }, {
          key: "isDisabled",
          value: function isDisabled() {
            var formData = this.formContrato.value;

            if (!!formData.startDate) {
              var date = new Date(formData.startDate);
              var hiringDate = new Date(formData.hiringDate);
              this.minDateConclusao = this.minDatepicker(date.addDays(1));
              this.maxDateStart = this.minDatepicker(hiringDate);
              return false;
            }

            return true;
          }
        }, {
          key: "minDatepicker",
          value: function minDatepicker(day) {
            return {
              year: day.getFullYear(),
              month: Number(String(day.getMonth() + 1).padStart(2, "0")),
              day: Number(String(day.getDate()).padStart(2, "0"))
            };
          }
        }, {
          key: "paginate",
          value: function paginate(paginator) {
            this.pacienteService.patchState({
              paginator: paginator
            });
          }
        }, {
          key: "changeWeight",
          value: function changeWeight(event) {
            if (event.target.value !== '') {
              event.target.value = parseFloat(event.target.value).toFixed(3);
            }
          }
        }]);

        return FormContratoModalComponent;
      }();

      FormContratoModalComponent.ɵfac = function FormContratoModalComponent_Factory(t) {
        return new (t || FormContratoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pacientes_service__WEBPACK_IMPORTED_MODULE_7__["PacientesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_8__["ContratosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_programas_service__WEBPACK_IMPORTED_MODULE_9__["ProgramasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_10__["GruposService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]));
      };

      FormContratoModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormContratoModalComponent,
        selectors: [["app-form-contrato-modal"]],
        inputs: {
          id: "id",
          register: "register"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"],
          useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_5__["CustomAdapter"]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"],
          useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_5__["CustomDateParserFormatter"]
        }])],
        decls: 12,
        vars: 6,
        consts: [[1, "modal-content"], [1, "modal-header"], ["id", "example-modal-sizes-title-lg", 1, "modal-title", "h4"], [4, "ngIf"], [1, "overlay", "overlay-block", "cursor-default", "modal-body", 2, "min-height", "404px"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-2", 3, "click"], [1, "overlay-layer", "bg-transparent"], [1, "spinner", "spinner-lg", "spinner-success"], ["class", "col-lg-12 pb-5", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], ["action", "#", 1, "form", "form-label-right", 3, "formGroup"], [1, "col-lg-12"], [1, "form-group", "row"], [1, "col-lg-6"], [1, "input-group", "input-group-solid"], ["type", "date", "name", "startDate", "placeholder", "dd/mm/yyyy", "formControlName", "startDate", 1, "form-control", "form-control-lg", "form-control-solid"], ["type", "date", "name", "hiringDate", "placeholder", "dd/mm/yyyy", "formControlName", "hiringDate", 1, "form-control", "form-control-lg", "form-control-solid"], ["formControlName", "programId", 1, "form-control", "form-control-lg", "form-control-solid"], ["value", "0", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "groupId", 1, "form-control", "form-control-lg", "form-control-solid"], [1, "col-lg-4"], [1, "form-label"], ["type", "number", "max", "600", "step", ",001", "placeholder", "Peso In\xEDcial", "autocomplete", "off", "formControlName", "startingWeight", "name", "startingWeight", 1, "form-control", "form-control-lg", "form-control-solid", 3, "blur"], ["type", "number", "max", "600", "step", ",001", "placeholder", "Meta", "autocomplete", "off", "formControlName", "goal", "name", "goal", 1, "form-control", "form-control-lg", "form-control-solid", 3, "blur"], ["type", "number", "name", "objetivo", "placeholder", "Objetivo", "autocomplete", "off", "formControlName", "objetivo", "disabled", "", 1, "form-control", "form-control-lg", "form-control-solid", 3, "value"], ["type", "text", "name", "notes", "placeholder", "Observa\xE7\xE3o", "autocomplete", "off", "formControlName", "notes", 1, "form-control", "form-control-lg", "form-control-solid"], [1, "col-lg-12", "pb-5"], [1, "form-control", "form-control-lg", "form-control-solid"], [1, "form-group"], ["type", "text", "placeholder", "Pesquisar", 1, "form-control", "form-control-lg", "form-control-solid", 3, "ngbTypeahead", "resultFormatter", "inputFormatter", "ngModel", "ngModelChange"], [3, "value"], [1, "row", "col-lg-12"], ["class", "col-lg-6 pb-5", 4, "ngIf"], [1, "col-lg-6", "pb-5"], ["type", "submit", 1, "btn", "btn-success", "btn-elevate", 3, "disabled", "click"]],
        template: function FormContratoModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormContratoModalComponent_ng_container_3_Template, 6, 4, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormContratoModalComponent_ng_container_5_Template, 3, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormContratoModalComponent_ng_container_7_Template, 52, 23, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormContratoModalComponent_ng_container_9_Template, 3, 1, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormContratoModalComponent_Template_button_click_10_listener() {
              return ctx.modal.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Fechar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.isLoading$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register && ctx.register.status == "ACTIVE");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]],
        styles: [".input-group-append[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGZvcm0tY29udHJhdG8tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoiZm9ybS1jb250cmF0by1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cC1hcHBlbmQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormContratoModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-form-contrato-modal",
            templateUrl: "./form-contrato-modal.component.html",
            styleUrls: ["./form-contrato-modal.component.scss"],
            providers: [{
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"],
              useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_5__["CustomAdapter"]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"],
              useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_5__["CustomDateParserFormatter"]
            }]
          }]
        }], function () {
          return [{
            type: src_app_services_pacientes_service__WEBPACK_IMPORTED_MODULE_7__["PacientesService"]
          }, {
            type: src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_8__["ContratosService"]
          }, {
            type: src_app_services_programas_service__WEBPACK_IMPORTED_MODULE_9__["ProgramasService"]
          }, {
            type: src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_10__["GruposService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          register: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "hhUZ":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/contratos/components/delete-contrato-modal/delete-contrato-modal.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: DeleteContratoModalComponent */

    /***/
    function hhUZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteContratoModalComponent", function () {
        return DeleteContratoModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/contratos.service */
      "qPuc");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DeleteContratoModalComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function DeleteContratoModalComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Paciente sendo exclu\xEDdo...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function DeleteContratoModalComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tem certeza de que deseja excluir este registro permanentemente?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      var DeleteContratoModalComponent = /*#__PURE__*/function () {
        function DeleteContratoModalComponent(service, modal) {
          _classCallCheck(this, DeleteContratoModalComponent);

          this.service = service;
          this.modal = modal;
          this.isLoading = false;
          this.subscriptions = [];
        }

        _createClass(DeleteContratoModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "delete",
          value: function _delete() {
            var _this8 = this;

            this.isLoading = true;
            var sb = this.service["delete"](this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), // Remove it from your code (just for showing loading)
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this8.modal.close();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              _this8.modal.dismiss(err);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
              _this8.isLoading = false;
            })).subscribe();
            this.subscriptions.push(sb);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (sb) {
              return sb.unsubscribe();
            });
          }
        }]);

        return DeleteContratoModalComponent;
      }();

      DeleteContratoModalComponent.ɵfac = function DeleteContratoModalComponent_Factory(t) {
        return new (t || DeleteContratoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_3__["ContratosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]));
      };

      DeleteContratoModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DeleteContratoModalComponent,
        selectors: [["app-delete-contrato-modal"]],
        inputs: {
          id: "id"
        },
        decls: 14,
        vars: 3,
        consts: [[4, "ngIf"], [1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-elevate", 3, "click"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"]],
        template: function DeleteContratoModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DeleteContratoModalComponent_ng_container_0_Template, 3, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Excluir Paciente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DeleteContratoModalComponent_ng_container_5_Template, 3, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DeleteContratoModalComponent_ng_container_6_Template, 3, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteContratoModalComponent_Template_button_click_9_listener() {
              return ctx.modal.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Cancelar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteContratoModalComponent_Template_button_click_12_listener() {
              return ctx["delete"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Excluir ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtY29udHJhdG8tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteContratoModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-delete-contrato-modal',
            templateUrl: './delete-contrato-modal.component.html',
            styleUrls: ['./delete-contrato-modal.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_3__["ContratosService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "oits":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/contratos/components/list-contratos/list-contratos.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ListContratosComponent */

    /***/
    function oits(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListContratosComponent", function () {
        return ListContratosComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _cancel_contrato_modal_cancel_contrato_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../cancel-contrato-modal/cancel-contrato-modal.component */
      "3IVP");
      /* harmony import */


      var _conclued_contrato_modal_conclued_contrato_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../conclued-contrato-modal/conclued-contrato-modal.component */
      "vCGz");
      /* harmony import */


      var _delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../delete-contrato-modal/delete-contrato-modal.component */
      "hhUZ");
      /* harmony import */


      var _form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../form-contrato-modal/form-contrato-modal.component */
      "gH8f");
      /* harmony import */


      var _reactivate_contrato_modal_reactivate_contrato_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../reactivate-contrato-modal/reactivate-contrato-modal.component */
      "bzxI");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _services_contratos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../services/contratos.service */
      "qPuc");
      /* harmony import */


      var src_app_services_programas_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/programas.service */
      "Zd6I");
      /* harmony import */


      var src_app_services_pacientes_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/pacientes.service */
      "Av/U");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../_metronic/shared/crud-table/components/sort-icon/sort-icon.component */
      "xGIk");
      /* harmony import */


      var _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../_metronic/shared/crud-table/components/paginator/paginator.component */
      "gBr1");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-inline-svg */
      "e8Ap");
      /* harmony import */


      var _metronic_core_pipes_mask_weight_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../_metronic/core/pipes/mask-weight.pipe */
      "TV8r");

      function ListContratosComponent_option_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var register_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", register_r2.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](register_r2.name);
        }
      }

      function ListContratosComponent_tr_60_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ativo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ListContratosComponent_tr_60_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Conclu\xEDdo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ListContratosComponent_tr_60_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancelado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ListContratosComponent_tr_60_ng_container_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListContratosComponent_tr_60_ng_container_28_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var register_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.editRegister(register_r3.id, register_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListContratosComponent_tr_60_ng_container_28_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var register_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.cancelContrato(register_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListContratosComponent_tr_60_ng_container_28_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var register_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.concluedContrato(register_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Files/Deleted-file.svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Code/Lock-circle.svg");
        }
      }

      function ListContratosComponent_tr_60_ng_container_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListContratosComponent_tr_60_ng_container_29_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var register_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.editRegister(register_r3.id, register_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Visible.svg");
        }
      }

      function ListContratosComponent_tr_60_ng_container_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListContratosComponent_tr_60_ng_container_30_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var register_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.reactivateContrato(register_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Unlock.svg");
        }
      }

      function ListContratosComponent_tr_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListContratosComponent_tr_60_ng_container_5_Template, 2, 0, "ng-container", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListContratosComponent_tr_60_ng_container_6_Template, 2, 0, "ng-container", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListContratosComponent_tr_60_ng_container_7_Template, 2, 0, "ng-container", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "maskWeight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "maskWeight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "maskWeight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ListContratosComponent_tr_60_ng_container_28_Template, 7, 3, "ng-container", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ListContratosComponent_tr_60_ng_container_29_Template, 3, 1, "ng-container", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ListContratosComponent_tr_60_ng_container_30_Template, 3, 1, "ng-container", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var register_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((register_r3 == null ? null : register_r3.patient == null ? null : register_r3.patient.name) || "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("label-light-danger", register_r3.status === "CANCELED")("label-light-success", register_r3.status === "ACTIVE")("label-light-info", register_r3.status === "COMPLETED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", register_r3.status === "ACTIVE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", register_r3.status === "COMPLETED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", register_r3.status === "CANCELED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](register_r3.program.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](register_r3.group.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 20, register_r3.startDate, "dd/MM/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 23, register_r3.hiringDate, "dd/MM/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 26, register_r3.startingWeight));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 28, register_r3.goal));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 30, register_r3.goal - register_r3.startingWeight));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", register_r3.status === "ACTIVE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", register_r3.status != "ACTIVE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", register_r3.status != "ACTIVE");
        }
      }

      var ListContratosComponent = /*#__PURE__*/function () {
        function ListContratosComponent(fb, modalService, service, programasService, pacienteService) {
          var _this9 = this;

          _classCallCheck(this, ListContratosComponent);

          this.fb = fb;
          this.modalService = modalService;
          this.service = service;
          this.programasService = programasService;
          this.pacienteService = pacienteService;
          this.subscriptions = [];

          this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (val) {
              return _this9.pacienteService.findByDescriptionPaciente(val);
            }));
          };
        }

        _createClass(ListContratosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.service.setDefaults();
            this.service.fetch();
            this.grouping = this.service.grouping;
            this.paginator = this.service.paginator;
            this.sorting = this.service.sorting;
            var sb = this.service.isLoading$.subscribe(function (res) {
              return _this10.isLoading = res;
            });
            this.subscriptions.push(sb);
            this.listProgramas$ = this.programasService.findParams({
              params: {
                page: '0',
                size: '9999'
              }
            });
            this.filterForm();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (sb) {
              return sb.unsubscribe();
            });
          } // filtration

        }, {
          key: "filterForm",
          value: function filterForm() {
            var _this11 = this;

            this.filterGroup = this.fb.group({
              status: [""],
              programId: [""],
              patientId: [""]
            });
            this.subscriptions.push(this.filterGroup.controls.status.valueChanges.subscribe(function () {
              return _this11.filter();
            }));
            this.subscriptions.push(this.filterGroup.controls.programId.valueChanges.subscribe(function () {
              return _this11.filter();
            }));
            this.subscriptions.push(this.filterGroup.controls.patientId.valueChanges.subscribe(function () {
              if (typeof _this11.filterGroup.get('patientId').value === 'object') {
                _this11.filter();
              } else {
                if (_this11.filterGroup.get('patientId').value === '') {
                  _this11.filter();
                }
              }
            }));
          }
        }, {
          key: "filter",
          value: function filter() {
            var filter = {};
            var status = this.filterGroup.get("status").value;
            filter["status"] = status;
            var programId = this.filterGroup.get("programId").value;
            filter["programId"] = programId;
            var patientId = this.filterGroup.get("patientId").value;

            if (typeof this.filterGroup.get("patientId").value === 'object') {
              filter["patientId"] = patientId.id;
            } else {
              filter["patientId"] = undefined;
            }

            this.service.patchState({
              filter: filter
            });
          } // sorting

        }, {
          key: "sort",
          value: function sort(column) {
            var sorting = this.sorting;
            var isActiveColumn = sorting.column === column;

            if (!isActiveColumn) {
              sorting.column = column;
              sorting.direction = "asc";
            } else {
              sorting.direction = sorting.direction === "asc" ? "desc" : "asc";
            }

            this.service.patchState({
              sorting: sorting
            });
          } // pagination

        }, {
          key: "paginate",
          value: function paginate(paginator) {
            this.service.patchState({
              paginator: paginator
            });
          } // // form actions

        }, {
          key: "create",
          value: function create() {
            this.edit(undefined);
          }
        }, {
          key: "edit",
          value: function edit(id) {
            var _this12 = this;

            var modalRef = this.modalService.open(_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_5__["FormContratoModalComponent"], {
              size: "xl"
            });
            modalRef.componentInstance.id = id;
            modalRef.result.then(function () {
              return _this12.service.fetch();
            }, function () {});
          }
        }, {
          key: "editRegister",
          value: function editRegister(id, register) {
            var _this13 = this;

            var modalRef = this.modalService.open(_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_5__["FormContratoModalComponent"], {
              size: "xl"
            });
            modalRef.componentInstance.id = id;
            modalRef.componentInstance.register = register;
            modalRef.result.then(function () {
              return _this13.service.fetch();
            }, function () {});
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this14 = this;

            var modalRef = this.modalService.open(_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_4__["DeleteContratoModalComponent"]);
            modalRef.componentInstance.id = id;
            modalRef.result.then(function () {
              return _this14.service.fetch();
            }, function () {});
          }
        }, {
          key: "cancelContrato",
          value: function cancelContrato(register) {
            var _this15 = this;

            var modalRef = this.modalService.open(_cancel_contrato_modal_cancel_contrato_modal_component__WEBPACK_IMPORTED_MODULE_2__["CancelContratoModalComponent"]);
            modalRef.componentInstance.id = register.id;
            modalRef.componentInstance.nomeCliente = "".concat(register.patient.name, " - ").concat(register.patient.phone);
            modalRef.componentInstance.register = register;
            modalRef.result.then(function () {
              return _this15.service.fetch();
            }, function () {});
          }
        }, {
          key: "reactivateContrato",
          value: function reactivateContrato(register) {
            var _this16 = this;

            var modalRef = this.modalService.open(_reactivate_contrato_modal_reactivate_contrato_modal_component__WEBPACK_IMPORTED_MODULE_6__["ReactivateContratoModalComponent"]);
            modalRef.componentInstance.id = register.id;
            modalRef.componentInstance.nomeCliente = "".concat(register.patient.name, " - ").concat(register.patient.phone);
            modalRef.componentInstance.register = register;
            modalRef.result.then(function () {
              return _this16.service.fetch();
            }, function () {});
          }
        }, {
          key: "concluedContrato",
          value: function concluedContrato(register) {
            var _this17 = this;

            var modalRef = this.modalService.open(_conclued_contrato_modal_conclued_contrato_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConcluedContratoModalComponent"]);
            modalRef.componentInstance.id = register.id;
            modalRef.componentInstance.nomeCliente = "".concat(register.patient.name, " - ").concat(register.patient.phone);
            modalRef.componentInstance.register = register;
            modalRef.result.then(function () {
              return _this17.service.fetch();
            }, function () {});
          }
        }, {
          key: "deleteSelected",
          value: function deleteSelected() {
            var _this18 = this;

            var modalRef = this.modalService.open(_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_4__["DeleteContratoModalComponent"]);
            modalRef.componentInstance.ids = this.grouping.getSelectedRows();
            modalRef.result.then(function () {
              return _this18.service.fetch();
            }, function () {});
          }
        }, {
          key: "updateStatusForSelected",
          value: function updateStatusForSelected() {
            var _this19 = this;

            var modalRef = this.modalService.open(_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_4__["DeleteContratoModalComponent"]);
            modalRef.componentInstance.ids = this.grouping.getSelectedRows();
            modalRef.result.then(function () {
              return _this19.service.fetch();
            }, function () {});
          }
        }, {
          key: "fetchSelected",
          value: function fetchSelected() {
            var _this20 = this;

            var modalRef = this.modalService.open(_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_4__["DeleteContratoModalComponent"]);
            modalRef.componentInstance.ids = this.grouping.getSelectedRows();
            modalRef.result.then(function () {
              return _this20.service.fetch();
            }, function () {});
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

        return ListContratosComponent;
      }();

      ListContratosComponent.ɵfac = function ListContratosComponent_Factory(t) {
        return new (t || ListContratosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contratos_service__WEBPACK_IMPORTED_MODULE_9__["ContratosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_programas_service__WEBPACK_IMPORTED_MODULE_10__["ProgramasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pacientes_service__WEBPACK_IMPORTED_MODULE_11__["PacientesService"]));
      };

      ListContratosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListContratosComponent,
        selectors: [["app-list-contratos"]],
        inputs: {
          paciente: "paciente"
        },
        decls: 63,
        vars: 29,
        consts: [[1, "mt-5"], [1, "form", "form-label-right"], [1, "form-group", "row"], [1, "col-lg-12"], [1, "row", 3, "formGroup"], [1, "col-lg-4"], [1, "form-text", "text-muted"], ["name", "status", "placeholder", "Filtro por status", "formControlName", "status", 1, "form-control"], ["value", ""], ["value", "ACTIVE"], ["value", "COMPLETED"], ["value", "CANCELED"], ["placeholder", "Filtro por Programa", "name", "programId", "formControlName", "programId", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Pesquisar", "formControlName", "patientId", 1, "form-control", 3, "ngbTypeahead", "resultFormatter", "inputFormatter"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-head-custom", "table-vertical-center", "overflow-hidden"], ["column", "patient", 3, "activeColumn", "activeDirection", "sort"], ["column", "status", 3, "activeColumn", "activeDirection", "sort"], ["column", "program", 3, "activeColumn", "activeDirection", "sort"], ["column", "group", 3, "activeColumn", "activeDirection", "sort"], ["column", "startDate", 3, "activeColumn", "activeDirection", "sort"], ["column", "hiringDate", 3, "activeColumn", "activeDirection", "sort"], ["column", "startingWeight", 3, "activeColumn", "activeDirection", "sort"], ["column", "goal", 3, "activeColumn", "activeDirection", "sort"], ["column", "objetivo", 3, "activeColumn"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", 3, "paginator", "isLoading", "paginate"], [3, "value"], [1, "label", "label-lg", "label-inline", "w-100"], [4, "ngIf"], [2, "display", "flex"], ["title", "Alterar", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], ["title", "Cancelar", 1, "btn", "btn-icon", "btn-light", "btn-hover-danger", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-danger", 3, "inlineSVG"], ["title", "Encerrar", 1, "btn", "btn-icon", "btn-light", "btn-hover-info", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-info", 3, "inlineSVG"], ["title", "Visualizar", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["title", "Reativar", 1, "btn", "btn-icon", "btn-light", "btn-hover-success", "btn-sm", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-success", 3, "inlineSVG"]],
        template: function ListContratosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Situa\xE7\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Todos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ativo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Conclu\xEDdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancelado");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Programa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Todos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ListContratosComponent_option_23_Template, 2, 2, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Paciente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " PACIENTE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "app-sort-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ListContratosComponent_Template_app_sort_icon_sort_34_listener($event) {
              return ctx.sort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " SITUA\xC7\xC3O ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "app-sort-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ListContratosComponent_Template_app_sort_icon_sort_37_listener($event) {
              return ctx.sort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " PROGRAMA ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "app-sort-icon", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ListContratosComponent_Template_app_sort_icon_sort_40_listener($event) {
              return ctx.sort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " GRUPO ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "app-sort-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ListContratosComponent_Template_app_sort_icon_sort_43_listener($event) {
              return ctx.sort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " IN\xCDCIO ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "app-sort-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ListContratosComponent_Template_app_sort_icon_sort_46_listener($event) {
              return ctx.sort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " CONCLUS\xC3O ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "app-sort-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ListContratosComponent_Template_app_sort_icon_sort_49_listener($event) {
              return ctx.sort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " PESO INICIAL ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "app-sort-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ListContratosComponent_Template_app_sort_icon_sort_52_listener($event) {
              return ctx.sort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " META ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "app-sort-icon", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ListContratosComponent_Template_app_sort_icon_sort_55_listener($event) {
              return ctx.sort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " OBJETIVO ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "app-sort-icon", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ListContratosComponent_tr_60_Template, 31, 32, "tr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "app-paginator", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paginate", function ListContratosComponent_Template_app_paginator_paginate_62_listener($event) {
              return ctx.paginate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.filterGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 25, ctx.listProgramas$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTypeahead", ctx.search)("resultFormatter", ctx.resultFormatBandListValue)("inputFormatter", ctx.inputFormatBandListValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 27, ctx.service.items$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paginator", ctx.paginator)("isLoading", ctx.isLoading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTypeahead"], _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_13__["SortIconComponent"], _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_14__["PaginatorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_15__["InlineSVGDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _metronic_core_pipes_mask_weight_pipe__WEBPACK_IMPORTED_MODULE_16__["MaskWeightPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWNvbnRyYXRvcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListContratosComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-list-contratos",
            templateUrl: "./list-contratos.component.html",
            styleUrls: ["./list-contratos.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]
          }, {
            type: _services_contratos_service__WEBPACK_IMPORTED_MODULE_9__["ContratosService"]
          }, {
            type: src_app_services_programas_service__WEBPACK_IMPORTED_MODULE_10__["ProgramasService"]
          }, {
            type: src_app_services_pacientes_service__WEBPACK_IMPORTED_MODULE_11__["PacientesService"]
          }];
        }, {
          paciente: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "qPuc":
    /*!***********************************************!*\
      !*** ./src/app/services/contratos.service.ts ***!
      \***********************************************/

    /*! exports provided: ContratosService */

    /***/
    function qPuc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContratosService", function () {
        return ContratosService;
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

      var ContratosService = /*#__PURE__*/function (_metronic_shared_crud2) {
        _inherits(ContratosService, _metronic_shared_crud2);

        var _super2 = _createSuper(ContratosService);

        function ContratosService(http) {
          var _this21;

          _classCallCheck(this, ContratosService);

          _this21 = _super2.call(this, http);
          _this21.API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/agreements");
          return _this21;
        }

        _createClass(ContratosService, [{
          key: "find",
          value: function find(params) {
            return this.http.get(this.API_URL, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref2) {
              var data = _ref2.data,
                  meta = _ref2.meta;

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
            var _this22 = this;

            var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var tasks$ = [];
            ids.forEach(function (id) {
              tasks$.push(_this22["delete"](id));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(tasks$);
          }
        }, {
          key: "updateStatusContrato",
          value: function updateStatusContrato(id, register) {
            return this.http.put("".concat(this.API_URL, "/").concat(id), register);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (sb) {
              return sb.unsubscribe();
            });
          }
        }]);

        return ContratosService;
      }(_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["TableService"]);

      ContratosService.ɵfac = function ContratosService_Factory(t) {
        return new (t || ContratosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ContratosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ContratosService,
        factory: ContratosService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContratosService, [{
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
    "r5Qa":
    /*!**********************************************************!*\
      !*** ./src/app/modules/contratos/contratos.component.ts ***!
      \**********************************************************/

    /*! exports provided: ContratosComponent */

    /***/
    function r5Qa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContratosComponent", function () {
        return ContratosComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/form-contrato-modal/form-contrato-modal.component */
      "gH8f");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _services_contratos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/contratos.service */
      "qPuc");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/list-contratos/list-contratos.component */
      "oits");

      var ContratosComponent = /*#__PURE__*/function () {
        function ContratosComponent(modalService, service, route) {
          _classCallCheck(this, ContratosComponent);

          this.modalService = modalService;
          this.service = service;
          this.route = route;
        }

        _createClass(ContratosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.route.params['value'].hasOwnProperty('new_register')) this.create();
          }
        }, {
          key: "create",
          value: function create() {
            var _this23 = this;

            var modalRef = this.modalService.open(_components_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_1__["FormContratoModalComponent"], {
              size: "xl"
            });
            modalRef.componentInstance.id = undefined;
            modalRef.result.then(function () {
              return _this23.service.fetch();
            }, function () {});
          }
        }]);

        return ContratosComponent;
      }();

      ContratosComponent.ɵfac = function ContratosComponent_Factory(t) {
        return new (t || ContratosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contratos_service__WEBPACK_IMPORTED_MODULE_3__["ContratosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      ContratosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContratosComponent,
        selectors: [["app-contratos"]],
        inputs: {
          paciente: "paciente"
        },
        decls: 11,
        vars: 0,
        consts: [[1, "card", "card-custom", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-toolbar"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-plus"], [1, "card-body"]],
        template: function ContratosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Manuten\xE7\xE3o de Contratos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContratosComponent_Template_button_click_6_listener() {
              return ctx.create();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Novo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-list-contratos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_5__["ListContratosComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cmF0b3MuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContratosComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-contratos",
            templateUrl: "./contratos.component.html",
            styleUrls: ["./contratos.component.scss"]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
          }, {
            type: _services_contratos_service__WEBPACK_IMPORTED_MODULE_3__["ContratosService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, {
          paciente: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "vCGz":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/contratos/components/conclued-contrato-modal/conclued-contrato-modal.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: ConcluedContratoModalComponent */

    /***/
    function vCGz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConcluedContratoModalComponent", function () {
        return ConcluedContratoModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_metronic/core */
      "WsYS");
      /* harmony import */


      var _assets_js_layout_extended_messages_notify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../assets/js/layout/extended/messages/notify */
      "4pWf");
      /* harmony import */


      var src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/contratos.service */
      "qPuc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ConcluedContratoModalComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ConcluedContratoModalComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contrato est\xE1 sendo encerrado...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ConcluedContratoModalComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tem certeza de que deseja ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "encerrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " este contrato permanentemente?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ConcluedContratoModalComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Data de encerramento ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConcluedContratoModalComponent_ng_container_7_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.dateConclusion = $event;
          })("ngModelChange", function ConcluedContratoModalComponent_ng_container_7_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, ctx_r3.currentDate, "yyyy-MM-dd"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.dateConclusion);
        }
      }

      function ConcluedContratoModalComponent_ng_container_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConcluedContratoModalComponent_ng_container_13_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.showFieldObservacao();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sim ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ConcluedContratoModalComponent_ng_container_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConcluedContratoModalComponent_ng_container_14_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.conclude();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Salvar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.isDisabled);
        }
      }

      var ConcluedContratoModalComponent = /*#__PURE__*/function () {
        function ConcluedContratoModalComponent(service, modal) {
          _classCallCheck(this, ConcluedContratoModalComponent);

          this.service = service;
          this.modal = modal;
          this.isLoading = false;
          this.isEditable = false;
          this.isDisabled = true;
          this.subscriptions = [];
          this.currentDate = new Date();
        }

        _createClass(ConcluedContratoModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showFieldObservacao",
          value: function showFieldObservacao() {
            this.isEditable = true;
          }
        }, {
          key: "conclude",
          value: function conclude() {
            var _this24 = this;

            this.isLoading = true;
            this.register.dateConclusion = this.dateConclusion;
            this.register.status = 'COMPLETED';
            this.register.groupId = this.register.group.id;
            this.register.programId = this.register.program.id;
            var sb = this.service.updateStatusContrato(this.id, this.register).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              new _assets_js_layout_extended_messages_notify__WEBPACK_IMPORTED_MODULE_5__["Notify"]({
                message: 'Contrato encerrado com sucesso!',
                type: 'success'
              }).show();

              _this24.modal.close();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              _this24.modal.dismiss(err);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              _this24.isLoading = false;
            })).subscribe();
            this.subscriptions.push(sb);
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            this.isDisabled = !((event === null || event === void 0 ? void 0 : event.length) > 0);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (sb) {
              return sb.unsubscribe();
            });
          }
        }]);

        return ConcluedContratoModalComponent;
      }();

      ConcluedContratoModalComponent.ɵfac = function ConcluedContratoModalComponent_Factory(t) {
        return new (t || ConcluedContratoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_6__["ContratosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
      };

      ConcluedContratoModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConcluedContratoModalComponent,
        selectors: [["app-conclued-contrato-modal"]],
        inputs: {
          id: "id",
          nomeCliente: "nomeCliente",
          register: "register"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
          useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomAdapter"]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"],
          useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomDateParserFormatter"]
        }])],
        decls: 15,
        vars: 7,
        consts: [[4, "ngIf"], [1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"], [1, "mt-4"], ["type", "date", "name", "startDate", "placeholder", "dd/mm/yyyy", 1, "form-control", "form-control-lg", "form-control-solid", 3, "max", "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "disabled", "click"]],
        template: function ConcluedContratoModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConcluedContratoModalComponent_ng_container_0_Template, 3, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConcluedContratoModalComponent_ng_container_5_Template, 3, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ConcluedContratoModalComponent_ng_container_6_Template, 6, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ConcluedContratoModalComponent_ng_container_7_Template, 6, 5, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConcluedContratoModalComponent_Template_button_click_10_listener() {
              return ctx.modal.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " N\xE3o ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ConcluedContratoModalComponent_ng_container_13_Template, 3, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ConcluedContratoModalComponent_ng_container_14_Template, 3, 1, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Encerrar contrato | ", ctx.nomeCliente, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditable);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25jbHVlZC1jb250cmF0by1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConcluedContratoModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-conclued-contrato-modal',
            templateUrl: './conclued-contrato-modal.component.html',
            styleUrls: ['./conclued-contrato-modal.component.scss'],
            providers: [{
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
              useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomAdapter"]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"],
              useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomDateParserFormatter"]
            }]
          }]
        }], function () {
          return [{
            type: src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_6__["ContratosService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nomeCliente: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          register: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~modules-contratos-contratos-module~modules-pacientes-pacientes-module-es5.js.map