import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AdminService } from '../_services/admin.service';

import swal from 'sweetalert2';
import { ClientService } from '../_services/client.service';

@Component({
  selector: 'app-resto-info',
  templateUrl: './resto-info.component.html',
  styleUrls: ['./resto-info.component.css']
})
export class RestoInfoComponent implements OnInit {
  id:number;
  errorMessage: string;

  clickedTr: boolean;
  clickedMap: boolean;
  clickedTeck: boolean;
  
  parking:any=[];
  Map:any=[];
  Tran:any=[];

  formTran: FormGroup;
  formInfo: FormGroup;
  formMap: FormGroup;
  constructor(private route: ActivatedRoute,
              private  _fb: FormBuilder,
              private router: Router,
              private _service: AdminService,
              private _service2 : ClientService) { }

  async ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this._service2.getFiche(this.id)
    .subscribe((res)=>{
        Object.keys(res).length === 0 ? this.clickedTeck =false: this.clickedTeck=true;
        console.log(this.clickedTeck, "let's see here fiche");
        this._service2.getStation(this.id)
        .subscribe((res)=>{
            Object.keys(res).length === 0 ? this.clickedTr=false: this.clickedTr=true;
            this._service2.getMap(this.id)
            .subscribe((res)=>{
                Object.keys(res).length === 0 ? this.clickedMap=false: this.clickedMap=true;
                this.startercheck();
                    });
                });
              });
                        
            
    this.formTran = this._fb.group({
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
      toilette: new FormControl(''),
      bar: new FormControl(''),
      parking:new FormControl(''),
      horaire:new FormControl('')
    });
  
    this.formMap = this._fb.group({
      map: new FormControl(''),
      virtual: new FormControl(''),
    });

            
  }

  startercheck(){
    if( this.clickedTr && this.clickedTeck && this.clickedMap){
      
        swal.fire(
          'C est deja fait !',
          'Vous avez deja ajouter tout les caractéristiques à cette insta. Vous pouvez fair des mis à jour dans la page update!',
          'success', 
        );
          setTimeout(()=>{this.router.navigateByUrl('dashboard/CULTURE_LISTE');},3000);
        
      };
   }

   // ADD METHODS : 
  newStation(){
    this._service.AddTransport(this.id,this.formTran.value)
    .subscribe(res => {
      console.log(res);
      swal.fire(
        'AJOUTER !',
        'Vous ajoutez maintenant les caractéristiques transport !',
        'success'
      );
    });
    
    this.clickedTeck=true;
  }

  newMap(){
    this._service.AddMap(this.id,this.formMap.value)
    .subscribe(res=>{
       console.log(res);
       swal.fire(
        'AJOUTER !',
        'Vous ajoutez maintenant le map et le VT360!',
        'success'
      );
    });
    this.clickedMap=true;
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
    
    this.clickedTeck=true;
  }
  

}
