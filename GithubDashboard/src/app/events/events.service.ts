import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {

    private url = "";

    constructor(private http:Http) { }
    // Uses http.get() to load a single JSON file
        getEvents(): Observable<Event[]> {
            return this.http.get('https://api.github.com/events?' + Date.now()).map((res:Response) => res.json());
        }
        getDetails(uri: string): Observable<JSON[]>{
            return this.http.get(uri).map((res:Response) => res.json());
        }
        setDetailsUrl(url : string){
            this.url = url;
        }
        getDetailsUrl(): string{
            return this.url;
        }
    }