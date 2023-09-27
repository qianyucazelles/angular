import { Component } from '@angular/core';
import { Matiere } from '../../models/matieres';
import { MatiereService } from '../../services/matiere.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.css']
})
export class MatieresComponent {
  matiere: Matiere[]=[];


  constructor(private service:MatiereService) {

  }
  ngOnInit(): void {
    this.getAllMatieres();
  }

  getAllMatieres(): void {
    this.service.getAllMatieres().subscribe(
      matiere => this.matiere = matiere
    );
  }

  delete(mat:Matiere): void {
    this.matiere = this.matiere.filter(m => m !== mat);
    this.service.deleteMatiere(mat.id).subscribe();
  }

  add(nom: string): void {
    nom = nom.trim();
    if (!nom) { return; }
    this.service.addMatiere({ nom } as Matiere)
      .subscribe(mat => {
        this.matiere.push(mat);
      });
    this.refreshPage()
  }

  refreshPage(){
    window.location.reload();
  }
}