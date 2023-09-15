export class Adresse {

    constructor(
      public idAdresse: number,
      public numeroVoie: number,
      public typeVoie: string,
      public nomVoie: string,
      public codePostal: string,
      public ville: string
    ) {  }

    public getFullAdresse(){
      return this.numeroVoie +","+this.typeVoie + "," + this.nomVoie +"," + this.codePostal + "," + this.ville
    }
  
  }