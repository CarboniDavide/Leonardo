import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlympicComponent } from './olympic/olympic.component';
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';
import { MarathonComponent } from './marathon/marathon.component';
import { PopulationComponent } from './population/population.component';
import { MortalityComponent } from './mortality/mortality.component';

import * as exporting from 'highcharts/modules/exporting.src';
import * as sunburst from 'highcharts/modules/sunburst.src';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';

@NgModule({
  declarations: [OlympicComponent, MarathonComponent, PopulationComponent, MortalityComponent],
  imports: [
    CommonModule,
    ChartModule
  ],
  providers: [
    DynamicScriptLoaderService,
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ exporting, sunburst ] }
  ]
})
export class ChartsModule { }
