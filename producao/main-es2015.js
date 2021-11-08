(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+BVi":
/*!********************************************************!*\
  !*** ./src/app/modules/auth/_services/auth.service.ts ***!
  \********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _auth_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-http */ "NtJg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");








class AuthService {
    constructor(authHttpService, router, _sanitizer) {
        this.authHttpService = authHttpService;
        this.router = router;
        this._sanitizer = _sanitizer;
        // private fields
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        this.authLocalStorageToken = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appVersion}-${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].USERDATA_KEY}`;
        this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.currentUser$ = this.currentUserSubject.asObservable();
        this.isLoading$ = this.isLoadingSubject.asObservable();
        // const subscr = this.getUserByToken().subscribe();
        // this.unsubscribe.push(subscr);
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    set currentUserValue(user) {
        this.currentUserSubject.next(user);
    }
    // public methods
    login(username, password) {
        this.isLoadingSubject.next(true);
        return this.authHttpService.login(username, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ data }) => {
            const result = this.setAuthFromLocalStorage(data);
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.getUserByUsername(username)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.getUserPicture()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            console.error('err', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.isLoadingSubject.next(false);
        }));
    }
    logout() {
        localStorage.removeItem(this.authLocalStorageToken);
        localStorage.removeItem(`${this.authLocalStorageToken}-user`);
        this.router.navigate(['/auth/login'], {
            queryParams: {},
        });
    }
    getUserByUsername(username) {
        const auth = this.getAuthFromLocalStorage();
        if (!auth || !auth.token) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }
        this.isLoadingSubject.next(true);
        return this.authHttpService.getUserByUsername(username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ data: user }) => {
            if (user) {
                this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](user);
            }
            else {
                this.logout();
            }
            return user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    getUserPicture() {
        const auth = this.getAuthFromLocalStorage();
        if (!auth || !auth.token) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }
        this.isLoadingSubject.next(true);
        return this.authHttpService.getUserPicture(this.currentUserSubject.value.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            if (res === null || res === void 0 ? void 0 : res.avatar) {
                this.currentUserSubject.value.pic = `${res === null || res === void 0 ? void 0 : res.avatar}`;
                this.setUserFromLocalStorage(this.currentUserSubject.value);
            }
            else {
                this.getImageBase64('./assets/media/users/default.jpg');
            }
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    getUserByToken() {
        const user = this.getUserFromLocalStorage();
        if (!user) {
            this.logout();
        }
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](user);
        return user;
    }
    // need create new user then login
    registration(user) {
        this.isLoadingSubject.next(true);
        return this.authHttpService.createUser(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            this.isLoadingSubject.next(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.login(user.email, user.password)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            console.error('err', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    forgotPassword(username) {
        this.isLoadingSubject.next(true);
        return this.authHttpService.forgotPassword(username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            // console.log(res);          
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            // console.error('err', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    resetPassword(token, id, password) {
        this.isLoadingSubject.next(true);
        return this.authHttpService.resetPassword(token, id, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            // console.log(res);          
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            // console.error('err', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    getAuthFromLocalStorage() {
        try {
            const authData = JSON.parse(localStorage.getItem(this.authLocalStorageToken));
            return authData;
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    }
    getUserFromLocalStorage() {
        try {
            const authData = JSON.parse(localStorage.getItem(`${this.authLocalStorageToken}-user`));
            return authData;
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    }
    // private methods
    setAuthFromLocalStorage(auth) {
        // store auth authToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
        if (!!(auth === null || auth === void 0 ? void 0 : auth.token)) {
            localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
            return true;
        }
        return false;
    }
    setUserFromLocalStorage(user) {
        if (!!(user === null || user === void 0 ? void 0 : user.id)) {
            localStorage.setItem(`${this.authLocalStorageToken}-user`, JSON.stringify(user));
            return true;
        }
        return false;
    }
    getImageBase64(imageUrl) {
        return this.getBase64ImageFromURL(imageUrl).subscribe((base64Data) => {
            this.currentUserSubject.value.pic = base64Data;
            this.setUserFromLocalStorage(this.currentUserSubject.value);
        });
    }
    getBase64ImageFromURL(url) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
            let img = new Image();
            img.crossOrigin = "Anonymous";
            img.src = url;
            if (!img.complete) {
                img.onload = () => {
                    observer.next(this.getBase64Image(img));
                    observer.complete();
                };
                img.onerror = err => {
                    observer.error(err);
                };
            }
            else {
                observer.next(this.getBase64Image(img));
                observer.complete();
            }
        });
    }
    getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        let dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_http__WEBPACK_IMPORTED_MODULE_4__["AuthHTTPService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _auth_http__WEBPACK_IMPORTED_MODULE_4__["AuthHTTPService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "+H5S":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/fr.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// France
const locale = {
    lang: 'fr',
    data: {
        TRANSLATOR: {
            SELECT: 'choisissez votre langue',
        },
        MENU: {
            NEW: 'Nouveau',
            ACTIONS: 'Actes',
            CREATE_POST: 'Créer un nouveau Post',
            PAGES: 'Pages',
            FEATURES: 'Fonctionnalités',
            APPS: 'Applications',
            DASHBOARD: 'Tableau de Bord',
        },
        AUTH: {
            GENERAL: {
                OR: 'Ou',
                SUBMIT_BUTTON: 'Soumettre',
                NO_ACCOUNT: 'Ne pas avoir de compte?',
                SIGNUP_BUTTON: 'Registre',
                FORGOT_BUTTON: 'Mot de passe oublié',
                BACK_BUTTON: 'Back',
                PRIVACY: 'Privacy',
                LEGAL: 'Legal',
                CONTACT: 'Contact',
            },
            LOGIN: {
                TITLE: 'Créer un compte',
                BUTTON: 'Sign In',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Mot de passe',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'Nom d\'utilisateur'
            },
            VALIDATION: {
                INVALID: '{{name}} n\'est pas valide',
                REQUIRED: '{{name}} est requis',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Nombre d\'enregistrements sélectionnés: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'éCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Les clients',
                CUSTOMERS_LIST: 'Liste des clients',
                NEW_CUSTOMER: 'Nouveau client',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Suppression du client',
                    DESCRIPTION: 'Êtes-vous sûr de supprimer définitivement ce client?',
                    WAIT_DESCRIPTION: 'Le client est en train de supprimer ...',
                    MESSAGE: 'Le client a été supprimé'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Supprimer les clients',
                    DESCRIPTION: 'Êtes-vous sûr de supprimer définitivement les clients sélectionnés?',
                    WAIT_DESCRIPTION: 'Les clients suppriment ...',
                    MESSAGE: 'Les clients sélectionnés ont été supprimés'
                },
                UPDATE_STATUS: {
                    TITLE: 'Le statut a été mis à jour pour les clients sélectionnés',
                    MESSAGE: 'Le statut des clients sélectionnés a été mis à jour avec succès'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Le client a été mis à jour',
                    ADD_MESSAGE: 'Le client a été créé'
                }
            }
        }
    }
};


/***/ }),

/***/ "+hgU":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/ch.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// China
const locale = {
    lang: 'ch',
    data: {
        TRANSLATOR: {
            SELECT: '选择你的语言',
        },
        MENU: {
            NEW: '新',
            ACTIONS: '行动',
            CREATE_POST: '创建新帖子',
            PAGES: 'Pages',
            FEATURES: '特征',
            APPS: '应用',
            DASHBOARD: '仪表板',
        },
        AUTH: {
            GENERAL: {
                OR: '要么',
                SUBMIT_BUTTON: '提交',
                NO_ACCOUNT: '没有账号？',
                SIGNUP_BUTTON: '注册',
                FORGOT_BUTTON: '忘记密码',
                BACK_BUTTON: '背部',
                PRIVACY: '隐私',
                LEGAL: '法律',
                CONTACT: '联系',
            },
            LOGIN: {
                TITLE: '创建帐号',
                BUTTON: '签到',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: '用戶名'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: '顾客',
                CUSTOMERS_LIST: '客户名单',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\francieligeraldo\Documents\dev\estech-front\src\main.ts */"zUnb");


/***/ }),

/***/ "19P/":
/*!********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/filter.model.ts ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "2ndO":
/*!************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.component.ts ***!
  \************************************************************************************/
/*! exports provided: SplashScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenComponent", function() { return SplashScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _splash_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash-screen.service */ "ONK0");



const _c0 = ["splashScreen"];
class SplashScreenComponent {
    constructor(el, splashScreenService) {
        this.el = el;
        this.splashScreenService = splashScreenService;
    }
    ngOnInit() {
        this.splashScreenService.init(this.splashScreen);
    }
}
SplashScreenComponent.ɵfac = function SplashScreenComponent_Factory(t) { return new (t || SplashScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_splash_screen_service__WEBPACK_IMPORTED_MODULE_1__["SplashScreenService"])); };
SplashScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplashScreenComponent, selectors: [["app-splash-screen"]], viewQuery: function SplashScreenComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.splashScreen = _t.first);
    } }, decls: 5, vars: 0, consts: [["id", "splash-screen"], ["splashScreen", ""], ["src", "./assets/media/logos/logo-hart-min.png", "alt", "Logo"], ["viewBox", "0 0 50 50", 1, "splash-spinner"], ["cx", "25", "cy", "25", "r", "20", "fill", "none", "stroke-width", "5", 1, "path"]], template: function SplashScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#splash-screen[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #f2f3f8;\n}\n\n#splash-screen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: calc(100vw - 100%);\n  margin-bottom: 30px;\n}\n\n#splash-screen.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.splash-spinner[_ngcontent-%COMP%] {\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  margin-left: calc(100vw - 100%);\n  width: 50px;\n  height: 50px;\n}\n\n.splash-spinner[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%] {\n  stroke: #5d78ff;\n  stroke-linecap: round;\n  -webkit-animation: dash 1.5s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0Q0FBQTtVQUFBLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5QkFBQTtFQUNGO0FBQ0Y7O0FBSkE7RUFDRTtJQUNFLHlCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQUFGO0VBR0E7SUFDRSx5QkFBQTtJQUNBLHNCQUFBO0VBREY7RUFJQTtJQUNFLHlCQUFBO0lBQ0EsdUJBQUE7RUFGRjtBQUNGOztBQVpBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLG9CQUFBO0VBQUY7RUFHQTtJQUNFLHlCQUFBO0lBQ0Esc0JBQUE7RUFERjtFQUlBO0lBQ0UseUJBQUE7SUFDQSx1QkFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoic3BsYXNoLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzcGxhc2gtc2NyZWVuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmODtcclxufVxyXG5cclxuI3NwbGFzaC1zY3JlZW4gaW1nIHtcclxuICBtYXJnaW4tbGVmdDogY2FsYygxMDB2dyAtIDEwMCUpO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNzcGxhc2gtc2NyZWVuLmhpZGRlbiB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zcGxhc2gtc3Bpbm5lciB7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMHZ3IC0gMTAwJSk7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc3BsYXNoLXNwaW5uZXIgLnBhdGgge1xyXG4gIHN0cm9rZTogIzVkNzhmZjtcclxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGRhc2gge1xyXG4gIDAlIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDE1MDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-splash-screen',
                templateUrl: './splash-screen.component.html',
                styleUrls: ['./splash-screen.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _splash_screen_service__WEBPACK_IMPORTED_MODULE_1__["SplashScreenService"] }]; }, { splashScreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['splashScreen', { static: true }]
        }] }); })();


/***/ }),

/***/ "51MP":
/*!********************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/ng-pagination/ng-pagination.config.ts ***!
  \********************************************************************************************************/
/*! exports provided: NgPaginationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationConfig", function() { return NgPaginationConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/paginator.model */ "fksT");
// Fork of https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/pagination/pagination-config.ts



/**
 * A configuration service for the [`NgPagination`](#/components/paginator/api#NgPagination) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
class NgPaginationConfig {
    constructor() {
        this.disabled = false;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.ellipses = true;
        this.maxSize = 0;
        this.pageSize = _models_paginator_model__WEBPACK_IMPORTED_MODULE_1__["PageSizes"][2];
        this.rotate = false;
    }
}
NgPaginationConfig.ɵfac = function NgPaginationConfig_Factory(t) { return new (t || NgPaginationConfig)(); };
NgPaginationConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgPaginationConfig, factory: NgPaginationConfig.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    appVersion: 'v727demo2',
    USERDATA_KEY: 'authf649fc9a5f55',
    isMockEnabled: false,
    apiUrl: 'http://2f0f-190-89-107-4.ngrok.io/v1'
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

/***/ "Br0f":
/*!******************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/index.ts ***!
  \******************************************************/
/*! exports provided: SortState, PageSizes, PaginatorState, GroupingState, TableService, TableExtendedService, CRUDTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_table_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/table.model */ "Vh1Q");
/* empty/unused harmony star reexport *//* harmony import */ var _models_sort_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/sort.model */ "fr3w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortState", function() { return _models_sort_model__WEBPACK_IMPORTED_MODULE_1__["SortState"]; });

/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/paginator.model */ "fksT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageSizes", function() { return _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__["PageSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatorState", function() { return _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__["PaginatorState"]; });

/* harmony import */ var _models_grouping_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/grouping.model */ "WWIl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupingState", function() { return _models_grouping_model__WEBPACK_IMPORTED_MODULE_3__["GroupingState"]; });

/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/search.model */ "EASb");
/* empty/unused harmony star reexport *//* harmony import */ var _models_filter_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/filter.model */ "19P/");
/* empty/unused harmony star reexport *//* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/table.service */ "aENq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return _services_table_service__WEBPACK_IMPORTED_MODULE_6__["TableService"]; });

/* harmony import */ var _services_table_extended_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/table.extended.service */ "CjzB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableExtendedService", function() { return _services_table_extended_service__WEBPACK_IMPORTED_MODULE_7__["TableExtendedService"]; });

/* harmony import */ var _crud_table_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crud-table.module */ "RbrB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CRUDTableModule", function() { return _crud_table_module__WEBPACK_IMPORTED_MODULE_8__["CRUDTableModule"]; });

// Models






// Directives
// Services


// Module



/***/ }),

/***/ "CjzB":
/*!********************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/services/table.extended.service.ts ***!
  \********************************************************************************/
/*! exports provided: TableExtendedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableExtendedService", function() { return TableExtendedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.service */ "aENq");




class TableExtendedService extends _table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"] {
    constructor(http) {
        super(http);
    }
}
TableExtendedService.ɵfac = function TableExtendedService_Factory(t) { return new (t || TableExtendedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TableExtendedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TableExtendedService, factory: TableExtendedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableExtendedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }] }]; }, null); })();


/***/ }),

/***/ "EASb":
/*!********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/search.model.ts ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "LZ44":
/*!****************************************************!*\
  !*** ./src/app/modules/auth/_models/auth.model.ts ***!
  \****************************************************/
/*! exports provided: AuthModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModel", function() { return AuthModel; });
class AuthModel {
    setAuth(auth) {
        this.token = auth.authToken;
        this.authToken = auth.authToken;
        this.refreshToken = auth.refreshToken;
        this.expiresIn = auth.expiresIn;
    }
}


/***/ }),

/***/ "NtJg":
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/_services/auth-http/index.ts ***!
  \***********************************************************/
/*! exports provided: AuthHTTPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-http.service */ "iKdm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthHTTPService", function() { return _auth_http_service__WEBPACK_IMPORTED_MODULE_0__["AuthHTTPService"]; });

// #fake-start#
// export { AuthHTTPService } from './fake/auth-fake-http.service'; // You have to comment this, when your real back-end is done
// #fake-end#
// #real-start#
 // You have to uncomment this, when your real back-end is done
// #real-end#


/***/ }),

/***/ "ONK0":
/*!**********************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.service.ts ***!
  \**********************************************************************************/
/*! exports provided: SplashScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenService", function() { return SplashScreenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");




class SplashScreenService {
    /**
     * Service constructor
     *
     * @param animationBuilder: AnimationBuilder
     */
    constructor(animationBuilder) {
        this.animationBuilder = animationBuilder;
    }
    /**
     * Init
     *
     * @param element: ElementRef
     */
    init(element) {
        this.el = element;
    }
    /**
     * Hide
     */
    hide() {
        if (this.stopped || !this.el) {
            return;
        }
        const player = this.animationBuilder
            .build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(800, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }))])
            .create(this.el.nativeElement);
        player.onDone(() => {
            if (typeof this.el.nativeElement.remove === 'function') {
                this.el.nativeElement.remove();
            }
            else {
                this.el.nativeElement.style.display = 'none !important';
            }
            this.stopped = true;
        });
        setTimeout(() => player.play(), 100);
    }
}
SplashScreenService.ɵfac = function SplashScreenService_Factory(t) { return new (t || SplashScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"])); };
SplashScreenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SplashScreenService, factory: SplashScreenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashScreenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"] }]; }, null); })();


/***/ }),

/***/ "QDgw":
/*!********************************************************!*\
  !*** ./src/app/_fake/fake-helpers/http-extenstions.ts ***!
  \********************************************************/
/*! exports provided: baseFilter, sortArray, filterArray, searchInArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseFilter", function() { return baseFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortArray", function() { return sortArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterArray", function() { return filterArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchInArray", function() { return searchInArray; });
function baseFilter(entities, requestObj) {
    // Filtration
    let entitiesResult = filterArray(entities, requestObj);
    // Search
    entitiesResult = searchInArray(entitiesResult, requestObj.searchTerm);
    // Sorting
    // start
    if (requestObj.sorting.column) {
        entitiesResult = sortArray(entitiesResult, requestObj.sorting.column, requestObj.sorting.direction);
    }
    // end
    // Paginator
    // start
    const totalCount = entitiesResult.length;
    const startPosition = (requestObj.paginator.page - 1) * requestObj.paginator.pageSize;
    const endPosition = startPosition + requestObj.paginator.pageSize;
    entitiesResult = entitiesResult.slice(startPosition, endPosition);
    // end
    const responseObj = {
        items: entitiesResult,
        total: totalCount
    };
    return responseObj;
}
function sortArray(incomingArray, sortField = '', sortOrder = 'asc') {
    if (!sortField) {
        return incomingArray;
    }
    let result = [];
    result = incomingArray.sort((a, b) => {
        if (a[sortField] < b[sortField]) {
            return sortOrder === 'asc' ? -1 : 1;
        }
        if (a[sortField] > b[sortField]) {
            return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
    });
    return result;
}
function filterArray(incomingArray, requestObj) {
    if (!requestObj || !requestObj.filter) {
        return incomingArray;
    }
    let result = incomingArray;
    const filtrationFields = Object.keys(requestObj.filter);
    filtrationFields.forEach((keyName) => {
        // tslint:disable-next-line:triple-equals
        result = result.filter(el => el[keyName] == requestObj.filter[keyName]);
    });
    return result;
}
function searchInArray(incomingArray, searchTerm = '') {
    if (!searchTerm) {
        return incomingArray;
    }
    const acceptableForSearchTypes = { number: 1, string: 2 };
    const result = incomingArray.filter(row => {
        let termIsFoundInRow = false;
        const keys = Object.keys(row).filter(keyName => acceptableForSearchTypes[typeof row[keyName]] && row[keyName]);
        for (const keyName of keys) {
            if (row[keyName].toString().toLowerCase().indexOf(searchTerm) > -1) {
                termIsFoundInRow = true;
                break;
            }
        }
        return termIsFoundInRow;
    });
    return result;
}


/***/ }),

/***/ "QWUF":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/jp.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// Japan
const locale = {
    lang: 'jp',
    data: {
        TRANSLATOR: {
            SELECT: 'あなたが使う言語を選んでください',
        },
        MENU: {
            NEW: '新しい',
            ACTIONS: '行動',
            CREATE_POST: '新しい投稿を作成',
            PAGES: 'Pages',
            FEATURES: '特徴',
            APPS: 'アプリ',
            DASHBOARD: 'ダッシュボード',
        },
        AUTH: {
            GENERAL: {
                OR: 'または',
                SUBMIT_BUTTON: '提出する',
                NO_ACCOUNT: 'アカウントを持っていない？',
                SIGNUP_BUTTON: 'サインアップ',
                FORGOT_BUTTON: 'パスワードをお忘れですか',
                BACK_BUTTON: 'バック',
                PRIVACY: 'プライバシー',
                LEGAL: '法的',
                CONTACT: '接触',
            },
            LOGIN: {
                TITLE: 'Create Account',
                BUTTON: 'Sign In',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'ユーザー名'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Customers',
                CUSTOMERS_LIST: 'Customers list',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ "QnJH":
/*!*********************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SplashScreenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenModule", function() { return SplashScreenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _splash_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash-screen.component */ "2ndO");




class SplashScreenModule {
}
SplashScreenModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SplashScreenModule });
SplashScreenModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SplashScreenModule_Factory(t) { return new (t || SplashScreenModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SplashScreenModule, { declarations: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashScreenModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Qy8N":
/*!*************************************************************************!*\
  !*** ./src/app/modules/auth/registration/confirm-password.validator.ts ***!
  \*************************************************************************/
/*! exports provided: ConfirmPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function() { return ConfirmPasswordValidator; });
class ConfirmPasswordValidator {
    /**
     * Check matching password with confirm password
     * @param control AbstractControl
     */
    static MatchPassword(control) {
        const password = control.get('password').value;
        const confirmPassword = control.get('cPassword').value;
        if (password !== confirmPassword) {
            control.get('cPassword').setErrors({ ConfirmPassword: true });
        }
        else {
            return null;
        }
    }
}


/***/ }),

/***/ "RbrB":
/*!******************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/crud-table.module.ts ***!
  \******************************************************************/
/*! exports provided: CRUDTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUDTableModule", function() { return CRUDTableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/paginator/paginator.component */ "gBr1");
/* harmony import */ var _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/paginator/ng-pagination/ng-pagination.component */ "SBCs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sort-icon/sort-icon.component */ "xGIk");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");








class CRUDTableModule {
}
CRUDTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CRUDTableModule });
CRUDTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CRUDTableModule_Factory(t) { return new (t || CRUDTableModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CRUDTableModule, { declarations: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorComponent"], _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__["NgPagination"], _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__["SortIconComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"]], exports: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorComponent"], _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__["NgPagination"], _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__["SortIconComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CRUDTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorComponent"], _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__["NgPagination"], _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__["SortIconComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"]],
                exports: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorComponent"], _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__["NgPagination"], _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__["SortIconComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "SBCs":
/*!***********************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/ng-pagination/ng-pagination.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: NgPaginationEllipsis, NgPaginationFirst, NgPaginationLast, NgPaginationNext, NgPaginationNumber, NgPaginationPrevious, NgPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationEllipsis", function() { return NgPaginationEllipsis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationFirst", function() { return NgPaginationFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationLast", function() { return NgPaginationLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationNext", function() { return NgPaginationNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationNumber", function() { return NgPaginationNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationPrevious", function() { return NgPaginationPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPagination", function() { return NgPagination; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_pagination_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-pagination.config */ "51MP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
// tslint:disable:max-line-length component-class-suffix directive-selector directive-class-suffix component-selector no-host-metadata-property object-literal-key-quotes prefer-const
// fork of https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/pagination/pagination.ts




function NgPagination_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
} }
function NgPagination_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} }
function NgPagination_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function NgPagination_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 14);
} }
function NgPagination_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "...");
} }
function NgPagination_ng_template_10_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgPagination_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_ng_template_10_span_1_Template, 2, 0, "span", 15);
} if (rf & 2) {
    const page_r17 = ctx.$implicit;
    const currentPage_r18 = ctx.currentPage;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r17, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", page_r17 === currentPage_r18);
} }
function NgPagination_a_12_ng_template_1_Template(rf, ctx) { }
const _c10 = function (a0, a1) { return { disabled: a0, currentPage: a1 }; };
function NgPagination_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_a_12_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r21.selectPage(1); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_a_12_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r12.previousDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r12.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r12.previousDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r12.tplFirst == null ? null : ctx_r12.tplFirst.templateRef) || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c10, ctx_r12.previousDisabled(), ctx_r12.page));
} }
function NgPagination_a_13_ng_template_1_Template(rf, ctx) { }
const _c13 = function (a0) { return { disabled: a0 }; };
function NgPagination_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_a_13_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r24.selectPage(ctx_r24.page - 1); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_a_13_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r13.previousDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r13.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r13.previousDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r13.tplPrevious == null ? null : ctx_r13.tplPrevious.templateRef) || _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c13, ctx_r13.previousDisabled()));
} }
function NgPagination_ng_container_14_a_1_ng_template_1_Template(rf, ctx) { }
const _c14 = function (a1) { return { disabled: true, currentPage: a1 }; };
function NgPagination_ng_container_14_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_ng_container_14_a_1_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageNumber_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pageNumber_r26 === ctx_r27.page)("disabled", ctx_r27.isEllipsis(pageNumber_r26) || ctx_r27.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-current", pageNumber_r26 === ctx_r27.page ? "page" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r27.tplEllipsis == null ? null : ctx_r27.tplEllipsis.templateRef) || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c14, ctx_r27.page));
} }
function NgPagination_ng_container_14_a_2_ng_template_1_Template(rf, ctx) { }
const _c15 = function (a0, a1, a2) { return { disabled: a0, $implicit: a1, currentPage: a2 }; };
function NgPagination_ng_container_14_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_ng_container_14_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const pageNumber_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r32.selectPage(pageNumber_r26); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_ng_container_14_a_2_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageNumber_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pageNumber_r26 === ctx_r28.page)("disabled", ctx_r28.isEllipsis(pageNumber_r26) || ctx_r28.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r28.disabled ? "-1" : null)("aria-disabled", ctx_r28.disabled ? "true" : null)("aria-current", pageNumber_r26 === ctx_r28.page ? "page" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r28.tplNumber == null ? null : ctx_r28.tplNumber.templateRef) || _r10)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](9, _c15, ctx_r28.disabled, pageNumber_r26, ctx_r28.page));
} }
function NgPagination_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_ng_container_14_a_1_Template, 2, 9, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgPagination_ng_container_14_a_2_Template, 2, 13, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const pageNumber_r26 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.isEllipsis(pageNumber_r26));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.isEllipsis(pageNumber_r26));
} }
function NgPagination_a_15_ng_template_1_Template(rf, ctx) { }
function NgPagination_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_a_15_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r37.selectPage(ctx_r37.page + 1); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_a_15_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r15.nextDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r15.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r15.nextDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r15.tplNext == null ? null : ctx_r15.tplNext.templateRef) || _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c10, ctx_r15.nextDisabled(), ctx_r15.page));
} }
function NgPagination_a_16_ng_template_1_Template(rf, ctx) { }
function NgPagination_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_a_16_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r40.selectPage(ctx_r40.pageCount); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_a_16_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r16.nextDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r16.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r16.nextDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r16.tplLast == null ? null : ctx_r16.tplLast.templateRef) || _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c10, ctx_r16.nextDisabled(), ctx_r16.page));
} }
function getValueInRange(value, max, min = 0) {
    return Math.max(Math.min(value, max), min);
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function toInteger(value) {
    return parseInt(`${value}`, 10);
}
/**
 * A directive to match the 'ellipsis' link template
 *
 * @since 4.1.0
 */
class NgPaginationEllipsis {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationEllipsis.ɵfac = function NgPaginationEllipsis_Factory(t) { return new (t || NgPaginationEllipsis)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationEllipsis.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationEllipsis, selectors: [["ng-template", "ngPaginationEllipsis", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationEllipsis, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationEllipsis]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the 'first' link template
 *
 * @since 4.1.0
 */
class NgPaginationFirst {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationFirst.ɵfac = function NgPaginationFirst_Factory(t) { return new (t || NgPaginationFirst)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationFirst.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationFirst, selectors: [["ng-template", "ngPaginationFirst", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationFirst, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationFirst]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the 'last' link template
 *
 * @since 4.1.0
 */
class NgPaginationLast {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationLast.ɵfac = function NgPaginationLast_Factory(t) { return new (t || NgPaginationLast)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationLast.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationLast, selectors: [["ng-template", "ngPaginationLast", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationLast, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationLast]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the 'next' link template
 *
 * @since 4.1.0
 */
class NgPaginationNext {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationNext.ɵfac = function NgPaginationNext_Factory(t) { return new (t || NgPaginationNext)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationNext.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationNext, selectors: [["ng-template", "ngPaginationNext", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationNext, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationNext]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the page 'number' link template
 *
 * @since 4.1.0
 */
class NgPaginationNumber {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationNumber.ɵfac = function NgPaginationNumber_Factory(t) { return new (t || NgPaginationNumber)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationNumber.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationNumber, selectors: [["ng-template", "ngPaginationNumber", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationNumber, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationNumber]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the 'previous' link template
 *
 * @since 4.1.0
 */
class NgPaginationPrevious {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationPrevious.ɵfac = function NgPaginationPrevious_Factory(t) { return new (t || NgPaginationPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationPrevious.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationPrevious, selectors: [["ng-template", "ngPaginationPrevious", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationPrevious, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationPrevious]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A component that displays page numbers and allows to customize them in several ways.
 */
class NgPagination {
    constructor(config) {
        this.pageCount = 0;
        this.pages = [];
        /**
         *  The current page.
         *
         *  Page numbers start with `1`.
         */
        this.page = 1;
        /**
         *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
         *
         *  Event payload is the number of the newly selected page.
         *
         *  Page numbers start with `1`.
         */
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.disabled = config.disabled;
        this.boundaryLinks = config.boundaryLinks;
        this.directionLinks = config.directionLinks;
        this.ellipses = config.ellipses;
        this.maxSize = config.maxSize;
        this.pageSize = config.pageSize;
        this.rotate = config.rotate;
        this.size = config.size;
    }
    hasPrevious() { return this.page > 1; }
    hasNext() { return this.page < this.pageCount; }
    nextDisabled() { return !this.hasNext() || this.disabled; }
    previousDisabled() { return !this.hasPrevious() || this.disabled; }
    selectPage(pageNumber) { this._updatePages(pageNumber); }
    ngOnChanges(changes) { this._updatePages(this.page); }
    isEllipsis(pageNumber) { return pageNumber === -1; }
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    _applyEllipses(start, end) {
        if (this.ellipses) {
            if (start > 0) {
                // The first page will always be included. If the displayed range
                // starts after the third page, then add ellipsis. But if the range
                // starts on the third page, then add the second page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (start > 2) {
                    this.pages.unshift(-1);
                }
                else if (start === 2) {
                    this.pages.unshift(2);
                }
                this.pages.unshift(1);
            }
            if (end < this.pageCount) {
                // The last page will always be included. If the displayed range
                // ends before the third-last page, then add ellipsis. But if the range
                // ends on third-last page, then add the second-last page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (end < (this.pageCount - 2)) {
                    this.pages.push(-1);
                }
                else if (end === (this.pageCount - 2)) {
                    this.pages.push(this.pageCount - 1);
                }
                this.pages.push(this.pageCount);
            }
        }
    }
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     */
    _applyRotation() {
        let start = 0;
        let end = this.pageCount;
        let leftOffset = Math.floor(this.maxSize / 2);
        let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
        if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
        }
        else if (this.pageCount - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.pageCount - this.maxSize;
        }
        else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
        }
        return [start, end];
    }
    /**
     * Paginates page numbers based on maxSize items per page.
     */
    _applyPagination() {
        let page = Math.ceil(this.page / this.maxSize) - 1;
        let start = page * this.maxSize;
        let end = start + this.maxSize;
        return [start, end];
    }
    _setPageInRange(newPageNo) {
        const prevPageNo = this.page;
        this.page = getValueInRange(newPageNo, this.pageCount, 1);
        if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
            this.pageChange.emit(this.page);
        }
    }
    _updatePages(newPage) {
        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
        if (!isNumber(this.pageCount)) {
            this.pageCount = 0;
        }
        // fill-in model needed to render pages
        this.pages.length = 0;
        for (let i = 1; i <= this.pageCount; i++) {
            this.pages.push(i);
        }
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.pageCount > this.maxSize) {
            let start = 0;
            let end = this.pageCount;
            // either paginating or rotating page numbers
            if (this.rotate) {
                [start, end] = this._applyRotation();
            }
            else {
                [start, end] = this._applyPagination();
            }
            this.pages = this.pages.slice(start, end);
            // adding ellipses
            this._applyEllipses(start, end);
        }
    }
}
NgPagination.ɵfac = function NgPagination_Factory(t) { return new (t || NgPagination)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_pagination_config__WEBPACK_IMPORTED_MODULE_1__["NgPaginationConfig"])); };
NgPagination.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgPagination, selectors: [["ng-pagination"]], contentQueries: function NgPagination_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationEllipsis, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationFirst, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationLast, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationNext, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationNumber, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationPrevious, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplEllipsis = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplFirst = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplLast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplNext = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplNumber = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplPrevious = _t.first);
    } }, hostAttrs: ["role", "navigation"], inputs: { disabled: "disabled", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", ellipses: "ellipses", rotate: "rotate", collectionSize: "collectionSize", maxSize: "maxSize", page: "page", pageSize: "pageSize", size: "size" }, outputs: { pageChange: "pageChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_first_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_1 = goog.getMsg("First");
        i18n_0 = MSG_EXTERNAL_ng_pagination_first_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:@@ng.pagination.first-aria␟f2f852318759c6396b5d3d17031d53817d7b38cc␟2241508602425256033:First`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_previous_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_3 = goog.getMsg("Previous");
        i18n_2 = MSG_EXTERNAL_ng_pagination_previous_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:@@ng.pagination.previous-aria␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_next_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_5 = goog.getMsg("Next");
        i18n_4 = MSG_EXTERNAL_ng_pagination_next_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:@@ng.pagination.next-aria␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_last_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_7 = goog.getMsg("Last");
        i18n_6 = MSG_EXTERNAL_ng_pagination_last_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:@@ng.pagination.last-aria␟5c729788ba138508aca1bec050b610f7bf81db3e␟4882268002141858767:Last`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_first_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__9 = goog.getMsg("First");
        i18n_8 = MSG_EXTERNAL_ng_pagination_first_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:@@ng.pagination.first-aria␟f2f852318759c6396b5d3d17031d53817d7b38cc␟2241508602425256033:First`;
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_previous_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__12 = goog.getMsg("Previous");
        i18n_11 = MSG_EXTERNAL_ng_pagination_previous_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__12;
    }
    else {
        i18n_11 = $localize `:@@ng.pagination.previous-aria␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_next_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__17 = goog.getMsg("Next");
        i18n_16 = MSG_EXTERNAL_ng_pagination_next_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__17;
    }
    else {
        i18n_16 = $localize `:@@ng.pagination.next-aria␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_last_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__19 = goog.getMsg("Last");
        i18n_18 = MSG_EXTERNAL_ng_pagination_last_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__19;
    }
    else {
        i18n_18 = $localize `:@@ng.pagination.last-aria␟5c729788ba138508aca1bec050b610f7bf81db3e␟4882268002141858767:Last`;
    } return [["first", ""], ["previous", ""], ["next", ""], ["last", ""], ["ellipsis", ""], ["defaultNumber", ""], ["aria-label", i18n_0, "class", "btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1", "href", "", 3, "disabled", "click", 4, "ngIf"], ["aria-label", i18n_2, "class", "btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1", "href", "", 3, "disabled", "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["aria-label", i18n_4, "class", "btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1", 3, "disabled", "click", 4, "ngIf"], ["aria-label", i18n_6, "class", "btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1", 3, "disabled", "click", 4, "ngIf"], ["aria-hidden", "true", 1, "ki", "ki-bold-double-arrow-back", "icon-xs"], ["aria-hidden", "true", 1, "ki", "ki-bold-arrow-back", "icon-xs"], ["aria-hidden", "true", 1, "ki", "ki-bold-arrow-next", "icon-xs"], ["aria-hidden", "true", 1, "ki", "ki-bold-double-arrow-next", "icon-xs"], ["class", "sr-only", 4, "ngIf"], [1, "sr-only"], ["aria-label", i18n_8, "href", "", 1, "btn", "btn-icon", "btn-sm", "btn-light", "btn-hover-primary", "mr-2", "my-1", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-label", i18n_11, "href", "", 1, "btn", "btn-icon", "btn-sm", "btn-light", "btn-hover-primary", "mr-2", "my-1", 3, "click"], ["class", "btn btn-icon btn-sm border-0 btn-light btn-hover-primary mr-2 my-1", "tabindex", "-1", "aria-disabled", "true", 3, "active", "disabled", 4, "ngIf"], ["class", "btn btn-icon btn-sm border-0 btn-light btn-hover-primary mr-2 my-1", 3, "active", "disabled", "click", 4, "ngIf"], ["tabindex", "-1", "aria-disabled", "true", 1, "btn", "btn-icon", "btn-sm", "border-0", "btn-light", "btn-hover-primary", "mr-2", "my-1"], [1, "btn", "btn-icon", "btn-sm", "border-0", "btn-light", "btn-hover-primary", "mr-2", "my-1", 3, "click"], ["aria-label", i18n_16, 1, "btn", "btn-icon", "btn-sm", "btn-light", "btn-hover-primary", "mr-2", "my-1", 3, "click"], ["aria-label", i18n_18, 1, "btn", "btn-icon", "btn-sm", "btn-light", "btn-hover-primary", "mr-2", "my-1", 3, "click"]]; }, template: function NgPagination_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgPagination_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgPagination_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgPagination_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgPagination_ng_template_6_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgPagination_ng_template_8_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgPagination_ng_template_10_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NgPagination_a_12_Template, 2, 9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgPagination_a_13_Template, 2, 8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NgPagination_ng_container_14_Template, 3, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NgPagination_a_15_Template, 2, 9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NgPagination_a_16_Template, 2, 9, "a", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPagination, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-pagination',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: { 'role': 'navigation' },
                templateUrl: './ng-pagination.component.html',
            }]
    }], function () { return [{ type: _ng_pagination_config__WEBPACK_IMPORTED_MODULE_1__["NgPaginationConfig"] }]; }, { tplEllipsis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationEllipsis, { static: false }]
        }], tplFirst: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationFirst, { static: false }]
        }], tplLast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationLast, { static: false }]
        }], tplNext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationNext, { static: false }]
        }], tplNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationNumber, { static: false }]
        }], tplPrevious: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationPrevious, { static: false }]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ellipses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], collectionSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_i18n_vocabs_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/i18n/vocabs/en */ "UXkn");
