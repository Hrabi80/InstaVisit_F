import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/dashboard/salle/_services/admin.service';
import { ClientService } from 'src/app/dashboard/salle/_services/client.service';
import { CoffeeService } from 'src/app/services/CoffeeService/coffee.service';
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
      private _service2:ClientService,
      private coffeeService:CoffeeService
  ) { }

  async ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
   
   
        this.coffeeService.GetTransport(this.id)
        .subscribe((res)=>{
          console.log( Object.keys(res).length)
            Object.keys(res).length === 0 ? this.clickedTr=false: this.clickedTr=true;
            this.startercheck();
            /* this._service2.getMap(this.id)
            .subscribe((res)=>{
                Object.keys(res).length === 0 ? this.clickedMap=false: this.clickedMap=true;
                
                                   
                                }); */
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
    if( this.clickedTr){
      
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
    this.coffeeService.addTransport(this.formTran.value,this.id)
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
/* 
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
 */


}
