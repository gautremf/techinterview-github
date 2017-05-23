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
var events_service_1 = require("./events.service");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var EventDetailsComponent = (function () {
    function EventDetailsComponent(eventService) {
        this.eventService = eventService;
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        this.getDetails();
    };
    EventDetailsComponent.prototype.getDetails = function () {
        var _this = this;
        this.eventService.getDetails().subscribe(function (details) { return _this.details = details; }); //get details for each repo
    };
    return EventDetailsComponent;
}());
EventDetailsComponent = __decorate([
    core_1.Component({
        selector: 'event-details',
        templateUrl: './event-details.component.html',
        providers: [events_service_1.EventService]
    }),
    __metadata("design:paramtypes", [events_service_1.EventService])
], EventDetailsComponent);
exports.EventDetailsComponent = EventDetailsComponent;
//# sourceMappingURL=event-details.component.js.map