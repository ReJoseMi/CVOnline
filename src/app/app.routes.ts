import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { LanguagesComponent } from './languages/languages.component';

export const routes: Routes = [
    { path: '', component: AboutMeComponent },
    { path: 'education', component: EducationComponent },
    { path: 'work', component: WorkComponent },
    { path: 'languages', component: LanguagesComponent },
];
