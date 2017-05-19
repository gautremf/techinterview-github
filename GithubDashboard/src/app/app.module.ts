import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent ,
                  EventsThumbnailComponent,
                  NavBarComponent 
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
