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

    getData(){
        return this._http.get<{message:string, house:any}>(this._url+'/getData');
        console.log(this._http.get(this._url+'/getData'));
        console.log();
       console.log("gggggKKKKK");
    }
  

    AddHV(data){
        return this._http.post(this._url + '/AddHouse', data , {reportProgress:true , observe:'events'});
    }
}