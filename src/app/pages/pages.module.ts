import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DynamicScriptLoaderService } from '../services/dynamic-script-loader.service';
import { ChartsModule } from './charts/charts.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  providers: [DynamicScriptLoaderService]
})
export class PagesModule { }
