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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-razoes-cancelamento-razoes-cancelamento-module"], {
    /***/
    "/M25":
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/modules/razoes-cancelamento/components/delete-razao-cancelamento-modal/delete-razao-cancelamento-modal.component.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: DeleteRazaoCancelamentoModalComponent */

    /***/
    function M25(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteRazaoCancelamentoModalComponent", function () {
        return DeleteRazaoCancelamentoModalComponent;
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


      var src_app_services_razoes_cancelamento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/razoes-cancelamento.service */
      "a1E9");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DeleteRazaoCancelamentoModalComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function DeleteRazaoCancelamentoModalComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Motivo de cancelamento sendo exclu\xEDdo...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function DeleteRazaoCancelamentoModalComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tem certeza de que deseja excluir este registro permanentemente?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      var DeleteRazaoCancelamentoModalComponent = /*#__PURE__*/function () {
        function DeleteRazaoCancelamentoModalComponent(service, modal) {
          _classCallCheck(this, DeleteRazaoCancelamentoModalComponent);

          this.service = service;
          this.modal = modal;
          this.isLoading = false;
          this.subscriptions = [];
        }

        _createClass(DeleteRazaoCancelamentoModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "delete",
          value: function _delete() {
            var _this = this;

            this.isLoading = true;
            var sb = this.service["delete"](this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), // Remove it from your code (just for showing loading)
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this.modal.close();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              _this.modal.dismiss(err);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
              _this.isLoading = false;
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

        return DeleteRazaoCancelamentoModalComponent;
      }();

      DeleteRazaoCancelamentoModalComponent.ɵfac = function DeleteRazaoCancelamentoModalComponent_Factory(t) {
        return new (t || DeleteRazaoCancelamentoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_razoes_cancelamento_service__WEBPACK_IMPORTED_MODULE_3__["RazoesCancelamentoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]));
      };

      DeleteRazaoCancelamentoModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DeleteRazaoCancelamentoModalComponent,
        selectors: [["app-delete-razao-cancelamento-modal"]],
        inputs: {
          id: "id"
        },
        decls: 14,
        vars: 3,
        consts: [[4, "ngIf"], [1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-elevate", 3, "click"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"]],
        template: function DeleteRazaoCancelamentoModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DeleteRazaoCancelamentoModalComponent_ng_container_0_Template, 3, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Excluir Motivo de Cancelamento");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DeleteRazaoCancelamentoModalComponent_ng_container_5_Template, 3, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DeleteRazaoCancelamentoModalComponent_ng_container_6_Template, 3, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteRazaoCancelamentoModalComponent_Template_button_click_9_listener() {
              return ctx.modal.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Cancelar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteRazaoCancelamentoModalComponent_Template_button_click_12_listener() {
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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtcmF6YW8tY2FuY2VsYW1lbnRvLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteRazaoCancelamentoModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-delete-razao-cancelamento-modal',
            templateUrl: './delete-razao-cancelamento-modal.component.html',
            styleUrls: ['./delete-razao-cancelamento-modal.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_razoes_cancelamento_service__WEBPACK_IMPORTED_MODULE_3__["RazoesCancelamentoService"]
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
    "GDVN":
    /*!*********************************************************************************************************************************!*\
      !*** ./src/app/modules/razoes-cancelamento/components/form-razao-cancelamento-modal/form-razao-cancelamento-modal.component.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: FormRazaoCancelamentoModalComponent */

    /***/
    function GDVN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormRazaoCancelamentoModalComponent", function () {
        return FormRazaoCancelamentoModalComponent;
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


      var src_app_services_razoes_cancelamento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/razoes-cancelamento.service */
      "a1E9");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function FormRazaoCancelamentoModalComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Alterar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function FormRazaoCancelamentoModalComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Novo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function FormRazaoCancelamentoModalComponent_ng_container_3_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("'", ctx_r6.register.reason, "'");
        }
      }

      function FormRazaoCancelamentoModalComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormRazaoCancelamentoModalComponent_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormRazaoCancelamentoModalComponent_ng_container_3_ng_container_2_Template, 2, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " motivo de cancelamento ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormRazaoCancelamentoModalComponent_ng_container_3_ng_container_4_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.register.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.register.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.register.id);
        }
      }

      function FormRazaoCancelamentoModalComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function FormRazaoCancelamentoModalComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Motivo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Descri\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.isControlInvalid("reason"))("is-valid", ctx_r2.isControlValid("reason"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.isControlInvalid("description"))("is-valid", ctx_r2.isControlValid("description"));
        }
      }

      function FormRazaoCancelamentoModalComponent_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormRazaoCancelamentoModalComponent_ng_container_11_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Salvar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.formGroup.invalid);
        }
      }

      var EMPTY = {
        id: undefined,
        reason: '',
        description: ''
      };

      var FormRazaoCancelamentoModalComponent = /*#__PURE__*/function () {
        function FormRazaoCancelamentoModalComponent(registersService, fb, modal) {
          _classCallCheck(this, FormRazaoCancelamentoModalComponent);

          this.registersService = registersService;
          this.fb = fb;
          this.modal = modal;
          this.subscriptions = [];
        }

        _createClass(FormRazaoCancelamentoModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isLoading$ = this.registersService.isLoading$;
            this.loadRegister();
          }
        }, {
          key: "loadRegister",
          value: function loadRegister() {
            if (!this.id) {
              this.register = EMPTY;
            }

            this.loadForm();
          }
        }, {
          key: "loadForm",
          value: function loadForm() {
            this.formGroup = this.fb.group({
              reason: [this.register.reason, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])],
              description: [this.register.description, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])]
            });
          }
        }, {
          key: "save",
          value: function save() {
            this.prepareRegister();

            if (this.register.id) {
              this.edit();
            } else {
              this.create();
            }
          }
        }, {
          key: "edit",
          value: function edit() {
            var _this2 = this;

            var sbUpdate = this.registersService.update(this.register).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              _this2.modal.close();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (errorMessage) {
              _this2.modal.dismiss(errorMessage);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this2.register);
            })).subscribe(function (res) {
              return _this2.register = res;
            });
            console.log(sbUpdate);
            this.subscriptions.push(sbUpdate);
          }
        }, {
          key: "create",
          value: function create() {
            var _this3 = this;

            var sbCreate = this.registersService.create(this.register).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              _this3.modal.close();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (errorMessage) {
              _this3.modal.dismiss(errorMessage);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this3.register);
            })).subscribe(function (res) {
              return _this3.register = res;
            });
            this.subscriptions.push(sbCreate);
          }
        }, {
          key: "prepareRegister",
          value: function prepareRegister() {
            var formData = this.formGroup.value;
            this.register.reason = formData.reason;
            this.register.description = formData.description;
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
            var control = this.formGroup.controls[controlName];
            return control.valid && (control.dirty || control.touched);
          }
        }, {
          key: "isControlInvalid",
          value: function isControlInvalid(controlName) {
            var control = this.formGroup.controls[controlName];
            return control.invalid && (control.dirty || control.touched);
          }
        }, {
          key: "controlHasError",
          value: function controlHasError(validation, controlName) {
            var control = this.formGroup.controls[controlName];
            return control.hasError(validation) && (control.dirty || control.touched);
          }
        }, {
          key: "isControlTouched",
          value: function isControlTouched(controlName) {
            var control = this.formGroup.controls[controlName];
            return control.dirty || control.touched;
          }
        }]);

        return FormRazaoCancelamentoModalComponent;
      }();

      FormRazaoCancelamentoModalComponent.ɵfac = function FormRazaoCancelamentoModalComponent_Factory(t) {
        return new (t || FormRazaoCancelamentoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_razoes_cancelamento_service__WEBPACK_IMPORTED_MODULE_6__["RazoesCancelamentoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]));
      };

      FormRazaoCancelamentoModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormRazaoCancelamentoModalComponent,
        selectors: [["app-form-razao-cancelamento-modal"]],
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
        consts: [[1, "modal-content"], [1, "modal-header"], ["id", "example-modal-sizes-title-lg", 1, "modal-title", "h4"], [4, "ngIf"], [1, "overlay", "overlay-block", "cursor-default", "modal-body", 2, "min-height", "200px"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-2", 3, "click"], [1, "overlay-layer", "bg-transparent"], [1, "spinner", "spinner-lg", "spinner-success"], ["action", "#", 1, "form", "form-label-right", 3, "formGroup"], [1, "form-group", "row"], [1, "col-lg"], [1, "form-label"], ["type", "text", "name", "reason", "placeholder", "Motivo do cancelamento", "autocomplete", "off", "formControlName", "reason", 1, "form-control", "form-control-lg", "form-control-solid"], ["rows", "2", "name", "description", "placeholder", "Descri\xE7\xE3o sobre o motivo do cancelamento", "autocomplete", "off", "formControlName", "description", 1, "form-control", "form-control-lg", "form-control-solid"], ["type", "submit", 1, "btn", "btn-success", "btn-elevate", 3, "disabled", "click"]],
        template: function FormRazaoCancelamentoModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormRazaoCancelamentoModalComponent_ng_container_3_Template, 5, 3, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormRazaoCancelamentoModalComponent_ng_container_5_Template, 3, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormRazaoCancelamentoModalComponent_ng_container_7_Template, 12, 9, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormRazaoCancelamentoModalComponent_Template_button_click_9_listener() {
              return ctx.modal.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Cancelar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormRazaoCancelamentoModalComponent_ng_container_11_Template, 3, 1, "ng-container", 3);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXJhemFvLWNhbmNlbGFtZW50by1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormRazaoCancelamentoModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-form-razao-cancelamento-modal',
            templateUrl: './form-razao-cancelamento-modal.component.html',
            styleUrls: ['./form-razao-cancelamento-modal.component.scss'],
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
            type: src_app_services_razoes_cancelamento_service__WEBPACK_IMPORTED_MODULE_6__["RazoesCancelamentoService"]
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
    "a1E9":
    /*!*********************************************************!*\
      !*** ./src/app/services/razoes-cancelamento.service.ts ***!
      \*********************************************************/

    /*! exports provided: RazoesCancelamentoService */

    /***/
    function a1E9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RazoesCancelamentoService", function () {
        return RazoesCancelamentoService;
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

      var RazoesCancelamentoService = /*#__PURE__*/function (_metronic_shared_crud) {
        _inherits(RazoesCancelamentoService, _metronic_shared_crud);

        var _super = _createSuper(RazoesCancelamentoService);

        function RazoesCancelamentoService(http) {
          var _this4;

          _classCallCheck(this, RazoesCancelamentoService);

          _this4 = _super.call(this, http);
          _this4.API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/reason-cancellations");
          return _this4;
        } // READ


        _createClass(RazoesCancelamentoService, [{
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
          key: "deleteItems",
          value: function deleteItems() {
            var _this5 = this;

            var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var tasks$ = [];
            ids.forEach(function (id) {
              tasks$.push(_this5["delete"](id));
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

        return RazoesCancelamentoService;
      }(_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["TableService"]);

      RazoesCancelamentoService.ɵfac = function RazoesCancelamentoService_Factory(t) {
        return new (t || RazoesCancelamentoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      RazoesCancelamentoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RazoesCancelamentoService,
        factory: RazoesCancelamentoService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RazoesCancelamentoService, [{
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
    "nnce":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/razoes-cancelamento/razoes-cancelamento-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: RazoesCancelamentoRoutingModule */

    /***/
    function nnce(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RazoesCancelamentoRoutingModule", function () {
        return RazoesCancelamentoRoutingModule;
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


      var _razoes_cancelamento_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./razoes-cancelamento.component */
      "uqZq");

      var routes = [{
        path: '',
        component: _razoes_cancelamento_component__WEBPACK_IMPORTED_MODULE_2__["RazoesCancelamentoComponent"]
      }, {
        path: '',
        redirectTo: 'razoes-cancelamento',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: 'razoes-cancelamento',
        pathMatch: 'full'
      }];

      var RazoesCancelamentoRoutingModule = function RazoesCancelamentoRoutingModule() {
        _classCallCheck(this, RazoesCancelamentoRoutingModule);
      };

      RazoesCancelamentoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RazoesCancelamentoRoutingModule
      });
      RazoesCancelamentoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function RazoesCancelamentoRoutingModule_Factory(t) {
          return new (t || RazoesCancelamentoRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RazoesCancelamentoRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RazoesCancelamentoRoutingModule, [{
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
    "skpG":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/razoes-cancelamento/razoes-cancelamento.module.ts ***!
      \***************************************************************************/

    /*! exports provided: RazoesCancelamentoModule */

    /***/
    function skpG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RazoesCancelamentoModule", function () {
        return RazoesCancelamentoModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-inline-svg */
      "e8Ap");
      /* harmony import */


      var src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_metronic/shared/crud-table */
      "Br0f");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _components_form_razao_cancelamento_modal_form_razao_cancelamento_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/form-razao-cancelamento-modal/form-razao-cancelamento-modal.component */
      "GDVN");
      /* harmony import */


      var _components_delete_razao_cancelamento_modal_delete_razao_cancelamento_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/delete-razao-cancelamento-modal/delete-razao-cancelamento-modal.component */
      "/M25");
      /* harmony import */


      var _razoes_cancelamento_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./razoes-cancelamento.component */
      "uqZq");
      /* harmony import */


      var _razoes_cancelamento_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./razoes-cancelamento-routing.module */
      "nnce");

      var RazoesCancelamentoModule = function RazoesCancelamentoModule() {
        _classCallCheck(this, RazoesCancelamentoModule);
      };

      RazoesCancelamentoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RazoesCancelamentoModule
      });
      RazoesCancelamentoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function RazoesCancelamentoModule_Factory(t) {
          return new (t || RazoesCancelamentoModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _razoes_cancelamento_routing_module__WEBPACK_IMPORTED_MODULE_10__["RazoesCancelamentoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__["InlineSVGModule"], src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_5__["CRUDTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RazoesCancelamentoModule, {
          declarations: [_razoes_cancelamento_component__WEBPACK_IMPORTED_MODULE_9__["RazoesCancelamentoComponent"], _components_form_razao_cancelamento_modal_form_razao_cancelamento_modal_component__WEBPACK_IMPORTED_MODULE_7__["FormRazaoCancelamentoModalComponent"], _components_delete_razao_cancelamento_modal_delete_razao_cancelamento_modal_component__WEBPACK_IMPORTED_MODULE_8__["DeleteRazaoCancelamentoModalComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _razoes_cancelamento_routing_module__WEBPACK_IMPORTED_MODULE_10__["RazoesCancelamentoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__["InlineSVGModule"], src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_5__["CRUDTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RazoesCancelamentoModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_razoes_cancelamento_component__WEBPACK_IMPORTED_MODULE_9__["RazoesCancelamentoComponent"], _components_form_razao_cancelamento_modal_form_razao_cancelamento_modal_component__WEBPACK_IMPORTED_MODULE_7__["FormRazaoCancelamentoModalComponent"], _components_delete_razao_cancelamento_modal_delete_razao_cancelamento_modal_component__WEBPACK_IMPORTED_MODULE_8__["DeleteRazaoCancelamentoModalComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _razoes_cancelamento_routing_module__WEBPACK_IMPORTED_MODULE_10__["RazoesCancelamentoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__["InlineSVGModule"], src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_5__["CRUDTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"]],
            entryComponents: [_components_form_razao_cancelamento_modal_form_razao_cancelamento_modal_component__WEBPACK_IMPORTED_MODULE_7__["FormRazaoCancelamentoModalComponent"], _components_delete_razao_cancelamento_modal_delete_razao_cancelamento_modal_component__WEBPACK_IMPORTED_MODULE_8__["DeleteRazaoCancelamentoModalComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "uqZq":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/razoes-cancelamento/razoes-cancelamento.component.ts ***!
      \******************************************************************************/

    /*! exports provided: RazoesCancelamentoComponent */

    /***/
    function uqZq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RazoesCancelamentoComponent", function () {
        return RazoesCancelamentoComponent;
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


      var _components_delete_razao_cancelamento_modal_delete_razao_cancelamento_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/delete-razao-cancelamento-modal/delete-razao-cancelamento-modal.component */
      "/M25");
      /* harmony import */


      var _components_form_razao_cancelamento_modal_form_razao_cancelamento_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/form-razao-cancelamento-modal/form-razao-cancelamento-modal.component */
      "GDVN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_services_razoes_cancelamento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/razoes-cancelamento.service */
      "a1E9");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../_metronic/shared/crud-table/components/sort-icon/sort-icon.component */
      "xGIk");
      /* harmony import */


      var _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../_metronic/shared/crud-table/components/paginator/paginator.component */
      "gBr1");

      function RazoesCancelamentoComponent_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Total de registros selecionados: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.grouping.getSelectedRowsCount());
        }
      }

      function RazoesCancelamentoComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var register_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](register_r2.reason);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](register_r2.description);
        }
      }

      var RazoesCancelamentoComponent = /*#__PURE__*/function () {
        function RazoesCancelamentoComponent(fb, modalService, service) {
          _classCallCheck(this, RazoesCancelamentoComponent);

          this.fb = fb;
          this.modalService = modalService;
          this.service = service;
          this.subscriptions = [];
        } // angular lifecircle hooks


        _createClass(RazoesCancelamentoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.filterForm();
            this.searchForm();
            this.service.setDefaults();
            this.service.fetch();
            this.grouping = this.service.grouping;
            this.paginator = this.service.paginator;
            this.sorting = this.service.sorting;
            var sb = this.service.isLoading$.subscribe(function (res) {
              return _this6.isLoading = res;
            });
            this.subscriptions.push(sb);
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
            var _this7 = this;

            this.filterGroup = this.fb.group({
              status: [""],
              type: [""],
              searchTerm: [""]
            });
            this.subscriptions.push(this.filterGroup.controls.status.valueChanges.subscribe(function () {
              return _this7.filter();
            }));
            this.subscriptions.push(this.filterGroup.controls.type.valueChanges.subscribe(function () {
              return _this7.filter();
            }));
          }
        }, {
          key: "filter",
          value: function filter() {
            var filter = {};
            var status = this.filterGroup.get("status").value;

            if (status) {
              filter["status"] = status;
            }

            var type = this.filterGroup.get("type").value;

            if (type) {
              filter["type"] = type;
            }

            this.service.patchState({
              filter: filter
            });
          } // search

        }, {
          key: "searchForm",
          value: function searchForm() {
            var _this8 = this;

            this.searchGroup = this.fb.group({
              searchTerm: [""]
            });
            var searchEvent = this.searchGroup.controls.searchTerm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (value) {
              return value.trim();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])()).subscribe(function (val) {
              return _this8.service.filterByDescription(val);
            });
            this.subscriptions.push(searchEvent);
          }
        }, {
          key: "search",
          value: function search(searchTerm) {
            this.service.patchState({
              searchTerm: searchTerm
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
            this.editRegister(undefined, undefined);
          }
        }, {
          key: "edit",
          value: function edit(id) {
            var _this9 = this;

            var modalRef = this.modalService.open(_components_form_razao_cancelamento_modal_form_razao_cancelamento_modal_component__WEBPACK_IMPORTED_MODULE_3__["FormRazaoCancelamentoModalComponent"], {
              size: "xl"
            });
            modalRef.componentInstance.id = id;
            modalRef.componentInstance.register = id;
            modalRef.result.then(function () {
              return _this9.service.fetch();
            }, function () {});
          }
        }, {
          key: "editRegister",
          value: function editRegister(id, register) {
            var _this10 = this;

            var modalRef = this.modalService.open(_components_form_razao_cancelamento_modal_form_razao_cancelamento_modal_component__WEBPACK_IMPORTED_MODULE_3__["FormRazaoCancelamentoModalComponent"], {
              size: "xl"
            });
            modalRef.componentInstance.id = id;
            modalRef.componentInstance.register = register;
            modalRef.result.then(function () {
              return _this10.service.fetch();
            }, function () {});
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this11 = this;

            var modalRef = this.modalService.open(_components_delete_razao_cancelamento_modal_delete_razao_cancelamento_modal_component__WEBPACK_IMPORTED_MODULE_2__["DeleteRazaoCancelamentoModalComponent"]);
            modalRef.componentInstance.id = id;
            modalRef.result.then(function () {
              return _this11.service.fetch();
            }, function () {});
          }
        }, {
          key: "deleteSelected",
          value: function deleteSelected() {// const modalRef = this.modalService.open(DeleteContratoModalComponent);
            // modalRef.componentInstance.ids = this.grouping.getSelectedRows();
            // modalRef.result.then(
            //   () => this.service.fetch(),
            //   () => {}
            // );
          }
        }, {
          key: "updateStatusForSelected",
          value: function updateStatusForSelected() {// const modalRef = this.modalService.open(DeleteContratoModalComponent);
            // modalRef.componentInstance.ids = this.grouping.getSelectedRows();
            // modalRef.result.then(
            //   () => this.service.fetch(),
            //   () => {}
            // );
          }
        }, {
          key: "fetchSelected",
          value: function fetchSelected() {// const modalRef = this.modalService.open(DeleteContratoModalComponent);
            // modalRef.componentInstance.ids = this.grouping.getSelectedRows();
            // modalRef.result.then(
            //   () => this.service.fetch(),
            //   () => {}
            // );
          }
        }, {
          key: "getProgramas",
          value: function getProgramas() {
            return [{
              id: 1,
              description: "Emagrece você"
            }, {
              id: 2,
              description: "Engorda você"
            }, {
              id: 3,
              description: "Casa você"
            }, {
              id: 4,
              description: "Separa você"
            }];
          }
        }]);

        return RazoesCancelamentoComponent;
      }();

      RazoesCancelamentoComponent.ɵfac = function RazoesCancelamentoComponent_Factory(t) {
        return new (t || RazoesCancelamentoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_razoes_cancelamento_service__WEBPACK_IMPORTED_MODULE_6__["RazoesCancelamentoService"]));
      };

      RazoesCancelamentoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RazoesCancelamentoComponent,
        selectors: [["app-razoes-cancelamento"]],
        decls: 24,
        vars: 11,
        consts: [[1, "card", "card-custom", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "form", "form-label-right"], [1, "form-group", "row"], [1, "col-lg", 3, "formGroup"], ["type", "text", "name", "searchText", "placeholder", "Pesquisar", "value", "", "formControlName", "searchTerm", 1, "form-control"], [4, "ngIf"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-head-custom", "table-vertical-center", "overflow-hidden"], ["column", "reason", 3, "activeColumn", "activeDirection", "sort"], ["column", "description", 3, "activeColumn", "activeDirection", "sort"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", 3, "paginator", "isLoading", "paginate"], [1, "form"], [1, "row", "align-items-center", "form-group-actions", "margin-top-20", "margin-bottom-20"], [1, "col-xl-12"], [1, "form-group", "form-group-inline"], [1, "form-label", "form-label-no-wrap"], [1, "font-bold", "font-danger"]],
        template: function RazoesCancelamentoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Manuten\xE7\xE3o de Motivos de Cancelamento");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RazoesCancelamentoComponent_ng_container_10_Template, 11, 1, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " MOTIVO ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-sort-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function RazoesCancelamentoComponent_Template_app_sort_icon_sort_16_listener($event) {
              return ctx.sort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " DESCRI\xC7\xC3O ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-sort-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function RazoesCancelamentoComponent_Template_app_sort_icon_sort_19_listener($event) {
              return ctx.sort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RazoesCancelamentoComponent_tr_21_Template, 6, 2, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-paginator", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paginate", function RazoesCancelamentoComponent_Template_app_paginator_paginate_23_listener($event) {
              return ctx.paginate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.grouping.getSelectedRowsCount());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 9, ctx.service.items$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paginator", ctx.paginator)("isLoading", ctx.isLoading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_8__["SortIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_9__["PaginatorComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXpvZXMtY2FuY2VsYW1lbnRvLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RazoesCancelamentoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-razoes-cancelamento',
            templateUrl: './razoes-cancelamento.component.html',
            styleUrls: ['./razoes-cancelamento.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
          }, {
            type: src_app_services_razoes_cancelamento_service__WEBPACK_IMPORTED_MODULE_6__["RazoesCancelamentoService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-razoes-cancelamento-razoes-cancelamento-module-es5.js.map