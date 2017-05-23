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
var detail_updates_1 = require("./detail-updates");
var events_service_1 = require("./events.service");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var EventsThumbnailComponent = (function () {
    function EventsThumbnailComponent(eventService) {
        this.eventService = eventService;
    }
    EventsThumbnailComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    EventsThumbnailComponent.prototype.refreashAPI = function () {
        this.getEvents();
    };
    EventsThumbnailComponent.prototype.setRepoUrl = function (url) {
        detail_updates_1.DetailUpdates.repoUrl = url;
    };
    EventsThumbnailComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getEvents().subscribe(function (events) { return _this.events = events; });
    };
    return EventsThumbnailComponent;
}());
EventsThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'event-thumbnail',
        templateUrl: './events-thumbnail.component.html',
        providers: [events_service_1.EventService],
        outputs: ['url']
    }),
    __metadata("design:paramtypes", [events_service_1.EventService])
], EventsThumbnailComponent);
exports.EventsThumbnailComponent = EventsThumbnailComponent;
//# sourceMappingURL=events-thumbnail.component.js.map