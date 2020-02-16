import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject,of } from 'rxjs';

@Injectable()
export class LoutputService{
    setGroupFilter$ = new Subject<any>();
	getGroupFilter = this.setGroupFilter$.asObservable();
    private _url = environment.api_url + '/public/Loutput';
    projects: any = [];
    project:any=[];
    

    constructor(
        private _http: HttpClient,
    ){}
    getDataNM(){
        return this._http.get(this._url+'/getLNM');     
    }
    getData(){
        return this._http.get(this._url+'/getallDataLM');     
    }
    getDetails(id){
        return this._http.get(this._url+'/getDetail/'+id);
    }
    getDetailsNM(id){
        return this._http.get(this._url+'/getDetailNM/'+id);
    }
    getStation(id){
        return this._http.get(this._url+'/getStation/'+id);
    }
    getStationNM(id){
        return this._http.get(this._url+'/getStationNM/'+id);
    }
    getParking(id){
        return this._http.get(this._url+'/getcar/'+id);
    }
    getParkingNM(id){
        return this._http.get(this._url+'/getcarNM/'+id);
    }
    getMap(id){
        return this._http.get(this._url+'/getMap/'+id);
    }
    getMapNM(id){
        return this._http.get(this._url+'/getMapNM/'+id);
    }
    //d
    getEquip(id){
        return this._http.get(this._url+'/getEquip/'+id);
    }
    getCuisine(id){
        return this._http.get(this._url+'/getCuisine/'+id);
    }
    getCouchage(id){
        return this._http.get(this._url+'/getCouchage/'+id);
    }
    getAmeubl(id){
        return this._http.get(this._url+'/getAmeubl/'+id);
    }
    //d
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