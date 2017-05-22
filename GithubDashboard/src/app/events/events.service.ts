import { Injectable, Input } from '@angular/core';
import {Http, Response} from '@angular/http';

import { DetailUpdates } from './detail-updates'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {

    repoUrl: DetailUpdates;

    constructor(private http:Http) { }
    // Uses http.get() to load a single JSON file
        getEvents(): Observable<JSON[]> {
            return this.http.get('https://api.github.com/events?' + Date.now()).map((res:Response) => res.json());
        }
        getDetails(): Observable<JSON[]>{
            return this.http.get(DetailUpdates.repoUrl).map((res2:Response) => res2.json());
        }
    }