import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoutputService } from '../_services/Loutput.service';
@Component({
  selector: 'app-lmdetails',
  templateUrl: './lmdetails.component.html',
  styleUrls: ['./lmdetails.component.css']
})
export class LmdetailsComponent implements OnInit {

  id:number;
  info:any=[];
  station:any=[];
  parking : Array<any>;
  rows: Array<any>;
  Map: Array<any>;
  Cuisine: Array<any>;
  Eqp :Array<any>;
  Amb : Array<any>;
  Couchage: Array<any>;
  nb :number=0;
  path:string;
  //let values: (string | number)[];
 // parking
  cave :string;
  garden : string ;
  park : string ;
  elevator: string;
  garage: string ;
  //equipement
  toilette :string;
  machine : string;
  internet : string;
  boite : string;
  interphone: string;
  lavelange: string;
  //cuisine
  four: string;
  plaque: string;
  lave: string;
  congelateur: string;
  refri: string;
  microonde: string;
  constructor(private route: ActivatedRoute,
              private _service : LoutputService,    
             ) 
   { }

  ngOnInit() {
    this.id=parseInt(this.route.snapshot.paramMap.get('id'));
    console.log("this id is : ",this.id);

    this._service.getDetails(this.id)
     .subscribe((res)=>{
       console.log("details",res);
       this.info=res;
     });
    
    this._service.getParking(this.id)
     .subscribe((res2:Array<any>)=>{
       console.log("Parking",res2);
       this.parking=res2;
       console.log("HEEEEEEEEEEEEEEEY");
       if(this.parking[0].parking == true){
        this.park="Oui";
          }else{
                this.park="Non";   
          }
          if(this.parking[0].garage == true){
                this.garage="Oui";
          }else{
                this.garage="Non";
          }
          if(this.parking[0].elevator == true){
                this.elevator="Oui";
                
          }else{
                this.elevator="Non"; 
          }
          if(this.parking[0].cave == false){
            this.cave="Non"; 
           }else
          {
            this.cave="Oui"; 
          }
          if(this.parking[0].garden == false){
              this.garden="Non";    
          }else{
              this.garden="Oui";
          }
  console.log("Eyppppppppppp");
     //  return(this.inHouse);
     });
     
    this._service.getStation(this.id)
     .subscribe((res3:Array<any>)=>{
       console.log("station",res3);
       this.rows = res3;
     });

     this._service.getMap(this.id)
     .subscribe((res4:Array<any>)=>{
       console.log("Map",res4);
       this.Map = res4;
     }); 
     

     //ddd
    this._service.getEquip(this.id)
    .subscribe((res5:Array<any>)=>{
      console.log("Equip",res5);
      this.Eqp=res5;
    //  return(this.inHouse);
      if(this.Eqp[0].toilette == true){
          this.toilette="Oui";
      }else{
          this.toilette="Non";
      }
      if(this.Eqp[0].internet == true){
          this.internet="Oui";
      }else{
          this.internet="Non";
      }
      if(this.Eqp[0].interphone == true){
          this.interphone = "Oui";
      }else{
          this.interphone = "Non";
      }
      if(this.Eqp[0].machine == true){
          this.machine = "Oui";
      }else{
          this.machine = "Non";
      }
      if(this.Eqp[0].boite == true){
          this.boite = "Oui";
      }else{
          this.boite = "Non";
      }
      if(this.Eqp[0].lavelange == true){
          this.lavelange = "Oui";
      }else{
          this.lavelange = "Non";
      }
      if(this.Cuisine[0].plaque == true){
          this.plaque = "Oui";
      }else{
          this.plaque = "Non";
      }
      if(this.Cuisine[0].lave == true){
          this.lave = "Oui";
      }else{
          this.lave = "Non";
      }
    });
    
   this._service.getCuisine(this.id)
    .subscribe((res6:Array<any>)=>{
      console.log("Cuisine",res6);
      this.Cuisine = res6;  

      if(this.Cuisine[0].four == true){
          this.four = "Oui";
      }else{
          this.four = "Non";
      }
      if(this.Cuisine[0].refri == true){
          this.refri = "Oui";
      }else{
          this.refri = "Non";
      }
      if(this.Cuisine[0].microonde == true){
          this.microonde = "Oui";
      }else{
          this.microonde = "Non";
      }
      if(this.Cuisine[0].congelateur == true){
          this.congelateur = "Oui";
      }else{
          this.congelateur = "Non";
      }
      if(this.Cuisine[0].lave == true){
          this.lave = "Oui";
      }else{
          this.lave = "Non";
      }
      if(this.Cuisine[0].plaque == true){
        this.plaque = "Oui";
      }else{
        this.plaque ="Non";
      }
    });
    this._service.getAmeubl(this.id)
    .subscribe((res7:Array<any>)=>{
      console.log("Ameubl",res7);
      this.Amb=res7;
    //  return(this.inHouse);
    });
    
   this._service.getCouchage(this.id)
    .subscribe((res8:Array<any>)=>{
      console.log("Couchage",res8);
      this.Couchage = res8;
    });
 //ddd
 this.path=this.Map[0].map;
 console.log("mayMap",this.path);

 
    


  }

  

}
