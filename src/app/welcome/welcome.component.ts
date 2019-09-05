import { Component, OnInit } from '@angular/core';
import { VoutputService } from '../_services/Voutput.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  FirOutput: any=[];
  constructor(private _service: VoutputService,) { }

  ngOnInit() {
    this._service.getData()
        .subscribe((res) => {
            console.log(res);
            this.FirOutput = res;
            
        });
  }

}
