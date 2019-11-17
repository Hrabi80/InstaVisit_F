import { Component, OnInit ,Output,EventEmitter, Input } from '@angular/core';
import { LoutputService } from '../_services/Loutput.service';
import { ParamService } from '../_services/param-service.service'
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
@Component({
  selector: 'app-louer',
  templateUrl: './louer.component.html',
  styleUrls: ['./louer.component.css']
})
export class LouerComponent implements OnInit {
  userLoc: any=[];
  
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
  constructor(
    private route: ActivatedRoute,
    private _service: LoutputService,
    private ParamService: ParamService) { }

  ngOnInit() {
    //console.log(this.route.snapshot.paramMap.get['foo']);
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
