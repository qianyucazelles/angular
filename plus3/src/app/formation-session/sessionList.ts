import { Formation } from "../formation/formation.module";
import { FormationSession } from "./formation-session.module";
import { sessionJson } from "./sessionJson";

export const sessionList: FormationSession[] = sessionJson.map((majorData: any)=>{
    return new FormationSession(
        majorData.id,
        majorData.nom,
        new Formation(
            majorData.formation.id,
            majorData.formation.nom
            ),
        majorData.dateDebut,
        majorData.dateFin,
        majorData.capacity,
        majorData.remainingPlace  
    )
});