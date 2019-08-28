import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";



@Injectable()
export class HouseVService{
    private _url = environment.api_url + '/api/ToBuy';
    projects: any = [];
    project:any=[];
    

    constructor(
        private _http: HttpClient,
    ){}

    getLocs(){
        return this._http.get(this._url+'/allLoc');
    }
  

    AddHV(data){
        return this._http.post(this._url + '/AddHouse', data , {reportProgress:true , observe:'events'});
    }
}