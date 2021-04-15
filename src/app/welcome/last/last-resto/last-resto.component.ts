import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router,NavigationEnd } from '@angular/router';
import { RestoService } from 'src/app/client/instaResto/service/resto.service';


@Component({
  selector: 'app-last-resto',
  templateUrl: './last-resto.component.html',
  styleUrls: ['./last-resto.component.css']
})
export class LastRestoComponent implements OnInit {

  lastResto: any=[];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service : RestoService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });

  this._service.getData()
    .subscribe((res)=>{
      this.lastResto = res;
    });
  }
  

}
