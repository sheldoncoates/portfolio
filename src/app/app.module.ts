import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { FeatureProjectComponent } from './feature-project/feature-project.component';
import { SecondaryProjectComponent } from './secondary-project/secondary-project.component';
import { SkillsComponent } from './skills/skills.component';
import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    AboutComponent,
    FeatureProjectComponent,
    SecondaryProjectComponent,
    SkillsComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgxPageScrollModule,
    NgsRevealModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
