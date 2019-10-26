import { Component, OnInit } from '@angular/core';
import { VoutputService } from '../_services/Voutput.service';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';
declare var $:any;
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  GoForm : FormGroup;
  ad:number= 1;
  FirOutput: any=[];
  userLoc : string;
  radioSel:any;
  radioSelected:string;
  radioSelectedString:string;
  constructor(private _service: VoutputService,
              private route: ActivatedRoute,
              private router: Router,
              private  _fb: FormBuilder,) { }
 
  ngOnInit() {
    this._service.getData()
        .subscribe((res) => {
            console.log(res);
            this.FirOutput = res;
            
        });
        this.radioSelected = "1";
      
        this.GoForm = this._fb.group({
          Localisation: new FormControl(''),
        });    
  }
 

  onItemChange(item) {
    
    console.log("louer?",item);
    this.ad=item;
    console.log("louer?ddd",this.ad);
   
    
  }

  Go(){
    
    this.userLoc=this.GoForm.get('Localisation').value;
    console.log("rr",this.userLoc)
    console.log("sss",this.ad);
    
    
    if ( this.ad === 1)
    {this.router.navigate(['/nav/searchlouer',{foo:this.userLoc}]); }
    else
    this.router.navigate(['/nav/searchvente',{foo:this.userLoc}]);
    
  }

}
