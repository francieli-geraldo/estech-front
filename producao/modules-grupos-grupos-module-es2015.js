(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-grupos-grupos-module"],{

/***/ "1Jq1":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/grupos/components/delete-grupos-modal/delete-grupos-modal.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DeleteGruposModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteGruposModalComponent", function() { return DeleteGruposModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/grupos.service */ "dtOv");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DeleteGruposModalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DeleteGruposModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Grupo sendo exclu\u00EDdo...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DeleteGruposModalComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tem certeza de que deseja excluir este registro permanentemente?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class DeleteGruposModalComponent {
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
DeleteGruposModalComponent.ɵfac = function DeleteGruposModalComponent_Factory(t) { return new (t || DeleteGruposModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_3__["GruposService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"])); };
DeleteGruposModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteGruposModalComponent, selectors: [["app-delete-grupos-modal"]], inputs: { id: "id" }, decls: 14, vars: 3, consts: [[4, "ngIf"], [1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-elevate", 3, "click"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"]], template: function DeleteGruposModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DeleteGruposModalComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Excluir Grupo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DeleteGruposModalComponent_ng_container_5_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DeleteGruposModalComponent_ng_container_6_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteGruposModalComponent_Template_button_click_9_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteGruposModalComponent_Template_button_click_12_listener() { return ctx.delete(); });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtZ3J1cG9zLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteGruposModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-grupos-modal',
                templateUrl: './delete-grupos-modal.component.html',
                styleUrls: ['./delete-grupos-modal.component.scss']
            }]
    }], function () { return [{ type: src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_3__["GruposService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "1Ph4":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/grupos/components/form-grupos-modal/form-grupos-modal.component.ts ***!
  \********************************************************************************************/
/*! exports provided: FormGruposModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGruposModalComponent", function() { return FormGruposModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_metronic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_metronic/core */ "WsYS");
/* harmony import */ var src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/grupos.service */ "dtOv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");











function FormGruposModalComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Alterar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FormGruposModalComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Novo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FormGruposModalComponent_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("'", ctx_r6.register.name, "'");
} }
function FormGruposModalComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormGruposModalComponent_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormGruposModalComponent_ng_container_3_ng_container_2_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " grupo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormGruposModalComponent_ng_container_3_ng_container_4_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.register.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.register.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.register.id);
} }
function FormGruposModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FormGruposModalComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Descri\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.isControlInvalid("name"))("is-valid", ctx_r2.isControlValid("name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.isControlInvalid("description"))("is-valid", ctx_r2.isControlValid("description"));
} }
function FormGruposModalComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormGruposModalComponent_ng_container_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Salvar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.formGroup.invalid);
} }
const EMPTY = {
    id: undefined,
    name: "",
    description: "",
};
class FormGruposModalComponent {
    constructor(registersService, fb, modal) {
        this.registersService = registersService;
        this.fb = fb;
        this.modal = modal;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.isLoading$ = this.registersService.isLoading$;
        this.loadRegister();
    }
    loadRegister() {
        if (!this.id) {
            this.register = EMPTY;
        }
        this.loadForm();
    }
    loadForm() {
        this.formGroup = this.fb.group({
            name: [
                this.register.name,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]),
            ],
            description: [
                this.register.description,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]),
            ],
        });
    }
    save() {
        this.prepareRegister();
        if (this.register.id) {
            this.edit();
        }
        else {
            this.create();
        }
    }
    edit() {
        const sbUpdate = this.registersService
            .update(this.register)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.modal.close();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((errorMessage) => {
            this.modal.dismiss(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.register);
        }))
            .subscribe((res) => (this.register = res));
        console.log(sbUpdate);
        this.subscriptions.push(sbUpdate);
    }
    create() {
        const sbCreate = this.registersService
            .create(this.register)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.modal.close();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((errorMessage) => {
            this.modal.dismiss(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.register);
        }))
            .subscribe((res) => (this.register = res));
        this.subscriptions.push(sbCreate);
    }
    prepareRegister() {
        const formData = this.formGroup.value;
        this.register.name = formData.name;
        this.register.description = formData.description;
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sb) => sb.unsubscribe());
    }
    // helpers for View
    isControlValid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.formGroup.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.dirty || control.touched;
    }
}
FormGruposModalComponent.ɵfac = function FormGruposModalComponent_Factory(t) { return new (t || FormGruposModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_6__["GruposService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"])); };
FormGruposModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormGruposModalComponent, selectors: [["app-form-grupos-modal"]], inputs: { id: "id", register: "register" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_5__["CustomAdapter"] },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_5__["CustomDateParserFormatter"] },
        ])], decls: 12, vars: 6, consts: [[1, "modal-content"], [1, "modal-header"], ["id", "example-modal-sizes-title-lg", 1, "modal-title", "h4"], [4, "ngIf"], [1, "overlay", "overlay-block", "cursor-default", "modal-body", 2, "min-height", "200px"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-2", 3, "click"], [1, "overlay-layer", "bg-transparent"], [1, "spinner", "spinner-lg", "spinner-success"], ["action", "#", 1, "form", "form-label-right", 3, "formGroup"], [1, "form-group", "row"], [1, "col-lg"], [1, "form-label"], ["type", "text", "name", "name", "placeholder", "Nome do grupo", "autocomplete", "off", "formControlName", "name", 1, "form-control", "form-control-lg", "form-control-solid"], ["rows", "2", "name", "description", "placeholder", "Descri\u00E7\u00E3o sobre o programa", "autocomplete", "off", "formControlName", "description", 1, "form-control", "form-control-lg", "form-control-solid"], ["type", "submit", 1, "btn", "btn-success", "btn-elevate", 3, "disabled", "click"]], template: function FormGruposModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormGruposModalComponent_ng_container_3_Template, 5, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormGruposModalComponent_ng_container_5_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormGruposModalComponent_ng_container_7_Template, 12, 9, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormGruposModalComponent_Template_button_click_9_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormGruposModalComponent_ng_container_11_Template, 3, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWdydXBvcy1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormGruposModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-form-grupos-modal",
                templateUrl: "./form-grupos-modal.component.html",
                styleUrls: ["./form-grupos-modal.component.scss"],
                providers: [
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_5__["CustomAdapter"] },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"], useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_5__["CustomDateParserFormatter"] },
                ],
            }]
    }], function () { return [{ type: src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_6__["GruposService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], register: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "DZHc":
/*!*********************************************************!*\
  !*** ./src/app/modules/grupos/grupos-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProgramasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramasRoutingModule", function() { return ProgramasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _grupos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grupos.component */ "WgA9");





const routes = [
    {
        path: '',
        component: _grupos_component__WEBPACK_IMPORTED_MODULE_2__["GruposComponent"]
    },
    // {
    //   path: 'add',
    //   component: EditPacienteComponent
    // },
    // {
    //   path: 'edit',
    //   component: EditPacienteComponent
    // },
    // {
    //   path: 'edit/:id',
    //   component: EditPacienteComponent
    // },
    { path: '', redirectTo: 'programas', pathMatch: 'full' },
    { path: '**', redirectTo: 'programas', pathMatch: 'full' }
];
class ProgramasRoutingModule {
}
ProgramasRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProgramasRoutingModule });
ProgramasRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProgramasRoutingModule_Factory(t) { return new (t || ProgramasRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProgramasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgramasRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "FqbR":
/*!*************************************************!*\
  !*** ./src/app/modules/grupos/grupos.module.ts ***!
  \*************************************************/
/*! exports provided: GruposModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposModule", function() { return GruposModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _grupos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grupos.component */ "WgA9");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _grupos_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grupos-routing.module */ "DZHc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");
/* harmony import */ var src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table */ "Br0f");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_form_grupos_modal_form_grupos_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/form-grupos-modal/form-grupos-modal.component */ "1Ph4");
/* harmony import */ var _components_delete_grupos_modal_delete_grupos_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/delete-grupos-modal/delete-grupos-modal.component */ "1Jq1");












