import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ClientService } from '../_services/client.service';
import { AdminService } from '../_services/admin.service';
import { HttpEventType,HttpEvent } from '@angular/common/http';
import swal from 'sweetalert2';
import { map } from '../../../models/map';
import { equip } from '../../../models/equip'; 
import { parking } from '../../../models/parking';
@Component({
  selector: 'app-update-salle',
  templateUrl: './update-salle.component.html',
  styleUrls: ['./update-salle.component.css']
})
export class UpdateSalleComponent implements OnInit {

  id:number;
  progress: number=0;
  trId:number;
  form: FormGroup;
  form2 : FormGroup;
  formTransport: FormGroup;
  formFiche: FormGroup;
  formMap: FormGroup;
  formMat: FormGroup;
  formEquip: FormGroup;
  formCuisine: FormGroup;

  Info : any=[];
  Tran : any=[];
  fiche :any=[];
  Map :any=[];
  mat: any=[];
  Cuisine : any=[];
  Equip : any=[];

  city: string;
  SelectedIMG:File=null;
  uploadResponse:any = { status: '', message: '', filePath: '' };
  error: string;
  opt: string;

  constructor(
    private _service : AdminService,
    private _service2: ClientService,
    private  _fb: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
      console.log(this.id);

    this._service2.getDetail(this.id)
      .subscribe((res)=>{
        this.Info=res;
        this.city=this.Info.ciy;
        console.log("Details salle :",this.Info);
      });

      this._service2.getFiche(this.id)
      .subscribe((res)=>{
        this.fiche=res;
        console.log("Fiche :",res);
      });

      this._service2.getStation(this.id)
      .subscribe((res)=>{
        this.Tran=res;
        this.trId=this.Tran[0].id;
        console.log("transport :",this.Tran);
      });

      this._service2.getMap(this.id)
      .subscribe((res:Array<map>)=>{
        this.Map=res;
        console.log("map :", this.Map)
      });

      this._service2.getMat(this.id)
      .subscribe((res)=>{
        this.mat=res;
        console.log("materiels", this.mat);
      });

      this._service2.getCuisine(this.id)
      .subscribe((res)=>{
        this.Cuisine=res;
        console.log("cuisine :", this.Cuisine);
      });

      this._service2.getEquip(this.id)
      .subscribe((res)=>{
        this.Equip=res;
        console.log("equipement salle :", this.Equip)
      });  

    this.form = this._fb.group({
      adress: new FormControl(''),
      city: new FormControl(''),
      description:new FormControl(''),
      description2: new FormControl(''),
      description3: new FormControl(''),
      ext:new FormControl(''),
      price:new FormControl(''),
      surface:new FormControl(''),
      responsable:new FormControl(''),
      tel:new FormControl(''),
      places:new FormControl(''),
      mail:new FormControl('')
      
    });  

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
  
    this.formFiche = this._fb.group({
      toilette: new FormControl(''),
      horaire: new FormControl(''),
      bar:new FormControl(''),
      parking:new FormControl('')
    });

    this.formMap = this._fb.group({
      map: new FormControl(''),
      virtual : new FormControl('')
    })

    this.formCuisine = this._fb.group({
      plaque: new FormControl(''),
      bac: new FormControl(''),
      four:new FormControl(''),
      frigo:new FormControl('')
    });

    this.formEquip = this._fb.group({
      water: new FormControl(''),
      electrique: new FormControl(''),
      telp:new FormControl(''),
      ext:new FormControl('')
    });

    this.formMat = this._fb.group({
      tables: new FormControl(''),
      chair: new FormControl(''),
      sono:new FormControl(''),
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

  alertFire(car:string){
    swal.fire(
      'Updated !',
      car+' sont mis à jour.',
      'success'
    );
  }
  updateInfo(){
    console.log(this.form.value);
    this._service.updateSalleInfo(this.id,this.form.value)
      .subscribe((res)=>{
        console.log(res);
        this.alertFire("Les informations essentielles");
      });
  }

  
  updateTran(){
    console.log("uptr",this.formTransport.value);
    this._service.updateTransportL(this.trId,this.formTransport.value)
      .subscribe((res)=>{
          console.log(res);
          this.alertFire("Les caractéristiques trasnport");
      });
  }

  updateMap(){
    console.log("upparki",this.formMap.value);
    this._service.updateMap(this.Map[0].id,this.formMap.value)
      .subscribe((res)=>{
          console.log(res);
          this.alertFire("map et VT360");
      });
  }

  updateFiche(){
    this._service.updateFiche(this.fiche[0].id,this.formFiche.value)
      .subscribe((res)=>{
          console.log(res);
          this.alertFire("Reinseignements techniques");
      });
  }
  updateEquip(){
    this._service.updateEquip(this.Equip[0].id,this.formEquip.value)
      .subscribe((res)=>{
          console.log(res);
          this.alertFire("Equipeements");
      });
  }
  updateCuisine(){
    this._service.updateCuisine(this.Cuisine[0].id,this.formCuisine.value)
      .subscribe((res)=>{
          console.log(res);
          this.alertFire("Info cuisines");
      });
  }
  updateMat(){
    this._service.updateMat(this.mat[0].id,this.formMat.value)
      .subscribe((res)=>{
          console.log(res);
          this.alertFire("Materiels");
      });
  }

  updateIMG(){
    const formData = new FormData();
    formData.append('mainIMG', this.form2.get('mainIMG').value);
    formData.append('cover', this.form2.get('cover').value);
     this._service.updateIMG(this.id,formData)
     .subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.progress = Math.round(event.loaded / event.total * 100);
          console.log(`Uploaded! ${this.progress}%`);
          break;
        case HttpEventType.Response:
          console.log('image successfully uploaded!', event.body);
          setTimeout(() => {
            this.progress = 0;
          }, 1500);

    }
  })
 }

}
