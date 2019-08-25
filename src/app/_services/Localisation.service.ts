import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";



@Injectable()
export class LocalisationService{
    private _url = environment.api_url + '/api/Locs';
    projects: any = [];
    project:any=[];
    

    constructor(
        private _http: HttpClient,
    ){}

    getLocs(){
        return this._http.get(this._url+'/allLoc');
    }
  

    AddLocation(data){
        return this._http.post(this._url + '/AddLoc', data);
    }
}