import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UpdatelService {
  private _url = environment.api_url + '/api/UpdateLM';

  constructor(private _http: HttpClient,) { }

  getHouseInfo(id){
    return this._http.get(this._url+'/getHouseInfo/'+id);
  }
  updateHouseInfo(id,data){
    return this._http.put(this._url+'/updateHouseInfo/'+id,data);
  }
  getTransportL(id){
    return this._http.get(this._url+'/getHouseTra/'+id);
  }
  updateTransportL(id,data){
    return this._http.put(this._url+'/UpdateLMTR/'+id,data);
  }
  getMapL(id){
    return this._http.get(this._url+'/getMapLM/'+id);
  }
  updateMapL(id,data){
    return this._http.put(this._url+'/UpdateMapLM/'+id,data);
  }
  getParkingL(id){
    return this._http.get(this._url+'/getParkingLM/'+id);
  }
  updateParkingL(id,data){
    return this._http.put(this._url+'/UpdateParkingLM/'+id,data);
  }
  updateIMG(id,data){
    return this._http.put(this._url+'/updateHouseLMimg/'+id,data);
  }
  getCuisine(id){
    return this._http.get(this._url+'/getCuisine/'+id);
  }
  updateCuisine(id,data){
    return this._http.put(this._url+'/UpdateCuisine/'+id,data);
  }
  getCouchage(id){
    return this._http.get(this._url+'/getCouchage/'+id);
  }
  updateCouchage(id,data){
    return this._http.put(this._url+'/UpdateCouchage/'+id,data);
  }
  getAmm(id){
    return this._http.get(this._url+'/getAmm/'+id);
  }
  updateAmm(id,data){
    return this._http.put(this._url+'/UpdateAmm/'+id,data);
  }
  getEquip(id){
    return this._http.get(this._url+'/getEquip/'+id);
  }
  updateEquip(id,data){
    return this._http.put(this._url+'/UpdateEquip/'+id,data);
  }
}
