import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UpdatelnmService } from '../../../_services/updatelnm.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import swal from 'sweetalert2';

@Component({
  selector: 'app-updatelnm',
  templateUrl: './updatelnm.component.html',
  styleUrls: ['./updatelnm.component.css']
})
export class UpdatelnmComponent implements OnInit {
  id:number;
  trId:number;
  form: FormGroup;
  formTransport: FormGroup;
  formInfo: FormGroup;
  formMap: FormGroup;
  form2: FormGroup;
  progress:number=0;

  Info : any=[];
  Tran : any=[];
  Parking :any=[];
  Map :any=[];

  SelectedIMG:File=null;
  uploadResponse:any = { status: '', message: '', filePath: '' };
  error: string;
  opt: string;
  constructor(private route: ActivatedRoute,
              private  _fb: FormBuilder,
              private _service : UpdatelnmService,
              ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this._service.getHouseInfo(this.id)
      .subscribe((res)=>{
        this.Info=res;
        console.log("info",this.Info);
        console.log("testinfo",this.Info.adress)
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
    

    this.form = this._fb.group({
      adress: new FormControl(''),
      city: new FormControl(''),
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
    this._service.updateHouseInfo(this.id,this.form.value)
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
          this.alertFire("Les caractéristiques transport");
      });
  }
  updateParking(){
    console.log("upparki",this.formInfo.value);
    this._service.updateParkingL(this.Parking[0].id,this.formInfo.value)
      .subscribe((res)=>{
          console.log(res);
          this.alertFire("Ces caractéristiques");
      });
  }
  updateMap(){
    console.log("upparki",this.formMap.value);
    this._service.updateMapL(this.Map[0].id,this.formMap.value)
      .subscribe((res)=>{
          console.log(res);
          this.alertFire("Map && VT360");
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
