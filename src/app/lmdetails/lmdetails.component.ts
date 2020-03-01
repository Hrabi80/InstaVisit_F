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
  info:any={
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
    }
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
                parking: {
                    title: "Parking",
                    value: "Non"
                },
                garage: {
                    title: "Box/Garage",
                    value: "Oui"
                },
                cave: {
                    title: "Cave",
                    value: "Oui"
                }
                ,
                elevator: {
                    title: "Ascenseur",
                    value: "Oui"
                },
                
                etage: {
                    title: "Étage",
                    value: "1"
                },
                garden: {
                    title: "Gardienne",
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
                },
                interphone: {
                    title: "Interphone",
                    value: "Non",
                    icon: "chrome_reader_mode"
                },
                lavelange: {
                    title: "Lave-linge",
                    value: "Oui",
                    icon: "speaker"
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
                refri: {
                    title: "Réfrigérateur",
                    value: "Non",
                    icon: "kitchen"
                },
                microonde: {
                    title: "Micro-ondes",
                    value: "Non",
                    icon: "local_cafe"
                },
            }
        },
        ameublement: {
            title: "Ameublement",
            more: false,
            fields: {
                canape: {
                    title: "Canapé",
                    value: "_",
                    icon: "weekend"
                },
                mytable: {
                    title: "Table",
                    value: "_",
                    icon: "airline_seat_recline_normal"
                },
                chaise: {
                    title: "Chaise",
                    value: "_",
                    icon: "airline_seat_legroom_normal"
                },
                MyTV: {
                    title: "TV",
                    value: "_",
                    icon: "tv"
                },
                bureau: {
                    title: "Bureau",
                    value: "_",
                    icon: "airline_seat_individual_suite"
                },
                dressing: {
                    title: "Dressing",
                    value: "_",
                    icon: false
                }
            }
        },
        Couchage: {
            title: "Couchage",
            more: false,
            fields:{
                lit: {
                    title: "Lit",
                    value: "_",
                    icon: false
                },
                doublelit:{
                    title: "Lit double",
                    value: "_",
                    icon: false,
                },
                canapelit:{
                    title : "Canpe lit",
                    value: "_",
                    icon : false,
                }
            }
        },
        
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
     });
     
    this._service.getStation(this.id)
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
        for (let item of ['toilette', 'machine', 'interphone', 'internet', 'boite', 'lavelange']) {
            //this.Eqp[0][item] ? this.data.equipment.fields[item] = "Oui" : this.data.equipment.fields[item] = "Non";
            if( this.Eqp[0][item] == true){
                this.data.info.fields[item].value = "Oui";
            }else{
                this.data.info.fields[item].value = "Non";
            }
        }

        
    });
    
   this._service.getCuisine(this.id)
    .subscribe((res6:Array<any>)=>{
      console.log("Cuisine",res6);
      this.Cuisine = res6;  
        for (let item of ['four', 'plaque', 'lave', 'congelateur', 'refri', 'microonde']) {
            //this.Cuisine[0][item] ? this.data.cuisine.fields[item] = "Oui" : this.data.cuisine.fields[item] = "Non";
            if(this.Cuisine[0][item] == true){
                this.data.cuisine.fields[item].value = "Oui";
            }else{
                this.data.cuisine.fields[item].value = "Non";
            }
        }
       
    });
    this._service.getAmeubl(this.id)
    .subscribe((res7:Array<any>)=>{
      console.log("Ameubl",res7);
      this.Amb=res7;
      for (let item of ['canape', 'mytable', 'chaise', 'MyTV', 'bureau', 'dressing']) {
        //this.Cuisine[0][item] ? this.data.cuisine.fields[item] = "Oui" : this.data.cuisine.fields[item] = "Non";
            this.data.ameublement.fields[item].value = this.Amb[0][item].toString();
      }
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
