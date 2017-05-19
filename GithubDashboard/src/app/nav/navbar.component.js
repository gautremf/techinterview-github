"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.refreshAPI = function () {
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    core_1.Component({
        selector: 'nav-bar',
        templateUrl: 'app/nav/navbar.component.html',
        styles: ["\n        .nav.navbar-nav {font-size: 15px;}\n        .btn.btn-default { background-color: #808080;}\n        .dropdown-toggle { background-color: #24292e;}\n        .dropdown-menu { background-color: #24292e;}\n        .container-fluid { background-color: #24292e;}\n        .navbar-form.navbar-right { position: relative; margin-left: 200px; width: 200px;}\n    "]
    })
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map