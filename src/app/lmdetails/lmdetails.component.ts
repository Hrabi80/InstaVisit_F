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
 // list: any;
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
    });
    
   this._service.getCuisine(this.id)
    .subscribe((res6:Array<any>)=>{
      console.log("Cuisine",res6);
      this.Cuisine = res6;
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
