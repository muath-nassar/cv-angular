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
import { ProgressFieldComponent } from './components/progress-field/progress-field.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GoToTopComponent } from './components/go-to-top/go-to-top.component';


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
    ProgressFieldComponent,
    ProjectsComponent,
    GoToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
