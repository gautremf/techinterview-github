import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {

constructor(private http:Http) { }
  // Uses http.get() to load a single JSON file
    getEvents(): Observable<Event[]> {
        return this.http.get('https://api.github.com/events').map((res:Response) => res.json());
    }
}