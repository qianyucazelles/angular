import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantComponent } from './participant/participant.component';
import { FormationsComponent } from './formations/formations.component';
import { FormationSessionComponent } from './formation-session/formation-session.component';
import { MatieresComponent } from './matiere/matieres.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoireComponent } from './histoire/histoire.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ParticipantFormComponent } from './participant-form/participant-form.component';
import { ParticipantDetailsComponent } from './participant-details/participant-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FormateurDetailsComponent } from './formateur-details/formateur-details.component';
import { FormationFormComponent } from './formation-form/formation-form.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';
import { FormateurFormComponent } from './formateur-form/formateur-form.component';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { CoursDetailsComponent } from './cours-details/cours-details.component';
import { CoursFormComponent } from './cours-form/cours-form.component';
import { CoursComponent } from './cours/cours.component';





@NgModule({
  declarations: [
    AppComponent,
    ParticipantComponent,
    FormationsComponent,
    FormationSessionComponent,
    FormateursComponent,
    MatieresComponent,
    HistoireComponent,
    SearchFilterPipe,
    ParticipantFormComponent,
    ParticipantDetailsComponent,
    UsersComponent,
    UserFormComponent,
    NavbarComponent,
    FormateurDetailsComponent,
    FormationFormComponent,
    FormationDetailsComponent,
    FormateurFormComponent,
    AccueilComponent,
    CoursDetailsComponent,
    CoursFormComponent,
    CoursComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
