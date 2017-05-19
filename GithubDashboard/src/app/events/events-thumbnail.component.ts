import { Component,Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { EventService } from './events.service';

import 'rxjs/add/observable/of'; 

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';



@Component({

    selector: 'event-thumbnail',
    templateUrl: './events-thumbnail.component.html',
    providers:[ EventService ]
})


export class EventsThumbnailComponent implements OnInit {

    events: Event[];

    constructor(private eventService: EventService){}

    ngOnInit(){
        this.getEvents();
    }

    getEvents(){

        this.eventService.getEvents().subscribe(events => this.events = events);
        
    }
}
