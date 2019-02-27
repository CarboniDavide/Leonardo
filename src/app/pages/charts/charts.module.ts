import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlympicComponent } from './olympic/olympic.component';
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';
import { MarathonComponent } from './marathon/marathon.component';

@NgModule({
  declarations: [OlympicComponent, MarathonComponent],
  imports: [
    CommonModule
  ],
  providers: [DynamicScriptLoaderService]
})
export class ChartsModule { }
