import { Component, OnInit ,Output,EventEmitter, Input } from '@angular/core';
import { LoutputService } from '../../../_services/Loutput.service';
import { HouseLService } from '../../../_services/HouseL.service';
import { ParamService } from '../../../_services/param-service.service'
import { ActivatedRoute, ParamMap,Router,NavigationEnd } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
import { FilterPipe } from '../../../filter.pipe';

@Component({
  selector: 'app-louer',
  templateUrl: './louer.component.html',
  styleUrls: ['./louer.component.css']
})
export class LouerComponent implements OnInit {
  userLoc: any=[];
  locs:any=[];
  opt:string;
  
  formatLabel(value: number) {
    return value + 'dt';
  }
  formatLabel2(value: number) {
      return value  + 'dt';
  }
  @Input() searchModel;

  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();
  FirOutput: any=[];
  FirOutput2 : any=[];
  pageOfItems: any=[];
  term : string = this.route.snapshot.paramMap.get('foo');
  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private _service: LoutputService,
    private _Nservice: HouseLService,
    private ParamService: ParamService) { }

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
        setTimeout(()=>{this.FirOutput = res;},2600);
       // this.FirOutput = res;
        //this.FirOutput.append("IV00"+this.FirOutput.id);
        for (var i = 0; i < this.FirOutput.length; i++) {
          this.FirOutput[i].refr = "INLM000"+this.FirOutput[i].id; // Add "total": 2 to all objects in array
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
