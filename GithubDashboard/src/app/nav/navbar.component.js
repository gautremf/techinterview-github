"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var authenticate_service_1 = require("../auth/authenticate.service");
var NavBarComponent = (function () {
    function NavBarComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.loading = false;
        this.error = '';
    }
    NavBarComponent.prototype.login = function (username, password) {
        this.authenticationService.login(username, password);
    };
    NavBarComponent.prototype.checkLogin = function () {
        return this.authenticationService.checkLogin();
    };
    NavBarComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    core_1.Component({
        selector: 'nav-bar',
        providers: [authenticate_service_1.AuthenticationService],
        templateUrl: './navbar.component.html',
    }),
    __metadata("design:paramtypes", [authenticate_service_1.AuthenticationService])
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map