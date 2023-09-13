import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MajorComponent } from './major/major.component';
import { ParticipantComponent } from './participant/participant.component';

const routes: Routes = [
  {path: "participant", component: ParticipantComponent},
  {path: "session", component: MajorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
