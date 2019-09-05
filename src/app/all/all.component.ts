import { Component, OnInit } from '@angular/core';
import { VoutputService } from '../_services/Voutput.service';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private _service: VoutputService,) { }
  AllOutput: any=[];
  ngOnInit() {
    this._service.getData()
        .subscribe((res) => {
            console.log(res);
            this.AllOutput = res;
            
        });
  }

}
