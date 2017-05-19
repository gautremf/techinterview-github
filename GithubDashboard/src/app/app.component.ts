import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class ="dashheader"> 
    <nav-bar style = "background-color: #24292e;"></nav-bar>
    <h2> Github Public Events Dashboard! </h2>
    <hr/>
    <event-thumbnail></event-thumbnail>
    </div> 
    `,
})
export class AppComponent  {

}
