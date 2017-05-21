import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router'; 

import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { EventDetailsComponent } from './events/event-details.component';
import { NavBarComponent } from './nav/navbar.component';
import { AppComponent }  from './app.component';

const appRoutes: Routes = [
  {path: 'dashboard', component: EventsThumbnailComponent},
  {path: 'details', component: EventDetailsComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes), BrowserModule, HttpModule ],
  declarations: [ 
                  AppComponent ,
                  EventsThumbnailComponent,
                  EventDetailsComponent,
                  NavBarComponent 
                ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
