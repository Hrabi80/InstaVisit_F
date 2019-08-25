import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { LocalisationService } from '../_services/Localisation.service';
declare var $:any;
@Component({
  selector: 'app-new-hl',
  templateUrl: './new-hl.component.html',
  styleUrls: ['./new-hl.component.css']
})
export class NewHLComponent implements OnInit {
  form: FormGroup;
  locs:any=[];
  constructor(private  _fb: FormBuilder,
              private router: Router,
              private service2: LocalisationService,
             ) { }

  
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
      description: new FormControl(''),
      Tx:new FormControl(''),
      loc:new FormControl(''),
      price:new FormControl(''),
      surface:new FormControl(''),
      isMeuble:new FormControl(''),
    });
  
    }
  

}
