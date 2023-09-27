import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantComponent } from './component/participant/participant.component';
import { FormationsComponent } from './component/formations/formations.component';
import { FormationSessionComponent } from './component/formation-session/formation-session.component';
import { MatieresComponent } from './component/matiere/matieres.component';
import { FormateursComponent } from './component/formateurs/formateurs.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoireComponent } from './component/histoire/histoire.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ParticipantFormComponent } from './component/participant-form/participant-form.component';
import { ParticipantDetailsComponent } from './component/participant-details/participant-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './component/users/users.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FormateurDetailsComponent } from './component/formateur-details/formateur-details.component';
import { FormationFormComponent } from './component/formation-form/formation-form.component';
import { FormationDetailsComponent } from './component/formation-details/formation-details.component';
import { FormateurFormComponent } from './component/formateur-form/formateur-form.component';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { CoursDetailsComponent } from './component/cours-details/cours-details.component';
import { CoursFormComponent } from './component/cours-form/cours-form.component';
import { CoursComponent } from './component/cours/cours.component';





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
