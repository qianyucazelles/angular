import { ParticipantFormComponent } from './participant-form/participant-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantComponent } from './participant/participant.component';
import { FormationSessionComponent } from './formation-session/formation-session.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { HistoireComponent } from './histoire/histoire.component';
import { ParticipantDetailsComponent } from './participant-details/participant-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormateurFormComponent } from './formateur-form/formateur-form.component';
import { FormateurDetailsComponent } from './formateur-details/formateur-details.component';
import { FormationsComponent } from './formations/formations.component';
import { FormationFormComponent } from './formation-form/formation-form.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MatieresComponent } from './matiere/matieres.component';
import { CoursComponent } from './cours/cours.component';
import { CoursDetailsComponent } from './cours-details/cours-details.component';
import { CoursFormComponent } from './cours-form/cours-form.component';



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
