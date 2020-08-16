import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-overview-salle',
  templateUrl: './mobile-overview-salle.component.html',
  styleUrls: ['./mobile-overview-salle.component.css']
})
export class MobileOverviewSalleComponent implements OnInit {
  @Input() info;
  constructor() { }

  ngOnInit() {
  }

}
