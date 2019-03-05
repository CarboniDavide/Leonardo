import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  olympic() {
    this.router.navigateByUrl('/chart/olympic');
  }

  marathon() {
    this.router.navigateByUrl('/chart/marathon');
  }

  population() {
    this.router.navigateByUrl('/chart/population');
  }

  mortality() {
    this.router.navigateByUrl('/chart/mortality');
  }

}
