export class Adresse{
    idAdresse: number;
    numeroVoie: string;
    typeVoie: string;
    nomVoie: string;
    codePostal: string;
    ville: string;

    constructor(
        idAdresse: number,
        numeroVoie: string,
        typeVoie: string,
        nomVoie: string,
        codePostal: string,
        ville: string
        ){
            this.idAdresse = idAdresse;
            this.numeroVoie = numeroVoie;
            this.typeVoie = typeVoie;
            this.nomVoie = nomVoie;
            this.codePostal = codePostal;
            this.ville = ville;
        }
    
    getFullAdresse(){
        return this.numeroVoie + "," + this.typeVoie + "," + this.nomVoie + ","  + this.codePostal+"," + this.ville
    }

}