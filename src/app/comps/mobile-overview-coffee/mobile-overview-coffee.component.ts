import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-overview-coffee',
  templateUrl: './mobile-overview-coffee.component.html',
  styleUrls: ['./mobile-overview-coffee.component.css']
})
export class MobileOverviewCoffeeComponent implements OnInit {
  @Input() info;

  constructor() { }

  ngOnInit() {
  }

}
