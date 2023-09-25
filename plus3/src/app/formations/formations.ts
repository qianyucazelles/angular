import { upperLowerTxt } from "../generalFunctions/upperLowerTxt";

export class Formation{
    id: number;
    nom: string;


    constructor(id: number, nom: string){
        this.id = id,
        this.nom = nom
    }
}

export function FormationGeneralizeFormat(formation: Formation): Formation{
    formation.nom = upperLowerTxt(formation.nom)
    return formation
}