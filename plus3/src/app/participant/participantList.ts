import { Adresse } from "./adresse.module";
import { Participant } from "./participant.module";
import { participantJson } from "./participantJson";



export const participantList: Participant[]=participantJson.map((userData: any)=>{
    return new Participant(
        userData.ID, 
        userData.nom, 
        userData.prenom,
        userData.gender,
        new Adresse(
            userData.adresse.idAdresse,
            userData.adresse.numeroVoie,
            userData.adresse.typeVoie,
            userData.adresse.nomVoie,
            userData.adresse.codePostal,
            userData.adresse.ville    
            ),
         userData.mail,
         userData.entreprise   
        )
});