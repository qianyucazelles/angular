import { Formation } from "../formations/formations";
import { FormationSession } from "./formation-session.module";
import { sessionJson } from "./sessionJson";

export const sessionList: FormationSession[] = sessionJson.map((majorData: any) => {
    
    const formation = new Formation(
        majorData.formation.id,
        majorData.formation.nom,
        majorData.formation.description
    );
    
    return new FormationSession(
        majorData.id,
        majorData.nom,
        formation,
        majorData.dateDebut,
        majorData.dateFin,
        majorData.capacity,
        majorData.remainingPlace
    );
});
