import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router,NavigationEnd } from '@angular/router';
import { CoffeService } from 'src/app/client/instaCoffee/service/coffe.service';
@Component({
  selector: 'app-last-coffee',
  templateUrl: './last-coffee.component.html',
  styleUrls: ['./last-coffee.component.css']
})
export class LastCoffeeComponent implements OnInit {
  lastcofee: any=[];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service : CoffeService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });

  this._service.getData()
    .subscribe((res)=>{
      this.lastcofee = res;
    });
  }


}


