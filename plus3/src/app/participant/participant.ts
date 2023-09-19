import { Adresse } from './adresse.module';
export interface Participant{
    id: number;
    nom: string;
    prenom: string;
    adresse: Adresse;
    mail: string;
    entreprise: string;

   

}