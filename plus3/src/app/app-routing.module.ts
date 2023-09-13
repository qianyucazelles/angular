import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantComponent } from './participant/participant.component';
import { FormationSessionComponent } from './formation-session/formation-session.component';

const routes: Routes = [
  {path: "participant", component: ParticipantComponent},
  {path: "formation-session", component: FormationSessionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
