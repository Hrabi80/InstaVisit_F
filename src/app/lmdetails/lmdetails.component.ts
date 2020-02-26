import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoutputService } from '../_services/Loutput.service';
import {DomSanitizer} from '@angular/platform-browser';
import { Pipe, PipeTransform} from '@angular/core';
@Component({
  selector: 'app-lmdetails',
  templateUrl: './lmdetails.component.html',
  styleUrls: ['./lmdetails.component.css']
})
@Pipe({ name: 'safe' })
export class LmdetailsComponent implements OnInit,PipeTransform {

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

        },
        equipment: {
            title: "Équipement",
            more: "> Afficher l’ensemble des équipements",
            less: "> Cacher l’ensemble des équipements",
            fields: {
                toilette: {
                    title: "Toilettes séparés",
                    value: "Non",
                    icon: "wc"
                },
                lavelange: {
                    title: "Lave-linge",
                    value: "Oui",
                    icon: "speaker"
                },
                interphone: {
                    title: "Interphone",
                    value: "Non",
                    icon: "chrome_reader_mode"
                },
                machine: {
                    title: "Rac. machine",
                    value: "Oui",
                    icon: "highlight"
                },
                internet: {
                    title: "Raccordement internet",
                    value: "Non",
                    icon: "wifi"
                },
                boite: {
                    title: "Boite aux lettres",
                    value: "Non",
                    icon: "drafts"
                }
            }
        },
        cuisine: {
            title: "Cuisine",
            more: false,
            fields: {
                four: {
                    title: "Four",
                    value: "Non",
                    icon: "vignette",
                },
                plaque: {
                    title: "Plaque",
                    value: "Non",
                    icon: "border_all"
                },
                lave: {
                    title: "Lave vaisselle",
                    value: "Non",
                    icon: false
                },
                congelateur: {
                    title: "Congélateur",
                    value: "Non",
                    icon: "ac_unit"
                },
                microonde: {
                    title: "Micro-ondes",
                    value: "Non",
                    icon: "local_cafe"
                },
                refri: {
                    title: "Réfrigérateur",
                    value: "Non",
                    icon: "kitchen"
                }
            }
        },
        ameublement: {
            title: "Ameublement",
            more: false,
            fields: {
                lit: {
                    title: "Lit",
                    value: "1",
                    icon: "airline_seat_individual_suite"
                },
                dressing: {
                    title: "Dressing",
                    value: "Oui",
                    icon: false
                },
                canape: {
                    title: "Canapé",
                    value: "Oui",
                    icon: "weekend"
                },
                chaise: {
                    title: "Chaise",
                    value: "Oui",
                    icon: "airline_seat_legroom_normal"
                },
                table: {
                    title: "Table",
                    value: "Non",
                    icon: "airline_seat_recline_normal"
                },
                tv: {
                    title: "TV",
                    value: "Oui",
                    icon: "tv"
                }
            }
        }
    }
    forceTable = {
        info: false,
        equipement: false,
    }
  constructor(private route: ActivatedRoute,
              private _service : LoutputService,
              public sanitizer: DomSanitizer,    
             ) 
   {this.mapsrc1 = sanitizer.bypassSecurityTrustUrl(this.mapsrc); }
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

    ForceShowTableHideMore(v) {

        this.forceTable[v] = !this.forceTable[v];
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
       console.log("HEEEEEEEEEEEEEEEY");
        for (let item of ['parking', 'garage', 'elevator', 'cave', 'garden']) {
            this.parking[0][item] ? this.data.info.fields[item] = "Oui" : this.data.info.fields[item] = "Non"
        }
        /*
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
     */
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
     }); 
     

     //ddd
    this._service.getEquip(this.id)
    .subscribe((res5:Array<any>)=>{
      console.log("Equip",res5);
      this.Eqp=res5;
    //  return(this.inHouse);
        for (let item of ['toilette', 'internet', 'interphone', 'machine', 'boite', 'lavelange']) {
            this.Eqp[0][item] ? this.data.equipment.fields[item] = "Oui" : this.data.equipment.fields[item] = "Non"
        }

        
        /*
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
      */
    });
    
   this._service.getCuisine(this.id)
    .subscribe((res6:Array<any>)=>{
      console.log("Cuisine",res6);
      this.Cuisine = res6;  
        for (let item of ['four', 'refri', 'microonde', 'congelateur', 'plaque', 'lave']) {
            this.Cuisine[0][item] ? this.data.cuisine.fields[item] = "Oui" : this.data.cuisine.fields[item] = "Non"
        }
        /*
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
      */
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
  transform() {
    return this.sanitizer.bypassSecurityTrustUrl(this.mapsrc);
   }
   
  

}
