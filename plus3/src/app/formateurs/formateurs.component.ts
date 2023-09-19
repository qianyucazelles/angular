
import { Component, OnInit } from '@angular/core';
import { Formateur } from './formateur';
import { FormateurService } from '../services/formateur.service';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {
  formateurs: Formateur[] =[];
  filteredFormateurs: Formateur[] =[];
  searchText: string ="";

  constructor(private formateurService: FormateurService){}

  ngOnInit(): void {
      this.formateurService.getAllFormateurs().then((formateurs: Formateur[])=>{
        this.formateurs = formateurs;
        this.filteredFormateurs = this.formateurs;
      });     
  }
 
  handleDelete(formateur: any){
    let index = this.formateurs?.indexOf(formateur);
    this.formateurs.splice(index,1)

  }

  filterFormateurs(text: string){
    if(!text){
      this.filteredFormateurs = this.formateurs;
    }

    this.filteredFormateurs = this.formateurs.filter(
      formateur => formateur?.prenom.toLowerCase().includes(text.toLowerCase())
    )
  }


   


}
