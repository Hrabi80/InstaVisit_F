import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoutputService } from '../_services/Loutput.service';
@Component({
  selector: 'app-ldetails',
  templateUrl: './ldetails.component.html',
  styleUrls: ['./ldetails.component.css']
})
export class LdetailsComponent implements OnInit {
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

  constructor(private route: ActivatedRoute,
              private _service : LoutputService,) { }

  ngOnInit() {
    this.id=parseInt(this.route.snapshot.paramMap.get('id'));
    console.log("this id is : ",this.id);

    this._service.getDetailsNM(this.id)
     .subscribe((res)=>{
       console.log("details",res);
       this.info=res;
     });
    
    this._service.getParkingNM(this.id)
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
     
    this._service.getStationNM(this.id)
     .subscribe((res3:Array<any>)=>{
       console.log("station",res3);
       this.rows = res3;
     });

     this._service.getMapNM(this.id)
     .subscribe((res4:Array<any>)=>{
       console.log("Map",res4);
       this.Map = res4;
     }); 
     this.path=this.Map[0].map;
     console.log("mayMap",this.path)
  
  }

  

}
