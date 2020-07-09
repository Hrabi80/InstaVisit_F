import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { HouseVService } from '../_services/HouseV.service';
import swal from 'sweetalert2';
import { FrontService} from '../_services/Front.service';
import { Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
@Pipe({ name: 'safe' })
export class AboutComponent implements OnInit {
  form: FormGroup;
  formContact :FormGroup;
  constructor( 
              private  _fb: FormBuilder,
              private _service : FrontService,
             ) { }
 
  ngOnInit() {
    this.form = this._fb.group({
      newsletter: ['', [Validators.required, Validators.minLength(6),Validators.email]],    
    });

    this.formContact = this._fb.group({
      name:  ['', [Validators.required, Validators.minLength(3)]],
      email:  ['', [Validators.required, Validators.email]],
      message:  ['', [Validators.required, Validators.minLength(6)]],    
    });

  }

  newMail(){
    this._service.AddMail(this.form.value)
    .subscribe(res => {
      console.log(res);
    });
    swal.fire(
      'Merci !',
      'Vous etes maintenant abonné à notre newsletter!',
      'success'
    );
    this.form.reset();
  }
  newContact(){
    this._service.AddContact(this.formContact.value)
    .subscribe(res=>{
      console.log(res);
    });
    swal.fire(
      'Merci !',
      'Nous avons récus votre message!',
      'success'
    );
    this.formContact.reset();
  }

}
