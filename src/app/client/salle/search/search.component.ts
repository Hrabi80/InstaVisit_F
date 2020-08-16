import { Component, OnInit ,Output,EventEmitter, Input } from '@angular/core';
import { ClientService } from '../service/client.service';
import { HouseLService } from '../../../_services/HouseL.service';
import { ParamService } from '../../../_services/param-service.service'
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
import { FilterPipe } from '../../../filter.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
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
    private route: ActivatedRoute,
    private _service: ClientService,
    private ParamService: ParamService
  ) { }

  ngOnInit() {

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
