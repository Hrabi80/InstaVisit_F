import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-overview-resto',
  templateUrl: './mobile-overview-resto.component.html',
  styleUrls: ['./mobile-overview-resto.component.css']
})
export class MobileOverviewRestoComponent implements OnInit {
  @Input() info;
  constructor() { }

  ngOnInit() {
  }

}
