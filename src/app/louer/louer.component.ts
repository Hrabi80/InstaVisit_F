import { Component, OnInit ,Output,EventEmitter, Input } from '@angular/core';
import { VoutputService } from '../_services/Voutput.service';
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
    if (value >= 1000) {
      return Math.round(value / 1000) + 'dt';
    }

    return value;
  }
  formatLabel2(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'dt';
    }

    return value;
  }
  @Input() searchModel;

  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();
  FirOutput: any=[];
  constructor(
    private route: ActivatedRoute,
    private _service: VoutputService,
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
