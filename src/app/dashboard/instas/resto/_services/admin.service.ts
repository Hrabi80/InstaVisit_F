import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Observable }   from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _url = environment.api_url + '/api/InstaResto';

  constructor(private _http : HttpClient) { }

  getData():Observable<any>{
    return this._http.get(this._url+'/All');
  }
  deleteInstaResto(id:any){
    return this._http.delete(this._url + '/delete/'+id)
  }
  Add(data){
    return this._http.post(this._url + '/Add', data , {reportProgress:true , observe:'events'});
  }
}
