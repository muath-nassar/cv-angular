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
import { DurationComponent } from './components/duration/duration.component';
import { WorkExperiancComponent } from './components/work-experianc/work-experianc.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';


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
    DurationComponent,
    WorkExperiancComponent,
    SkillsComponent,
    SkillBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent,SkillBarComponent]
})
export class AppModule { }
