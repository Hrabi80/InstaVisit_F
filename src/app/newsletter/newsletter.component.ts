import { Component, OnInit } from '@angular/core';
import { FrontService } from '../_services/Front.service';
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

}
