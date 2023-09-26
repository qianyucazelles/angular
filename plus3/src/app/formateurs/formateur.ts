import { upperLowerTxt } from "../generalFunctions/upperLowerTxt";
import { Matieres } from "../matiere/matieres";


export interface Formateur {
    id: number;
    nom: string;
    prenom: string;
    mail: string;
    matieres: Matieres[];
  }

export function FormateurGeneralizeFormat(formateur : Formateur) : Formateur{
  formateur.nom = upperLowerTxt(formateur.nom)
  formateur.prenom = upperLowerTxt(formateur.prenom)
  formateur.mail = upperLowerTxt(formateur.mail)
  return formateur
}

  