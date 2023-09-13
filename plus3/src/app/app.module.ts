import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantComponent } from './participant/participant.component';
import { FormationComponent } from './formation/formation.component';
import { FormationSessionComponent } from './formation-session/formation-session.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantComponent,
    FormationComponent,
    FormationSessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
