import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Gallery, GalleryRef } from '@ngx-gallery/core';
import { VoutputService } from '../_services/Voutput.service';
import { ParamService } from '../_services/param-service.service'
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
//import { GalleryItem, ImageItem } from '@ngx-gallery/core';
import { FilterPipe } from '../filter.pipe';
import { Filter2Pipe } from '../filter2.pipe';
@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css'],
  
})
export class VenteComponent implements OnInit {
  @Input() searchModel;

  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();
  userLoc: any=[];
	//term: string = "";
  term : string = this.route.snapshot.paramMap.get('foo'); 
  FirOutput: any=[];
  constructor(
    private route: ActivatedRoute,
    private ParamService: ParamService,
    private _service: VoutputService,) { }
 
  ngOnInit() {
    const foo = this.route.snapshot.paramMap.get('foo');
    this.ParamService.foo = foo;
    console.log(foo);

    this._service.getData()
        .subscribe((res) => {
            console.log(res);
            this.FirOutput = res;
            for (var i = 0; i < this.FirOutput.length; i++) {
              this.FirOutput[i].refr = "IV00"+this.FirOutput[i].id; // Add "total": 2 to all objects in array
          }
        });
       
    }
    
    formatLabel(value: number) {
      if (value >= 1000) {
        return Math.round(value / 100) + 'dt';
      }
  
      return value;
    }
    formatLabel2(value: number) {
      if (value >= 1000) {
        return Math.round(value / 100) + 'dt';
      }
  
      return value;
    }
    formatLabel3(value: number) {
      if (value >= 1000) {
        return Math.round(value / 100) + 'm²';
      }
  
      return value;
    }
    formatLabel4(value: number) {
      if (value >= 1000) {
        return Math.round(value / 100) + 'm²';
      }
  
      return value;
    }
}  

