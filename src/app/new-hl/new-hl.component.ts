import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { HouseLService } from '../_services/HouseL.service';
import { LocalisationService } from '../_services/Localisation.service';
import { HttpEventType } from '@angular/common/http';
import Swal from 'sweetalert2';
declare var $:any;

@Component({
  selector: 'app-new-hl',
  templateUrl: './new-hl.component.html',
  styleUrls: ['./new-hl.component.css']
})
export class NewHLComponent  {
  
  form: FormGroup;
  locs:any=[];
  SelectedIMG:File=null;
  opt: string;
  bool : boolean;
  uploadResponse:any = { status: '', message: '', filePath: '' };
  error: string;
  constructor(private  _fb: FormBuilder,
              private router: Router,
              private service2: LocalisationService,
              private _service: HouseLService,
             ) { }

  
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
      adress:['', [Validators.required]],
      description: ['', [Validators.required]],
      description2: ['', [Validators.required]],
      description3: new FormControl(''),
      description4: new FormControl(''),
      Tx:['', [Validators.required]],
      loc:['', [Validators.required]],
      price:['', [Validators.required]],
      surface:['', [Validators.required]],
      isMeuble:new FormControl(''),
      mainIMG: new FormControl(''),
      cover : new FormControl(''),
      city: new FormControl(''),
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

    newHL(){
      const uploadData = new FormData();
      uploadData.append('mainIMG', this.form.get('mainIMG').value);
      uploadData.append('cover', this.form.get('cover').value)
      uploadData.append('adress', this.form.get('adress').value);
      uploadData.append('city', this.opt);
      uploadData.append('description', this.form.get('description').value);
      uploadData.append('description2', this.form.get('description2').value);
      uploadData.append('description3', this.form.get('description3').value);
      uploadData.append('description4', this.form.get('description4').value);
      uploadData.append('Tx', this.form.get('Tx').value);
      uploadData.append('loc', this.form.get('loc').value);
      uploadData.append('price', this.form.get('price').value);
      uploadData.append('surface', this.form.get('surface').value);
      console.log(uploadData);
      this.bool=this.form.get('isMeuble').value;
      console.log("isMeuble",this.bool);
       if(this.bool === true){
       //this._service.AddHVM(uploadData);
       //else
       this._service.AddHLM(uploadData)
       .subscribe(
        (res) => this.uploadResponse = res,
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
        Swal.fire(
          'Ajouter !',
          'Un logement meublé est ajouter à la base de données',
          'success'
        );
        setTimeout(()=>{
          this.router.navigateByUrl('dashboard/HLM_LISTE')
          ,3000
        });
        
      }else{
        this._service.AddHL(uploadData)
        .subscribe(
          (res) => this.uploadResponse = res,
          //(err) => this.error = err
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
          Swal.fire(
            'Ajouter !',
            'Un logement non meublé est ajouter à la base de données',
            'success'
          );
          setTimeout(()=>{
            this.router.navigateByUrl('dashboard/HL_LISTE')
            ,3000
          });
      }
        //console.log(event);
       // this.router.navigateByUrl('dashboard/HvData_Table');
    }
  

}
