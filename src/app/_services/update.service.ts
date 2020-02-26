import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import {Observable} from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private _url = environment.api_url + '/api/UpdateV';
  constructor(
    private _http: HttpClient,
  ) { }
  getTransport(id){
    return this._http.get(this._url+'/getHouseTra/'+id);
  }
  updateTransportV(id,data){
    return this._http.put(this._url+'/UpdateVTR/'+id,data);
  }
  getMapV(id){
    return this._http.get(this._url+'/getMapV/'+id);
  }
  updateMapV(id,data){
    return this._http.put(this._url+'/UpdateMapV/'+id,data);
  }
  getParkingV(id){
    return this._http.get(this._url+'/getParkingV/'+id);
  }
  updateParkingV(id,data){
    return this._http.put(this._url+'/UpdateParkingV/'+id,data);
  }
}
