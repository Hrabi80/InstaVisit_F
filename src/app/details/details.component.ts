import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoutputService } from '../_services/Voutput.service';
import {DomSanitizer} from '@angular/platform-browser';
import { Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
@Pipe({ name: 'safe' })
export class DetailsComponent implements OnInit,PipeTransform {
 
  id:number;
  info:any=[];
  station:any=[];
  parking : Array<any>;
  rows: Array<any>;
  Map: Array<any>;
  nb :number=0;
  path:string;
 // parking
  cave :string;
  garden : string ;
  park : string ;
  elevator: string;
  garage: string ;
  mapsrc:string;
  mapsrc1:any;
  constructor(
              public sanitizer: DomSanitizer,
              private route: ActivatedRoute,
              private _service : VoutputService,    
             ) 
   { 
    this.mapsrc1 = sanitizer.bypassSecurityTrustUrl(this.mapsrc);
      
   }

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
     //  return(this.inHouse);
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
       this.mapsrc=this.Map[0].map;
       console.log(this.mapsrc);
       this.mapsrc1=this.mapsrc+" | safe";
       
     }); 
     this.path=this.Map[0].map;
     console.log("mayMap",this.path);
     
     
  }

  
  transform() {
   return this.sanitizer.bypassSecurityTrustUrl(this.mapsrc);
  }

}
