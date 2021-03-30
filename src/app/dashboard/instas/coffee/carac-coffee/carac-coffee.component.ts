import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/dashboard/salle/_services/admin.service';
import { ClientService } from 'src/app/dashboard/salle/_services/client.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-carac-coffee',
  templateUrl: './carac-coffee.component.html',
  styleUrls: ['./carac-coffee.component.css']
})
export class CaracCoffeeComponent implements OnInit {

  id:number;
  errorMessage: string;

  clickedTr: boolean;
  clickedMap: boolean;
  clickedEqp: boolean;
  clickedMat: boolean;
  clickedCui: boolean;
  clickedTeck: boolean;

  parking:any=[];
  Map:any=[];
  Tran:any=[];

  formTran: FormGroup;
  formInfo: FormGroup;
  formMap: FormGroup;
  formEquip: FormGroup;
  formCuisine: FormGroup;
  formMat: FormGroup;
  constructor(
      private route: ActivatedRoute,
      private  _fb: FormBuilder,
      private router: Router,
      private _service: AdminService,
      private _service2:ClientService
  ) { }

  async ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this._service2.getFiche(this.id)
    .subscribe((res)=>{
        Object.keys(res).length === 0 ? this.clickedTeck =false: this.clickedTeck=true;
        console.log(this.clickedTeck, "let's see here");
        this._service2.getStation(this.id)
        .subscribe((res)=>{
            Object.keys(res).length === 0 ? this.clickedTr=false: this.clickedTr=true;
            this._service2.getMap(this.id)
            .subscribe((res)=>{
                Object.keys(res).length === 0 ? this.clickedMap=false: this.clickedMap=true;
                this._service2.getMat(this.id)
                .subscribe((res)=>{
                     Object.keys(res).length === 0 ? this.clickedMat=false: this.clickedMat=true;
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

    this.formEquip = this._fb.group({
      water: new FormControl(''),
      ext: new FormControl(''),
      telp:new FormControl(''),
      electrique:new FormControl('')
    });
  
    this.formMat = this._fb.group({
      tables: new FormControl(''),
      chair: new FormControl(''),
      sono: new FormControl(''),
    });

    this.formCuisine = this._fb.group({
      four: new FormControl(''),
      bac: new FormControl(''),
      frigo: new FormControl(''),
      plaque: new FormControl('')
    });      
  }

  startercheck(){
    if( this.clickedTr && this.clickedMat  && this.clickedTeck && this.clickedMap
      && this.clickedEqp && this.clickedCui){
      
        swal.fire(
          'C est deja fait !',
          'Vous avez deja ajouter tout les caractéristiques à cette salle. Vous pouvez fair des mis à jour dans la page update!',
          'success', 
        );
          setTimeout(()=>{this.router.navigateByUrl('dashboard/coffee');},3000);
        
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

  newMat(){
    this._service.AddMat(this.id,this.formMat.value)
    .subscribe(res=>{
       console.log(res);
       swal.fire(
        'AJOUTER !',
        'Vous ajoutez maintenant les meubles!',
        'success'
      );
    });
    this.clickedMap=true;
  }


}
