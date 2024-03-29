import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoutputService } from '../../../_services/Loutput.service';
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
  Couchage1: Array<any>;
  nb :number=0;
  path:string;

 // parking
  cave :string;
  garden : string ;
  park : string ;
  elevator: string;
  garage: string ;

  toilette :string;
  machine : string;
  internet : string;
  boite : string;
  interphone: string;
  lavelange: string;

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
                    value: "Non",
                    class: "fas fa-parking",
                    icon: " "
                },
                garage: {
                    title: "Garage",
                    value: "Oui",
                    class: "fas fa-warehouse",
                    icon: " "
                },
                cave: {
                    title: "Piscine",
                    value: "Oui",
                    class: "fas fa-swimming-pool",
                    icon: " "
                }
                ,
                elevator: {
                    title: "Ascenseur",
                    value: "Oui",
                    class: "fas fa-sort-numeric-up-alt",
                    icon: " "
                },
                
                etage: {
                    title: "Étage",
                    value: "1",
                    class: "fas fa-sort-numeric-up-alt",
                    icon: " "
                },
                garden: {
                    title: "Concierge",
                    value: "Non",
                    class: "fas fa-concierge-bell",
                    icon: " "
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
                    value: "_",
                    icon: "wc",
                    class: "material-icons"
                },
                machine: {
                    title: "Climatiseur",
                    value: "_",
                    icon: "ac_unit",
                    class: "material-icons"
                },
                internet: {
                    title: "Raccordement internet",
                    value: "_",
                    icon: "wifi",
                    class: "material-icons"
                },
                boite: {
                    title: "Boite aux lettres",
                    value: "_",
                    icon: "drafts",
                    class: "material-icons"
                },
                interphone: {
                    title: "Interphone",
                    value: "_",
                    icon: "chrome_reader_mode",
                    class: "material-icons"
                },
                lavelange: {
                    title: "Chauffe-eau",
                    value: "_",
                    icon: " ",
                    class: "fa fa-fire"
                }
                
            }
        },
        cuisine: {
            title: "Cuisine",
            more: false,
            fields: {
                four: {
                    title: "Four",
                    value: "_",
                    icon: "vignette",
                    class: "material-icons"
                },
                plaque: {
                    title: "Plaque",
                    value: "_",
                    icon: "border_all",
                    class: "material-icons"
                },
                lave: {
                    title: "Lave vaisselle",
                    value: "_",
                    icon: "local_laundry_service",
                    class: "material-icons"
                },
                congelateur: {
                    title: "Lave-linge",
                    value: "_",
                    icon: "speaker",
                    class: "material-icons"
                },
                refri: {
                    title: "Réfrigérateur",
                    value: "_",
                    icon: "kitchen",
                    class: "material-icons"
                },
                microonde: {
                    title: "Micro-ondes",
                    value: "_",
                    icon: "local_cafe",
                    class: "material-icons"
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
                    icon: "weekend",
                    class: "material-icons"
                },
                mytable: {
                    title: "Table",
                    value: "_",
                    icon: "airline_seat_recline_normal",
                    class: "material-icons"
                },
                chaise: {
                    title: "Chaise",
                    value: "_",
                    icon: "event_seat",
                    class: "material-icons"
                },
                MyTV: {
                    title: "TV",
                    value: "_",
                    icon: "tv",
                    class: "material-icons"
                },
                bureau: {
                    title: "Bureau",
                    value: '_',
                    icon: " ",
                    class: "fas fa-desktop"
                },
                dressing: {
                    title: "Dressing",
                    value: "_",
                    icon: " ",
                    class:"fas fa-tshirt"
                }
            }
        },
        Couchage: {
            title: "Couchage",
            more: false,
            fields:{
                lit: {
                    title: "Lit",
                    value: "hotel",
                    icon: "hotel",
                    class: "material-icons"
                },
                doublelit:{
                    title: "Lit double",
                    value: "_",
                    icon: " ",
                    class: "fab fa-slideshare"
                },
                canapelit:{
                    title : "Canapé lit",
                    value: "_",
                    icon : "weekend",
                    class: "material-icons"
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

    this._service.getDetails(this.id)
     .subscribe((res)=>{
       this.info=res;
     });
    
    this._service.getParking(this.id)
     .subscribe((res2:Array<any>)=>{
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
       this.Map = res4;
       this.mapsrc=this.Map[0].map;
       console.log(this.mapsrc);
     }); 
     

    this._service.getEquip(this.id)
    .subscribe((res5:Array<any>)=>{
      this.Eqp=res5;
        for (let item of ['toilette', 'machine', 'internet', 'boite', 'interphone', 'lavelange']) {
            //this.Eqp[0][item] ? this.data.equipment.fields[item] = "Oui" : this.data.equipment.fields[item] = "Non";
            if( this.Eqp[0][item] == true){
                this.data.equipment.fields[item].value = "Oui";
            }else{
                this.data.equipment.fields[item].value = "Non";
            }
        }

        
    });
    
   this._service.getCuisine(this.id)
    .subscribe((res6:Array<any>)=>{
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
      this.Amb=res7;
      for (let item of ['canape', 'mytable', 'chaise', 'MyTV', 'bureau', 'dressing']) {
            this.data.ameublement.fields[item].value = this.Amb[0][item].toString();
      }
    });
    
   this._service.getCouchage(this.id)
    .subscribe((res8:Array<any>)=>{
      this.Couchage1 = res8;
      for (let item of ['lit', 'doublelit', 'canapelit']) {
            this.data.Couchage.fields[item].value = this.Couchage1[0][item].toString();
      }
    });

 this.path=this.Map[0].map;


 
    


  }
  transform() {
    return this.sanitizer.bypassSecurityTrustUrl(this.mapsrc);
   }
   
  

}
