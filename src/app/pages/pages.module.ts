import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [HomeComponent, ChartComponent, ContactComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
