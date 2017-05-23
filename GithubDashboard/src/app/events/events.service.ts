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

    private client_id = "e5cb269a3108836a85f1"; 
    private client_secret = "5ac6306b8ba75fc05423684c7e942b15a16e15bf";
    repoUrl: DetailUpdates; //this variable is being used to keep up with the selected repo url

    constructor(private http:Http) { }
        // Uses http.get() to hit the API.
        getEvents(): Observable<JSON[]> {
            return this.http.get('https://api.github.com/events?' + Date.now() + "&client_id=" + this.client_id + "&client_secret=" + this.client_secret).map((res:Response) => res.json());
        }
        // Uses http.get() to hit the repo URL.
        getDetails(): Observable<JSON[]>{
            return this.http.get(DetailUpdates.repoUrl + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret).map((res2:Response) => res2.json());
        }
    }