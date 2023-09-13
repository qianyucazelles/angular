import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantComponent } from './participant/participant.component';
import { FormationSessionComponent } from './formation-session/formation-session.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { HistoireComponent } from './histoire/histoire.component';

const routes: Routes = [
  {path: "participants", component: ParticipantComponent},
  {path: "sessions", component: FormationSessionComponent},
  {path: "formateurs", component: FormateursComponent},
  {path: "histoire", component: HistoireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
