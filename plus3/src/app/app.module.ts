import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantComponent } from './participant/participant.component';
import { FormationComponent } from './formation/formation.component';
import { FormationSessionComponent } from './formation-session/formation-session.component';
import { MatiereComponent } from './matiere/matiere.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoireComponent } from './histoire/histoire.component';
import { SearchFilterPipe } from './search-filter.pipe';

import { ParticipantFormComponent } from './participant-form/participant-form.component';
import { ParticipantDetailsComponent } from './participant-details/participant-details.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantComponent,
    FormationComponent,
    FormationSessionComponent,
    FormateursComponent,
    MatiereComponent,
    HistoireComponent,
    SearchFilterPipe,
    ParticipantFormComponent,
    ParticipantDetailsComponent,
    UsersComponent,
    UserFormComponent,
    NavbarComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
