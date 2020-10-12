import { Component, OnInit } from '@angular/core';
import { VoutputService } from '../_services/Voutput.service';
import { ActivatedRoute, Params,Router,NavigationEnd } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';
declare var $:any;
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  GoForm : FormGroup;
  ad:number= 1;
  FirOutput: any=[];
  SecOutput: any=[];
  userLoc : string;
  radioSel:any;
  radioSelected:string;
  radioSelectedString:string;
  activeStudent = 0;
  activeSeller = 0;
  allImages =  {
      students: [
          'assets/img/students/student-01-angry.png',
          'assets/img/students/student-02-amazed.png',
          'assets/img/students/student-03-fabulous.png'
      ],
      seller: [
          'assets/img/seller/1st-seller-01.png',
          'assets/img/seller/2nd-seller-01.png',
          'assets/img/seller/3rd-seller-01.png'
      ]
  }
  constructor(private _service: VoutputService,
              private route: ActivatedRoute,
              private router: Router,
              private  _fb: FormBuilder,) { }
 
  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });

    this._service.getWData()
        .subscribe((res) => {
            this.FirOutput = res;   
        });
    this._service.getData()
        .subscribe((res)=>{
         this.SecOutput = res;
        });
       
        this.radioSelected = "1";
        this.GoForm = this._fb.group({
          Localisation: new FormControl(''),
        });          
  }

  onItemChange(item) {
    this.ad=item;
  }

  Go(){
    this.userLoc=this.GoForm.get('Localisation').value;
    if (this.userLoc == "ivt009"){
      this.router.navigate(['/dashboard']);
    }else{
        
    if ( this.ad === 1)
    {this.router.navigate(['/nav/searchlouer',{foo:this.userLoc}]); }
    else
    this.router.navigate(['/nav/searchvente',{foo:this.userLoc}]);
    }
  }

}
