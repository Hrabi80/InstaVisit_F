import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router,NavigationEnd } from '@angular/router';
import { CultureService } from 'src/app/client/instaCulture/service/culture.service';

@Component({
  selector: 'app-last-culture',
  templateUrl: './last-culture.component.html',
  styleUrls: ['./last-culture.component.css']
})
export class LastCultureComponent implements OnInit {
  lastCulture: any=[];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service : CultureService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });

  this._service.getData()
    .subscribe((res)=>{
      this.lastCulture = res;
    });
  }

}