/* harmony import */ var _modules_i18n_vocabs_ch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/i18n/vocabs/ch */ "+hgU");
/* harmony import */ var _modules_i18n_vocabs_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/i18n/vocabs/es */ "z+X0");
/* harmony import */ var _modules_i18n_vocabs_jp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/i18n/vocabs/jp */ "QWUF");
/* harmony import */ var _modules_i18n_vocabs_de__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/i18n/vocabs/de */ "s3F9");
/* harmony import */ var _modules_i18n_vocabs_fr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/i18n/vocabs/fr */ "+H5S");
/* harmony import */ var _modules_i18n_translation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/i18n/translation.service */ "e4g8");
/* harmony import */ var _metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_metronic/partials/layout/splash-screen/splash-screen.service */ "ONK0");
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_metronic/shared/crud-table */ "Br0f");
/* harmony import */ var _metronic_partials_layout_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_metronic/partials/layout/splash-screen/splash-screen.component */ "2ndO");


// language list












const _c0 = ["root", ""];
class AppComponent {
    constructor(translationService, splashScreenService, router, tableService) {
        this.translationService = translationService;
        this.splashScreenService = splashScreenService;
        this.router = router;
        this.tableService = tableService;
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        // register translations
        this.translationService.loadTranslations(_modules_i18n_vocabs_en__WEBPACK_IMPORTED_MODULE_2__["locale"], _modules_i18n_vocabs_ch__WEBPACK_IMPORTED_MODULE_3__["locale"], _modules_i18n_vocabs_es__WEBPACK_IMPORTED_MODULE_4__["locale"], _modules_i18n_vocabs_jp__WEBPACK_IMPORTED_MODULE_5__["locale"], _modules_i18n_vocabs_de__WEBPACK_IMPORTED_MODULE_6__["locale"], _modules_i18n_vocabs_fr__WEBPACK_IMPORTED_MODULE_7__["locale"]);
    }
    ngOnInit() {
        const routerSubscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                // clear filtration paginations and others
                this.tableService.setDefaults();
                // hide splash screen
                this.splashScreenService.hide();
                // scroll to top on every route change
                window.scrollTo(0, 0);
                // to display back the body content
                setTimeout(() => {
                    document.body.classList.add('page-loaded');
                }, 500);
            }
        });
        this.unsubscribe.push(routerSubscription);
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_i18n_translation_service__WEBPACK_IMPORTED_MODULE_8__["TranslationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["SplashScreenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_10__["TableExtendedService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["body", "root", ""]], attrs: _c0, decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-splash-screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_metronic_partials_layout_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_11__["SplashScreenComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLFNBQUE7QUFDRCIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'body[root]',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _modules_i18n_translation_service__WEBPACK_IMPORTED_MODULE_8__["TranslationService"] }, { type: _metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["SplashScreenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_10__["TableExtendedService"] }]; }, null); })();


/***/ }),

/***/ "SzPn":
/*!***************************************************************!*\
  !*** ./src/assets/js/layout/extended/messages/message-box.js ***!
  \***************************************************************/
/*! exports provided: MessageBox, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBox", function() { return MessageBox; });
class  MessageBox { 

    constructor(opt){
        
        var value_m = 10;
        if (value_m != 0 && value_m != null) {
            opt.timeout = value_m;
        } else {
            opt.timeout = 0;
        }

        var self = this;

        this._maskElement = null;
        this._boxElement = null;
        this._titleElement = null;
        this._closeElement = null;
        this._messages = null;
        this._contentElement = null;
        this._yesElement = null;
        this._noElement = null;

        this._buttons = opt.buttons || {
            yes: {
                text: 'OK',
                fnc: function () { self.hide(); }
            }
        }
        this._closable = opt.closable === undefined ? true : opt.closable;

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

        this._createMask();
        this._createBox();

        this._createHeader();
        this._createContent();
        this._createButtons();
        this._createTypeElement();
        this._registerEvents();

    }

    _createMask() {

        this._maskElement = document.createElement('div');
        this._maskElement.style.position = 'absolute';
        this._maskElement.style.top = '0';
        this._maskElement.style.left = '0';
        this._maskElement.style.width = '100%';
        this._maskElement.style.height = '100%';
        this._maskElement.style.background = 'rgba(0,0,0,.7)';
        this._maskElement.style.zIndex = '90000';

    }

    _createBox() {

        this._boxElement = document.createElement('div');
        //this._boxElement.className = 'border border-' + this.type;
        this._boxElement.style.position = 'absolute';
        this._boxElement.style.top = '50%';
        this._boxElement.style.left = '50%';
        this._boxElement.style.transform = 'translate(-50%,-50%)';
        this._boxElement.style.background = '#fff';
        this._boxElement.style.maxHeight = '50%';
        this._boxElement.style.maxWidth = '50%';
        this._boxElement.style.minWidth = '300px';
        this._boxElement.style.zIndex = '90001';
        this._boxElement.style.borderWidth = '3px';
        this._boxElement.style.borderRadius = '10px 7px';
        this._maskElement.appendChild(this._boxElement);

    }

    _createTypeElement() {

        var typeHeader = document.createElement('div');
        typeHeader.className = 'row m-0 w-100';
        typeHeader.style.height = '7px';

        this.typeElement = document.createElement('div');
        this.typeElement.className = `bg-${this.type} rounded-top rounded-bottom`;
        this.typeElement.style.height = '100%';
        this.typeElement.style.width = '100%';

        typeHeader.appendChild(this.typeElement);
        this._boxElement.appendChild(typeHeader);

    }

    _createHeader() {

        var header = document.createElement('div');
        header.className = 'row m-0 w-100';

        var titleContainer = document.createElement('div');
        titleContainer.className = 'col p-3 text-truncate';
        this._titleElement = document.createElement('h5');
        this._titleElement.innerText = this.title;
        titleContainer.appendChild(this._titleElement);
        header.appendChild(titleContainer);

        if (this._closable) {

            this._closeElement = document.createElement('div');
            this._closeElement.className = 'col-2 p-3 text-right';
            this._closeElement.innerHTML = '<h5>&times;</h5>';
            this._closeElement.style.cursor = 'pointer';
            header.appendChild(this._closeElement);

            this._closeElement.addEventListener('click', function () {
                self.hide();
            });

        }

        this._boxElement.appendChild(header);

    }

    _createContent() {

        var contentContainer = document.createElement('div');
        contentContainer.className = 'row m-0 w-100';

        this._contentElement = document.createElement('div');
        this._contentElement.className = 'col pl-3 pr-3 pb-3 pt-0';
        this._contentElement.innerHTML = this.message;

        contentContainer.appendChild(this._contentElement);
        this._boxElement.appendChild(contentContainer);

    }

    _createButtons() {

        var buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'row m-0 w-100 text-right';

        var colContainer = document.createElement('div');
        colContainer.className = 'col p-3';

        if (this._buttons.no) {

            this._noElement = document.createElement('button');
            this._noElement.type = 'button';
            this._noElement.className = 'btn btn-sm btn-secondary';
            this._noElement.innerHTML = this._buttons.no.text || 'Cancelar';
            colContainer.appendChild(this._noElement);

            if (this._buttons.no.fnc) {
                this._noElement.addEventListener('click', this._buttons.no.fnc);
            }

        }

        if (this._buttons.yes) {
            this._yesElement = document.createElement('button');
            this._yesElement.type = 'button';
            this._yesElement.className = 'btn btn-sm ml-1 btn-' + this.type;
            this._yesElement.innerHTML = this._buttons.yes.text || 'Confirmar';
            colContainer.appendChild(this._yesElement);
            if (this._buttons.yes.fnc) {
                this._yesElement.addEventListener('click', this._buttons.yes.fnc);
            }
        }

        if (this._buttons.yes || this._buttons.no) {
            buttonsContainer.appendChild(colContainer);
            this._boxElement.appendChild(buttonsContainer);
        }
    }

    _registerEvents() {
        var self = this;
    }

    show() {

        var body = document.getElementsByTagName('body')[0];
        body.appendChild(this._maskElement);
        this._maskElement.getElementsByTagName("button")[0].focus();
        this._saveMessage();

    }

    hide() {
        clearInterval(this._progressBarInterval);
        clearInterval(this._timeoutInterval);
        var body = document.getElementsByTagName('body')[0];
        body.removeChild(this._maskElement);
        if (this.opt.callback) {
            var waiter = setTimeout(() => {
                this.opt.callback();
                clearTimeout(waiter);
            }, 200);
        }
    }

}

/* harmony default export */ __webpack_exports__["default"] = (MessageBox);

/***/ }),

