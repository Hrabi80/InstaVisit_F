import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../service/client.service';
import {DomSanitizer} from '@angular/platform-browser';
import { Pipe, PipeTransform} from '@angular/core';
@Component({
  selector: 'app-salledetail',
  templateUrl: './salledetail.component.html',
  styleUrls: ['./salledetail.component.css']
})
@Pipe({ name: 'safe' })
export class SalledetailComponent implements OnInit,PipeTransform {
  mapsrc1:any;
  id:number;
  mapsrc:string;
  forceTable = {
    info: false,
    equipement: false,
}
  constructor(
    private route: ActivatedRoute,
    private _service : ClientService,
    public sanitizer: DomSanitizer){ 
    this.mapsrc1 = sanitizer.bypassSecurityTrustUrl(this.mapsrc);
  }
  info:any={
    adress: "Mohammed V",
    city: "Tunis",
    descrip: "Flatlooker vous propose un charmant appartement T4 non meublé situé au Bourget.",
    descript2: "Le hall d'entrée donne accès aux différentes pièces de l'appartement et comporte un placard de rangement avec étagères. ",
      descrip3: "La cuisine est ouverte et dispose d'une tablette de barre, d'un frigo américain, d'un four, d'un lave- vaisselle, d'une plaque de cuisson en dessous d'une hotte aspirante, ainsi que de plusieurs placards et tiroirs de rangements.",
      surface: "500",
      price: "200",
      tel:"22866412",
      responsable:"__",
      places: "200"
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
            horaire: {
                title: "Disponibilité",
                value: "_",
                class: "material-icons",
                icon: "access_time"
            },
            bar: {
                title: "Bar",
                value: "Oui",
                class: "material-icons",
                icon: "local_bar"
            }
            ,
            toilette: {
                title: "Toilette",
                value: "Oui",
                class: "material-icons",
                icon: "wc"
            }
        }

    },
    equipment: {
        title: "Équipement",
        more: "> Afficher l’ensemble des équipements",
        less: "> Cacher l’ensemble des équipements",
        fields: {
            water: {
                title: "Alimentation eau",
                value: "_",
                icon: "invert_colors",
                class: "material-icons"
            },
            ext: {
                title: "Climatisation",
                value: "_",
                icon: "ac_unit",
                class: "material-icons"
            },
            telp: {
                title: "Telephone",
                value: "_",
                icon: "local_phone",
                class: "material-icons"
            },
            electrique: {
                title: "alimentation électrique",
                value: "_",
                icon: "settings_input_component",
                class: "material-icons"
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
            frigo: {
                title: "Frigo",
                value: "_",
                icon: "kitchen",
                class: "material-icons"
            },
            bac: {
                title: "Bac evier",
                value: "_",
                icon: "view_module",
                class: "material-icons"
            },
        }
    },
    materiel: {
        title: "Materiels",
        more: false,
        fields: {
            tables: {
                title: "Tables",
                value: "_",
                icon: "airline_seat_recline_normal",
                class: "material-icons"
            },
            chair: {
                title: "Chaise",
                value: "_",
                icon: "event_seat",
                class: "material-icons"
            },
           
            sono: {
                title: "Sono",
                value: '_',
                icon: "speaker_group",
                class: "material-icons"
            }
        }
    }
    
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

ForceShowTableHideMore(v) {

    this.forceTable[v] = !this.forceTable[v];
}

  station:any=[];
  parking : Array<any>;
  rows: Array<any>;
  Map: Array<any>;
  Cuisine: Array<any>;
  Eqp :Array<any>;
  Amb : Array<any>;
  Couchage1: Array<any>;

  ngOnInit() {
    this.id=parseInt(this.route.snapshot.paramMap.get('id'));
    console.log("this id is : ",this.id);

    this._service.getDetail(this.id)
     .subscribe((res)=>{
       console.log("details",res);
       this.info=res;
     });

    //SALLES DETAILS METHODS : 
      this._service.getMap(this.id)
      .subscribe((res4:Array<any>)=>{
        console.log("Map",res4);
        this.Map = res4;
        this.mapsrc=this.Map[0].map;
        console.log(this.mapsrc);
      }); 
      // Transport method 
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

     //EQUIPEMENT METHODS
     this._service.getEquip(this.id)
    .subscribe((res5:Array<any>)=>{
      console.log("Equip",res5);
      this.Eqp=res5;
        for (let item of ['water', 'ext', 'telp', 'electrique']) {
            if( this.Eqp[0][item] == true){
                this.data.equipment.fields[item].value = "Oui";
            }else{
                this.data.equipment.fields[item].value = "Non";
            }
        }
    });
    // FICHE TECH METHOD 
    this._service.getFiche(this.id)
     .subscribe((res2:Array<any>)=>{
       console.log("Parking",res2);
       this.parking=res2;
        for (let item of ['parking','horaire','bar','toilette']) {
            if(item == 'horaire'){
                this.data.info.fields[item].value = this.parking[0][item];
            }else{
            if( this.parking[0][item] == true){
                this.data.info.fields[item].value = "Oui";
            }else{
                this.data.info.fields[item].value = "Non";
            }}
        }
     });

    //CUISINE METHOD 
    this._service.getCuisine(this.id)
    .subscribe((res6:Array<any>)=>{
      console.log("Cuisine",res6);
      this.Cuisine = res6;  
        for (let item of ['four', 'plaque', 'frigo', 'bac']) {
            if(this.Cuisine[0][item] == true){
                this.data.cuisine.fields[item].value = "Oui";
            }else{
                this.data.cuisine.fields[item].value = "Non";
            }
        }
       
    });

    //MATERIEL METHODS 
    this._service.getMat(this.id)
    .subscribe((res8:Array<any>)=>{
      console.log("Materiel",res8);
      this.Couchage1 = res8;
      for (let item of ['tables', 'chair', 'sono']) {
        if(item == "sono"){
          if(this.Couchage1[0][item] == true){
            this.data.materiel.fields[item].value = "Oui";
        }else{
            this.data.materiel.fields[item].value = "Non";
        }
        }
        else{
        this.data.materiel.fields[item].value = this.Couchage1[0][item].toString();
        }
      }
    });

  }


  transform() {
    return this.sanitizer.bypassSecurityTrustUrl(this.mapsrc);
   }

  

}
