import { upperLowerTxt } from "../../generalFunctions/upperLowerTxt";

export class Formation{
    id: number;
    nom: string;
    description: string


    constructor(id: number, nom: string, description: string){
        this.id = id,
        this.nom = nom
        this.description = description
    }
}

export function FormationGeneralizeFormat(formation: Formation): Formation{
    formation.nom = upperLowerTxt(formation.nom)
    formation.description = upperLowerTxt(formation.description)
    return formation
}