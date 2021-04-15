import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { Pipe, PipeTransform} from '@angular/core';
import { CultureService } from '../service/culture.service';


@Component({
  selector: 'app-culture-detail',
  templateUrl: './culture-detail.component.html',
  styleUrls: ['./culture-detail.component.css']
})
@Pipe({ name: 'safe' })
export class CultureDetailComponent implements OnInit,PipeTransform {
  mapsrc1:any;
  id:number;
  mapsrc:string;

  constructor( private _service :CultureService,
               private route: ActivatedRoute,
               public sanitizer: DomSanitizer){ 
    this.mapsrc1 = sanitizer.bypassSecurityTrustUrl(this.mapsrc);
   }


    info: any = {
        adress: "Mohammed V",
        city: "Tunis",
        description: "Flatlooker vous propose un charmant appartement T4 non meublé situé au Bourget.",
        description2: "Le hall d'entrée donne accès aux différentes pièces de l'appartement et comporte un placard de rangement avec étagères. ",
        description3: "La cuisine est ouverte et dispose d'une tablette de barre, d'un frigo américain, d'un four, d'un lave- vaisselle, d'une plaque de cuisson en dessous d'une hotte aspirante, ainsi que de plusieurs placards et tiroirs de rangements.",
        description4: "Enfin, la troisième chambre de l'appartement, tout comme le salon, donne accès au balcon. ",
        surface: "500",
        tel:"22866412",
        responsable:"__",
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
    
        }
  }
  forceTable = false;

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

station:any=[];
parking : Array<any>;
Map: Array<any>;
rows: Array<any>;

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

     // FICHE TECH METHOD 
    this._service.getFiche(this.id)
    .subscribe((res2:Array<any>)=>{
      console.log("Parking ===",res2);
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

  }

  transform() {
    return this.sanitizer.bypassSecurityTrustUrl(this.mapsrc);
   }

}
