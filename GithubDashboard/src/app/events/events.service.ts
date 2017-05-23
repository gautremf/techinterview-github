import { Injectable, Input } from '@angular/core';
import {Http, Response} from '@angular/http';

import { DetailUpdates } from './detail-updates'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

/**
 * This is a shared service that is being used by the event-details and events-thumbnail components. 
 * 
 */
@Injectable()
export class EventService {

    repoUrl: DetailUpdates; //this variable is being used to keep up with the selected repo url

    constructor(private http:Http) { }
        // Uses http.get() to hit the API.
        getEvents(): Observable<JSON[]> {
            return this.http.get('https://api.github.com/events?' + Date.now()).map((res:Response) => res.json());
        }
        // Uses http.get() to hit the repo URL.
        getDetails(): Observable<JSON[]>{
            return this.http.get(DetailUpdates.repoUrl).map((res2:Response) => res2.json());
        }
    }