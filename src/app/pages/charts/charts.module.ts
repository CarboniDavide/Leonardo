import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlympicComponent } from './olympic/olympic.component';
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';

@NgModule({
  declarations: [OlympicComponent],
  imports: [
    CommonModule
  ],
  providers: [DynamicScriptLoaderService]
})
export class ChartsModule { }
