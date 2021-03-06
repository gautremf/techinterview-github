import { Component,Output,OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DetailUpdates } from './detail-updates';
import { Subject } from 'rxjs/Subject';
import { EventService } from './events.service';

import 'rxjs/add/observable/of'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';



@Component({
    selector: 'event-thumbnail',
    templateUrl: './events-thumbnail.component.html',
    providers:[ EventService ],
    outputs: ['url']
})

/**
 * EventsThumbnailComponent class is being used populate the thumbnails on the dashboard.
 * This class is also responsible for updating the selected user's repo url. 
 */
export class EventsThumbnailComponent implements OnInit {

    events: JSON[];
    repoUrl: DetailUpdates; 

    constructor(private eventService: EventService){}

    ngOnInit(){  
        this.getEvents();
    }
    refreashAPI(){
        this.getEvents()
    }
    setRepoUrl(url: string){
        DetailUpdates.repoUrl = url;
    }
    getEvents(){
        this.eventService.getEvents().subscribe(events => this.events = events); 
    }
}
