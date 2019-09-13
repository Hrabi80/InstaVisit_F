import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject,of } from 'rxjs';

@Injectable()
export class VoutputService{
    setGroupFilter$ = new Subject<any>();
	getGroupFilter = this.setGroupFilter$.asObservable();
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

    fetchOutput(): Observable<any> {
		return of(this._http.get(this._url+'/getallData'));
	}

      
}