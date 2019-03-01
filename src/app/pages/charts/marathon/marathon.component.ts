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

  chargingSize: number;

  private loadScripts() {
    this.chargingSize = 0;
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('highcharts').then(data => { this.chargingSize = 33;
      this.dynamicScriptLoader.load('parallel-axes',).then(data => { this.chargingSize = 65;
        this.dynamicScriptLoader.load('spline').then(data => { this.chargingSize = 100;
        }).catch(error => console.log(error))
      }).catch(error => console.log(error))
    }).catch(error => console.log(error))
  }
}
