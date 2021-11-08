(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-contratos-contratos-module~modules-pacientes-pacientes-module"],{

/***/ "3IVP":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/contratos/components/cancel-contrato-modal/cancel-contrato-modal.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CancelContratoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelContratoModalComponent", function() { return CancelContratoModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_metronic/core */ "WsYS");
/* harmony import */ var _assets_js_layout_extended_messages_notify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../assets/js/layout/extended/messages/notify */ "4pWf");
/* harmony import */ var src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/contratos.service */ "qPuc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











function CancelContratoModalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CancelContratoModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contrato est\u00E1 sendo cancelado...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CancelContratoModalComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tem certeza de que deseja ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " este contrato permanentemente?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CancelContratoModalComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Data de cancelamento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CancelContratoModalComponent_ng_container_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.cancellationDate = $event; })("ngModelChange", function CancelContratoModalComponent_ng_container_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Motivo do cancelamento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CancelContratoModalComponent_ng_container_7_Template_textarea_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.reasonCancellation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 3, ctx_r3.currentDate, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.cancellationDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.reasonCancellation);
} }
function CancelContratoModalComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CancelContratoModalComponent_ng_container_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.showFieldObservacao(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CancelContratoModalComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CancelContratoModalComponent_ng_container_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Salvar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.isDisabled);
} }
class CancelContratoModalComponent {
    constructor(service, modal) {
        this.service = service;
        this.modal = modal;
        this.isLoading = false;
        this.isEditable = false;
        this.isDisabled = true;
        this.reasonCancellation = '';
        this.subscriptions = [];
        this.currentDate = new Date();
    }
    ngOnInit() {
    }
    showFieldObservacao() {
        this.isEditable = true;
    }
    cancel() {
        this.isLoading = true;
        this.register.reasonCancellation = this.reasonCancellation;
        this.register.cancellationDate = this.cancellationDate;
        this.register.status = 'CANCELED';
        this.register.groupId = this.register.group.id;
        this.register.programId = this.register.program.id;
        const sb = this.service.updateStatusContrato(this.id, this.register).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            new _assets_js_layout_extended_messages_notify__WEBPACK_IMPORTED_MODULE_5__["Notify"]({ message: 'Contrato cancelado com sucesso!', type: 'success' }).show();
            this.modal.close();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => {
            this.modal.dismiss(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            this.isLoading = false;
        })).subscribe();
        this.subscriptions.push(sb);
    }
    onChange(event) {
        this.isDisabled = !((event === null || event === void 0 ? void 0 : event.length) > 0);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
CancelContratoModalComponent.ɵfac = function CancelContratoModalComponent_Factory(t) { return new (t || CancelContratoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_6__["ContratosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
CancelContratoModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CancelContratoModalComponent, selectors: [["app-cancel-contrato-modal"]], inputs: { id: "id", nomeCliente: "nomeCliente", register: "register" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomAdapter"] },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomDateParserFormatter"] }
        ])], decls: 15, vars: 7, consts: [[4, "ngIf"], [1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"], [1, "mt-4"], ["type", "date", "name", "startDate", "placeholder", "dd/mm/yyyy", 1, "form-control", "form-control-lg", "form-control-solid", 3, "max", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Motivo do cancelamento", "autocomplete", "off", 1, "form-control", "form-control-lg", "form-control-solid", "mt-5", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "disabled", "click"]], template: function CancelContratoModalComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CancelContratoModalComponent_Template_button_click_10_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " N\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CancelContratoModalComponent_ng_container_13_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CancelContratoModalComponent_ng_container_14_Template, 3, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5jZWwtY29udHJhdG8tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CancelContratoModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cancel-contrato-modal',
                templateUrl: './cancel-contrato-modal.component.html',
                styleUrls: ['./cancel-contrato-modal.component.scss'],
                providers: [
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomAdapter"] },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomDateParserFormatter"] }
                ]
            }]
    }], function () { return [{ type: src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_6__["ContratosService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nomeCliente: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], register: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "4pWf":
/*!**********************************************************!*\
  !*** ./src/assets/js/layout/extended/messages/notify.js ***!
  \**********************************************************/
/*! exports provided: Notify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notify", function() { return Notify; });
class Notify { 

    constructor(opt){
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

    _initializers() {
        this._timeOutInit();
        this._initialize();
    }

    _errorHandler() {
        if (!this.message) {
            throw ('The "message" property is mandatory');
        }

        switch (this.type) {
            case 'success':
            case 'danger':
            case 'warning':
            case 'info':
                break;
            default:
                throw ('Unknown type: "' + this.type + '"; Set as: success, danger, warning or info');
        }
    }

    _timeOutInit() {
        if (this.timeout && Number.isInteger(parseInt(this.timeout)) && this.timeout != 0) {
            var self = this;
            var length = 1000;

            this._progressBarInterval = setInterval(function () {
                self.typeElement.style.width = (--length) / 10 + '%';
            }, this.timeout);

            this._timeoutInterval = setTimeout(function () {
                self.hide();
            }, this.timeout * 1000);
        }
    }

    _saveMessage() {
        this._readMessages();
        var message = {
            title: this.title,
            message: this.message,
            text: this.text,
            time: this.time,
            type: this.type
        }
        this._messages.push(message);
        this._writeMessages();
    }

    _writeMessages() {
        localStorage.setItem('messages', JSON.stringify(this._messages));
    }

    _readMessages() {
        var messages = localStorage.getItem('messages');
        this._messages = JSON.parse(messages);

        if (!this._messages) {
            this._messages = [];
        }
    }

    _initialize() {

        this._createBox();
        this._createContent();
        this._createTypeElement();

    }

    _createBox() {

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

    _createTypeElement() {

        var typeHeader = document.createElement('div');
        typeHeader.className = 'row m-0 w-100';
        typeHeader.style.height = '5px';
        

        this.typeElement = document.createElement('div');
        this.typeElement.className = `bg-white rounded-bottom rounded-top`;
        this.typeElement.style.height = '100%';
        this.typeElement.style.width = '100%';

        typeHeader.append(this.typeElement);
        this._boxElement.append(typeHeader);

    }

    _createContent() {

        var contentContainer = document.createElement('div');
        contentContainer.className = 'mb-3 row m-0 w-100';

        this._contentElement = document.createElement('div');
        this._contentElement.className = 'col pl-1';
        this._contentElement.innerHTML = this.message;

        contentContainer.append(this._contentElement);
        this._boxElement.append(contentContainer);

    }

    show() {

        var body = document.getElementsByTagName('body')[0];
        body.append(this._boxElement);
        if (this._maskElement) this._maskElement.getElementsByTagName("button")[0].focus();
        // this._saveMessage();

    }

    hide() {

        clearInterval(this._progressBarInterval);
        clearInterval(this._timeoutInterval);

        let parent = this._boxElement.parentElement;
        parent.removeChild(this._boxElement);

    }
}

/***/ }),

/***/ "Bv1/":
/*!*******************************************************!*\
  !*** ./src/app/modules/contratos/contratos.module.ts ***!
  \*******************************************************/
/*! exports provided: ContratosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratosModule", function() { return ContratosModule; });
/* harmony import */ var _metronic_core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../_metronic/core/core.module */ "zfYk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ "Br0f");
/* harmony import */ var _contratos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contratos.component */ "r5Qa");
/* harmony import */ var _components_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/form-contrato-modal/form-contrato-modal.component */ "gH8f");
/* harmony import */ var _components_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/delete-contrato-modal/delete-contrato-modal.component */ "hhUZ");
/* harmony import */ var _components_cancel_contrato_modal_cancel_contrato_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cancel-contrato-modal/cancel-contrato-modal.component */ "3IVP");
/* harmony import */ var _contratos_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contratos-routing.module */ "S7kg");
/* harmony import */ var _components_list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/list-contratos/list-contratos.component */ "oits");
/* harmony import */ var _components_reactivate_contrato_modal_reactivate_contrato_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/reactivate-contrato-modal/reactivate-contrato-modal.component */ "bzxI");
/* harmony import */ var _components_conclued_contrato_modal_conclued_contrato_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/conclued-contrato-modal/conclued-contrato-modal.component */ "vCGz");

















