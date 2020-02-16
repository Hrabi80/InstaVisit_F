import { Component, OnInit ,Output,EventEmitter, Input } from '@angular/core';
import { LoutputService } from '../_services/Loutput.service';
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
              private _service: LoutputService,
              private ParamService: ParamService) 
              { }
  

  ngOnInit() {

    const foo = this.route.snapshot.paramMap.get('foo');
    this.ParamService.foo = foo;
    console.log(foo);
  
    this._service.getDataNM()
    .subscribe((res) => {
        console.log(res);
        this.FirOutput = res;
        for (var i = 0; i < this.FirOutput.length; i++) {
          this.FirOutput[i].refr = "IV00"+this.FirOutput[i].id; // Add "total": 2 to all objects in array
      }
    });
  }

}



 

  
 
 


