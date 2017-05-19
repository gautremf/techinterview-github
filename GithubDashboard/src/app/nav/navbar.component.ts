import { Component } from '@angular/core'
import { Routes } from '@angular/router';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px;}
        .btn.btn-default { background-color: #808080;}
        .dropdown-toggle { background-color: #24292e;}
        .dropdown-menu { background-color: #24292e;}
        .container-fluid { background-color: #24292e;}
        .navbar-form.navbar-right { position: relative; margin-left: 200px; width: 200px;}
    `]
    
})

export class NavBarComponent{

    refreshAPI(){
    
    }

}