class ContratosModule {
}
ContratosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContratosModule });
ContratosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ContratosModule_Factory(t) { return new (t || ContratosModule)(); }, imports: [[
            _metronic_core_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _contratos_routing_module__WEBPACK_IMPORTED_MODULE_12__["ContratosRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGModule"],
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_7__["CRUDTableModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeaheadModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContratosModule, { declarations: [_contratos_component__WEBPACK_IMPORTED_MODULE_8__["ContratosComponent"],
        _components_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_9__["FormContratoModalComponent"],
        _components_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteContratoModalComponent"],
        _components_cancel_contrato_modal_cancel_contrato_modal_component__WEBPACK_IMPORTED_MODULE_11__["CancelContratoModalComponent"],
        _components_conclued_contrato_modal_conclued_contrato_modal_component__WEBPACK_IMPORTED_MODULE_15__["ConcluedContratoModalComponent"],
        _components_reactivate_contrato_modal_reactivate_contrato_modal_component__WEBPACK_IMPORTED_MODULE_14__["ReactivateContratoModalComponent"],
        _components_list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_13__["ListContratosComponent"]], imports: [_metronic_core_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _contratos_routing_module__WEBPACK_IMPORTED_MODULE_12__["ContratosRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGModule"],
        _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_7__["CRUDTableModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeaheadModule"]], exports: [_contratos_component__WEBPACK_IMPORTED_MODULE_8__["ContratosComponent"],
        _components_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_9__["FormContratoModalComponent"],
        _components_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteContratoModalComponent"],
        _components_cancel_contrato_modal_cancel_contrato_modal_component__WEBPACK_IMPORTED_MODULE_11__["CancelContratoModalComponent"],
        _components_conclued_contrato_modal_conclued_contrato_modal_component__WEBPACK_IMPORTED_MODULE_15__["ConcluedContratoModalComponent"],
        _components_reactivate_contrato_modal_reactivate_contrato_modal_component__WEBPACK_IMPORTED_MODULE_14__["ReactivateContratoModalComponent"],
        _components_list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_13__["ListContratosComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContratosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                exports: [
                    _contratos_component__WEBPACK_IMPORTED_MODULE_8__["ContratosComponent"],
                    _components_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_9__["FormContratoModalComponent"],
                    _components_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteContratoModalComponent"],
                    _components_cancel_contrato_modal_cancel_contrato_modal_component__WEBPACK_IMPORTED_MODULE_11__["CancelContratoModalComponent"],
                    _components_conclued_contrato_modal_conclued_contrato_modal_component__WEBPACK_IMPORTED_MODULE_15__["ConcluedContratoModalComponent"],
                    _components_reactivate_contrato_modal_reactivate_contrato_modal_component__WEBPACK_IMPORTED_MODULE_14__["ReactivateContratoModalComponent"],
                    _components_list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_13__["ListContratosComponent"]
                ],
                declarations: [
                    _contratos_component__WEBPACK_IMPORTED_MODULE_8__["ContratosComponent"],
                    _components_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_9__["FormContratoModalComponent"],
                    _components_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteContratoModalComponent"],
                    _components_cancel_contrato_modal_cancel_contrato_modal_component__WEBPACK_IMPORTED_MODULE_11__["CancelContratoModalComponent"],
                    _components_conclued_contrato_modal_conclued_contrato_modal_component__WEBPACK_IMPORTED_MODULE_15__["ConcluedContratoModalComponent"],
                    _components_reactivate_contrato_modal_reactivate_contrato_modal_component__WEBPACK_IMPORTED_MODULE_14__["ReactivateContratoModalComponent"],
                    _components_list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_13__["ListContratosComponent"]
                ],
                imports: [
                    _metronic_core_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _contratos_routing_module__WEBPACK_IMPORTED_MODULE_12__["ContratosRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGModule"],
                    _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_7__["CRUDTableModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeaheadModule"]
                ],
                entryComponents: [
                    _components_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_9__["FormContratoModalComponent"],
                    _components_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteContratoModalComponent"],
                    _components_cancel_contrato_modal_cancel_contrato_modal_component__WEBPACK_IMPORTED_MODULE_11__["CancelContratoModalComponent"],
                    _components_conclued_contrato_modal_conclued_contrato_modal_component__WEBPACK_IMPORTED_MODULE_15__["ConcluedContratoModalComponent"],
                    _components_reactivate_contrato_modal_reactivate_contrato_modal_component__WEBPACK_IMPORTED_MODULE_14__["ReactivateContratoModalComponent"],
                    _components_list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_13__["ListContratosComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "S7kg":
/*!***************************************************************!*\
  !*** ./src/app/modules/contratos/contratos-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ContratosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratosRoutingModule", function() { return ContratosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contratos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contratos.component */ "r5Qa");





const routes = [
    {
        path: '',
        component: _contratos_component__WEBPACK_IMPORTED_MODULE_2__["ContratosComponent"]
    },
    {
        path: ':new_register',
        component: _contratos_component__WEBPACK_IMPORTED_MODULE_2__["ContratosComponent"]
    },
    // {
    //   path: 'edit',
    //   component: EditPacienteComponent
    // },
    // {
    //   path: 'edit/:id',
    //   component: EditPacienteComponent
    // },
    { path: '', redirectTo: 'contratos', pathMatch: 'full' },
    { path: '**', redirectTo: 'contratos', pathMatch: 'full' }
];
class ContratosRoutingModule {
}
ContratosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContratosRoutingModule });
ContratosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContratosRoutingModule_Factory(t) { return new (t || ContratosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContratosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContratosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Zd6I":
/*!***********************************************!*\
  !*** ./src/app/services/programas.service.ts ***!
  \***********************************************/
/*! exports provided: ProgramasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramasService", function() { return ProgramasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_metronic/shared/crud-table */ "Br0f");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







class ProgramasService extends _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__["TableService"] {
    constructor(http) {
        super(http);
        this.API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/programs`;
    }
    // READ
    find(params) {
        return this.http.get(this.API_URL, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(({ data, meta }) => {
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
ProgramasService.ɵfac = function ProgramasService_Factory(t) { return new (t || ProgramasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProgramasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProgramasService, factory: ProgramasService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgramasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }] }]; }, null); })();


/***/ }),

/***/ "bzxI":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/contratos/components/reactivate-contrato-modal/reactivate-contrato-modal.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ReactivateContratoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactivateContratoModalComponent", function() { return ReactivateContratoModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_metronic/core */ "WsYS");
/* harmony import */ var _assets_js_layout_extended_messages_notify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../assets/js/layout/extended/messages/notify */ "4pWf");
/* harmony import */ var src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/contratos.service */ "qPuc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











function ReactivateContratoModalComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nova data de conclus\u00E3o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReactivateContratoModalComponent_ng_container_9_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.newHiringDate = $event; })("ngModelChange", function ReactivateContratoModalComponent_ng_container_9_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, ctx_r0.currentDate, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newHiringDate);
} }
function ReactivateContratoModalComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReactivateContratoModalComponent_ng_container_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.showFieldObservacao(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ReactivateContratoModalComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReactivateContratoModalComponent_ng_container_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.reactivate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ReactivateContratoModalComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReactivateContratoModalComponent_ng_container_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.reactivate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Salvar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.isDisabled && ctx_r3.register.status == "COMPLETED");
} }
class ReactivateContratoModalComponent {
    constructor(service, modal) {
        this.service = service;
        this.modal = modal;
        this.subscriptions = [];
        this.isEditable = false;
        this.isDisabled = true;
        this.currentDate = new Date();
    }
    showFieldObservacao() {
        this.isEditable = true;
    }
    onChange(event) {
        this.isDisabled = !((event === null || event === void 0 ? void 0 : event.length) > 0);
    }
    reactivate() {
        this.register.status = 'ACTIVE';
        this.register.groupId = this.register.group.id;
        this.register.programId = this.register.program.id;
        delete this.register.cancellationDate;
        delete this.register.reasonCancellation;
        delete this.register.dateConclusion;
        if (this.register.status == 'COMPLETED') {
            this.register.hiringDate = this.newHiringDate;
        }
        const sb = this.service.updateStatusContrato(this.id, this.register).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            new _assets_js_layout_extended_messages_notify__WEBPACK_IMPORTED_MODULE_5__["Notify"]({ message: 'Contrato reativado com sucesso!', type: 'success' }).show();
            this.modal.close();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => {
            this.modal.dismiss(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        })).subscribe();
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
ReactivateContratoModalComponent.ɵfac = function ReactivateContratoModalComponent_Factory(t) { return new (t || ReactivateContratoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_6__["ContratosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
ReactivateContratoModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReactivateContratoModalComponent, selectors: [["app-reactivate-contrato-modal"]], inputs: { id: "id", nomeCliente: "nomeCliente", register: "register" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomAdapter"] },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomDateParserFormatter"] }
        ])], decls: 18, vars: 5, consts: [[1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], [1, "mt-4"], ["type", "date", "name", "startDate", "placeholder", "dd/mm/yyyy", 1, "form-control", "form-control-lg", "form-control-solid", 3, "min", "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "disabled", "click"]], template: function ReactivateContratoModalComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReactivateContratoModalComponent_Template_button_click_12_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " N\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ReactivateContratoModalComponent_ng_container_15_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ReactivateContratoModalComponent_ng_container_16_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ReactivateContratoModalComponent_ng_container_17_Template, 3, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWFjdGl2YXRlLWNvbnRyYXRvLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReactivateContratoModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reactivate-contrato-modal',
                templateUrl: './reactivate-contrato-modal.component.html',
                styleUrls: ['./reactivate-contrato-modal.component.scss'],
                providers: [
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomAdapter"] },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomDateParserFormatter"] }
                ]
            }]
    }], function () { return [{ type: src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_6__["ContratosService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nomeCliente: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], register: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "gH8f":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/contratos/components/form-contrato-modal/form-contrato-modal.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: FormContratoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContratoModalComponent", function() { return FormContratoModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_metronic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_metronic/core */ "WsYS");
/* harmony import */ var _assets_js_layout_extended_messages_notify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../assets/js/layout/extended/messages/notify */ "4pWf");
/* harmony import */ var src_app_services_pacientes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/pacientes.service */ "Av/U");
/* harmony import */ var src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/contratos.service */ "qPuc");
/* harmony import */ var src_app_services_programas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/programas.service */ "Zd6I");
/* harmony import */ var src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/grupos.service */ "dtOv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");















function FormContratoModalComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Alterar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FormContratoModalComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cadastrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FormContratoModalComponent_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Visualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FormContratoModalComponent_ng_container_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("'", ctx_r7.register.id, "'");
} }
function FormContratoModalComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormContratoModalComponent_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormContratoModalComponent_ng_container_3_ng_container_2_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormContratoModalComponent_ng_container_3_ng_container_3_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " contrato ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormContratoModalComponent_ng_container_3_ng_container_5_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.register.id && ctx_r0.register.status == "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.register.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.register.status == "COMPLETED" || ctx_r0.register.status == "CANCELED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.register.id);
} }
function FormContratoModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FormContratoModalComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (ctx_r8.register == null ? null : ctx_r8.register.patient == null ? null : ctx_r8.register.patient.name) || "*", " - ", (ctx_r8.register == null ? null : ctx_r8.register.patient == null ? null : ctx_r8.register.patient.phone) || "*", " ");
} }
function FormContratoModalComponent_ng_container_7_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Paciente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormContratoModalComponent_ng_container_7_div_2_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.pacienteIdContrato = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTypeahead", ctx_r9.search)("resultFormatter", ctx_r9.resultFormatBandListValue)("inputFormatter", ctx_r9.inputFormatBandListValue)("ngModel", ctx_r9.pacienteIdContrato);
} }
function FormContratoModalComponent_ng_container_7_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const register_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", register_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", register_r15.name, " ");
} }
function FormContratoModalComponent_ng_container_7_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const register_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", register_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", register_r16.name, " ");
} }
function FormContratoModalComponent_ng_container_7_ng_container_51_div_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Conclu\u00EDdo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FormContratoModalComponent_ng_container_7_ng_container_51_div_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancelado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FormContratoModalComponent_ng_container_7_ng_container_51_div_3_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.register.status == "COMPLETED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.register.status == "CANCELED");
} }
function FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Data de conclus\u00E3o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx_r23.register.dateConclusion, "dd/MM/yyyy"), " ");
} }
function FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_4_div_1_Template, 7, 4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r18.id);
} }
function FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx_r24.register.cancellationDate, "dd/MM/yyyy"), " ");
} }
function FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_5_div_1_Template, 7, 4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r19.id);
} }
function FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r25.register.reasonCancellation || "*", " ");
} }
function FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_6_div_1_Template, 6, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r20.id);
} }
function FormContratoModalComponent_ng_container_7_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormContratoModalComponent_ng_container_7_ng_container_51_div_3_Template, 7, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_4_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_5_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormContratoModalComponent_ng_container_7_ng_container_51_ng_container_6_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.register.status == "COMPLETED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.register.status == "CANCELED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.register.status == "CANCELED");
} }
function FormContratoModalComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormContratoModalComponent_ng_container_7_div_1_Template, 6, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormContratoModalComponent_ng_container_7_div_2_Template, 6, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Data de in\u00EDcio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Data de conclus\u00E3o");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Peso In\u00EDcial");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function FormContratoModalComponent_ng_container_7_Template_input_blur_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.changeWeight($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Meta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function FormContratoModalComponent_ng_container_7_Template_input_blur_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.changeWeight($event); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Observa\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "textarea", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, FormContratoModalComponent_ng_container_7_ng_container_51_Template, 7, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
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
} }
function FormContratoModalComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormContratoModalComponent_ng_container_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Salvar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.formContrato.invalid);
} }
const EMPTY_CONTRATO = {
    id: undefined,
    programId: 0,
    groupId: 0,
    patientId: 0,
    startingWeight: 0,
    goal: 0,
    hiringDate: "",
    startDate: "",
    notes: "",
    status: "ACTIVE",
};
class FormContratoModalComponent {
    constructor(pacienteService, registersService, programasService, gruposService, fb, modal) {
        this.pacienteService = pacienteService;
        this.registersService = registersService;
        this.programasService = programasService;
        this.gruposService = gruposService;
        this.fb = fb;
        this.modal = modal;
        this.subscriptions = [];
        this.formatMatches = (value) => value.name || '';
        this.search = (text$) => {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(val => this.pacienteService.findByDescriptionPaciente(val)));
        };
    }
    ngOnInit() {
        this.pacienteIdContrato = 0;
        this.listProgramas$ = this.programasService.findParams({
            params: {
                page: '0',
                size: '9999',
            }
        });
        this.listGrupos$ = this.gruposService.findParams({
            params: {
                page: '0',
                size: '9999',
            }
        });
        this.minDate = this.minDatepicker(new Date());
        this.isLoading$ = this.registersService.isLoading$;
        this.loadRegister();
    }
    resultFormatBandListValue(value) {
        return `${value === null || value === void 0 ? void 0 : value.name} - ${(value === null || value === void 0 ? void 0 : value.phone) || '*'}`;
    }
    inputFormatBandListValue(value) {
        if (value) {
            return `${value === null || value === void 0 ? void 0 : value.name} - ${(value === null || value === void 0 ? void 0 : value.phone) || '*'}`;
        }
        else {
            return '';
        }
    }
    loadRegister() {
        if (!this.id) {
            this.register = Object.assign({}, EMPTY_CONTRATO);
        }
        this.loadForm();
    }
    loadForm() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.pacienteIdContrato = ((_b = (_a = this.register) === null || _a === void 0 ? void 0 : _a.program) === null || _b === void 0 ? void 0 : _b.id) || this.register.programId;
        this.formContrato = this.fb.group({
            patientId: [
                {
                    value: ((_d = (_c = this.register) === null || _c === void 0 ? void 0 : _c.patient) === null || _d === void 0 ? void 0 : _d.id) || this.register.patientId,
                    disabled: this.register.status != "ACTIVE"
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]),
            ],
            programId: [
                {
                    value: ((_f = (_e = this.register) === null || _e === void 0 ? void 0 : _e.program) === null || _f === void 0 ? void 0 : _f.id) || this.register.programId,
                    disabled: this.register.status != "ACTIVE"
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]),
            ],
            groupId: [
                {
                    value: ((_h = (_g = this.register) === null || _g === void 0 ? void 0 : _g.group) === null || _h === void 0 ? void 0 : _h.id) || this.register.groupId,
                    disabled: this.register.status != "ACTIVE"
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])
            ],
            status: [
                {
                    value: this.register.status,
                    disabled: this.register.status != "ACTIVE"
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])
            ],
            startingWeight: [
                {
                    value: this.setValueAroud(this.register.startingWeight),
                    disabled: this.register.status != "ACTIVE"
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]),
            ],
            goal: [
                {
                    value: this.setValueAroud(this.register.goal),
                    disabled: this.register.status != "ACTIVE"
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])
            ],
            hiringDate: [
                {
                    value: this.register.hiringDate,
                    disabled: this.register.status != "ACTIVE"
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]),
            ],
            startDate: [
                {
                    value: this.register.startDate,
                    disabled: this.register.status != "ACTIVE"
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]),
            ],
            dateConclusion: [
                {
                    value: this.register.dateConclusion,
                    disabled: this.register.status != "ACTIVE"
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]),
            ],
            cancellationDate: [
                {
                    value: this.register.cancellationDate,
                    disabled: this.register.status != "ACTIVE"
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]),
            ],
            reasonCancellation: [
                {
                    value: this.register.reasonCancellation,
                    disabled: this.register.status != "ACTIVE"
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]),
            ],
            notes: [
                {
                    value: this.register.notes,
                    disabled: this.register.status != "ACTIVE"
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]),
            ],
            objetivo: [
                {
                    value: ((this.register.goal || 0) - (((_j = this.register) === null || _j === void 0 ? void 0 : _j.startingWeight) || 0)).toFixed(3),
                    disabled: this.register.status != "ACTIVE"
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]),
            ]
        });
    }
    setValueAroud(value) {
        return (value !== '' && !!value) ? parseFloat(value).toFixed(3) : 0.000;
    }
    save() {
        this.prepareRegister();
        if (this.id) {
            this.edit();
        }
        else {
            this.create();
        }
    }
    edit() {
        const sbUpdate = this.registersService
            .update(this.register)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            if (!!!res) {
                new _assets_js_layout_extended_messages_notify__WEBPACK_IMPORTED_MODULE_6__["Notify"]({ message: 'Contrato atualizado com sucesso!', type: 'success' }).show();
                this.modal.close();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((errorMessage) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.register);
        }))
            .subscribe((res) => (this.register = res));
        console.log(sbUpdate);
        this.subscriptions.push(sbUpdate);
    }
    create() {
        const sbCreate = this.registersService
            .create(this.register)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            if (!!!res) {
                new _assets_js_layout_extended_messages_notify__WEBPACK_IMPORTED_MODULE_6__["Notify"]({ message: 'Contrato criado com sucesso!', type: 'success' }).show();
                this.modal.close();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((errorMessage) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.register);
        }))
            .subscribe((res) => (this.register = res));
        this.subscriptions.push(sbCreate);
    }
    prepareRegister() {
        var _a;
        const formData = this.formContrato.value;
        this.register.patientId = Number(((_a = this.pacienteIdContrato) === null || _a === void 0 ? void 0 : _a.id) || this.pacienteIdContrato);
        this.register.programId = Number(formData.programId);
        this.register.groupId = Number(formData.groupId);
        this.register.startDate = formData.startDate;
        this.register.startingWeight = formData.startingWeight;
        this.register.goal = formData.goal;
        this.register.hiringDate = formData.hiringDate;
        this.register.notes = formData.notes;
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sb) => sb.unsubscribe());
    }
    // helpers for View
    isControlValid(controlName) {
        const control = this.formContrato.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.formContrato.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.formContrato.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.formContrato.controls[controlName];
        return control.dirty || control.touched;
    }
    sumObjetivo() {
        const formData = this.formContrato.value;
        return (((formData === null || formData === void 0 ? void 0 : formData.goal) || 0) - ((formData === null || formData === void 0 ? void 0 : formData.startingWeight) || 0)).toFixed(3);
    }
    isDisabled() {
        const formData = this.formContrato.value;
        if (!!formData.startDate) {
            let date = new Date(formData.startDate);
            let hiringDate = new Date(formData.hiringDate);
            this.minDateConclusao = this.minDatepicker(date.addDays(1));
            this.maxDateStart = this.minDatepicker(hiringDate);
            return false;
        }
        return true;
    }
    minDatepicker(day) {
        return {
            year: day.getFullYear(),
            month: Number(String(day.getMonth() + 1).padStart(2, "0")),
            day: Number(String(day.getDate()).padStart(2, "0"))
        };
    }
    paginate(paginator) {
        this.pacienteService.patchState({ paginator });
    }
    changeWeight(event) {
        if (event.target.value !== '') {
            event.target.value = parseFloat(event.target.value).toFixed(3);
        }
    }
}
FormContratoModalComponent.ɵfac = function FormContratoModalComponent_Factory(t) { return new (t || FormContratoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pacientes_service__WEBPACK_IMPORTED_MODULE_7__["PacientesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_8__["ContratosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_programas_service__WEBPACK_IMPORTED_MODULE_9__["ProgramasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_10__["GruposService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"])); };
FormContratoModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormContratoModalComponent, selectors: [["app-form-contrato-modal"]], inputs: { id: "id", register: "register" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_5__["CustomAdapter"] },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_5__["CustomDateParserFormatter"] }
        ])], decls: 12, vars: 6, consts: [[1, "modal-content"], [1, "modal-header"], ["id", "example-modal-sizes-title-lg", 1, "modal-title", "h4"], [4, "ngIf"], [1, "overlay", "overlay-block", "cursor-default", "modal-body", 2, "min-height", "404px"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-2", 3, "click"], [1, "overlay-layer", "bg-transparent"], [1, "spinner", "spinner-lg", "spinner-success"], ["class", "col-lg-12 pb-5", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], ["action", "#", 1, "form", "form-label-right", 3, "formGroup"], [1, "col-lg-12"], [1, "form-group", "row"], [1, "col-lg-6"], [1, "input-group", "input-group-solid"], ["type", "date", "name", "startDate", "placeholder", "dd/mm/yyyy", "formControlName", "startDate", 1, "form-control", "form-control-lg", "form-control-solid"], ["type", "date", "name", "hiringDate", "placeholder", "dd/mm/yyyy", "formControlName", "hiringDate", 1, "form-control", "form-control-lg", "form-control-solid"], ["formControlName", "programId", 1, "form-control", "form-control-lg", "form-control-solid"], ["value", "0", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "groupId", 1, "form-control", "form-control-lg", "form-control-solid"], [1, "col-lg-4"], [1, "form-label"], ["type", "number", "max", "600", "step", ",001", "placeholder", "Peso In\u00EDcial", "autocomplete", "off", "formControlName", "startingWeight", "name", "startingWeight", 1, "form-control", "form-control-lg", "form-control-solid", 3, "blur"], ["type", "number", "max", "600", "step", ",001", "placeholder", "Meta", "autocomplete", "off", "formControlName", "goal", "name", "goal", 1, "form-control", "form-control-lg", "form-control-solid", 3, "blur"], ["type", "number", "name", "objetivo", "placeholder", "Objetivo", "autocomplete", "off", "formControlName", "objetivo", "disabled", "", 1, "form-control", "form-control-lg", "form-control-solid", 3, "value"], ["type", "text", "name", "notes", "placeholder", "Observa\u00E7\u00E3o", "autocomplete", "off", "formControlName", "notes", 1, "form-control", "form-control-lg", "form-control-solid"], [1, "col-lg-12", "pb-5"], [1, "form-control", "form-control-lg", "form-control-solid"], [1, "form-group"], ["type", "text", "placeholder", "Pesquisar", 1, "form-control", "form-control-lg", "form-control-solid", 3, "ngbTypeahead", "resultFormatter", "inputFormatter", "ngModel", "ngModelChange"], [3, "value"], [1, "row", "col-lg-12"], ["class", "col-lg-6 pb-5", 4, "ngIf"], [1, "col-lg-6", "pb-5"], ["type", "submit", 1, "btn", "btn-success", "btn-elevate", 3, "disabled", "click"]], template: function FormContratoModalComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormContratoModalComponent_Template_button_click_10_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Fechar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register && ctx.register.status == "ACTIVE");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: [".input-group-append[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGZvcm0tY29udHJhdG8tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoiZm9ybS1jb250cmF0by1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cC1hcHBlbmQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormContratoModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-form-contrato-modal",
                templateUrl: "./form-contrato-modal.component.html",
                styleUrls: ["./form-contrato-modal.component.scss"],
                providers: [
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_5__["CustomAdapter"] },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_5__["CustomDateParserFormatter"] }
                ]
            }]
    }], function () { return [{ type: src_app_services_pacientes_service__WEBPACK_IMPORTED_MODULE_7__["PacientesService"] }, { type: src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_8__["ContratosService"] }, { type: src_app_services_programas_service__WEBPACK_IMPORTED_MODULE_9__["ProgramasService"] }, { type: src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_10__["GruposService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], register: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "hhUZ":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/contratos/components/delete-contrato-modal/delete-contrato-modal.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: DeleteContratoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteContratoModalComponent", function() { return DeleteContratoModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/contratos.service */ "qPuc");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DeleteContratoModalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DeleteContratoModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Paciente sendo exclu\u00EDdo...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DeleteContratoModalComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tem certeza de que deseja excluir este registro permanentemente?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class DeleteContratoModalComponent {
    constructor(service, modal) {
        this.service = service;
        this.modal = modal;
        this.isLoading = false;
        this.subscriptions = [];
    }
    ngOnInit() {
    }
    delete() {
        this.isLoading = true;
        const sb = this.service.delete(this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), // Remove it from your code (just for showing loading)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.modal.close()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            this.modal.dismiss(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.isLoading = false;
        })).subscribe();
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
DeleteContratoModalComponent.ɵfac = function DeleteContratoModalComponent_Factory(t) { return new (t || DeleteContratoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_3__["ContratosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"])); };
DeleteContratoModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteContratoModalComponent, selectors: [["app-delete-contrato-modal"]], inputs: { id: "id" }, decls: 14, vars: 3, consts: [[4, "ngIf"], [1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-elevate", 3, "click"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"]], template: function DeleteContratoModalComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteContratoModalComponent_Template_button_click_9_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteContratoModalComponent_Template_button_click_12_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Excluir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtY29udHJhdG8tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteContratoModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-contrato-modal',
                templateUrl: './delete-contrato-modal.component.html',
                styleUrls: ['./delete-contrato-modal.component.scss']
            }]
    }], function () { return [{ type: src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_3__["ContratosService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "oits":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/contratos/components/list-contratos/list-contratos.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ListContratosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListContratosComponent", function() { return ListContratosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _cancel_contrato_modal_cancel_contrato_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cancel-contrato-modal/cancel-contrato-modal.component */ "3IVP");
/* harmony import */ var _conclued_contrato_modal_conclued_contrato_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../conclued-contrato-modal/conclued-contrato-modal.component */ "vCGz");
/* harmony import */ var _delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delete-contrato-modal/delete-contrato-modal.component */ "hhUZ");
/* harmony import */ var _form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form-contrato-modal/form-contrato-modal.component */ "gH8f");
/* harmony import */ var _reactivate_contrato_modal_reactivate_contrato_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reactivate-contrato-modal/reactivate-contrato-modal.component */ "bzxI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_contratos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/contratos.service */ "qPuc");
/* harmony import */ var src_app_services_programas_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/programas.service */ "Zd6I");
/* harmony import */ var src_app_services_pacientes_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/pacientes.service */ "Av/U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../_metronic/shared/crud-table/components/sort-icon/sort-icon.component */ "xGIk");
/* harmony import */ var _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../_metronic/shared/crud-table/components/paginator/paginator.component */ "gBr1");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");
/* harmony import */ var _metronic_core_pipes_mask_weight_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../_metronic/core/pipes/mask-weight.pipe */ "TV8r");


















function ListContratosComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const register_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", register_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](register_r2.name);
} }
function ListContratosComponent_tr_60_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ativo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ListContratosComponent_tr_60_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Conclu\u00EDdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ListContratosComponent_tr_60_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancelado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ListContratosComponent_tr_60_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListContratosComponent_tr_60_ng_container_28_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const register_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.editRegister(register_r3.id, register_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListContratosComponent_tr_60_ng_container_28_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const register_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.cancelContrato(register_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListContratosComponent_tr_60_ng_container_28_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const register_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.concluedContrato(register_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Files/Deleted-file.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Code/Lock-circle.svg");
} }
function ListContratosComponent_tr_60_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListContratosComponent_tr_60_ng_container_29_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const register_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.editRegister(register_r3.id, register_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Visible.svg");
} }
function ListContratosComponent_tr_60_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListContratosComponent_tr_60_ng_container_30_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const register_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.reactivateContrato(register_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Unlock.svg");
} }
function ListContratosComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const register_r3 = ctx.$implicit;
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
} }
class ListContratosComponent {
    constructor(fb, modalService, service, programasService, pacienteService) {
        this.fb = fb;
        this.modalService = modalService;
        this.service = service;
        this.programasService = programasService;
        this.pacienteService = pacienteService;
        this.subscriptions = [];
        this.search = (text$) => {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(val => this.pacienteService.findByDescriptionPaciente(val)));
        };
    }
    ngOnInit() {
        this.service.setDefaults();
        this.service.fetch();
        this.grouping = this.service.grouping;
        this.paginator = this.service.paginator;
        this.sorting = this.service.sorting;
        const sb = this.service.isLoading$.subscribe((res) => (this.isLoading = res));
        this.subscriptions.push(sb);
        this.listProgramas$ = this.programasService.findParams({
            params: {
                page: '0',
                size: '9999',
            }
        });
        this.filterForm();
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sb) => sb.unsubscribe());
    }
    // filtration
    filterForm() {
        this.filterGroup = this.fb.group({
            status: [""],
            programId: [""],
            patientId: [""]
        });
        this.subscriptions.push(this.filterGroup.controls.status.valueChanges.subscribe(() => this.filter()));
        this.subscriptions.push(this.filterGroup.controls.programId.valueChanges.subscribe(() => this.filter()));
        this.subscriptions.push(this.filterGroup.controls.patientId.valueChanges.subscribe(() => {
            if (typeof this.filterGroup.get('patientId').value === 'object') {
                this.filter();
            }
            else {
                if (this.filterGroup.get('patientId').value === '') {
                    this.filter();
                }
            }
        }));
    }
    filter() {
        const filter = {};
        const status = this.filterGroup.get("status").value;
        filter["status"] = status;
        const programId = this.filterGroup.get("programId").value;
        filter["programId"] = programId;
        const patientId = this.filterGroup.get("patientId").value;
        if (typeof this.filterGroup.get("patientId").value === 'object') {
            filter["patientId"] = patientId.id;
        }
        else {
            filter["patientId"] = undefined;
        }
        this.service.patchState({ filter });
    }
    // sorting
    sort(column) {
        const sorting = this.sorting;
        const isActiveColumn = sorting.column === column;
        if (!isActiveColumn) {
            sorting.column = column;
            sorting.direction = "asc";
        }
        else {
            sorting.direction = sorting.direction === "asc" ? "desc" : "asc";
        }
        this.service.patchState({ sorting });
    }
    // pagination
    paginate(paginator) {
        this.service.patchState({ paginator });
    }
    // // form actions
    create() {
        this.edit(undefined);
    }
    edit(id) {
        const modalRef = this.modalService.open(_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_5__["FormContratoModalComponent"], {
            size: "xl",
        });
        modalRef.componentInstance.id = id;
        modalRef.result.then(() => this.service.fetch(), () => { });
    }
    editRegister(id, register) {
        const modalRef = this.modalService.open(_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_5__["FormContratoModalComponent"], {
            size: "xl",
        });
        modalRef.componentInstance.id = id;
        modalRef.componentInstance.register = register;
        modalRef.result.then(() => this.service.fetch(), () => { });
    }
    delete(id) {
        const modalRef = this.modalService.open(_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_4__["DeleteContratoModalComponent"]);
        modalRef.componentInstance.id = id;
        modalRef.result.then(() => this.service.fetch(), () => { });
    }
    cancelContrato(register) {
        const modalRef = this.modalService.open(_cancel_contrato_modal_cancel_contrato_modal_component__WEBPACK_IMPORTED_MODULE_2__["CancelContratoModalComponent"]);
        modalRef.componentInstance.id = register.id;
        modalRef.componentInstance.nomeCliente = `${register.patient.name} - ${register.patient.phone}`;
        modalRef.componentInstance.register = register;
        modalRef.result.then(() => this.service.fetch(), () => { });
    }
    reactivateContrato(register) {
        const modalRef = this.modalService.open(_reactivate_contrato_modal_reactivate_contrato_modal_component__WEBPACK_IMPORTED_MODULE_6__["ReactivateContratoModalComponent"]);
        modalRef.componentInstance.id = register.id;
        modalRef.componentInstance.nomeCliente = `${register.patient.name} - ${register.patient.phone}`;
        modalRef.componentInstance.register = register;
        modalRef.result.then(() => this.service.fetch(), () => { });
    }
    concluedContrato(register) {
        const modalRef = this.modalService.open(_conclued_contrato_modal_conclued_contrato_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConcluedContratoModalComponent"]);
        modalRef.componentInstance.id = register.id;
        modalRef.componentInstance.nomeCliente = `${register.patient.name} - ${register.patient.phone}`;
        modalRef.componentInstance.register = register;
        modalRef.result.then(() => this.service.fetch(), () => { });
    }
    deleteSelected() {
        const modalRef = this.modalService.open(_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_4__["DeleteContratoModalComponent"]);
        modalRef.componentInstance.ids = this.grouping.getSelectedRows();
        modalRef.result.then(() => this.service.fetch(), () => { });
    }
    updateStatusForSelected() {
        const modalRef = this.modalService.open(_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_4__["DeleteContratoModalComponent"]);
        modalRef.componentInstance.ids = this.grouping.getSelectedRows();
        modalRef.result.then(() => this.service.fetch(), () => { });
    }
    fetchSelected() {
        const modalRef = this.modalService.open(_delete_contrato_modal_delete_contrato_modal_component__WEBPACK_IMPORTED_MODULE_4__["DeleteContratoModalComponent"]);
        modalRef.componentInstance.ids = this.grouping.getSelectedRows();
        modalRef.result.then(() => this.service.fetch(), () => { });
    }
    resultFormatBandListValue(value) {
        return `${value === null || value === void 0 ? void 0 : value.name} - ${(value === null || value === void 0 ? void 0 : value.phone) || '*'}`;
    }
    inputFormatBandListValue(value) {
        if (value) {
            return `${value === null || value === void 0 ? void 0 : value.name} - ${(value === null || value === void 0 ? void 0 : value.phone) || '*'}`;
        }
        else {
            return '';
        }
    }
}
ListContratosComponent.ɵfac = function ListContratosComponent_Factory(t) { return new (t || ListContratosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contratos_service__WEBPACK_IMPORTED_MODULE_9__["ContratosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_programas_service__WEBPACK_IMPORTED_MODULE_10__["ProgramasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pacientes_service__WEBPACK_IMPORTED_MODULE_11__["PacientesService"])); };
ListContratosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListContratosComponent, selectors: [["app-list-contratos"]], inputs: { paciente: "paciente" }, decls: 63, vars: 29, consts: [[1, "mt-5"], [1, "form", "form-label-right"], [1, "form-group", "row"], [1, "col-lg-12"], [1, "row", 3, "formGroup"], [1, "col-lg-4"], [1, "form-text", "text-muted"], ["name", "status", "placeholder", "Filtro por status", "formControlName", "status", 1, "form-control"], ["value", ""], ["value", "ACTIVE"], ["value", "COMPLETED"], ["value", "CANCELED"], ["placeholder", "Filtro por Programa", "name", "programId", "formControlName", "programId", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Pesquisar", "formControlName", "patientId", 1, "form-control", 3, "ngbTypeahead", "resultFormatter", "inputFormatter"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-head-custom", "table-vertical-center", "overflow-hidden"], ["column", "patient", 3, "activeColumn", "activeDirection", "sort"], ["column", "status", 3, "activeColumn", "activeDirection", "sort"], ["column", "program", 3, "activeColumn", "activeDirection", "sort"], ["column", "group", 3, "activeColumn", "activeDirection", "sort"], ["column", "startDate", 3, "activeColumn", "activeDirection", "sort"], ["column", "hiringDate", 3, "activeColumn", "activeDirection", "sort"], ["column", "startingWeight", 3, "activeColumn", "activeDirection", "sort"], ["column", "goal", 3, "activeColumn", "activeDirection", "sort"], ["column", "objetivo", 3, "activeColumn"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", 3, "paginator", "isLoading", "paginate"], [3, "value"], [1, "label", "label-lg", "label-inline", "w-100"], [4, "ngIf"], [2, "display", "flex"], ["title", "Alterar", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], ["title", "Cancelar", 1, "btn", "btn-icon", "btn-light", "btn-hover-danger", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-danger", 3, "inlineSVG"], ["title", "Encerrar", 1, "btn", "btn-icon", "btn-light", "btn-hover-info", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-info", 3, "inlineSVG"], ["title", "Visualizar", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["title", "Reativar", 1, "btn", "btn-icon", "btn-light", "btn-hover-success", "btn-sm", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-success", 3, "inlineSVG"]], template: function ListContratosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Situa\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Conclu\u00EDdo");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ListContratosComponent_Template_app_sort_icon_sort_34_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " SITUA\u00C7\u00C3O ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "app-sort-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ListContratosComponent_Template_app_sort_icon_sort_37_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " PROGRAMA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "app-sort-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ListContratosComponent_Template_app_sort_icon_sort_40_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " GRUPO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "app-sort-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ListContratosComponent_Template_app_sort_icon_sort_43_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " IN\u00CDCIO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "app-sort-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ListContratosComponent_Template_app_sort_icon_sort_46_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " CONCLUS\u00C3O ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "app-sort-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ListContratosComponent_Template_app_sort_icon_sort_49_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " PESO INICIAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "app-sort-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ListContratosComponent_Template_app_sort_icon_sort_52_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " META ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "app-sort-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ListContratosComponent_Template_app_sort_icon_sort_55_listener($event) { return ctx.sort($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paginate", function ListContratosComponent_Template_app_paginator_paginate_62_listener($event) { return ctx.paginate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTypeahead"], _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_13__["SortIconComponent"], _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_14__["PaginatorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_15__["InlineSVGDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _metronic_core_pipes_mask_weight_pipe__WEBPACK_IMPORTED_MODULE_16__["MaskWeightPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWNvbnRyYXRvcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListContratosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-list-contratos",
                templateUrl: "./list-contratos.component.html",
                styleUrls: ["./list-contratos.component.scss"],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] }, { type: _services_contratos_service__WEBPACK_IMPORTED_MODULE_9__["ContratosService"] }, { type: src_app_services_programas_service__WEBPACK_IMPORTED_MODULE_10__["ProgramasService"] }, { type: src_app_services_pacientes_service__WEBPACK_IMPORTED_MODULE_11__["PacientesService"] }]; }, { paciente: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "qPuc":
/*!***********************************************!*\
  !*** ./src/app/services/contratos.service.ts ***!
  \***********************************************/
/*! exports provided: ContratosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratosService", function() { return ContratosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_metronic/shared/crud-table */ "Br0f");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");







class ContratosService extends _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["TableService"] {
    constructor(http) {
        super(http);
        this.API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/agreements`;
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
    updateStatusContrato(id, register) {
        return this.http.put(`${this.API_URL}/${id}`, register);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
ContratosService.ɵfac = function ContratosService_Factory(t) { return new (t || ContratosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ContratosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContratosService, factory: ContratosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContratosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }] }]; }, null); })();


