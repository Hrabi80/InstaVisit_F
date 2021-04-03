import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ClientService } from '../../../salle/service/client.service';
import { ParamService } from '../../../../_services/param-service.service'

@Component({
  selector: 'app-all-coffee',
  templateUrl: './all-coffee.component.html',
  styleUrls: ['./all-coffee.component.css']
})
export class AllCoffeeComponent implements OnInit {

 
  opt:string;
  FirOutput: any=[];
  formatLabel(value: number) {
    return value + 'dt';
  }
  formatLabel2(value: number) {
      return value  + 'dt';
  }
  @Input() searchModel;

  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();

  pageOfItems: any=[];
  term : string = this.route.snapshot.paramMap.get('foo');

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private _service: ClientService,
    private ParamService: ParamService
  ) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
    const foo = this.route.snapshot.paramMap.get('foo');
    this.ParamService.foo = foo;
    console.log(foo);

    this._service.getData()
    .subscribe((res) => {
        console.log(res);
        this.FirOutput = res;
        for (var i = 0; i < this.FirOutput.length; i++) {
          this.FirOutput[i].refr = "INS000"+this.FirOutput[i].id; 
      }
    });
  }

  onChangePage(pageOfItems: any=[]) {
    this.pageOfItems = pageOfItems;
  }
  selectOption(opt: string) {
    console.log("opitonII",opt);
    this.opt=opt;
    console.log("opiton",this.opt);
  }


}
