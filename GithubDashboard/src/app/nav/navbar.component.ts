import { Component } from '@angular/core'
import { Routes, Router } from '@angular/router';

import { AuthenticationService } from '../auth/authenticate.service';
  
@Component({
    selector: 'nav-bar',
    providers:[ AuthenticationService ],
    templateUrl: './navbar.component.html',
})

export class NavBarComponent{

    loading = false;
    error = '';
 

    constructor(private authenticationService: AuthenticationService){

    }
     
    login(username: string, password: string) {
        this.authenticationService.login(username, password); 
    }

    checkLogin(){
        return this.authenticationService.checkLogin();
    }
    logout(){
        this.authenticationService.logout();
    }
}