import { ActivatedRoute, Router } from '@angular/router';
import { FormateurService } from '../../services/formateur.service';
import { MatiereService } from '../../services/matiere.service';
import { Component, OnInit } from '@angular/core';
import { Formateur, FormateurGeneralizeFormat, } from '../formateurs/formateur';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Matiere } from '../../models/matieres';

@Component({
  selector: 'app-add',
  templateUrl: './formateur-form.component.html',
  styleUrls: ['./formateur-form.component.css']
})
export class FormateurFormComponent implements OnInit {

  formateur!: Formateur
  matieres: Matiere[] = []
  submitted: boolean = false;
  form: FormGroup

  constructor(
    private formateurService: FormateurService,
    private matiereService: MatiereService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) 
    {
      this.form = this.formBuilder.group({
        nom: [''],
        prenom: [''],
        mail: [''],
        matieres: this.formBuilder.array([]) 
      })
     }

  ngOnInit(): void {
    this.getFormateur()
    this.getMatieres()
  }


  getMatieres() {
    this.matiereService.getAllMatieres().subscribe(matieres => { this.matieres = matieres; });
  }


  getFormateur() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id) {
      this.formateurService.getFormateur(id)
        .subscribe(formateur => this.formateur = formateur);
    } else {
      this.newFormateur()
    }
  }

  newFormateur() {
    this.formateur = {
      id: 0,
      nom: "",
      prenom: "",
      mail: "",
      matieres: this.matieres
    }
  }

  add(formateur: Formateur) {
    this.formateurService.addFormateur(formateur).subscribe()
  }



  update(formateur: Formateur) {
    this.formateurService.updateFormateur(formateur).subscribe()
  }


  submitFormateur(formateur: Formateur) {
    formateur = FormateurGeneralizeFormat(formateur)
    if (this.formateur.id > 0) {
      this.update(formateur)
    } else {
      this.add(formateur)
    }
    this.router.navigate(["/formateurs"])


  }

  onSubmit() {
    this.submitted = true
  }

}