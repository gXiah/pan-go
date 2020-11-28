(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Workshop\pan-go\public\src\main.ts */"zUnb");


/***/ }),

/***/ "2Cb0":
/*!**************************************************************!*\
  !*** ./src/app/views/profile-view/profile-view.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileViewComponent", function() { return ProfileViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/profile.service */ "oWCI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/navbar/navbar/navbar.component */ "D5J9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ProfileViewComponent_form_6_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Update your profile info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileViewComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email adress ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Current age");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "(Not birth dates for this version)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Race");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Food category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ProfileViewComponent_form_6_div_39_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Return to home page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", p_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.sessionOk);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", p_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.sessionOk);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", p_r1.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.sessionOk);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", p_r1.family);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.sessionOk);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", p_r1.race);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.sessionOk);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", p_r1.food);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.sessionOk);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sessionOk);
} }
class ProfileViewComponent {
    constructor(profileService, route) {
        this.profileService = profileService;
        this.route = route;
        this.currentSession = { _id: null };
        this.query_id = null;
        this.sessionOk = false;
        this.currentSession["_id"] = localStorage.getItem('_id');
        if (typeof this.currentSession._id !== 'undefined') {
            if (this.currentSession._id !== null) {
                this.route.paramMap.subscribe((params) => {
                    this.query_id = params['params'].id;
                });
                if (this.currentSession._id == this.query_id) {
                    this.sessionOk = true;
                }
                else {
                    this.sessionOk = false;
                }
            }
        }
        // for this showcase version, we do not double check the localStorage Id
        this.profile = this.getProfileData();
    }
    ngOnInit() { }
    getProfileData() {
        // if(this.sessionOk){
        this.profileService
            .getProfileById(this.query_id)
            .subscribe((res) => {
            console.log(res);
            return this.profile = res;
        });
        // }
    }
}
ProfileViewComponent.ɵfac = function ProfileViewComponent_Factory(t) { return new (t || ProfileViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ProfileViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileViewComponent, selectors: [["app-profile-view"]], decls: 7, vars: 1, consts: [["id", "contact-search-container", 1, "container", "focused-container"], [1, "row", "title-container"], [1, "col-10"], [1, "row", "form-container"], ["action", "#", "method", "", "id", "registration-form", 4, "ngFor", "ngForOf"], ["action", "#", "method", "", "id", "registration-form"], [1, "form-group"], [1, "required"], ["type", "email", "placeholder", "example@provider.com", 1, "form-control", "text-input", 3, "value", "disabled"], ["email", ""], [1, "form-text", "text-muted"], ["type", "text", "placeholder", "Your name", 1, "form-control", "text-input", 3, "value", "disabled"], ["name", ""], ["type", "number", 1, "form-control", "text-input", 3, "value", "disabled"], ["age", ""], ["type", "text", "placeholder", "Generic pangolin family", 1, "form-control", "text-input", 3, "value", "disabled"], ["family", ""], ["type", "text", "placeholder", "Race #1", 1, "form-control", "text-input", 3, "value", "disabled"], ["race", ""], ["type", "text", "placeholder", "Classic pangolin food", 1, "form-control", "text-input", 3, "value", "disabled"], ["food", ""], ["class", "form-group", 4, "ngIf"], [1, "form-group", 2, "text-align", "center"], ["href", "/"], ["type", "submit", 1, "btn", "btn-success"]], template: function ProfileViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileViewComponent_form_6_Template, 45, 13, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profile);
    } }, directives: [_modules_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap\");\n\n\n\n\n#contact-search-container[_ngcontent-%COMP%] {\n  width: 30% !important;\n  min-width: 300px;\n}\n.form-container[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\ninput[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  border: none;\n  color: darkgrey !important;\n}\n.text-input[_ngcontent-%COMP%] {\n  border-color: #fff;\n  border-radius: 0px;\n  background-color: transparent;\n  color: orange !important;\n}\n#registration-form[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.form-group[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #fff !important;\n  text-align: right;\n  font-style: italic;\n}\n#registration-form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n#newRandomProfile[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxnbG9iYWwuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtRLGdGQUFBO0FBTFIsdUJBQUE7QUFFQSxrQ0FBQTtBQUVBLCtCQUFBO0FBS0EsbUNBQUE7QUNQQTtFQUNDLHFCQUFBO0VBQ0EsZ0JBQUE7QUFJRDtBQURBO0VBQ0Msc0JBQUE7QUFJRDtBQUFDO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQUdGO0FBQUM7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtBQUdGO0FBQ0M7RUFDQyxzQkFBQTtBQUVGO0FBQ0U7RUFDQyxzQkFBQTtBQUVIO0FBQ0c7RUFDQyxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUNFO0VBRUMsY0FBQTtFQUNBLFlBQUE7QUFDSDtBQUdFO0VBQ0MsY0FBQTtFQUNBLFlBQUE7QUFBSCIsImZpbGUiOiJwcm9maWxlLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHbG9iYWwgc3R5bGUgc2hlZXQgKi9cclxuXHJcbi8qID09PT09PT09PT09IEZvbnRzID09PT09PT09PT09ICovXHJcblxyXG4vKiBSb2JvdG8gU2xhYiAtIE1haW4gY29udGVudCAqL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rU2xhYiZkaXNwbGF5PXN3YXAnKTtcclxuJHJvYm90bzogJ1JvYm90byBTbGFiJztcclxuXHJcbiRtYWluLWNvbnRlbnQtZm9udDogJHJvYm90bztcclxuLyogPT09PT09PT09PT0gQ29sb3JzID09PT09PT09PT09ICovXHJcbiRsaWdodC1ibHVlOiAjMzQ5OGRiO1xyXG4kZGFyay1ibHVlOiAjNDA0MDdhO1xyXG5cclxuJHJlZDogI2Q2MzAzMTtcclxuJGFzcGhhbHQ6ICMzNDQ5NWU7XHJcbiRvcmFuZ2U6ICNmZGNiNmU7XHJcblxyXG4kbGlnaHQtZ3JleTogI2RmZTZlOTtcclxuJGRhcmstZ3JleTogZ3JleTsiLCJAaW1wb3J0IFwiLi4vLi4vLi4vZ2xvYmFsLnNjc3NcIjtcclxuXHJcbiNjb250YWN0LXNlYXJjaC1jb250YWluZXJ7XHJcblx0d2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG5cdG1pbi13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lcntcclxuXHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG5cdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHRpbnB1dDpkaXNhYmxlZHtcclxuXHRcdGN1cnNvcjogZGVmYXVsdDtcclxuXHRcdGJvcmRlcjpub25lO1xyXG5cdFx0Y29sb3I6ZGFya2dyZXkgIWltcG9ydGFudDtcclxuXHR9XHJcblx0XHJcblx0LnRleHQtaW5wdXR7XHJcblx0XHRib3JkZXItY29sb3I6ICNmZmY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cclxuXHQjcmVnaXN0cmF0aW9uLWZvcm17XHJcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0XHQuZm9ybS1ncm91cHtcclxuXHRcdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHJcblx0XHRcdC5mb3JtLWdyb3VwIHNtYWxse1xyXG5cdFx0XHRcdGNvbG9yOiAgI2ZmZiAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFx0XHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRcdFx0fVxyXG5cclxuXHRcdCNyZWdpc3RyYXRpb24tZm9ybSBidXR0b25bdHlwZT1cInN1Ym1pdFwiXXtcclxuXHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRtYXJnaW46IGF1dG87XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdCNuZXdSYW5kb21Qcm9maWxle1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0fSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-view',
                templateUrl: './profile-view.component.html',
                styleUrls: ['./profile-view.component.scss']
            }]
    }], function () { return [{ type: src_app_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "A/GU":
/*!*************************************************!*\
  !*** ./src/app/modules/navbar/navbar.module.ts ***!
  \*************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "D5J9");




class NavbarModule {
}
NavbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NavbarModule });
NavbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NavbarModule_Factory(t) { return new (t || NavbarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavbarModule, { declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AHiZ":
/*!************************************************!*\
  !*** ./src/app/request-interceptor.service.ts ***!
  \************************************************/
/*! exports provided: RequestInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptorService", function() { return RequestInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.service */ "oWCI");





class RequestInterceptorService {
    constructor(profileService) {
        this.profileService = profileService;
    }
    intercept(request, next) {
        request = this.appendAuthHeader(request);
        return next
            .handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            console.log(error);
            if (error.status === 401 && !this.refreshedToken) {
                return this.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => {
                    request = this.appendAuthHeader(request);
                    return next.handle(request);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
                    this.profileService.logout();
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["empty"])();
                }));
            }
            else if (error.status === 401) {
                this.profileService.logout();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    refreshToken() {
        this.refreshedToken = true;
        return this.profileService.getNewToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.refreshedToken = false;
            console.log('Access token refreshed');
        }));
    }
    appendAuthHeader(request) {
        const token = this.profileService.getToken();
        if (token) {
            return request.clone({
                setHeaders: {
                    'x-access-token': token
                }
            });
        }
        return request;
    }
}
RequestInterceptorService.ɵfac = function RequestInterceptorService_Factory(t) { return new (t || RequestInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"])); };
RequestInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestInterceptorService, factory: RequestInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }]; }, null); })();


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


