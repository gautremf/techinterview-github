"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var events_thumbnail_component_1 = require("./events/events-thumbnail.component");
var event_details_component_1 = require("./events/event-details.component");
var navbar_component_1 = require("./nav/navbar.component");
var app_component_1 = require("./app.component");
var appRoutes = [
    { path: 'dashboard', component: events_thumbnail_component_1.EventsThumbnailComponent },
    { path: 'details', component: event_details_component_1.EventDetailsComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(appRoutes), platform_browser_1.BrowserModule, http_1.HttpModule],
        declarations: [
            app_component_1.AppComponent,
            events_thumbnail_component_1.EventsThumbnailComponent,
            event_details_component_1.EventDetailsComponent,
            navbar_component_1.NavBarComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map