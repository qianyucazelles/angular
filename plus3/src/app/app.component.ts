import { Formation } from './formations/formations';
import { Component } from '@angular/core';
import { FormationService } from './services/formation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plus3';
  
  formations: Formation[] = []

  constructor(private formationService : FormationService){}

  ngOnInit(): void{
    this.getAllFormation()
  }

  getAllFormation(): void{
    this.formationService.getFormations()
    .subscribe(formations =>{this.formations = formations, this.formations = formations})
  }


  actions: Array<any> = [
    {name:"Participants", url: "/participants"},
    {name:"Sessions", url: "/sessions"},
    {name:"Formateurs", url: "/formateurs"},
    {name:"Notre Histoire", url: "/histoire"}
  ];

  currentAction: any;

  setCurrentAction(action:any){
    this.currentAction = action;
  }


  alert(){
    console.log(this.formations)
  }
}