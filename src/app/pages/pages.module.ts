import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [HomeComponent, ChartComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
