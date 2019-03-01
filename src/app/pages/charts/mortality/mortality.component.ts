import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';

@Component({
  selector: 'app-mortality',
  templateUrl: './mortality.component.html',
  styleUrls: ['./mortality.component.scss']
})
export class MortalityComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    this.loadScripts();
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('highcharts').then(data => {
      this.dynamicScriptLoader.load('heatmap',).then(data => {
        this.dynamicScriptLoader.load('treemap').then(data => {
          this.dynamicScriptLoader.load('treemapDraw').then(data => {
          }).catch(error => console.log(error))
        }).catch(error => console.log(error))
      }).catch(error => console.log(error))
    }).catch(error => console.log(error))
  }

}
