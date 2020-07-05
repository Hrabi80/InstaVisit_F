import { Component, OnInit } from '@angular/core';
import {FrontService} from '../_services/Front.service';
import swal from 'sweetalert2';
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
      })
  }
  delete(id){
    swal.fire({
      type:'warning',
      title: 'Are you sure to Delete the message ?',
      text: 'You will not be able to recover the data again',
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor:'#ff0000',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((res) => {
      if (res.value) {
        this._service.delete(id).subscribe(
          data => {
            console.log(data);
            swal.fire(
              'Deleted!',
              'Ce message est supprimée.',
              'success'
            );
            const index = this.mess.findIndex(x => x.id ===id);
              this.mess.splice(index, 1);
          });
      }else{
        swal.fire(
          'Canceled!',
          'Cette operation est annulée.',
          'success'
        )
      }
    });
  }
  delete2(id){
    this._service.delete(id)
      .subscribe(res=>{
        console.log(res);
      })
  }

}
