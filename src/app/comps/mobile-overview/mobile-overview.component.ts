import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-overview',
  templateUrl: './mobile-overview.component.html',
  styleUrls: ['./mobile-overview.component.css']
})
export class MobileOverviewComponent implements OnInit {
    @Input() info;
  constructor() { }

  ngOnInit() {
  }

}
