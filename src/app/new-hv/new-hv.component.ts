import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { HouseVService } from '../_services/HouseV.service';
import { LocalisationService } from '../_services/Localisation.service';
declare var $:any;

@Component({
  selector: 'app-new-hv',
  templateUrl: './new-hv.component.html',
  styleUrls: ['./new-hv.component.css']
})
export class NewHVComponent implements OnInit {
  form: FormGroup;
  locs:any=[];
  constructor(private  _fb: FormBuilder,
              private router: Router,
              private _service: HouseVService,
              private service2: LocalisationService,)
               { }

  ngOnInit() {

    this.service2.getLocs()
    .subscribe((response) => {
        console.log(response);
        this.locs = response;
        console.log(this.locs.City);
        setTimeout(() => {
          $('select').formSelect();
        }, 100)
    })
    $('.datepicker').datepicker();

    this.form = this._fb.group({
      adress: new FormControl(''),
      city: new FormControl(''),
      description: new FormControl(''),
      Tx:new FormControl(''),
      loc:new FormControl(''),
      price:new FormControl(''),
      surface:new FormControl(''),
    });
  }

  newHV(){
    this._service.AddHV(this.form.value)
    .subscribe(res => {
      console.log(res);
    });
  }

}

