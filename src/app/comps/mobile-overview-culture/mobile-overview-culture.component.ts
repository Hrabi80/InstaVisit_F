import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-mobile-overview-culture',
  templateUrl: './mobile-overview-culture.component.html',
  styleUrls: ['./mobile-overview-culture.component.css']
})
export class MobileOverviewCultureComponent implements OnInit {
  @Input() info;
  constructor() { }

  ngOnInit() {
  }

}
