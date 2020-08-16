import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _url = environment.api_url + '/public/salle';
  constructor(private _http:HttpClient) { }

  getDetail(id){
    return this._http.get(this._url+'/Detail/'+id);
  }
  //salle details old methods 
  getMap(id){
    return this._http.get(this._url+'/getMap/'+id);
  }
  getStation(id){
    return this._http.get(this._url+'/getStation/'+id);
  }


  //salle details new methods
  getEquip(id){
    return this._http.get(this._url+'/getEquip/'+id);
  }
  getCuisine(id){
    return this._http.get(this._url+'/getCuisine/'+id);
  }
  getFiche(id){
      return this._http.get(this._url+'/getFiche/'+id);
  }
  getMat(id){
      return this._http.get(this._url+'/getMat/'+id);
  }
}
