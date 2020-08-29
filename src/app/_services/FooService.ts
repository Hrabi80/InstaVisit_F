import { GoogleApiService } from './_googleServices/GoogleApiService';
import { Injectable } from '@angular/core';
import HttpBatch = gapi.client.HttpBatch;
@Injectable()
export class FooService {
    x:any = "https://analyticsreporting.googleapis.com/v4/reports:batchGet";  
    constructor(gapiService: GoogleApiService) {
        gapiService.onLoad().subscribe(()=> {
          
            const myBatch: HttpBatch = new HttpBatch();
            myBatch.add(
                 this.x

            );
           
        });
    }
}