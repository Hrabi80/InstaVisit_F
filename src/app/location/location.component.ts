import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LocalisationService } from '../_services/Localisation.service';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  form: FormGroup;
  locs: any=[];
  constructor(
    private _service: LocalisationService,
    private  _fb: FormBuilder,
  ) { }

  ngOnInit() {

    this.form = this._fb.group({
      gov: new FormControl(''),
      city: new FormControl(''),
  });
    this._service.getLocs()
      .subscribe(res=>{
        this.locs= res;
        console.log(this.locs);
      })
  }

  AddLoc(){
    this._service.AddLocation(this.form.value)
    .subscribe(res => {
      console.log(res);
    });
  }
  delete(id){
    this._service.deleteLoc(id)
      .subscribe(res => {
      console.log(res);
    });
  }

}
