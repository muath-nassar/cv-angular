import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvHeaderComponent } from './components/cv-header/cv-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main/main.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { InformationComponent } from './components/information/information.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { EducationComponent } from './components/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    CvHeaderComponent,
    MainComponent,
    SectionTitleComponent,
    PersonalInformationComponent,
    InformationComponent,
    AboutMeComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
