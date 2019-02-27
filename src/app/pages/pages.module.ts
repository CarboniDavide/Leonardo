import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [HomeComponent, ChartComponent, ContactComponent, AboutComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }