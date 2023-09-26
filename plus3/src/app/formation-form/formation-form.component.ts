import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from './../services/formation.service';
import { Component, OnInit } from '@angular/core';
import { Formation, FormationGeneralizeFormat } from '../formations/formations';

@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.css']
})
export class FormationFormComponent implements OnInit {

  formation!: Formation
  submitted: boolean = false

  constructor(
    private formationService : FormationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {
      this.getFormationById()
  }

  getFormationById(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    if(id){
      this.formationService.getFormation(id)
      .subscribe(formation => this.formation = formation)
    }else {
      this.newFormation()
    }
  }

  newFormation(){
    this.formation={
      id:0,
      nom:"",
      description:""
    }
  }

  onSubmit() { this.submitted = true; }

  submitFormation(formation: Formation){
    formation = FormationGeneralizeFormat(formation)
    if(this.formation.id > 0){
      this.update(formation)
    }else{
      this.add(formation)
    }
    this.router.navigate(["/formations"])
  }

  add(formation: Formation){
    this.formationService.addFormation(formation).subscribe()
  }

  update(formation: Formation){
    this.formationService.updateFormation(formation).subscribe()
  }





}

