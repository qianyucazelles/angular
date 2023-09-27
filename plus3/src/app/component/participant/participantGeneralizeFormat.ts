import { upperLowerTxt } from '../../generalFunctions/upperLowerTxt';
import { Participant } from './participant';
export function ParticipantGeneralizeFormat(participant: Participant):Participant{
    participant.nom = upperLowerTxt(participant.nom);
    participant.prenom = upperLowerTxt(participant.prenom);
    participant.adresse.nomVoie = upperLowerTxt(participant.adresse.nomVoie);
    participant.adresse.codePostal = upperLowerTxt(participant.adresse.codePostal);
    participant.adresse.ville = upperLowerTxt(participant.adresse.ville);
    participant.mail = upperLowerTxt(participant.mail);
    participant.entreprise = upperLowerTxt(participant.entreprise);
    return participant;
}