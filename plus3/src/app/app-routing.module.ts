import { ParticipantFormComponent } from './component/participant-form/participant-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantComponent } from './component/participant/participant.component';
import { FormationSessionComponent } from './component/formation-session/formation-session.component';
import { FormateursComponent } from './component/formateurs/formateurs.component';
import { HistoireComponent } from './component/histoire/histoire.component';
import { ParticipantDetailsComponent } from './component/participant-details/participant-details.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { FormateurFormComponent } from './component/formateur-form/formateur-form.component';
import { FormateurDetailsComponent } from './component/formateur-details/formateur-details.component';
import { FormationsComponent } from './component/formations/formations.component';
import { FormationFormComponent } from './component/formation-form/formation-form.component';
import { FormationDetailsComponent } from './component/formation-details/formation-details.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MatieresComponent } from './component/matiere/matieres.component';
import { CoursComponent } from './component/cours/cours.component';
import { CoursDetailsComponent } from './component/cours-details/cours-details.component';
import { CoursFormComponent } from './component/cours-form/cours-form.component';



const routes: Routes = [
  {path: "", component: AccueilComponent},
 
  {path: "participants/register/:id", component: ParticipantFormComponent},
  {path: "participants/register", component: ParticipantFormComponent},
  {path: "participants", component: ParticipantComponent},
  {path: "participants/:id", component: ParticipantDetailsComponent},
  {path: "sessions", component: FormationSessionComponent},
  {path: "formateurs", component: FormateursComponent},
  {path: "histoire", component: HistoireComponent},
  {path: "auth", component: UserFormComponent},
  {path: "formateurs/register/:id", component: FormateurFormComponent},
  {path: "formateurs/register", component: FormateurFormComponent},
  {path: "formateurs/:id", component: FormateurDetailsComponent},
  {path: "formations", component: FormationsComponent},
  {path: "formations/register/:id", component: FormationFormComponent},
  {path: "formations/register", component: FormationFormComponent},
  {path: "formations/:id", component: FormationDetailsComponent},
  {path: "histoire", component: HistoireComponent},

  {path:"cours/details/:id", component:CoursDetailsComponent},
  {path:"cours/enregistrement", component:CoursFormComponent},
  {path:"cours", component:CoursComponent},
  {path:"matieres", component:MatieresComponent},

  {path: "", component: AccueilComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
