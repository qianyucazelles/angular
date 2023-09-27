import { FormationService } from '../../services/formation.service';
import { Component } from '@angular/core';
import { Formation } from './formations';

@Component({
  selector: 'app-formation',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent {

  formations: Formation[]=[]
  filteredFormations: Formation[]=[]
  searchText: string = ""

  constructor(private FormationService: FormationService){}


  ngOnInit(): void{
    this.getAllFormation()
  }

  getAllFormation(): void{
    this.FormationService.getFormations()
    .subscribe(formations =>{this.formations = formations, this.filteredFormations = formations})
  }


  delete(formationId: number){
    this.FormationService.deleteFormation(formationId)
    .subscribe(this.getAllFormation);
    this.refreshPage()
  }

  refreshPage(){
    window.location.reload()
  }

  filterFormations(text: string){
    if(!text){
      this.filteredFormations = this.formations
    }

    this.filteredFormations = this.formations.filter(
      formation =>
      formation?.nom.toLowerCase().includes(text.toLowerCase())
    )
  }
}