class GruposModule {
}
GruposModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GruposModule });
GruposModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GruposModule_Factory(t) { return new (t || GruposModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _grupos_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProgramasRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"],
            src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_7__["CRUDTableModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GruposModule, { declarations: [_grupos_component__WEBPACK_IMPORTED_MODULE_2__["GruposComponent"],
        _components_form_grupos_modal_form_grupos_modal_component__WEBPACK_IMPORTED_MODULE_9__["FormGruposModalComponent"],
        _components_delete_grupos_modal_delete_grupos_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteGruposModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _grupos_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProgramasRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"],
        src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_7__["CRUDTableModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GruposModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _grupos_component__WEBPACK_IMPORTED_MODULE_2__["GruposComponent"],
                    _components_form_grupos_modal_form_grupos_modal_component__WEBPACK_IMPORTED_MODULE_9__["FormGruposModalComponent"],
                    _components_delete_grupos_modal_delete_grupos_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteGruposModalComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _grupos_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProgramasRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"],
                    src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_7__["CRUDTableModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerModule"]
                ],
                entryComponents: [
                    _components_form_grupos_modal_form_grupos_modal_component__WEBPACK_IMPORTED_MODULE_9__["FormGruposModalComponent"],
                    _components_delete_grupos_modal_delete_grupos_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteGruposModalComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "WgA9":
/*!****************************************************!*\
  !*** ./src/app/modules/grupos/grupos.component.ts ***!
  \****************************************************/
/*! exports provided: GruposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposComponent", function() { return GruposComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _components_delete_grupos_modal_delete_grupos_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/delete-grupos-modal/delete-grupos-modal.component */ "1Jq1");
/* harmony import */ var _components_form_grupos_modal_form_grupos_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form-grupos-modal/form-grupos-modal.component */ "1Ph4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/grupos.service */ "dtOv");
/* harmony import */ var _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/sort-icon/sort-icon.component */ "xGIk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/paginator/paginator.component */ "gBr1");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");












function GruposComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GruposComponent_tr_24_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const register_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.editRegister(register_r1.id, register_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const register_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](register_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](register_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
} }
class GruposComponent {
    constructor(fb, modalService, service) {
        this.fb = fb;
        this.modalService = modalService;
        this.service = service;
        this.subscriptions = [];
    }
    // angular lifecircle hooks
    ngOnInit() {
        this.filterForm();
        this.searchForm();
        this.service.setDefaults();
        this.service.fetch();
        this.grouping = this.service.grouping;
        this.paginator = this.service.paginator;
        this.sorting = this.service.sorting;
        const sb = this.service.isLoading$.subscribe((res) => (this.isLoading = res));
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sb) => sb.unsubscribe());
    }
    // filtration
    filterForm() {
        this.filterGroup = this.fb.group({
            status: [""],
            type: [""],
            searchTerm: [""],
        });
        this.subscriptions.push(this.filterGroup.controls.status.valueChanges.subscribe(() => this.filter()));
        this.subscriptions.push(this.filterGroup.controls.type.valueChanges.subscribe(() => this.filter()));
    }
    filter() {
        const filter = {};
        const status = this.filterGroup.get("status").value;
        if (status) {
            filter["status"] = status;
        }
        const type = this.filterGroup.get("type").value;
        if (type) {
            filter["type"] = type;
        }
        // this.service.patchState({ filter });
    }
    // search
    searchForm() {
        this.searchGroup = this.fb.group({
            searchTerm: [""],
        });
        const searchEvent = this.searchGroup.controls.searchTerm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(value => value.trim()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe((val) => this.service.patchState({ filter: { search: val } }));
        this.subscriptions.push(searchEvent);
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
        this.editRegister(undefined, undefined);
    }
    edit(id) {
        const modalRef = this.modalService.open(_components_form_grupos_modal_form_grupos_modal_component__WEBPACK_IMPORTED_MODULE_3__["FormGruposModalComponent"], {
            size: "xl",
        });
        modalRef.componentInstance.id = id;
        modalRef.componentInstance.register = id;
        modalRef.result.then(() => this.service.fetch(), () => { });
    }
    editRegister(id, register) {
        const modalRef = this.modalService.open(_components_form_grupos_modal_form_grupos_modal_component__WEBPACK_IMPORTED_MODULE_3__["FormGruposModalComponent"], {
            size: "xl",
        });
        modalRef.componentInstance.id = id;
        modalRef.componentInstance.register = register;
        modalRef.result.then(() => this.service.fetch(), () => { });
    }
    delete(id) {
        const modalRef = this.modalService.open(_components_delete_grupos_modal_delete_grupos_modal_component__WEBPACK_IMPORTED_MODULE_2__["DeleteGruposModalComponent"]);
        modalRef.componentInstance.id = id;
        modalRef.result.then(() => this.service.fetch(), () => { });
    }
    deleteSelected() {
        // const modalRef = this.modalService.open(DeleteContratoModalComponent);
        // modalRef.componentInstance.ids = this.grouping.getSelectedRows();
        // modalRef.result.then(
        //   () => this.service.fetch(),
        //   () => {}
        // );
    }
    updateStatusForSelected() {
        // const modalRef = this.modalService.open(DeleteContratoModalComponent);
        // modalRef.componentInstance.ids = this.grouping.getSelectedRows();
        // modalRef.result.then(
        //   () => this.service.fetch(),
        //   () => {}
        // );
    }
    fetchSelected() {
        // const modalRef = this.modalService.open(DeleteContratoModalComponent);
        // modalRef.componentInstance.ids = this.grouping.getSelectedRows();
        // modalRef.result.then(
        //   () => this.service.fetch(),
        //   () => {}
        // );
    }
    getProgramas() {
        return [
            { id: 1, description: "Emagrece você" },
            { id: 2, description: "Engorda você" },
            { id: 3, description: "Casa você" },
            { id: 4, description: "Separa você" },
        ];
    }
}
GruposComponent.ɵfac = function GruposComponent_Factory(t) { return new (t || GruposComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_6__["GruposService"])); };
GruposComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GruposComponent, selectors: [["app-grupos"]], decls: 27, vars: 10, consts: [[1, "card", "card-custom", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-toolbar"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-plus"], [1, "card-body"], [1, "form", "form-label-right"], [1, "form-group", "row"], [1, "col-lg", 3, "formGroup"], ["type", "text", "name", "searchText", "placeholder", "Pesquisar", "value", "", "formControlName", "searchTerm", 1, "form-control"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-head-custom", "table-vertical-center", "overflow-hidden"], ["column", "name", 3, "activeColumn", "activeDirection", "sort"], ["column", "description", 3, "activeColumn", "activeDirection", "sort"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", 3, "paginator", "isLoading", "paginate"], ["title", "Alterar", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"]], template: function GruposComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Manuten\u00E7\u00E3o de Grupos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GruposComponent_Template_button_click_6_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Novo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " NOME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-sort-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function GruposComponent_Template_app_sort_icon_sort_19_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " DESCRI\u00C7\u00C3O ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-sort-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function GruposComponent_Template_app_sort_icon_sort_22_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, GruposComponent_tr_24_Template, 8, 3, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "app-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paginate", function GruposComponent_Template_app_paginator_paginate_26_listener($event) { return ctx.paginate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 8, ctx.service.items$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paginator", ctx.paginator)("isLoading", ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_7__["SortIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_9__["PaginatorComponent"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_10__["InlineSVGDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncnVwb3MuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GruposComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grupos',
                templateUrl: './grupos.component.html',
                styleUrls: ['./grupos.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_6__["GruposService"] }]; }, null); })();


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
//# sourceMappingURL=modules-grupos-grupos-module-es2015.js.map