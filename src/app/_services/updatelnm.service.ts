import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class UpdatelnmService {

  private _url = environment.api_url + '/api/UpdateLNM';

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
    return this._http.put(this._url+'/UpdateLNMTR/'+id,data);
  }
  getMapL(id){
    return this._http.get(this._url+'/getMapLNM/'+id);
  }
  updateMapL(id,data){
    return this._http.put(this._url+'/UpdateMapLNM/'+id,data);
  }
  getParkingL(id){
    return this._http.get(this._url+'/getParkingLNM/'+id);
  }
  updateParkingL(id,data){
    return this._http.put(this._url+'/UpdateParkingLNM/'+id,data);
  }
  updateIMG(id,data){
    return this._http.put(this._url+'/updateHouseLMNimg/'+id,data);
}
}
