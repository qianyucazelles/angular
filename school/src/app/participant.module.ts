import { Adresse } from './adresse.module';
export class Participant{
    id: number;
    nom: string;
    prenom: string;
    gender: string;
    adresse: Adresse;
    mail: string;
    entreprise: string;

    constructor(
    id: number,
    nom: string,
    prenom: string,
    gender: string,
    adresse: Adresse,
    mail: string,
    entreprise: string){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.gender = gender;
        this.adresse = adresse;
        this.mail = mail;
        this.entreprise = entreprise;
    }

}