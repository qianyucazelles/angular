import { Component, OnInit } from '@angular/core';

import { CoursService } from '../services/cours.service';

import { MatiereService } from '../services/matiere.service';
import { FormationService } from '../services/formation.service';

import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Matiere } from '../matiere/matieres';
import { Formation } from '../formations/formations';
import { Cours } from '../model/cours';

@Component({
  selector: 'app-cours-form',
  templateUrl: './cours-form.component.html',
  styleUrls: ['./cours-form.component.css']
})
export class CoursFormComponent implements OnInit {
  submitted: boolean=false;
  matiere: Matiere[]=[];
  selectedMatiere= this.matiere;
  formation:Formation[] = [];
  selectedFormation= this.formation;

  cours!: Cours;
  

  constructor(
    private fb:FormBuilder,
    private matiereService: MatiereService, 
    private formationService: FormationService, 
    private coursService:CoursService, 
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.getAllMatieres();
    this.getAllFormations();
    this.getCours();
    
  }


  getAllMatieres(): void {
    this.matiereService.getAllMatieres().subscribe(
      matiere => this.matiere = matiere
    );
  }

  getAllFormations(): void {
    this.formationService.getFormations().subscribe(
      formation => this.formation = formation
    );
  }

  getCours(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id){
      this.coursService.getById(id)
      .subscribe(cours => this.cours = cours);
    } else {
      this.newCours();
    }
    
  }

  

  onSubmit() { this.submitted = true; }

  submitCours(cours:Cours){
    if(this.cours.id<=0){
      this.add(cours);
      
    }
    
    this.router.navigate(['/cours']);

  }

  add(cours:Cours){
    this.coursService.addCours(cours)
    .subscribe();

    
  }

  refreshPage(){
    window.location.reload();
  }


  newCours() {
    this.cours = {
      id:0,
      nom:"",
      matiere:{
        id:0,
        nom:""
      },
      formation:{
        id: 0,
        nom: "",
        description: ''
      },
      duree:0
    
      }


    }
  }






  