/***/ }),

/***/ "D5J9":
/*!***********************************************************!*\
  !*** ./src/app/modules/navbar/navbar/navbar.component.ts ***!
  \***********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/profile.service */ "oWCI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NavbarComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " My profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/me/", ctx_r2.currentSession._id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NavbarComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_20_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(profileService) {
        this.profileService = profileService;
        this.currentSession = { _id: null };
        this.sessionOk = false;
        this.currentSession["_id"] = localStorage.getItem('_id');
        // this.currentSession["x-access-token"] = localStorage.getItem('x-access-token');
        // this.currentSession["x-refresh-token"] = localStorage.getItem('x-refresh-token');
        // Checking session validity
        // For this showcase version, we will trust the back-end API and not double check
        if (typeof this.currentSession._id !== 'undefined') {
            if (this.currentSession._id !== null) {
                this.sessionOk = true;
            }
        }
    }
    ngOnInit() {
    }
    signOut() {
        console.log("Signing out ...");
        this.sessionOk = false;
        this.profileService.logout();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 21, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], [2, "color", "orange"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "/", 1, "nav-link"], [1, "sr-only"], ["class", "nav-link", "href", "/login", 4, "ngIf"], ["class", "nav-link", "href", "/register", 4, "ngIf"], [1, "form-inline", "my-2", "my-lg-0"], ["class", "nav-link", 3, "href", 4, "ngIf"], ["class", "nav-link", 3, "click", 4, "ngIf"], ["href", "/login", 1, "nav-link"], ["href", "/register", 1, "nav-link"], [1, "nav-link", 3, "href"], [1, "nav-link", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Pan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Go");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_a_15_Template, 4, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavbarComponent_a_17_Template, 4, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NavbarComponent_a_19_Template, 2, 1, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavbarComponent_a_20_Template, 2, 0, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.sessionOk);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.sessionOk);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sessionOk);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sessionOk);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: src_app_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"] }]; }, null); })();


