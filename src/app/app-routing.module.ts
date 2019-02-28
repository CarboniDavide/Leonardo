import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { OlympicComponent } from './pages/charts/olympic/olympic.component';
import { MarathonComponent } from './pages/charts/marathon/marathon.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chart', children: [
    { path: 'olympic',component: OlympicComponent },
    { path: 'marathon',component: MarathonComponent }
  ]},
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }