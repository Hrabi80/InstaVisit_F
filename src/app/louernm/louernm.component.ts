import { Component, OnInit ,Output,EventEmitter, Input } from '@angular/core';
import { LoutputService } from '../_services/Loutput.service';
import { HouseLService } from '../_services/HouseL.service';
import { ParamService } from '../_services/param-service.service'
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-louernm',
  templateUrl: './louernm.component.html',
  styleUrls: ['./louernm.component.css']
})
export class LouernmComponent implements OnInit {
  userLoc: any=[];
  locs:any=[];

  formatLabel(value: number) {
    return value + 'dt';
  }
  formatLabel2(value: number) {
      return value  + 'dt';
    //return value;
  }
  @Input() searchModel;

  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();
  FirOutput: any=[];

  constructor(private route: ActivatedRoute,
              private _service: HouseLService,
              private ParamService: ParamService) 
              { }
  

  ngOnInit() {

    const foo = this.route.snapshot.paramMap.get('foo');
    this.ParamService.foo = foo;
    console.log(foo);
  
    this._service.getData()
    .subscribe((res) => {
        console.log(res);
        this.FirOutput = res;
    });
  }

}



 

  
 
 


