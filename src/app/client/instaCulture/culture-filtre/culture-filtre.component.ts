import { Component, OnInit ,Output,EventEmitter, Input } from '@angular/core';
//import { ClientService } from '../service/client.service';
import { HouseLService } from '../../../_services/HouseL.service';
import { ParamService } from '../../../_services/param-service.service'
import { ActivatedRoute, ParamMap,Router,NavigationEnd } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
import { FilterPipe } from '../../../filter.pipe';
import { CultureService } from '../service/culture.service';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-culture-filtre',
  templateUrl: './culture-filtre.component.html',
  styleUrls: ['./culture-filtre.component.css']
})
export class CultureFiltreComponent implements OnInit {
  opt:string;
  FirOutput: any=[];

  @Input() searchModel;

  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();

  pageOfItems: any=[];
  term : string = this.route.snapshot.paramMap.get('foo');

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private _service : CultureService,
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
          this.FirOutput[i].refr = "INR00"+this.FirOutput[i].id; 
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
