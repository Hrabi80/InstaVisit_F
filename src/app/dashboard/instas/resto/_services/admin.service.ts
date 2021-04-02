import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Observable }   from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _url = environment.api_url + '/api/instaResto';
  private url2 = environment.api_url + '/api/instaResto/update';

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

  //UPDATE METHODS : 

  updateInfo(id,data){
    return this._http.put(this.url2+'/info/'+id,data);
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error.");
  }

  updateTransportL(id,data){
    return this._http.put(this.url2+'/transport/'+id,data);
  }

  updateMap(id,data){
    return this._http.put(this.url2+'/map/'+id,data);
  }
  updateFiche(id,data){
    return this._http.put(this.url2+'/fiche/'+id,data);
  }
}
