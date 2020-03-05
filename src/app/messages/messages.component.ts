import { Component, OnInit } from '@angular/core';
import {FrontService} from '../_services/Front.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  mess: any=[];
  constructor(
     private _service : FrontService,
  ) { }

  ngOnInit() {
    this._service.getMessages()
      .subscribe(res=>{
        this.mess= res;
        console.log(this.mess.name);
      })
  }
  delete(id){
    this._service.delete(id)
      .subscribe(res=>{
        console.log(res);
      })
  }

}
