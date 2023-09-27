
import { Component, OnInit } from '@angular/core';
import { Formateur } from './formateur';
import { FormateurService } from '../../services/formateur.service';


@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent{
  formateurs: Formateur[] =[];
  filteredFormateurs: Formateur[] =[];
  searchText: string ="";


  constructor(private formateurService: FormateurService){}

  ngOnInit(): void {
    this.getAllFormateur()
  }
 
  getAllFormateur(): void{
    this.formateurService.getAllFormateurs()
    .subscribe(formateurs => {this.formateurs = formateurs, this.filteredFormateurs = formateurs})
  }

  delete(formateurId: number){
    this.formateurService.deleteFormateur(formateurId)
    .subscribe({
      next:response=>{
        if (response == 1){
          alert("succeful delete")

        } else {
          alert("Ce formateur participe à une session")

        }
        
      },
      error:err =>{
        alert("Ce formateur participe à une session")
      }
      });
      this.getAllFormateur

    this.refreshPage()
  }

  refreshPage(){
    window.location.reload()
  }

  filterFormateurs(text: string){
    if(!text){
      this.filteredFormateurs = this.formateurs
    }
    
    this.filteredFormateurs = this.formateurs.filter(
      formateur =>
      formateur?.prenom.toLowerCase().includes(text.toLowerCase())||
      formateur?.nom.toLowerCase().includes(text.toLowerCase())
    )
  }






}
