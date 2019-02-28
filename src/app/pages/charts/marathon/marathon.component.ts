import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';

@Component({
  selector: 'app-marathon',
  templateUrl: './marathon.component.html',
  styleUrls: ['./marathon.component.scss']
})
export class MarathonComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    this.loadScripts();
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('highcharts').then(data => {
      this.dynamicScriptLoader.load('parallel-axes',).then(data => {
        this.dynamicScriptLoader.load('spline').then(data => {
        }).catch(error => console.log(error))
      }).catch(error => console.log(error))
    }).catch(error => console.log(error))
  }
}
