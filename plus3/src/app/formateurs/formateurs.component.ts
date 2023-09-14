
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
  searchText: string ="";

  constructor(private formateurService: FormateurService){}

  ngOnInit(): void {
      this.formateurService.getFormateurs().subscribe((data)=>{
        this.formateurs = data;
      });     
  }
 
  handleDelete(formateur: any){
    let index = this.formateurs?.indexOf(formateur);
    this.formateurs.splice(index,1)

  }
   


}
