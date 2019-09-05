import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class VoutputService{
    private _url = environment.api_url + '/api/output';
    projects: any = [];
    project:any=[];
    

    constructor(
        private _http: HttpClient,
    ){}

    getData(){
        return this._http.get(this._url+'/getallData');
        //return this._http.get(this._url+'/get');
           
    }
    getArray(){
        return this._http.get(this._url+'/arrayData');
        //return this._http.get(this._url+'/get');
           
    }
    getImage(imageUrl: string): Observable<Blob> {
        return this._http.get(this._url, { responseType: 'blob' });
      }
}