/***/ }),

/***/ "KPHA":
/*!********************************************!*\
  !*** ./src/app/request-handler.service.ts ***!
  \********************************************/
/*! exports provided: RequestHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestHandlerService", function() { return RequestHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class RequestHandlerService {
    constructor(http) {
        this.http = http;
        // this.ROOT = 'http://localhost:8080';
        this.ROOT = 'http://adaquesbi.me:8080';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
    }
    get(uri) {
        return this.http.get(`${this.ROOT}/${uri}`);
    }
    delete(uri) {
        return this.http.delete(`${this.ROOT}/${uri}`);
    }
    post(uri, payload) {
        return this.http.post(`${this.ROOT}/${uri}`, payload);
    }
    login_post(uri, payload) {
        return this.http.post(`${this.ROOT}/login`, payload, { observe: 'response' });
    }
    patch(uri, payload) {
        return this.http.patch(`${this.ROOT}/${uri}`, payload);
    }
}
RequestHandlerService.ɵfac = function RequestHandlerService_Factory(t) { return new (t || RequestHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RequestHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestHandlerService, factory: RequestHandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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



class AppComponent {
    constructor() {
        this.title = 'public';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _views_contact_search_view_contact_search_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/contact-search-view/contact-search-view.component */ "aJdG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _views_registration_view_registration_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/registration-view/registration-view.component */ "ndqt");
/* harmony import */ var _views_login_view_login_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/login-view/login-view.component */ "bvlY");
/* harmony import */ var _views_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/profile-view/profile-view.component */ "2Cb0");
/* harmony import */ var _views_my_contacts_view_my_contacts_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/my-contacts-view/my-contacts-view.component */ "dX1S");
/* harmony import */ var _request_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request-interceptor.service */ "AHiZ");
/* harmony import */ var _modules_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/navbar/navbar.module */ "A/GU");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _request_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["RequestInterceptorService"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _modules_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_11__["NavbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _views_contact_search_view_contact_search_view_component__WEBPACK_IMPORTED_MODULE_4__["ContactSearchViewComponent"],
        _views_registration_view_registration_view_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationViewComponent"],
        _views_login_view_login_view_component__WEBPACK_IMPORTED_MODULE_7__["LoginViewComponent"],
        _views_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_8__["ProfileViewComponent"],
        _views_my_contacts_view_my_contacts_view_component__WEBPACK_IMPORTED_MODULE_9__["MyContactsViewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _modules_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_11__["NavbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _views_contact_search_view_contact_search_view_component__WEBPACK_IMPORTED_MODULE_4__["ContactSearchViewComponent"],
                    _views_registration_view_registration_view_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationViewComponent"],
                    _views_login_view_login_view_component__WEBPACK_IMPORTED_MODULE_7__["LoginViewComponent"],
                    _views_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_8__["ProfileViewComponent"],
                    _views_my_contacts_view_my_contacts_view_component__WEBPACK_IMPORTED_MODULE_9__["MyContactsViewComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _modules_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_11__["NavbarModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _request_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["RequestInterceptorService"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aJdG":
/*!****************************************************************************!*\
  !*** ./src/app/views/contact-search-view/contact-search-view.component.ts ***!
  \****************************************************************************/
/*! exports provided: ContactSearchViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSearchViewComponent", function() { return ContactSearchViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/profile.service */ "oWCI");
/* harmony import */ var _modules_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/navbar/navbar/navbar.component */ "D5J9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ContactSearchViewComponent_div_10_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactSearchViewComponent_div_10_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Remove contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactSearchViewComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ContactSearchViewComponent_div_10_span_5_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ContactSearchViewComponent_div_10_div_7_Template, 7, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/my-profile/", profile_r2._id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profile_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentId === profile_r2._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentId != profile_r2._id);
} }
class ContactSearchViewComponent {
    constructor(profileService) {
        this.profileService = profileService;
    }
    ngOnInit() {
        this.getAllProfiles();
        this.currentId = localStorage.getItem('_id');
    }
    getAllContacts(sourceId) {
    }
    getAllProfiles() {
        this.profileService.getAllProfiles().subscribe((response) => { this.profiles = response; });
    }
    getSearchProfiles(query) {
        this.profileService.getSearchProfiles(query).subscribe((response) => { this.profiles = response; });
    }
}
ContactSearchViewComponent.ɵfac = function ContactSearchViewComponent_Factory(t) { return new (t || ContactSearchViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"])); };
ContactSearchViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactSearchViewComponent, selectors: [["app-contact-search-view"]], decls: 11, vars: 1, consts: [["id", "contact-search-container", 1, "container", "focused-container"], [1, "row", "title-container"], [1, "col-10"], [1, "row", "search-bar-container"], [1, "col-12", 2, "padding", "0 !important"], ["type", "text", "name", "contact_search_input", "placeholder", " Search for a Pangolin", 3, "keydown"], ["searchQuery", ""], [1, "row", "results-container"], ["class", "col-12 result-item", 4, "ngFor", "ngForOf"], [1, "col-12", "result-item"], [1, "row"], [1, "col-4", 2, "text-align-last", "left", "padding-left", "60px"], [3, "href"], ["class", "badge", "style", "margin-left: 10px;", 4, "ngIf"], [1, "col-3"], ["class", "col-4", "style", "text-align: right;", 4, "ngIf"], [1, "badge", 2, "margin-left", "10px"], [1, "col-4", 2, "text-align", "right"], [1, "btn", "btn-sm", "btn-success", "add_contact_btn"], [1, "fas", "fa-plus"], [1, "btn", "btn-sm", "btn-danger", "add_contact_btn", "hidden"], [1, "fas", "fa-times"]], template: function ContactSearchViewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search for contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function ContactSearchViewComponent_Template_input_keydown_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.getSearchProfiles(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ContactSearchViewComponent_div_10_Template, 8, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profiles);
    } }, directives: [_modules_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap\");\n\n\n\n\n.results-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.result-item[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #fff;\n  padding: 10px;\n  border-radius: 3px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxnbG9iYWwuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LXNlYXJjaC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLUSxnRkFBQTtBQUxSLHVCQUFBO0FBRUEsa0NBQUE7QUFFQSwrQkFBQTtBQUtBLG1DQUFBO0FDUEE7RUFDQyxtQkFBQTtBQUlEO0FBQUM7RUFDQyxrQkFBQTtFQUVBLHNCQUFBO0VBRUEsYUFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7QUFBRiIsImZpbGUiOiJjb250YWN0LXNlYXJjaC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2xvYmFsIHN0eWxlIHNoZWV0ICovXHJcblxyXG4vKiA9PT09PT09PT09PSBGb250cyA9PT09PT09PT09PSAqL1xyXG5cclxuLyogUm9ib3RvIFNsYWIgLSBNYWluIGNvbnRlbnQgKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK1NsYWImZGlzcGxheT1zd2FwJyk7XHJcbiRyb2JvdG86ICdSb2JvdG8gU2xhYic7XHJcblxyXG4kbWFpbi1jb250ZW50LWZvbnQ6ICRyb2JvdG87XHJcbi8qID09PT09PT09PT09IENvbG9ycyA9PT09PT09PT09PSAqL1xyXG4kbGlnaHQtYmx1ZTogIzM0OThkYjtcclxuJGRhcmstYmx1ZTogIzQwNDA3YTtcclxuXHJcbiRyZWQ6ICNkNjMwMzE7XHJcbiRhc3BoYWx0OiAjMzQ0OTVlO1xyXG4kb3JhbmdlOiAjZmRjYjZlO1xyXG5cclxuJGxpZ2h0LWdyZXk6ICNkZmU2ZTk7XHJcbiRkYXJrLWdyZXk6IGdyZXk7IiwiQGltcG9ydCBcIi4uLy4uLy4uL2dsb2JhbC5zY3NzXCI7XHJcblxyXG4ucmVzdWx0cy1jb250YWluZXJ7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbn1cclxuXHJcblx0LnJlc3VsdC1pdGVte1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcblx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0fVxyXG5cclxuXHRcdC5hZGRfY29udGFjdF9idG57fSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactSearchViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-search-view',
                templateUrl: './contact-search-view.component.html',
                styleUrls: ['./contact-search-view.component.scss']
            }]
    }], function () { return [{ type: src_app_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"] }]; }, null); })();


/***/ }),

/***/ "bvlY":
/*!**********************************************************!*\
  !*** ./src/app/views/login-view/login-view.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginViewComponent", function() { return LoginViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/profile.service */ "oWCI");
