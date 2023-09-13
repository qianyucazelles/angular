import { FormateurService } from './formateurService';
import { Component, OnInit } from '@angular/core';
import { Formateur } from './formateur';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {
  formateurs: Formateur[] =[];

  constructor(private formateurService: FormateurService){}

  ngOnInit(): void {
      this.formateurService.getFormateurs().subscribe((data)=>{
        this.formateurs = data;
      });
  }

}
