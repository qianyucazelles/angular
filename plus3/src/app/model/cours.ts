import { Formation } from "../formations/formations";
import { Matiere } from "../matiere/matieres";



export interface Cours {

    id:number;
    nom:string;
    matiere:Matiere;
    formation:Formation;
    duree:number;


}