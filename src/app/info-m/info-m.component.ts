import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HouseLService } from '../_services/HouseL.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-info-m',
  templateUrl: './info-m.component.html',
  styleUrls: ['./info-m.component.css']
})
export class InfoMComponent implements OnInit {
  id:number;
  form: FormGroup;
  formInfo: FormGroup;
  formMap: FormGroup;
  formEquip: FormGroup;
  formCouchage: FormGroup;
  formCuisine: FormGroup;
  formAmeubl: FormGroup;
  constructor(private route: ActivatedRoute,
    private  _fb: FormBuilder,
    private _service : HouseLService,
    ) 
    { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);


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

    this.formEquip = this._fb.group({
      toilet: new FormControl(''),
      machine: new FormControl(''),
      internet:new FormControl(''),
      boite:new FormControl(''),
      inter:new FormControl(''),
      lave:new FormControl(''),
    });
  
    this.formCouchage = this._fb.group({
      lit: new FormControl(''),
      doublelit: new FormControl(''),
      canape: new FormControl(''),
    });

    this.formAmeubl = this._fb.group({
      canape: new FormControl(''),
      myTable: new FormControl(''),
      chair:new FormControl(''),
      myTV:new FormControl(''),
      desk:new FormControl(''),
      dressing:new FormControl(''),
    });
  
    this.formCuisine = this._fb.group({
      four: new FormControl(''),
      refri: new FormControl(''),
      lave: new FormControl(''),
      conge: new FormControl(''),
      micro: new FormControl(''),
      plaque: new FormControl(''),
    });
  }

  newStation(){
    this._service.AddTransportM(this.id,this.form.value)
    .subscribe(res => {
      console.log(res);
    });
    swal.fire(
      'AJOUTER !',
      'Vous ajoutez maintenant les caractéristiques transport !',
      'success'
    );
  }

  newInfo(){
    this._service.AddInfoM(this.id,this.formInfo.value)
    .subscribe(res=>{
       console.log(res);
    });
    swal.fire(
      'AJOUTER !',
      'Vous ajoutez maintenant les caractéristiques essentielles !',
      'success'
    );
  }

  newMap(){
    this._service.AddMapM(this.id,this.formMap.value)
    .subscribe(res=>{
       console.log(res);
    });
    swal.fire(
      'AJOUTER !',
      'Vous ajoutez maintenant le map et le VT360!',
      'success'
    );
    
  }

  newCuisine(){
    this._service.AddCuisine(this.id,this.formCuisine.value)
    .subscribe(res => {
      console.log(res);
    });
    swal.fire(
      'AJOUTER !',
      'Vous ajoutez maintenant les equipements de la cuisine !',
      'success'
    );
    
  }

  newEquip(){
    this._service.AddEquipment(this.id,this.formEquip.value)
    .subscribe(res=>{
       console.log(res);
    });
    swal.fire(
      'AJOUTER !',
      'Vous ajoutez maintenant les equipement du bien à louer!',
      'success'
    );
  }

  newAmeub(){
    this._service.AddAmeubl(this.id,this.formAmeubl.value)
    .subscribe(res=>{
       console.log(res);
    });
    swal.fire(
      'AJOUTER !',
      'Vous ajoutez maintenant les meubles!',
      'success'
    );
  }

  newCouchage(){
    this._service.AddCouchage(this.id,this.formCouchage.value)
    .subscribe(res=>{
       console.log(res);
    });
    swal.fire(
      'AJOUTER !',
      'Vous ajoutez maintenant les couchages!',
      'success'
    );
  }

}
