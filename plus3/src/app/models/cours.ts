import { Formation } from "../component/formations/formations";
import { Matiere } from "./matieres";



export interface Cours {

    id:number;
    nom:string;
    matiere:Matiere;
    formation:Formation;
    duree:number;


}