import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onSave';

  /*Functions*/
  // Source: https://www.geeksforgeeks.org/angular-10-focus-event/
  // Function: When save button is clicked, console will log the event with save message.
  onSave($event: any){
    console.log("Saved!", $event)
  }

}
