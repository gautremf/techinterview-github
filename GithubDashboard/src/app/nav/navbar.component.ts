import { Component } from '@angular/core'
import { Routes } from '@angular/router';

import { AuthenticationService } from '../auth/authenticate.service';
  
@Component({
    selector: 'nav-bar',
    providers:[ AuthenticationService ],
    templateUrl: 'app/nav/navbar.component.html',
})

export class NavBarComponent{

    model: any = {};
    loading = false;
    error = '';

    constructor(private authenticationService: AuthenticationService){

    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
        }
}