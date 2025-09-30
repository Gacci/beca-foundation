import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'scholarships', component: ScholarshipsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' },
];
