import { ParticipantFormComponent } from './participant-form/participant-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantComponent } from './participant/participant.component';
import { FormationSessionComponent } from './formation-session/formation-session.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { HistoireComponent } from './histoire/histoire.component';
import { ParticipantDetailsComponent } from './participant-details/participant-details.component';

const routes: Routes = [
  {path: "participants/register", component: ParticipantFormComponent},
  {path: "participants", component: ParticipantComponent},
  {path: "participants/:id", component: ParticipantDetailsComponent},
  {path: "sessions", component: FormationSessionComponent},
  {path: "formateurs", component: FormateursComponent},
  {path: "histoire", component: HistoireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
