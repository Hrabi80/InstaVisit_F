import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-mobile-overview-louer',
  templateUrl: './mobile-overview-louer.component.html',
  styleUrls: ['./mobile-overview-louer.component.css']
})
export class MobileOverviewLouerComponent implements OnInit {
  @Input() info;
  constructor() { }

  ngOnInit() {
  }

}