/* harmony import */ var _modules_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/navbar/navbar/navbar.component */ "D5J9");




class LoginViewComponent {
    constructor(profileService) {
        this.profileService = profileService;
    }
    ngOnInit() { }
    login(email, password) {
        console.log("logging in");
        this.profileService
            .login(email, password)
            .subscribe((res) => {
            console.log(res);
        });
    }
}
LoginViewComponent.ɵfac = function LoginViewComponent_Factory(t) { return new (t || LoginViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"])); };
LoginViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginViewComponent, selectors: [["app-login-view"]], decls: 35, vars: 0, consts: [["id", "contact-search-container", 1, "container", "focused-container"], [1, "row", "title-container"], [1, "col-10"], [1, "row", "form-container"], ["id", "registration-form", "action", "/"], [1, "form-group"], [1, "required"], ["value", "user#1@provider.com", "type", "email", "placeholder", "example@provider.com", 1, "form-control"], ["email", ""], [1, "form-text", "text-muted"], ["value", "password", "type", "password", "placeholder", "Choose a password", 1, "form-control"], ["password", ""], [1, "btn", "btn-success", 2, "display", "block", "margin", "auto", "color", "#fff !important", "width", "30%", 3, "click"], [1, "form-text", "text-muted", 2, "text-align", "center"], ["href", "/register"], [1, "form-group", 2, "text-align", "center"], ["href", "/"]], template: function LoginViewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Your email adress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginViewComponent_Template_a_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return ctx.login(_r0.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Don't have an account yet ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sign up !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Return to home page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_modules_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap\");\n\n\n\n\n#contact-search-container[_ngcontent-%COMP%] {\n  width: 30% !important;\n  min-width: 300px;\n}\n.form-container[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n#registration-form[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.form-group[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #fff !important;\n  text-align: right;\n  font-style: italic;\n}\n#registration-form[_ngcontent-%COMP%]   #login-btn[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n#newRandomProfile[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxnbG9iYWwuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLUSxnRkFBQTtBQUxSLHVCQUFBO0FBRUEsa0NBQUE7QUFFQSwrQkFBQTtBQUtBLG1DQUFBO0FDUEE7RUFDQyxxQkFBQTtFQUNBLGdCQUFBO0FBSUQ7QUFEQTtFQUNDLHNCQUFBO0FBSUQ7QUFBQztFQUNDLHNCQUFBO0FBR0Y7QUFBRTtFQUNDLHNCQUFBO0FBR0g7QUFBRztFQUNDLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdKO0FBQUU7RUFFQyxjQUFBO0VBQ0EsWUFBQTtBQUVIO0FBRUU7RUFDQyxjQUFBO0VBQ0EsWUFBQTtBQUNIIiwiZmlsZSI6ImxvZ2luLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHbG9iYWwgc3R5bGUgc2hlZXQgKi9cclxuXHJcbi8qID09PT09PT09PT09IEZvbnRzID09PT09PT09PT09ICovXHJcblxyXG4vKiBSb2JvdG8gU2xhYiAtIE1haW4gY29udGVudCAqL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rU2xhYiZkaXNwbGF5PXN3YXAnKTtcclxuJHJvYm90bzogJ1JvYm90byBTbGFiJztcclxuXHJcbiRtYWluLWNvbnRlbnQtZm9udDogJHJvYm90bztcclxuLyogPT09PT09PT09PT0gQ29sb3JzID09PT09PT09PT09ICovXHJcbiRsaWdodC1ibHVlOiAjMzQ5OGRiO1xyXG4kZGFyay1ibHVlOiAjNDA0MDdhO1xyXG5cclxuJHJlZDogI2Q2MzAzMTtcclxuJGFzcGhhbHQ6ICMzNDQ5NWU7XHJcbiRvcmFuZ2U6ICNmZGNiNmU7XHJcblxyXG4kbGlnaHQtZ3JleTogI2RmZTZlOTtcclxuJGRhcmstZ3JleTogZ3JleTsiLCJAaW1wb3J0IFwiLi4vLi4vLi4vZ2xvYmFsLnNjc3NcIjtcclxuXHJcbiNjb250YWN0LXNlYXJjaC1jb250YWluZXJ7XHJcblx0d2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG5cdG1pbi13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lcntcclxuXHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG5cdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHQjcmVnaXN0cmF0aW9uLWZvcm17XHJcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0XHQuZm9ybS1ncm91cHtcclxuXHRcdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHJcblx0XHRcdC5mb3JtLWdyb3VwIHNtYWxse1xyXG5cdFx0XHRcdGNvbG9yOiAgI2ZmZiAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFx0XHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRcdFx0fVxyXG5cclxuXHRcdCNyZWdpc3RyYXRpb24tZm9ybSAjbG9naW4tYnRue1xyXG5cclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdG1hcmdpbjogYXV0bztcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0I25ld1JhbmRvbVByb2ZpbGV7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHR9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-view',
                templateUrl: './login-view.component.html',
                styleUrls: ['./login-view.component.scss']
            }]
    }], function () { return [{ type: src_app_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"] }]; }, null); })();


/***/ }),

/***/ "dX1S":
/*!**********************************************************************!*\
  !*** ./src/app/views/my-contacts-view/my-contacts-view.component.ts ***!
  \**********************************************************************/
/*! exports provided: MyContactsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyContactsViewComponent", function() { return MyContactsViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/navbar/navbar/navbar.component */ "D5J9");



class MyContactsViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyContactsViewComponent.ɵfac = function MyContactsViewComponent_Factory(t) { return new (t || MyContactsViewComponent)(); };
MyContactsViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyContactsViewComponent, selectors: [["app-my-contacts-view"]], decls: 3, vars: 0, template: function MyContactsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "my-contacts-view works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_modules_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1jb250YWN0cy12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyContactsViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-contacts-view',
                templateUrl: './my-contacts-view.component.html',
                styleUrls: ['./my-contacts-view.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ndqt":
/*!************************************************************************!*\
  !*** ./src/app/views/registration-view/registration-view.component.ts ***!
  \************************************************************************/
/*! exports provided: RegistrationViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationViewComponent", function() { return RegistrationViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/profile.service */ "oWCI");
/* harmony import */ var _modules_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/navbar/navbar/navbar.component */ "D5J9");




class RegistrationViewComponent {
    constructor(profileService) {
        this.profileService = profileService;
    }
    ngOnInit() {
    }
    newRandomProfile() {
        this.profileService
            .createRandomProfile()
            .subscribe((response) => {
            console.log(response);
        });
    }
    // Note : For this version (Showcase version), food is considered a simple 'string' and Note
    // ... and array
    newProfile(email, password, name, age, family, race, food) {
        this.profileService
            .createProfile(email, password, name, age, family, race, food)
            .subscribe((response) => {
            console.log(response);
        });
    }
}
RegistrationViewComponent.ɵfac = function RegistrationViewComponent_Factory(t) { return new (t || RegistrationViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"])); };
RegistrationViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationViewComponent, selectors: [["app-registration-view"]], decls: 70, vars: 0, consts: [["id", "contact-search-container", 1, "container", "focused-container"], [1, "row", "title-container"], [1, "col-10"], [1, "row", "form-container"], ["action", "/login", "method", "", "id", "registration-form"], [1, "form-group"], [1, "required"], ["type", "email", "placeholder", "example@provider.com", 1, "form-control"], ["email", ""], [1, "form-text", "text-muted"], ["type", "password", "placeholder", "Choose a password", 1, "form-control"], ["password", ""], ["type", "text", "placeholder", "Your name", 1, "form-control"], ["name", ""], ["type", "number", 1, "form-control"], ["age", ""], ["type", "text", "placeholder", "Generic pangolin family", 1, "form-control"], ["family", ""], ["type", "text", "placeholder", "Race #1", 1, "form-control"], ["race", ""], ["type", "text", "placeholder", "Classic pangolin food", 1, "form-control"], ["food", ""], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [1, "form-text", "text-muted", 2, "text-align", "center"], ["href", "/login"], [2, "text-align", "center"], [1, "form-group", 2, "text-align", "center"], ["id", "newRandomProfile", 1, "btn", "btn-warning", 3, "click"], ["href", "/"]], template: function RegistrationViewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Your email adress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Your name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Your current age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "(Not birth dates for this version)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Your family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Your race");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "The food category you like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationViewComponent_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52); return ctx.newProfile(_r0.value, _r1.value, _r2.value, _r3.value, _r4.value, _r5.value, _r6.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Create your profile ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Already have an account ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Log in !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Or you can ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationViewComponent_Template_button_click_65_listener() { return ctx.newRandomProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Create A Random Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Return to home page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_modules_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap\");\n\n\n\n\n#contact-search-container[_ngcontent-%COMP%] {\n  width: 30% !important;\n  min-width: 300px;\n}\n.form-container[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n#registration-form[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.form-group[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #fff !important;\n  text-align: right;\n  font-style: italic;\n}\n#registration-form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n#newRandomProfile[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxnbG9iYWwuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3RyYXRpb24tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS1EsZ0ZBQUE7QUFMUix1QkFBQTtBQUVBLGtDQUFBO0FBRUEsK0JBQUE7QUFLQSxtQ0FBQTtBQ1BBO0VBQ0MscUJBQUE7RUFDQSxnQkFBQTtBQUlEO0FBREE7RUFDQyxzQkFBQTtBQUlEO0FBQUM7RUFDQyxzQkFBQTtBQUdGO0FBQUU7RUFDQyxzQkFBQTtBQUdIO0FBQUc7RUFDQyxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHSjtBQUFFO0VBRUMsY0FBQTtFQUNBLFlBQUE7QUFFSDtBQUVFO0VBQ0MsY0FBQTtFQUNBLFlBQUE7QUFDSCIsImZpbGUiOiJyZWdpc3RyYXRpb24tdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCBzdHlsZSBzaGVldCAqL1xyXG5cclxuLyogPT09PT09PT09PT0gRm9udHMgPT09PT09PT09PT0gKi9cclxuXHJcbi8qIFJvYm90byBTbGFiIC0gTWFpbiBjb250ZW50ICovXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytTbGFiJmRpc3BsYXk9c3dhcCcpO1xyXG4kcm9ib3RvOiAnUm9ib3RvIFNsYWInO1xyXG5cclxuJG1haW4tY29udGVudC1mb250OiAkcm9ib3RvO1xyXG4vKiA9PT09PT09PT09PSBDb2xvcnMgPT09PT09PT09PT0gKi9cclxuJGxpZ2h0LWJsdWU6ICMzNDk4ZGI7XHJcbiRkYXJrLWJsdWU6ICM0MDQwN2E7XHJcblxyXG4kcmVkOiAjZDYzMDMxO1xyXG4kYXNwaGFsdDogIzM0NDk1ZTtcclxuJG9yYW5nZTogI2ZkY2I2ZTtcclxuXHJcbiRsaWdodC1ncmV5OiAjZGZlNmU5O1xyXG4kZGFyay1ncmV5OiBncmV5OyIsIkBpbXBvcnQgXCIuLi8uLi8uLi9nbG9iYWwuc2Nzc1wiO1xyXG5cclxuI2NvbnRhY3Qtc2VhcmNoLWNvbnRhaW5lcntcclxuXHR3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcblx0bWluLXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVye1xyXG5cdGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcblx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cdCNyZWdpc3RyYXRpb24tZm9ybXtcclxuXHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHRcdC5mb3JtLWdyb3Vwe1xyXG5cdFx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0LmZvcm0tZ3JvdXAgc21hbGx7XHJcblx0XHRcdFx0Y29sb3I6ICAjZmZmICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHRcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0I3JlZ2lzdHJhdGlvbi1mb3JtIGJ1dHRvblt0eXBlPVwic3VibWl0XCJde1xyXG5cclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdG1hcmdpbjogYXV0bztcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0I25ld1JhbmRvbVByb2ZpbGV7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHR9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration-view',
                templateUrl: './registration-view.component.html',
                styleUrls: ['./registration-view.component.scss']
            }]
    }], function () { return [{ type: src_app_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"] }]; }, null); })();


/***/ }),

/***/ "oWCI":
/*!************************************!*\
  !*** ./src/app/profile.service.ts ***!
  \************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _request_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-handler.service */ "KPHA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class ProfileService {
    constructor(requestHandlerService, router, http) {
        this.requestHandlerService = requestHandlerService;
        this.router = router;
        this.http = http;
    }
    login(email, password) {
        return this.requestHandlerService
            .login_post('login', { email, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => {
            this.saveSessionLocally(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
            this.router.navigateByUrl('/');
        }));
    }
    saveSessionLocally(id, token, refreshToken) {
        localStorage.setItem('_id', id);
        localStorage.setItem('x-access-token', token);
        localStorage.setItem('x-refresh-token', refreshToken);
    }
    getNewToken() {
        return this.http.get('${this.requestHandlerService.ROOT}/token', {
            headers: {
                'x-refresh-token': this.getRefreshToken(),
                '_id': this.getProfileId()
            },
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => {
            this.setToken(res.headers.get('x-access-token'));
        }));
    }
    logout() {
        this.destroySessionLocally();
        console.log("logging out");
        this.router.navigateByUrl('/login');
    }
    destroySessionLocally() {
        localStorage.removeItem('_id');
        localStorage.removeItem('x-access-token');
        localStorage.removeItem('x-refresh-token');
    }
    getToken() {
        return localStorage.getItem('x-access-token');
    }
    getRefreshToken() {
        return localStorage.getItem('x-refresh-token');
    }
    getProfileId() {
        return localStorage.getItem('_id');
    }
    setToken(token) {
        localStorage.setItem('x-access-token', token);
    }
    createProfile(email, password, name, age, family, race, food) {
        return this.requestHandlerService.post('register', {
            email, password,
            name, age,
            family, race,
            food
        });
    }
    createRandomProfile() {
        let rand_suff = Math.floor(Math.random() * 100);
        return this.requestHandlerService.post('register', {
            email: "test#" + rand_suff + "@provider.com",
            password: "password#" + rand_suff,
            name: "Test Profile #" + rand_suff, age: 1,
            family: "Family #" + rand_suff, race: "Test Race",
            food: ["Food1"]
        });
    }
    getAllProfiles() {
        return this.requestHandlerService.get('search');
    }
    getSearchProfiles(query) {
        return this.requestHandlerService.get(`search/${query}`);
    }
    getProfileById(id) {
        return this.requestHandlerService.get(`search/id/${id}`);
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_request_handler_service__WEBPACK_IMPORTED_MODULE_2__["RequestHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _request_handler_service__WEBPACK_IMPORTED_MODULE_2__["RequestHandlerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_contact_search_view_contact_search_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/contact-search-view/contact-search-view.component */ "aJdG");
/* harmony import */ var _views_registration_view_registration_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/registration-view/registration-view.component */ "ndqt");
/* harmony import */ var _views_login_view_login_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/login-view/login-view.component */ "bvlY");
/* harmony import */ var _views_my_contacts_view_my_contacts_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/my-contacts-view/my-contacts-view.component */ "dX1S");
/* harmony import */ var _views_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/profile-view/profile-view.component */ "2Cb0");









