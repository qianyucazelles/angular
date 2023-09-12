import { Formation } from './formation.module';
import { majorJson } from "./majorJson";
import { Major } from "./major.module";

export const majorList: Major[] = majorJson.map((majorData: any)=>{
    return new Major(
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
