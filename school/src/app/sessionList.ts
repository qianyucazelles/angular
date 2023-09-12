import { Formation } from './formation.module';
import { majorJson } from "./majorJson";
import { Major } from "./major.module";

export const sessionList: Major[] = majorJson.map(
    (sessionData: any)=>{
    return new Major(
        sessionData.id,
        sessionData.nom,
        new Formation(
            sessionData.Formation.id,
            sessionData.Formation.nom
            ),
        sessionData.dateDebut,
        sessionData.dateFin,
        sessionData.capacity,
        sessionData.remainingPlace  
    )
});
