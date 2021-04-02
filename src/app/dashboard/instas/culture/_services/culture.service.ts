import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Observable }   from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class CultureService {
  private _url = environment.api_url + '/api/InstaCulture';

  constructor(private _http : HttpClient) { }

  getData():Observable<any>{
    return this._http.get(this._url+'/All');
  }
  deleteInstaCulture(id:any){
    return this._http.delete(this._url + '/delete/'+id)
  }
  Add(data){
    return this._http.post(this._url + '/Add', data , {reportProgress:true , observe:'events'});
  }
  // Salle details are down :
  
  AddTransport(id, data){
    return this._http.post(this._url+'/AddTransport/'+id,data);
  }
  AddMap(id, data){
    return this._http.post(this._url+'/AddMap/'+id,data);
  }
  AddInfo(id, data){
    return this._http.post(this._url+'/AddFiche/'+id,data);
  }
}
