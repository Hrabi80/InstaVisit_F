import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { HouseVService } from '../_services/HouseV.service';
import { HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  form: FormGroup;
  SelectedIMG:File=null;
  uploadResponse:any = { status: '', message: '', filePath: '' };
  error: string;
  constructor(private  _fb: FormBuilder,
              private router: Router,
              private _service: HouseVService,) { }

  ngOnInit() {

    this.form = this._fb.group({
      first: new FormControl(''),
      second: new FormControl(''),
      third:new FormControl(''),
      fourth:new FormControl(''),
      fifth:new FormControl(''),
      sixth:new FormControl(''),
      seventh: new FormControl(''),
      eight: new FormControl(''),
    });
  }


  onFileChanged(event:any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.form.get('first').setValue(event.target.files[0]);
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
        this.form.get('second').setValue(event.target.files[0]);
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

  onFileChanged3(event:any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.form.get('third').setValue(event.target.files[0]);
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

  onFileChanged4(event:any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.form.get('fourth').setValue(event.target.files[0]);
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
  onFileChanged5(event:any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.form.get('fifth').setValue(event.target.files[0]);
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

  onFileChanged6(event:any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.form.get('sixth').setValue(event.target.files[0]);
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

  onFileChanged7(event:any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.form.get('seventh').setValue(event.target.files[0]);
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
  onFileChanged8(event:any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.form.get('eight').setValue(event.target.files[0]);
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



  upload(){
    const uploadData = new FormData();
    uploadData.append('first', this.form.get('first').value)
    uploadData.append('second', this.form.get('second').value);
    uploadData.append('third', this.form.get('third').value);
    uploadData.append('fourth', this.form.get('fourth').value);
    uploadData.append('fifth', this.form.get('fifth').value);
    uploadData.append('sixth', this.form.get('sixth').value);
    uploadData.append('seventh', this.form.get('seventh').value);
    uploadData.append('eight', this.form.get('eight').value);
    console.log(uploadData);
    this._service.upload(uploadData)
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
     // this.router.navigateByUrl('dashboard/HvData_Table');
  }
  

}


