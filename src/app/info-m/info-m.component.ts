import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HouseLService } from '../_services/HouseL.service';
import { UpdatelService } from '../_services/updatel.service'; 
import swal from 'sweetalert2';

@Component({
  selector: 'app-info-m',
  templateUrl: './info-m.component.html',
  styleUrls: ['./info-m.component.css']
})
export class InfoMComponent implements OnInit {
  id:number;
  errorMessage: string;

  clicked1: boolean;
  clickedTr: boolean;
  clickedMap: boolean;
  clickedEqp: boolean;
  clickedAmm: boolean;
  clickedCui: boolean;
  clickedCou: boolean;

  parking:any=[];
  Map:any=[];
  Tran:any=[];
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
              private _service2 : UpdatelService,
              private router: Router,
              ) 
    { }

 async ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);

    this._service2.getParkingL(this.id)
    .subscribe((res)=>{
        Object.keys(res).length === 0 ? this.clicked1=false: this.clicked1=true;
        console.log(this.clicked1, "let's see here");
        this._service2.getTransportL(this.id)
        .subscribe((res)=>{
            Object.keys(res).length === 0 ? this.clickedTr=false: this.clickedTr=true;
            this._service2.getMapL(this.id)
            .subscribe((res)=>{
                Object.keys(res).length === 0 ? this.clickedMap=false: this.clickedMap=true;
                this._service2.getAmm(this.id)
                .subscribe((res)=>{
                     Object.keys(res).length === 0 ? this.clickedAmm=false: this.clickedAmm=true;
                     this._service2.getCouchage(this.id)
                      .subscribe((res)=>{
                          Object.keys(res).length === 0 ? this.clickedCou=false: this.clickedCou=true;
                          this._service2.getCuisine(this.id)
                          .subscribe((res)=>{
                                Object.keys(res).length === 0 ? this.clickedCui=false: this.clickedCui=true;
                                this._service2.getEquip(this.id)
                                .subscribe((res)=>{
                                      Object.keys(res).length === 0 ? this.clickedEqp=false: this.clickedEqp=true;
                                      this.startercheck();
                                });
                          });
                      });
                });
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



  
   startercheck(){
    if( this.clicked1 && this.clickedAmm && this.clickedCou && this.clickedTr && this.clickedMap
      && this.clickedEqp && this.clickedCui){
      
        swal.fire(
          'C est deja fait !',
          'Vous avez deja ajouter tout les caractéristiques à ce lougement. Vous pouvez fair des mis à jour dans la page update!',
          'success', 
        );
          setTimeout(()=>{this.router.navigateByUrl('dashboard/HLM_LISTE');},3000);
        
      };
  }

  newStation(){
    this._service.AddTransportM(this.id,this.form.value)
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
    this._service.AddInfoM(this.id,this.formInfo.value)
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
    this._service.AddMapM(this.id,this.formMap.value)
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

  newCuisine(){
    this._service.AddCuisine(this.id,this.formCuisine.value)
    .subscribe(res => {
      console.log(res);
      swal.fire(
        'AJOUTER !',
        'Vous ajoutez maintenant les equipements de la cuisine !',
        'success'
      );
    });
    
    this.clickedCui=true;
  }

  newEquip(){
    this._service.AddEquipment(this.id,this.formEquip.value)
    .subscribe(res=>{
       console.log(res);
       swal.fire(
        'AJOUTER !',
        'Vous ajoutez maintenant les equipement du bien à louer!',
        'success'
      );
    });
    this.clickedEqp=true;
  }

  newAmeub(){
    this._service.AddAmeubl(this.id,this.formAmeubl.value)
    .subscribe(res=>{
       console.log(res);
       swal.fire(
        'AJOUTER !',
        'Vous ajoutez maintenant les meubles!',
        'success'
      );
    });
    
    this.clickedAmm=true;
  }

  newCouchage(){
    this._service.AddCouchage(this.id,this.formCouchage.value)
    .subscribe(res=>{
       console.log(res);
       swal.fire(
        'AJOUTER !',
        'Vous ajoutez maintenant les couchages!',
        'success'
      );
    });
    this.clickedCou=true;
  }

}
