import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoutputService } from '../_services/Loutput.service';
import {DomSanitizer} from '@angular/platform-browser';
import { Pipe, PipeTransform} from '@angular/core';
@Component({
  selector: 'app-ldetails',
  templateUrl: './ldetails.component.html',
  styleUrls: ['./ldetails.component.css']
})
@Pipe({ name: 'safe' })
export class LdetailsComponent implements OnInit,PipeTransform {
  id:number;
    info: any = {
        room_nb: 0,
        adress: "Mohammed V",
        city: "Tunis",
        description: "Flatlooker vous propose un charmant appartement T4 non meublé situé au Bourget.",
        description2: "Le hall d'entrée donne accès aux différentes pièces de l'appartement et comporte un placard de rangement avec étagères. ",
        description3: "La cuisine est ouverte et dispose d'une tablette de barre, d'un frigo américain, d'un four, d'un lave- vaisselle, d'une plaque de cuisson en dessous d'une hotte aspirante, ainsi que de plusieurs placards et tiroirs de rangements.",
        description4: "Enfin, la troisième chambre de l'appartement, tout comme le salon, donne accès au balcon. ",
        surface: "500",
        price: "200"
    };
    commute = {
      bus: {
          name: "Bus",
          icon: "directions_bus",
          data: [{
              name: "La Courneuve - 8 Mai 1945",
              distance: "1830",
          }
          ]
      },
      metro: {
          name: "Metro",
          icon: "directions_railway",
          data: [{ 
              name: "La Courneuve - 8 Mai 1945",
              distance: "1830",
          }],
      },
  };
  station:any=[];
  parking : Array<any>=[{},{},{},{}];
  rows: Array<any>=[{},{},{},{}];
  Map: Array<any>;
  nb :number=0;
  path:string;
  // parking
  cave :string;
  garden : string ;
  park : string ;
  elevator: string;
  garage: string ;
  mapsrc;string;
  mapsrc1:any;
  data = {
      info: {
            title: "Informations essentielles",
            more: "> Afficher le détail des informations",
            fields: {
                  parking: {
                      title: "Parking",
                      value: "Non",
                      icon: "fas fa-parking",
                  },
                  garage: {
                      title: "Garage",
                      value: "Oui",
                      icon: "fas fa-warehouse"
                  },
                  cave: {
                      title: "Piscine",
                      value: "Oui",
                      icon: "fa fa-underline"
                  }
                  ,
                  elevator: {
                      title: "Ascenseur",
                      value: "Oui",
                      icon: "fas fa-sort-numeric-up-alt"
                  },
                  
                  etage: {
                      title: "Étage",
                      value: "1",
                      icon: "fas fa-sort-numeric-up-alt"
                  },
                  garden: {
                      title: "Concierge",
                      value: "Non",
                      icon: "fas fa-tree"
                  }   
            }
          
      }
  }
    forceTable = false;
  constructor(private route: ActivatedRoute,
              private _service : LoutputService,
              public sanitizer: DomSanitizer,) { 
                this.mapsrc1 = sanitizer.bypassSecurityTrustUrl(this.mapsrc);
              }


    pairData(field) {
        let d = Object.values(this.data[field].fields)
        let res = []
        for (let i = 0; i < d.length; i += 2) {
            if (d[i+1] == undefined) {
                res.push([d[i]])
                continue
            }
            res.push([d[i], d[i+1]])
        }
        return res;
    }
    ForceShowTableHideMore() {
        console.log("clicked")
        this.forceTable = true;
    }
       // ngOnInit() {}
       // transform() {}
    
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
     for (let item of ['parking','garage','cave','elevator','etage','garden']) {
      if(item == 'etage'){
          this.data.info.fields[item].value = this.parking[0][item];
      }else{
      if( this.parking[0][item] == true){
          this.data.info.fields[item].value = "Oui";
      }else{
          this.data.info.fields[item].value = "Non";
      }}
  }
    }
     );
     
    this._service.getStationNM(this.id)
     .subscribe((res3:Array<any>)=>{
       console.log("station",res3);
       this.rows = res3;
       for (let item of ['metroST','metro']) {
        if(item == 'metroST'){
         console.log("hello", this.rows[0][item].toString(),this.commute.metro.data[0]);
         this.commute.metro.data[0].name = this.rows[0][item].toString(); 
        }
        else if(item == 'metro'){
         this.commute.metro.data[0].distance = this.rows[0][item].toString();
        }
     }
 
     for (let item of ['BusST','Bus']) {
         if(item == 'BusST'){
             
             this.commute.bus.data[0].name = this.rows[0][item].toString();
             
         }else{
             this.commute.bus.data[0].distance =this.rows[0][item].toString();
             
         }
     }
     });

     this._service.getMapNM(this.id)
     .subscribe((res4:Array<any>)=>{
       console.log("Map",res4);
       this.Map = res4;
       this.mapsrc=this.Map[0].map;
       console.log(this.mapsrc);
     }); 
     
     this.path=this.Map[0].map;
     console.log("mayMap",this.path)
    }
  transform() {
    return this.sanitizer.bypassSecurityTrustUrl(this.mapsrc);
   }
  }
  