/***/ "UXkn":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/en.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// USA
const locale = {
    lang: 'en',
    data: {
        TRANSLATOR: {
            SELECT: 'Select your language',
        },
        MENU: {
            NEW: 'new',
            ACTIONS: 'Actions',
            CREATE_POST: 'Create New Post',
            PAGES: 'Pages',
            FEATURES: 'Features',
            APPS: 'Apps',
            DASHBOARD: 'Dashboard',
        },
        AUTH: {
            GENERAL: {
                OR: 'Or',
                SUBMIT_BUTTON: 'Submit',
                NO_ACCOUNT: 'Don\'t have an account?',
                SIGNUP_BUTTON: 'Sign Up',
                FORGOT_BUTTON: 'Forgot Password',
                BACK_BUTTON: 'Back',
                PRIVACY: 'Privacy',
                LEGAL: 'Legal',
                CONTACT: 'Contact',
            },
            LOGIN: {
                TITLE: 'Login Account',
                BUTTON: 'Sign In',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'Username'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Customers',
                CUSTOMERS_LIST: 'Customers list',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ "Vh1Q":
/*!*******************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/table.model.ts ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "WWIl":
/*!**********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/grouping.model.ts ***!
  \**********************************************************************/
/*! exports provided: GroupingState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupingState", function() { return GroupingState; });
class GroupingState {
    constructor() {
        this.selectedRowIds = new Set();
        this.itemIds = [];
    }
    checkAreAllRowsSelected() {
        if (this.itemIds.length === 0) {
            return false;
        }
        return this.selectedRowIds.size === this.itemIds.length;
    }
    selectRow(id) {
        if (this.selectedRowIds.has(id)) {
            this.selectedRowIds.delete(id);
        }
        else {
            this.selectedRowIds.add(id);
        }
        return this;
    }
    // tslint:disable-next-line:variable-name
    clearRows(_itemIds) {
        this.itemIds = _itemIds;
        this.selectedRowIds = new Set();
        return this;
    }
    isRowSelected(id) {
        return this.selectedRowIds.has(id);
    }
    selectAllRows() {
        const areAllSelected = this.itemIds.length === this.selectedRowIds.size;
        if (areAllSelected) {
            this.selectedRowIds = new Set();
        }
        else {
            this.selectedRowIds = new Set();
            this.itemIds.forEach(id => this.selectedRowIds.add(id));
        }
        return this;
    }
    getSelectedRows() {
        return Array.from(this.selectedRowIds);
    }
    getSelectedRowsCount() {
        return this.selectedRowIds.size;
    }
}


/***/ }),

/***/ "X6d2":
/*!*********************************************************!*\
  !*** ./src/app/modules/auth/auth.interceptor.module.ts ***!
  \*********************************************************/
/*! exports provided: HttpsAuthInterceptor, HttpsErrorInterceptor, Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpsAuthInterceptor", function() { return HttpsAuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpsErrorInterceptor", function() { return HttpsErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _assets_js_layout_extended_messages_message_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/js/layout/extended/messages/message-box */ "SzPn");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! . */ "tmEo");







class HttpsAuthInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(req, next) {
        const auth = this.auth.getAuthFromLocalStorage();
        const dupReq = req.clone({
            headers: req.headers.set('authorization', (auth === null || auth === void 0 ? void 0 : auth.token) ? 'Bearer ' + auth.token : ''),
        });
        return next.handle(dupReq);
    }
}
HttpsAuthInterceptor.ɵfac = function HttpsAuthInterceptor_Factory(t) { return new (t || HttpsAuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
HttpsAuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpsAuthInterceptor, factory: HttpsAuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpsAuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ___WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();
class HttpsErrorInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.auth.logout();
                document.location.reload();
            }
            if (err.status === 409) {
                new _assets_js_layout_extended_messages_message_box__WEBPACK_IMPORTED_MODULE_4__["MessageBox"]({
                    title: 'Erro',
                    message: err.error.errors[0].detail,
                    type: 'danger'
                }).show();
            }
            if (err.status === 400) {
                new _assets_js_layout_extended_messages_message_box__WEBPACK_IMPORTED_MODULE_4__["MessageBox"]({
                    title: 'Erro',
                    message: err.error.errors[0].detail,
                    type: 'danger'
                }).show();
            }
            if (err.status === 500) {
                new _assets_js_layout_extended_messages_message_box__WEBPACK_IMPORTED_MODULE_4__["MessageBox"]({
                    title: 'Erro',
                    message: err.error.errors[0].detail,
                    type: 'danger'
                }).show();
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
}
HttpsErrorInterceptor.ɵfac = function HttpsErrorInterceptor_Factory(t) { return new (t || HttpsErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
HttpsErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpsErrorInterceptor, factory: HttpsErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpsErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ___WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();
class Interceptor {
}
Interceptor.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Interceptor });
Interceptor.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Interceptor_Factory(t) { return new (t || Interceptor)(); }, providers: [
        { useClass: HttpsAuthInterceptor, provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], multi: true },
        { useClass: HttpsErrorInterceptor, provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], multi: true },
    ] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Interceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [
                    { useClass: HttpsAuthInterceptor, provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], multi: true },
                    { useClass: HttpsErrorInterceptor, provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], multi: true },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-clipboard */ "Dvla");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/auth/_services/auth.service */ "+BVi");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");
