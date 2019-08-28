import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { HouseVService } from '../_services/HouseV.service';
import { LocalisationService } from '../_services/Localisation.service';
import { HttpEventType } from '@angular/common/http';
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
      city: new FormControl(''),
      description: new FormControl(''),
      Tx:new FormControl(''),
      loc:new FormControl(''),
      price:new FormControl(''),
      surface:new FormControl(''),
      mainIMG: new FormControl(''),
    });
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
  newHV(){
    const uploadData = new FormData();
    uploadData.append('mainIMG', this.form.get('mainIMG').value)
    uploadData.append('adress', this.form.get('adress').value);
    uploadData.append('city', this.form.get('city').value);
    uploadData.append('description', this.form.get('description').value);
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
      this.router.navigateByUrl('dashboard/HvData_Table');
      
     

  }

}

