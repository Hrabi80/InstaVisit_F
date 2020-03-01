import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UpdatelService } from '../_services/updatel.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-updatelm',
  templateUrl: './updatelm.component.html',
  styleUrls: ['./updatelm.component.css']
})
export class UpdatelmComponent implements OnInit {
  id:number;
  trId:number;
  form: FormGroup;
  formTransport: FormGroup;
  formInfo: FormGroup;
  formMap: FormGroup;
  form2: FormGroup;
  formAmeubl:FormGroup;
  formEquip: FormGroup;
  formCouchage: FormGroup;
  formCuisine: FormGroup;

  Info : any=[];
  Tran : any=[];
  Parking :any=[];
  Map :any=[];
  Amm: any=[];
  Cuisine : any=[];
  Equip :any=[];
  Couchage : any=[];

  city: string;
  SelectedIMG:File=null;
  uploadResponse:any = { status: '', message: '', filePath: '' };
  error: string;
  opt: string;
  constructor(private route: ActivatedRoute,
              private  _fb: FormBuilder,
              private _service : UpdatelService,
    ) { }

    ngOnInit() {
      this.id = parseInt(this.route.snapshot.paramMap.get('id'));
      console.log(this.id);
      this._service.getHouseInfo(this.id)
        .subscribe((res)=>{
          this.Info=res;
          this.city=this.Info.ciy;
          console.log("info",this.Info);
          console.log("testinfo",this.Info.ciy)
        });
  
      this._service.getParkingL(this.id)
        .subscribe((res)=>{
          this.Parking=res;
          console.log("parking",res);
        });
  
        this._service.getTransportL(this.id)
        .subscribe((res)=>{
          this.Tran=res;
          this.trId=this.Tran[0].id;
          console.log("transp",this.Tran);
        });
  
        this._service.getMapL(this.id)
        .subscribe((res)=>{
          this.Map=res;
          console.log("map", this.Map)
        });

        this._service.getAmm(this.id)
        .subscribe((res)=>{
          this.Amm=res;
          console.log("amm", this.Amm);
        });

        this._service.getCouchage(this.id)
        .subscribe((res)=>{
          this.Couchage=res;
          console.log("couchage", this.Couchage);
        });

        this._service.getCuisine(this.id)
        .subscribe((res)=>{
          this.Cuisine=res;
          console.log("cuisi", this.Cuisine);
        });

        this._service.getEquip(this.id)
        .subscribe((res)=>{
          this.Equip=res;
          console.log("equi", this.Equip)
        });
      
  
      this.form = this._fb.group({
        adress: new FormControl(''),
        ciy: new FormControl(''),
        description:new FormControl(''),
        description2: new FormControl(''),
        description3: new FormControl(''),
        Tx:new FormControl(''),
        price:new FormControl(''),
        surface:new FormControl(''),
        
      })
      this.form2 = this._fb.group({
        mainIMG: new FormControl(''),
        cover : new FormControl(''),
      })
      this.formTransport = this._fb.group({
        metro: new FormControl(''),
        metroST: new FormControl(''),
        louage:new FormControl(''),
        louageST:new FormControl(''),
        train:new FormControl(''),
        trainST:new FormControl(''),
        bus:new FormControl(''),
        busST:new FormControl(''),
      });
    
      this.formInfo = this._fb.group({
        etage: new FormControl(''),
        elevator: new FormControl(''),
        parking:new FormControl(''),
        garage:new FormControl(''),
        garden:new FormControl(''),
        cave:new FormControl(''),
      });
    
      this.formMap = this._fb.group({
        map: new FormControl(''),
        virtual: new FormControl(''),
      });

      this.formEquip = this._fb.group({
        toilet: new FormControl(''),
        machine: new FormControl(''),
        internet:new FormControl(''),
        boite:new FormControl(''),
        inter:new FormControl(''),
        lave:new FormControl(''),
      });
    
      this.formCouchage = this._fb.group({
        lit: new FormControl(''),
        doublelit: new FormControl(''),
        canape: new FormControl(''),
      });
  
      this.formAmeubl = this._fb.group({
        canape: new FormControl(''),
        myTable: new FormControl(''),
        chair:new FormControl(''),
        myTV:new FormControl(''),
        desk:new FormControl(''),
        dressing:new FormControl(''),
      });
    
      this.formCuisine = this._fb.group({
        four: new FormControl(''),
        refri: new FormControl(''),
        lave: new FormControl(''),
        conge: new FormControl(''),
        micro: new FormControl(''),
        plaque: new FormControl(''),
      });
    }

    updateInfo(){
      console.log(this.form.value);
      this._service.updateHouseInfo(this.id,this.form.value)
        .subscribe((res)=>{
          console.log(res);
        });
    }
    updateTran(){
      console.log("uptr",this.formTransport.value);
      this._service.updateTransportL(this.trId,this.formTransport.value)
        .subscribe((res)=>{
            console.log(res);
        });
    }
    updateParking(){
      console.log("upparki",this.formInfo.value);
      this._service.updateParkingL(this.Parking[0].id,this.formInfo.value)
        .subscribe((res)=>{
            console.log(res);
        });
    }
    updateMap(){
      console.log("upparki",this.formMap.value);
      this._service.updateMapL(this.Map[0].id,this.formMap.value)
        .subscribe((res)=>{
            console.log(res);
        });
    }
    updateCouchage(){
      console.log("uppacou",this.formCouchage.value);
      this._service.updateCouchage(this.Couchage[0].id,this.formCouchage.value)
        .subscribe((res)=>{
            console.log(res);
        });
    }
    updateCuisine(){
      console.log("uppcuis",this.formCuisine.value);
      this._service.updateCuisine(this.Cuisine[0].id,this.formCuisine.value)
        .subscribe((res)=>{
            console.log(res);
        });
    }
    updateEquip(){
      console.log("uppEqui",this.formEquip.value);
      this._service.updateEquip(this.Equip[0].id,this.formEquip.value)
        .subscribe((res)=>{
            console.log(res);
        });
    }
    updateAmm(){
      console.log("uppAmm",this.formAmeubl.value);
      this._service.updateAmm(this.Amm[0].id,this.formAmeubl.value)
        .subscribe((res)=>{
            console.log(res);
        });
    }
  
  
    
    onFileChanged(event:any) {
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
          this.form2.get('mainIMG').setValue(event.target.files[0]);
        };
        reader.readAsDataURL(event.target.files[0]);
      }
         event => { if(event.type === HttpEventType.UploadProgress)
          {
              console.log('upload progress : ' + Math.round( event.loaded / event.total )*100 +'%')
          } 
          else if(event.type === HttpEventType.Response)
          {
            console.log(event);
          }
        } 
        console.log(event);
    }
  
    onFileChanged2(event:any) {
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
          this.form2.get('cover').setValue(event.target.files[0]);
        };
        reader.readAsDataURL(event.target.files[0]);
      }
         event => { if(event.type === HttpEventType.UploadProgress)
          {
              console.log('upload progress : ' + Math.round( event.loaded / event.total )*100 +'%')
          } 
          else if(event.type === HttpEventType.Response)
          {
            console.log(event);
          }
         }
        console.log(event);
    }
    updateIMG(){
      const uploadData = new FormData();
      uploadData.append('mainIMG', this.form2.get('mainIMG').value);
      uploadData.append('cover', this.form2.get('cover').value);
      console.log("hey",uploadData);
       this._service.updateIMG(this.id,uploadData)
    }

}
