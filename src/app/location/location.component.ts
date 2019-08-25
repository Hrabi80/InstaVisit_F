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
  constructor(
    private _service: LocalisationService,
    private  _fb: FormBuilder,
  ) { }

  ngOnInit() {

    this.form = this._fb.group({
      gov: new FormControl(''),
      city: new FormControl(''),
  }); }

  AddLoc(){
    this._service.AddLocation(this.form.value)
    .subscribe(res => {
      console.log(res);
    });

  }

}
