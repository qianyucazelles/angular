import { Adresse } from "./adresse";

export class User {


    constructor(
      public id: number,
      public nom: string,
      public prenom: string,
      public gender: string,
      public adresse: Adresse,
      public mail: string,
      public entreprise: string
    ) {  }
  
  }