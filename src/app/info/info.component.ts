import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HouseVService } from '../_services/HouseV.service';
import { UpdateService} from '../_services/update.service'
import swal from 'sweetalert2';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  id:number;
  clicked1: boolean;
  clickedTr: boolean;
  clickedMap: boolean;
  form: FormGroup;
  formInfo: FormGroup;
  formMap: FormGroup;
  constructor(private route: ActivatedRoute,
              private  _fb: FormBuilder,
              private _service : HouseVService,
              private _service2 : UpdateService,
              private router: Router
              ) 
              { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    
    this._service2.getParkingV(this.id)
    .subscribe((res)=>{
        Object.keys(res).length === 0 ? this.clicked1=false: this.clicked1=true;
        console.log(this.clicked1, "let's see here");
        this._service2.getTransport(this.id)
        .subscribe((res)=>{
            Object.keys(res).length === 0 ? this.clickedTr=false: this.clickedTr=true;
            this._service2.getMapV(this.id)
            .subscribe((res)=>{
                Object.keys(res).length === 0 ? this.clickedMap=false: this.clickedMap=true;
                this.startercheck();
            });
          });
    });

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

  startercheck(){
    if( this.clicked1 && this.clickedTr && this.clickedMap){
        swal.fire(
          'C est deja fait !',
          'Vous avez deja ajouter tout les caractéristiques à ce lougement. Vous pouvez fair des mis à jour dans la page update!',
          'success', 
        );
          setTimeout(()=>{this.router.navigateByUrl('dashboard/HL_LISTE');},3000);
        
      };
  }

  newStation(){
    this._service.AddTransport(this.id,this.form.value)
    .subscribe(res => {
      console.log(res);
      swal.fire(
        'AJOUTER !',
        'Vous ajoutez maintenant les caractéristiques transport !',
        'success'
      );
    });
    this.clickedTr=true;
  }

  newInfo(){
    this._service.AddInfo(this.id,this.formInfo.value)
    .subscribe(res=>{
       console.log(res);
       swal.fire(
        'AJOUTER !',
        'Vous ajoutez maintenant les caractéristiques essentielles !',
        'success'
      );
    });
    this.clicked1=true;
  }

  newMap(){
    this._service.AddMap(this.id,this.formMap.value)
    .subscribe(res=>{
       console.log(res);
       swal.fire(
        'AJOUTER !',
        'Vous ajoutez maintenant le Map et le VT360 !',
        'success'
      );
    });
    this.clickedMap=true;
  }

}  
