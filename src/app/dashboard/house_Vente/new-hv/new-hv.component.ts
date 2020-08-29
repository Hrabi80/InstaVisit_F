import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { HouseVService } from '../../../_services/HouseV.service';
import { LocalisationService } from '../../../_services/Localisation.service';
import { HttpEventType } from '@angular/common/http';
import Swal from 'sweetalert2';
declare var $:any;

@Component({
  selector: 'app-new-hv',
  templateUrl: './new-hv.component.html',
  styleUrls: ['./new-hv.component.css']
})
export class NewHVComponent implements OnInit {
  form: FormGroup;
  locs:any=[];
  SelectedIMG:File=null;
  uploadResponse:any = { status: '', message: '', filePath: '' };
  error: string;
  opt: string;
  
  constructor(private  _fb: FormBuilder,
              private router: Router,
              private _service: HouseVService,
              private service2: LocalisationService,)
               { }

  ngOnInit() {

    this.service2.getLocs()
    .subscribe((response) => {
        console.log(response);
        this.locs = response;
        console.log(this.locs.City);
        setTimeout(() => {
          $('select').formSelect();
        }, 100)
    })
    $('.datepicker').datepicker();

    this.form = this._fb.group({
      adress: new FormControl(''),
      //city: new FormControl(''),
      description: new FormControl(''),
      description2: new FormControl(''),
      description3: new FormControl(''),
      Tx:new FormControl(''),
      loc:new FormControl(''),
      price:new FormControl(''),
      surface:new FormControl(''),
      mainIMG: new FormControl(''),
      cover : new FormControl,
    });
  }

  selectOption(opt: string) {
    //getted from event
    //getted from binding
    console.log("opitonII",opt);
    this.opt=opt;
    console.log("opiton",this.opt);
  }
 
  onFileChanged(event:any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.form.get('mainIMG').setValue(event.target.files[0]);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
   
      //(res) => this.uploadResponse = res,
      //(err) => this.error = err,
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
        this.form.get('cover').setValue(event.target.files[0]);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
   
      //(res) => this.uploadResponse = res,
      //(err) => this.error = err,
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
  newHV(){
    const uploadData = new FormData();
    uploadData.append('mainIMG', this.form.get('mainIMG').value);
    uploadData.append('cover', this.form.get('cover').value);
    uploadData.append('adress', this.form.get('adress').value);
    uploadData.append('city', this.opt);
    uploadData.append('description', this.form.get('description').value);
    uploadData.append('description2', this.form.get('description2').value);
    uploadData.append('description3', this.form.get('description3').value);
    uploadData.append('Tx', this.form.get('Tx').value);
    uploadData.append('loc', this.form.get('loc').value);
    uploadData.append('price', this.form.get('price').value);
    uploadData.append('surface', this.form.get('surface').value);
    console.log(uploadData);
    this._service.AddHV(uploadData)
    .subscribe(
      //(res) => this.uploadResponse = res,
      //(err) => this.error = err,
       event => { if(event.type === HttpEventType.UploadProgress)
        {
            console.log('upload progress : ' + Math.round( event.loaded / event.total )*100 +'%')
        } 
        else if(event.type === HttpEventType.Response)
        {
          console.log(event);
        }
      }
      );
      console.log(event);
      Swal.fire(
        'Ajouter !',
        'Un logement est ajouter à la base de données',
        'success'
      );
      setTimeout(()=>{
        this.router.navigateByUrl('dashboard/HvData_Table'), 3000;
      })
      
  }

}

