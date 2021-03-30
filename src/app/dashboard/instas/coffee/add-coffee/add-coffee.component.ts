import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/dashboard/salle/_services/admin.service';
import { LocalisationService } from 'src/app/_services/Localisation.service';
import Swal from 'sweetalert2';
declare var $:any;
@Component({
  selector: 'app-add-coffee',
  templateUrl: './add-coffee.component.html',
  styleUrls: ['./add-coffee.component.css']
})

export class AddCoffeeComponent implements OnInit {


  form: FormGroup;
  locs:any=[];
  SelectedIMG:File=null;
  uploadResponse:any = { status: '', message: '', filePath: '' };
  error: string;
  opt: string;

  constructor(
      private fb:FormBuilder,
      private router:Router,
      private _service: AdminService,
      private locService:LocalisationService
  ) { }

  ngOnInit() {


    this.locService.getLocs()
    .subscribe((res) => {
        this.locs = res;
        console.log(this.locs.City);
        setTimeout(() => {
          $('select').formSelect();
        }, 100)
    })
    $('.datepicker').datepicker();

    this.form = this.fb.group({
      name:  ['', [Validators.required, Validators.minLength(3)]],
      mail:  ['', [Validators.required, Validators.email]],
      tel:  ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(8),Validators.maxLength(8)]],
      adress:  ['', [Validators.required, Validators.minLength(6)]],   
      responsable:  ['', [Validators.required, Validators.minLength(2)]],
      descrip1:  ['', [Validators.required]],
      descrip2:  new FormControl(''),
      descrip3:new FormControl(''),
      surface:['',[Validators.required]],
      nbPlace:['',[Validators.required]],
      loc:['',[Validators.required]],
      main:new FormControl(''),
      cover:new FormControl(''),
      price:new FormControl(''),
      city: new FormControl(''),

    });

  }

  selectOption(opt: string) {
    this.opt=opt;
  }

  onFileChanged(event:any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.form.get('main').setValue(event.target.files[0]);
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

  newSalle(){
    const uploadData = new FormData();
    uploadData.append('main', this.form.get('main').value);
    uploadData.append('cover', this.form.get('cover').value);
    uploadData.append('name', this.form.get('name').value);
    uploadData.append('responsable', this.form.get('responsable').value);
    uploadData.append('mail', this.form.get('mail').value);
    uploadData.append('tel', this.form.get('tel').value);
    uploadData.append('adress', this.form.get('adress').value);
    uploadData.append('city', this.opt);
    uploadData.append('descrip1', this.form.get('descrip1').value);
    uploadData.append('descrip2', this.form.get('descrip2').value);
    uploadData.append('descrip3', this.form.get('descrip3').value);
    uploadData.append('nbPlace', this.form.get('nbPlace').value);
    uploadData.append('loc', this.form.get('loc').value);
    uploadData.append('price', this.form.get('price').value);
    uploadData.append('surface', this.form.get('surface').value);
   
    /*this._service.Add(uploadData)
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
      ); */
      console.log(event);
      Swal.fire(
        'Ajouter !',
        'la café est ajouter à la base de données',
        'success'
      );
     /*  setTimeout(()=>{
        this.router.navigateByUrl('dashboard/Salle_Data_Table'), 3000;
      }) */
      
  }


}
