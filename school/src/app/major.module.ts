import { Formation } from './formation.module';

export class Major{
    id: number;
    nom: string;
    formation: Formation;
    dateDebut: string;
    dateFin: string;
    capacity: number;
    remainingPlace: number;

    constructor(id:number, nom: string, formation: Formation,
         dateDebut: string, dateFin: string, capacity:number, remainingPlace: number){
            this.id = id;
            this.nom = nom;
            this.formation = formation;
            this.dateDebut = dateDebut;
            this.dateFin = dateFin;
            this.capacity = capacity;
            this.remainingPlace = remainingPlace;
         }
    
}