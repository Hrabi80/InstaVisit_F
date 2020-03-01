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
        metro: {
            name: "Metro",
            icon: "directions_railway",
            data: [{
                name: "La Courneuve - 8 Mai 1945",
                distance: "1830"
            },
            {
                name: "Fort d'Aubervilliers",
                distance: "2660"
            }
            ]
        },
        bus: {
            name: "Bus",
            icon: "directions_bus",
            data: [{
                name: "Rue de la Station",
                distance: "320",
            }],
        },
        train: {
            name: "Train",
            icon: "directions_subway",
            data: [{
                name: "Rue de la Station",
                distance: "320",
            }],
        }
    };
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
    data = {
        info: {
            title: "Informations essentielles",
            more: "> Afficher le détail des informations",
            fields: {
                cave: {
                    title: "Cave",
                    value: "Oui"
                },
                garden: {
                    title: "Gardienne",
                    value: "Non"
                },
                etage: {
                    title: "Étage",
                    value: "1"
                },
                elevator: {
                    title: "Ascenseur",
                    value: "Oui"
                },
                garage: {
                    title: "Box/Garage",
                    value: "Oui"
                },
                park: {
                    title: "Parking",
                    value: "Non"
                }
            }

        }
    }
    forceTable = false;
  constructor(
              public sanitizer: DomSanitizer,
              private route: ActivatedRoute,
              private _service : VoutputService,    
             ) 
   { 
    this.mapsrc1 = sanitizer.bypassSecurityTrustUrl(this.mapsrc);
      
   }
    pairData(field) {
        let d = Object.values(this.data[field].fields)
        let res = []
        for (let i = 0; i < d.length; i += 2) {
            if (d[i + 1] == undefined) {
                res.push([d[i]])
                continue
            }
            res.push([d[i], d[i + 1]])
        }
        return res;
    }
    ForceShowTableHideMore() {
        console.log("clicked")
        this.forceTable = true;
    }
    ngOnInit() { }
    transform() { }
    /*
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
  */
}
