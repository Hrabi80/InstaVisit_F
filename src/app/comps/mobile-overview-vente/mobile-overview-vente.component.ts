import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-overview-vente',
  templateUrl: './mobile-overview-vente.component.html',
  styleUrls: ['./mobile-overview-vente.component.css']
})
export class MobileOverviewVenteComponent implements OnInit {
  @Input() info;
  constructor() { }

  ngOnInit() {
  }

}
