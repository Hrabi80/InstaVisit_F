import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Gallery, GalleryRef } from '@ngx-gallery/core';
import { VoutputService } from '../_services/Voutput.service';
//import { GalleryItem, ImageItem } from '@ngx-gallery/core';
import { FilterPipe } from '../filter.pipe';
@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css'],
  
})
export class VenteComponent implements OnInit {
  @Input() searchModel;

  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();
	//term: string = "";
  
  FirOutput: any=[];
  constructor(

    private _service: VoutputService,) { }
 
  ngOnInit() {
    this._service.getData()
        .subscribe((res) => {
            console.log(res);
            this.FirOutput = res;
        });
       
      
    }
 


    


 
}  

