import { Component, OnInit, Input } from '@angular/core'; 
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { EventService } from './events.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Http, Response} from '@angular/http'
import { DetailUpdates } from './detail-updates';

import 'rxjs/add/observable/of'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'event-details',
    templateUrl: './event-details.component.html',
    providers: [EventService]
})

export class EventDetailsComponent implements OnInit{

    details: JSON[];
    repoUrl: DetailUpdates; 

    constructor(private eventService: EventService){}

    ngOnInit(){
        this.getDetails();        
    }
    getDetails(){
        this.eventService.getDetails().subscribe(details => this.details = details); //get details for each repo
    }
    log(val: any) { console.log(val); }
} 