const routes = [
    { path: 'search', component: _views_contact_search_view_contact_search_view_component__WEBPACK_IMPORTED_MODULE_2__["ContactSearchViewComponent"] },
    { path: 'recherche', redirectTo: '/search', pathMatch: 'full' },
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search/:query', component: _views_contact_search_view_contact_search_view_component__WEBPACK_IMPORTED_MODULE_2__["ContactSearchViewComponent"] },
    { path: 'register', component: _views_registration_view_registration_view_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationViewComponent"] },
    { path: 'inscription', redirectTo: '/register', pathMatch: 'full' },
    { path: 'login', component: _views_login_view_login_view_component__WEBPACK_IMPORTED_MODULE_4__["LoginViewComponent"] },
    { path: 'connexion', redirectTo: '/login', pathMatch: 'full' },
    { path: 'my-contacts', component: _views_my_contacts_view_my_contacts_view_component__WEBPACK_IMPORTED_MODULE_5__["MyContactsViewComponent"] },
    { path: 'mes-contacts', redirectTo: '/my-contacts', pathMatch: 'full' },
    { path: 'profile/:id', component: _views_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_6__["ProfileViewComponent"] },
    { path: 'me/:id', redirectTo: '/profile/:id', pathMatch: 'full' },
    { path: 'mon-profile/:id', redirectTo: '/profile/:id', pathMatch: 'full' },
    { path: 'my-profile/:id', redirectTo: '/profile/:id', pathMatch: 'full' }
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
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
//# sourceMappingURL=main.js.map