/* harmony import */ var _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_metronic/partials/layout/splash-screen/splash-screen.module */ "QnJH");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _modules_auth_auth_interceptor_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/auth/auth.interceptor.module */ "X6d2");











// Highlight JS










Object(_angular_common__WEBPACK_IMPORTED_MODULE_14__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_15___default.a);
function appInitializer(authService) {
    return () => { return authService.getUserByToken(); };
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'pt-BR' },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
            useFactory: appInitializer,
            multi: true,
            deps: [_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]],
        },
        {
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__["HIGHLIGHT_OPTIONS"],
            useValue: {
                coreLibraryLoader: () => __webpack_require__.e(/*! import() | highlight-js-lib-core */ "highlight-js-lib-core").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/core */ "ECCn", 7)),
                languages: {
                    xml: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-xml */ "highlight-js-lib-languages-xml").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/xml */ "jctj", 7)),
                    typescript: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-typescript */ "highlight-js-lib-languages-typescript").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/typescript */ "r0Rl", 7)),
                    scss: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-scss */ "highlight-js-lib-languages-scss").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/scss */ "YROV", 7)),
                    json: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-json */ "highlight-js-lib-languages-json").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/json */ "WtIr", 7))
                },
            },
        },
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_14__["HashLocationStrategy"]
        }
    ], imports: [[
            ngx_mask__WEBPACK_IMPORTED_MODULE_13__["NgxMaskModule"].forRoot({
                dropSpecialCharacters: false
            }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_12__["SplashScreenModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__["HighlightModule"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _modules_auth_auth_interceptor_module__WEBPACK_IMPORTED_MODULE_16__["Interceptor"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]], imports: [ngx_mask__WEBPACK_IMPORTED_MODULE_13__["NgxMaskModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_12__["SplashScreenModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__["HighlightModule"],
        ngx_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _modules_auth_auth_interceptor_module__WEBPACK_IMPORTED_MODULE_16__["Interceptor"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
                imports: [
                    ngx_mask__WEBPACK_IMPORTED_MODULE_13__["NgxMaskModule"].forRoot({
                        dropSpecialCharacters: false
                    }),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_12__["SplashScreenModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot(),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__["HighlightModule"],
                    ngx_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"].forRoot(),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _modules_auth_auth_interceptor_module__WEBPACK_IMPORTED_MODULE_16__["Interceptor"]
                ],
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'pt-BR' },
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                        useFactory: appInitializer,
                        multi: true,
                        deps: [_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]],
                    },
                    {
                        provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__["HIGHLIGHT_OPTIONS"],
                        useValue: {
                            coreLibraryLoader: () => __webpack_require__.e(/*! import() | highlight-js-lib-core */ "highlight-js-lib-core").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/core */ "ECCn", 7)),
                            languages: {
                                xml: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-xml */ "highlight-js-lib-languages-xml").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/xml */ "jctj", 7)),
                                typescript: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-typescript */ "highlight-js-lib-languages-typescript").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/typescript */ "r0Rl", 7)),
                                scss: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-scss */ "highlight-js-lib-languages-scss").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/scss */ "YROV", 7)),
                                json: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-json */ "highlight-js-lib-languages-json").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/json */ "WtIr", 7))
                            },
                        },
                    },
                    {
                        provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"],
                        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_14__["HashLocationStrategy"]
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "aENq":
/*!***********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/services/table.service.ts ***!
  \***********************************************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/paginator.model */ "fksT");
