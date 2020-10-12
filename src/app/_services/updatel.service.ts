import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UpdatelService {
  private _url = environment.api_url + '/api/UpdateLM';

  constructor(private _http: HttpClient,) { }

  getHouseInfo(id){
    return this._http.get(this._url+'/getHouseInfo/'+id)
    .pipe(catchError(this.errorHandler));
    
  }
  updateHouseInfo(id,data){
    return this._http.put(this._url+'/updateHouseInfo/'+id,data)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error.");
}
  getTransportL(id){
    return this._http.get(this._url+'/getHouseTra/'+id)
    .pipe(catchError(this.errorHandler.toString));
  }
  updateTransportL(id,data){
    return this._http.put(this._url+'/UpdateLMTR/'+id,data)
    .pipe(catchError(this.errorHandler));
  }
  getMapL(id){
    return this._http.get(this._url+'/getMapLM/'+id)
    .pipe(catchError(this.errorHandler));
  }
  updateMapL(id,data){
    return this._http.put(this._url+'/UpdateMapLM/'+id,data)
    .pipe(catchError(this.errorHandler));
  }
  getParkingL(id){
    return this._http.get(this._url+'/getParkingLM/'+id)
    .pipe(catchError(this.errorHandler));
  }
  updateParkingL(id,data){
    return this._http.put(this._url+'/UpdateParkingLM/'+id,data)
    .pipe(catchError(this.errorHandler));;
  }
  updateIMG(id,data): Observable<any> {
    return this._http.post(this._url+'/updateIMG/'+id,data,{
      reportProgress: true,
      observe: 'events'})
    .pipe(catchError(this.errorHandler));;
  }
  getCuisine(id){
    return this._http.get(this._url+'/getCuisine/'+id)
    .pipe(catchError(this.errorHandler));;
  }
  updateCuisine(id,data){
    return this._http.put(this._url+'/UpdateCuisine/'+id,data)
    .pipe(catchError(this.errorHandler));;
  }
  getCouchage(id){
    return this._http.get(this._url+'/getCouchage/'+id)
    .pipe(catchError(this.errorHandler));;
  }
  updateCouchage(id,data){
    return this._http.put(this._url+'/UpdateCouchage/'+id,data)
    .pipe(catchError(this.errorHandler));;
  }
  getAmm(id){
    return this._http.get(this._url+'/getAmm/'+id)
    .pipe(catchError(this.errorHandler));;
  }
  updateAmm(id,data){
    return this._http.put(this._url+'/UpdateAmm/'+id,data);
  }
  getEquip(id){
    return this._http.get(this._url+'/getEquip/'+id)
    .pipe(catchError(this.errorHandler));;
  }
  updateEquip(id,data){
    return this._http.put(this._url+'/UpdateEquip/'+id,data);
  }
}
