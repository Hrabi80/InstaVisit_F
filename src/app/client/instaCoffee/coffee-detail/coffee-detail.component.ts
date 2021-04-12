import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../salle/service/client.service';
import { CoffeService } from '../service/coffe.service';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
@Pipe({ name: 'safe' })
export class CoffeeDetailComponent implements OnInit,PipeTransform {
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
      private coffeeService:CoffeService,
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
              extincteur: {
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
      
      this.coffeeService.getDetail(this.id).subscribe(res=>{
        this.info=res;
        console.log("details",res);


      });
            //SALLES DETAILS METHODS : 

      this.coffeeService.getMap(this.id).subscribe((res4:Array<any>)=>{
        console.log("Map",res4);
        this.Map = res4;
        //this.mapsrc=this.Map[0].map;
        this.mapsrc="https://goo.gl/maps/wiyPTQqVgCpn2Vpi9"
        console.log(this.mapsrc);
      })
    
        // Transport method 
        this.coffeeService.getStation(this.id).subscribe((res3:Array<any>)=>{

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
        })
      
  
  
      // FICHE TECH METHOD 

      this.coffeeService.getFiche(this.id).subscribe((res2:Array<any>)=>{

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
      })
     

  
  
  
    }
  
  
    transform() {
      return this.sanitizer.bypassSecurityTrustUrl(this.mapsrc);
     }
  
    
  
  }
  


