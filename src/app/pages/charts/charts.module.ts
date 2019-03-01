import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlympicComponent } from './olympic/olympic.component';
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';
import { MarathonComponent } from './marathon/marathon.component';
import { PopulationComponent } from './population/population.component';

@NgModule({
  declarations: [OlympicComponent, MarathonComponent, PopulationComponent],
  imports: [
    CommonModule
  ],
  providers: [DynamicScriptLoaderService]
})
export class ChartsModule { }
