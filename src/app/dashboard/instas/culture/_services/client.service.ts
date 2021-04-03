import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _url = environment.api_url + '/public/instaCulture';
  constructor(private _http:HttpClient) { }

  getDetail(id){
    return this._http.get(this._url+'/Detail/'+id);
  }

  getMap(id){
    return this._http.get(this._url+'/getMap/'+id);
  }
  getStation(id){
    return this._http.get(this._url+'/getStation/'+id);
  }

  getFiche(id){
      return this._http.get(this._url+'/getFiche/'+id);
  }

}
