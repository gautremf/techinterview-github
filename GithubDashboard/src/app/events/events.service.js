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
var http_1 = require("@angular/http");
var detail_updates_1 = require("./detail-updates");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var EventService = (function () {
    function EventService(http) {
        this.http = http;
    }
    // Uses http.get() to load a single JSON file
    EventService.prototype.getEvents = function () {
        return this.http.get('https://api.github.com/events?' + Date.now()).map(function (res) { return res.json(); });
    };
    EventService.prototype.getDetails = function () {
        return this.http.get(detail_updates_1.DetailUpdates.repoUrl).map(function (res2) { return res2.json(); });
    };
    return EventService;
}());
EventService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=events.service.js.map