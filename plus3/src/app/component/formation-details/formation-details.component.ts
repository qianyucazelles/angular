import { Component, OnInit } from '@angular/core';
import { Formation } from '../formations/formations';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../../services/formation.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit {

  formation!: Formation


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formationService : FormationService,
    private location: Location,
  ) {}

  ngOnInit(): void{
    this.getFormationById()
  }

  getFormationById(): void{
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.formationService.getFormation(id)
    .subscribe(formation => this.formation = formation)
  }
  
  save(): void{
    if(this.formation){
      this.formationService.updateFormation(this.formation)
      .subscribe(() => this.goBack())
    }
  }

  goBack(): void{
    this.location.back()
  }


  updateFormation(){
    this.router.navigate(["/formations/register/"+ this.formation.id],
    {state: {formation: this.formation}})
  }




}
