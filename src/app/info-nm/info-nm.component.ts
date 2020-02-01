import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HouseLService } from '../_services/HouseL.service';
@Component({
  selector: 'app-info-nm',
  templateUrl: './info-nm.component.html',
  styleUrls: ['./info-nm.component.css']
})
export class InfoNmComponent implements OnInit {
  id:number;
  form: FormGroup;
  formInfo: FormGroup;
  formMap: FormGroup;
  constructor(private route: ActivatedRoute,
              private  _fb: FormBuilder,
              private _service : HouseLService,) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.id)
  

  this.form = this._fb.group({
    taxi: new FormControl(''),
    taxiST: new FormControl(''),
    metro: new FormControl(''),
    metroST: new FormControl(''),
    louage:new FormControl(''),
    louageST:new FormControl(''),
    train:new FormControl(''),
    trainST:new FormControl(''),
    bus:new FormControl(''),
    busST:new FormControl(''),
  });

  this.formInfo = this._fb.group({
    etage: new FormControl(''),
    elevator: new FormControl(''),
    parking:new FormControl(''),
    garage:new FormControl(''),
    garden:new FormControl(''),
    cave:new FormControl(''),
  });

  this.formMap = this._fb.group({
    map: new FormControl(''),
    virtual: new FormControl(''),
  });
  }

  newStation(){
    this._service.AddTransport(this.id,this.form.value)
    .subscribe(res => {
      console.log(res);
    });
  }

  newInfo(){
    this._service.AddInfo(this.id,this.formInfo.value)
    .subscribe(res=>{
       console.log(res);
    });
  }

  newMap(){
    this._service.AddMap(this.id,this.formMap.value)
    .subscribe(res=>{
       console.log(res);
    });
  }

}
