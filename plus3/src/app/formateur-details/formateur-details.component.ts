import { Component } from '@angular/core';
import { FormateurService } from '../services/formateur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from '../formateurs/formateur';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formateur-details',
  templateUrl: './formateur-details.component.html',
  styleUrls: ['./formateur-details.component.css']
})
export class FormateurDetailsComponent {

formateur!:Formateur 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private FormateurService: FormateurService,
    private location: Location,
  ) { }


  ngOnInit():void {
    this.getFormateurById()
  }

  getFormateurById() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.FormateurService.getFormateur(id)
    .subscribe(formateur => this.formateur = formateur)
  }


  save(): void {
    if(this.formateur){
      this.FormateurService.updateFormateur(this.formateur)
      .subscribe(() => this.goBack())
    }
  }


  goBack(): void {
    this.location.back();
  }


  updateFormateur(){
    this.router.navigate(["/formateurs/register/" + this.formateur.id],
    {state: {formateur : this.formateur}})
  }

}
