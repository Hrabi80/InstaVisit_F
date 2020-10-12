import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { VoutputService } from '../../../_services/Voutput.service';
import { ParamService } from '../../../_services/param-service.service'
import { ActivatedRoute, ParamMap,Router,NavigationEnd} from '@angular/router';
import { FilterPipe } from '../../../filter.pipe';
import { Filter2Pipe } from '../../../filter2.pipe';


@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css'],
})
export class VenteComponent implements OnInit {
  @Input() searchModel;

  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();


  userLoc: any=[];

  pageOfItems: any=[];

  term : string = this.route.snapshot.paramMap.get('foo'); 
  FirOutput: any=[];
  constructor(private route: ActivatedRoute,
              private router : Router,
              private ParamService: ParamService,
              private _service: VoutputService) { }
 
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
    const foo = this.route.snapshot.paramMap.get('foo');
    this.ParamService.foo = foo;

    this._service.getData()
        .subscribe((res) => {
            console.log(res);
            this.FirOutput = res;
            for (var i = 0; i < this.FirOutput.length; i++) {
              this.FirOutput[i].refr = "INV000"+this.FirOutput[i].id;
          }
        });
    }

  onChangePage(pageOfItems: any=[]) {
    this.pageOfItems = pageOfItems;
  }
  
    formatLabel(value: number) {
        return value + "dt";
      }
    formatLabel2(value: number) {
      return value +"dt";
    }
    formatLabel3(value: number) {
      return value +"m²";
    }
    formatLabel4(value: number) {
      return value + "m²";
    }
}  