/* harmony import */ var _models_sort_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/sort.model */ "fr3w");
/* harmony import */ var _models_grouping_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/grouping.model */ "WWIl");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var src_app_fake_fake_helpers_http_extenstions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_fake/fake-helpers/http-extenstions */ "QDgw");







const DEFAULT_STATE = {
    filter: {},
    paginator: new _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__["PaginatorState"](),
    sorting: new _models_sort_model__WEBPACK_IMPORTED_MODULE_3__["SortState"](),
    searchTerm: '',
    grouping: new _models_grouping_model__WEBPACK_IMPORTED_MODULE_4__["GroupingState"](),
    entityId: undefined
};
class TableService {
    constructor(http) {
        // Private fields
        this.baseForSearchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this._items$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this._isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this._isFirstLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
        this._tableState$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](DEFAULT_STATE);
        this._errorMessage = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this._subscriptions = [];
        this._params$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        // API URL has to be overrided
        this.API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/endpoint`;
        this.http = http;
    }
    // Getters
    get items$() {
        return this._items$.asObservable();
    }
    get isLoading$() {
        return this._isLoading$.asObservable();
    }
    get isFirstLoading$() {
        return this._isFirstLoading$.asObservable();
    }
    get errorMessage$() {
        return this._errorMessage.asObservable();
    }
    get subscriptions() {
        return this._subscriptions;
    }
    // State getters
    get paginator() {
        return this._tableState$.value.paginator;
    }
    get filter() {
        return this._tableState$.value.filter;
    }
    get sorting() {
        return this._tableState$.value.sorting;
    }
    get searchTerm() {
        return this._tableState$.value.searchTerm;
    }
    get grouping() {
        return this._tableState$.value.grouping;
    }
    // CREATE
    // server should return the object with ID
    create(item) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        return this.http.post(this.API_URL, item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ id: 1 });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    findParams({ params }) {
        return this.http.get(this.API_URL, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return (response === null || response === void 0 ? void 0 : response.data) || [];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined);
        }));
    }
    // READ (Returning filtered list of entities)
    find(tableState) {
        const url = this.API_URL + '/find';
        this._errorMessage.next('');
        return this.http.post(url, tableState).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('FIND ITEMS', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ items: [], total: 0 });
        }));
    }
    getItemById(id) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const url = `${this.API_URL}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('GET ITEM BY IT', id, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ id: undefined });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    // UPDATE
    update(item) {
        const url = `${this.API_URL}/${item.id}`;
        this._isLoading$.next(true);
        this._errorMessage.next('');
        return this.http.put(url, item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    // UPDATE Status
    updateStatusForItems(ids, status) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const body = { ids, status };
        const url = this.API_URL + '/updateStatus';
        return this.http.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('UPDATE STATUS FOR SELECTED ITEMS', ids, status, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    filterByDescription(searchTerm) {
        var _a;
        const resultSearch = Object(src_app_fake_fake_helpers_http_extenstions__WEBPACK_IMPORTED_MODULE_6__["searchInArray"])(((_a = this.baseForSearchTerm) === null || _a === void 0 ? void 0 : _a.value) || [], searchTerm);
        this._items$.next(resultSearch);
        this.patchStateWithoutFetch({
            paginator: this._tableState$.value.paginator.recalculatePaginator(resultSearch.length),
        });
    }
    // DELETE
    delete(id) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const url = `${this.API_URL}/${id}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('DELETE ITEM', id, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({});
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    // delete list of items
    deleteItems(ids = []) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const url = this.API_URL + '/deleteItems';
        const body = { ids };
        return this.http.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('DELETE SELECTED ITEMS', ids, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    fetch() {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const request = this.find(this._params$.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => {
            this.baseForSearchTerm.next(res.items);
            this._items$.next(res.items);
            this.patchStateWithoutFetch({
                paginator: this._tableState$.value.paginator.recalculatePaginator(res.total),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            this._errorMessage.next(err);
            this.baseForSearchTerm.next([]);
            this._items$.next([]);
            this.patchStateWithoutFetch({
                paginator: this._tableState$.value.paginator.recalculatePaginator(0),
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
                items: [],
                total: 0
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this._isLoading$.next(false);
            const itemIds = this._items$.value.map((el) => {
                const item = el;
                return item.id;
            });
            this.patchStateWithoutFetch({
                grouping: this._tableState$.value.grouping.clearRows(itemIds),
            });
        }))
            .subscribe();
        this._subscriptions.push(request);
    }
    setDefaults() {
        this.patchStateWithoutFetch({ filter: {} });
        this.patchStateWithoutFetch({ searchTerm: '' });
        this.patchStateWithoutFetch({ sorting: new _models_sort_model__WEBPACK_IMPORTED_MODULE_3__["SortState"]() });
        this.patchStateWithoutFetch({ grouping: new _models_grouping_model__WEBPACK_IMPORTED_MODULE_4__["GroupingState"]() });
        this.patchStateWithoutFetch({ paginator: new _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__["PaginatorState"]() });
        this._isFirstLoading$.next(true);
        this._isLoading$.next(true);
        this._tableState$.next(DEFAULT_STATE);
        this._errorMessage.next('');
        this._params$.next({});
    }
    // Base Methods
    patchState(patch) {
        if (patch === null || patch === void 0 ? void 0 : patch.hasOwnProperty('filter')) {
            this._tableState$.value.paginator.page = 0;
        }
        this.patchStateWithoutFetch(patch);
        this.resolveParams(Object.keys(patch)[0]);
        this.fetch();
    }
    resolveParams(key) {
        switch (key) {
            case 'sorting':
                const params_sort = { sort: `${this._tableState$.value.sorting.column},${this._tableState$.value.sorting.direction}` };
                const newParamsSort = Object.assign(this._params$.value, params_sort);
                this._params$.next(newParamsSort);
                break;
            case 'paginator':
                let params_paginator = {
                    page: this._tableState$.value.paginator.page - 1,
                    size: this._tableState$.value.paginator.pageSize
                };
                const newParamsPage = Object.assign(this._params$.value, params_paginator);
                this._params$.next(newParamsPage);
                break;
            case 'filter':
                Object.keys(this._tableState$.value.filter).map((val) => {
                    if (!!!this._tableState$.value.filter[val]) {
                        delete this._params$.value[val];
                        delete this._tableState$.value.filter[val];
                    }
                    else {
                        const params_filter = this._tableState$.value.filter;
                        const newParamsFilter = Object.assign(this._params$.value, params_filter);
                        this._params$.next(newParamsFilter);
                    }
                });
                break;
        }
    }
    patchStateWithoutFetch(patch) {
        const newState = Object.assign(this._tableState$.value, patch);
        this._tableState$.next(newState);
    }
}


/***/ }),

/***/ "e4g8":
/*!*****************************************************!*\
  !*** ./src/app/modules/i18n/translation.service.ts ***!
  \*****************************************************/
/*! exports provided: TranslationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationService", function() { return TranslationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
// Localization is based on '@ngx-translate/core';
// Please be familiar with official documentations first => https://github.com/ngx-translate/core



const LOCALIZATION_LOCAL_STORAGE_KEY = 'language';
class TranslationService {
    constructor(translate) {
        this.translate = translate;
        // Private properties
        this.langIds = [];
        // add new langIds to the list
        this.translate.addLangs(['en']);
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');
    }
    loadTranslations(...args) {
        const locales = [...args];
        locales.forEach((locale) => {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            this.translate.setTranslation(locale.lang, locale.data, true);
            this.langIds.push(locale.lang);
        });
        // add new languages to the list
        this.translate.addLangs(this.langIds);
    }
    setLanguage(lang) {
        if (lang) {
            this.translate.use(this.translate.getDefaultLang());
            this.translate.use(lang);
            localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, lang);
        }
    }
    /**
     * Returns selected language
     */
    getSelectedLanguage() {
        return (localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY) ||
            this.translate.getDefaultLang());
    }
}
TranslationService.ɵfac = function TranslationService_Factory(t) { return new (t || TranslationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TranslationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslationService, factory: TranslationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "fksT":
/*!***********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/paginator.model.ts ***!
  \***********************************************************************/
/*! exports provided: PageSizes, PaginatorState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSizes", function() { return PageSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorState", function() { return PaginatorState; });
const PageSizes = [3, 5, 10, 15, 50, 100];
class PaginatorState {
    constructor() {
        this.page = 1;
        this.pageSize = PageSizes[2];
        this.total = 0;
        this.pageSizes = [];
    }
    recalculatePaginator(total) {
        this.total = total;
        return this;
    }
}


/***/ }),

/***/ "fr3w":
/*!******************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/sort.model.ts ***!
  \******************************************************************/
/*! exports provided: SortState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortState", function() { return SortState; });
class SortState {
    constructor() {
        this.column = 'id'; // Id by default
        this.direction = 'asc'; // asc by default;
    }
}


/***/ }),

/***/ "gBr1":
/*!*****************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/paginator.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/paginator.model */ "fksT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ng-pagination/ng-pagination.component */ "SBCs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function PaginatorComponent_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaginatorComponent_ng_container_0_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ps_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ps_r5, " ");
} }
function PaginatorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ng-pagination", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginatorComponent_ng_container_0_Template_ng_pagination_pageChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.paginator.page = $event; })("pageChange", function PaginatorComponent_ng_container_0_Template_ng_pagination_pageChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.pageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginatorComponent_ng_container_0_div_4_Template, 4, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaginatorComponent_ng_container_0_Template_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.paginator.pageSize = $event; })("change", function PaginatorComponent_ng_container_0_Template_select_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.sizeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PaginatorComponent_ng_container_0_option_6_Template, 2, 1, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx_r0.paginator.total)("page", ctx_r0.paginator.page)("maxSize", 4)("rotate", true)("boundaryLinks", true)("pageSize", ctx_r0.paginator.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.paginator.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pageSizes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Mostrando registros ", ctx_r0.pageInit, " - ", ctx_r0.paginator.pageSize < ctx_r0.paginator.total ? ctx_r0.pageEnd : ctx_r0.paginator.total, " de ", ctx_r0.paginator.total, " ");
} }
function PaginatorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nenhum registro encontrado!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PaginatorComponent {
    constructor() {
        this.paginate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageSizes = _models_paginator_model__WEBPACK_IMPORTED_MODULE_1__["PageSizes"];
    }
    ngOnInit() {
        const paginatorTeste = Object.assign({}, this.paginator);
        this.pageInit = 1;
        this.pageEnd = paginatorTeste.pageSize;
    }
    pageChange(num) {
        this.paginator.page = num;
        this.paginate.emit(this.paginator);
        this.changePageLegend();
    }
    sizeChange() {
        this.paginator.pageSize = +this.paginator.pageSize;
        this.paginator.page = 1;
        this.paginate.emit(this.paginator);
        this.changePageLegend();
    }
    changePageLegend() {
        this.pageInit = (this.paginator.page == 1) ? 1 : (((this.paginator.page - 1) * this.paginator.pageSize) + 1);
        const calcPage = (this.paginator.page * this.paginator.pageSize);
        this.pageEnd = (calcPage > this.paginator.total) ? this.paginator.total : calcPage;
    }
}
PaginatorComponent.ɵfac = function PaginatorComponent_Factory(t) { return new (t || PaginatorComponent)(); };
PaginatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginatorComponent, selectors: [["app-paginator"]], inputs: { paginator: "paginator", isLoading: "isLoading" }, outputs: { paginate: "paginate" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["showMessage", ""], [1, "d-flex", "flex-wrap", "py-2", "mr-3"], [3, "collectionSize", "page", "maxSize", "rotate", "boundaryLinks", "pageSize", "pageChange"], [1, "d-flex", "align-items-center", "py-3"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "form-control", "form-control-sm", "font-weight-bold", "mr-4", "border-0", "bg-light", "false", 2, "width", "75px", 3, "ngModel", "ngModelChange", "change"], ["class", "btn", 4, "ngFor", "ngForOf"], [1, "react-bootstrap-table-pagin", "ation-total"], [1, "d-flex", "align-items-center"], [1, "mr-2", "text-muted"], [1, "spinner", "spinner-primary", "mr-10"], [1, "btn"], [1, "w-100", "text-center"]], template: function PaginatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaginatorComponent_ng_container_0_Template, 9, 12, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginatorComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paginator.total > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__["NgPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0b3IuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-paginator',
                templateUrl: './paginator.component.html',
                styleUrls: ['./paginator.component.scss']
            }]
    }], function () { return []; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], paginate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "iKdm":
/*!***********************************************************************!*\
  !*** ./src/app/modules/auth/_services/auth-http/auth-http.service.ts ***!
  \***********************************************************************/
/*! exports provided: AuthHTTPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHTTPService", function() { return AuthHTTPService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const API_USERS_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}`;
class AuthHTTPService {
    constructor(http) {
        this.http = http;
    }
    // public methods
    login(username, password) {
        return this.http.post(`${API_USERS_URL}/login`, { username, password });
    }
    // CREATE =>  POST: add a new user to the server
    createUser(user) {
        return this.http.post(API_USERS_URL, user);
    }
    // Your server should check email => If email exists send link to the user and return true | If email doesn't exist return false
    forgotPassword(username) {
        return this.http.post(`${API_USERS_URL}/forgot-password`, {
            username,
        });
    }
    // Your server should check email => If email exists send link to the user and return true | If email doesn't exist return false
    resetPassword(token, id, password) {
        return this.http.post(`${API_USERS_URL}/reset-password/${token}`, {
            id,
            password
        });
    }
    getUserByUsername(username) {
        return this.http.get(`${API_USERS_URL}/users/${username}`);
    }
    getUserPicture(id) {
        return this.http.get(`${API_USERS_URL}/users/${id}/avatar`);
    }
}
AuthHTTPService.ɵfac = function AuthHTTPService_Factory(t) { return new (t || AuthHTTPService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthHTTPService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthHTTPService, factory: AuthHTTPService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthHTTPService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ratC":
/*!******************************************************!*\
  !*** ./src/app/modules/auth/_services/auth.guard.ts ***!
  \******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "+BVi");



class AuthGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(route, state) {
        const currentUser = this.authService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.authService.logout();
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "rrsC":
/*!****************************************************!*\
  !*** ./src/app/modules/auth/_models/user.model.ts ***!
  \****************************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony import */ var _auth_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.model */ "LZ44");

class UserModel extends _auth_model__WEBPACK_IMPORTED_MODULE_0__["AuthModel"] {
    setUser(user) {
        this.id = user.id;
        this.username = user.username || '';
        this.password = user.password || '';
        this.fullname = user.fullname || '';
        this.email = user.email || '';
        this.pic = user.pic || './assets/media/users/default.jpg';
        this.roles = user.roles || [];
        this.occupation = user.occupation || '';
        this.companyName = user.companyName || '';
        this.phone = user.phone || '';
        this.address = user.address;
        this.socialNetworks = user.socialNetworks;
    }
}


/***/ }),

/***/ "s3F9":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/de.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// Germany
const locale = {
    lang: 'de',
    data: {
        TRANSLATOR: {
            SELECT: 'Wähle deine Sprache',
        },
        MENU: {
            NEW: 'Neu',
            ACTIONS: 'Aktionen',
            CREATE_POST: 'Erstellen Sie einen neuen Beitrag',
            PAGES: 'Pages',
            FEATURES: 'Eigenschaften',
            APPS: 'Apps',
            DASHBOARD: 'Instrumententafel'
        },
        AUTH: {
            GENERAL: {
                OR: 'Oder',
                SUBMIT_BUTTON: 'einreichen',
                NO_ACCOUNT: 'Hast du kein Konto?',
                SIGNUP_BUTTON: 'Anmelden',
                FORGOT_BUTTON: 'Passwort vergessen',
                BACK_BUTTON: 'Zurück',
                PRIVACY: 'Privatsphäre',
                LEGAL: 'Legal',
                CONTACT: 'Kontakt',
            },
            LOGIN: {
                TITLE: 'Create Account',
                BUTTON: 'Sign In',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'Nutzername'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Customers',
                CUSTOMERS_LIST: 'Customers list',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ "tmEo":
/*!***************************************!*\
  !*** ./src/app/modules/auth/index.ts ***!
  \***************************************/
/*! exports provided: UserModel, AuthService, ConfirmPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_models/user.model */ "rrsC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return _models_user_model__WEBPACK_IMPORTED_MODULE_0__["UserModel"]; });

/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/auth.service */ "+BVi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony import */ var _registration_confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration/confirm-password.validator */ "Qy8N");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function() { return _registration_confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__["ConfirmPasswordValidator"]; });

// models

// services

// validators



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/auth/_services/auth.guard */ "ratC");





const routes = [
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() | modules-auth-auth-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./modules/auth/auth.module */ "305l")).then((m) => m.AuthModule),
    },
    {
        path: 'error',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-errors-errors-module */ "modules-errors-errors-module").then(__webpack_require__.bind(null, /*! ./modules/errors/errors.module */ "o1DB")).then((m) => m.ErrorsModule),
    },
    {
        path: '',
        canActivate: [_modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | pages-layout-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-layout-module")]).then(__webpack_require__.bind(null, /*! ./pages/layout.module */ "P0uM")).then((m) => m.LayoutModule),
    },
    { path: '**', redirectTo: 'error/404' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "xGIk":
/*!*****************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/sort-icon/sort-icon.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SortIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortIconComponent", function() { return SortIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");




function SortIconComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Navigation/Up-2.svg");
} }
function SortIconComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Navigation/Down-2.svg");
} }
function SortIconComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SortIconComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SortIconComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activeDirection === "asc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activeDirection === "desc");
} }
function SortIconComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Shopping/Sort1.svg");
} }
class SortIconComponent {
    constructor(el) {
        this.el = el;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isActive = false;
    }
    ngOnChanges() {
        const parent = this.el.nativeElement.parentElement;
        if (!parent) {
            return;
        }
        // Load css classes
        parent.classList.add('sortable');
        parent.classList.remove('sortable-active');
        if (this.column === this.activeColumn) {
            parent.classList.add('sortable-active');
        }
        // load icons
        this.isActive = this.column === this.activeColumn;
    }
    ngOnInit() {
        const parent = this.el.nativeElement.parentElement;
        if (!parent) {
            return;
        }
        parent.addEventListener('click', () => {
            this.sort.emit(this.column);
        });
    }
}
SortIconComponent.ɵfac = function SortIconComponent_Factory(t) { return new (t || SortIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SortIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SortIconComponent, selectors: [["app-sort-icon"]], inputs: { column: "column", activeColumn: "activeColumn", activeDirection: "activeDirection" }, outputs: { sort: "sort" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-sm", "svg-icon-primary", "ml-1", 3, "inlineSVG"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-sm", "svg-icon-primary", "ml-1", "svg-icon-sort", 3, "inlineSVG"]], template: function SortIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SortIconComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SortIconComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__["InlineSVGDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0LWljb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sort-icon',
                templateUrl: './sort-icon.component.html',
                styleUrls: ['./sort-icon.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeDirection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "z+X0":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/es.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// Spain
const locale = {
    lang: 'es',
    data: {
        TRANSLATOR: {
            SELECT: 'Elige tu idioma',
        },
        MENU: {
            NEW: 'nuevo',
            ACTIONS: 'Comportamiento',
            CREATE_POST: 'Crear nueva publicación',
            PAGES: 'Pages',
            FEATURES: 'Caracteristicas',
            APPS: 'Aplicaciones',
            DASHBOARD: 'Tablero'
        },
        AUTH: {
            GENERAL: {
                OR: 'O',
                SUBMIT_BUTTON: 'Enviar',
                NO_ACCOUNT: 'No tienes una cuenta?',
                SIGNUP_BUTTON: 'Regístrate',
                FORGOT_BUTTON: 'Se te olvidó tu contraseña',
                BACK_BUTTON: 'Espalda',
                PRIVACY: 'Intimidad',
                LEGAL: 'Legal',
                CONTACT: 'Contacto',
            },
            LOGIN: {
                TITLE: 'Crear una cuenta',
                BUTTON: 'Registrarse',
            },
            FORGOT: {
                TITLE: 'Contraseña olvidada?',
                DESC: 'Ingrese su correo electrónico para restablecer su contraseña',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'Usuario'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Customers',
                CUSTOMERS_LIST: 'Customers list',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map