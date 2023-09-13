import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantComponent } from './participant/participant.component';
import { FormationComponent } from './formation/formation.component';
import { FormationSessionComponent } from './formation-session/formation-session.component';
import { MatiereComponent } from './matiere/matiere.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { FormateurService } from './formateurs/formateurService';
import { HttpClientModule } from '@angular/common/http';
import { HistoireComponent } from './histoire/histoire.component';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantComponent,
    FormationComponent,
    FormationSessionComponent,
    FormateursComponent,
    MatiereComponent,
    HistoireComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FormateurService],
  bootstrap: [AppComponent]
})

export class AppModule { }
