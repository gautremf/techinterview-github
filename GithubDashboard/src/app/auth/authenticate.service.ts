import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {

    constructor(private http: Http, private router:Router) { }

    login(username: string, password: string) {

        let credentials = JSON.stringify({username: username, password: password});
        let headers = new Headers(); 
        headers.append('Authentication', 'Basic');

        this.http.post('https://api.github.com/users', credentials, {headers: headers}).subscribe(
            response => {
            localStorage.setItem('id_token', response.json().id_token);
        });
    }
    checkLogin():boolean {
        if (localStorage.getItem != null){
            return true; 
        }
        else{
            return false; 
        }
    }
    logout(): void {
        localStorage.removeItem('id_token');
    }
}