import { Component, OnInit } from '@angular/core';
import { FrontService } from '../_services/Front.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  mails : any=[];
  constructor( private _service : FrontService) { }

  ngOnInit() {
    this._service.getNewsletter()
        .subscribe((res) => {
            console.log(res);
            this.mails = res;
        });
  }
  delete(id){
    swal.fire({
      type:'warning',
      title: 'Are you sure to Delete this email ?',
      text: 'You will not be able to recover the data again',
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor:'#ff0000',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((res) => {
      if (res.value) {
        this._service.deleteNews(id).subscribe(
          data => {
            console.log(data);
            swal.fire(
              'Deleted!',
              'Ce message est supprimée.',
              'success'
            );
            const index = this.mails.findIndex(x => x.id ===id);
              this.mails.splice(index, 1);
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

}
