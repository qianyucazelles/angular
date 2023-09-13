import { Matiere } from "../matiere/matiere";


export interface Formateur {
    id: number;
    nom: string;
    prenom: string;
    mail: string;
    matieres: Matiere[];
  }

  