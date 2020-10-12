import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _url = environment.api_url + '/api/salle';
  private url2 = environment.api_url + '/api/salle/update';
  constructor(private _http: HttpClient) { }

  Add(data){
    return this._http.post(this._url + '/Add', data , {reportProgress:true , observe:'events'});
  }

  getData(){
    return this._http.get(this._url+'/All');
  }

  delete(id){
    return this._http.get(this._url + '/delete/'+id);
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
  AddEquipment(id, data){
    return this._http.post(this._url+'/AddEquip/'+id,data);
  }
  AddCuisine(id, data){
    return this._http.post(this._url+'/AddCuisine/'+id,data);
  }
  AddMat(id, data){
    return this._http.post(this._url+'/AddMat/'+id,data);
  }
  
  //UPDATE METHODS : 

  updateSalleInfo(id,data){
    return this._http.put(this.url2+'/info/'+id,data)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error.");
  }

  updateTransportL(id,data){
    return this._http.put(this.url2+'/transport/'+id,data)
    .pipe(catchError(this.errorHandler));
  }

  updateMap(id,data){
    return this._http.put(this.url2+'/map/'+id,data)
    .pipe(catchError(this.errorHandler));
  }

  updateCuisine(id,data){
    return this._http.put(this.url2+'/cuisine/'+id,data)
    .pipe(catchError(this.errorHandler));
  }

  updateEquip(id,data){
    return this._http.put(this.url2+'/equip/'+id,data)
    .pipe(catchError(this.errorHandler));
  }

  updateFiche(id,data){
    return this._http.put(this.url2+'/fiche/'+id,data)
    .pipe(catchError(this.errorHandler));
  }

  updateMat(id,data){
    return this._http.put(this.url2+'/mat/'+id,data)
    .pipe(catchError(this.errorHandler));
  }

  updateIMG(id,data): Observable<any> {
    return this._http.post(this.url2+'/updateIMG/'+id,data,{
      reportProgress: true,
      observe: 'events'});
}


}
