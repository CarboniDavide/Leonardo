import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DynamicScriptLoaderService } from '../services/dynamic-script-loader.service';
import { ChartsModule } from './charts/charts.module';

@NgModule({
  declarations: [HomeComponent, ContactComponent, AboutComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  providers: [DynamicScriptLoaderService]
})
export class PagesModule { }