/***/ }),

/***/ "r5Qa":
/*!**********************************************************!*\
  !*** ./src/app/modules/contratos/contratos.component.ts ***!
  \**********************************************************/
/*! exports provided: ContratosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratosComponent", function() { return ContratosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/form-contrato-modal/form-contrato-modal.component */ "gH8f");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_contratos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/contratos.service */ "qPuc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/list-contratos/list-contratos.component */ "oits");







class ContratosComponent {
    constructor(modalService, service, route) {
        this.modalService = modalService;
        this.service = service;
        this.route = route;
    }
    ngOnInit() {
        if (this.route.params['value'].hasOwnProperty('new_register'))
            this.create();
    }
    create() {
        const modalRef = this.modalService.open(_components_form_contrato_modal_form_contrato_modal_component__WEBPACK_IMPORTED_MODULE_1__["FormContratoModalComponent"], {
            size: "xl",
        });
        modalRef.componentInstance.id = undefined;
        modalRef.result.then(() => this.service.fetch(), () => { });
    }
}
ContratosComponent.ɵfac = function ContratosComponent_Factory(t) { return new (t || ContratosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contratos_service__WEBPACK_IMPORTED_MODULE_3__["ContratosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ContratosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContratosComponent, selectors: [["app-contratos"]], inputs: { paciente: "paciente" }, decls: 11, vars: 0, consts: [[1, "card", "card-custom", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-toolbar"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-plus"], [1, "card-body"]], template: function ContratosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Manuten\u00E7\u00E3o de Contratos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContratosComponent_Template_button_click_6_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Novo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-list-contratos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_5__["ListContratosComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cmF0b3MuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContratosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-contratos",
                templateUrl: "./contratos.component.html",
                styleUrls: ["./contratos.component.scss"],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: _services_contratos_service__WEBPACK_IMPORTED_MODULE_3__["ContratosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, { paciente: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vCGz":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/contratos/components/conclued-contrato-modal/conclued-contrato-modal.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ConcluedContratoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcluedContratoModalComponent", function() { return ConcluedContratoModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_metronic/core */ "WsYS");
/* harmony import */ var _assets_js_layout_extended_messages_notify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../assets/js/layout/extended/messages/notify */ "4pWf");
/* harmony import */ var src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/contratos.service */ "qPuc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











function ConcluedContratoModalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ConcluedContratoModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contrato est\u00E1 sendo encerrado...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ConcluedContratoModalComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tem certeza de que deseja ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "encerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " este contrato permanentemente?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ConcluedContratoModalComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Data de encerramento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConcluedContratoModalComponent_ng_container_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.dateConclusion = $event; })("ngModelChange", function ConcluedContratoModalComponent_ng_container_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, ctx_r3.currentDate, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.dateConclusion);
} }
function ConcluedContratoModalComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConcluedContratoModalComponent_ng_container_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.showFieldObservacao(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ConcluedContratoModalComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConcluedContratoModalComponent_ng_container_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.conclude(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Salvar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.isDisabled);
} }
class ConcluedContratoModalComponent {
    constructor(service, modal) {
        this.service = service;
        this.modal = modal;
        this.isLoading = false;
        this.isEditable = false;
        this.isDisabled = true;
        this.subscriptions = [];
        this.currentDate = new Date();
    }
    ngOnInit() {
    }
    showFieldObservacao() {
        this.isEditable = true;
    }
    conclude() {
        this.isLoading = true;
        this.register.dateConclusion = this.dateConclusion;
        this.register.status = 'COMPLETED';
        this.register.groupId = this.register.group.id;
        this.register.programId = this.register.program.id;
        const sb = this.service.updateStatusContrato(this.id, this.register).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            new _assets_js_layout_extended_messages_notify__WEBPACK_IMPORTED_MODULE_5__["Notify"]({ message: 'Contrato encerrado com sucesso!', type: 'success' }).show();
            this.modal.close();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => {
            this.modal.dismiss(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            this.isLoading = false;
        })).subscribe();
        this.subscriptions.push(sb);
    }
    onChange(event) {
        this.isDisabled = !((event === null || event === void 0 ? void 0 : event.length) > 0);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
ConcluedContratoModalComponent.ɵfac = function ConcluedContratoModalComponent_Factory(t) { return new (t || ConcluedContratoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_6__["ContratosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
ConcluedContratoModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConcluedContratoModalComponent, selectors: [["app-conclued-contrato-modal"]], inputs: { id: "id", nomeCliente: "nomeCliente", register: "register" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomAdapter"] },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomDateParserFormatter"] }
        ])], decls: 15, vars: 7, consts: [[4, "ngIf"], [1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"], [1, "mt-4"], ["type", "date", "name", "startDate", "placeholder", "dd/mm/yyyy", 1, "form-control", "form-control-lg", "form-control-solid", 3, "max", "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "disabled", "click"]], template: function ConcluedContratoModalComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConcluedContratoModalComponent_Template_button_click_10_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " N\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ConcluedContratoModalComponent_ng_container_13_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ConcluedContratoModalComponent_ng_container_14_Template, 3, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25jbHVlZC1jb250cmF0by1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConcluedContratoModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-conclued-contrato-modal',
                templateUrl: './conclued-contrato-modal.component.html',
                styleUrls: ['./conclued-contrato-modal.component.scss'],
                providers: [
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomAdapter"] },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomDateParserFormatter"] }
                ]
            }]
    }], function () { return [{ type: src_app_services_contratos_service__WEBPACK_IMPORTED_MODULE_6__["ContratosService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nomeCliente: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], register: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~modules-contratos-contratos-module~modules-pacientes-pacientes-module-es2015.js.map