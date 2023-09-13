import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plus3';
  
  actions: Array<any> = [
    { name:"Participants", url: "/participants"},
    {name:"Sessions", url: "/sessions"},
    {name:"Formateurs", url: "/formateurs"},
    {name:"Notre Histoire", url: "/histoire"}
  ];

  currentAction: any;

  setCurrentAction(action:any){
    this.currentAction = action;
  }
}
